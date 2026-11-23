# v16.0.1 → v16.0.2 · 最優先の変更候補 (72)

[一覧の目次](README.md)

<a id="compare-bde8683ff29be25c81771fc88f3da471"></a>

### [`00afa214`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afa/00afa214.md) → [`00afa2b0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afa2b0.md) FUN_00afa2b0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00713d24`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00713/00713d24.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00713d7c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/00713d7c.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, return_value_candidate

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00afa2e0",
      "incomplete_value": true,
      "site": "00afa2ec",
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
      "definition_site": "00afa244",
      "incomplete_value": true,
      "site": "00afa250",
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


~~~diff
- 00afa228 ["INT_ADD", "register:40f0:8", ["const:afa228:8", "const:4:8"]]
+ 00afa2c4 ["INT_ADD", "register:40f0:8", ["const:afa2c4:8", "const:4:8"]]
~~~


<a id="compare-328594be3847985314f539be40db1012"></a>

### [`00afa254`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afa/00afa254.md) → [`00afa2f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afa2f0.md) FUN_00afa2f0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

~~~diff
- 00afa270 ["INT_ADD", "register:40f0:8", ["const:afa270:8", "const:4:8"]]
+ 00afa30c ["INT_ADD", "register:40f0:8", ["const:afa30c:8", "const:4:8"]]
~~~


<a id="compare-1c71216b4404a0e1620d1a3038c6e08c"></a>

### [`00afa328`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afa/00afa328.md) → [`00afa3c4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afa3c4.md) FUN_00afa3c4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afa3cc",
      "incomplete_value": true,
      "site": "00afa3cc",
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
                "const:ffffffffffffffd0:8"
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
      "definition_site": "00afa330",
      "incomplete_value": true,
      "site": "00afa330",
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
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afa3cc",
      "incomplete_value": true,
      "site": "00afa3cc",
      "value": [
        "INT_ADD",
        "8",
        [
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
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00afa330",
      "incomplete_value": true,
      "site": "00afa330",
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
            "const:8:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 1
  }
]
~~~


~~~diff
- 00afa344 ["INT_ADD", "register:40f0:8", ["const:afa344:8", "const:4:8"]]
+ 00afa3e0 ["INT_ADD", "register:40f0:8", ["const:afa3e0:8", "const:4:8"]]
~~~


<a id="compare-a6fa500cdc05696dabe1c8249d7f90f1"></a>

### [`00afa374`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afa/00afa374.md) → [`00afa410`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afa410.md) FUN_00afa410

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afa418",
      "incomplete_value": true,
      "site": "00afa418",
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
    "old": {
      "definition_site": "00afa37c",
      "incomplete_value": true,
      "site": "00afa37c",
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
                "const:ffffffffffffffd0:8"
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
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afa418",
      "incomplete_value": true,
      "site": "00afa418",
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
            "const:8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00afa37c",
      "incomplete_value": true,
      "site": "00afa37c",
      "value": [
        "INT_ADD",
        "8",
        [
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
          ],
          [
            "leaf",
            "const:8:8"
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
      "definition_site": "00afa448",
      "incomplete_value": true,
      "site": "00afa448",
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
              "INT_MULT"
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
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
      "definition_site": "00afa3ac",
      "incomplete_value": true,
      "site": "00afa3ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
              "INT_MULT"
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
              [
                "leaf",
                "const:0:8"
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


~~~diff
- 00afa390 ["INT_ADD", "register:40f0:8", ["const:afa390:8", "const:4:8"]]
+ 00afa42c ["INT_ADD", "register:40f0:8", ["const:afa42c:8", "const:4:8"]]
~~~


<a id="compare-6de974e3f2e2deb485e7711a91ff0e0b"></a>

### [`00afa3c0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afa/00afa3c0.md) → [`00afa45c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afa45c.md) FUN_00afa45c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`0070ea5c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0070e/0070ea5c.md) [`007119f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00711/007119f0.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 2件 [`0070eab4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00711a48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, return_value_candidate, store_destination

アドレスに依存する影響 `return_value_candidate` 1件, `store_destination` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afa460",
      "incomplete_value": true,
      "site": "00afa460",
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
                "const:ffffffffffffffe0:8"
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
      "definition_site": "00afa3c4",
      "incomplete_value": true,
      "site": "00afa3c4",
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
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afa460",
      "incomplete_value": true,
      "site": "00afa460",
      "value": [
        "INT_ADD",
        "8",
        [
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
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00afa3c4",
      "incomplete_value": true,
      "site": "00afa3c4",
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
                "const:10:8"
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00afa48c",
      "incomplete_value": true,
      "site": "00afa498",
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
      "definition_site": "00afa3f0",
      "incomplete_value": true,
      "site": "00afa3fc",
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


~~~diff
- 00afa3d4 ["INT_ADD", "register:40f0:8", ["const:afa3d4:8", "const:4:8"]]
+ 00afa470 ["INT_ADD", "register:40f0:8", ["const:afa470:8", "const:4:8"]]
~~~


<a id="compare-eaeb3b4ad3af09891fc3099cf5996a22"></a>

### [`00afa400`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afa/00afa400.md) → [`00afa49c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afa49c.md) FUN_00afa49c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afa4a0",
      "incomplete_value": true,
      "site": "00afa4a0",
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
                "const:ffffffffffffffd0:8"
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
      "definition_site": "00afa404",
      "incomplete_value": true,
      "site": "00afa404",
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
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afa4a4",
      "incomplete_value": true,
      "site": "00afa4a4",
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
                "const:ffffffffffffffd0:8"
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
      "definition_site": "00afa408",
      "incomplete_value": true,
      "site": "00afa408",
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
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afa4a4",
      "incomplete_value": true,
      "site": "00afa4a4",
      "value": [
        "INT_ADD",
        "8",
        [
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
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00afa408",
      "incomplete_value": true,
      "site": "00afa408",
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
            "const:8:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 1
  }
]
~~~


~~~diff
- 00afa41c ["INT_ADD", "register:40f0:8", ["const:afa41c:8", "const:4:8"]]
+ 00afa4b8 ["INT_ADD", "register:40f0:8", ["const:afa4b8:8", "const:4:8"]]
~~~


<a id="compare-677d5226a3ad66e67419d8ce56908e4e"></a>

### [`00afa498`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afa/00afa498.md) → [`00afa534`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afa534.md) FUN_00afa534

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`0070ea5c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0070e/0070ea5c.md) [`007119f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00711/007119f0.md) · 呼出先 2件 [`005e7420`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 2件 [`0070eab4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00711a48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 2件 [`005e7460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00afa558",
      "incomplete_value": true,
      "site": "00afa55c",
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
                "register:4000:8"
              ],
              "INT_MULT"
            ]
          ],
          [
            "leaf",
            "const:2768:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00afa4bc",
      "incomplete_value": true,
      "site": "00afa4c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "live",
            "register:4048:8"
          ]
        ]
      ]
    },
    "ordinal": 1,
    "slot": 1
  }
]
~~~


~~~diff
- 00afa4ac ["INT_ADD", "register:40f0:8", ["const:afa4ac:8", "const:4:8"]]
+ 00afa548 ["INT_ADD", "register:40f0:8", ["const:afa548:8", "const:4:8"]]
- 00afa4c0 ["INT_ADD", "register:40f0:8", ["const:afa4c0:8", "const:4:8"]]
+ 00afa55c ["INT_ADD", "register:40f0:8", ["const:afa55c:8", "const:4:8"]]
- 00afa4c4 ["CBRANCH", null, ["local:b3:8", "tmp:3:1"]]
+ 00afa560 ["CBRANCH", null, ["local:b2:8", "tmp:3:1"]]
~~~


<a id="compare-1ba7a50f9ec306af5239a651a8abed32"></a>

### [`00afa578`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afa/00afa578.md) → [`00afa614`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afa614.md) FUN_00afa614

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`007119f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00711/007119f0.md) · 呼出先 2件 [`005e7420`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00711a48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 2件 [`005e7460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, store_destination

優先判定に残った影響 `store_destination` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afa618",
      "incomplete_value": true,
      "site": "00afa618",
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
    "old": {
      "definition_site": "00afa57c",
      "incomplete_value": true,
      "site": "00afa57c",
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
                "const:ffffffffffffffe0:8"
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
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afa618",
      "incomplete_value": true,
      "site": "00afa618",
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
                "const:10:8"
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
      "definition_site": "00afa57c",
      "incomplete_value": true,
      "site": "00afa57c",
      "value": [
        "INT_ADD",
        "8",
        [
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
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  }
]
~~~


~~~diff
- 00afa58c ["INT_ADD", "register:40f0:8", ["const:afa58c:8", "const:4:8"]]
+ 00afa628 ["INT_ADD", "register:40f0:8", ["const:afa628:8", "const:4:8"]]
- 00afa5a0 ["INT_ADD", "register:40f0:8", ["const:afa5a0:8", "const:4:8"]]
+ 00afa63c ["INT_ADD", "register:40f0:8", ["const:afa63c:8", "const:4:8"]]
- 00afa5a4 ["CBRANCH", null, ["local:b2:8", "tmp:3:1"]]
+ 00afa640 ["CBRANCH", null, ["local:b5:8", "tmp:3:1"]]
~~~


<a id="compare-163a287316215fc05cce8e86e9d2e301"></a>

### [`00afa5e0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afa/00afa5e0.md) → [`00afa67c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afa67c.md) FUN_00afa67c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 2件 [`005e7420`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 2件 [`005e7460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00afa6a8",
      "incomplete_value": true,
      "site": "00afa6ac",
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
                "register:4000:8"
              ],
              "INT_MULT"
            ]
          ],
          [
            "leaf",
            "const:2768:8"
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
- 00afa5fc ["INT_ADD", "register:40f0:8", ["const:afa5fc:8", "const:4:8"]]
+ 00afa698 ["INT_ADD", "register:40f0:8", ["const:afa698:8", "const:4:8"]]
- 00afa610 ["INT_ADD", "register:40f0:8", ["const:afa610:8", "const:4:8"]]
+ 00afa6ac ["INT_ADD", "register:40f0:8", ["const:afa6ac:8", "const:4:8"]]
- 00afa614 ["CBRANCH", null, ["local:b4:8", "tmp:3:1"]]
+ 00afa6b0 ["CBRANCH", null, ["local:b2:8", "tmp:3:1"]]
~~~


<a id="compare-0cfd1bcd656bca5d56d163f19e06cd73"></a>

### [`00afa64c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afa/00afa64c.md) → [`00afa6e8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afa6e8.md) FUN_00afa6e8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`007119f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00711/007119f0.md) · 呼出先 2件 [`005e7420`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00711a48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 2件 [`005e7460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00afa670",
      "incomplete_value": true,
      "site": "00afa674",
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
                "register:4000:8"
              ],
              "INT_MULT"
            ]
          ],
          [
            "leaf",
            "const:2768:8"
          ]
        ]
      ]
    },
    "ordinal": 1,
    "slot": 1
  }
]
~~~


~~~diff
- 00afa660 ["INT_ADD", "register:40f0:8", ["const:afa660:8", "const:4:8"]]
+ 00afa6fc ["INT_ADD", "register:40f0:8", ["const:afa6fc:8", "const:4:8"]]
- 00afa674 ["INT_ADD", "register:40f0:8", ["const:afa674:8", "const:4:8"]]
+ 00afa710 ["INT_ADD", "register:40f0:8", ["const:afa710:8", "const:4:8"]]
- 00afa678 ["CBRANCH", null, ["local:b2:8", "tmp:3:1"]]
+ 00afa714 ["CBRANCH", null, ["local:b3:8", "tmp:3:1"]]
~~~


<a id="compare-d111059560b207daace17b441fa3fee5"></a>

### [`00afa6b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afa/00afa6b4.md) → [`00afa750`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afa750.md) FUN_00afa750

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 2件 [`005e7420`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 2件 [`005e7460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, store_destination

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afa758",
      "incomplete_value": true,
      "site": "00afa758",
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
                "const:ffffffffffffffd0:8"
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
      "definition_site": "00afa6bc",
      "incomplete_value": true,
      "site": "00afa6bc",
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
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afa758",
      "incomplete_value": true,
      "site": "00afa758",
      "value": [
        "INT_ADD",
        "8",
        [
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
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00afa6bc",
      "incomplete_value": true,
      "site": "00afa6bc",
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
            "const:8:8"
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
      "definition_site": "00afa77c",
      "incomplete_value": true,
      "site": "00afa780",
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
                "register:4000:8"
              ],
              "INT_MULT"
            ]
          ],
          [
            "leaf",
            "const:2768:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00afa6e0",
      "incomplete_value": true,
      "site": "00afa6e4",
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
                "register:4000:8"
              ],
              "INT_MULT"
            ]
          ],
          [
            "live",
            "register:4048:8"
          ]
        ]
      ]
    },
    "ordinal": 1,
    "slot": 1
  }
]
~~~


~~~diff
- 00afa6d0 ["INT_ADD", "register:40f0:8", ["const:afa6d0:8", "const:4:8"]]
+ 00afa76c ["INT_ADD", "register:40f0:8", ["const:afa76c:8", "const:4:8"]]
- 00afa6e4 ["INT_ADD", "register:40f0:8", ["const:afa6e4:8", "const:4:8"]]
+ 00afa780 ["INT_ADD", "register:40f0:8", ["const:afa780:8", "const:4:8"]]
- 00afa6e8 ["CBRANCH", null, ["local:b4:8", "tmp:3:1"]]
+ 00afa784 ["CBRANCH", null, ["local:b2:8", "tmp:3:1"]]
~~~


<a id="compare-0a9b5a73a4ca713f419cdb2b69aefa14"></a>

### [`00afa720`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afa/00afa720.md) → [`00afa7bc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afa7bc.md) FUN_00afa7bc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`0070ea5c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0070e/0070ea5c.md) [`007102d8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00710/007102d8.md) [`007119f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00711/007119f0.md) · 呼出先 2件 [`005e7420`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 3件 [`0070eab4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00710330`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) [`00711a48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 2件 [`005e7460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies

~~~diff
- 00afa734 ["INT_ADD", "register:40f0:8", ["const:afa734:8", "const:4:8"]]
+ 00afa7d0 ["INT_ADD", "register:40f0:8", ["const:afa7d0:8", "const:4:8"]]
- 00afa748 ["INT_ADD", "register:40f0:8", ["const:afa748:8", "const:4:8"]]
+ 00afa7e4 ["INT_ADD", "register:40f0:8", ["const:afa7e4:8", "const:4:8"]]
- 00afa754 ["BRANCH", null, ["local:b3:8"]]
+ 00afa7f0 ["BRANCH", null, ["local:b4:8"]]
~~~


<a id="compare-0366eb81cded758022323437766b5590"></a>

### [`00afa790`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afa/00afa790.md) → [`00afa82c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afa82c.md) FUN_00afa82c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 2件 [`005e7420`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 2件 [`005e7460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, constant, local_def_use, operands_and_dependencies

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00afa858",
      "incomplete_value": true,
      "site": "00afa85c",
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
                "register:4000:8"
              ],
              "INT_MULT"
            ]
          ],
          [
            "leaf",
            "const:2768:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00afa7bc",
      "incomplete_value": true,
      "site": "00afa7c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "live",
            "register:4048:8"
          ]
        ]
      ]
    },
    "ordinal": 1,
    "slot": 1
  }
]
~~~


~~~diff
- 00afa7ac ["INT_ADD", "register:40f0:8", ["const:afa7ac:8", "const:4:8"]]
+ 00afa848 ["INT_ADD", "register:40f0:8", ["const:afa848:8", "const:4:8"]]
- 00afa7c0 ["INT_ADD", "register:40f0:8", ["const:afa7c0:8", "const:4:8"]]
+ 00afa85c ["INT_ADD", "register:40f0:8", ["const:afa85c:8", "const:4:8"]]
- 00afa7d0 ["INT_ADD", "register:40f0:8", ["const:afa7d0:8", "const:4:8"]]
+ 00afa86c ["INT_ADD", "register:40f0:8", ["const:afa86c:8", "const:4:8"]]
~~~


<a id="compare-736bd2017e02785af34bb11b10e53be3"></a>

### [`00afa800`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afa/00afa800.md) → [`00afa89c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afa89c.md) FUN_00afa89c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`005f8e80`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f8/005f8e80.md) [`00713358`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00713/00713358.md) [`00715500`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00715/00715500.md) · 呼出先 2件 [`005e7420`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 3件 [`005f8ec0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f8/005f8ec0.md) [`007133b0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/007133b0.md) [`00715558`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00715/00715558.md) · 呼出先 2件 [`005e7460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, call_argument_candidate, constant, control_flow, local_def_use, operands_and_dependencies

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00afa8c0",
      "incomplete_value": true,
      "site": "00afa8c4",
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
                "register:4000:8"
              ],
              "INT_MULT"
            ]
          ],
          [
            "leaf",
            "const:2768:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00afa824",
      "incomplete_value": true,
      "site": "00afa828",
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
                "register:4000:8"
              ],
              "INT_MULT"
            ]
          ],
          [
            "live",
            "register:4048:8"
          ]
        ]
      ]
    },
    "ordinal": 1,
    "slot": 1
  }
]
~~~


~~~diff
- 00afa814 ["INT_ADD", "register:40f0:8", ["const:afa814:8", "const:4:8"]]
+ 00afa8b0 ["INT_ADD", "register:40f0:8", ["const:afa8b0:8", "const:4:8"]]
- 00afa828 ["INT_ADD", "register:40f0:8", ["const:afa828:8", "const:4:8"]]
+ 00afa8c4 ["INT_ADD", "register:40f0:8", ["const:afa8c4:8", "const:4:8"]]
- 00afa82c ["CBRANCH", null, ["local:b3:8", "tmp:3:1"]]
+ 00afa8c8 ["CBRANCH", null, ["local:b2:8", "tmp:3:1"]]
~~~


<a id="compare-d36981dce2dd90acb8f5a1c66d99ac06"></a>

### [`00afa868`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afa/00afa868.md) → [`00afa904`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afa904.md) FUN_00afa904

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 2件 [`005e7420`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 2件 [`005e7460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

~~~diff
- 00afa884 ["INT_ADD", "register:40f0:8", ["const:afa884:8", "const:4:8"]]
+ 00afa920 ["INT_ADD", "register:40f0:8", ["const:afa920:8", "const:4:8"]]
- 00afa898 ["INT_ADD", "register:40f0:8", ["const:afa898:8", "const:4:8"]]
+ 00afa934 ["INT_ADD", "register:40f0:8", ["const:afa934:8", "const:4:8"]]
- 00afa89c ["CBRANCH", null, ["local:b2:8", "tmp:3:1"]]
+ 00afa938 ["CBRANCH", null, ["local:b4:8", "tmp:3:1"]]
~~~


<a id="compare-ed225d8769cfc5c4e6316372bd9bdc48"></a>

### [`00afa8d4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afa/00afa8d4.md) → [`00afa970`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afa970.md) FUN_00afa970

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00713d24`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00713/00713d24.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00713d7c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/00713d7c.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

~~~diff
- 00afa8e8 ["INT_ADD", "register:40f0:8", ["const:afa8e8:8", "const:4:8"]]
+ 00afa984 ["INT_ADD", "register:40f0:8", ["const:afa984:8", "const:4:8"]]
~~~


<a id="compare-98a0262dc9c203c6832a00423b268699"></a>

### [`00afa95c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afa/00afa95c.md) → [`00afa9f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afa9f8.md) FUN_00afa9f8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afaa30",
      "incomplete_value": true,
      "site": "00afaa30",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
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
      "definition_site": "00afa994",
      "incomplete_value": true,
      "site": "00afa994",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
              "INT_MULT"
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
              [
                "leaf",
                "const:0:8"
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


~~~diff
- 00afa978 ["INT_ADD", "register:40f0:8", ["const:afa978:8", "const:4:8"]]
+ 00afaa14 ["INT_ADD", "register:40f0:8", ["const:afaa14:8", "const:4:8"]]
~~~


<a id="compare-615cafc46cb5759003a1ed801db2bcf2"></a>

### [`00afa9a8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afa/00afa9a8.md) → [`00afaa44`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afaa44.md) FUN_00afaa44

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`007102d8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00710/007102d8.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00710330`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, return_value_candidate, store_destination

アドレスに依存する影響 `return_value_candidate` 1件, `store_destination` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afaa48",
      "incomplete_value": true,
      "site": "00afaa48",
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
    "old": {
      "definition_site": "00afa9ac",
      "incomplete_value": true,
      "site": "00afa9ac",
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
                "const:ffffffffffffffe0:8"
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
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afaa48",
      "incomplete_value": true,
      "site": "00afaa48",
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
                "const:10:8"
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
      "definition_site": "00afa9ac",
      "incomplete_value": true,
      "site": "00afa9ac",
      "value": [
        "INT_ADD",
        "8",
        [
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
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00afaa74",
      "incomplete_value": true,
      "site": "00afaa80",
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
      "definition_site": "00afa9d8",
      "incomplete_value": true,
      "site": "00afa9e4",
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


~~~diff
- 00afa9bc ["INT_ADD", "register:40f0:8", ["const:afa9bc:8", "const:4:8"]]
+ 00afaa58 ["INT_ADD", "register:40f0:8", ["const:afaa58:8", "const:4:8"]]
~~~


<a id="compare-ff00eae1f3836d71efe4a476d4437417"></a>

### [`00afa9e8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afa/00afa9e8.md) → [`00afaa84`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afaa84.md) FUN_00afaa84

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afaabc",
      "incomplete_value": true,
      "site": "00afaabc",
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
              "INT_MULT"
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
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
      "definition_site": "00afaa20",
      "incomplete_value": true,
      "site": "00afaa20",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
              [
                "leaf",
                "const:0:8"
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


~~~diff
- 00afaa04 ["INT_ADD", "register:40f0:8", ["const:afaa04:8", "const:4:8"]]
+ 00afaaa0 ["INT_ADD", "register:40f0:8", ["const:afaaa0:8", "const:4:8"]]
~~~


<a id="compare-9d92bede4a72fd6a950e6a4c9ae3ca28"></a>

### [`00afaa34`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afa/00afaa34.md) → [`00afaad0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afaad0.md) FUN_00afaad0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`005fb93c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fb/005fb93c.md) [`0070ea5c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0070e/0070ea5c.md) [`007119f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00711/007119f0.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 3件 [`005fb97c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fb/005fb97c.md) [`0070eab4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00711a48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies

~~~diff
- 00afaa48 ["INT_ADD", "register:40f0:8", ["const:afaa48:8", "const:4:8"]]
+ 00afaae4 ["INT_ADD", "register:40f0:8", ["const:afaae4:8", "const:4:8"]]
~~~


<a id="compare-9aec521e8fd90cd17e07e32bbc972715"></a>

### [`00afaa7c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afa/00afaa7c.md) → [`00afab18`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afab18.md) FUN_00afab18

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afab1c",
      "incomplete_value": true,
      "site": "00afab1c",
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
    "old": {
      "definition_site": "00afaa80",
      "incomplete_value": true,
      "site": "00afaa80",
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
                "const:ffffffffffffffd0:8"
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
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afab20",
      "incomplete_value": true,
      "site": "00afab20",
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
    "old": {
      "definition_site": "00afaa84",
      "incomplete_value": true,
      "site": "00afaa84",
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
                "const:ffffffffffffffd0:8"
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
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afab20",
      "incomplete_value": true,
      "site": "00afab20",
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
            "const:8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00afaa84",
      "incomplete_value": true,
      "site": "00afaa84",
      "value": [
        "INT_ADD",
        "8",
        [
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
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 1
  }
]
~~~


~~~diff
- 00afaa98 ["INT_ADD", "register:40f0:8", ["const:afaa98:8", "const:4:8"]]
+ 00afab34 ["INT_ADD", "register:40f0:8", ["const:afab34:8", "const:4:8"]]
~~~


<a id="compare-78e7575c2c58fda1fd38e01e39366595"></a>

### [`00afaac8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afa/00afaac8.md) → [`00afab64`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afab64.md) FUN_00afab64

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 4件 [`005f7940`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f7/005f7940.md) [`005fb93c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fb/005fb93c.md) [`00714be8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00714/00714be8.md) [`00714db8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00714/00714db8.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 4件 [`005f7980`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f7/005f7980.md) [`005fb97c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fb/005fb97c.md) [`00714c40`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/00714c40.md) [`00714e10`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/00714e10.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afab68",
      "incomplete_value": true,
      "site": "00afab68",
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
                "const:ffffffffffffffe0:8"
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
      "definition_site": "00afaacc",
      "incomplete_value": true,
      "site": "00afaacc",
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
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afab68",
      "incomplete_value": true,
      "site": "00afab68",
      "value": [
        "INT_ADD",
        "8",
        [
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
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00afaacc",
      "incomplete_value": true,
      "site": "00afaacc",
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
                "const:10:8"
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
    "ordinal": 3,
    "slot": 1
  }
]
~~~


~~~diff
- 00afaadc ["INT_ADD", "register:40f0:8", ["const:afaadc:8", "const:4:8"]]
+ 00afab78 ["INT_ADD", "register:40f0:8", ["const:afab78:8", "const:4:8"]]
~~~


<a id="compare-1b7edaacdcd95533f3141042e545c78b"></a>

### [`00afab10`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afa/00afab10.md) → [`00afabac`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afabac.md) FUN_00afabac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

~~~diff
- 00afab2c ["INT_ADD", "register:40f0:8", ["const:afab2c:8", "const:4:8"]]
+ 00afabc8 ["INT_ADD", "register:40f0:8", ["const:afabc8:8", "const:4:8"]]
~~~


<a id="compare-cbaf6c512f918d5921c3a8701d21b481"></a>

### [`00afab5c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afa/00afab5c.md) → [`00afabf8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afabf8.md) FUN_00afabf8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`007102d8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00710/007102d8.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00710330`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies

~~~diff
- 00afab70 ["INT_ADD", "register:40f0:8", ["const:afab70:8", "const:4:8"]]
+ 00afac0c ["INT_ADD", "register:40f0:8", ["const:afac0c:8", "const:4:8"]]
~~~


<a id="compare-29bc00a25f368a5b8344b9de4a07b545"></a>

### [`00afaba4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afa/00afaba4.md) → [`00afac40`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afac40.md) FUN_00afac40

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

~~~diff
- 00afabc0 ["INT_ADD", "register:40f0:8", ["const:afabc0:8", "const:4:8"]]
+ 00afac5c ["INT_ADD", "register:40f0:8", ["const:afac5c:8", "const:4:8"]]
~~~


<a id="compare-c65fc3d27d7b76fc7594cb51c977e7f7"></a>

### [`00afabf0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afa/00afabf0.md) → [`00afac8c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afac8c.md) FUN_00afac8c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`007102d8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00710/007102d8.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00710330`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies

~~~diff
- 00afac04 ["INT_ADD", "register:40f0:8", ["const:afac04:8", "const:4:8"]]
+ 00afaca0 ["INT_ADD", "register:40f0:8", ["const:afaca0:8", "const:4:8"]]
~~~


<a id="compare-c3ceef7f4dad631189677c21186d2645"></a>

### [`00afac38`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afa/00afac38.md) → [`00afacd4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afacd4.md) FUN_00afacd4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afad0c",
      "incomplete_value": true,
      "site": "00afad0c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
              "INT_MULT"
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
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
      "definition_site": "00afac70",
      "incomplete_value": true,
      "site": "00afac70",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
              [
                "leaf",
                "const:0:8"
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


~~~diff
- 00afac54 ["INT_ADD", "register:40f0:8", ["const:afac54:8", "const:4:8"]]
+ 00afacf0 ["INT_ADD", "register:40f0:8", ["const:afacf0:8", "const:4:8"]]
~~~


<a id="compare-a7bb5d3fbc95dcfe2a312d37d81c7171"></a>

### [`00afac84`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afa/00afac84.md) → [`00afad20`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afad20.md) FUN_00afad20

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`007102d8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00710/007102d8.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00710330`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

~~~diff
- 00afac98 ["INT_ADD", "register:40f0:8", ["const:afac98:8", "const:4:8"]]
+ 00afad34 ["INT_ADD", "register:40f0:8", ["const:afad34:8", "const:4:8"]]
~~~


<a id="compare-c312a5f4073c00a55aaa0d5ca7c01632"></a>

### [`00afaccc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afa/00afaccc.md) → [`00afad68`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afad68.md) FUN_00afad68

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afada0",
      "incomplete_value": true,
      "site": "00afada0",
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
              "INT_MULT"
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
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
      "definition_site": "00afad04",
      "incomplete_value": true,
      "site": "00afad04",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
              "INT_MULT"
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
              [
                "leaf",
                "const:0:8"
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


~~~diff
- 00aface8 ["INT_ADD", "register:40f0:8", ["const:aface8:8", "const:4:8"]]
+ 00afad84 ["INT_ADD", "register:40f0:8", ["const:afad84:8", "const:4:8"]]
~~~


<a id="compare-77911356415a110c589b77da43f38c94"></a>

### [`00afad18`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afa/00afad18.md) → [`00afadb4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afadb4.md) FUN_00afadb4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`007102d8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00710/007102d8.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00710330`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies

~~~diff
- 00afad2c ["INT_ADD", "register:40f0:8", ["const:afad2c:8", "const:4:8"]]
+ 00afadc8 ["INT_ADD", "register:40f0:8", ["const:afadc8:8", "const:4:8"]]
~~~


<a id="compare-9b232f1107bc20a6fce743b9ba133efa"></a>

### [`00afad60`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afa/00afad60.md) → [`00afadfc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afadfc.md) FUN_00afadfc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

~~~diff
- 00afad7c ["INT_ADD", "register:40f0:8", ["const:afad7c:8", "const:4:8"]]
+ 00afae18 ["INT_ADD", "register:40f0:8", ["const:afae18:8", "const:4:8"]]
~~~


<a id="compare-bff7ba86f0519072aefdba77d7f050cd"></a>

### [`00afadf4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afa/00afadf4.md) → [`00afae90`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afae90.md) FUN_00afae90

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

~~~diff
- 00afae10 ["INT_ADD", "register:40f0:8", ["const:afae10:8", "const:4:8"]]
+ 00afaeac ["INT_ADD", "register:40f0:8", ["const:afaeac:8", "const:4:8"]]
~~~


<a id="compare-d6ce66cec41803acd1539873217dc883"></a>

### [`00afaf1c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afa/00afaf1c.md) → [`00afafb8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afafb8.md) FUN_00afafb8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) [`00a51fc4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a51/00a51fc4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 2件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00a52034`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a52/00a52034.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afaff0",
      "incomplete_value": true,
      "site": "00afaff0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
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
      "definition_site": "00afaf54",
      "incomplete_value": true,
      "site": "00afaf54",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
              "INT_MULT"
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
              [
                "leaf",
                "const:0:8"
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


~~~diff
- 00afaf38 ["INT_ADD", "register:40f0:8", ["const:afaf38:8", "const:4:8"]]
+ 00afafd4 ["INT_ADD", "register:40f0:8", ["const:afafd4:8", "const:4:8"]]
~~~


<a id="compare-b2a8656626ada006910bab0c8cc7dde8"></a>

### [`00afaff4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afa/00afaff4.md) → [`00afb090`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb090.md) FUN_00afb090

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`00700af8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) [`00716d90`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00716/00716d90.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 2件 [`00700b50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`00716de8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, return_value_candidate, store_destination

アドレスに依存する影響 `return_value_candidate` 1件, `store_destination` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afb094",
      "incomplete_value": true,
      "site": "00afb094",
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
                "const:ffffffffffffffe0:8"
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
      "definition_site": "00afaff8",
      "incomplete_value": true,
      "site": "00afaff8",
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
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afb094",
      "incomplete_value": true,
      "site": "00afb094",
      "value": [
        "INT_ADD",
        "8",
        [
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
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00afaff8",
      "incomplete_value": true,
      "site": "00afaff8",
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
                "const:10:8"
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00afb0c0",
      "incomplete_value": true,
      "site": "00afb0cc",
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
      "definition_site": "00afb024",
      "incomplete_value": true,
      "site": "00afb030",
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


~~~diff
- 00afb008 ["INT_ADD", "register:40f0:8", ["const:afb008:8", "const:4:8"]]
+ 00afb0a4 ["INT_ADD", "register:40f0:8", ["const:afb0a4:8", "const:4:8"]]
~~~


<a id="compare-993b4a2e798918a12b03c2ac79d083cb"></a>

### [`00afb080`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afb/00afb080.md) → [`00afb11c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb11c.md) FUN_00afb11c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00716d90`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00716/00716d90.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00716de8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, return_value_candidate

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00afb14c",
      "incomplete_value": true,
      "site": "00afb158",
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
      "definition_site": "00afb0b0",
      "incomplete_value": true,
      "site": "00afb0bc",
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


~~~diff
- 00afb094 ["INT_ADD", "register:40f0:8", ["const:afb094:8", "const:4:8"]]
+ 00afb130 ["INT_ADD", "register:40f0:8", ["const:afb130:8", "const:4:8"]]
~~~


<a id="compare-c70ef03b38bf064bf39b35ece07e0513"></a>

### [`00afb0c0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afb/00afb0c0.md) → [`00afb15c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb15c.md) FUN_00afb15c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afb194",
      "incomplete_value": true,
      "site": "00afb194",
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
              "INT_MULT"
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
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
      "definition_site": "00afb0f8",
      "incomplete_value": true,
      "site": "00afb0f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
              "INT_MULT"
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
              [
                "leaf",
                "const:0:8"
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


~~~diff
- 00afb0dc ["INT_ADD", "register:40f0:8", ["const:afb0dc:8", "const:4:8"]]
+ 00afb178 ["INT_ADD", "register:40f0:8", ["const:afb178:8", "const:4:8"]]
~~~


<a id="compare-3290e5e068c55a3e397fcb1fe1397cd5"></a>

### [`00afb10c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afb/00afb10c.md) → [`00afb1a8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb1a8.md) FUN_00afb1a8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`007102d8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00710/007102d8.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00710330`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies

~~~diff
- 00afb120 ["INT_ADD", "register:40f0:8", ["const:afb120:8", "const:4:8"]]
+ 00afb1bc ["INT_ADD", "register:40f0:8", ["const:afb1bc:8", "const:4:8"]]
~~~


<a id="compare-57c8490221e92cd6f14e710e2fa7f67f"></a>

### [`00afb154`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afb/00afb154.md) → [`00afb1f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb1f0.md) FUN_00afb1f0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afb1f8",
      "incomplete_value": true,
      "site": "00afb1f8",
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
                "const:ffffffffffffffd0:8"
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
      "definition_site": "00afb15c",
      "incomplete_value": true,
      "site": "00afb15c",
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
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afb1f8",
      "incomplete_value": true,
      "site": "00afb1f8",
      "value": [
        "INT_ADD",
        "8",
        [
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
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00afb15c",
      "incomplete_value": true,
      "site": "00afb15c",
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
            "const:8:8"
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
      "definition_site": "00afb228",
      "incomplete_value": true,
      "site": "00afb228",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
              "INT_MULT"
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
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
      "definition_site": "00afb18c",
      "incomplete_value": true,
      "site": "00afb18c",
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
              "INT_MULT"
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
              [
                "leaf",
                "const:0:8"
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


~~~diff
- 00afb170 ["INT_ADD", "register:40f0:8", ["const:afb170:8", "const:4:8"]]
+ 00afb20c ["INT_ADD", "register:40f0:8", ["const:afb20c:8", "const:4:8"]]
~~~


<a id="compare-f8506391537dcd0b71af63b1423eb698"></a>

### [`00afb2b8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afb/00afb2b8.md) → [`00afb354`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb354.md) FUN_00afb354

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`007119f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00711/007119f0.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00711a48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, return_value_candidate

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "00afb2f0",
      "incomplete_value": true,
      "site": "00afb2fc",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "BOOL_NEGATE",
            "1",
            [
              "INT_EQUAL"
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


~~~diff
- 00afb2cc ["INT_ADD", "register:40f0:8", ["const:afb2cc:8", "const:4:8"]]
+ 00afb368 ["INT_ADD", "register:40f0:8", ["const:afb368:8", "const:4:8"]]
~~~


<a id="compare-a1f3b107c8d01e5c5c912a801df51ffc"></a>

### [`00afb300`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afb/00afb300.md) → [`00afb39c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb39c.md) FUN_00afb39c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

~~~diff
- 00afb31c ["INT_ADD", "register:40f0:8", ["const:afb31c:8", "const:4:8"]]
+ 00afb3b8 ["INT_ADD", "register:40f0:8", ["const:afb3b8:8", "const:4:8"]]
~~~


<a id="compare-12d80dccf5261627e3cd5f407a097e02"></a>

### [`00afb34c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afb/00afb34c.md) → [`00afb3e8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb3e8.md) FUN_00afb3e8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`0070ea5c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0070e/0070ea5c.md) [`007119f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00711/007119f0.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 2件 [`0070eab4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00711a48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afb3ec",
      "incomplete_value": true,
      "site": "00afb3ec",
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
    "old": {
      "definition_site": "00afb350",
      "incomplete_value": true,
      "site": "00afb350",
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
                "const:ffffffffffffffe0:8"
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
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afb3ec",
      "incomplete_value": true,
      "site": "00afb3ec",
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
                "const:10:8"
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
      "definition_site": "00afb350",
      "incomplete_value": true,
      "site": "00afb350",
      "value": [
        "INT_ADD",
        "8",
        [
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
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  }
]
~~~


~~~diff
- 00afb360 ["INT_ADD", "register:40f0:8", ["const:afb360:8", "const:4:8"]]
+ 00afb3fc ["INT_ADD", "register:40f0:8", ["const:afb3fc:8", "const:4:8"]]
~~~


<a id="compare-3b91923820d69a282b04a0f5658038cd"></a>

### [`00afb394`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afb/00afb394.md) → [`00afb430`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb430.md) FUN_00afb430

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afb434",
      "incomplete_value": true,
      "site": "00afb434",
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
                "const:ffffffffffffffd0:8"
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
      "definition_site": "00afb398",
      "incomplete_value": true,
      "site": "00afb398",
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
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afb438",
      "incomplete_value": true,
      "site": "00afb438",
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
                "const:ffffffffffffffd0:8"
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
      "definition_site": "00afb39c",
      "incomplete_value": true,
      "site": "00afb39c",
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
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afb438",
      "incomplete_value": true,
      "site": "00afb438",
      "value": [
        "INT_ADD",
        "8",
        [
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
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00afb39c",
      "incomplete_value": true,
      "site": "00afb39c",
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
            "const:8:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 1
  }
]
~~~


~~~diff
- 00afb3b0 ["INT_ADD", "register:40f0:8", ["const:afb3b0:8", "const:4:8"]]
+ 00afb44c ["INT_ADD", "register:40f0:8", ["const:afb44c:8", "const:4:8"]]
~~~


<a id="compare-93154430502586f084a571eb60e4efa8"></a>

### [`00afb428`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afb/00afb428.md) → [`00afb4c4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb4c4.md) FUN_00afb4c4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

~~~diff
- 00afb444 ["INT_ADD", "register:40f0:8", ["const:afb444:8", "const:4:8"]]
+ 00afb4e0 ["INT_ADD", "register:40f0:8", ["const:afb4e0:8", "const:4:8"]]
~~~


<a id="compare-710fd7d58be21873985ec3f340942830"></a>

### [`00afb4bc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afb/00afb4bc.md) → [`00afb558`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb558.md) FUN_00afb558

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afb590",
      "incomplete_value": true,
      "site": "00afb590",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
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
      "definition_site": "00afb4f4",
      "incomplete_value": true,
      "site": "00afb4f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
              "INT_MULT"
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
              [
                "leaf",
                "const:0:8"
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


~~~diff
- 00afb4d8 ["INT_ADD", "register:40f0:8", ["const:afb4d8:8", "const:4:8"]]
+ 00afb574 ["INT_ADD", "register:40f0:8", ["const:afb574:8", "const:4:8"]]
~~~


<a id="compare-c0b7fede8af39cc17b174c629b0a2c12"></a>

### [`00afb508`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afb/00afb508.md) → [`00afb5a4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb5a4.md) FUN_00afb5a4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00700af8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00700b50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

~~~diff
- 00afb51c ["INT_ADD", "register:40f0:8", ["const:afb51c:8", "const:4:8"]]
+ 00afb5b8 ["INT_ADD", "register:40f0:8", ["const:afb5b8:8", "const:4:8"]]
~~~


<a id="compare-e2312f5a555a61737dd22621fe0c223a"></a>

### [`00afb548`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afb/00afb548.md) → [`00afb5e4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb5e4.md) FUN_00afb5e4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 4件 [`00700af8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) [`00715500`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00715/00715500.md) [`00716d90`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00716/00716d90.md) [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 4件 [`00700b50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`00715558`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00715/00715558.md) [`00716de8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afb5ec",
      "incomplete_value": true,
      "site": "00afb5ec",
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
                "const:ffffffffffffffc0:8"
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
      "definition_site": "00afb550",
      "incomplete_value": true,
      "site": "00afb550",
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
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afb5ec",
      "incomplete_value": true,
      "site": "00afb5ec",
      "value": [
        "INT_ADD",
        "8",
        [
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
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00afb550",
      "incomplete_value": true,
      "site": "00afb550",
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
            "const:8:8"
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
      "definition_site": "00afb5f0",
      "incomplete_value": true,
      "site": "00afb5f0",
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
                "const:ffffffffffffffc0:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00afb554",
      "incomplete_value": true,
      "site": "00afb554",
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
    "ordinal": 5,
    "slot": 1
  }
]
~~~


~~~diff
- 00afb568 ["INT_ADD", "register:40f0:8", ["const:afb568:8", "const:4:8"]]
+ 00afb604 ["INT_ADD", "register:40f0:8", ["const:afb604:8", "const:4:8"]]
- 00afb590 ["INT_ADD", "register:40f0:8", ["const:afb590:8", "const:4:8"]]
+ 00afb62c ["INT_ADD", "register:40f0:8", ["const:afb62c:8", "const:4:8"]]
~~~


<a id="compare-91cedfab9d429fc2533c33a00ec7dde8"></a>

### [`00afb5bc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afb/00afb5bc.md) → [`00afb658`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb658.md) FUN_00afb658

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 6件 [`005f3a70`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f3/005f3a70.md) [`005fb93c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fb/005fb93c.md) [`00700af8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) [`0070ea5c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0070e/0070ea5c.md) [`007119f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00711/007119f0.md) · 呼出先 5件 [`005e0300`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e0/005e0300.md) [`005e08d8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e0/005e08d8.md) [`005e0920`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e0/005e0920.md) [`005e09a0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e0/005e09a0.md) [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 6件 [`005f3ab0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f3/005f3ab0.md) [`005fb97c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fb/005fb97c.md) [`00700b50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`0070eab4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00711a48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 5件 [`005e0340`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e0/005e0340.md) [`005e0918`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e0/005e0918.md) [`005e0960`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e0/005e0960.md) [`005e09e0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e0/005e09e0.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, branch_value, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, store_destination

優先判定に残った影響 `branch_value` 1件, `store_destination` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afb668",
      "incomplete_value": true,
      "site": "00afb668",
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
    "old": {
      "definition_site": "00afb5cc",
      "incomplete_value": true,
      "site": "00afb5cc",
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
                "const:ffffffffffffffb0:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:40:8"
          ]
        ]
      ]
    },
    "ordinal": 7,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afb668",
      "incomplete_value": true,
      "site": "00afb668",
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
                "const:40:8"
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
      "definition_site": "00afb5cc",
      "incomplete_value": true,
      "site": "00afb5cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
              [
                "leaf",
                "const:40:8"
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
    "ordinal": 8,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afb700",
      "incomplete_value": true,
      "site": "00afb700",
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
              "INT_MULT"
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              [
                "live",
                "register:4048:8"
              ],
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
      "definition_site": "00afb664",
      "incomplete_value": true,
      "site": "00afb664",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
              "INT_MULT"
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
              [
                "leaf",
                "const:0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 9,
    "slot": 1
  }
]
~~~


~~~diff
- 00afb5e8 ["INT_ADD", "register:40f0:8", ["const:afb5e8:8", "const:4:8"]]
+ 00afb684 ["INT_ADD", "register:40f0:8", ["const:afb684:8", "const:4:8"]]
- 00afb5ec ["CBRANCH", null, ["local:b4:8", "tmp:3:1"]]
- 00afb5f0 ["INT_ADD", "register:40f0:8", ["const:afb5f0:8", "const:4:8"]]
+ 00afb688 ["CBRANCH", null, ["local:b6:8", "tmp:3:1"]]
+ 00afb68c ["INT_ADD", "register:40f0:8", ["const:afb68c:8", "const:4:8"]]
- 00afb5f8 ["CBRANCH", null, ["local:b6:8", "register:101:1"]]
+ 00afb694 ["CBRANCH", null, ["local:b7:8", "register:101:1"]]
~~~


<a id="compare-f1e5ebf3c11db0303b86fd429ed97e82"></a>

### [`00afb828`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afb/00afb828.md) → [`00afb8c4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb8c4.md) FUN_00afb8c4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00700af8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00700b50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, return_value_candidate

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "00afb860",
      "incomplete_value": true,
      "site": "00afb86c",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "BOOL_NEGATE",
            "1",
            [
              "INT_EQUAL"
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


~~~diff
- 00afb83c ["INT_ADD", "register:40f0:8", ["const:afb83c:8", "const:4:8"]]
+ 00afb8d8 ["INT_ADD", "register:40f0:8", ["const:afb8d8:8", "const:4:8"]]
~~~


<a id="compare-f37b5f7f58131e1de6d3b95b221ca87b"></a>

### [`00afb870`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afb/00afb870.md) → [`00afb90c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb90c.md) FUN_00afb90c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 6件 [`00700af8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) [`0070ea5c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0070e/0070ea5c.md) [`007119f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00711/007119f0.md) [`00715500`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00715/00715500.md) [`00716d90`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00716/00716d90.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 6件 [`00700b50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`0070eab4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00711a48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) [`00715558`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00715/00715558.md) [`00716de8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afb944",
      "incomplete_value": true,
      "site": "00afb944",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
              "INT_MULT"
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
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
      "definition_site": "00afb8a8",
      "incomplete_value": true,
      "site": "00afb8a8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
              [
                "leaf",
                "const:0:8"
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


~~~diff
- 00afb88c ["INT_ADD", "register:40f0:8", ["const:afb88c:8", "const:4:8"]]
+ 00afb928 ["INT_ADD", "register:40f0:8", ["const:afb928:8", "const:4:8"]]
~~~


<a id="compare-9e1be7234d8f04c7cc9b5705ab001dcb"></a>

### [`00afb8bc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afb/00afb8bc.md) → [`00afb958`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb958.md) FUN_00afb958

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00700af8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00700b50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

~~~diff
- 00afb8d0 ["INT_ADD", "register:40f0:8", ["const:afb8d0:8", "const:4:8"]]
+ 00afb96c ["INT_ADD", "register:40f0:8", ["const:afb96c:8", "const:4:8"]]
~~~


<a id="compare-9629781f56bccb9c1cb209268d934c09"></a>

### [`00afb904`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afb/00afb904.md) → [`00afb9a0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afb9a0.md) FUN_00afb9a0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`005f2d68`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f2/005f2d68.md) [`007102d8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00710/007102d8.md) [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 3件 [`005f2da8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f2/005f2da8.md) [`00710330`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

~~~diff
- 00afb920 ["INT_ADD", "register:40f0:8", ["const:afb920:8", "const:4:8"]]
+ 00afb9bc ["INT_ADD", "register:40f0:8", ["const:afb9bc:8", "const:4:8"]]
~~~


<a id="compare-c1544a7bddfd152229a6e00de2a6bfb4"></a>

### [`00afb990`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afb/00afb990.md) → [`00afba2c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afba2c.md) FUN_00afba2c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`007102d8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00710/007102d8.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00710330`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afba30",
      "incomplete_value": true,
      "site": "00afba30",
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
    "old": {
      "definition_site": "00afb994",
      "incomplete_value": true,
      "site": "00afb994",
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
                "const:ffffffffffffffd0:8"
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
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afba34",
      "incomplete_value": true,
      "site": "00afba34",
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
    "old": {
      "definition_site": "00afb998",
      "incomplete_value": true,
      "site": "00afb998",
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
                "const:ffffffffffffffd0:8"
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
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afba34",
      "incomplete_value": true,
      "site": "00afba34",
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
            "const:8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00afb998",
      "incomplete_value": true,
      "site": "00afb998",
      "value": [
        "INT_ADD",
        "8",
        [
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
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 1
  }
]
~~~


~~~diff
- 00afb9ac ["INT_ADD", "register:40f0:8", ["const:afb9ac:8", "const:4:8"]]
+ 00afba48 ["INT_ADD", "register:40f0:8", ["const:afba48:8", "const:4:8"]]
~~~


<a id="compare-1a53c9e462ca1131805d431ba1c31017"></a>

### [`00afb9dc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afb/00afb9dc.md) → [`00afba78`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afba78.md) FUN_00afba78

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 5件 [`005f2d68`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f2/005f2d68.md) [`00700af8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) [`00707ee0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00707/00707ee0.md) [`00715500`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00715/00715500.md) [`00716d90`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00716/00716d90.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 5件 [`005f2da8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f2/005f2da8.md) [`00700b50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`00707f38`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) [`00715558`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00715/00715558.md) [`00716de8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afba7c",
      "incomplete_value": true,
      "site": "00afba7c",
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
    "old": {
      "definition_site": "00afb9e0",
      "incomplete_value": true,
      "site": "00afb9e0",
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
                "const:ffffffffffffffe0:8"
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
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afba7c",
      "incomplete_value": true,
      "site": "00afba7c",
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
                "const:10:8"
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
      "definition_site": "00afb9e0",
      "incomplete_value": true,
      "site": "00afb9e0",
      "value": [
        "INT_ADD",
        "8",
        [
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
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  }
]
~~~


~~~diff
- 00afb9f0 ["INT_ADD", "register:40f0:8", ["const:afb9f0:8", "const:4:8"]]
+ 00afba8c ["INT_ADD", "register:40f0:8", ["const:afba8c:8", "const:4:8"]]
~~~


<a id="compare-6655b2df9a8f45907634b8852929ae34"></a>

### [`00afba1c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afb/00afba1c.md) → [`00afbab8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afbab8.md) FUN_00afbab8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`00700af8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) [`007102d8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00710/007102d8.md) [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 3件 [`00700b50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`00710330`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies

~~~diff
- 00afba38 ["INT_ADD", "register:40f0:8", ["const:afba38:8", "const:4:8"]]
+ 00afbad4 ["INT_ADD", "register:40f0:8", ["const:afbad4:8", "const:4:8"]]
~~~


<a id="compare-44b6cdc94f52911275dacd311ce41522"></a>

### [`00afbb48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afb/00afbb48.md) → [`00afbbe4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afbbe4.md) FUN_00afbbe4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00700af8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00700b50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

~~~diff
- 00afbb5c ["INT_ADD", "register:40f0:8", ["const:afbb5c:8", "const:4:8"]]
+ 00afbbf8 ["INT_ADD", "register:40f0:8", ["const:afbbf8:8", "const:4:8"]]
~~~


<a id="compare-9f41626abedb793c2304651a6a98e737"></a>

### [`00afbb88`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afb/00afbb88.md) → [`00afbc24`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afbc24.md) FUN_00afbc24

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`00715500`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00715/00715500.md) [`00716d90`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00716/00716d90.md) [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 3件 [`00715558`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00715/00715558.md) [`00716de8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

~~~diff
- 00afbba4 ["INT_ADD", "register:40f0:8", ["const:afbba4:8", "const:4:8"]]
+ 00afbc40 ["INT_ADD", "register:40f0:8", ["const:afbc40:8", "const:4:8"]]
~~~


<a id="compare-a7bee8c382f43cf2be4678989afad1f0"></a>

### [`00afbbd4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afb/00afbbd4.md) → [`00afbc70`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afbc70.md) FUN_00afbc70

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 4件 [`005f2d68`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f2/005f2d68.md) [`00707ee0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00707/00707ee0.md) [`00715500`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00715/00715500.md) [`00716d90`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00716/00716d90.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 4件 [`005f2da8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f2/005f2da8.md) [`00707f38`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) [`00715558`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00715/00715558.md) [`00716de8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

~~~diff
- 00afbbe8 ["INT_ADD", "register:40f0:8", ["const:afbbe8:8", "const:4:8"]]
+ 00afbc84 ["INT_ADD", "register:40f0:8", ["const:afbc84:8", "const:4:8"]]
~~~


<a id="compare-ff7c25b0f472a5620dd8233685017c07"></a>

### [`00afbc14`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afb/00afbc14.md) → [`00afbcb0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afbcb0.md) FUN_00afbcb0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`00700af8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) [`007102d8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00710/007102d8.md) [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 3件 [`00700b50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`00710330`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

~~~diff
- 00afbc30 ["INT_ADD", "register:40f0:8", ["const:afbc30:8", "const:4:8"]]
+ 00afbccc ["INT_ADD", "register:40f0:8", ["const:afbccc:8", "const:4:8"]]
~~~


<a id="compare-621a0c98a08cb594fafdc9eb6f386cfd"></a>

### [`00afbe0c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afb/00afbe0c.md) → [`00afbea8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afbea8.md) FUN_00afbea8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`00700af8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) [`007102d8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00710/007102d8.md) [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 3件 [`00700b50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`00710330`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

~~~diff
- 00afbe28 ["INT_ADD", "register:40f0:8", ["const:afbe28:8", "const:4:8"]]
+ 00afbec4 ["INT_ADD", "register:40f0:8", ["const:afbec4:8", "const:4:8"]]
~~~


<a id="compare-ff3db402a3181d046cd99812631fe836"></a>

### [`00afbeec`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afb/00afbeec.md) → [`00afbf88`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afb/00afbf88.md) FUN_00afbf88

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`005f2d68`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f2/005f2d68.md) [`007102d8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00710/007102d8.md) [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 3件 [`005f2da8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f2/005f2da8.md) [`00710330`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afbf8c",
      "incomplete_value": true,
      "site": "00afbf8c",
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
                "const:ffffffffffffffd0:8"
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
      "definition_site": "00afbef0",
      "incomplete_value": true,
      "site": "00afbef0",
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
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afbf90",
      "incomplete_value": true,
      "site": "00afbf90",
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
                "const:ffffffffffffffd0:8"
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
      "definition_site": "00afbef4",
      "incomplete_value": true,
      "site": "00afbef4",
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
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afbf90",
      "incomplete_value": true,
      "site": "00afbf90",
      "value": [
        "INT_ADD",
        "8",
        [
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
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00afbef4",
      "incomplete_value": true,
      "site": "00afbef4",
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
            "const:8:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 1
  }
]
~~~


~~~diff
- 00afbf08 ["INT_ADD", "register:40f0:8", ["const:afbf08:8", "const:4:8"]]
+ 00afbfa4 ["INT_ADD", "register:40f0:8", ["const:afbfa4:8", "const:4:8"]]
~~~


<a id="compare-b66cfbd9e98aa5b9dd36407d825e1ce2"></a>

### [`00afbfc4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afb/00afbfc4.md) → [`00afc060`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afc060.md) FUN_00afc060

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00700af8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00700b50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, return_value_candidate

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "00afbff4",
      "incomplete_value": true,
      "site": "00afc000",
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


~~~diff
- 00afbfd8 ["INT_ADD", "register:40f0:8", ["const:afbfd8:8", "const:4:8"]]
+ 00afc074 ["INT_ADD", "register:40f0:8", ["const:afc074:8", "const:4:8"]]
~~~


<a id="compare-299875489e14212c242566248efe2810"></a>

### [`00afc050`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afc/00afc050.md) → [`00afc0ec`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afc0ec.md) FUN_00afc0ec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`007102d8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00710/007102d8.md) [`007119f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00711/007119f0.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 2件 [`00710330`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) [`00711a48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afc120",
      "incomplete_value": true,
      "site": "00afc120",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
              "INT_MULT"
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
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
      "definition_site": "00afc084",
      "incomplete_value": true,
      "site": "00afc084",
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
              "INT_MULT"
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              [
                "live",
                "register:4048:8"
              ],
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
  }
]
~~~


~~~diff
- 00afc068 ["INT_ADD", "register:40f0:8", ["const:afc068:8", "const:4:8"]]
+ 00afc104 ["INT_ADD", "register:40f0:8", ["const:afc104:8", "const:4:8"]]
- 00afc088 ["INT_ADD", "register:40f0:8", ["const:afc088:8", "const:4:8"]]
+ 00afc124 ["INT_ADD", "register:40f0:8", ["const:afc124:8", "const:4:8"]]
~~~


<a id="compare-6c86d205b5b2182f629b42474e957708"></a>

### [`00afc0b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afc/00afc0b4.md) → [`00afc150`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afc150.md) FUN_00afc150

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`00700af8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) [`007102d8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00710/007102d8.md) [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 3件 [`00700b50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`00710330`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

~~~diff
- 00afc0d0 ["INT_ADD", "register:40f0:8", ["const:afc0d0:8", "const:4:8"]]
+ 00afc16c ["INT_ADD", "register:40f0:8", ["const:afc16c:8", "const:4:8"]]
~~~


<a id="compare-053974d2e0a8eeff11b24c52d2507480"></a>

### [`00afc100`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afc/00afc100.md) → [`00afc19c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afc19c.md) FUN_00afc19c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`005f2d68`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f2/005f2d68.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`005f2da8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f2/005f2da8.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afc1dc",
      "incomplete_value": true,
      "site": "00afc1dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
              "INT_MULT"
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
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
      "definition_site": "00afc140",
      "incomplete_value": true,
      "site": "00afc140",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "INT_LEFT",
            "8",
            [
              [
                "live",
                "register:4048:8"
              ],
              [
                "leaf",
                "const:0:8"
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


~~~diff
- 00afc11c ["INT_ADD", "register:40f0:8", ["const:afc11c:8", "const:4:8"]]
+ 00afc1b8 ["INT_ADD", "register:40f0:8", ["const:afc1b8:8", "const:4:8"]]
~~~


<a id="compare-068b8dd0bff842068c479413ccde8379"></a>

### [`00afc154`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afc/00afc154.md) → [`00afc1f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afc1f0.md) FUN_00afc1f0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`005f2d68`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f2/005f2d68.md) [`007102d8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00710/007102d8.md) [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 3件 [`005f2da8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f2/005f2da8.md) [`00710330`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afc1f8",
      "incomplete_value": true,
      "site": "00afc1f8",
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
                "const:ffffffffffffffd0:8"
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
      "definition_site": "00afc15c",
      "incomplete_value": true,
      "site": "00afc15c",
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
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afc1f8",
      "incomplete_value": true,
      "site": "00afc1f8",
      "value": [
        "INT_ADD",
        "8",
        [
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
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00afc15c",
      "incomplete_value": true,
      "site": "00afc15c",
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
            "const:8:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 1
  }
]
~~~


~~~diff
- 00afc170 ["INT_ADD", "register:40f0:8", ["const:afc170:8", "const:4:8"]]
+ 00afc20c ["INT_ADD", "register:40f0:8", ["const:afc20c:8", "const:4:8"]]
~~~


<a id="compare-0753c10fb3889d5860ccaa26b4e1a532"></a>

### [`00afc1e0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afc/00afc1e0.md) → [`00afc27c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afc27c.md) FUN_00afc27c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`00715500`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00715/00715500.md) [`00716d90`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00716/00716d90.md) [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 3件 [`00715558`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00715/00715558.md) [`00716de8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afc2b4",
      "incomplete_value": true,
      "site": "00afc2b4",
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
              "INT_MULT"
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
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
      "definition_site": "00afc218",
      "incomplete_value": true,
      "site": "00afc218",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
              "INT_MULT"
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
              [
                "leaf",
                "const:0:8"
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


~~~diff
- 00afc1fc ["INT_ADD", "register:40f0:8", ["const:afc1fc:8", "const:4:8"]]
+ 00afc298 ["INT_ADD", "register:40f0:8", ["const:afc298:8", "const:4:8"]]
~~~


<a id="compare-0e38bf070173d9eecf4922d3b3ec6ad3"></a>

### [`00afc274`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afc/00afc274.md) → [`00afc310`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afc310.md) FUN_00afc310

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`00700af8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 2件 [`00700b50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afc314",
      "incomplete_value": true,
      "site": "00afc314",
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
                "const:ffffffffffffffd0:8"
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
      "definition_site": "00afc278",
      "incomplete_value": true,
      "site": "00afc278",
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
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afc318",
      "incomplete_value": true,
      "site": "00afc318",
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
                "const:ffffffffffffffd0:8"
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
      "definition_site": "00afc27c",
      "incomplete_value": true,
      "site": "00afc27c",
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
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afc318",
      "incomplete_value": true,
      "site": "00afc318",
      "value": [
        "INT_ADD",
        "8",
        [
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
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00afc27c",
      "incomplete_value": true,
      "site": "00afc27c",
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
            "const:8:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 1
  }
]
~~~


~~~diff
- 00afc290 ["INT_ADD", "register:40f0:8", ["const:afc290:8", "const:4:8"]]
+ 00afc32c ["INT_ADD", "register:40f0:8", ["const:afc32c:8", "const:4:8"]]
~~~


<a id="compare-f89b8d40878ba8ffd6433f5423bfac50"></a>

### [`00afc2c0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afc/00afc2c0.md) → [`00afc35c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afc35c.md) FUN_00afc35c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`00700af8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) [`00707ee0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00707/00707ee0.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 2件 [`00700b50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`00707f38`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

~~~diff
- 00afc2d4 ["INT_ADD", "register:40f0:8", ["const:afc2d4:8", "const:4:8"]]
+ 00afc370 ["INT_ADD", "register:40f0:8", ["const:afc370:8", "const:4:8"]]
~~~


<a id="compare-dc1524189443a0055c1ce6d724670a25"></a>

### [`00afc300`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afc/00afc300.md) → [`00afc39c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afc39c.md) FUN_00afc39c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00700af8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00700b50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afc3d4",
      "incomplete_value": true,
      "site": "00afc3d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "INT_LEFT",
            "8",
            [
              [
                "live",
                "register:4048:8"
              ],
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
      "definition_site": "00afc338",
      "incomplete_value": true,
      "site": "00afc338",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
              "INT_MULT"
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
              [
                "leaf",
                "const:0:8"
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


~~~diff
- 00afc31c ["INT_ADD", "register:40f0:8", ["const:afc31c:8", "const:4:8"]]
+ 00afc3b8 ["INT_ADD", "register:40f0:8", ["const:afc3b8:8", "const:4:8"]]
~~~


<a id="compare-7cff4028ed7397cf88fa7d52538587c2"></a>

### [`00afc34c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afc/00afc34c.md) → [`00afc3e8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afc3e8.md) FUN_00afc3e8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00700af8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00700b50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afc428",
      "incomplete_value": true,
      "site": "00afc428",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
              "INT_MULT"
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
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
      "definition_site": "00afc38c",
      "incomplete_value": true,
      "site": "00afc38c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
              [
                "leaf",
                "const:0:8"
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


~~~diff
- 00afc368 ["INT_ADD", "register:40f0:8", ["const:afc368:8", "const:4:8"]]
+ 00afc404 ["INT_ADD", "register:40f0:8", ["const:afc404:8", "const:4:8"]]
~~~


<a id="compare-3e8769a9fbe4b4717f6b635301742797"></a>

### [`00afc3e0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afc/00afc3e0.md) → [`00afc47c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afc47c.md) FUN_00afc47c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`00700af8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) [`007102d8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00710/007102d8.md) [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 3件 [`00700b50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`00710330`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afc4b4",
      "incomplete_value": true,
      "site": "00afc4b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "INT_LEFT",
            "8",
            [
              [
                "live",
                "register:4048:8"
              ],
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
      "definition_site": "00afc418",
      "incomplete_value": true,
      "site": "00afc418",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
              "INT_MULT"
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
              [
                "leaf",
                "const:0:8"
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


~~~diff
- 00afc3fc ["INT_ADD", "register:40f0:8", ["const:afc3fc:8", "const:4:8"]]
+ 00afc498 ["INT_ADD", "register:40f0:8", ["const:afc498:8", "const:4:8"]]
~~~


<a id="compare-ee297287583d8c3b219b68c6e14ecffc"></a>

### [`00afc42c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afc/00afc42c.md) → [`00afc4c8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afc4c8.md) FUN_00afc4c8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00716b80`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00716/00716b80.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00716bd8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716bd8.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afc4cc",
      "incomplete_value": true,
      "site": "00afc4cc",
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
    "old": {
      "definition_site": "00afc430",
      "incomplete_value": true,
      "site": "00afc430",
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
                "const:ffffffffffffffd0:8"
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
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afc4d0",
      "incomplete_value": true,
      "site": "00afc4d0",
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
    "old": {
      "definition_site": "00afc434",
      "incomplete_value": true,
      "site": "00afc434",
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
                "const:ffffffffffffffd0:8"
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
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afc4d0",
      "incomplete_value": true,
      "site": "00afc4d0",
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
            "const:8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00afc434",
      "incomplete_value": true,
      "site": "00afc434",
      "value": [
        "INT_ADD",
        "8",
        [
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
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 1
  }
]
~~~


~~~diff
- 00afc448 ["INT_ADD", "register:40f0:8", ["const:afc448:8", "const:4:8"]]
+ 00afc4e4 ["INT_ADD", "register:40f0:8", ["const:afc4e4:8", "const:4:8"]]
~~~


<a id="compare-9269858d9c2229c703395f3469b1369a"></a>

### [`00afc480`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afc/00afc480.md) → [`00afc51c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afc51c.md) FUN_00afc51c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`007102d8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00710/007102d8.md) [`00716b80`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00716/00716b80.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 2件 [`00710330`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) [`00716bd8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716bd8.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

~~~diff
- 00afc494 ["INT_ADD", "register:40f0:8", ["const:afc494:8", "const:4:8"]]
+ 00afc530 ["INT_ADD", "register:40f0:8", ["const:afc530:8", "const:4:8"]]
~~~


<a id="compare-b892092536a1ee8d80e51fe64c862d56"></a>

### [`00afc50c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afc/00afc50c.md) → [`00afc5a8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afc5a8.md) FUN_00afc5a8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`00707d70`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00707/00707d70.md) [`00707ee0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00707/00707ee0.md) [`0070def0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0070d/0070def0.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 3件 [`00707dc8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707dc8.md) [`00707f38`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) [`0070df48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070d/0070df48.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, return_value_candidate

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00afc5f0",
      "incomplete_value": true,
      "site": "00afc600",
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
      "definition_site": "00afc554",
      "incomplete_value": true,
      "site": "00afc564",
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


参照の変更（関数入口からの相対位置）

~~~json
{
  "removed": [
    [
      56,
      "DATA",
      [
        "storage",
        "0030a3b0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      56,
      "DATA",
      [
        "storage",
        "0030a3f0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00afc528 ["INT_ADD", "register:40f0:8", ["const:afc528:8", "const:4:8"]]
+ 00afc5c4 ["INT_ADD", "register:40f0:8", ["const:afc5c4:8", "const:4:8"]]
- 00afc540 ["COPY", "tmp:0:8", ["const:3b0:8"]]
+ 00afc5dc ["COPY", "tmp:0:8", ["const:3f0:8"]]
~~~


<a id="compare-83357a30d45d70912e41dce98aa91470"></a>

### [`00afc568`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afc/00afc568.md) → [`00afc604`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afc604.md) FUN_00afc604

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 5件 [`00707d70`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00707/00707d70.md) [`0070def0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0070d/0070def0.md) [`00715500`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00715/00715500.md) [`00716d90`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00716/00716d90.md) [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 5件 [`00707dc8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707dc8.md) [`0070df48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070d/0070df48.md) [`00715558`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00715/00715558.md) [`00716de8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, store_destination

優先判定に残った影響 `store_destination` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afc608",
      "incomplete_value": true,
      "site": "00afc608",
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
                "const:ffffffffffffffd0:8"
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
      "definition_site": "00afc56c",
      "incomplete_value": true,
      "site": "00afc56c",
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
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afc608",
      "incomplete_value": true,
      "site": "00afc608",
      "value": [
        "INT_ADD",
        "8",
        [
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
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00afc56c",
      "incomplete_value": true,
      "site": "00afc56c",
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
                "const:10:8"
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afc60c",
      "incomplete_value": true,
      "site": "00afc60c",
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
                "const:ffffffffffffffd0:8"
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
      "definition_site": "00afc570",
      "incomplete_value": true,
      "site": "00afc570",
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
    "slot": 1
  }
]
~~~


参照の変更（関数入口からの相対位置）

~~~json
{
  "removed": [
    [
      60,
      "DATA",
      [
        "storage",
        "0030a3b0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      60,
      "DATA",
      [
        "storage",
        "0030a3f0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00afc588 ["INT_ADD", "register:40f0:8", ["const:afc588:8", "const:4:8"]]
+ 00afc624 ["INT_ADD", "register:40f0:8", ["const:afc624:8", "const:4:8"]]
- 00afc5a0 ["COPY", "tmp:0:8", ["const:3b0:8"]]
+ 00afc63c ["COPY", "tmp:0:8", ["const:3f0:8"]]
~~~


<a id="compare-3719bc060efcf191b683da382602ff74"></a>

### [`00afc65c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afc/00afc65c.md) → [`00afc6f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afc6f8.md) FUN_00afc6f8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 6件 [`005f2d68`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f2/005f2d68.md) [`005f3a70`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f3/005f3a70.md) [`005fb93c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fb/005fb93c.md) [`00707ee0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00707/00707ee0.md) [`0070ea5c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0070e/0070ea5c.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 6件 [`005f2da8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f2/005f2da8.md) [`005f3ab0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f3/005f3ab0.md) [`005fb97c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fb/005fb97c.md) [`00707f38`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) [`0070eab4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, return_value_candidate

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "00afc68c",
      "incomplete_value": true,
      "site": "00afc698",
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


~~~diff
- 00afc670 ["INT_ADD", "register:40f0:8", ["const:afc670:8", "const:4:8"]]
+ 00afc70c ["INT_ADD", "register:40f0:8", ["const:afc70c:8", "const:4:8"]]
~~~


<a id="compare-6866ef204fbfc06afcc654d0d7b4ddf3"></a>

### [`00afc69c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afc/00afc69c.md) → [`00afc738`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afc738.md) FUN_00afc738

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 5件 [`005f3a70`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f3/005f3a70.md) [`005fb93c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fb/005fb93c.md) [`0070ea5c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0070e/0070ea5c.md) [`007119f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00711/007119f0.md) [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 5件 [`005f3ab0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f3/005f3ab0.md) [`005fb97c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fb/005fb97c.md) [`0070eab4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00711a48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afc770",
      "incomplete_value": true,
      "site": "00afc770",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "INT_LEFT",
            "8",
            [
              [
                "live",
                "register:4048:8"
              ],
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
      "definition_site": "00afc6d4",
      "incomplete_value": true,
      "site": "00afc6d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
              "INT_MULT"
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
              [
                "leaf",
                "const:0:8"
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


~~~diff
- 00afc6b8 ["INT_ADD", "register:40f0:8", ["const:afc6b8:8", "const:4:8"]]
+ 00afc754 ["INT_ADD", "register:40f0:8", ["const:afc754:8", "const:4:8"]]
~~~


<a id="compare-43768e2abf2395c763a48710cfd20465"></a>

### [`00afc6e8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afc/00afc6e8.md) → [`00afc784`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afc784.md) FUN_00afc784

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`005f2d68`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f2/005f2d68.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`005f2da8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f2/005f2da8.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afc7c4",
      "incomplete_value": true,
      "site": "00afc7c4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
              "INT_MULT"
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
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
      "definition_site": "00afc728",
      "incomplete_value": true,
      "site": "00afc728",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
              [
                "leaf",
                "const:0:8"
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


~~~diff
- 00afc704 ["INT_ADD", "register:40f0:8", ["const:afc704:8", "const:4:8"]]
+ 00afc7a0 ["INT_ADD", "register:40f0:8", ["const:afc7a0:8", "const:4:8"]]
~~~


<a id="compare-caa05c769176bb0c160644fe6fecb396"></a>

### [`00afc73c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afc/00afc73c.md) → [`00afc7d8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afc7d8.md) FUN_00afc7d8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`005f2d68`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f2/005f2d68.md) [`00707ee0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00707/00707ee0.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 2件 [`005f2da8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f2/005f2da8.md) [`00707f38`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies

~~~diff
- 00afc750 ["INT_ADD", "register:40f0:8", ["const:afc750:8", "const:4:8"]]
+ 00afc7ec ["INT_ADD", "register:40f0:8", ["const:afc7ec:8", "const:4:8"]]
~~~


<a id="compare-7496d08e81ce6dc0f24d875c51a9c8ae"></a>

### [`00afc7c8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afc/00afc7c8.md) → [`00afc864`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afc864.md) FUN_00afc864

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`005f2d68`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f2/005f2d68.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`005f2da8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f2/005f2da8.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afc86c",
      "incomplete_value": true,
      "site": "00afc86c",
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
    "old": {
      "definition_site": "00afc7d0",
      "incomplete_value": true,
      "site": "00afc7d0",
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
                "const:ffffffffffffffd0:8"
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
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afc86c",
      "incomplete_value": true,
      "site": "00afc86c",
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
            "const:8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00afc7d0",
      "incomplete_value": true,
      "site": "00afc7d0",
      "value": [
        "INT_ADD",
        "8",
        [
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
          ],
          [
            "leaf",
            "const:8:8"
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
      "definition_site": "00afc8a4",
      "incomplete_value": true,
      "site": "00afc8a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
              "INT_MULT"
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
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
      "definition_site": "00afc808",
      "incomplete_value": true,
      "site": "00afc808",
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
              "INT_MULT"
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
              [
                "leaf",
                "const:0:8"
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


~~~diff
- 00afc7e4 ["INT_ADD", "register:40f0:8", ["const:afc7e4:8", "const:4:8"]]
+ 00afc880 ["INT_ADD", "register:40f0:8", ["const:afc880:8", "const:4:8"]]
~~~


<a id="compare-dbde2cce3e3e5f45312facdaaa784865"></a>

### [`00afc8b0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afc/00afc8b0.md) → [`00afc94c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afc94c.md) FUN_00afc94c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 4件 [`00700af8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) [`0070ea5c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0070e/0070ea5c.md) [`007119f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00711/007119f0.md) [`00716d90`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00716/00716d90.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 4件 [`00700b50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`0070eab4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00711a48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) [`00716de8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

~~~diff
- 00afc8c4 ["INT_ADD", "register:40f0:8", ["const:afc8c4:8", "const:4:8"]]
+ 00afc960 ["INT_ADD", "register:40f0:8", ["const:afc960:8", "const:4:8"]]
~~~


<a id="compare-47a414e95ce2aa178bf3a769bbb2ff1e"></a>

### [`00afc8f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afc/00afc8f0.md) → [`00afc98c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afc98c.md) FUN_00afc98c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`00700af8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) [`00716d90`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00716/00716d90.md) [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 3件 [`00700b50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`00716de8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afc9c4",
      "incomplete_value": true,
      "site": "00afc9c4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "INT_LEFT",
            "8",
            [
              [
                "live",
                "register:4048:8"
              ],
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
      "definition_site": "00afc928",
      "incomplete_value": true,
      "site": "00afc928",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
              "INT_MULT"
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
              [
                "leaf",
                "const:0:8"
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


~~~diff
- 00afc90c ["INT_ADD", "register:40f0:8", ["const:afc90c:8", "const:4:8"]]
+ 00afc9a8 ["INT_ADD", "register:40f0:8", ["const:afc9a8:8", "const:4:8"]]
~~~


<a id="compare-6d5e3f13dcd2c20ef59876b74df1280c"></a>

### [`00afc93c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afc/00afc93c.md) → [`00afc9d8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afc9d8.md) FUN_00afc9d8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00700af8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00700b50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies

~~~diff
- 00afc950 ["INT_ADD", "register:40f0:8", ["const:afc950:8", "const:4:8"]]
+ 00afc9ec ["INT_ADD", "register:40f0:8", ["const:afc9ec:8", "const:4:8"]]
~~~


<a id="compare-614b782bc9053a89f9b3b2ee129e516c"></a>

### [`00afca08`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afc/00afca08.md) → [`00afcaa4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afcaa4.md) FUN_00afcaa4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`00700af8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) [`00716d90`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00716/00716d90.md) [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 3件 [`00700b50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`00716de8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afcaac",
      "incomplete_value": true,
      "site": "00afcaac",
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
                "const:ffffffffffffffd0:8"
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
      "definition_site": "00afca10",
      "incomplete_value": true,
      "site": "00afca10",
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
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afcaac",
      "incomplete_value": true,
      "site": "00afcaac",
      "value": [
        "INT_ADD",
        "8",
        [
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
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00afca10",
      "incomplete_value": true,
      "site": "00afca10",
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
            "const:8:8"
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
      "definition_site": "00afcadc",
      "incomplete_value": true,
      "site": "00afcadc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
              "INT_MULT"
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
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
      "definition_site": "00afca40",
      "incomplete_value": true,
      "site": "00afca40",
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
              "INT_MULT"
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
              [
                "leaf",
                "const:0:8"
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


~~~diff
- 00afca24 ["INT_ADD", "register:40f0:8", ["const:afca24:8", "const:4:8"]]
+ 00afcac0 ["INT_ADD", "register:40f0:8", ["const:afcac0:8", "const:4:8"]]
~~~


<a id="compare-dde958b48ac3cae910ec93404a498b80"></a>

### [`00afca94`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afc/00afca94.md) → [`00afcb30`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afcb30.md) FUN_00afcb30

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`00700af8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) [`00716d90`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00716/00716d90.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 2件 [`00700b50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`00716de8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afcb68",
      "incomplete_value": true,
      "site": "00afcb68",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
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
      "definition_site": "00afcacc",
      "incomplete_value": true,
      "site": "00afcacc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "INT_LEFT",
            "8",
            [
              [
                "live",
                "register:4048:8"
              ],
              [
                "leaf",
                "const:0:8"
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


~~~diff
- 00afcab0 ["INT_ADD", "register:40f0:8", ["const:afcab0:8", "const:4:8"]]
+ 00afcb4c ["INT_ADD", "register:40f0:8", ["const:afcb4c:8", "const:4:8"]]
~~~


<a id="compare-5bcf4ca3e6b7f08d5c1d8f6850cd3cd8"></a>

### [`00afcae0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afc/00afcae0.md) → [`00afcb7c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afcb7c.md) FUN_00afcb7c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00700af8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00700b50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afcb84",
      "incomplete_value": true,
      "site": "00afcb84",
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
    "old": {
      "definition_site": "00afcae8",
      "incomplete_value": true,
      "site": "00afcae8",
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
                "const:ffffffffffffffd0:8"
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
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afcb84",
      "incomplete_value": true,
      "site": "00afcb84",
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
            "const:8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00afcae8",
      "incomplete_value": true,
      "site": "00afcae8",
      "value": [
        "INT_ADD",
        "8",
        [
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
          ],
          [
            "leaf",
            "const:8:8"
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
      "definition_site": "00afcbbc",
      "incomplete_value": true,
      "site": "00afcbbc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "INT_LEFT",
            "8",
            [
              [
                "live",
                "register:4048:8"
              ],
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
      "definition_site": "00afcb20",
      "incomplete_value": true,
      "site": "00afcb20",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
              [
                "leaf",
                "const:0:8"
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


~~~diff
- 00afcafc ["INT_ADD", "register:40f0:8", ["const:afcafc:8", "const:4:8"]]
+ 00afcb98 ["INT_ADD", "register:40f0:8", ["const:afcb98:8", "const:4:8"]]
~~~


<a id="compare-9fffb7ca0094db2eae6b9a4304fb1e23"></a>

### [`00afcb34`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afc/00afcb34.md) → [`00afcbd0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afcbd0.md) FUN_00afcbd0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`00707ee0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00707/00707ee0.md) [`00716d90`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00716/00716d90.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 2件 [`00707f38`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) [`00716de8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies

~~~diff
- 00afcb48 ["INT_ADD", "register:40f0:8", ["const:afcb48:8", "const:4:8"]]
+ 00afcbe4 ["INT_ADD", "register:40f0:8", ["const:afcbe4:8", "const:4:8"]]
~~~


<a id="compare-8fa4e6878633ad31a4bf14127a4ff0e4"></a>

### [`00afcb74`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afc/00afcb74.md) → [`00afcc10`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afcc10.md) FUN_00afcc10

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00700af8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00700b50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afcc48",
      "incomplete_value": true,
      "site": "00afcc48",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
              "INT_MULT"
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
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
      "definition_site": "00afcbac",
      "incomplete_value": true,
      "site": "00afcbac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "INT_LEFT",
            "8",
            [
              [
                "live",
                "register:4048:8"
              ],
              [
                "leaf",
                "const:0:8"
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


~~~diff
- 00afcb90 ["INT_ADD", "register:40f0:8", ["const:afcb90:8", "const:4:8"]]
+ 00afcc2c ["INT_ADD", "register:40f0:8", ["const:afcc2c:8", "const:4:8"]]
~~~


<a id="compare-56514f619c5367fd2be5faf9357c56d1"></a>

### [`00afcbc0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afc/00afcbc0.md) → [`00afcc5c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afcc5c.md) FUN_00afcc5c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00716d90`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00716/00716d90.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00716de8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afcc60",
      "incomplete_value": true,
      "site": "00afcc60",
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
    "old": {
      "definition_site": "00afcbc4",
      "incomplete_value": true,
      "site": "00afcbc4",
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
                "const:ffffffffffffffd0:8"
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
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afcc64",
      "incomplete_value": true,
      "site": "00afcc64",
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
    "old": {
      "definition_site": "00afcbc8",
      "incomplete_value": true,
      "site": "00afcbc8",
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
                "const:ffffffffffffffd0:8"
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
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afcc64",
      "incomplete_value": true,
      "site": "00afcc64",
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
            "const:8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00afcbc8",
      "incomplete_value": true,
      "site": "00afcbc8",
      "value": [
        "INT_ADD",
        "8",
        [
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
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 1
  }
]
~~~


~~~diff
- 00afcbdc ["INT_ADD", "register:40f0:8", ["const:afcbdc:8", "const:4:8"]]
+ 00afcc78 ["INT_ADD", "register:40f0:8", ["const:afcc78:8", "const:4:8"]]
~~~


<a id="compare-2a0d6d7b356497d98d16183c90457df8"></a>

### [`00afcc14`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afc/00afcc14.md) → [`00afccb0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afccb0.md) FUN_00afccb0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`005f2d68`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f2/005f2d68.md) [`00707ee0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00707/00707ee0.md) [`007119f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00711/007119f0.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 3件 [`005f2da8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f2/005f2da8.md) [`00707f38`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) [`00711a48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, return_value_candidate, store_destination

アドレスに依存する影響 `return_value_candidate` 1件, `store_destination` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afccb4",
      "incomplete_value": true,
      "site": "00afccb4",
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
    "old": {
      "definition_site": "00afcc18",
      "incomplete_value": true,
      "site": "00afcc18",
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
                "const:ffffffffffffffe0:8"
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
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afccb4",
      "incomplete_value": true,
      "site": "00afccb4",
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
                "const:10:8"
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
      "definition_site": "00afcc18",
      "incomplete_value": true,
      "site": "00afcc18",
      "value": [
        "INT_ADD",
        "8",
        [
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
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "00afcc44",
      "incomplete_value": true,
      "site": "00afcc50",
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


~~~diff
- 00afcc28 ["INT_ADD", "register:40f0:8", ["const:afcc28:8", "const:4:8"]]
+ 00afccc4 ["INT_ADD", "register:40f0:8", ["const:afccc4:8", "const:4:8"]]
~~~


<a id="compare-bea67bf744447ef1ae0430c4a22eeca5"></a>

### [`00afcc54`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afc/00afcc54.md) → [`00afccf0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afccf0.md) FUN_00afccf0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`007119f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00711/007119f0.md) [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 2件 [`00711a48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies

~~~diff
- 00afcc70 ["INT_ADD", "register:40f0:8", ["const:afcc70:8", "const:4:8"]]
+ 00afcd0c ["INT_ADD", "register:40f0:8", ["const:afcd0c:8", "const:4:8"]]
~~~


<a id="compare-6bb130d8ee5d53f11fecbb43c4056916"></a>

### [`00afcca0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afc/00afcca0.md) → [`00afcd3c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afcd3c.md) FUN_00afcd3c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`005f2d68`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f2/005f2d68.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`005f2da8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f2/005f2da8.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

~~~diff
- 00afccbc ["INT_ADD", "register:40f0:8", ["const:afccbc:8", "const:4:8"]]
+ 00afcd58 ["INT_ADD", "register:40f0:8", ["const:afcd58:8", "const:4:8"]]
~~~


<a id="compare-c6b659812213c2d58f289abfdda12037"></a>

### [`00afd01c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afd/00afd01c.md) → [`00afd0b8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afd/00afd0b8.md) FUN_00afd0b8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00700af8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) · 呼出先 2件 [`005e7420`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00700b50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 2件 [`005e7460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, store_destination

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afd158",
      "incomplete_value": true,
      "site": "00afd158",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
              "INT_MULT"
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
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
      "definition_site": "00afd0bc",
      "incomplete_value": true,
      "site": "00afd0bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "INT_LEFT",
            "8",
            [
              [
                "live",
                "register:4048:8"
              ],
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
  }
]
~~~


~~~diff
- 00afd038 ["INT_ADD", "register:40f0:8", ["const:afd038:8", "const:4:8"]]
+ 00afd0d4 ["INT_ADD", "register:40f0:8", ["const:afd0d4:8", "const:4:8"]]
- 00afd050 ["INT_ADD", "register:40f0:8", ["const:afd050:8", "const:4:8"]]
+ 00afd0ec ["INT_ADD", "register:40f0:8", ["const:afd0ec:8", "const:4:8"]]
- 00afd054 ["CBRANCH", null, ["local:b2:8", "tmp:3:1"]]
- 00afd058 ["INT_ADD", "register:40f0:8", ["const:afd058:8", "const:4:8"]]
+ 00afd0f0 ["CBRANCH", null, ["local:b3:8", "tmp:3:1"]]
+ 00afd0f4 ["INT_ADD", "register:40f0:8", ["const:afd0f4:8", "const:4:8"]]
~~~


<a id="compare-9b586e2fc66a013b5cc5b3e01a3a567d"></a>

### [`00afd0d0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afd/00afd0d0.md) → [`00afd16c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afd/00afd16c.md) FUN_00afd16c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00716d90`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00716/00716d90.md) · 呼出先 2件 [`005e7420`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00716de8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 2件 [`005e7460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, store_destination

優先判定に残った影響 `store_destination` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afd170",
      "incomplete_value": true,
      "site": "00afd170",
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
    "old": {
      "definition_site": "00afd0d4",
      "incomplete_value": true,
      "site": "00afd0d4",
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
                "const:ffffffffffffffe0:8"
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
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afd170",
      "incomplete_value": true,
      "site": "00afd170",
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
                "const:10:8"
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
      "definition_site": "00afd0d4",
      "incomplete_value": true,
      "site": "00afd0d4",
      "value": [
        "INT_ADD",
        "8",
        [
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
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  }
]
~~~


~~~diff
- 00afd0e4 ["INT_ADD", "register:40f0:8", ["const:afd0e4:8", "const:4:8"]]
+ 00afd180 ["INT_ADD", "register:40f0:8", ["const:afd180:8", "const:4:8"]]
- 00afd0f8 ["INT_ADD", "register:40f0:8", ["const:afd0f8:8", "const:4:8"]]
+ 00afd194 ["INT_ADD", "register:40f0:8", ["const:afd194:8", "const:4:8"]]
- 00afd0fc ["CBRANCH", null, ["local:b4:8", "tmp:3:1"]]
+ 00afd198 ["CBRANCH", null, ["local:b5:8", "tmp:3:1"]]
~~~


<a id="compare-f08f87ecc87c854b2870e699f2edb088"></a>

### [`00afd138`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afd/00afd138.md) → [`00afd1d4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afd/00afd1d4.md) FUN_00afd1d4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 2件 [`005e7420`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 2件 [`005e7460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

~~~diff
- 00afd154 ["INT_ADD", "register:40f0:8", ["const:afd154:8", "const:4:8"]]
+ 00afd1f0 ["INT_ADD", "register:40f0:8", ["const:afd1f0:8", "const:4:8"]]
- 00afd168 ["INT_ADD", "register:40f0:8", ["const:afd168:8", "const:4:8"]]
+ 00afd204 ["INT_ADD", "register:40f0:8", ["const:afd204:8", "const:4:8"]]
- 00afd16c ["CBRANCH", null, ["local:b4:8", "tmp:3:1"]]
+ 00afd208 ["CBRANCH", null, ["local:b2:8", "tmp:3:1"]]
~~~


<a id="compare-24fb336f14cf637a6a81a6376812ad9a"></a>

### [`00afd3a0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afd/00afd3a0.md) → [`00afd43c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afd/00afd43c.md) FUN_00afd43c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 2件 [`005e7420`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 2件 [`005e7460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, store_destination

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afd494",
      "incomplete_value": true,
      "site": "00afd494",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
              "INT_MULT"
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
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
      "definition_site": "00afd3f8",
      "incomplete_value": true,
      "site": "00afd3f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
              [
                "leaf",
                "const:0:8"
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
    "new": null,
    "old": {
      "definition_site": "00afd3cc",
      "incomplete_value": true,
      "site": "00afd3d0",
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
                "register:4000:8"
              ],
              "INT_MULT"
            ]
          ],
          [
            "leaf",
            "const:2768:8"
          ]
        ]
      ]
    },
    "ordinal": 1,
    "slot": 1
  }
]
~~~


~~~diff
- 00afd3bc ["INT_ADD", "register:40f0:8", ["const:afd3bc:8", "const:4:8"]]
+ 00afd458 ["INT_ADD", "register:40f0:8", ["const:afd458:8", "const:4:8"]]
- 00afd3d0 ["INT_ADD", "register:40f0:8", ["const:afd3d0:8", "const:4:8"]]
+ 00afd46c ["INT_ADD", "register:40f0:8", ["const:afd46c:8", "const:4:8"]]
- 00afd3d4 ["CBRANCH", null, ["local:b3:8", "tmp:3:1"]]
+ 00afd470 ["CBRANCH", null, ["local:b6:8", "tmp:3:1"]]
~~~


<a id="compare-0cad5a3e84e2405bdc6cb5b23f3af5a5"></a>

### [`00afd40c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afd/00afd40c.md) → [`00afd4a8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afd/00afd4a8.md) FUN_00afd4a8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00716d90`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00716/00716d90.md) · 呼出先 2件 [`005e7420`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00716de8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 2件 [`005e7460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00afd4cc",
      "incomplete_value": true,
      "site": "00afd4d0",
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
                "register:4000:8"
              ],
              "INT_MULT"
            ]
          ],
          [
            "leaf",
            "const:2768:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00afd430",
      "incomplete_value": true,
      "site": "00afd434",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "live",
            "register:4048:8"
          ]
        ]
      ]
    },
    "ordinal": 1,
    "slot": 1
  }
]
~~~


~~~diff
- 00afd420 ["INT_ADD", "register:40f0:8", ["const:afd420:8", "const:4:8"]]
+ 00afd4bc ["INT_ADD", "register:40f0:8", ["const:afd4bc:8", "const:4:8"]]
- 00afd434 ["INT_ADD", "register:40f0:8", ["const:afd434:8", "const:4:8"]]
+ 00afd4d0 ["INT_ADD", "register:40f0:8", ["const:afd4d0:8", "const:4:8"]]
- 00afd438 ["CBRANCH", null, ["local:b4:8", "tmp:3:1"]]
+ 00afd4d4 ["CBRANCH", null, ["local:b2:8", "tmp:3:1"]]
~~~


<a id="compare-5e962bdce7beff418c30ccd0577e83b5"></a>

### [`00afd4e0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afd/00afd4e0.md) → [`00afd57c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afd/00afd57c.md) FUN_00afd57c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00716d90`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00716/00716d90.md) · 呼出先 2件 [`005e7420`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00716de8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 2件 [`005e7460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies

~~~diff
- 00afd4f4 ["INT_ADD", "register:40f0:8", ["const:afd4f4:8", "const:4:8"]]
+ 00afd590 ["INT_ADD", "register:40f0:8", ["const:afd590:8", "const:4:8"]]
- 00afd508 ["INT_ADD", "register:40f0:8", ["const:afd508:8", "const:4:8"]]
+ 00afd5a4 ["INT_ADD", "register:40f0:8", ["const:afd5a4:8", "const:4:8"]]
- 00afd50c ["CBRANCH", null, ["local:b2:8", "tmp:3:1"]]
+ 00afd5a8 ["CBRANCH", null, ["local:b4:8", "tmp:3:1"]]
~~~


<a id="compare-eb411fc83698f3b17c158bd5fa531b4e"></a>

### [`00afd548`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afd/00afd548.md) → [`00afd5e4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afd/00afd5e4.md) FUN_00afd5e4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 2件 [`005e7420`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 2件 [`005e7460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00afd610",
      "incomplete_value": true,
      "site": "00afd614",
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
                "register:4000:8"
              ],
              "INT_MULT"
            ]
          ],
          [
            "leaf",
            "const:2768:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00afd574",
      "incomplete_value": true,
      "site": "00afd578",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "live",
            "register:4048:8"
          ]
        ]
      ]
    },
    "ordinal": 1,
    "slot": 1
  }
]
~~~


~~~diff
- 00afd564 ["INT_ADD", "register:40f0:8", ["const:afd564:8", "const:4:8"]]
+ 00afd600 ["INT_ADD", "register:40f0:8", ["const:afd600:8", "const:4:8"]]
- 00afd578 ["INT_ADD", "register:40f0:8", ["const:afd578:8", "const:4:8"]]
+ 00afd614 ["INT_ADD", "register:40f0:8", ["const:afd614:8", "const:4:8"]]
- 00afd57c ["CBRANCH", null, ["local:b4:8", "tmp:3:1"]]
+ 00afd618 ["CBRANCH", null, ["local:b2:8", "tmp:3:1"]]
~~~


<a id="compare-ac57eca3793ec506e921f37cfbea5a51"></a>

### [`00afe07c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afe/00afe07c.md) → [`00afe118`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afe/00afe118.md) _INIT_251

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination, store_value

優先判定に残った影響 `call_argument_candidate` 5件, `store_destination` 3件, `store_value` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00afe154",
      "incomplete_value": true,
      "site": "00afe170",
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
      "definition_site": "00afe0b8",
      "incomplete_value": true,
      "site": "00afe0d4",
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
      "definition_site": "00afe178",
      "incomplete_value": true,
      "site": "00afe194",
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
      "definition_site": "00afe0dc",
      "incomplete_value": true,
      "site": "00afe0f8",
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
      "definition_site": "00afe198",
      "incomplete_value": true,
      "site": "00afe1b4",
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
      "definition_site": "00afe0fc",
      "incomplete_value": true,
      "site": "00afe118",
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


参照の変更（関数入口からの相対位置）

~~~json
{
  "removed": [
    [
      60,
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      96,
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      128,
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
      60,
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      96,
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      128,
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
- 00afe0a8 ["COPY", "tmp:0:8", ["const:d50:8"]]
+ 00afe144 ["COPY", "tmp:0:8", ["const:e50:8"]]
- 00afe0b4 ["COPY", "tmp:0:8", ["const:f26:8"]]
+ 00afe150 ["COPY", "tmp:0:8", ["const:f66:8"]]
- 00afe0d0 ["COPY", "tmp:0:8", ["const:f39:8"]]
+ 00afe16c ["COPY", "tmp:0:8", ["const:f79:8"]]
~~~


