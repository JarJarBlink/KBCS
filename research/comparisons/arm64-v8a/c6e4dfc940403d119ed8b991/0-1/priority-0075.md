# v16.0.1 → v16.0.2 · 最優先の変更候補 (75)

[一覧の目次](README.md)

<a id="compare-2d308af860e8474bef039c2bbe19d98e"></a>

### [`00b2c450`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2c/00b2c450.md) → [`00b2c4ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2c/00b2c4ec.md) FUN_00b2c4ec

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`0043b5bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b5bc.md) [`00b2d858`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2d/00b2d858.md) · 呼出先 24件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00442b38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442b38.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md)
- 新版 呼出元 2件 [`0043b5fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b5fc.md) [`00b2d8f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2d/00b2d8f4.md) · 呼出先 24件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00442b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442b78.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.12% / 新版 98.12%

優先判定に残った影響 `call_target` 2件, `store_value` 3件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00b2c6e8",
      "incomplete_value": false,
      "site": "00b2c6e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:438:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2c64c",
      "incomplete_value": false,
      "site": "00b2c64c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:368:8"
          ]
        ]
      ]
    },
    "ordinal": 33,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b2c7c4",
      "incomplete_value": true,
      "site": "00b2c7d0",
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
                "const:2b0000:8"
              ],
              [
                "leaf",
                "const:3f8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2c728",
      "incomplete_value": true,
      "site": "00b2c734",
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
                "const:2b0000:8"
              ],
              [
                "leaf",
                "const:454:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 46,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b2caf8",
      "incomplete_value": true,
      "site": "00b2cb08",
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
                "const:f4e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2ca5c",
      "incomplete_value": true,
      "site": "00b2ca6c",
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
                "const:faa:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 75,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b2c6e8",
      "DATA",
      [
        "storage",
        "00c8f368",
        null,
        "undefined *"
      ]
    ],
    [
      "00b2c7c4",
      "READ",
      [
        "storage",
        "002b0454",
        null,
        "string"
      ]
    ],
    [
      "00b2c860",
      "READ",
      [
        "storage",
        "00c8f390",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00b2c6e8",
      "DATA",
      [
        "storage",
        "00c8f438",
        null,
        "undefined *"
      ]
    ],
    [
      "00b2c7c4",
      "READ",
      [
        "storage",
        "002b03f8",
        null,
        "string"
      ]
    ],
    [
      "00b2c860",
      "READ",
      [
        "storage",
        "00c8f460",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2caf4 ["INT_ADD", "register:40f0:8", ["const:b2caf4:8", "const:4:8"]]
- 00b2caf4 ["CALL", null, ["ram:48ccf8:8"]]
+ 00b2cb90 ["INT_ADD", "register:40f0:8", ["const:b2cb90:8", "const:4:8"]]
+ 00b2cb90 ["CALL", null, ["ram:48cd38:8"]]
- 00b2cb0c ["INT_ADD", "register:40f0:8", ["const:b2cb0c:8", "const:4:8"]]
- 00b2cb0c ["CALL", null, ["callee:00c57f80:8"]]
+ 00b2cba8 ["INT_ADD", "register:40f0:8", ["const:b2cba8:8", "const:4:8"]]
+ 00b2cba8 ["CALL", null, ["callee:00c57f80:8"]]
- 00b2cba8 ["INT_ADD", "register:40f0:8", ["const:b2cba8:8", "const:4:8"]]
- 00b2cba8 ["CALL", null, ["ram:48ccf8:8"]]
+ 00b2cc44 ["INT_ADD", "register:40f0:8", ["const:b2cc44:8", "const:4:8"]]
+ 00b2cc44 ["CALL", null, ["ram:48cd38:8"]]
~~~


<a id="compare-83fbf822106bb96e01da78bc79c927d5"></a>

### [`00b2ce48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2c/00b2ce48.md) → [`00b2cee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2c/00b2cee4.md) FUN_00b2cee4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`0043af2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043af2c.md) [`0043b2ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b2ac.md) · 呼出先 23件 [`0043e94c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043e/0043e94c.md) [`0043f424`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043f/0043f424.md) [`0043f42c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043f/0043f42c.md) [`0043f438`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043f/0043f438.md) [`0046ca54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046ca54.md)
- 新版 呼出元 2件 [`0043af6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043af6c.md) [`0043b2ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b2ec.md) · 呼出先 23件 [`0043e98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e98c.md) [`0043f464`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f464.md) [`0043f46c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f46c.md) [`0043f478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f478.md) [`0046ca94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca94.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 97.14% / 新版 97.14%

優先判定に残った影響 `call_target` 1件, `store_destination` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b2cf2c",
      "incomplete_value": true,
      "site": "00b2cf48",
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
                "const:51c:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2ce90",
      "incomplete_value": true,
      "site": "00b2ceac",
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
                "const:4ed:8"
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
      "definition_site": "00b2cff0",
      "incomplete_value": true,
      "site": "00b2cff0",
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
            "const:28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2cf54",
      "incomplete_value": true,
      "site": "00b2cf54",
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
            "const:28:8"
          ]
        ]
      ]
    },
    "ordinal": 14,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b2cff4",
      "incomplete_value": true,
      "site": "00b2cff4",
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
            "const:24:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2cf58",
      "incomplete_value": true,
      "site": "00b2cf58",
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
            "const:24:8"
          ]
        ]
      ]
    },
    "ordinal": 15,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b2cf2c",
      "READ",
      [
        "storage",
        "002a94ed",
        null,
        "string"
      ]
    ],
    [
      "00b2cfec",
      "READ",
      [
        "storage",
        "00c9ab68",
        null,
        "pointer"
      ]
    ],
    [
      "00b2cff0",
      "WRITE",
      [
        "storage",
        "00ca4c98",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "00b2cf2c",
      "READ",
      [
        "storage",
        "002a951c",
        null,
        "string"
      ]
    ],
    [
      "00b2cfec",
      "READ",
      [
        "storage",
        "00c9ac38",
        null,
        "pointer"
      ]
    ],
    [
      "00b2cff0",
      "WRITE",
      [
        "storage",
        "00ca4d98",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2cff0 ["INT_ADD", "register:40f0:8", ["const:b2cff0:8", "const:4:8"]]
- 00b2cff0 ["CALL", null, ["callee:00b2bcf8:8"]]
+ 00b2d08c ["INT_ADD", "register:40f0:8", ["const:b2d08c:8", "const:4:8"]]
+ 00b2d08c ["CALL", null, ["callee:00b2bcf8:8"]]
- 00b2d1e8 ["INT_ADD", "register:40f0:8", ["const:b2d1e8:8", "const:4:8"]]
- 00b2d1e8 ["CALL", null, ["ram:48ccf8:8"]]
+ 00b2d284 ["INT_ADD", "register:40f0:8", ["const:b2d284:8", "const:4:8"]]
+ 00b2d284 ["CALL", null, ["ram:48cd38:8"]]
- 00b2ce6c ["INT_ADD", "register:40f0:8", ["const:b2ce6c:8", "const:4:8"]]
- 00b2ce6c ["CALL", null, ["callee:00588eac:8"]]
+ 00b2cf08 ["INT_ADD", "register:40f0:8", ["const:b2cf08:8", "const:4:8"]]
+ 00b2cf08 ["CALL", null, ["callee:00588eac:8"]]
~~~


<a id="compare-36a70fa4bf39f8fe86ad6a5137ec307d"></a>

### [`00b2d338`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2d/00b2d338.md) → [`00b2d3d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2d/00b2d3d4.md) FUN_00b2d3d4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0043b594`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b594.md) · 呼出先 8件 [`0043e94c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043e/0043e94c.md) [`0043f42c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043f/0043f42c.md) [`0043f438`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043f/0043f438.md) [`004440e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00444/004440e0.md) [`004466f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00446/004466f8.md)
- 新版 呼出元 1件 [`0043b5d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b5d4.md) · 呼出先 8件 [`0043e98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e98c.md) [`0043f46c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f46c.md) [`0043f478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f478.md) [`00444120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00444/00444120.md) [`00446738`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00446/00446738.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b2d340 ["INT_RIGHT", "tmp:0:4", ["register:4008:4", "const:0:4"]]
- 00b2d340 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00b2d340 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00b2d340 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 00b2d3dc ["INT_RIGHT", "tmp:0:4", ["register:4008:4", "const:0:4"]]
+ 00b2d3dc ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00b2d3dc ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00b2d3dc ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
- 00b2d348 ["INT_ADD", "register:40f0:8", ["const:b2d348:8", "const:4:8"]]
- 00b2d348 ["CALL", null, ["callee:0066d11c:8"]]
+ 00b2d3e4 ["INT_ADD", "register:40f0:8", ["const:b2d3e4:8", "const:4:8"]]
+ 00b2d3e4 ["CALL", null, ["callee:0066d11c:8"]]
- 00b2d34c ["INT_ADD", "register:40f0:8", ["const:b2d34c:8", "const:4:8"]]
- 00b2d34c ["CALL", null, ["callee:00851550:8"]]
+ 00b2d3e8 ["INT_ADD", "register:40f0:8", ["const:b2d3e8:8", "const:4:8"]]
+ 00b2d3e8 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-22aea8d9f490d9caf4ddf783fa2217c0"></a>

### [`00b2d3d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2d/00b2d3d8.md) → [`00b2d474`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2d/00b2d474.md) FUN_00b2d474

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
      "unmatched:00b2d3f0",
      "DATA",
      [
        "storage",
        "00c8f268",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00b2d3f4",
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
      "00b2d48c",
      "DATA",
      [
        "storage",
        "00c8f338",
        null,
        "undefined *"
      ]
    ],
    [
      "00b2d490",
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
- 00b2d3e4 ["INT_ADD", "register:40f0:8", ["const:b2d3e4:8", "const:4:8"]]
- 00b2d3e4 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b2d480 ["INT_ADD", "register:40f0:8", ["const:b2d480:8", "const:4:8"]]
+ 00b2d480 ["CALL", null, ["callee:00c57f60:8"]]
- 00b2d3ec ["COPY", "tmp:0:8", ["const:268:8"]]
- 00b2d3ec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b2d3ec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b2d3ec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00b2d3f0 ["COPY", "tmp:0:8", ["register:4000:8"]]
- 00b2d3f0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-d10c310a99717e1e90ff8f51cd75dd60"></a>

### [`00b2d3fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2d/00b2d3fc.md) → [`00b2d498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2d/00b2d498.md) FUN_00b2d498

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
      "unmatched:00b2d404",
      "DATA",
      [
        "storage",
        "00c8f268",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00b2d4a0",
      "DATA",
      [
        "storage",
        "00c8f338",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2d3fc ["COPY", "register:4040:8", ["const:c8f000:8"]]
- 00b2d400 ["COPY", "tmp:0:8", ["const:268:8"]]
- 00b2d400 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b2d400 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b2d400 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00b2d404 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 00b2d404 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-8f2fa7d5a4d373da828ac55560418b19"></a>

### [`00b2d45c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2d/00b2d45c.md) → [`00b2d4f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2d/00b2d4f8.md) FUN_00b2d4f8

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
      "definition_site": "00b2d50c",
      "incomplete_value": false,
      "site": "00b2d510",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:3b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2d470",
      "incomplete_value": false,
      "site": "00b2d474",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:2e8:8"
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
      "00b2d510",
      "DATA",
      [
        "storage",
        "00c8f2e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00b2d510",
      "DATA",
      [
        "storage",
        "00c8f3b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2d468 ["INT_ADD", "register:40f0:8", ["const:b2d468:8", "const:4:8"]]
- 00b2d468 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b2d504 ["INT_ADD", "register:40f0:8", ["const:b2d504:8", "const:4:8"]]
+ 00b2d504 ["CALL", null, ["callee:00c57f60:8"]]
- 00b2d470 ["COPY", "tmp:0:8", ["const:2e8:8"]]
- 00b2d470 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b2d470 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b2d470 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b2d50c ["COPY", "tmp:0:8", ["const:3b8:8"]]
+ 00b2d50c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b2d50c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b2d50c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6b90e9409fbeb653ab0cc4c014796438"></a>

### [`00b2d480`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2d/00b2d480.md) → [`00b2d51c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2d/00b2d51c.md) FUN_00b2d51c

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
      "definition_site": "00b2d520",
      "incomplete_value": false,
      "site": "00b2d524",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:3b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2d484",
      "incomplete_value": false,
      "site": "00b2d488",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:2e8:8"
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
      "00b2d524",
      "DATA",
      [
        "storage",
        "00c8f2e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00b2d524",
      "DATA",
      [
        "storage",
        "00c8f3b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2d484 ["COPY", "tmp:0:8", ["const:2e8:8"]]
- 00b2d484 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b2d484 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b2d484 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b2d520 ["COPY", "tmp:0:8", ["const:3b8:8"]]
+ 00b2d520 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b2d520 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b2d520 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e4514fc1757dd3e7b035614c114e80cb"></a>

### [`00b2d4dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2d/00b2d4dc.md) → [`00b2d578`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2d/00b2d578.md) FUN_00b2d578

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00b2c450`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2c/00b2c450.md) · 呼出先 4件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00b2d6e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2d/00b2d6e0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00b2c4ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2c/00b2c4ec.md) · 呼出先 4件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00b2d77c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2d/00b2d77c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 97.64% / 新版 97.64%

優先判定に残った影響 `return_value_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "00b2d6ac",
      "incomplete_value": true,
      "site": "00b2d6c8",
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
      "unmatched:00b2d6a4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b2d748"
      ]
    ],
    [
      "unmatched:00b2d64c",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00b2d740",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b2d748"
      ]
    ],
    [
      "00b2d6e8",
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
- 00b2d524 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00b2d524 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 00b2d524 ["CBRANCH", null, ["local:b30:8", "tmp:1:1"]]
+ 00b2d5c0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00b2d5c0 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
+ 00b2d5c0 ["CBRANCH", null, ["local:b31:8", "tmp:1:1"]]
- 00b2d560 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00b2d560 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 00b2d560 ["CBRANCH", null, ["local:b31:8", "tmp:1:1"]]
+ 00b2d5fc ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00b2d5fc ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
+ 00b2d5fc ["CBRANCH", null, ["local:b32:8", "tmp:1:1"]]
- 00b2d56c ["INT_ADD", "register:40f0:8", ["const:b2d56c:8", "const:4:8"]]
- 00b2d56c ["CALL", null, ["callee:00c57f60:8"]]
+ 00b2d608 ["INT_ADD", "register:40f0:8", ["const:b2d608:8", "const:4:8"]]
+ 00b2d608 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-f417eef43a25d91a38e4b94b2c640609"></a>

### [`00b2d6e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2d/00b2d6e0.md) → [`00b2d77c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2d/00b2d77c.md) FUN_00b2d77c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b2d4dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2d/00b2d4dc.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`00b2d578`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2d/00b2d578.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b2d788",
      "incomplete_value": false,
      "site": "00b2d78c",
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
      "definition_site": "00b2d6ec",
      "incomplete_value": false,
      "site": "00b2d6f0",
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
      "00b2d788",
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
      "00b2d788",
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
- 00b2d6f0 ["INT_ADD", "register:40f0:8", ["const:b2d6f0:8", "const:4:8"]]
- 00b2d6f0 ["CALL", null, ["callee:0043b7b8:8"]]
+ 00b2d78c ["INT_ADD", "register:40f0:8", ["const:b2d78c:8", "const:4:8"]]
+ 00b2d78c ["CALL", null, ["callee:0043b7b8:8"]]
- 00b2d6ec ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 00b2d6ec ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b2d6ec ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b2d6ec ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b2d788 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 00b2d788 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b2d788 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b2d788 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-3dd7a4e326b0c6182403c6be48f1483b"></a>

### [`00b2d6f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2d/00b2d6f4.md) → [`00b2d790`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2d/00b2d790.md) FUN_00b2d790

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 62.50% / 新版 62.50%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b2d700",
      "DATA",
      [
        "storage",
        "00c8f368",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00b2d79c",
      "DATA",
      [
        "storage",
        "00c8f438",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2d6f8 ["COPY", "register:4048:8", ["const:c8f000:8"]]
- 00b2d6fc ["COPY", "tmp:0:8", ["const:368:8"]]
- 00b2d6fc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00b2d6fc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00b2d6fc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00b2d700 ["COPY", "tmp:0:8", ["register:4000:8"]]
- 00b2d700 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
~~~


<a id="compare-7597b0571c954025fcd305b95899f405"></a>

### [`00b2d714`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2d/00b2d714.md) → [`00b2d7b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2d/00b2d7b0.md) FUN_00b2d7b0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b2d720",
      "DATA",
      [
        "storage",
        "00c8f368",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00b2d7bc",
      "DATA",
      [
        "storage",
        "00c8f438",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2d714 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:10:8"]]
- 00b2d714 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00b2d714 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
- 00b2d718 ["COPY", "register:4048:8", ["const:c8f000:8"]]
- 00b2d71c ["COPY", "tmp:0:8", ["const:368:8"]]
- 00b2d71c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00b2d71c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00b2d71c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-af1cf22027fcb4c11d019ff4aa6bc353"></a>

### [`00b2d754`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2d/00b2d754.md) → [`00b2d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2d/00b2d7f0.md) FUN_00b2d7f0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.31% / 新版 92.31%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00b2d820",
      "incomplete_value": false,
      "site": "00b2d820",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:438:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2d784",
      "incomplete_value": false,
      "site": "00b2d784",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:368:8"
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
      "00b2d820",
      "DATA",
      [
        "storage",
        "00c8f368",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00b2d820",
      "DATA",
      [
        "storage",
        "00c8f438",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2d768 ["INT_ADD", "register:40f0:8", ["const:b2d768:8", "const:4:8"]]
- 00b2d768 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b2d804 ["INT_ADD", "register:40f0:8", ["const:b2d804:8", "const:4:8"]]
+ 00b2d804 ["CALL", null, ["callee:00c57f60:8"]]
- 00b2d778 ["COPY", "tmp:0:8", ["const:368:8"]]
- 00b2d778 ["INT_CARRY", "register:105:1", ["register:4058:8", "tmp:0:8"]]
- 00b2d778 ["INT_SCARRY", "register:106:1", ["register:4058:8", "tmp:0:8"]]
- 00b2d778 ["INT_ADD", "tmp:1:8", ["register:4058:8", "tmp:0:8"]]
+ 00b2d814 ["COPY", "tmp:0:8", ["const:438:8"]]
+ 00b2d814 ["INT_CARRY", "register:105:1", ["register:4058:8", "tmp:0:8"]]
+ 00b2d814 ["INT_SCARRY", "register:106:1", ["register:4058:8", "tmp:0:8"]]
+ 00b2d814 ["INT_ADD", "tmp:1:8", ["register:4058:8", "tmp:0:8"]]
- 00b2d7a8 ["INT_ADD", "register:40f0:8", ["const:b2d7a8:8", "const:4:8"]]
- 00b2d7a8 ["CALL", null, ["callee:0043bb60:8"]]
+ 00b2d844 ["INT_ADD", "register:40f0:8", ["const:b2d844:8", "const:4:8"]]
+ 00b2d844 ["CALL", null, ["callee:0043bb60:8"]]
~~~


<a id="compare-f6c6d140fcfe8c1fc7e5d0d9b6a9f923"></a>

### [`00b2d7d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2d/00b2d7d0.md) → [`00b2d86c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2d/00b2d86c.md) FUN_00b2d86c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00b2d878",
      "incomplete_value": false,
      "site": "00b2d878",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:438:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2d7dc",
      "incomplete_value": false,
      "site": "00b2d7dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:368:8"
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
      "00b2d878",
      "DATA",
      [
        "storage",
        "00c8f368",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00b2d878",
      "DATA",
      [
        "storage",
        "00c8f438",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2d7d8 ["COPY", "tmp:0:8", ["const:368:8"]]
- 00b2d7d8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00b2d7d8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00b2d7d8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00b2d874 ["COPY", "tmp:0:8", ["const:438:8"]]
+ 00b2d874 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00b2d874 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00b2d874 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-9f2a2cda8a02860e94ca4d2d14c62490"></a>

### [`00b2d890`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2d/00b2d890.md) → [`00b2d92c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2d/00b2d92c.md) _INIT_260

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 6件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00bc47f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc4/00bc47f0.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00bc488c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc4/00bc488c.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 71.15% / 新版 71.15%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 15件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b2dbac",
      "incomplete_value": false,
      "site": "00b2dbdc",
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
            "const:f88:8"
          ]
        ]
      ]
    },
    "old": null,
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
      "unmatched:00b2d8c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b2d8cc",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b2d8d4",
      "WRITE",
      [
        "storage",
        "Stack[-0xff]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b2d95c",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00b2d968",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00b2d970",
      "WRITE",
      [
        "storage",
        "Stack[-0xff]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2db40 ["INT_ADD", "register:40f0:8", ["const:b2db40:8", "const:4:8"]]
- 00b2db40 ["CALL", null, ["callee:00c57f00:8"]]
+ 00b2dbdc ["INT_ADD", "register:40f0:8", ["const:b2dbdc:8", "const:4:8"]]
+ 00b2dbdc ["CALL", null, ["callee:00c57f00:8"]]
- 00b2d8b0 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:28:8"]]
- 00b2d8b0 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
- 00b2d8b4 ["COPY", "register:4040:8", ["const:24:8"]]
~~~


<a id="compare-b7ca5f836616a2a8ca1e104e9de43cc4"></a>

### [`00b2dc9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2d/00b2dc9c.md) → [`00b2dd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2d/00b2dd38.md) FUN_00b2dd38

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0067e19c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0067e/0067e19c.md) · 呼出先 2件 [`00b3cad8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3c/00b3cad8.md) [`00c58090`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58090.md)
- 新版 呼出元 1件 [`0067e1dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0067e/0067e1dc.md) · 呼出先 2件 [`00b3cb74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3c/00b3cb74.md) [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 70.59% / 新版 70.59%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b2dd54",
      "incomplete_value": true,
      "site": "00b2dd64",
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
            "const:a8:8"
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
    "new": {
      "definition_site": "00b2dd58",
      "incomplete_value": false,
      "site": "00b2dd64",
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
      "unmatched:00b2dcc4",
      "DATA",
      [
        "storage",
        "00c74830",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b2dd60",
      "DATA",
      [
        "storage",
        "00c74900",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2dcc8 ["INT_ADD", "register:40f0:8", ["const:b2dcc8:8", "const:4:8"]]
- 00b2dcc8 ["CALL", null, ["callee:00c58160:8"]]
+ 00b2dd64 ["INT_ADD", "register:40f0:8", ["const:b2dd64:8", "const:4:8"]]
+ 00b2dd64 ["CALL", null, ["callee:00c58160:8"]]
- 00b2dcac ["INT_ADD", "register:40f0:8", ["const:b2dcac:8", "const:4:8"]]
- 00b2dcac ["CALL", null, ["callee:00b3cb74:8"]]
+ 00b2dd48 ["INT_ADD", "register:40f0:8", ["const:b2dd48:8", "const:4:8"]]
+ 00b2dd48 ["CALL", null, ["callee:00b3cb74:8"]]
- 00b2dcb4 ["COPY", "tmp:0:8", ["const:830:8"]]
- 00b2dcb4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b2dcb4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b2dcb4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-fc69d35df2e29198b5eefc63ae98e6f1"></a>

### [`00b2dce0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2d/00b2dce0.md) → [`00b2dd7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2d/00b2dd7c.md) FUN_00b2dd7c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 4件 [`00963fd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00963/00963fd8.md) [`00ac54f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ac5/00ac54f0.md) [`00ac6c94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ac6/00ac6c94.md) [`00ac7204`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ac7/00ac7204.md) · 呼出先 11件 [`0047e60c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e60c.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00864160`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00864/00864160.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 4件 [`0096402c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00964/0096402c.md) [`00ac5560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ac5/00ac5560.md) [`00ac6d04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ac6/00ac6d04.md) [`00ac7274`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ac7/00ac7274.md) · 呼出先 11件 [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008641b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00864/008641b8.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 30.77% / 新版 30.77%

優先判定に残った影響 `call_argument_candidate` 11件, `unresolved_branch_alignment` 8件, `unresolved_call_alignment` 23件, `unresolved_store_alignment` 105件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b2de30",
      "incomplete_value": true,
      "site": "00b2de44",
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
            "const:0:8"
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
      "definition_site": "00b2de38",
      "incomplete_value": true,
      "site": "00b2de44",
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
    "old": null,
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b2de3c",
      "incomplete_value": true,
      "site": "00b2de44",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b2dddc",
      "READ",
      [
        "storage",
        "00ca4f38",
        null,
        "undefined1"
      ]
    ],
    [
      "00b2dde0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b2e300"
      ]
    ],
    [
      "unmatched:00b2dd50",
      "WRITE",
      [
        "storage",
        "Stack[-0x65]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b2dddc",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "00b2dde0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b2e39c"
      ]
    ],
    [
      "00b2ddec",
      "WRITE",
      [
        "storage",
        "Stack[-0x65]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2dda8 ["INT_ADD", "register:40f0:8", ["const:b2dda8:8", "const:4:8"]]
- 00b2dda8 ["CALL", null, ["callee:0047e64c:8"]]
+ 00b2de44 ["INT_ADD", "register:40f0:8", ["const:b2de44:8", "const:4:8"]]
+ 00b2de44 ["CALL", null, ["callee:0047e64c:8"]]
- 00b2de38 ["INT_ADD", "register:40f0:8", ["const:b2de38:8", "const:4:8"]]
- 00b2de38 ["CALL", null, ["callee:0047e64c:8"]]
+ 00b2ded4 ["INT_ADD", "register:40f0:8", ["const:b2ded4:8", "const:4:8"]]
+ 00b2ded4 ["CALL", null, ["callee:0047e64c:8"]]
+ 00b2de38 ["COPY", "tmp:0:8", ["const:20:8"]]
+ 00b2de38 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
+ 00b2de38 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
+ 00b2de38 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-add1e2828e62bbe95b84d939f7c8a728"></a>

### [`00b2e4b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2e/00b2e4b8.md) → [`00b2e554`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2e/00b2e554.md) FUN_00b2e554

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 5件 [`0090dc08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0090d/0090dc08.md) [`00963fd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00963/00963fd8.md) [`00ac54f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ac5/00ac54f0.md) [`00ac6c94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ac6/00ac6c94.md) [`00ac7204`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ac7/00ac7204.md) · 呼出先 24件 [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0046e538`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e538.md) [`0047e60c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e60c.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md)
- 新版 呼出元 5件 [`0090dc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090d/0090dc5c.md) [`0096402c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00964/0096402c.md) [`00ac5560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ac5/00ac5560.md) [`00ac6d04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ac6/00ac6d04.md) [`00ac7274`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ac7/00ac7274.md) · 呼出先 24件 [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046e578`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e578.md) [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 62.11% / 新版 62.11%

優先判定に残った影響 `call_argument_candidate` 11件, `call_target` 1件, `unresolved_branch_alignment` 14件, `unresolved_call_alignment` 25件, `unresolved_store_alignment` 78件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b2e61c",
      "incomplete_value": false,
      "site": "00b2e630",
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
      "definition_site": "00b2e580",
      "incomplete_value": false,
      "site": "00b2e594",
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
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b2e794",
      "incomplete_value": false,
      "site": "00b2e7a8",
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
      "definition_site": "00b2e6f8",
      "incomplete_value": false,
      "site": "00b2e70c",
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
    "ordinal": 10,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b2e914",
      "incomplete_value": false,
      "site": "00b2e928",
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
      "definition_site": "00b2e878",
      "incomplete_value": false,
      "site": "00b2e88c",
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
    "ordinal": 25,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b2e520",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b2eb48"
      ]
    ],
    [
      "unmatched:00b2e52c",
      "READ",
      [
        "storage",
        "00ca4f38",
        null,
        "undefined1"
      ]
    ],
    [
      "unmatched:00b2e530",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b2ef70"
      ]
    ]
  ],
  "added": [
    [
      "00b2e5bc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b2eb48"
      ]
    ],
    [
      "00b2e5c8",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "00b2e5cc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b2f00c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2e594 ["INT_ADD", "register:40f0:8", ["const:b2e594:8", "const:4:8"]]
- 00b2e594 ["CALL", null, ["callee:0047e64c:8"]]
+ 00b2e630 ["INT_ADD", "register:40f0:8", ["const:b2e630:8", "const:4:8"]]
+ 00b2e630 ["CALL", null, ["callee:0047e64c:8"]]
- 00b2e630 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00b2e630 ["CBRANCH", null, ["local:b63:8", "tmp:0:1"]]
+ 00b2e6cc ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00b2e6cc ["CBRANCH", null, ["local:b62:8", "tmp:0:1"]]
- 00b2e70c ["INT_ADD", "register:40f0:8", ["const:b2e70c:8", "const:4:8"]]
- 00b2e70c ["CALL", null, ["callee:0047e64c:8"]]
+ 00b2e7a8 ["INT_ADD", "register:40f0:8", ["const:b2e7a8:8", "const:4:8"]]
+ 00b2e7a8 ["CALL", null, ["callee:0047e64c:8"]]
~~~


<a id="compare-29e005dc9edfbea526c17c8992d8b17b"></a>

### [`00b2f34c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2f/00b2f34c.md) → [`00b2f3e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2f/00b2f3e8.md) FUN_00b2f3e8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0097e0c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0097e/0097e0c4.md) · 呼出先 2件 [`00695bac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00695/00695bac.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 2件 [`0096402c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00964/0096402c.md) [`0097e118`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097e/0097e118.md) · 呼出先 2件 [`00695c04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00695/00695c04.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 92.59% / 新版 92.59%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b2f400",
      "incomplete_value": false,
      "site": "00b2f428",
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
    "old": {
      "definition_site": "00b2f364",
      "incomplete_value": false,
      "site": "00b2f38c",
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
            "const:6f5:8"
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
      "00b2f400",
      "PARAM",
      [
        "storage",
        "002c86f5",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b2f400",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2f38c ["INT_ADD", "register:40f0:8", ["const:b2f38c:8", "const:4:8"]]
- 00b2f38c ["CALL", null, ["callee:00695c04:8"]]
+ 00b2f428 ["INT_ADD", "register:40f0:8", ["const:b2f428:8", "const:4:8"]]
+ 00b2f428 ["CALL", null, ["callee:00695c04:8"]]
- 00b2f364 ["COPY", "tmp:0:8", ["const:6f5:8"]]
- 00b2f364 ["INT_CARRY", "register:105:1", ["register:4010:8", "tmp:0:8"]]
- 00b2f364 ["INT_SCARRY", "register:106:1", ["register:4010:8", "tmp:0:8"]]
- 00b2f364 ["INT_ADD", "tmp:1:8", ["register:4010:8", "tmp:0:8"]]
+ 00b2f400 ["COPY", "tmp:0:8", ["const:735:8"]]
+ 00b2f400 ["INT_CARRY", "register:105:1", ["register:4010:8", "tmp:0:8"]]
+ 00b2f400 ["INT_SCARRY", "register:106:1", ["register:4010:8", "tmp:0:8"]]
+ 00b2f400 ["INT_ADD", "tmp:1:8", ["register:4010:8", "tmp:0:8"]]
- 00b2f3a0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00b2f3a0 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00b2f43c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00b2f43c ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
~~~


<a id="compare-27fc570620444333e5bf07a3268b373e"></a>

### [`00b2f3b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2f/00b2f3b8.md) → [`00b2f454`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2f/00b2f454.md) _INIT_261

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 77.40% / 新版 77.40%

優先判定に残った影響 `call_argument_candidate` 7件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b2f504",
      "incomplete_value": true,
      "site": "00b2f518",
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
      "definition_site": "00b2f50c",
      "incomplete_value": true,
      "site": "00b2f518",
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
      "definition_site": "00b2f510",
      "incomplete_value": true,
      "site": "00b2f518",
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
      "unmatched:00b2f3e8",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b2f3f4",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b2f3fc",
      "WRITE",
      [
        "storage",
        "Stack[-0xff]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b2f484",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00b2f490",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00b2f498",
      "WRITE",
      [
        "storage",
        "Stack[-0xff]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2f518 ["INT_ADD", "register:40f0:8", ["const:b2f518:8", "const:4:8"]]
- 00b2f518 ["CALL", null, ["callee:0043b838:8"]]
+ 00b2f5b4 ["INT_ADD", "register:40f0:8", ["const:b2f5b4:8", "const:4:8"]]
+ 00b2f5b4 ["CALL", null, ["callee:0043b838:8"]]
- 00b2f568 ["INT_ADD", "register:40f0:8", ["const:b2f568:8", "const:4:8"]]
- 00b2f568 ["CALL", null, ["callee:0043b838:8"]]
+ 00b2f604 ["INT_ADD", "register:40f0:8", ["const:b2f604:8", "const:4:8"]]
+ 00b2f604 ["CALL", null, ["callee:0043b838:8"]]
- 00b2f5ec ["INT_ADD", "register:40f0:8", ["const:b2f5ec:8", "const:4:8"]]
- 00b2f5ec ["CALL", null, ["callee:00c57f00:8"]]
+ 00b2f688 ["INT_ADD", "register:40f0:8", ["const:b2f688:8", "const:4:8"]]
+ 00b2f688 ["CALL", null, ["callee:00c57f00:8"]]
~~~


<a id="compare-1500f9f43c16d48008dacbc2459cafe4"></a>

### [`00b2f748`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2f/00b2f748.md) → [`00b2f7e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2f/00b2f7e4.md) FUN_00b2f7e4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 2件 [`00a06d9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a06/00a06d9c.md) [`00a957c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a95/00a957c8.md) · 呼出先 1件 [`00b3be60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3b/00b3be60.md)
- 新版 呼出元 2件 [`00a06df0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06df0.md) [`00a95838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a95/00a95838.md) · 呼出先 1件 [`00b3befc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3befc.md)

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b2f820",
      "incomplete_value": false,
      "site": "00b2f820",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca3000:8"
          ],
          [
            "leaf",
            "const:f6c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2f784",
      "incomplete_value": false,
      "site": "00b2f784",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca3000:8"
          ],
          [
            "leaf",
            "const:e9c:8"
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
      "00b2f820",
      "WRITE",
      [
        "storage",
        "00ca3e9c",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b2f820",
      "WRITE",
      [
        "storage",
        "00ca3f6c",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2f784 ["COPY", "tmp:0:4", ["register:4048:4"]]
- 00b2f784 ["INT_ADD", "tmp:1:8", ["register:4040:8", "const:e9c:8"]]
- 00b2f784 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b2f820 ["COPY", "tmp:0:4", ["register:4048:4"]]
+ 00b2f820 ["INT_ADD", "tmp:1:8", ["register:4040:8", "const:f6c:8"]]
+ 00b2f820 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b2f778 ["INT_ADD", "register:40f0:8", ["const:b2f778:8", "const:4:8"]]
- 00b2f778 ["CALL", null, ["callee:00b3befc:8"]]
+ 00b2f814 ["INT_ADD", "register:40f0:8", ["const:b2f814:8", "const:4:8"]]
+ 00b2f814 ["CALL", null, ["callee:00b3befc:8"]]
~~~


<a id="compare-561271a95c8eee1849d46cffd1228d48"></a>

### [`00b2f790`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2f/00b2f790.md) → [`00b2f82c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2f/00b2f82c.md) FUN_00b2f82c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0075d588`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0075d/0075d588.md) · 呼出先 2件 [`00b3be60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3b/00b3be60.md) [`00b3be94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3b/00b3be94.md)
- 新版 呼出元 1件 [`0075d5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075d/0075d5e0.md) · 呼出先 2件 [`00b3befc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3befc.md) [`00b3bf30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3bf30.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 79.17% / 新版 79.17%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b2f7e0",
      "WRITE",
      [
        "storage",
        "00ca3e9c",
        null,
        "undefined1"
      ]
    ],
    [
      "unmatched:00b2f7e4",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b2f7e8",
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
      "00b2f87c",
      "WRITE",
      [
        "storage",
        "00ca3f6c",
        null,
        "undefined1"
      ]
    ],
    [
      "00b2f880",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b2f884",
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
- 00b2f7a4 ["INT_ADD", "register:40f0:8", ["const:b2f7a4:8", "const:4:8"]]
- 00b2f7a4 ["CALL", null, ["callee:00b3bf30:8"]]
+ 00b2f840 ["INT_ADD", "register:40f0:8", ["const:b2f840:8", "const:4:8"]]
+ 00b2f840 ["CALL", null, ["callee:00b3bf30:8"]]
- 00b2f7c0 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
- 00b2f7c0 ["COPY", "tmp:1:4", ["register:4048:4"]]
- 00b2f7c0 ["CBRANCH", null, ["const:2:4", "tmp:0:1"]]
- 00b2f7c0 ["COPY", "tmp:1:4", ["register:4050:4"]]
- 00b2f7d4 ["INT_ADD", "register:40f0:8", ["const:b2f7d4:8", "const:4:8"]]
- 00b2f7d4 ["CALL", null, ["callee:00b3befc:8"]]
+ 00b2f870 ["INT_ADD", "register:40f0:8", ["const:b2f870:8", "const:4:8"]]
+ 00b2f870 ["CALL", null, ["callee:00b3befc:8"]]
~~~


<a id="compare-31b30cccb7a41049faa685f0050bbba9"></a>

### [`00b2f7f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2f/00b2f7f0.md) → [`00b2f88c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2f/00b2f88c.md) FUN_00b2f88c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 17件 [`0060a8a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0060a/0060a8a0.md) [`00664b30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00664/00664b30.md) [`00664bcc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00664/00664bcc.md) [`00664d1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00664/00664d1c.md) [`0070d3b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0070d/0070d3b8.md) · 呼出先 1件 [`00b3be94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3b/00b3be94.md)
- 新版 呼出元 18件 [`0060a8e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0060a/0060a8e0.md) [`00664b70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664b70.md) [`00664c0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664c0c.md) [`00664d5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664d5c.md) [`0070d410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070d/0070d410.md) · 呼出先 1件 [`00b3bf30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3bf30.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 66.67% / 新版 66.67%

アドレスに依存する影響 `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b2f80c",
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
      "00b2f8a8",
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
- 00b2f7f8 ["INT_ADD", "register:40f0:8", ["const:b2f7f8:8", "const:4:8"]]
- 00b2f7f8 ["CALL", null, ["callee:00b3bf30:8"]]
+ 00b2f894 ["INT_ADD", "register:40f0:8", ["const:b2f894:8", "const:4:8"]]
+ 00b2f894 ["CALL", null, ["callee:00b3bf30:8"]]
- 00b2f808 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
- 00b2f808 ["COPY", "tmp:1:4", ["register:4048:4"]]
- 00b2f808 ["CBRANCH", null, ["const:2:4", "tmp:0:1"]]
- 00b2f808 ["COPY", "tmp:1:4", ["register:4040:4"]]
- 00b2f80c ["COPY", "tmp:0:8", ["register:8:8"]]
- 00b2f80c ["INT_ADD", "register:8:8", ["register:8:8", "const:10:8"]]
- 00b2f80c ["LOAD", "tmp:1:8", ["const:1b1:8", "tmp:0:8"]]
- 00b2f80c ["INT_ADD", "tmp:2:8", ["tmp:0:8", "const:8:8"]]
~~~


<a id="compare-9cf1c3e4b3b8b4b3750a9ee8e41a7de6"></a>

### [`00b2f814`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2f/00b2f814.md) → [`00b2f8b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2f/00b2f8b0.md) FUN_00b2f8b0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0075d588`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0075d/0075d588.md) · 呼出先 2件 [`00b3be60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3b/00b3be60.md) [`00b3be94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3b/00b3be94.md)
- 新版 呼出元 1件 [`0075d5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075d/0075d5e0.md) · 呼出先 2件 [`00b3befc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3befc.md) [`00b3bf30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3bf30.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 85.19% / 新版 85.19%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b2f870",
      "WRITE",
      [
        "storage",
        "00ca3e9c",
        null,
        "undefined1"
      ]
    ],
    [
      "unmatched:00b2f874",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b2f878",
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
      "00b2f90c",
      "WRITE",
      [
        "storage",
        "00ca3f6c",
        null,
        "undefined1"
      ]
    ],
    [
      "00b2f910",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b2f914",
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
- 00b2f828 ["INT_ADD", "register:40f0:8", ["const:b2f828:8", "const:4:8"]]
- 00b2f828 ["CALL", null, ["callee:00b3bf30:8"]]
+ 00b2f8c4 ["INT_ADD", "register:40f0:8", ["const:b2f8c4:8", "const:4:8"]]
+ 00b2f8c4 ["CALL", null, ["callee:00b3bf30:8"]]
- 00b2f864 ["INT_ADD", "register:40f0:8", ["const:b2f864:8", "const:4:8"]]
- 00b2f864 ["CALL", null, ["callee:00b3befc:8"]]
+ 00b2f900 ["INT_ADD", "register:40f0:8", ["const:b2f900:8", "const:4:8"]]
+ 00b2f900 ["CALL", null, ["callee:00b3befc:8"]]
- 00b2f870 ["COPY", "tmp:0:4", ["register:4048:4"]]
- 00b2f870 ["INT_ADD", "tmp:1:8", ["register:4040:8", "const:e9c:8"]]
- 00b2f870 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
~~~


<a id="compare-d570fe49388f64847b0a2c64f42227a4"></a>

### [`00b2f8a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2f/00b2f8a8.md) → [`00b2f944`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2f/00b2f944.md) FUN_00b2f944

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`00759234`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00759/00759234.md) [`0098dc08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0098d/0098dc08.md) [`00996c1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00996/00996c1c.md) [`00a06d9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a06/00a06d9c.md) · 呼出先 2件 [`00b3be60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3b/00b3be60.md) [`00b3be94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3b/00b3be94.md)
- 新版 呼出元 4件 [`0075928c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00759/0075928c.md) [`0098dc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098d/0098dc5c.md) [`00996c70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00996/00996c70.md) [`00a06df0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06df0.md) · 呼出先 2件 [`00b3befc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3befc.md) [`00b3bf30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3bf30.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, constant, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 96.97% / 新版 96.97%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b2f908",
      "incomplete_value": true,
      "site": "00b2f90c",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "INT_OR",
            "4",
            [
              [
                "live",
                "register:4040:4"
              ],
              [
                "live",
                "register:4048:4"
              ]
            ]
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
      "unmatched:00b2f918",
      "WRITE",
      [
        "storage",
        "00ca3e9c",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b2f9b4",
      "WRITE",
      [
        "storage",
        "00ca3f6c",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2f90c ["INT_ADD", "register:40f0:8", ["const:b2f90c:8", "const:4:8"]]
- 00b2f90c ["CALL", null, ["callee:00b3befc:8"]]
+ 00b2f9a8 ["INT_ADD", "register:40f0:8", ["const:b2f9a8:8", "const:4:8"]]
+ 00b2f9a8 ["CALL", null, ["callee:00b3befc:8"]]
- 00b2f8c0 ["INT_ADD", "register:40f0:8", ["const:b2f8c0:8", "const:4:8"]]
- 00b2f8c0 ["CALL", null, ["callee:00b3bf30:8"]]
+ 00b2f95c ["INT_ADD", "register:40f0:8", ["const:b2f95c:8", "const:4:8"]]
+ 00b2f95c ["CALL", null, ["callee:00b3bf30:8"]]
- 00b2f8e0 ["INT_ADD", "register:40f0:8", ["const:b2f8e0:8", "const:4:8"]]
- 00b2f8e0 ["CALL", null, ["callee:00b3bf30:8"]]
+ 00b2f97c ["INT_ADD", "register:40f0:8", ["const:b2f97c:8", "const:4:8"]]
+ 00b2f97c ["CALL", null, ["callee:00b3bf30:8"]]
~~~


<a id="compare-0e38601d6676ad0cde1c897462c6a1ee"></a>

### [`00b2f92c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2f/00b2f92c.md) → [`00b2f9c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2f/00b2f9c8.md) FUN_00b2f9c8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 6件 [`0070d3b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0070d/0070d3b8.md) [`00759234`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00759/00759234.md) [`009617a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00961/009617a0.md) [`00962f1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00962/00962f1c.md) [`00a06d9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a06/00a06d9c.md) · 呼出先 2件 [`00b3be60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3b/00b3be60.md) [`00b3be94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3b/00b3be94.md)
- 新版 呼出元 6件 [`0070d410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070d/0070d410.md) [`0075928c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00759/0075928c.md) [`009617f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00961/009617f4.md) [`00962f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00962/00962f70.md) [`00a06df0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06df0.md) · 呼出先 2件 [`00b3befc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3befc.md) [`00b3bf30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3bf30.md)

変更の種類 cfg_edge_inventory, constant, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 97.14% / 新版 97.14%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b2f9a4",
      "WRITE",
      [
        "storage",
        "00ca3e9c",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b2fa40",
      "WRITE",
      [
        "storage",
        "00ca3f6c",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2f944 ["INT_ADD", "register:40f0:8", ["const:b2f944:8", "const:4:8"]]
- 00b2f944 ["CALL", null, ["callee:00b3bf30:8"]]
+ 00b2f9e0 ["INT_ADD", "register:40f0:8", ["const:b2f9e0:8", "const:4:8"]]
+ 00b2f9e0 ["CALL", null, ["callee:00b3bf30:8"]]
- 00b2f960 ["INT_ADD", "register:40f0:8", ["const:b2f960:8", "const:4:8"]]
- 00b2f960 ["CALL", null, ["callee:00b3bf30:8"]]
+ 00b2f9fc ["INT_ADD", "register:40f0:8", ["const:b2f9fc:8", "const:4:8"]]
+ 00b2f9fc ["CALL", null, ["callee:00b3bf30:8"]]
- 00b2f998 ["INT_ADD", "register:40f0:8", ["const:b2f998:8", "const:4:8"]]
- 00b2f998 ["CALL", null, ["callee:00b3befc:8"]]
+ 00b2fa34 ["INT_ADD", "register:40f0:8", ["const:b2fa34:8", "const:4:8"]]
+ 00b2fa34 ["CALL", null, ["callee:00b3befc:8"]]
~~~


<a id="compare-2a7e1cec2bfc3aa4a11cffec3b2112d8"></a>

### [`00b2fa0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2f/00b2fa0c.md) → [`00b2faa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2f/00b2faa8.md) FUN_00b2faa8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00476b50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00476/00476b50.md) · 呼出先 15件 [`0046dabc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046dabc.md) [`00597e08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597e08.md) [`00597e48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597e48.md) [`00752280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00752/00752280.md) [`00764384`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00764/00764384.md)
- 新版 呼出元 1件 [`00476b90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00476/00476b90.md) · 呼出先 15件 [`0046dafc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046dafc.md) [`00597e48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597e48.md) [`00597e88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597e88.md) [`007522d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00752/007522d8.md) [`007643dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/007643dc.md)

変更の種類 branch_condition_or_target, call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 56.76% / 新版 56.76%

優先判定に残った影響 `unresolved_branch_alignment` 7件, `unresolved_call_alignment` 9件, `unresolved_store_alignment` 16件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b2fa38",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007683d8"
      ]
    ],
    [
      "unmatched:00b2fa3c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b2fb58"
      ]
    ],
    [
      "unmatched:00b2fa40",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00851550"
      ]
    ]
  ],
  "added": [
    [
      "00b2fad4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00768430"
      ]
    ],
    [
      "00b2fad8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b2fb58"
      ]
    ],
    [
      "00b2fadc",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00851550"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2fa34 ["INT_ADD", "register:40f0:8", ["const:b2fa34:8", "const:4:8"]]
- 00b2fa34 ["CALL", null, ["callee:00851550:8"]]
+ 00b2fad0 ["INT_ADD", "register:40f0:8", ["const:b2fad0:8", "const:4:8"]]
+ 00b2fad0 ["CALL", null, ["callee:00851550:8"]]
- 00b2fa38 ["INT_ADD", "register:40f0:8", ["const:b2fa38:8", "const:4:8"]]
- 00b2fa38 ["CALL", null, ["ram:7683d8:8"]]
- 00b2fa3c ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
- 00b2fa3c ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00b2fa3c ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00b2fa3c ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
~~~


<a id="compare-6dfeceeb811372cb4e57525685795cc0"></a>

### [`00b2fd40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2f/00b2fd40.md) → [`00b2fddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2f/00b2fddc.md) FUN_00b2fddc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00b2fa0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2f/00b2fa0c.md) · 呼出先 4件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00b30818`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b30/00b30818.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00b2faa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2f/00b2faa8.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00b308b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b30/00b308b4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 81.97% / 新版 81.97%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b2fe30",
      "incomplete_value": true,
      "site": "00b2fe38",
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
                "const:8:8"
              ]
            ]
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
      "definition_site": "00b2fe30",
      "incomplete_value": true,
      "site": "00b2fe38",
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
                "const:8:8"
              ]
            ]
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
      "definition_site": "00b2fe9c",
      "incomplete_value": true,
      "site": "00b2fea0",
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
                "const:10:8"
              ]
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
      "unmatched:00b2fd44",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b2fd48",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b2fd4c",
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
      "00b2fde0",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00b2fde4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b2fde8",
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
- 00b2fd9c ["INT_ADD", "register:40f0:8", ["const:b2fd9c:8", "const:4:8"]]
- 00b2fd9c ["CALL", null, ["callee:0043bb60:8"]]
+ 00b2fe38 ["INT_ADD", "register:40f0:8", ["const:b2fe38:8", "const:4:8"]]
+ 00b2fe38 ["CALL", null, ["callee:0043bb60:8"]]
- 00b2fe04 ["INT_ADD", "register:40f0:8", ["const:b2fe04:8", "const:4:8"]]
- 00b2fe04 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b2fea0 ["INT_ADD", "register:40f0:8", ["const:b2fea0:8", "const:4:8"]]
+ 00b2fea0 ["CALL", null, ["callee:00c57f80:8"]]
- 00b2fd40 ["INT_SUB", "register:8:8", ["register:8:8", "const:80:8"]]
~~~


<a id="compare-2005bf2930a0481f4a85c35c22d5bafb"></a>

### [`00b2fe78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2f/00b2fe78.md) → [`00b2ff14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2f/00b2ff14.md) FUN_00b2ff14

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00b2fa0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2f/00b2fa0c.md) · 呼出先 12件 [`00560458`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00560/00560458.md) [`00597608`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597608.md) [`0059761c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/0059761c.md) [`00597624`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597624.md) [`00597ec4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597ec4.md)
- 新版 呼出元 1件 [`00b2faa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2f/00b2faa8.md) · 呼出先 12件 [`00560498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00560/00560498.md) [`00597648`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597648.md) [`0059765c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/0059765c.md) [`00597664`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597664.md) [`00597f04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f04.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 83.93% / 新版 83.93%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b2ff18",
      "incomplete_value": true,
      "site": "00b2ff30",
      "value": [
        "INT_SUB",
        "8",
        [
          [
            "live",
            "register:40e8:8"
          ],
          [
            "leaf",
            "const:50:8"
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
      "definition_site": "00b2ff1c",
      "incomplete_value": true,
      "site": "00b2ff30",
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
            "const:48:8"
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
    "new": null,
    "old": {
      "definition_site": "00b2ff40",
      "incomplete_value": true,
      "site": "00b2ff4c",
      "value": [
        "INT_SUB",
        "8",
        [
          [
            "live",
            "register:40e8:8"
          ],
          [
            "leaf",
            "const:18:8"
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
      "unmatched:00b2fe98",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b2fe9c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c57f60"
      ]
    ],
    [
      "unmatched:00b2fea4",
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
      "00b2ff34",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ],
    [
      "00b2ff38",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c57f60"
      ]
    ],
    [
      "00b2ff40",
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
- 00b2ff30 ["INT_ADD", "register:40f0:8", ["const:b2ff30:8", "const:4:8"]]
- 00b2ff30 ["CALL", null, ["callee:00b30678:8"]]
+ 00b2ffcc ["INT_ADD", "register:40f0:8", ["const:b2ffcc:8", "const:4:8"]]
+ 00b2ffcc ["CALL", null, ["callee:00b30678:8"]]
- 00b2ff4c ["INT_ADD", "register:40f0:8", ["const:b2ff4c:8", "const:4:8"]]
- 00b2ff4c ["CALL", null, ["callee:00560498:8"]]
+ 00b2ffe8 ["INT_ADD", "register:40f0:8", ["const:b2ffe8:8", "const:4:8"]]
+ 00b2ffe8 ["CALL", null, ["callee:00560498:8"]]
- 00b2ff60 ["INT_ADD", "register:40f0:8", ["const:b2ff60:8", "const:4:8"]]
- 00b2ff60 ["CALL", null, ["callee:00c53da0:8"]]
+ 00b2fffc ["INT_ADD", "register:40f0:8", ["const:b2fffc:8", "const:4:8"]]
+ 00b2fffc ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-470bca61fc6243c3639646b293942995"></a>

### [`00b30140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b30/00b30140.md) → [`00b301dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b30/00b301dc.md) FUN_00b301dc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`00452c54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00452/00452c54.md) [`00457878`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00457/00457878.md) [`00458230`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00458/00458230.md) · 呼出先 11件 [`0045179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00451/0045179c.md) [`00459ad0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459ad0.md) [`0045bdf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0045b/0045bdf8.md) [`0059761c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/0059761c.md) [`00597624`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597624.md)
- 新版 呼出元 3件 [`00452c94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00452/00452c94.md) [`004578b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00457/004578b8.md) [`00458270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00458/00458270.md) · 呼出先 11件 [`004517dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00451/004517dc.md) [`00459b10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459b10.md) [`0045be38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0045b/0045be38.md) [`0059765c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/0059765c.md) [`00597664`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597664.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 55.92% / 新版 55.92%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 9件, `unresolved_call_alignment` 18件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 27件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b302ec",
      "incomplete_value": true,
      "site": "00b302f0",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "INT_OR",
            "4",
            [
              "INT_AND",
              [
                "leaf",
                "const:20000:4"
              ]
            ]
          ]
        ]
      ]
    },
    "old": null,
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
      "unmatched:00b30154",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b3016c",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b301b0",
      "DATA",
      [
        "storage",
        "00c63ae0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b301f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b30208",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "00b3024c",
      "DATA",
      [
        "storage",
        "00c63bb0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b30254 ["INT_ADD", "register:40f0:8", ["const:b30254:8", "const:4:8"]]
- 00b30254 ["CALL", null, ["callee:00c58020:8"]]
+ 00b302f0 ["INT_ADD", "register:40f0:8", ["const:b302f0:8", "const:4:8"]]
+ 00b302f0 ["CALL", null, ["callee:00c58020:8"]]
- 00b30154 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b30154 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b30154 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:80:8"]]
- 00b30154 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b30158 ["COPY", "tmp:0:8", ["const:40:8"]]
- 00b30158 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00b30158 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00b30158 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-69dd4225121836a6e28629a338a2cd8a"></a>

### [`00b305dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b30/00b305dc.md) → [`00b30678`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b30/00b30678.md) FUN_00b30678

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00b2fe78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2f/00b2fe78.md) · 呼出先 4件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00b31918`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b31/00b31918.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00b2ff14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2f/00b2ff14.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00b319b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b31/00b319b4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 96.04% / 新版 96.04%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b306c4",
      "incomplete_value": true,
      "site": "00b306e0",
      "value": [
        "INT_SUB",
        "8",
        [
          [
            "live",
            "register:40e8:8"
          ],
          [
            "leaf",
            "const:20:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b306c8",
      "incomplete_value": true,
      "site": "00b306e0",
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
            "const:40:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b306cc",
      "incomplete_value": true,
      "site": "00b306e0",
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
    "ordinal": 4,
    "slot": 5
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b30680",
      "WRITE",
      [
        "storage",
        "Stack[-0x90]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b30684",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b30718",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b3087c"
      ]
    ]
  ],
  "added": [
    [
      "00b3071c",
      "WRITE",
      [
        "storage",
        "Stack[-0x90]",
        null,
        null
      ]
    ],
    [
      "00b30720",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ],
    [
      "00b307b4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b3087c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b30644 ["INT_ADD", "register:40f0:8", ["const:b30644:8", "const:4:8"]]
- 00b30644 ["CALL", null, ["callee:0043bb60:8"]]
+ 00b306e0 ["INT_ADD", "register:40f0:8", ["const:b306e0:8", "const:4:8"]]
+ 00b306e0 ["CALL", null, ["callee:0043bb60:8"]]
- 00b306e0 ["INT_ADD", "register:40f0:8", ["const:b306e0:8", "const:4:8"]]
- 00b306e0 ["CALL", null, ["callee:00b319b4:8"]]
+ 00b3077c ["INT_ADD", "register:40f0:8", ["const:b3077c:8", "const:4:8"]]
+ 00b3077c ["CALL", null, ["callee:00b319b4:8"]]
- 00b3075c ["INT_ADD", "register:40f0:8", ["const:b3075c:8", "const:4:8"]]
- 00b3075c ["CALL", null, ["callee:00c57f80:8"]]
+ 00b307f8 ["INT_ADD", "register:40f0:8", ["const:b307f8:8", "const:4:8"]]
+ 00b307f8 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-8eef9e97cd40c6a7b255e6afee4e074b"></a>

### [`00b30818`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b30/00b30818.md) → [`00b308b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b30/00b308b4.md) FUN_00b308b4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00b2fd40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2f/00b2fd40.md) [`00b30818`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b30/00b30818.md) · 呼出先 21件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 2件 [`00b2fddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2f/00b2fddc.md) [`00b308b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b30/00b308b4.md) · 呼出先 21件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 86.18% / 新版 86.18%

優先判定に残った影響 `call_argument_candidate` 20件, `store_condition` 4件, `unresolved_branch_alignment` 13件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b309a8",
      "incomplete_value": true,
      "site": "00b309b8",
      "value": [
        "live",
        "register:40a0:8"
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
      "definition_site": "00b309b4",
      "incomplete_value": true,
      "site": "00b309b8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40e0:8"
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
      "definition_site": "00b30918",
      "incomplete_value": true,
      "site": "00b3091c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40e0:8"
          ],
          [
            "live",
            "register:4040:8"
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
      "definition_site": "00b30a28",
      "incomplete_value": true,
      "site": "00b30a2c",
      "value": [
        "INT_SUB",
        "8",
        [
          [
            "live",
            "register:40e8:8"
          ],
          [
            "leaf",
            "const:28:8"
          ]
        ]
      ]
    },
    "old": null,
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
      "unmatched:00b30840",
      "WRITE",
      [
        "storage",
        "Stack[-0x110]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b30848",
      "WRITE",
      [
        "storage",
        "Stack[-0xf8]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b30850",
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
      "00b308dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x110]",
        null,
        null
      ]
    ],
    [
      "00b308e4",
      "WRITE",
      [
        "storage",
        "Stack[-0xf8]",
        null,
        null
      ]
    ],
    [
      "00b308ec",
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
- 00b3091c ["INT_ADD", "register:40f0:8", ["const:b3091c:8", "const:4:8"]]
- 00b3091c ["CALL", null, ["callee:00c58010:8"]]
+ 00b309b8 ["INT_ADD", "register:40f0:8", ["const:b309b8:8", "const:4:8"]]
+ 00b309b8 ["CALL", null, ["callee:00c58010:8"]]
- 00b30990 ["INT_ADD", "register:40f0:8", ["const:b30990:8", "const:4:8"]]
- 00b30990 ["CALL", null, ["callee:00441ed4:8"]]
+ 00b30a2c ["INT_ADD", "register:40f0:8", ["const:b30a2c:8", "const:4:8"]]
+ 00b30a2c ["CALL", null, ["callee:00441ed4:8"]]
- 00b309b8 ["INT_NOTEQUAL", "tmp:0:1", ["register:4098:4", "const:0:4"]]
- 00b309b8 ["CBRANCH", null, ["local:b29:8", "tmp:0:1"]]
+ 00b30a54 ["INT_NOTEQUAL", "tmp:0:1", ["register:4098:4", "const:0:4"]]
+ 00b30a54 ["CBRANCH", null, ["local:b28:8", "tmp:0:1"]]
~~~


<a id="compare-67492bacaa16942feba2b433d6912504"></a>

### [`00b31118`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b31/00b31118.md) → [`00b311b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b31/00b311b4.md) FUN_00b311b4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00b30818`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b30/00b30818.md) [`00b31118`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b31/00b31118.md) · 呼出先 22件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 2件 [`00b308b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b30/00b308b4.md) [`00b311b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b31/00b311b4.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 83.73% / 新版 83.73%

優先判定に残った影響 `call_argument_candidate` 13件, `store_condition` 2件, `unresolved_branch_alignment` 13件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 19件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b31308",
      "incomplete_value": false,
      "site": "00b31310",
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
      "definition_site": "00b3126c",
      "incomplete_value": false,
      "site": "00b31274",
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
      "definition_site": "00b3132c",
      "incomplete_value": false,
      "site": "00b31338",
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
      "definition_site": "00b31290",
      "incomplete_value": false,
      "site": "00b3129c",
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
      "definition_site": "00b31460",
      "incomplete_value": false,
      "site": "00b31468",
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
      "definition_site": "00b313c4",
      "incomplete_value": true,
      "site": "00b313cc",
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
      "unmatched:00b3111c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b31120",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b31124",
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
      "00b311b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00b311bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00b311c0",
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
- 00b31274 ["INT_ADD", "register:40f0:8", ["const:b31274:8", "const:4:8"]]
- 00b31274 ["CALL", null, ["callee:00441ed4:8"]]
+ 00b31310 ["INT_ADD", "register:40f0:8", ["const:b31310:8", "const:4:8"]]
+ 00b31310 ["CALL", null, ["callee:00441ed4:8"]]
- 00b3129c ["INT_ADD", "register:40f0:8", ["const:b3129c:8", "const:4:8"]]
- 00b3129c ["CALL", null, ["callee:00442834:8"]]
+ 00b31338 ["INT_ADD", "register:40f0:8", ["const:b31338:8", "const:4:8"]]
+ 00b31338 ["CALL", null, ["callee:00442834:8"]]
- 00b31338 ["INT_ADD", "register:40f0:8", ["const:b31338:8", "const:4:8"]]
- 00b31338 ["CALL", null, ["callee:004428c4:8"]]
+ 00b313d4 ["INT_ADD", "register:40f0:8", ["const:b313d4:8", "const:4:8"]]
+ 00b313d4 ["CALL", null, ["callee:004428c4:8"]]
~~~


<a id="compare-37a6c32e1bcb026c4b7a24b8c182d09d"></a>

### [`00b31918`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b31/00b31918.md) → [`00b319b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b31/00b319b4.md) FUN_00b319b4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00b305dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b30/00b305dc.md) · 呼出先 4件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00b31b58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b31/00b31b58.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00b30678`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b30/00b30678.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00b31bf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b31/00b31bf4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 87.25% / 新版 87.25%

優先判定に残った影響 `call_argument_candidate` 10件, `unresolved_store_alignment` 15件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b319a4",
      "incomplete_value": true,
      "site": "00b319a8",
      "value": [
        "INT_SUB",
        "8",
        [
          [
            "live",
            "register:40e8:8"
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
    "new": {
      "definition_site": "00b31a6c",
      "incomplete_value": true,
      "site": "00b31a70",
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
    "old": null,
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b31a94",
      "incomplete_value": true,
      "site": "00b31a98",
      "value": [
        "live",
        "register:8:8"
      ]
    },
    "old": null,
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
      "unmatched:00b3191c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b31920",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b31924",
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
      "00b319b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00b319bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00b319c0",
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
- 00b319a8 ["INT_ADD", "register:40f0:8", ["const:b319a8:8", "const:4:8"]]
- 00b319a8 ["CALL", null, ["callee:0043bb60:8"]]
+ 00b31a44 ["INT_ADD", "register:40f0:8", ["const:b31a44:8", "const:4:8"]]
+ 00b31a44 ["CALL", null, ["callee:0043bb60:8"]]
- 00b319d4 ["INT_ADD", "register:40f0:8", ["const:b319d4:8", "const:4:8"]]
- 00b319d4 ["CALL", null, ["callee:0043bb60:8"]]
+ 00b31a70 ["INT_ADD", "register:40f0:8", ["const:b31a70:8", "const:4:8"]]
+ 00b31a70 ["CALL", null, ["callee:0043bb60:8"]]
- 00b319fc ["INT_ADD", "register:40f0:8", ["const:b319fc:8", "const:4:8"]]
- 00b319fc ["CALL", null, ["callee:0043bb60:8"]]
+ 00b31a98 ["INT_ADD", "register:40f0:8", ["const:b31a98:8", "const:4:8"]]
+ 00b31a98 ["CALL", null, ["callee:0043bb60:8"]]
~~~


<a id="compare-f24720c718814fa48441b3a4b16474bf"></a>

### [`00b31b58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b31/00b31b58.md) → [`00b31bf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b31/00b31bf4.md) FUN_00b31bf4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00b31918`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b31/00b31918.md) [`00b31b58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b31/00b31b58.md) · 呼出先 22件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 2件 [`00b319b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b31/00b319b4.md) [`00b31bf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b31/00b31bf4.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 95.79% / 新版 95.79%

優先判定に残った影響 `call_argument_candidate` 11件, `unresolved_branch_alignment` 5件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b31d54",
      "incomplete_value": false,
      "site": "00b31d5c",
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
      "definition_site": "00b31cb8",
      "incomplete_value": false,
      "site": "00b31cc0",
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
      "definition_site": "00b31d78",
      "incomplete_value": false,
      "site": "00b31d84",
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
      "definition_site": "00b31cdc",
      "incomplete_value": false,
      "site": "00b31ce8",
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
      "definition_site": "00b31eb4",
      "incomplete_value": false,
      "site": "00b31ebc",
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
      "definition_site": "00b31e18",
      "incomplete_value": false,
      "site": "00b31e20",
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
      "00b31d54",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "00b31d78",
      "PARAM",
      [
        "storage",
        "002c0ee9",
        null,
        "string"
      ]
    ],
    [
      "00b31eb4",
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
      "00b31d54",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "00b31d78",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "00b31eb4",
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
- 00b31cc0 ["INT_ADD", "register:40f0:8", ["const:b31cc0:8", "const:4:8"]]
- 00b31cc0 ["CALL", null, ["callee:00441ed4:8"]]
+ 00b31d5c ["INT_ADD", "register:40f0:8", ["const:b31d5c:8", "const:4:8"]]
+ 00b31d5c ["CALL", null, ["callee:00441ed4:8"]]
- 00b31ce8 ["INT_ADD", "register:40f0:8", ["const:b31ce8:8", "const:4:8"]]
- 00b31ce8 ["CALL", null, ["callee:00442834:8"]]
+ 00b31d84 ["INT_ADD", "register:40f0:8", ["const:b31d84:8", "const:4:8"]]
+ 00b31d84 ["CALL", null, ["callee:00442834:8"]]
- 00b31d84 ["INT_ADD", "register:40f0:8", ["const:b31d84:8", "const:4:8"]]
- 00b31d84 ["CALL", null, ["callee:004428c4:8"]]
+ 00b31e20 ["INT_ADD", "register:40f0:8", ["const:b31e20:8", "const:4:8"]]
+ 00b31e20 ["CALL", null, ["callee:004428c4:8"]]
~~~


<a id="compare-ba55049139915fbe17dea1685a190ccd"></a>

### [`00b32a30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b32/00b32a30.md) → [`00b32acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b32/00b32acc.md) _INIT_262

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
      "definition_site": "00b32b08",
      "incomplete_value": true,
      "site": "00b32b24",
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
      "definition_site": "00b32a6c",
      "incomplete_value": true,
      "site": "00b32a88",
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
      "definition_site": "00b32b2c",
      "incomplete_value": true,
      "site": "00b32b48",
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
      "definition_site": "00b32a90",
      "incomplete_value": true,
      "site": "00b32aac",
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
      "definition_site": "00b32b4c",
      "incomplete_value": true,
      "site": "00b32b68",
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
      "definition_site": "00b32ab0",
      "incomplete_value": true,
      "site": "00b32acc",
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
      "00b32b08",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "00b32b2c",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "00b32b4c",
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
      "00b32b08",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00b32b2c",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00b32b4c",
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
- 00b32ae4 ["COPY", "tmp:0:8", ["const:5d2:8"]]
- 00b32ae4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00b32ae4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00b32ae4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00b32b80 ["COPY", "tmp:0:8", ["const:576:8"]]
+ 00b32b80 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00b32b80 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00b32b80 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00b32b24 ["COPY", "tmp:0:8", ["const:f09:8"]]
- 00b32b24 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00b32b24 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00b32b24 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00b32bc0 ["COPY", "tmp:0:8", ["const:ebc:8"]]
+ 00b32bc0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00b32bc0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00b32bc0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00b32b90 ["INT_ADD", "register:40f0:8", ["const:b32b90:8", "const:4:8"]]
- 00b32b90 ["CALL", null, ["callee:0043b838:8"]]
+ 00b32c2c ["INT_ADD", "register:40f0:8", ["const:b32c2c:8", "const:4:8"]]
+ 00b32c2c ["CALL", null, ["callee:0043b838:8"]]
~~~


<a id="compare-9defb58295b83a444bf3096b5a8ffb1e"></a>

### [`00b32dc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b32/00b32dc0.md) → [`00b32e5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b32/00b32e5c.md) _INIT_263

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
      "definition_site": "00b32e98",
      "incomplete_value": true,
      "site": "00b32eb4",
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
      "definition_site": "00b32dfc",
      "incomplete_value": true,
      "site": "00b32e18",
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
      "definition_site": "00b32ebc",
      "incomplete_value": true,
      "site": "00b32ed8",
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
      "definition_site": "00b32e20",
      "incomplete_value": true,
      "site": "00b32e3c",
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
      "definition_site": "00b32edc",
      "incomplete_value": true,
      "site": "00b32ef8",
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
      "definition_site": "00b32e40",
      "incomplete_value": true,
      "site": "00b32e5c",
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
      "00b32e98",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "00b32ebc",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "00b32edc",
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
      "00b32e98",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00b32ebc",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00b32edc",
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
- 00b32e74 ["COPY", "tmp:0:8", ["const:5d2:8"]]
- 00b32e74 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00b32e74 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00b32e74 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00b32f10 ["COPY", "tmp:0:8", ["const:576:8"]]
+ 00b32f10 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00b32f10 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00b32f10 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00b32eb4 ["COPY", "tmp:0:8", ["const:f09:8"]]
- 00b32eb4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00b32eb4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00b32eb4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00b32f50 ["COPY", "tmp:0:8", ["const:ebc:8"]]
+ 00b32f50 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00b32f50 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00b32f50 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00b32f20 ["INT_ADD", "register:40f0:8", ["const:b32f20:8", "const:4:8"]]
- 00b32f20 ["CALL", null, ["callee:0043b838:8"]]
+ 00b32fbc ["INT_ADD", "register:40f0:8", ["const:b32fbc:8", "const:4:8"]]
+ 00b32fbc ["CALL", null, ["callee:0043b838:8"]]
~~~


<a id="compare-0fab5315de65a5f17f7fe5a64f8c7b0e"></a>

### [`00b33154`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b33/00b33154.md) → [`00b331f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b33/00b331f0.md) FUN_00b331f0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 5件 [`00aa5928`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa5/00aa5928.md) [`00aa60e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa6/00aa60e0.md) [`00aa738c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa7/00aa738c.md) [`00aa942c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa9/00aa942c.md) [`00aadf8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aad/00aadf8c.md) · 呼出先 12件 [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`00588e6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00588/00588e6c.md) [`00589144`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589144.md) [`0058915c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/0058915c.md) [`00589320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589320.md)
- 新版 呼出元 5件 [`00aa5998`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa5/00aa5998.md) [`00aa6150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa6/00aa6150.md) [`00aa73fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa7/00aa73fc.md) [`00aa949c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa9/00aa949c.md) [`00aadffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aad/00aadffc.md) · 呼出先 12件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 86.67% / 新版 86.67%

優先判定に残った影響 `store_value` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b33234",
      "incomplete_value": true,
      "site": "00b33244",
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
                "const:c25:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b33198",
      "incomplete_value": true,
      "site": "00b331a8",
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
                "const:c81:8"
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
      "definition_site": "00b33260",
      "incomplete_value": true,
      "site": "00b3326c",
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
                "const:3a0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b331c4",
      "incomplete_value": true,
      "site": "00b331d0",
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
                "const:360:8"
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
      "definition_site": "00b3325c",
      "incomplete_value": true,
      "site": "00b33270",
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
                "const:6d9:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b331c0",
      "incomplete_value": true,
      "site": "00b331d4",
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
                "const:72d:8"
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
      "00b33234",
      "READ",
      [
        "storage",
        "002a4c81",
        null,
        "string"
      ]
    ],
    [
      "00b3325c",
      "READ",
      [
        "storage",
        "002bc72d",
        null,
        "string"
      ]
    ],
    [
      "00b3325c",
      "READ",
      [
        "storage",
        "002bc73d",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b33234",
      "READ",
      [
        "storage",
        "002a4c25",
        null,
        "string"
      ]
    ],
    [
      "00b3325c",
      "READ",
      [
        "storage",
        "002bc6d9",
        null,
        "string"
      ]
    ],
    [
      "00b3325c",
      "READ",
      [
        "storage",
        "002bc6e9",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b33244 ["INT_ADD", "register:40f0:8", ["const:b33244:8", "const:4:8"]]
- 00b33244 ["CALL", null, ["callee:0058919c:8"]]
+ 00b332e0 ["INT_ADD", "register:40f0:8", ["const:b332e0:8", "const:4:8"]]
+ 00b332e0 ["CALL", null, ["callee:0058919c:8"]]
- 00b33180 ["INT_ADD", "register:40f0:8", ["const:b33180:8", "const:4:8"]]
- 00b33180 ["CALL", null, ["callee:00588eac:8"]]
+ 00b3321c ["INT_ADD", "register:40f0:8", ["const:b3321c:8", "const:4:8"]]
+ 00b3321c ["CALL", null, ["callee:00588eac:8"]]
- 00b33188 ["INT_ADD", "register:40f0:8", ["const:b33188:8", "const:4:8"]]
- 00b33188 ["CALL", null, ["callee:0058919c:8"]]
+ 00b33224 ["INT_ADD", "register:40f0:8", ["const:b33224:8", "const:4:8"]]
+ 00b33224 ["CALL", null, ["callee:0058919c:8"]]
~~~


<a id="compare-b71eebc52ecffdb6bae39ab3ddd40fb2"></a>

### [`00b33320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b33/00b33320.md) → [`00b333bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b33/00b333bc.md) FUN_00b333bc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00aad69c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aad/00aad69c.md) [`00aadf78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aad/00aadf78.md) · 呼出先 12件 [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`00588e6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00588/00588e6c.md) [`00589144`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589144.md) [`0058915c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/0058915c.md) [`00589320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589320.md)
- 新版 呼出元 2件 [`00aad70c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aad/00aad70c.md) [`00aadfe8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aad/00aadfe8.md) · 呼出先 12件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 88.33% / 新版 88.33%

優先判定に残った影響 `store_value` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b33414",
      "incomplete_value": true,
      "site": "00b33424",
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
                "const:c25:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b33378",
      "incomplete_value": true,
      "site": "00b33388",
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
                "const:c81:8"
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
      "definition_site": "00b33440",
      "incomplete_value": true,
      "site": "00b33448",
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
                "const:160:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b333a4",
      "incomplete_value": true,
      "site": "00b333ac",
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
                "const:120:8"
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
      "definition_site": "00b3343c",
      "incomplete_value": true,
      "site": "00b3344c",
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
      "definition_site": "00b333a0",
      "incomplete_value": true,
      "site": "00b333b0",
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
      "00b33414",
      "READ",
      [
        "storage",
        "002a4c81",
        null,
        "string"
      ]
    ],
    [
      "00b3343c",
      "READ",
      [
        "storage",
        "002b3440",
        null,
        "string"
      ]
    ],
    [
      "00b3343c",
      "READ",
      [
        "storage",
        "002b3450",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b33414",
      "READ",
      [
        "storage",
        "002a4c25",
        null,
        "string"
      ]
    ],
    [
      "00b3343c",
      "READ",
      [
        "storage",
        "002b3471",
        null,
        "string"
      ]
    ],
    [
      "00b3343c",
      "READ",
      [
        "storage",
        "002b3481",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b33448 ["INT_ADD", "register:40f0:8", ["const:b33448:8", "const:4:8"]]
- 00b33448 ["CALL", null, ["callee:00589910:8"]]
+ 00b334e4 ["INT_ADD", "register:40f0:8", ["const:b334e4:8", "const:4:8"]]
+ 00b334e4 ["CALL", null, ["callee:00589910:8"]]
- 00b3344c ["INT_ADD", "register:40f0:8", ["const:b3344c:8", "const:4:8"]]
- 00b3344c ["CALL", null, ["callee:0058919c:8"]]
+ 00b334e8 ["INT_ADD", "register:40f0:8", ["const:b334e8:8", "const:4:8"]]
+ 00b334e8 ["CALL", null, ["callee:0058919c:8"]]
- 00b33360 ["INT_ADD", "register:40f0:8", ["const:b33360:8", "const:4:8"]]
- 00b33360 ["CALL", null, ["callee:00588eac:8"]]
+ 00b333fc ["INT_ADD", "register:40f0:8", ["const:b333fc:8", "const:4:8"]]
+ 00b333fc ["CALL", null, ["callee:00588eac:8"]]
~~~


<a id="compare-d760668ae587ca18696497a16a5ee5e4"></a>

### [`00b33584`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b33/00b33584.md) → [`00b33620`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b33/00b33620.md) FUN_00b33620

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00893dbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00893/00893dbc.md) · 呼出先 9件 [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`00588e6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00588/00588e6c.md) [`00589144`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589144.md) [`0058915c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/0058915c.md) [`00589320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589320.md)
- 新版 呼出元 1件 [`00893e14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/00893e14.md) · 呼出先 9件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 85.07% / 新版 85.07%

優先判定に残った影響 `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b335c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b335cc",
      "READ",
      [
        "storage",
        "002bbd79",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b335d0",
      "READ",
      [
        "storage",
        "002bbd83",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b33664",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00b33668",
      "READ",
      [
        "storage",
        "002bbd25",
        null,
        "string"
      ]
    ],
    [
      "00b3366c",
      "READ",
      [
        "storage",
        "002bbd2f",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b335a8 ["INT_ADD", "register:40f0:8", ["const:b335a8:8", "const:4:8"]]
- 00b335a8 ["CALL", null, ["callee:00588eac:8"]]
+ 00b33644 ["INT_ADD", "register:40f0:8", ["const:b33644:8", "const:4:8"]]
+ 00b33644 ["CALL", null, ["callee:00588eac:8"]]
- 00b335b0 ["INT_ADD", "register:40f0:8", ["const:b335b0:8", "const:4:8"]]
- 00b335b0 ["CALL", null, ["callee:0058919c:8"]]
+ 00b3364c ["INT_ADD", "register:40f0:8", ["const:b3364c:8", "const:4:8"]]
+ 00b3364c ["CALL", null, ["callee:0058919c:8"]]
- 00b335bc ["INT_ADD", "register:40f0:8", ["const:b335bc:8", "const:4:8"]]
- 00b335bc ["CALL", null, ["callee:00c57f60:8"]]
+ 00b33658 ["INT_ADD", "register:40f0:8", ["const:b33658:8", "const:4:8"]]
+ 00b33658 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-a46e4cab69ae72f83d90545f57319294"></a>

### [`00b336cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b33/00b336cc.md) → [`00b33768`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b33/00b33768.md) _INIT_264

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 6件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00bc47f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc4/00bc47f0.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00bc488c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc4/00bc488c.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 69.23% / 新版 69.23%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_call_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 15件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b339e8",
      "incomplete_value": false,
      "site": "00b33a18",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1125000:8"
          ],
          [
            "leaf",
            "const:18:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 10,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b33a80",
      "incomplete_value": true,
      "site": "00b33a84",
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
                "const:60:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 15,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b336fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b33708",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b33724",
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
      "00b33798",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00b337a4",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00b337c0",
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
- 00b3397c ["INT_ADD", "register:40f0:8", ["const:b3397c:8", "const:4:8"]]
- 00b3397c ["CALL", null, ["callee:00c57f00:8"]]
+ 00b33a18 ["INT_ADD", "register:40f0:8", ["const:b33a18:8", "const:4:8"]]
+ 00b33a18 ["CALL", null, ["callee:00c57f00:8"]]
- 00b339e8 ["INT_ADD", "register:40f0:8", ["const:b339e8:8", "const:4:8"]]
- 00b339e8 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b33a84 ["INT_ADD", "register:40f0:8", ["const:b33a84:8", "const:4:8"]]
+ 00b33a84 ["CALL", null, ["callee:00c57f80:8"]]
- 00b336e8 ["COPY", "tmp:0:8", ["const:8:8"]]
- 00b336e8 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00b336e8 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00b336e8 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-643b32b8975e24ab672700e885572058"></a>

### [`00b33adc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b33/00b33adc.md) → [`00b33b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b33/00b33b78.md) FUN_00b33b78

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0043f618`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043f/0043f618.md) · 呼出先 10件 [`0046ca54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046ca54.md) [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`00588e6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00588/00588e6c.md) [`00589144`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589144.md) [`0058915c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/0058915c.md)
- 新版 呼出元 1件 [`0043f658`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f658.md) · 呼出先 10件 [`0046ca94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca94.md) [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 83.78% / 新版 83.78%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b33bfc",
      "incomplete_value": true,
      "site": "00b33bfc",
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
                "const:2b2000:8"
              ],
              [
                "leaf",
                "const:56d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b33b60",
      "incomplete_value": true,
      "site": "00b33b60",
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
                "const:2b2000:8"
              ],
              [
                "leaf",
                "const:53c:8"
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
      "definition_site": "00b33c18",
      "incomplete_value": true,
      "site": "00b33c28",
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
                "const:2a6000:8"
              ],
              [
                "leaf",
                "const:fe3:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b33b7c",
      "incomplete_value": true,
      "site": "00b33b8c",
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
                "const:3f:8"
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
      "definition_site": "00b33c1c",
      "incomplete_value": true,
      "site": "00b33c2c",
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
                "const:9:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b33b80",
      "incomplete_value": true,
      "site": "00b33b90",
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
                "const:9:8"
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
      "00b33bcc",
      "READ",
      [
        "storage",
        "00c9ab68",
        null,
        "pointer"
      ]
    ],
    [
      "00b33bd0",
      "PARAM",
      [
        "storage",
        "00ca4c70",
        null,
        "undefined8"
      ]
    ],
    [
      "00b33bec",
      "READ",
      [
        "storage",
        "002b253c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b33bcc",
      "READ",
      [
        "storage",
        "00c9ac38",
        null,
        "pointer"
      ]
    ],
    [
      "00b33bd0",
      "PARAM",
      [
        "storage",
        "00ca4d70",
        null,
        "undefined8"
      ]
    ],
    [
      "00b33bec",
      "READ",
      [
        "storage",
        "002b256d",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b33b38 ["INT_ADD", "register:40f0:8", ["const:b33b38:8", "const:4:8"]]
- 00b33b38 ["CALL", null, ["callee:0046ca94:8"]]
+ 00b33bd4 ["INT_ADD", "register:40f0:8", ["const:b33bd4:8", "const:4:8"]]
+ 00b33bd4 ["CALL", null, ["callee:0046ca94:8"]]
- 00b33bd0 ["INT_ADD", "register:40f0:8", ["const:b33bd0:8", "const:4:8"]]
- 00b33bd0 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b33c6c ["INT_ADD", "register:40f0:8", ["const:b33c6c:8", "const:4:8"]]
+ 00b33c6c ["CALL", null, ["callee:00c57f80:8"]]
- 00b33b10 ["INT_ADD", "register:40f0:8", ["const:b33b10:8", "const:4:8"]]
- 00b33b10 ["CALL", null, ["callee:00588eac:8"]]
+ 00b33bac ["INT_ADD", "register:40f0:8", ["const:b33bac:8", "const:4:8"]]
+ 00b33bac ["CALL", null, ["callee:00588eac:8"]]
~~~


<a id="compare-056fa07256cdf7933e8643a71e5ad9dc"></a>

### [`00b33d78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b33/00b33d78.md) → [`00b33e14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b33/00b33e14.md) FUN_00b33e14

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`0043f438`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043f/0043f438.md) [`0043f534`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043f/0043f534.md) · 呼出先 8件 [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`00588e6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00588/00588e6c.md) [`00589144`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589144.md) [`0058915c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/0058915c.md) [`00589320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589320.md)
- 新版 呼出元 2件 [`0043f478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f478.md) [`0043f574`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f574.md) · 呼出先 8件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.55% / 新版 94.55%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b33e68",
      "incomplete_value": true,
      "site": "00b33e68",
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
                "const:8be:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b33dcc",
      "incomplete_value": true,
      "site": "00b33dcc",
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
                "const:90b:8"
              ]
            ]
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
      "00b33e50",
      "READ",
      [
        "storage",
        "002a290b",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b33e50",
      "READ",
      [
        "storage",
        "002a28be",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b33d94 ["INT_ADD", "register:40f0:8", ["const:b33d94:8", "const:4:8"]]
- 00b33d94 ["CALL", null, ["callee:00588eac:8"]]
+ 00b33e30 ["INT_ADD", "register:40f0:8", ["const:b33e30:8", "const:4:8"]]
+ 00b33e30 ["CALL", null, ["callee:00588eac:8"]]
- 00b33d9c ["INT_ADD", "register:40f0:8", ["const:b33d9c:8", "const:4:8"]]
- 00b33d9c ["CALL", null, ["callee:0058919c:8"]]
+ 00b33e38 ["INT_ADD", "register:40f0:8", ["const:b33e38:8", "const:4:8"]]
+ 00b33e38 ["CALL", null, ["callee:0058919c:8"]]
- 00b33da8 ["COPY", "tmp:0:8", ["const:90b:8"]]
- 00b33da8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00b33da8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00b33da8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00b33e44 ["COPY", "tmp:0:8", ["const:8be:8"]]
+ 00b33e44 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00b33e44 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00b33e44 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-c022654ff4989e809878d42ad67b8846"></a>

### [`00b33e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b33/00b33e90.md) → [`00b33f2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b33/00b33f2c.md) _INIT_265

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
      "definition_site": "00b33f68",
      "incomplete_value": true,
      "site": "00b33f84",
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
      "definition_site": "00b33ecc",
      "incomplete_value": true,
      "site": "00b33ee8",
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
      "definition_site": "00b33f8c",
      "incomplete_value": true,
      "site": "00b33fa8",
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
      "definition_site": "00b33ef0",
      "incomplete_value": true,
      "site": "00b33f0c",
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
      "definition_site": "00b33fac",
      "incomplete_value": true,
      "site": "00b33fc8",
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
      "definition_site": "00b33f10",
      "incomplete_value": true,
      "site": "00b33f2c",
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
      "00b33f68",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "00b33f8c",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "00b33fac",
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
      "00b33f68",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00b33f8c",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00b33fac",
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
- 00b33f44 ["COPY", "tmp:0:8", ["const:5d2:8"]]
- 00b33f44 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00b33f44 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00b33f44 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00b33fe0 ["COPY", "tmp:0:8", ["const:576:8"]]
+ 00b33fe0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00b33fe0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00b33fe0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00b33f84 ["COPY", "tmp:0:8", ["const:f09:8"]]
- 00b33f84 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00b33f84 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00b33f84 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00b34020 ["COPY", "tmp:0:8", ["const:ebc:8"]]
+ 00b34020 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00b34020 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00b34020 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00b33ff0 ["INT_ADD", "register:40f0:8", ["const:b33ff0:8", "const:4:8"]]
- 00b33ff0 ["CALL", null, ["callee:0043b838:8"]]
+ 00b3408c ["INT_ADD", "register:40f0:8", ["const:b3408c:8", "const:4:8"]]
+ 00b3408c ["CALL", null, ["callee:0043b838:8"]]
~~~


<a id="compare-6080acb167515a8aae4439b661f4fbe5"></a>

### [`00b34280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b34/00b34280.md) → [`00b3431c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b3431c.md) FUN_00b3431c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`005b1650`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005b1/005b1650.md) · 呼出先 2件 [`00b34798`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b34/00b34798.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`005b1690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b1/005b1690.md) · 呼出先 2件 [`00b34834`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b34834.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.00% / 新版 98.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b34384",
      "incomplete_value": false,
      "site": "00b34390",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1125000:8"
          ],
          [
            "leaf",
            "const:50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b342e8",
      "incomplete_value": false,
      "site": "00b342f4",
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
            "const:f50:8"
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
      "00b34384",
      "PARAM",
      [
        "storage",
        "01124f50",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b34384",
      "PARAM",
      [
        "storage",
        "01125050",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b342f4 ["INT_ADD", "register:40f0:8", ["const:b342f4:8", "const:4:8"]]
- 00b342f4 ["CALL", null, ["callee:00b34834:8"]]
+ 00b34390 ["INT_ADD", "register:40f0:8", ["const:b34390:8", "const:4:8"]]
+ 00b34390 ["CALL", null, ["callee:00b34834:8"]]
- 00b342b8 ["COPY", "register:0:8", ["register:4048:8"]]
- 00b342b8 ["INT_ADD", "register:40f0:8", ["const:b342b8:8", "const:4:8"]]
- 00b342b8 ["CALLIND", null, ["register:0:8"]]
+ 00b34354 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00b34354 ["INT_ADD", "register:40f0:8", ["const:b34354:8", "const:4:8"]]
+ 00b34354 ["CALLIND", null, ["register:0:8"]]
- 00b342e0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b342e0 ["INT_ADD", "register:40f0:8", ["const:b342e0:8", "const:4:8"]]
- 00b342e0 ["CALLIND", null, ["register:0:8"]]
+ 00b3437c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b3437c ["INT_ADD", "register:40f0:8", ["const:b3437c:8", "const:4:8"]]
+ 00b3437c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-2a7b929255ef6046a79b042f432cc290"></a>

### [`00b34348`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b34/00b34348.md) → [`00b343e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b343e4.md) FUN_00b343e4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`005b1650`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005b1/005b1650.md) · 呼出先 2件 [`00b34900`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b34/00b34900.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`005b1690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b1/005b1690.md) · 呼出先 2件 [`00b3499c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b3499c.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.00% / 新版 98.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b3444c",
      "incomplete_value": false,
      "site": "00b34458",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1125000:8"
          ],
          [
            "leaf",
            "const:80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b343b0",
      "incomplete_value": false,
      "site": "00b343bc",
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
            "const:f80:8"
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
      "00b3444c",
      "PARAM",
      [
        "storage",
        "01124f80",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b3444c",
      "PARAM",
      [
        "storage",
        "01125080",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b343bc ["INT_ADD", "register:40f0:8", ["const:b343bc:8", "const:4:8"]]
- 00b343bc ["CALL", null, ["callee:00b3499c:8"]]
+ 00b34458 ["INT_ADD", "register:40f0:8", ["const:b34458:8", "const:4:8"]]
+ 00b34458 ["CALL", null, ["callee:00b3499c:8"]]
- 00b34380 ["COPY", "register:0:8", ["register:4048:8"]]
- 00b34380 ["INT_ADD", "register:40f0:8", ["const:b34380:8", "const:4:8"]]
- 00b34380 ["CALLIND", null, ["register:0:8"]]
+ 00b3441c ["COPY", "register:0:8", ["register:4048:8"]]
+ 00b3441c ["INT_ADD", "register:40f0:8", ["const:b3441c:8", "const:4:8"]]
+ 00b3441c ["CALLIND", null, ["register:0:8"]]
- 00b343a8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b343a8 ["INT_ADD", "register:40f0:8", ["const:b343a8:8", "const:4:8"]]
- 00b343a8 ["CALLIND", null, ["register:0:8"]]
+ 00b34444 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b34444 ["INT_ADD", "register:40f0:8", ["const:b34444:8", "const:4:8"]]
+ 00b34444 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-24d90a651835dc72eaa2868ef57418f9"></a>

### [`00b34410`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b34/00b34410.md) → [`00b344ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b344ac.md) FUN_00b344ac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`005b1650`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005b1/005b1650.md) · 呼出先 13件 [`0046d490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d490.md) [`0087a308`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087a/0087a308.md) [`0087b3bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087b/0087b3bc.md) [`00b34a68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b34/00b34a68.md) [`00b34c64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b34/00b34c64.md)
- 新版 呼出元 1件 [`005b1690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b1/005b1690.md) · 呼出先 13件 [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0087a360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087a/0087a360.md) [`0087b414`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087b414.md) [`00b34b04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b34b04.md) [`00b34d00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b34d00.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.89% / 新版 94.89%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b344f4",
      "incomplete_value": true,
      "site": "00b344f4",
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
                "const:639:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b34458",
      "incomplete_value": true,
      "site": "00b34458",
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
                "const:686:8"
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
      "definition_site": "00b345e0",
      "incomplete_value": false,
      "site": "00b345e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:4b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b34544",
      "incomplete_value": false,
      "site": "00b3454c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:3e8:8"
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
      "definition_site": "00b34564",
      "incomplete_value": false,
      "site": "00b3456c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2bb000:8"
          ],
          [
            "leaf",
            "const:d40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b344c8",
      "incomplete_value": false,
      "site": "00b344d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2bb000:8"
          ],
          [
            "leaf",
            "const:d94:8"
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
      "00b344e4",
      "READ",
      [
        "storage",
        "002a0686",
        null,
        "string"
      ]
    ],
    [
      "00b34564",
      "PARAM",
      [
        "storage",
        "002bbd94",
        null,
        "string"
      ]
    ],
    [
      "00b345a4",
      "PARAM",
      [
        "storage",
        "002b95ea",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b344e4",
      "READ",
      [
        "storage",
        "002a0639",
        null,
        "string"
      ]
    ],
    [
      "00b34564",
      "PARAM",
      [
        "storage",
        "002bbd40",
        null,
        "string"
      ]
    ],
    [
      "00b345a4",
      "PARAM",
      [
        "storage",
        "002b9596",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b344d0 ["INT_ADD", "register:40f0:8", ["const:b344d0:8", "const:4:8"]]
- 00b344d0 ["CALL", null, ["callee:00b34b04:8"]]
+ 00b3456c ["INT_ADD", "register:40f0:8", ["const:b3456c:8", "const:4:8"]]
+ 00b3456c ["CALL", null, ["callee:00b34b04:8"]]
- 00b34510 ["INT_ADD", "register:40f0:8", ["const:b34510:8", "const:4:8"]]
- 00b34510 ["CALL", null, ["callee:00b34d00:8"]]
+ 00b345ac ["INT_ADD", "register:40f0:8", ["const:b345ac:8", "const:4:8"]]
+ 00b345ac ["CALL", null, ["callee:00b34d00:8"]]
- 00b345ac ["INT_ADD", "register:40f0:8", ["const:b345ac:8", "const:4:8"]]
- 00b345ac ["CALL", null, ["callee:0046d4d0:8"]]
+ 00b34648 ["INT_ADD", "register:40f0:8", ["const:b34648:8", "const:4:8"]]
+ 00b34648 ["CALL", null, ["callee:0046d4d0:8"]]
~~~


<a id="compare-9a6229c36753c96c248a5ee58bdb816f"></a>

### [`00b34e68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b34/00b34e68.md) → [`00b34f04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b34f04.md) FUN_00b34f04

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
      "definition_site": "00b34f18",
      "incomplete_value": false,
      "site": "00b34f1c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:4b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b34e7c",
      "incomplete_value": false,
      "site": "00b34e80",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:3e8:8"
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
      "00b34f1c",
      "DATA",
      [
        "storage",
        "00c8f3e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00b34f1c",
      "DATA",
      [
        "storage",
        "00c8f4b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b34e74 ["INT_ADD", "register:40f0:8", ["const:b34e74:8", "const:4:8"]]
- 00b34e74 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b34f10 ["INT_ADD", "register:40f0:8", ["const:b34f10:8", "const:4:8"]]
+ 00b34f10 ["CALL", null, ["callee:00c57f60:8"]]
- 00b34e7c ["COPY", "tmp:0:8", ["const:3e8:8"]]
- 00b34e7c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b34e7c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b34e7c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b34f18 ["COPY", "tmp:0:8", ["const:4b8:8"]]
+ 00b34f18 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b34f18 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b34f18 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-445577411d13375bbba73e7378b56c85"></a>

### [`00b34e8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b34/00b34e8c.md) → [`00b34f28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b34f28.md) FUN_00b34f28

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
      "definition_site": "00b34f2c",
      "incomplete_value": false,
      "site": "00b34f30",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:4b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b34e90",
      "incomplete_value": false,
      "site": "00b34e94",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:3e8:8"
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
      "00b34f30",
      "DATA",
      [
        "storage",
        "00c8f3e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00b34f30",
      "DATA",
      [
        "storage",
        "00c8f4b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b34e90 ["COPY", "tmp:0:8", ["const:3e8:8"]]
- 00b34e90 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b34e90 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b34e90 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b34f2c ["COPY", "tmp:0:8", ["const:4b8:8"]]
+ 00b34f2c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b34f2c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b34f2c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-65caeb603e784184685f7482daa48d06"></a>

### [`00b35380`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b35/00b35380.md) → [`00b3541c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b35/00b3541c.md) FUN_00b3541c

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
      "definition_site": "00b35430",
      "incomplete_value": false,
      "site": "00b35434",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:528:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b35394",
      "incomplete_value": false,
      "site": "00b35398",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
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
      "00b35434",
      "DATA",
      [
        "storage",
        "00c8f458",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00b35434",
      "DATA",
      [
        "storage",
        "00c8f528",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3538c ["INT_ADD", "register:40f0:8", ["const:b3538c:8", "const:4:8"]]
- 00b3538c ["CALL", null, ["callee:00c57f60:8"]]
+ 00b35428 ["INT_ADD", "register:40f0:8", ["const:b35428:8", "const:4:8"]]
+ 00b35428 ["CALL", null, ["callee:00c57f60:8"]]
- 00b35394 ["COPY", "tmp:0:8", ["const:458:8"]]
- 00b35394 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b35394 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b35394 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b35430 ["COPY", "tmp:0:8", ["const:528:8"]]
+ 00b35430 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b35430 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b35430 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f48dac97cd5e2484ab5dcfb51f54ac2d"></a>

### [`00b353bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b35/00b353bc.md) → [`00b35458`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b35/00b35458.md) FUN_00b35458

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 9件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 9件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_value, constant, operands_and_dependencies

命令の説明率　旧版 98.13% / 新版 98.13%

優先判定に残った影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b3554c",
      "incomplete_value": true,
      "site": "00b3554c",
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
      "definition_site": "00b354b0",
      "incomplete_value": true,
      "site": "00b354b0",
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
      "00b35540",
      "READ",
      [
        "storage",
        "01124f70",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b35540",
      "READ",
      [
        "storage",
        "01125070",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b35414 ["INT_ADD", "register:40f0:8", ["const:b35414:8", "const:4:8"]]
- 00b35414 ["CALL", null, ["callee:00c5aae0:8"]]
+ 00b354b0 ["INT_ADD", "register:40f0:8", ["const:b354b0:8", "const:4:8"]]
+ 00b354b0 ["CALL", null, ["callee:00c5aae0:8"]]
- 00b3554c ["INT_ADD", "register:40f0:8", ["const:b3554c:8", "const:4:8"]]
- 00b3554c ["CALL", null, ["callee:0043b7a4:8"]]
+ 00b355e8 ["INT_ADD", "register:40f0:8", ["const:b355e8:8", "const:4:8"]]
+ 00b355e8 ["CALL", null, ["callee:0043b7a4:8"]]
- 00b353e8 ["INT_ADD", "register:40f0:8", ["const:b353e8:8", "const:4:8"]]
- 00b353e8 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b35484 ["INT_ADD", "register:40f0:8", ["const:b35484:8", "const:4:8"]]
+ 00b35484 ["CALL", null, ["callee:00c5aad0:8"]]
~~~


<a id="compare-ead3336c7eb6faf8909d4e97219cd89e"></a>

### [`00b35608`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b35/00b35608.md) → [`00b356a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b35/00b356a4.md) _INIT_266

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00b34220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b34/00b34220.md) [`00b34250`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b34/00b34250.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00b342bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b342bc.md) [`00b342ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b342ec.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 52.38% / 新版 52.38%

優先判定に残った影響 `call_argument_candidate` 2件, `store_destination` 2件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b356cc",
      "incomplete_value": false,
      "site": "00b356cc",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:50:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b35630",
      "incomplete_value": false,
      "site": "00b35630",
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
                "const:1124000:8"
              ],
              [
                "leaf",
                "const:f50:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:20:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b356e8",
      "incomplete_value": false,
      "site": "00b356e8",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:80:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b3564c",
      "incomplete_value": false,
      "site": "00b3564c",
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
                "const:1124000:8"
              ],
              [
                "leaf",
                "const:f80:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:20:8"
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
      "definition_site": "00b356c4",
      "incomplete_value": false,
      "site": "00b356d0",
      "value": [
        "leaf",
        "const:b342bc:8"
      ]
    },
    "old": {
      "definition_site": "00b35628",
      "incomplete_value": false,
      "site": "00b35634",
      "value": [
        "leaf",
        "const:b34220:8"
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
      "00b356bc",
      "PARAM",
      [
        "storage",
        "01124f50",
        null,
        null
      ]
    ],
    [
      "unmatched:00b35628",
      "PARAM",
      [
        "storage",
        "00b34220",
        null,
        null
      ]
    ],
    [
      "00b356c8",
      "PARAM",
      [
        "storage",
        "00c62f90",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b356bc",
      "PARAM",
      [
        "storage",
        "01125050",
        null,
        null
      ]
    ],
    [
      "00b356c4",
      "PARAM",
      [
        "storage",
        "00b342bc",
        null,
        null
      ]
    ],
    [
      "00b356c8",
      "PARAM",
      [
        "storage",
        "00c63060",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b35634 ["INT_ADD", "register:40f0:8", ["const:b35634:8", "const:4:8"]]
- 00b35634 ["CALL", null, ["callee:00c57f00:8"]]
+ 00b356d0 ["INT_ADD", "register:40f0:8", ["const:b356d0:8", "const:4:8"]]
+ 00b356d0 ["CALL", null, ["callee:00c57f00:8"]]
- 00b35614 ["COPY", "register:4098:8", ["const:c62000:8"]]
+ 00b356b0 ["COPY", "register:4098:8", ["const:c63000:8"]]
- 00b35618 ["COPY", "tmp:0:8", ["const:f90:8"]]
- 00b35618 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 00b35618 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 00b35618 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 00b356b4 ["COPY", "tmp:0:8", ["const:60:8"]]
+ 00b356b4 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 00b356b4 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 00b356b4 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-98cbef5920c26a803fa694691340b776"></a>

### [`00b3565c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b35/00b3565c.md) → [`00b356f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b35/00b356f8.md) FUN_00b356f8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0066d090`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0066d/0066d090.md) · 呼出先 12件 [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`00588e6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00588/00588e6c.md) [`00589144`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589144.md) [`0058915c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/0058915c.md) [`00589320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589320.md)
- 新版 呼出元 1件 [`0066d0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066d/0066d0d0.md) · 呼出先 12件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 82.28% / 新版 82.28%

優先判定に残った影響 `store_value` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b35754",
      "incomplete_value": true,
      "site": "00b35764",
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
                "const:2ba000:8"
              ],
              [
                "leaf",
                "const:c64:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b356b8",
      "incomplete_value": true,
      "site": "00b356c8",
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
                "const:2ba000:8"
              ],
              [
                "leaf",
                "const:cb8:8"
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
      "definition_site": "00b35768",
      "incomplete_value": true,
      "site": "00b35778",
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
      "definition_site": "00b356cc",
      "incomplete_value": true,
      "site": "00b356dc",
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b35758",
      "incomplete_value": true,
      "site": "00b35780",
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
      "definition_site": "00b356bc",
      "incomplete_value": true,
      "site": "00b356e4",
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
      "00b35754",
      "READ",
      [
        "storage",
        "002bacb8",
        null,
        "string"
      ]
    ],
    [
      "00b35758",
      "READ",
      [
        "storage",
        "002bacc4",
        null,
        "string"
      ]
    ],
    [
      "00b35768",
      "READ",
      [
        "storage",
        "002c3290",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b35754",
      "READ",
      [
        "storage",
        "002bac64",
        null,
        "string"
      ]
    ],
    [
      "00b35758",
      "READ",
      [
        "storage",
        "002bac70",
        null,
        "string"
      ]
    ],
    [
      "00b35768",
      "READ",
      [
        "storage",
        "002c32d0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b35764 ["INT_ADD", "register:40f0:8", ["const:b35764:8", "const:4:8"]]
- 00b35764 ["CALL", null, ["callee:00574d2c:8"]]
+ 00b35800 ["INT_ADD", "register:40f0:8", ["const:b35800:8", "const:4:8"]]
+ 00b35800 ["CALL", null, ["callee:00574d2c:8"]]
- 00b35680 ["INT_ADD", "register:40f0:8", ["const:b35680:8", "const:4:8"]]
- 00b35680 ["CALL", null, ["callee:00588eac:8"]]
+ 00b3571c ["INT_ADD", "register:40f0:8", ["const:b3571c:8", "const:4:8"]]
+ 00b3571c ["CALL", null, ["callee:00588eac:8"]]
- 00b35694 ["INT_ADD", "register:40f0:8", ["const:b35694:8", "const:4:8"]]
- 00b35694 ["CALL", null, ["callee:00589910:8"]]
+ 00b35730 ["INT_ADD", "register:40f0:8", ["const:b35730:8", "const:4:8"]]
+ 00b35730 ["CALL", null, ["callee:00589910:8"]]
~~~


<a id="compare-fbc739ba2c9bfedaacd33da36f9b69ed"></a>

### [`00b357e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b35/00b357e8.md) → [`00b35884`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b35/00b35884.md) FUN_00b35884

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`0066d0dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0066d/0066d0dc.md) [`0066d108`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0066d/0066d108.md) [`00763c90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00763/00763c90.md) · 呼出先 12件 [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`00588e6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00588/00588e6c.md) [`00589144`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589144.md) [`0058915c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/0058915c.md) [`00589320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589320.md)
- 新版 呼出元 3件 [`0066d11c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066d/0066d11c.md) [`0066d148`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066d/0066d148.md) [`00763ce8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00763/00763ce8.md) · 呼出先 12件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 84.81% / 新版 84.81%

優先判定に残った影響 `store_value` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b358cc",
      "incomplete_value": true,
      "site": "00b358e4",
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
      "definition_site": "00b35830",
      "incomplete_value": true,
      "site": "00b35848",
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b358e8",
      "incomplete_value": true,
      "site": "00b358fc",
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
                "const:2ba000:8"
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
      "definition_site": "00b3584c",
      "incomplete_value": true,
      "site": "00b35860",
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
                "const:2ba000:8"
              ],
              [
                "leaf",
                "const:cd5:8"
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
      "definition_site": "00b358e8",
      "incomplete_value": true,
      "site": "00b358fc",
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
      "definition_site": "00b3584c",
      "incomplete_value": true,
      "site": "00b35860",
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
      "00b358cc",
      "READ",
      [
        "storage",
        "002c32a0",
        null,
        null
      ]
    ],
    [
      "00b358e8",
      "READ",
      [
        "storage",
        "002bacd5",
        null,
        "string"
      ]
    ],
    [
      "00b358e8",
      "READ",
      [
        "storage",
        "002bace5",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b358cc",
      "READ",
      [
        "storage",
        "002c32e0",
        null,
        null
      ]
    ],
    [
      "00b358e8",
      "READ",
      [
        "storage",
        "002bac81",
        null,
        "string"
      ]
    ],
    [
      "00b358e8",
      "READ",
      [
        "storage",
        "002bac91",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b35908 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00b35908 ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
+ 00b359a4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00b359a4 ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
- 00b3580c ["INT_ADD", "register:40f0:8", ["const:b3580c:8", "const:4:8"]]
- 00b3580c ["CALL", null, ["callee:00588eac:8"]]
+ 00b358a8 ["INT_ADD", "register:40f0:8", ["const:b358a8:8", "const:4:8"]]
+ 00b358a8 ["CALL", null, ["callee:00588eac:8"]]
- 00b35814 ["INT_ADD", "register:40f0:8", ["const:b35814:8", "const:4:8"]]
- 00b35814 ["CALL", null, ["callee:0058919c:8"]]
+ 00b358b0 ["INT_ADD", "register:40f0:8", ["const:b358b0:8", "const:4:8"]]
+ 00b358b0 ["CALL", null, ["callee:0058919c:8"]]
~~~


<a id="compare-d120c996c3a7af40996adb6fcd031838"></a>

### [`00b35970`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b35/00b35970.md) → [`00b35a0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b35/00b35a0c.md) _INIT_267

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 75.14% / 新版 75.14%

優先判定に残った影響 `call_argument_candidate` 11件, `unresolved_store_alignment` 14件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b35ae8",
      "incomplete_value": true,
      "site": "00b35af8",
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b35aec",
      "incomplete_value": true,
      "site": "00b35af8",
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
            "const:40:8"
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
    "new": null,
    "old": {
      "definition_site": "00b35af0",
      "incomplete_value": true,
      "site": "00b35af8",
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
            "const:40:8"
          ]
        ]
      ]
    },
    "ordinal": 2,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b359a0",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b359ac",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b359c8",
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
      "00b35a3c",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00b35a48",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00b35a64",
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
- 00b35af8 ["INT_ADD", "register:40f0:8", ["const:b35af8:8", "const:4:8"]]
- 00b35af8 ["CALL", null, ["callee:0043b838:8"]]
+ 00b35b94 ["INT_ADD", "register:40f0:8", ["const:b35b94:8", "const:4:8"]]
+ 00b35b94 ["CALL", null, ["callee:0043b838:8"]]
- 00b35b20 ["INT_ADD", "register:40f0:8", ["const:b35b20:8", "const:4:8"]]
- 00b35b20 ["CALL", null, ["callee:0043b838:8"]]
+ 00b35bbc ["INT_ADD", "register:40f0:8", ["const:b35bbc:8", "const:4:8"]]
+ 00b35bbc ["CALL", null, ["callee:0043b838:8"]]
- 00b35b48 ["INT_ADD", "register:40f0:8", ["const:b35b48:8", "const:4:8"]]
- 00b35b48 ["CALL", null, ["callee:0043b838:8"]]
+ 00b35be4 ["INT_ADD", "register:40f0:8", ["const:b35be4:8", "const:4:8"]]
+ 00b35be4 ["CALL", null, ["callee:0043b838:8"]]
~~~


<a id="compare-7ac0050b26a8a61743262b85f01794a4"></a>

### [`00b35d0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b35/00b35d0c.md) → [`00b35da8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b35/00b35da8.md) FUN_00b35da8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0043b6d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b6d4.md) · 呼出先 5件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00b35ef8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b35/00b35ef8.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`0043b714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b714.md) · 呼出先 5件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00b35f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b35/00b35f94.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 82.42% / 新版 82.42%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 5件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b35db4",
      "incomplete_value": true,
      "site": "00b35dc0",
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
      "definition_site": "00b35db8",
      "incomplete_value": true,
      "site": "00b35dc0",
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
    "new": {
      "definition_site": "00b35e88",
      "incomplete_value": false,
      "site": "00b35e94",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1125000:8"
          ],
          [
            "leaf",
            "const:d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b35dec",
      "incomplete_value": false,
      "site": "00b35df8",
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
            "const:fd0:8"
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
      "unmatched:00b35d30",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b35d38",
      "READ",
      [
        "storage",
        "01124fd8",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b35d3c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b35eb4"
      ]
    ]
  ],
  "added": [
    [
      "00b35dcc",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "00b35dd4",
      "READ",
      [
        "storage",
        "011250d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b35dd8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b35eb4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b35dc0 ["INT_ADD", "register:40f0:8", ["const:b35dc0:8", "const:4:8"]]
- 00b35dc0 ["CALL", null, ["callee:00c58120:8"]]
+ 00b35e5c ["INT_ADD", "register:40f0:8", ["const:b35e5c:8", "const:4:8"]]
+ 00b35e5c ["CALL", null, ["callee:00c58120:8"]]
- 00b35df8 ["INT_ADD", "register:40f0:8", ["const:b35df8:8", "const:4:8"]]
- 00b35df8 ["CALL", null, ["callee:00b35f94:8"]]
+ 00b35e94 ["INT_ADD", "register:40f0:8", ["const:b35e94:8", "const:4:8"]]
+ 00b35e94 ["CALL", null, ["callee:00b35f94:8"]]
- 00b35e5c ["INT_ADD", "register:40f0:8", ["const:b35e5c:8", "const:4:8"]]
- 00b35e5c ["CALL", null, ["callee:00442970:8"]]
+ 00b35ef8 ["INT_ADD", "register:40f0:8", ["const:b35ef8:8", "const:4:8"]]
+ 00b35ef8 ["CALL", null, ["callee:00442970:8"]]
~~~


<a id="compare-33230002f77ff20d83808b5cd6dd32ee"></a>

### [`00b35ef8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b35/00b35ef8.md) → [`00b35f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b35/00b35f94.md) FUN_00b35f94

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00b35d0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b35/00b35d0c.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00b35da8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b35/00b35da8.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 95.38% / 新版 95.38%

優先判定に残った影響 `unresolved_return_alignment` 1件

~~~diff
- 00b35f1c ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00b35f1c ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
+ 00b35fb8 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00b35fb8 ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
- 00b35f44 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00b35f44 ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
+ 00b35fe0 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00b35fe0 ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
- 00b35f7c ["INT_ADD", "register:40f0:8", ["const:b35f7c:8", "const:4:8"]]
- 00b35f7c ["CALL", null, ["callee:00c58120:8"]]
+ 00b36018 ["INT_ADD", "register:40f0:8", ["const:b36018:8", "const:4:8"]]
+ 00b36018 ["CALL", null, ["callee:00c58120:8"]]
~~~


<a id="compare-6b7f1fecc45d692faa715a33ed97f8d7"></a>

### [`00b35ffc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b35/00b35ffc.md) → [`00b36098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b36/00b36098.md) _INIT_268

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00b35d04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b35/00b35d04.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00b35da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b35/00b35da0.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md)

変更の種類 constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 45.45% / 新版 45.45%

優先判定に残った影響 `store_destination` 3件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b360b4",
      "incomplete_value": false,
      "site": "00b360b4",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:d0:8"
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
      "definition_site": "00b36018",
      "incomplete_value": false,
      "site": "00b36018",
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
                "const:1124000:8"
              ],
              [
                "leaf",
                "const:fd0:8"
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b360b8",
      "incomplete_value": false,
      "site": "00b360b8",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:d0:8"
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
      "definition_site": "00b3601c",
      "incomplete_value": false,
      "site": "00b3601c",
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
                "const:1124000:8"
              ],
              [
                "leaf",
                "const:fd0:8"
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
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b360bc",
      "incomplete_value": false,
      "site": "00b360bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1125000:8"
          ],
          [
            "leaf",
            "const:d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b36020",
      "incomplete_value": false,
      "site": "00b36020",
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
            "const:fd0:8"
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
      "00b3609c",
      "PARAM",
      [
        "storage",
        "01124fd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b360a4",
      "PARAM",
      [
        "storage",
        "00b35d04",
        null,
        null
      ]
    ],
    [
      "00b360b0",
      "PARAM",
      [
        "storage",
        "00c62f90",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b3609c",
      "PARAM",
      [
        "storage",
        "011250d0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b360a4",
      "PARAM",
      [
        "storage",
        "00b35da0",
        null,
        null
      ]
    ],
    [
      "00b360b0",
      "PARAM",
      [
        "storage",
        "00c63060",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b35ffc ["COPY", "register:4008:8", ["const:1124000:8"]]
+ 00b36098 ["COPY", "register:4008:8", ["const:1125000:8"]]
- 00b36000 ["COPY", "tmp:0:8", ["const:fd0:8"]]
- 00b36000 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 00b36000 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 00b36000 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 00b3609c ["COPY", "tmp:0:8", ["const:d0:8"]]
+ 00b3609c ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 00b3609c ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 00b3609c ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
- 00b36008 ["COPY", "register:4000:8", ["const:b35d04:8"]]
+ 00b360a4 ["COPY", "register:4000:8", ["const:b35da0:8"]]
~~~


<a id="compare-78da65a4451bead6faf990c1ae6f81da"></a>

### [`00b36028`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b36/00b36028.md) → [`00b360c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b36/00b360c4.md) FUN_00b360c4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00b2c200`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2c/00b2c200.md) · 呼出先 9件 [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`00588e6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00588/00588e6c.md) [`00589144`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589144.md) [`0058915c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/0058915c.md) [`00589320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589320.md)
- 新版 呼出元 1件 [`00b2c29c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2c/00b2c29c.md) · 呼出先 9件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 70.31% / 新版 70.31%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b360a0",
      "incomplete_value": true,
      "site": "00b360b0",
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
    "ordinal": 3,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b360d0",
      "incomplete_value": true,
      "site": "00b360d4",
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
                "const:30:8"
              ]
            ]
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
    "new": {
      "definition_site": "00b36174",
      "incomplete_value": true,
      "site": "00b36178",
      "value": [
        "INT_SUB",
        "8",
        [
          [
            "live",
            "register:40e8:8"
          ],
          [
            "leaf",
            "const:10:8"
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
      "unmatched:00b3602c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b36030",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b36034",
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
      "00b360c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b360cc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b360d0",
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
- 00b360b0 ["INT_ADD", "register:40f0:8", ["const:b360b0:8", "const:4:8"]]
- 00b360b0 ["CALL", null, ["callee:00589360:8"]]
+ 00b3614c ["INT_ADD", "register:40f0:8", ["const:b3614c:8", "const:4:8"]]
+ 00b3614c ["CALL", null, ["callee:00589360:8"]]
- 00b360d4 ["INT_ADD", "register:40f0:8", ["const:b360d4:8", "const:4:8"]]
- 00b360d4 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b36170 ["INT_ADD", "register:40f0:8", ["const:b36170:8", "const:4:8"]]
+ 00b36170 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b360d4 ["COPY", "tmp:0:8", ["const:50:8"]]
+ 00b360d4 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
+ 00b360d4 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
+ 00b360d4 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-737bdb72e6f326b59ebf8c79090d11c7"></a>

### [`00b36164`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b36/00b36164.md) → [`00b36200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b36/00b36200.md) FUN_00b36200

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`005bacd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ba/005bacd0.md) [`0089788c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00897/0089788c.md) · 呼出先 10件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00588e6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00588/00588e6c.md) [`00589144`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589144.md) [`0058915c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/0058915c.md) [`00589320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589320.md)
- 新版 呼出元 2件 [`005bad10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ba/005bad10.md) [`008978e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00897/008978e4.md) · 呼出先 10件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 87.10% / 新版 87.10%

優先判定に残った影響 `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b3624c",
      "incomplete_value": true,
      "site": "00b3625c",
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
                "const:c62:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b361b0",
      "incomplete_value": true,
      "site": "00b361c0",
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
                "const:c22:8"
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
      "definition_site": "00b36260",
      "incomplete_value": true,
      "site": "00b36270",
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
                "const:ad0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b361c4",
      "incomplete_value": true,
      "site": "00b361d4",
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
                "const:a90:8"
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
      "definition_site": "00b36250",
      "incomplete_value": true,
      "site": "00b3627c",
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
                "const:a:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b361b4",
      "incomplete_value": true,
      "site": "00b361e0",
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
                "const:a:8"
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
      "00b3624c",
      "READ",
      [
        "storage",
        "002b7c22",
        null,
        "string"
      ]
    ],
    [
      "00b36250",
      "READ",
      [
        "storage",
        "002b7c2c",
        null,
        "string"
      ]
    ],
    [
      "00b36260",
      "READ",
      [
        "storage",
        "002c2a90",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b3624c",
      "READ",
      [
        "storage",
        "002b7c62",
        null,
        "string"
      ]
    ],
    [
      "00b36250",
      "READ",
      [
        "storage",
        "002b7c6c",
        null,
        "string"
      ]
    ],
    [
      "00b36260",
      "READ",
      [
        "storage",
        "002c2ad0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3627c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b3627c ["INT_ADD", "register:40f0:8", ["const:b3627c:8", "const:4:8"]]
- 00b3627c ["CALLIND", null, ["register:0:8"]]
+ 00b36318 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b36318 ["INT_ADD", "register:40f0:8", ["const:b36318:8", "const:4:8"]]
+ 00b36318 ["CALLIND", null, ["register:0:8"]]
- 00b36188 ["INT_ADD", "register:40f0:8", ["const:b36188:8", "const:4:8"]]
- 00b36188 ["CALL", null, ["callee:00588eac:8"]]
+ 00b36224 ["INT_ADD", "register:40f0:8", ["const:b36224:8", "const:4:8"]]
+ 00b36224 ["CALL", null, ["callee:00588eac:8"]]
- 00b36190 ["INT_ADD", "register:40f0:8", ["const:b36190:8", "const:4:8"]]
- 00b36190 ["CALL", null, ["callee:0058919c:8"]]
+ 00b3622c ["INT_ADD", "register:40f0:8", ["const:b3622c:8", "const:4:8"]]
+ 00b3622c ["CALL", null, ["callee:0058919c:8"]]
~~~


<a id="compare-659156dbb1f7a791bc3ac254df2924e6"></a>

### [`00b36314`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b36/00b36314.md) → [`00b363b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b36/00b363b0.md) _INIT_269

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00bc47f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc4/00bc47f0.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00bc488c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc4/00bc488c.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md)

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 44.44% / 新版 44.44%

優先判定に残った影響 `store_destination` 3件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b363c8",
      "incomplete_value": false,
      "site": "00b363c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1125000:8"
          ],
          [
            "leaf",
            "const:e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b3632c",
      "incomplete_value": false,
      "site": "00b3632c",
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
            "const:fe8:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b363c8",
      "incomplete_value": false,
      "site": "00b363c8",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:e8:8"
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
      "definition_site": "00b3632c",
      "incomplete_value": false,
      "site": "00b3632c",
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
                "const:1124000:8"
              ],
              [
                "leaf",
                "const:fe8:8"
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
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b363cc",
      "incomplete_value": false,
      "site": "00b363cc",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:e8:8"
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
      "definition_site": "00b36330",
      "incomplete_value": false,
      "site": "00b36330",
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
                "const:1124000:8"
              ],
              [
                "leaf",
                "const:fe8:8"
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
      "00b363b8",
      "PARAM",
      [
        "storage",
        "01124fe8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b363bc",
      "READ",
      [
        "storage",
        "00c9abf8",
        null,
        "pointer"
      ]
    ],
    [
      "00b363bc",
      "PARAM",
      [
        "storage",
        "00bc47f0",
        "std::__ndk1::basic_string<char,std::__ndk1::char_traits<char>,std::__ndk1::allocator<char>>::~basic_string",
        null
      ]
    ]
  ],
  "added": [
    [
      "00b363b8",
      "PARAM",
      [
        "storage",
        "011250e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b363bc",
      "READ",
      [
        "storage",
        "00c9acc8",
        null,
        "pointer"
      ]
    ],
    [
      "00b363bc",
      "PARAM",
      [
        "storage",
        "00bc488c",
        "std::__ndk1::basic_string<char,std::__ndk1::char_traits<char>,std::__ndk1::allocator<char>>::~basic_string",
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b36318 ["COPY", "register:4008:8", ["const:1124000:8"]]
+ 00b363b4 ["COPY", "register:4008:8", ["const:1125000:8"]]
- 00b3631c ["COPY", "tmp:0:8", ["const:fe8:8"]]
- 00b3631c ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 00b3631c ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 00b3631c ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 00b363b8 ["COPY", "tmp:0:8", ["const:e8:8"]]
+ 00b363b8 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 00b363b8 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 00b363b8 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
- 00b36320 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:bf8:8"]]
- 00b36320 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b363bc ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:cc8:8"]]
+ 00b363bc ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-5200eba5b2f7e9f3434935f028fdc0a8"></a>

### [`00b36338`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b36/00b36338.md) → [`00b363d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b36/00b363d4.md) FUN_00b363d4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0087e710`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087e/0087e710.md) · 呼出先 13件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00588e6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00588/00588e6c.md) [`00589144`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589144.md) [`0058915c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/0058915c.md) [`00589320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589320.md)
- 新版 呼出元 1件 [`0087e768`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087e768.md) · 呼出先 13件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)

変更の種類 branch_condition_or_target, call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `store_value` 3件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b36428",
      "incomplete_value": true,
      "site": "00b36428",
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
                "const:2b0000:8"
              ],
              [
                "leaf",
                "const:42e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b3638c",
      "incomplete_value": true,
      "site": "00b3638c",
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
                "const:2b0000:8"
              ],
              [
                "leaf",
                "const:48a:8"
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
      "definition_site": "00b36430",
      "incomplete_value": true,
      "site": "00b36430",
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
      "definition_site": "00b36394",
      "incomplete_value": true,
      "site": "00b36394",
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
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b3642c",
      "incomplete_value": true,
      "site": "00b36444",
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
                "const:f65:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b36390",
      "incomplete_value": true,
      "site": "00b363a8",
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
                "const:fb2:8"
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
      "00b36410",
      "READ",
      [
        "storage",
        "002b048a",
        null,
        "string"
      ]
    ],
    [
      "00b36418",
      "READ",
      [
        "storage",
        "002b0490",
        null,
        "string"
      ]
    ],
    [
      "00b3642c",
      "READ",
      [
        "storage",
        "002a0fb2",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b36410",
      "READ",
      [
        "storage",
        "002b042e",
        null,
        "string"
      ]
    ],
    [
      "00b36418",
      "READ",
      [
        "storage",
        "002b0434",
        null,
        "string"
      ]
    ],
    [
      "00b3642c",
      "READ",
      [
        "storage",
        "002a0f65",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3635c ["INT_ADD", "register:40f0:8", ["const:b3635c:8", "const:4:8"]]
- 00b3635c ["CALL", null, ["callee:00588eac:8"]]
+ 00b363f8 ["INT_ADD", "register:40f0:8", ["const:b363f8:8", "const:4:8"]]
+ 00b363f8 ["CALL", null, ["callee:00588eac:8"]]
- 00b36364 ["INT_ADD", "register:40f0:8", ["const:b36364:8", "const:4:8"]]
- 00b36364 ["CALL", null, ["callee:0058919c:8"]]
+ 00b36400 ["INT_ADD", "register:40f0:8", ["const:b36400:8", "const:4:8"]]
+ 00b36400 ["CALL", null, ["callee:0058919c:8"]]
- 00b36370 ["COPY", "tmp:0:8", ["const:48a:8"]]
- 00b36370 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00b36370 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00b36370 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00b3640c ["COPY", "tmp:0:8", ["const:42e:8"]]
+ 00b3640c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00b3640c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00b3640c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-001bcee1087e74b291c7acb28f25a635"></a>

### [`00b36544`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b36/00b36544.md) → [`00b365e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b36/00b365e0.md) _INIT_270

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 71.75% / 新版 71.75%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_store_alignment` 16件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b36800",
      "incomplete_value": false,
      "site": "00b36814",
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
      "definition_site": "00b36764",
      "incomplete_value": false,
      "site": "00b36778",
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
      "definition_site": "00b36808",
      "incomplete_value": false,
      "site": "00b36814",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1125000:8"
          ],
          [
            "leaf",
            "const:100:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b3676c",
      "incomplete_value": false,
      "site": "00b36778",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1125000:8"
          ],
          [
            "leaf",
            "const:0:8"
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
      "definition_site": "00b36810",
      "incomplete_value": false,
      "site": "00b36814",
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
      "definition_site": "00b36774",
      "incomplete_value": false,
      "site": "00b36778",
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
      "unmatched:00b36574",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b36580",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b36588",
      "WRITE",
      [
        "storage",
        "Stack[-0xff]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b36610",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00b3661c",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00b36624",
      "WRITE",
      [
        "storage",
        "Stack[-0xff]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b36778 ["INT_ADD", "register:40f0:8", ["const:b36778:8", "const:4:8"]]
- 00b36778 ["CALL", null, ["callee:00c57f00:8"]]
+ 00b36814 ["INT_ADD", "register:40f0:8", ["const:b36814:8", "const:4:8"]]
+ 00b36814 ["CALL", null, ["callee:00c57f00:8"]]
- 00b367f4 ["INT_ADD", "register:40f0:8", ["const:b367f4:8", "const:4:8"]]
- 00b367f4 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b36890 ["INT_ADD", "register:40f0:8", ["const:b36890:8", "const:4:8"]]
+ 00b36890 ["CALL", null, ["callee:00c57f80:8"]]
- 00b36564 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:28:8"]]
- 00b36564 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-656cccb830225245ee77685a4acf42fe"></a>

### [`00b368d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b36/00b368d4.md) → [`00b36970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b36/00b36970.md) FUN_00b36970

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005b1514`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005b1/005b1514.md) · 呼出先 8件 [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`00588e6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00588/00588e6c.md) [`00589144`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589144.md) [`0058915c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/0058915c.md) [`00589320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589320.md)
- 新版 呼出元 1件 [`005b1554`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b1/005b1554.md) · 呼出先 8件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 73.68% / 新版 73.68%

優先判定に残った影響 `unresolved_store_alignment` 7件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b368f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b368fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b36908",
      "WRITE",
      [
        "storage",
        "Stack[-0x3f]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b3698c",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ],
    [
      "00b36998",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "00b369a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x3f]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b368f0 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 00b368f0 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 00b368f0 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
- 00b368f4 ["COPY", "register:4040:8", ["const:6e67:8"]]
- 00b368f8 ["INT_AND", "tmp:0:4", ["register:4040:4", "const:ffff:4"]]
- 00b368f8 ["INT_OR", "tmp:0:4", ["tmp:0:4", "const:6e490000:4"]]
- 00b368f8 ["INT_ZEXT", "register:4040:8", ["tmp:0:4"]]
~~~


<a id="compare-29511dc3de38dc93d5ab9a64f4e2b9f1"></a>

### [`00b369f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b36/00b369f4.md) → [`00b36a90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b36/00b36a90.md) FUN_00b36a90

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`005b1514`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005b1/005b1514.md) · 呼出先 2件 [`00b34798`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b34/00b34798.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`005b1554`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b1/005b1554.md) · 呼出先 2件 [`00b34834`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b34834.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b36af8",
      "incomplete_value": false,
      "site": "00b36b04",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1125000:8"
          ],
          [
            "leaf",
            "const:130:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b36a5c",
      "incomplete_value": false,
      "site": "00b36a68",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1125000:8"
          ],
          [
            "leaf",
            "const:30:8"
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
      "unmatched:00b369f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b36a0c",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b36a4c",
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
      "00b36a94",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b36aa8",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ],
    [
      "00b36ae8",
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
- 00b36a68 ["INT_ADD", "register:40f0:8", ["const:b36a68:8", "const:4:8"]]
- 00b36a68 ["CALL", null, ["callee:00b34834:8"]]
+ 00b36b04 ["INT_ADD", "register:40f0:8", ["const:b36b04:8", "const:4:8"]]
+ 00b36b04 ["CALL", null, ["callee:00b34834:8"]]
- 00b369f4 ["INT_SUB", "register:8:8", ["register:8:8", "const:60:8"]]
- 00b369f8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b369f8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b369f8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
- 00b369f8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-fa011cafff16f2e831e4088ba81da304"></a>

### [`00b36abc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b36/00b36abc.md) → [`00b36b58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b36/00b36b58.md) FUN_00b36b58

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`005b1514`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005b1/005b1514.md) · 呼出先 2件 [`00b34900`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b34/00b34900.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`005b1554`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b1/005b1554.md) · 呼出先 2件 [`00b3499c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b3499c.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b36bc0",
      "incomplete_value": false,
      "site": "00b36bcc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1125000:8"
          ],
          [
            "leaf",
            "const:160:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b36b24",
      "incomplete_value": false,
      "site": "00b36b30",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1125000:8"
          ],
          [
            "leaf",
            "const:60:8"
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
      "unmatched:00b36ad4",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ],
    [
      "00b36bc0",
      "PARAM",
      [
        "storage",
        "01125060",
        null,
        null
      ]
    ],
    [
      "unmatched:00b36b1c",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00b36b70",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ],
    [
      "00b36bc0",
      "PARAM",
      [
        "storage",
        "01125160",
        null,
        null
      ]
    ],
    [
      "00b36bb8",
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
- 00b36b30 ["INT_ADD", "register:40f0:8", ["const:b36b30:8", "const:4:8"]]
- 00b36b30 ["CALL", null, ["callee:00b3499c:8"]]
+ 00b36bcc ["INT_ADD", "register:40f0:8", ["const:b36bcc:8", "const:4:8"]]
+ 00b36bcc ["CALL", null, ["callee:00b3499c:8"]]
- 00b36ad0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:28:8"]]
- 00b36ad0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b36ad4 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 00b36ad4 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 00b36ad4 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
~~~


<a id="compare-2b5e13e6e0c4e0bde78d0eab1a45c477"></a>

### [`00b36b84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b36/00b36b84.md) → [`00b36c20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b36/00b36c20.md) Java_jp_co_ponos_battlecats_MyGoogleSignInListener_onSuccess

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00589954`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589954.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00589994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589994.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 83.67% / 新版 83.67%

アドレスに依存する影響 `call_argument_candidate` 1件, `store_condition` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b36b9c",
      "incomplete_value": true,
      "site": "00b36bb4",
      "value": [
        "live",
        "register:4010:8"
      ]
    },
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00b36bd0"
      ],
      [
        "FALL_THROUGH",
        "00b36c6c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b36c6c",
      "incomplete_value": true,
      "site": "00b36c70",
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
      "definition_site": "00b36bd0",
      "incomplete_value": true,
      "site": "00b36bd4",
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
      "unmatched:00b36b88",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b36b8c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b36b90",
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
      "00b36c24",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b36c28",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b36c2c",
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
- 00b36bb4 ["INT_ADD", "register:40f0:8", ["const:b36bb4:8", "const:4:8"]]
- 00b36bb4 ["CALL", null, ["callee:00589994:8"]]
+ 00b36c50 ["INT_ADD", "register:40f0:8", ["const:b36c50:8", "const:4:8"]]
+ 00b36c50 ["CALL", null, ["callee:00589994:8"]]
- 00b36b84 ["INT_SUB", "register:8:8", ["register:8:8", "const:80:8"]]
- 00b36b88 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b36b88 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b36b88 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:50:8"]]
- 00b36b88 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-d03429d5adc7607ddf4a84980da6f8e9"></a>

### [`00b36cb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b36/00b36cb8.md) → [`00b36d54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b36/00b36d54.md) Java_jp_co_ponos_battlecats_MyGoogleSignInListener_onFailure

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, branch_value, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_store_alignment

命令の説明率　旧版 81.40% / 新版 81.40%

優先判定に残った影響 `unresolved_store_alignment` 4件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b36d78",
      "incomplete_value": true,
      "site": "00b36d78",
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
      "definition_site": "00b36cdc",
      "incomplete_value": true,
      "site": "00b36cdc",
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
    "guard": [
      [
        "FALL_THROUGH",
        "00b36cdc"
      ],
      [
        "FALL_THROUGH",
        "00b36d78"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b36d78",
      "incomplete_value": true,
      "site": "00b36db0",
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
      "definition_site": "00b36cdc",
      "incomplete_value": true,
      "site": "00b36d14",
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
    "ordinal": 9,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00b36cdc"
      ],
      [
        "FALL_THROUGH",
        "00b36d78"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b36d78",
      "incomplete_value": true,
      "site": "00b36db4",
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
      "definition_site": "00b36cdc",
      "incomplete_value": true,
      "site": "00b36d18",
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
      "00b36d74",
      "READ",
      [
        "storage",
        "01125080",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b36cf4",
      "READ",
      [
        "storage",
        "002b89d6",
        null,
        null
      ]
    ],
    [
      "unmatched:00b36cf8",
      "READ",
      [
        "storage",
        "002c2b50",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b36d74",
      "READ",
      [
        "storage",
        "01125180",
        null,
        "undefined8"
      ]
    ],
    [
      "00b36d90",
      "READ",
      [
        "storage",
        "002b8982",
        null,
        null
      ]
    ],
    [
      "00b36d94",
      "READ",
      [
        "storage",
        "002c2b90",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b36cdc ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
- 00b36cdc ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 00b36d78 ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
+ 00b36d78 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00b36cd8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:80:8"]]
- 00b36cd8 ["LOAD", "register:4098:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b36d74 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:180:8"]]
+ 00b36d74 ["LOAD", "register:4098:8", ["const:1b1:8", "tmp:0:8"]]
- 00b36ce4 ["INT_ADD", "register:40f0:8", ["const:b36ce4:8", "const:4:8"]]
- 00b36ce4 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b36d80 ["INT_ADD", "register:40f0:8", ["const:b36d80:8", "const:4:8"]]
+ 00b36d80 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-8039e1234c745e869f8835e69d0195fc"></a>

### [`00b36d90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b36/00b36d90.md) → [`00b36e2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b36/00b36e2c.md) Java_jp_co_ponos_battlecats_MyGoogleSignInListener_onCancel

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_value, constant, operands_and_dependencies, operation_sequence, store_condition, store_value

命令の説明率　旧版 81.82% / 新版 81.82%

優先判定に残った影響 `store_value` 4件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b36e6c",
      "incomplete_value": true,
      "site": "00b36e7c",
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
                "const:e40:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b36dd0",
      "incomplete_value": true,
      "site": "00b36de0",
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
                "const:e00:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b36e68",
      "incomplete_value": true,
      "site": "00b36e80",
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
                "const:2b1000:8"
              ],
              [
                "leaf",
                "const:499:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b36dcc",
      "incomplete_value": true,
      "site": "00b36de4",
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
                "const:2b1000:8"
              ],
              [
                "leaf",
                "const:4f5:8"
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
      "definition_site": "00b36e68",
      "incomplete_value": true,
      "site": "00b36e80",
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
      "definition_site": "00b36dcc",
      "incomplete_value": true,
      "site": "00b36de4",
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
      "00b36e4c",
      "READ",
      [
        "storage",
        "01125080",
        null,
        "undefined8"
      ]
    ],
    [
      "00b36e68",
      "READ",
      [
        "storage",
        "002b14f5",
        null,
        null
      ]
    ],
    [
      "00b36e68",
      "READ",
      [
        "storage",
        "002b1505",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b36e4c",
      "READ",
      [
        "storage",
        "01125180",
        null,
        "undefined8"
      ]
    ],
    [
      "00b36e68",
      "READ",
      [
        "storage",
        "002b1499",
        null,
        null
      ]
    ],
    [
      "00b36e68",
      "READ",
      [
        "storage",
        "002b14a9",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b36db0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:80:8"]]
- 00b36db0 ["LOAD", "register:4098:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b36e4c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:180:8"]]
+ 00b36e4c ["LOAD", "register:4098:8", ["const:1b1:8", "tmp:0:8"]]
- 00b36dbc ["INT_ADD", "register:40f0:8", ["const:b36dbc:8", "const:4:8"]]
- 00b36dbc ["CALL", null, ["callee:00c57f60:8"]]
+ 00b36e58 ["INT_ADD", "register:40f0:8", ["const:b36e58:8", "const:4:8"]]
+ 00b36e58 ["CALL", null, ["callee:00c57f60:8"]]
- 00b36dc4 ["COPY", "tmp:0:8", ["const:4f5:8"]]
- 00b36dc4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b36dc4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b36dc4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b36e60 ["COPY", "tmp:0:8", ["const:499:8"]]
+ 00b36e60 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b36e60 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b36e60 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2302c4b09bac9fbdfc93540e2914da25"></a>

### [`00b36e74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b36/00b36e74.md) → [`00b36f10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b36/00b36f10.md) _INIT_271

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00b34220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b34/00b34220.md) [`00b34250`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b34/00b34250.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00b342bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b342bc.md) [`00b342ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b342ec.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_destination, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 73.96% / 新版 73.96%

優先判定に残った影響 `call_argument_candidate` 6件, `store_destination` 2件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 12件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b37160",
      "incomplete_value": false,
      "site": "00b37160",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:130:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b370c4",
      "incomplete_value": false,
      "site": "00b370c4",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:30:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:20:8"
          ]
        ]
      ]
    },
    "ordinal": 45,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b3717c",
      "incomplete_value": false,
      "site": "00b3717c",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:160:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b370e0",
      "incomplete_value": false,
      "site": "00b370e0",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:60:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:20:8"
          ]
        ]
      ]
    },
    "ordinal": 46,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b36fd8",
      "incomplete_value": true,
      "site": "00b36fe8",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b36ea4",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b36eb0",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b36ecc",
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
      "00b36f40",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00b36f4c",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00b36f68",
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
- 00b36fe8 ["INT_ADD", "register:40f0:8", ["const:b36fe8:8", "const:4:8"]]
- 00b36fe8 ["CALL", null, ["callee:0043b838:8"]]
+ 00b37084 ["INT_ADD", "register:40f0:8", ["const:b37084:8", "const:4:8"]]
+ 00b37084 ["CALL", null, ["callee:0043b838:8"]]
+ 00b36fe8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:89:8"]]
+ 00b36fe8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:5000:16"]]
- 00b37024 ["INT_ADD", "register:40f0:8", ["const:b37024:8", "const:4:8"]]
- 00b37024 ["CALL", null, ["callee:0043b838:8"]]
+ 00b370c0 ["INT_ADD", "register:40f0:8", ["const:b370c0:8", "const:4:8"]]
+ 00b370c0 ["CALL", null, ["callee:0043b838:8"]]
~~~


<a id="compare-54ec7a07d49b6c501db55fe01f62f6f3"></a>

### [`00b373dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b37/00b373dc.md) → [`00b37478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b37/00b37478.md) FUN_00b37478

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008877e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00887/008877e0.md) · 呼出先 16件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`0057bea8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0057b/0057bea8.md) [`00588e6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00588/00588e6c.md) [`00589144`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589144.md)
- 新版 呼出元 1件 [`00887838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/00887838.md) · 呼出先 16件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`0057bee8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0057b/0057bee8.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 92.82% / 新版 92.82%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b374d8",
      "incomplete_value": true,
      "site": "00b374d8",
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
                "const:c7d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b3743c",
      "incomplete_value": true,
      "site": "00b3743c",
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
                "const:c3d:8"
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
      "definition_site": "00b374dc",
      "incomplete_value": true,
      "site": "00b374dc",
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
      "definition_site": "00b37440",
      "incomplete_value": true,
      "site": "00b37440",
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
    "ordinal": 13,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b374f8",
      "incomplete_value": true,
      "site": "00b37504",
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
                "const:3a0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b3745c",
      "incomplete_value": true,
      "site": "00b37468",
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
                "const:360:8"
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
      "00b374c4",
      "READ",
      [
        "storage",
        "002b7c3d",
        null,
        "string"
      ]
    ],
    [
      "00b374cc",
      "READ",
      [
        "storage",
        "002b7c43",
        null,
        "string"
      ]
    ],
    [
      "00b374f4",
      "READ",
      [
        "storage",
        "002bc72d",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b374c4",
      "READ",
      [
        "storage",
        "002b7c7d",
        null,
        "string"
      ]
    ],
    [
      "00b374cc",
      "READ",
      [
        "storage",
        "002b7c83",
        null,
        "string"
      ]
    ],
    [
      "00b374f4",
      "READ",
      [
        "storage",
        "002bc6d9",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b37508 ["COPY", "tmp:0:8", ["const:90:8"]]
- 00b37508 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 00b37508 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 00b37508 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 00b375a4 ["COPY", "tmp:0:8", ["const:190:8"]]
+ 00b375a4 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 00b375a4 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 00b375a4 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
- 00b37514 ["INT_ADD", "register:40f0:8", ["const:b37514:8", "const:4:8"]]
- 00b37514 ["CALL", null, ["callee:0057bee8:8"]]
+ 00b375b0 ["INT_ADD", "register:40f0:8", ["const:b375b0:8", "const:4:8"]]
+ 00b375b0 ["CALL", null, ["callee:0057bee8:8"]]
- 00b37410 ["INT_ADD", "register:40f0:8", ["const:b37410:8", "const:4:8"]]
- 00b37410 ["CALL", null, ["callee:00588eac:8"]]
+ 00b374ac ["INT_ADD", "register:40f0:8", ["const:b374ac:8", "const:4:8"]]
+ 00b374ac ["CALL", null, ["callee:00588eac:8"]]
~~~


<a id="compare-998b14763a84840fc83efddfd20d1bdf"></a>

### [`00b377b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b37/00b377b4.md) → [`00b37850`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b37/00b37850.md) FUN_00b37850

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`008877d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00887/008877d0.md) · 呼出先 8件 [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`00588e6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00588/00588e6c.md) [`00589144`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589144.md) [`0058915c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/0058915c.md) [`00589320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589320.md)
- 新版 呼出元 1件 [`00887828`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/00887828.md) · 呼出先 8件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 87.10% / 新版 87.10%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b37840",
      "incomplete_value": true,
      "site": "00b37844",
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
                "const:10:8"
              ]
            ]
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
      "unmatched:00b377f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b377fc",
      "READ",
      [
        "storage",
        "002c0811",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b37818",
      "WRITE",
      [
        "storage",
        "Stack[-0x57]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b3788c",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "00b37898",
      "READ",
      [
        "storage",
        "002c0851",
        null,
        "string"
      ]
    ],
    [
      "00b378b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x57]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b37844 ["INT_ADD", "register:40f0:8", ["const:b37844:8", "const:4:8"]]
- 00b37844 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b378e0 ["INT_ADD", "register:40f0:8", ["const:b378e0:8", "const:4:8"]]
+ 00b378e0 ["CALL", null, ["callee:00c57f80:8"]]
- 00b377d8 ["INT_ADD", "register:40f0:8", ["const:b377d8:8", "const:4:8"]]
- 00b377d8 ["CALL", null, ["callee:00588eac:8"]]
+ 00b37874 ["INT_ADD", "register:40f0:8", ["const:b37874:8", "const:4:8"]]
+ 00b37874 ["CALL", null, ["callee:00588eac:8"]]
- 00b377e0 ["INT_ADD", "register:40f0:8", ["const:b377e0:8", "const:4:8"]]
- 00b377e0 ["CALL", null, ["callee:0058919c:8"]]
+ 00b3787c ["INT_ADD", "register:40f0:8", ["const:b3787c:8", "const:4:8"]]
+ 00b3787c ["CALL", null, ["callee:0058919c:8"]]
~~~


<a id="compare-ba9929dd7ce621fc251b7da347720186"></a>

### [`00b378e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b37/00b378e8.md) → [`00b37984`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b37/00b37984.md) FUN_00b37984

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`008877d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00887/008877d8.md) · 呼出先 8件 [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`00588e6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00588/00588e6c.md) [`00589144`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589144.md) [`0058915c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/0058915c.md) [`00589320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589320.md)
- 新版 呼出元 1件 [`00887830`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/00887830.md) · 呼出先 8件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, store_value

命令の説明率　旧版 95.08% / 新版 95.08%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b379c8",
      "incomplete_value": true,
      "site": "00b379e0",
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
                "const:97:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b3792c",
      "incomplete_value": true,
      "site": "00b37944",
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
                "const:eb:8"
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
    "new": null,
    "old": {
      "definition_site": "00b379a4",
      "incomplete_value": true,
      "site": "00b379b0",
      "value": [
        "live",
        "register:4000:8"
      ]
    },
    "ordinal": 8,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b379a8",
      "incomplete_value": true,
      "site": "00b379b0",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "INT_AND",
            "4",
            [
              [
                "live",
                "register:4098:4"
              ],
              [
                "leaf",
                "const:1:4"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 8,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b379c8",
      "READ",
      [
        "storage",
        "002bd0eb",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b379c8",
      "READ",
      [
        "storage",
        "002bd097",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b37914 ["INT_ADD", "register:40f0:8", ["const:b37914:8", "const:4:8"]]
- 00b37914 ["CALL", null, ["callee:0058919c:8"]]
+ 00b379b0 ["INT_ADD", "register:40f0:8", ["const:b379b0:8", "const:4:8"]]
+ 00b379b0 ["CALL", null, ["callee:0058919c:8"]]
- 00b379b0 ["INT_ADD", "register:40f0:8", ["const:b379b0:8", "const:4:8"]]
- 00b379b0 ["CALL", null, ["callee:00574d2c:8"]]
+ 00b37a4c ["INT_ADD", "register:40f0:8", ["const:b37a4c:8", "const:4:8"]]
+ 00b37a4c ["CALL", null, ["callee:00574d2c:8"]]
- 00b3790c ["INT_ADD", "register:40f0:8", ["const:b3790c:8", "const:4:8"]]
- 00b3790c ["CALL", null, ["callee:00588eac:8"]]
+ 00b379a8 ["INT_ADD", "register:40f0:8", ["const:b379a8:8", "const:4:8"]]
+ 00b379a8 ["CALL", null, ["callee:00588eac:8"]]
~~~


<a id="compare-6cca727580de135029efc62ee672a584"></a>

### [`00b37a18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b37/00b37a18.md) → [`00b37ab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b37/00b37ab4.md) FUN_00b37ab4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`008882ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00888/008882ac.md) [`0088bbec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088b/0088bbec.md) · 呼出先 8件 [`00497a48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497a48.md) [`00588e6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00588/00588e6c.md) [`00589144`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589144.md) [`0058915c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/0058915c.md) [`00589320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589320.md)
- 新版 呼出元 2件 [`00888304`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00888/00888304.md) [`0088bc44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088bc44.md) · 呼出先 8件 [`00497a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497a88.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 71.43% / 新版 71.43%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b37acc",
      "incomplete_value": true,
      "site": "00b37ad4",
      "value": [
        "live",
        "register:4000:8"
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
      "unmatched:00b37a1c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b37a20",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b37a24",
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
      "00b37ab8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b37abc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b37ac0",
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
- 00b37a38 ["INT_ADD", "register:40f0:8", ["const:b37a38:8", "const:4:8"]]
- 00b37a38 ["CALL", null, ["callee:00588eac:8"]]
+ 00b37ad4 ["INT_ADD", "register:40f0:8", ["const:b37ad4:8", "const:4:8"]]
+ 00b37ad4 ["CALL", null, ["callee:00588eac:8"]]
- 00b37ad4 ["INT_ADD", "register:40f0:8", ["const:b37ad4:8", "const:4:8"]]
- 00b37ad4 ["CALL", null, ["callee:00497a88:8"]]
+ 00b37b70 ["INT_ADD", "register:40f0:8", ["const:b37b70:8", "const:4:8"]]
+ 00b37b70 ["CALL", null, ["callee:00497a88:8"]]
- 00b37a18 ["INT_SUB", "register:8:8", ["register:8:8", "const:70:8"]]
~~~


<a id="compare-7198da2d02fc8e6c4abce1c662e324cd"></a>

### [`00b37b88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b37/00b37b88.md) → [`00b37c24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b37/00b37c24.md) FUN_00b37c24

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`00889ba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00889/00889ba4.md) [`0088a388`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088a/0088a388.md) [`0088bbec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088b/0088bbec.md) · 呼出先 11件 [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`0057bea8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0057b/0057bea8.md) [`00588e6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00588/00588e6c.md) [`00589144`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589144.md) [`0058915c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/0058915c.md)
- 新版 呼出元 3件 [`00889bfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00889/00889bfc.md) [`0088a3e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088a3e0.md) [`0088bc44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088bc44.md) · 呼出先 11件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`0057bee8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0057b/0057bee8.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 86.82% / 新版 86.82%

優先判定に残った影響 `call_argument_candidate` 8件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b37c8c",
      "incomplete_value": false,
      "site": "00b37c98",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1125000:8"
          ],
          [
            "leaf",
            "const:1c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b37bf0",
      "incomplete_value": false,
      "site": "00b37bfc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1125000:8"
          ],
          [
            "leaf",
            "const:c0:8"
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
      "definition_site": "00b37d0c",
      "incomplete_value": false,
      "site": "00b37d18",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1125000:8"
          ],
          [
            "leaf",
            "const:1f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b37c70",
      "incomplete_value": false,
      "site": "00b37c7c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1125000:8"
          ],
          [
            "leaf",
            "const:f0:8"
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
      "definition_site": "00b37da8",
      "incomplete_value": true,
      "site": "00b37db0",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "old": null,
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
      "00b37c8c",
      "PARAM",
      [
        "storage",
        "011250c0",
        null,
        null
      ]
    ],
    [
      "00b37ca4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b37c18"
      ]
    ],
    [
      "00b37d0c",
      "PARAM",
      [
        "storage",
        "011250f0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b37c8c",
      "PARAM",
      [
        "storage",
        "011251c0",
        null,
        null
      ]
    ],
    [
      "00b37ca4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b37cb4"
      ]
    ],
    [
      "00b37d0c",
      "PARAM",
      [
        "storage",
        "011251f0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b37bfc ["INT_ADD", "register:40f0:8", ["const:b37bfc:8", "const:4:8"]]
- 00b37bfc ["CALL", null, ["callee:008895c4:8"]]
+ 00b37c98 ["INT_ADD", "register:40f0:8", ["const:b37c98:8", "const:4:8"]]
+ 00b37c98 ["CALL", null, ["callee:008895c4:8"]]
- 00b37c7c ["INT_ADD", "register:40f0:8", ["const:b37c7c:8", "const:4:8"]]
- 00b37c7c ["CALL", null, ["callee:0057bee8:8"]]
+ 00b37d18 ["INT_ADD", "register:40f0:8", ["const:b37d18:8", "const:4:8"]]
+ 00b37d18 ["CALL", null, ["callee:0057bee8:8"]]
- 00b37c98 ["COPY", "register:4040:8", ["const:20:8"]]
~~~


<a id="compare-b069a5c05fb5c0b9c32f22f6c9724bbb"></a>

### [`00b37dc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b37/00b37dc8.md) → [`00b37e64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b37/00b37e64.md) FUN_00b37e64

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00888428`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00888/00888428.md) · 呼出先 16件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`00588e6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00588/00588e6c.md) [`00589144`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589144.md) [`0058915c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/0058915c.md)
- 新版 呼出元 1件 [`00888480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00888/00888480.md) · 呼出先 16件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 81.40% / 新版 81.40%

優先判定に残った影響 `call_argument_candidate` 3件, `store_condition` 1件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 5件, `unresolved_store_alignment` 18件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b380f4",
      "incomplete_value": true,
      "site": "00b38100",
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
    "ordinal": 22,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b380f8",
      "incomplete_value": true,
      "site": "00b38100",
      "value": [
        "live",
        "register:8:8"
      ]
    },
    "ordinal": 22,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b381dc",
      "incomplete_value": true,
      "site": "00b381e0",
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
      "unmatched:00b37dcc",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b37dd0",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b37dd4",
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
      "00b37e68",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00b37e6c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00b37e70",
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
- 00b38034 ["BRANCH", null, ["local:b49:8"]]
+ 00b380d0 ["BRANCH", null, ["local:b46:8"]]
- 00b38064 ["BRANCH", null, ["local:b54:8"]]
+ 00b38100 ["BRANCH", null, ["local:b51:8"]]
- 00b38100 ["INT_ADD", "register:40f0:8", ["const:b38100:8", "const:4:8"]]
- 00b38100 ["CALL", null, ["callee:00589910:8"]]
+ 00b3819c ["INT_ADD", "register:40f0:8", ["const:b3819c:8", "const:4:8"]]
+ 00b3819c ["CALL", null, ["callee:00589910:8"]]
~~~


<a id="compare-3a7d46f0079f0eebdb1baa4e917bffba"></a>

### [`00b384c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b38/00b384c0.md) → [`00b3855c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b38/00b3855c.md) FUN_00b3855c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00888dc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00888/00888dc8.md) · 呼出先 15件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`00588e6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00588/00588e6c.md) [`00589144`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589144.md) [`0058915c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/0058915c.md)
- 新版 呼出元 1件 [`00888e20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00888/00888e20.md) · 呼出先 15件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 83.47% / 新版 83.47%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b385e0",
      "incomplete_value": true,
      "site": "00b385e4",
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
    "ordinal": 8,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b38638",
      "incomplete_value": true,
      "site": "00b3863c",
      "value": [
        "live",
        "register:8:8"
      ]
    },
    "ordinal": 14,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b38658",
      "incomplete_value": true,
      "site": "00b3865c",
      "value": [
        "live",
        "register:8:8"
      ]
    },
    "ordinal": 16,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b38510",
      "READ",
      [
        "storage",
        "002b151b",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b38514",
      "READ",
      [
        "storage",
        "002b152a",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b3851c",
      "WRITE",
      [
        "storage",
        "Stack[-0x90]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b385ac",
      "READ",
      [
        "storage",
        "002b14bf",
        null,
        "string"
      ]
    ],
    [
      "00b385b0",
      "READ",
      [
        "storage",
        "002b14ce",
        null,
        "string"
      ]
    ],
    [
      "00b385b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x90]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b385e4 ["INT_ADD", "register:40f0:8", ["const:b385e4:8", "const:4:8"]]
- 00b385e4 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b38680 ["INT_ADD", "register:40f0:8", ["const:b38680:8", "const:4:8"]]
+ 00b38680 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b385e4 ["COPY", "tmp:0:8", ["register:4040:8"]]
+ 00b385e4 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:ffffffffffffffe6:8"]]
+ 00b385e4 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
- 00b3863c ["INT_ADD", "register:40f0:8", ["const:b3863c:8", "const:4:8"]]
- 00b3863c ["CALL", null, ["callee:00589898:8"]]
+ 00b386d8 ["INT_ADD", "register:40f0:8", ["const:b386d8:8", "const:4:8"]]
+ 00b386d8 ["CALL", null, ["callee:00589898:8"]]
~~~


<a id="compare-a40d479a441484fd2444adba05a843d7"></a>

### [`00b38708`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b38/00b38708.md) → [`00b387a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b38/00b387a4.md) Java_jp_co_ponos_battlecats_IronSourceImplementation_onInitializationComplete

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 57.14% / 新版 57.14%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b3870c",
      "READ",
      [
        "storage",
        "011250b0",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b38710",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b387bc"
      ]
    ]
  ],
  "added": [
    [
      "00b387a8",
      "READ",
      [
        "storage",
        "011251b0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b387ac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b387bc"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b38708 ["COPY", "register:4040:8", ["const:1125000:8"]]
- 00b3870c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:b0:8"]]
- 00b3870c ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
- 00b38710 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00b38710 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
~~~


<a id="compare-d29601f6b8d57c6e34efc41ab16caa72"></a>

### [`00b38724`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b38/00b38724.md) → [`00b387c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b38/00b387c0.md) Java_jp_co_ponos_battlecats_IronSourceImplementation_onAdReady

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 8件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00589954`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589954.md) [`00596f2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00596/00596f2c.md) [`00597614`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597614.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 0件  · 呼出先 8件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00589994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589994.md) [`00596f6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00596/00596f6c.md) [`00597654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597654.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 83.91% / 新版 83.91%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 3件, `unresolved_branch_alignment` 5件, `unresolved_call_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b38894",
      "incomplete_value": true,
      "site": "00b3889c",
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00b3874c"
      ],
      [
        "FALL_THROUGH",
        "00b387e8"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b387e8",
      "incomplete_value": true,
      "site": "00b38808",
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
      "definition_site": "00b3874c",
      "incomplete_value": true,
      "site": "00b3876c",
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
    "ordinal": 6,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00b3874c"
      ],
      [
        "FALL_THROUGH",
        "00b387e8"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b387e8",
      "incomplete_value": true,
      "site": "00b38808",
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
      "definition_site": "00b3874c",
      "incomplete_value": true,
      "site": "00b3876c",
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
      "unmatched:00b38748",
      "READ",
      [
        "storage",
        "011250e0",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b3874c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b388bc"
      ]
    ],
    [
      "00b38820",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b387b0"
      ]
    ]
  ],
  "added": [
    [
      "00b387e4",
      "READ",
      [
        "storage",
        "011251e0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b387e8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b388bc"
      ]
    ],
    [
      "00b38820",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b3884c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b38800 ["INT_ADD", "register:40f0:8", ["const:b38800:8", "const:4:8"]]
- 00b38800 ["CALL", null, ["callee:00c53da0:8"]]
+ 00b3889c ["INT_ADD", "register:40f0:8", ["const:b3889c:8", "const:4:8"]]
+ 00b3889c ["CALL", null, ["callee:00c53da0:8"]]
- 00b38748 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:e0:8"]]
- 00b38748 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b3874c ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00b3874c ["CBRANCH", null, ["local:b16:8", "tmp:0:1"]]
~~~


<a id="compare-63ea331fea827fd97c421c80f73f0503"></a>

### [`00b388f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b38/00b388f0.md) → [`00b3898c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b38/00b3898c.md) Java_jp_co_ponos_battlecats_IronSourceImplementation_onAdOpened

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 8件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00589954`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589954.md) [`00596f2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00596/00596f2c.md) [`00597614`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597614.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 0件  · 呼出先 8件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00589994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589994.md) [`00596f6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00596/00596f6c.md) [`00597654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597654.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 75.86% / 新版 75.86%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 3件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b389b4",
      "incomplete_value": true,
      "site": "00b389b4",
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
      "definition_site": "00b38918",
      "incomplete_value": true,
      "site": "00b38918",
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
      "definition_site": "00b38abc",
      "incomplete_value": true,
      "site": "00b38ac0",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "old": null,
    "ordinal": 13,
    "slot": 1
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00b38918"
      ],
      [
        "FALL_THROUGH",
        "00b389b4"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b389b4",
      "incomplete_value": true,
      "site": "00b389d4",
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
      "definition_site": "00b38918",
      "incomplete_value": true,
      "site": "00b38938",
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
      "00b389b0",
      "READ",
      [
        "storage",
        "011251a0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b389b4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b389ec"
      ]
    ],
    [
      "00b38a34",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b389a4"
      ]
    ]
  ],
  "added": [
    [
      "00b389b0",
      "READ",
      [
        "storage",
        "011252a0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b389b4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b38a88"
      ]
    ],
    [
      "00b38a34",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b38a40"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b38918 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00b38918 ["CBRANCH", null, ["local:b14:8", "tmp:0:1"]]
+ 00b389b4 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00b389b4 ["CBRANCH", null, ["local:b20:8", "tmp:0:1"]]
- 00b389b4 ["INT_SUB", "register:4008:8", ["register:40e8:8", "const:18:8"]]
- 00b389d4 ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00b389d4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-f77c4900377539ca86a5ad4c716a8790"></a>

### [`00b38aa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b38/00b38aa0.md) → [`00b38b3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b38/00b38b3c.md) Java_jp_co_ponos_battlecats_IronSourceImplementation_onAdShowFailed

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00589954`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589954.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00589994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589994.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 70.59% / 新版 70.59%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 14件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b38b74",
      "incomplete_value": true,
      "site": "00b38b88",
      "value": [
        "live",
        "register:4010:8"
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
      "unmatched:00b38aa4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b38aa8",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b38aac",
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
      "00b38b40",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00b38b44",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00b38b48",
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
- 00b38aec ["INT_ADD", "register:40f0:8", ["const:b38aec:8", "const:4:8"]]
- 00b38aec ["CALL", null, ["callee:00589994:8"]]
+ 00b38b88 ["INT_ADD", "register:40f0:8", ["const:b38b88:8", "const:4:8"]]
+ 00b38b88 ["CALL", null, ["callee:00589994:8"]]
- 00b38aa0 ["INT_SUB", "register:8:8", ["register:8:8", "const:a0:8"]]
- 00b38aa4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b38aa4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b38aa4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:50:8"]]
- 00b38aa4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-6ae22d9081ea9575f38bc3d5211ddc87"></a>

### [`00b38bf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b38/00b38bf8.md) → [`00b38c94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b38/00b38c94.md) Java_jp_co_ponos_battlecats_IronSourceImplementation_onAdRewarded

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00589954`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589954.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00589994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589994.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_value, constant, operands_and_dependencies, store_condition

命令の説明率　旧版 91.11% / 新版 91.11%

優先判定に残った影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b38cbc",
      "incomplete_value": true,
      "site": "00b38cbc",
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
      "definition_site": "00b38c20",
      "incomplete_value": true,
      "site": "00b38c20",
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
    "guard": [
      [
        "FALL_THROUGH",
        "00b38c20"
      ],
      [
        "FALL_THROUGH",
        "00b38cbc"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b38cbc",
      "incomplete_value": true,
      "site": "00b38ce4",
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
      "definition_site": "00b38c20",
      "incomplete_value": true,
      "site": "00b38c48",
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
      "00b38cb8",
      "READ",
      [
        "storage",
        "01125170",
        null,
        "undefined8"
      ]
    ],
    [
      "00b38cd8",
      "READ",
      [
        "storage",
        "01125170",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b38cb8",
      "READ",
      [
        "storage",
        "01125270",
        null,
        "undefined8"
      ]
    ],
    [
      "00b38cd8",
      "READ",
      [
        "storage",
        "01125270",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b38c1c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:170:8"]]
- 00b38c1c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b38cb8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:270:8"]]
+ 00b38cb8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b38c30 ["INT_ADD", "register:40f0:8", ["const:b38c30:8", "const:4:8"]]
- 00b38c30 ["CALL", null, ["callee:00589994:8"]]
+ 00b38ccc ["INT_ADD", "register:40f0:8", ["const:b38ccc:8", "const:4:8"]]
+ 00b38ccc ["CALL", null, ["callee:00589994:8"]]
- 00b38c3c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:170:8"]]
- 00b38c3c ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b38cd8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:270:8"]]
+ 00b38cd8 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-7b18c25cf91111dbe1f1b9420276ac5e"></a>

### [`00b38cd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b38/00b38cd8.md) → [`00b38d74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b38/00b38d74.md) Java_jp_co_ponos_battlecats_IronSourceImplementation_onAdClosed

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 8件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00589954`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589954.md) [`00596f2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00596/00596f2c.md) [`00597614`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597614.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 0件  · 呼出先 8件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00589994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589994.md) [`00596f6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00596/00596f6c.md) [`00597654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597654.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

変更の種類 branch_condition_or_target, branch_value, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 95.40% / 新版 95.40%

優先判定に残った影響 `branch_value` 1件, `store_condition` 3件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b38d9c",
      "incomplete_value": true,
      "site": "00b38d9c",
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
      "definition_site": "00b38d00",
      "incomplete_value": true,
      "site": "00b38d00",
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
    "guard": [
      [
        "FALL_THROUGH",
        "00b38d00"
      ],
      [
        "FALL_THROUGH",
        "00b38d9c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b38d9c",
      "incomplete_value": true,
      "site": "00b38dbc",
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
      "definition_site": "00b38d00",
      "incomplete_value": true,
      "site": "00b38d20",
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
    "ordinal": 6,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00b38d00"
      ],
      [
        "FALL_THROUGH",
        "00b38d9c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b38d9c",
      "incomplete_value": true,
      "site": "00b38dbc",
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
      "definition_site": "00b38d00",
      "incomplete_value": true,
      "site": "00b38d20",
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
      "00b38d98",
      "READ",
      [
        "storage",
        "011251d0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b38e1c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b38d8c"
      ]
    ],
    [
      "unmatched:00b38d8c",
      "READ",
      [
        "storage",
        "011251d0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b38d98",
      "READ",
      [
        "storage",
        "011252d0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b38e1c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b38e28"
      ]
    ],
    [
      "00b38e28",
      "READ",
      [
        "storage",
        "011252d0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b38cfc ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:1d0:8"]]
- 00b38cfc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b38d98 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:2d0:8"]]
+ 00b38d98 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b38d0c ["INT_ADD", "register:40f0:8", ["const:b38d0c:8", "const:4:8"]]
- 00b38d0c ["CALL", null, ["callee:00589994:8"]]
+ 00b38da8 ["INT_ADD", "register:40f0:8", ["const:b38da8:8", "const:4:8"]]
+ 00b38da8 ["CALL", null, ["callee:00589994:8"]]
- 00b38d18 ["INT_ADD", "register:40f0:8", ["const:b38d18:8", "const:4:8"]]
- 00b38d18 ["CALL", null, ["callee:00597654:8"]]
+ 00b38db4 ["INT_ADD", "register:40f0:8", ["const:b38db4:8", "const:4:8"]]
+ 00b38db4 ["CALL", null, ["callee:00597654:8"]]
~~~


<a id="compare-b553da2366eede14871f62402b89b5a8"></a>

### [`00b38e88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b38/00b38e88.md) → [`00b38f24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b38/00b38f24.md) _INIT_272

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00b37244`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b37/00b37244.md) [`00b37274`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b37/00b37274.md) [`00b372f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b37/00b372f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00b372e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b37/00b372e0.md) [`00b37310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b37/00b37310.md) [`00b37394`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b37/00b37394.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md)

変更の種類 call, call_count, constant, operands_and_dependencies, operation_sequence, store_destination, unresolved_call_alignment

命令の説明率　旧版 34.38% / 新版 34.38%

優先判定に残った影響 `store_destination` 7件, `unresolved_call_alignment` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b38f4c",
      "incomplete_value": false,
      "site": "00b38f4c",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:190:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b38eb0",
      "incomplete_value": false,
      "site": "00b38eb0",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:90:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:20:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b38f68",
      "incomplete_value": false,
      "site": "00b38f68",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:1c0:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b38ecc",
      "incomplete_value": false,
      "site": "00b38ecc",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:c0:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:20:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b38f6c",
      "incomplete_value": false,
      "site": "00b38f6c",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:1c0:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b38ed0",
      "incomplete_value": false,
      "site": "00b38ed0",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:c0:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:50:8"
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
      "00b38f3c",
      "PARAM",
      [
        "storage",
        "01125090",
        null,
        null
      ]
    ],
    [
      "unmatched:00b38ea8",
      "PARAM",
      [
        "storage",
        "00b37244",
        null,
        null
      ]
    ],
    [
      "00b38f48",
      "PARAM",
      [
        "storage",
        "00c62f90",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b38f3c",
      "PARAM",
      [
        "storage",
        "01125190",
        null,
        null
      ]
    ],
    [
      "00b38f44",
      "PARAM",
      [
        "storage",
        "00b372e0",
        null,
        null
      ]
    ],
    [
      "00b38f48",
      "PARAM",
      [
        "storage",
        "00c63060",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b38e94 ["COPY", "register:4098:8", ["const:c62000:8"]]
+ 00b38f30 ["COPY", "register:4098:8", ["const:c63000:8"]]
- 00b38e98 ["COPY", "tmp:0:8", ["const:f90:8"]]
- 00b38e98 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 00b38e98 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 00b38e98 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 00b38f34 ["COPY", "tmp:0:8", ["const:60:8"]]
+ 00b38f34 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 00b38f34 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 00b38f34 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
- 00b38e9c ["COPY", "register:4008:8", ["const:1125000:8"]]
~~~


<a id="compare-41e27564f632af702c778f78905205de"></a>

### [`00b38f18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b38/00b38f18.md) → [`00b38fb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b38/00b38fb4.md) FUN_00b38fb4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0089110c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00891/0089110c.md) · 呼出先 12件 [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`00588e6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00588/00588e6c.md) [`00589144`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589144.md) [`0058915c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/0058915c.md) [`00589320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589320.md)
- 新版 呼出元 1件 [`00891164`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/00891164.md) · 呼出先 12件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 85.19% / 新版 85.19%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b39028",
      "incomplete_value": false,
      "site": "00b39034",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1125000:8"
          ],
          [
            "leaf",
            "const:330:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b38f8c",
      "incomplete_value": false,
      "site": "00b38f98",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1125000:8"
          ],
          [
            "leaf",
            "const:230:8"
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
      "00b39028",
      "PARAM",
      [
        "storage",
        "01125230",
        null,
        null
      ]
    ],
    [
      "unmatched:00b38fe0",
      "READ",
      [
        "storage",
        "002c0826",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b38fe4",
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
      "00b39028",
      "PARAM",
      [
        "storage",
        "01125330",
        null,
        null
      ]
    ],
    [
      "00b3907c",
      "READ",
      [
        "storage",
        "002c0866",
        null,
        "string"
      ]
    ],
    [
      "00b39080",
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
- 00b38f98 ["INT_ADD", "register:40f0:8", ["const:b38f98:8", "const:4:8"]]
- 00b38f98 ["CALL", null, ["callee:0058f474:8"]]
+ 00b39034 ["INT_ADD", "register:40f0:8", ["const:b39034:8", "const:4:8"]]
+ 00b39034 ["CALL", null, ["callee:0058f474:8"]]
- 00b39034 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 00b39034 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00b39034 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00b39034 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 00b390d0 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 00b390d0 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00b390d0 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00b390d0 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
- 00b38f40 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00b38f40 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00b38fdc ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00b38fdc ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-69712877a66b98645045d17644ffe105"></a>

### [`00b39114`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b39/00b39114.md) → [`00b391b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b39/00b391b0.md) FUN_00b391b0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`0089110c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00891/0089110c.md) [`00891304`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00891/00891304.md) [`00891a0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00891/00891a0c.md) · 呼出先 8件 [`00497a48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497a48.md) [`00588e6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00588/00588e6c.md) [`00589144`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589144.md) [`0058915c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/0058915c.md) [`00589320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589320.md)
- 新版 呼出元 3件 [`00891164`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/00891164.md) [`0089135c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/0089135c.md) [`00891a64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/00891a64.md) · 呼出先 8件 [`00497a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497a88.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_value, unresolved_call_alignment

命令の説明率　旧版 93.42% / 新版 93.42%

優先判定に残った影響 `store_value` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b391f0",
      "incomplete_value": true,
      "site": "00b39208",
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
                "const:2af000:8"
              ],
              [
                "leaf",
                "const:24e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b39154",
      "incomplete_value": true,
      "site": "00b3916c",
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
                "const:2af000:8"
              ],
              [
                "leaf",
                "const:2aa:8"
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
      "00b391f0",
      "READ",
      [
        "storage",
        "002af2aa",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b391e4",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00b391f0",
      "READ",
      [
        "storage",
        "002af24e",
        null,
        "string"
      ]
    ],
    [
      "00b39280",
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
- 00b39134 ["INT_ADD", "register:40f0:8", ["const:b39134:8", "const:4:8"]]
- 00b39134 ["CALL", null, ["callee:00588eac:8"]]
+ 00b391d0 ["INT_ADD", "register:40f0:8", ["const:b391d0:8", "const:4:8"]]
+ 00b391d0 ["CALL", null, ["callee:00588eac:8"]]
- 00b3913c ["INT_ADD", "register:40f0:8", ["const:b3913c:8", "const:4:8"]]
- 00b3913c ["CALL", null, ["callee:0058919c:8"]]
+ 00b391d8 ["INT_ADD", "register:40f0:8", ["const:b391d8:8", "const:4:8"]]
+ 00b391d8 ["CALL", null, ["callee:0058919c:8"]]
- 00b39148 ["COPY", "tmp:0:8", ["const:2aa:8"]]
- 00b39148 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00b39148 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00b39148 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00b391e4 ["COPY", "tmp:0:8", ["const:24e:8"]]
+ 00b391e4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00b391e4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00b391e4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-a32550392ae5f8d8865faf303172fc2e"></a>

### [`00b39280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b39/00b39280.md) → [`00b3931c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b39/00b3931c.md) FUN_00b3931c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`0075d75c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0075d/0075d75c.md) [`00769d84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00769/00769d84.md) [`0089110c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00891/0089110c.md) [`00892bf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00892/00892bf8.md) · 呼出先 8件 [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`00588e6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00588/00588e6c.md) [`00589144`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589144.md) [`0058915c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/0058915c.md) [`00589320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589320.md)
- 新版 呼出元 4件 [`0075d7b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075d/0075d7b4.md) [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) [`00891164`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/00891164.md) [`00892c50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892c50.md) · 呼出先 8件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 91.80% / 新版 91.80%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b392ec",
      "incomplete_value": true,
      "site": "00b392f8",
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b392f0",
      "incomplete_value": true,
      "site": "00b392f8",
      "value": [
        "live",
        "register:8:8"
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
      "unmatched:00b392bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b392c4",
      "READ",
      [
        "storage",
        "002a4c92",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b392dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x57]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b39358",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "00b39360",
      "READ",
      [
        "storage",
        "002a4c36",
        null,
        "string"
      ]
    ],
    [
      "00b39378",
      "WRITE",
      [
        "storage",
        "Stack[-0x57]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b392f8 ["INT_ADD", "register:40f0:8", ["const:b392f8:8", "const:4:8"]]
- 00b392f8 ["CALL", null, ["callee:00589360:8"]]
+ 00b39394 ["INT_ADD", "register:40f0:8", ["const:b39394:8", "const:4:8"]]
+ 00b39394 ["CALL", null, ["callee:00589360:8"]]
- 00b392a4 ["INT_ADD", "register:40f0:8", ["const:b392a4:8", "const:4:8"]]
- 00b392a4 ["CALL", null, ["callee:00588eac:8"]]
+ 00b39340 ["INT_ADD", "register:40f0:8", ["const:b39340:8", "const:4:8"]]
+ 00b39340 ["CALL", null, ["callee:00588eac:8"]]
- 00b392ac ["INT_ADD", "register:40f0:8", ["const:b392ac:8", "const:4:8"]]
- 00b392ac ["CALL", null, ["callee:0058919c:8"]]
+ 00b39348 ["INT_ADD", "register:40f0:8", ["const:b39348:8", "const:4:8"]]
+ 00b39348 ["CALL", null, ["callee:0058919c:8"]]
~~~


<a id="compare-bfb14c0907a4327b7ff8818e7424c400"></a>

### [`00b393b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b39/00b393b0.md) → [`00b3944c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b39/00b3944c.md) FUN_00b3944c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a9add8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9a/00a9add8.md) · 呼出先 8件 [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`00588e6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00588/00588e6c.md) [`00589144`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589144.md) [`0058915c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/0058915c.md) [`00589320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589320.md)
- 新版 呼出元 1件 [`00a9ae48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9ae48.md) · 呼出先 8件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 73.77% / 新版 73.77%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b3941c",
      "incomplete_value": true,
      "site": "00b39428",
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b39420",
      "incomplete_value": true,
      "site": "00b39428",
      "value": [
        "live",
        "register:8:8"
      ]
    },
    "ordinal": 2,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b39424",
      "incomplete_value": true,
      "site": "00b39428",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "ordinal": 2,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b393b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b393b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b393bc",
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
      "00b39450",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b39454",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b39458",
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
- 00b39428 ["INT_ADD", "register:40f0:8", ["const:b39428:8", "const:4:8"]]
- 00b39428 ["CALL", null, ["callee:00589360:8"]]
+ 00b394c4 ["INT_ADD", "register:40f0:8", ["const:b394c4:8", "const:4:8"]]
+ 00b394c4 ["CALL", null, ["callee:00589360:8"]]
- 00b39478 ["INT_ADD", "register:40f0:8", ["const:b39478:8", "const:4:8"]]
- 00b39478 ["CALL", null, ["callee:00574d2c:8"]]
+ 00b39514 ["INT_ADD", "register:40f0:8", ["const:b39514:8", "const:4:8"]]
+ 00b39514 ["CALL", null, ["callee:00574d2c:8"]]
- 00b393b0 ["INT_SUB", "register:8:8", ["register:8:8", "const:70:8"]]
~~~


<a id="compare-63fc617e712d5d8a2587a04f4928eeff"></a>

### [`00b394e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b39/00b394e0.md) → [`00b3957c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b39/00b3957c.md) FUN_00b3957c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a9add8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9a/00a9add8.md) · 呼出先 8件 [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`00588e6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00588/00588e6c.md) [`00589144`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589144.md) [`0058915c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/0058915c.md) [`00589320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589320.md)
- 新版 呼出元 1件 [`00a9ae48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9ae48.md) · 呼出先 8件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 88.71% / 新版 88.71%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b39584",
      "incomplete_value": true,
      "site": "00b39588",
      "value": [
        "INT_SUB",
        "8",
        [
          [
            "live",
            "register:40e8:8"
          ],
          [
            "leaf",
            "const:10:8"
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
      "unmatched:00b3951c",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b39528",
      "READ",
      [
        "storage",
        "002ae081",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b39544",
      "WRITE",
      [
        "storage",
        "Stack[-0x57]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b395b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "00b395c4",
      "READ",
      [
        "storage",
        "002ae025",
        null,
        "string"
      ]
    ],
    [
      "00b395e0",
      "WRITE",
      [
        "storage",
        "Stack[-0x57]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b39588 ["INT_ADD", "register:40f0:8", ["const:b39588:8", "const:4:8"]]
- 00b39588 ["CALL", null, ["callee:00589184:8"]]
+ 00b39624 ["INT_ADD", "register:40f0:8", ["const:b39624:8", "const:4:8"]]
+ 00b39624 ["CALL", null, ["callee:00589184:8"]]
- 00b39504 ["INT_ADD", "register:40f0:8", ["const:b39504:8", "const:4:8"]]
- 00b39504 ["CALL", null, ["callee:00588eac:8"]]
+ 00b395a0 ["INT_ADD", "register:40f0:8", ["const:b395a0:8", "const:4:8"]]
+ 00b395a0 ["CALL", null, ["callee:00588eac:8"]]
- 00b3950c ["INT_ADD", "register:40f0:8", ["const:b3950c:8", "const:4:8"]]
- 00b3950c ["CALL", null, ["callee:0058919c:8"]]
+ 00b395a8 ["INT_ADD", "register:40f0:8", ["const:b395a8:8", "const:4:8"]]
+ 00b395a8 ["CALL", null, ["callee:0058919c:8"]]
~~~


<a id="compare-2692129aff87a6e4e7814b386fef816d"></a>

### [`00b39614`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b39/00b39614.md) → [`00b396b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b39/00b396b0.md) FUN_00b396b0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0089314c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00893/0089314c.md) · 呼出先 12件 [`00497a48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497a48.md) [`00588e6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00588/00588e6c.md) [`00589144`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589144.md) [`0058915c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/0058915c.md) [`00589320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589320.md)
- 新版 呼出元 1件 [`008931a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/008931a4.md) · 呼出先 12件 [`00497a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497a88.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 82.00% / 新版 82.00%

優先判定に残った影響 `unresolved_store_alignment` 8件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b39660",
      "READ",
      [
        "storage",
        "002a7059",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b39664",
      "READ",
      [
        "storage",
        "002a7063",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b3966c",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b396fc",
      "READ",
      [
        "storage",
        "002a6ffd",
        null,
        "string"
      ]
    ],
    [
      "00b39700",
      "READ",
      [
        "storage",
        "002a7007",
        null,
        "string"
      ]
    ],
    [
      "00b39708",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b39638 ["INT_ADD", "register:40f0:8", ["const:b39638:8", "const:4:8"]]
- 00b39638 ["CALL", null, ["callee:00588eac:8"]]
+ 00b396d4 ["INT_ADD", "register:40f0:8", ["const:b396d4:8", "const:4:8"]]
+ 00b396d4 ["CALL", null, ["callee:00588eac:8"]]
- 00b39640 ["INT_ADD", "register:40f0:8", ["const:b39640:8", "const:4:8"]]
- 00b39640 ["CALL", null, ["callee:0058919c:8"]]
+ 00b396dc ["INT_ADD", "register:40f0:8", ["const:b396dc:8", "const:4:8"]]
+ 00b396dc ["CALL", null, ["callee:0058919c:8"]]
- 00b3964c ["INT_ADD", "register:40f0:8", ["const:b3964c:8", "const:4:8"]]
- 00b3964c ["CALL", null, ["callee:00c57f60:8"]]
+ 00b396e8 ["INT_ADD", "register:40f0:8", ["const:b396e8:8", "const:4:8"]]
+ 00b396e8 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-2fad5601233b105bb939d588621dbc38"></a>

### [`00b397f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b39/00b397f0.md) → [`00b3988c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b39/00b3988c.md) FUN_00b3988c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`0089243c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00892/0089243c.md) [`0089314c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00893/0089314c.md) [`0089329c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00893/0089329c.md) · 呼出先 11件 [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`00588e6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00588/00588e6c.md) [`00589144`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589144.md) [`0058915c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/0058915c.md) [`00589320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589320.md)
- 新版 呼出元 3件 [`00892494`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892494.md) [`008931a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/008931a4.md) [`008932f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/008932f4.md) · 呼出先 11件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 70.27% / 新版 70.27%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 11件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b397f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b397f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b397fc",
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
      "00b39890",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b39894",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b39898",
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
- 00b397f0 ["INT_SUB", "register:8:8", ["register:8:8", "const:90:8"]]
- 00b397f4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b397f4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b397f4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:60:8"]]
- 00b397f4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b397f8 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:70:8"]]
- 00b397f8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
~~~


<a id="compare-5108860d594fa0d0f10ea5763a667c72"></a>

### [`00b39964`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b39/00b39964.md) → [`00b39a00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b39/00b39a00.md) FUN_00b39a00

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00891304`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00891/00891304.md) · 呼出先 14件 [`0048ce84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce84.md) [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`00588e6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00588/00588e6c.md) [`00589144`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589144.md) [`0058915c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/0058915c.md)
- 新版 呼出元 1件 [`0089135c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/0089135c.md) · 呼出先 14件 [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 84.92% / 新版 84.92%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b39b9c",
      "incomplete_value": false,
      "site": "00b39bb4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1125000:8"
          ],
          [
            "leaf",
            "const:2f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b39b00",
      "incomplete_value": false,
      "site": "00b39b18",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1125000:8"
          ],
          [
            "leaf",
            "const:1f8:8"
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
      "definition_site": "00b39ba4",
      "incomplete_value": false,
      "site": "00b39bb4",
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
    "old": {
      "definition_site": "00b39b08",
      "incomplete_value": false,
      "site": "00b39b18",
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
            "const:6f5:8"
          ]
        ]
      ]
    },
    "ordinal": 12,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b39bb8",
      "incomplete_value": true,
      "site": "00b39bc0",
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
            "const:40:8"
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
      "unmatched:00b39994",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b399b0",
      "READ",
      [
        "storage",
        "002be4b1",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b399b4",
      "READ",
      [
        "storage",
        "002be4bf",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b39a30",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "00b39a4c",
      "READ",
      [
        "storage",
        "002be45d",
        null,
        "string"
      ]
    ],
    [
      "00b39a50",
      "READ",
      [
        "storage",
        "002be46b",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b39b18 ["INT_ADD", "register:40f0:8", ["const:b39b18:8", "const:4:8"]]
- 00b39b18 ["CALL", null, ["callee:00b3b148:8"]]
+ 00b39bb4 ["INT_ADD", "register:40f0:8", ["const:b39bb4:8", "const:4:8"]]
+ 00b39bb4 ["CALL", null, ["callee:00b3b148:8"]]
+ 00b39b18 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 00b39b18 ["CBRANCH", null, ["local:b15:8", "tmp:0:1"]]
- 00b39b24 ["INT_ADD", "register:40f0:8", ["const:b39b24:8", "const:4:8"]]
- 00b39b24 ["CALL", null, ["callee:00b39d98:8"]]
+ 00b39bc0 ["INT_ADD", "register:40f0:8", ["const:b39bc0:8", "const:4:8"]]
+ 00b39bc0 ["CALL", null, ["callee:00b39d98:8"]]
~~~


<a id="compare-87728a16a7ab1033a19e1333fd61992a"></a>

### [`00b39f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b39/00b39f54.md) → [`00b39ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b39/00b39ff0.md) FUN_00b39ff0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00891f60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00891/00891f60.md) · 呼出先 12件 [`00497a48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497a48.md) [`00588e6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00588/00588e6c.md) [`00589144`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589144.md) [`0058915c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/0058915c.md) [`00589320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589320.md)
- 新版 呼出元 1件 [`00891fb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/00891fb8.md) · 呼出先 12件 [`00497a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497a88.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 90.99% / 新版 90.99%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b3a0b0",
      "incomplete_value": true,
      "site": "00b3a0b4",
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
    "old": null,
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b3a150",
      "incomplete_value": false,
      "site": "00b3a168",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1125000:8"
          ],
          [
            "leaf",
            "const:310:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b3a0b4",
      "incomplete_value": false,
      "site": "00b3a0cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1125000:8"
          ],
          [
            "leaf",
            "const:210:8"
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
    "new": {
      "definition_site": "00b3a158",
      "incomplete_value": false,
      "site": "00b3a168",
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
    "old": {
      "definition_site": "00b3a0bc",
      "incomplete_value": false,
      "site": "00b3a0cc",
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
            "const:6f5:8"
          ]
        ]
      ]
    },
    "ordinal": 10,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b39fa0",
      "WRITE",
      [
        "storage",
        "Stack[-0xc0]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b39fa8",
      "READ",
      [
        "storage",
        "002b153b",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b39fc8",
      "WRITE",
      [
        "storage",
        "Stack[-0xbf]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b3a03c",
      "WRITE",
      [
        "storage",
        "Stack[-0xc0]",
        null,
        null
      ]
    ],
    [
      "00b3a044",
      "READ",
      [
        "storage",
        "002b14df",
        null,
        "string"
      ]
    ],
    [
      "00b3a064",
      "WRITE",
      [
        "storage",
        "Stack[-0xbf]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3a018 ["INT_ADD", "register:40f0:8", ["const:b3a018:8", "const:4:8"]]
- 00b3a018 ["CALL", null, ["callee:00589184:8"]]
+ 00b3a0b4 ["INT_ADD", "register:40f0:8", ["const:b3a0b4:8", "const:4:8"]]
+ 00b3a0b4 ["CALL", null, ["callee:00589184:8"]]
- 00b3a0b4 ["COPY", "tmp:0:8", ["const:210:8"]]
- 00b3a0b4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b3a0b4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b3a0b4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b3a150 ["COPY", "tmp:0:8", ["const:310:8"]]
+ 00b3a150 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b3a150 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b3a150 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b3a0cc ["INT_ADD", "register:40f0:8", ["const:b3a0cc:8", "const:4:8"]]
- 00b3a0cc ["CALL", null, ["callee:00b3b46c:8"]]
+ 00b3a168 ["INT_ADD", "register:40f0:8", ["const:b3a168:8", "const:4:8"]]
+ 00b3a168 ["CALL", null, ["callee:00b3b46c:8"]]
~~~


<a id="compare-f5025a2e84fbbcfb20bff269f31d68e0"></a>

### [`00b3a3f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3a/00b3a3f0.md) → [`00b3a48c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3a/00b3a48c.md) FUN_00b3a48c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 4件 [`0089110c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00891/0089110c.md) [`00892bf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00892/00892bf8.md) [`008a42b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a4/008a42b0.md) [`008ad08c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ad/008ad08c.md) · 呼出先 10件 [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`00588e6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00588/00588e6c.md) [`00589144`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589144.md) [`0058915c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/0058915c.md) [`00589320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589320.md)
- 新版 呼出元 4件 [`00891164`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/00891164.md) [`00892c50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892c50.md) [`008a4308`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4308.md) [`008ad0e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008ad0e4.md) · 呼出先 10件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 84.85% / 新版 84.85%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b3a508",
      "incomplete_value": true,
      "site": "00b3a518",
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
    "old": null,
    "ordinal": 3,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b3a50c",
      "incomplete_value": true,
      "site": "00b3a518",
      "value": [
        "live",
        "register:8:8"
      ]
    },
    "old": null,
    "ordinal": 3,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b3a598",
      "incomplete_value": false,
      "site": "00b3a5a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1125000:8"
          ],
          [
            "leaf",
            "const:360:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b3a4fc",
      "incomplete_value": false,
      "site": "00b3a508",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1125000:8"
          ],
          [
            "leaf",
            "const:260:8"
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
      "unmatched:00b3a438",
      "READ",
      [
        "storage",
        "002a39f0",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b3a43c",
      "READ",
      [
        "storage",
        "002a3a00",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b3a440",
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
      "00b3a4d4",
      "READ",
      [
        "storage",
        "002a39a3",
        null,
        "string"
      ]
    ],
    [
      "00b3a4d8",
      "READ",
      [
        "storage",
        "002a39b3",
        null,
        "string"
      ]
    ],
    [
      "00b3a4dc",
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
- 00b3a47c ["INT_ADD", "register:40f0:8", ["const:b3a47c:8", "const:4:8"]]
- 00b3a47c ["CALL", null, ["callee:00589360:8"]]
+ 00b3a518 ["INT_ADD", "register:40f0:8", ["const:b3a518:8", "const:4:8"]]
+ 00b3a518 ["CALL", null, ["callee:00589360:8"]]
- 00b3a508 ["INT_ADD", "register:40f0:8", ["const:b3a508:8", "const:4:8"]]
- 00b3a508 ["CALL", null, ["callee:00b3b754:8"]]
+ 00b3a5a4 ["INT_ADD", "register:40f0:8", ["const:b3a5a4:8", "const:4:8"]]
+ 00b3a5a4 ["CALL", null, ["callee:00b3b754:8"]]
- 00b3a414 ["INT_ADD", "register:40f0:8", ["const:b3a414:8", "const:4:8"]]
- 00b3a414 ["CALL", null, ["callee:00588eac:8"]]
+ 00b3a4b0 ["INT_ADD", "register:40f0:8", ["const:b3a4b0:8", "const:4:8"]]
+ 00b3a4b0 ["CALL", null, ["callee:00588eac:8"]]
~~~


<a id="compare-d75bb6ebfded58874fdc4b6e57498506"></a>

### [`00b3a5b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3a/00b3a5b8.md) → [`00b3a654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3a/00b3a654.md) FUN_00b3a654

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`00892618`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00892/00892618.md) [`008a43ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a4/008a43ec.md) [`008ad1c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ad/008ad1c8.md) · 呼出先 9件 [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`00588e6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00588/00588e6c.md) [`00589144`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589144.md) [`0058915c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/0058915c.md) [`00589320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589320.md)
- 新版 呼出元 3件 [`00892670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892670.md) [`008a4444`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4444.md) [`008ad220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008ad220.md) · 呼出先 9件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 87.63% / 新版 87.63%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b3a754",
      "incomplete_value": false,
      "site": "00b3a760",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1125000:8"
          ],
          [
            "leaf",
            "const:390:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b3a6b8",
      "incomplete_value": false,
      "site": "00b3a6c4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1125000:8"
          ],
          [
            "leaf",
            "const:290:8"
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
      "unmatched:00b3a5dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b3a5f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b3a604",
      "READ",
      [
        "storage",
        "002a4cbb",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b3a678",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00b3a694",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "00b3a6a0",
      "READ",
      [
        "storage",
        "002a4c5f",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3a6c4 ["INT_ADD", "register:40f0:8", ["const:b3a6c4:8", "const:4:8"]]
- 00b3a6c4 ["CALL", null, ["callee:00b3b754:8"]]
+ 00b3a760 ["INT_ADD", "register:40f0:8", ["const:b3a760:8", "const:4:8"]]
+ 00b3a760 ["CALL", null, ["callee:00b3b754:8"]]
- 00b3a5c8 ["COPY", "tmp:0:8", ["const:60:8"]]
- 00b3a5c8 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00b3a5c8 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00b3a5c8 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
- 00b3a5dc ["COPY", "tmp:0:8", ["register:4040:8"]]
- 00b3a5dc ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 00b3a5dc ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
~~~


<a id="compare-03c0f83634810fa924fac8fcb6ad9113"></a>

### [`00b3a778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3a/00b3a778.md) → [`00b3a814`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3a/00b3a814.md) FUN_00b3a814

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00a06d9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a06/00a06d9c.md) · 呼出先 9件 [`00497a48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497a48.md) [`00588e6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00588/00588e6c.md) [`00589144`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589144.md) [`0058915c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/0058915c.md) [`00589320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589320.md)
- 新版 呼出元 1件 [`00a06df0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06df0.md) · 呼出先 9件 [`00497a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497a88.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 92.68% / 新版 92.68%

優先判定に残った影響 `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b3a858",
      "incomplete_value": true,
      "site": "00b3a868",
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
                "const:6d0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b3a7bc",
      "incomplete_value": true,
      "site": "00b3a7cc",
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
                "const:690:8"
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
      "definition_site": "00b3a86c",
      "incomplete_value": true,
      "site": "00b3a880",
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
                "const:2a1000:8"
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
    "old": {
      "definition_site": "00b3a7d0",
      "incomplete_value": true,
      "site": "00b3a7e4",
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
                "const:2a1000:8"
              ],
              [
                "leaf",
                "const:91b:8"
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
      "definition_site": "00b3a86c",
      "incomplete_value": true,
      "site": "00b3a880",
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
      "definition_site": "00b3a7d0",
      "incomplete_value": true,
      "site": "00b3a7e4",
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
      "00b3a858",
      "READ",
      [
        "storage",
        "002c2690",
        null,
        null
      ]
    ],
    [
      "00b3a86c",
      "READ",
      [
        "storage",
        "002a191b",
        null,
        "string"
      ]
    ],
    [
      "00b3a86c",
      "READ",
      [
        "storage",
        "002a192b",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b3a858",
      "READ",
      [
        "storage",
        "002c26d0",
        null,
        null
      ]
    ],
    [
      "00b3a86c",
      "READ",
      [
        "storage",
        "002a18ce",
        null,
        "string"
      ]
    ],
    [
      "00b3a86c",
      "READ",
      [
        "storage",
        "002a18de",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3a798 ["INT_ADD", "register:40f0:8", ["const:b3a798:8", "const:4:8"]]
- 00b3a798 ["CALL", null, ["callee:00588eac:8"]]
+ 00b3a834 ["INT_ADD", "register:40f0:8", ["const:b3a834:8", "const:4:8"]]
+ 00b3a834 ["CALL", null, ["callee:00588eac:8"]]
- 00b3a7a0 ["INT_ADD", "register:40f0:8", ["const:b3a7a0:8", "const:4:8"]]
- 00b3a7a0 ["CALL", null, ["callee:0058919c:8"]]
+ 00b3a83c ["INT_ADD", "register:40f0:8", ["const:b3a83c:8", "const:4:8"]]
+ 00b3a83c ["CALL", null, ["callee:0058919c:8"]]
- 00b3a7ac ["INT_ADD", "register:40f0:8", ["const:b3a7ac:8", "const:4:8"]]
- 00b3a7ac ["CALL", null, ["callee:00c57f60:8"]]
+ 00b3a848 ["INT_ADD", "register:40f0:8", ["const:b3a848:8", "const:4:8"]]
+ 00b3a848 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-883ec0418c87e9141361479f5a557aaa"></a>

### [`00b3a964`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3a/00b3a964.md) → [`00b3aa00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3a/00b3aa00.md) Java_jp_co_ponos_battlecats_TapjoyImplementation_onTapjoyGetCurrencyBalance

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00589954`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589954.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00589994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589994.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_value, constant, operands_and_dependencies, store_condition

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `branch_value` 2件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b3aa28",
      "incomplete_value": true,
      "site": "00b3aa28",
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
      "definition_site": "00b3a98c",
      "incomplete_value": true,
      "site": "00b3a98c",
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00b3aa44",
      "incomplete_value": true,
      "site": "00b3aa44",
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
      "definition_site": "00b3a9a8",
      "incomplete_value": true,
      "site": "00b3a9a8",
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
    "guard": [
      [
        "FALL_THROUGH",
        "00b3a98c"
      ],
      [
        "FALL_THROUGH",
        "00b3aa28"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b3aa28",
      "incomplete_value": true,
      "site": "00b3aa40",
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
      "definition_site": "00b3a98c",
      "incomplete_value": true,
      "site": "00b3a9a4",
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
      "00b3aa24",
      "READ",
      [
        "storage",
        "01125280",
        null,
        "undefined8"
      ]
    ],
    [
      "00b3aa3c",
      "READ",
      [
        "storage",
        "01125280",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b3aa24",
      "READ",
      [
        "storage",
        "01125380",
        null,
        "undefined8"
      ]
    ],
    [
      "00b3aa3c",
      "READ",
      [
        "storage",
        "01125380",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3a988 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:280:8"]]
- 00b3a988 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b3aa24 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:380:8"]]
+ 00b3aa24 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b3a99c ["INT_ADD", "register:40f0:8", ["const:b3a99c:8", "const:4:8"]]
- 00b3a99c ["CALL", null, ["callee:00589994:8"]]
+ 00b3aa38 ["INT_ADD", "register:40f0:8", ["const:b3aa38:8", "const:4:8"]]
+ 00b3aa38 ["CALL", null, ["callee:00589994:8"]]
- 00b3a9a0 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:280:8"]]
- 00b3a9a0 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b3aa3c ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:380:8"]]
+ 00b3aa3c ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-9d915e5b97c08074fd473c3d7444f3f6"></a>

### [`00b3aa38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3a/00b3aa38.md) → [`00b3aad4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3a/00b3aad4.md) Java_jp_co_ponos_battlecats_TapjoyImplementation_onTapjoySpendCurrency

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00589954`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589954.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00589994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589994.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_value, constant, operands_and_dependencies, store_condition

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `branch_value` 2件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b3aafc",
      "incomplete_value": true,
      "site": "00b3aafc",
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
      "definition_site": "00b3aa60",
      "incomplete_value": true,
      "site": "00b3aa60",
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00b3ab18",
      "incomplete_value": true,
      "site": "00b3ab18",
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
      "definition_site": "00b3aa7c",
      "incomplete_value": true,
      "site": "00b3aa7c",
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
    "guard": [
      [
        "FALL_THROUGH",
        "00b3aa60"
      ],
      [
        "FALL_THROUGH",
        "00b3aafc"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b3aafc",
      "incomplete_value": true,
      "site": "00b3ab14",
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
      "definition_site": "00b3aa60",
      "incomplete_value": true,
      "site": "00b3aa78",
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
      "00b3aaf8",
      "READ",
      [
        "storage",
        "011252b0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b3ab10",
      "READ",
      [
        "storage",
        "011252b0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b3aaf8",
      "READ",
      [
        "storage",
        "011253b0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b3ab10",
      "READ",
      [
        "storage",
        "011253b0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3aa5c ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:2b0:8"]]
- 00b3aa5c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b3aaf8 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:3b0:8"]]
+ 00b3aaf8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b3aa70 ["INT_ADD", "register:40f0:8", ["const:b3aa70:8", "const:4:8"]]
- 00b3aa70 ["CALL", null, ["callee:00589994:8"]]
+ 00b3ab0c ["INT_ADD", "register:40f0:8", ["const:b3ab0c:8", "const:4:8"]]
+ 00b3ab0c ["CALL", null, ["callee:00589994:8"]]
- 00b3aa74 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:2b0:8"]]
- 00b3aa74 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b3ab10 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:3b0:8"]]
+ 00b3ab10 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-069896468cf956c0699e4c39585d2211"></a>

### [`00b3ab0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3a/00b3ab0c.md) → [`00b3aba8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3a/00b3aba8.md) Java_jp_co_ponos_battlecats_TapjoyImplementation_onTapjoyPlacementRequestSuccess

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`00589954`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589954.md) [`00b3b820`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3b/00b3b820.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00589994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589994.md) [`00b3b8bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3b8bc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 45.95% / 新版 45.95%

優先判定に残った影響 `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b3ab10",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b3ab14",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b3ab28",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b3abac",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b3abb0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b3abc4",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3ab0c ["INT_SUB", "register:8:8", ["register:8:8", "const:40:8"]]
- 00b3ab10 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b3ab10 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b3ab10 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00b3ab10 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b3ab14 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b3ab14 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b3ab14 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:30:8"]]
- 00b3ab14 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-39c7d1e21ff23dc1a78d583e76449d77"></a>

### [`00b3abcc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3a/00b3abcc.md) → [`00b3ac68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3a/00b3ac68.md) Java_jp_co_ponos_battlecats_TapjoyImplementation_onTapjoyPlacementRequestFailure

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`00589954`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589954.md) [`00b3b820`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3b/00b3b820.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00589994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589994.md) [`00b3b8bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3b8bc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 82.00% / 新版 82.00%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b3acc4",
      "incomplete_value": true,
      "site": "00b3acc8",
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
                "register:4000:8"
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
      "definition_site": "00b3ac28",
      "incomplete_value": true,
      "site": "00b3ac2c",
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
                "register:4000:8"
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
      "definition_site": "00b3acb0",
      "incomplete_value": false,
      "site": "00b3acb8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1125000:8"
          ],
          [
            "leaf",
            "const:2f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b3ac14",
      "incomplete_value": false,
      "site": "00b3ac1c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1125000:8"
          ],
          [
            "leaf",
            "const:1f8:8"
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
      "00b3acb0",
      "PARAM",
      [
        "storage",
        "011251f8",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b3ac48",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00b3acb0",
      "PARAM",
      [
        "storage",
        "011252f8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b3ace4",
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
- 00b3ac1c ["INT_ADD", "register:40f0:8", ["const:b3ac1c:8", "const:4:8"]]
- 00b3ac1c ["CALL", null, ["callee:00b3b8bc:8"]]
+ 00b3acb8 ["INT_ADD", "register:40f0:8", ["const:b3acb8:8", "const:4:8"]]
+ 00b3acb8 ["CALL", null, ["callee:00b3b8bc:8"]]
- 00b3ac2c ["CBRANCH", null, ["local:b3:8", "register:101:1"]]
+ 00b3acc8 ["CBRANCH", null, ["local:b4:8", "register:101:1"]]
- 00b3abfc ["INT_ADD", "register:40f0:8", ["const:b3abfc:8", "const:4:8"]]
- 00b3abfc ["CALL", null, ["callee:00589994:8"]]
+ 00b3ac98 ["INT_ADD", "register:40f0:8", ["const:b3ac98:8", "const:4:8"]]
+ 00b3ac98 ["CALL", null, ["callee:00589994:8"]]
~~~


<a id="compare-0c6801571f4eafb55631158f3737348a"></a>

### [`00b3acd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3a/00b3acd8.md) → [`00b3ad74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3a/00b3ad74.md) Java_jp_co_ponos_battlecats_TapjoyImplementation_onTapjoyPlacementContentReady

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`00589954`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589954.md) [`00b3b820`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3b/00b3b820.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00589994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589994.md) [`00b3b8bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3b8bc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 51.35% / 新版 51.35%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b3ad40",
      "incomplete_value": true,
      "site": "00b3ad44",
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
                "const:10:8"
              ]
            ]
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
      "unmatched:00b3acdc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b3ace0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b3acf4",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b3ad78",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b3ad7c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b3ad90",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3ad44 ["INT_ADD", "register:40f0:8", ["const:b3ad44:8", "const:4:8"]]
- 00b3ad44 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b3ade0 ["INT_ADD", "register:40f0:8", ["const:b3ade0:8", "const:4:8"]]
+ 00b3ade0 ["CALL", null, ["callee:00c57f80:8"]]
- 00b3acd8 ["INT_SUB", "register:8:8", ["register:8:8", "const:40:8"]]
- 00b3acdc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b3acdc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b3acdc ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00b3acdc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


