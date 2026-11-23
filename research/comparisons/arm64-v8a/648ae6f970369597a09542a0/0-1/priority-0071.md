# v16.0.1 → v16.0.2 · 最優先の変更候補 (71)

[一覧の目次](README.md)

<a id="compare-2c448f4d1410322845a14248f24cb7f6"></a>

### [`00af73b0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af7/00af73b0.md) → [`00af744c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af744c.md) FUN_00af744c

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
      "definition_site": "00af7454",
      "incomplete_value": true,
      "site": "00af7454",
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
      "definition_site": "00af73b8",
      "incomplete_value": true,
      "site": "00af73b8",
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
      "definition_site": "00af7454",
      "incomplete_value": true,
      "site": "00af7454",
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
      "definition_site": "00af73b8",
      "incomplete_value": true,
      "site": "00af73b8",
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
      "definition_site": "00af7484",
      "incomplete_value": true,
      "site": "00af7484",
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
      "definition_site": "00af73e8",
      "incomplete_value": true,
      "site": "00af73e8",
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
- 00af73cc ["INT_ADD", "register:40f0:8", ["const:af73cc:8", "const:4:8"]]
+ 00af7468 ["INT_ADD", "register:40f0:8", ["const:af7468:8", "const:4:8"]]
~~~


<a id="compare-b76aa7c45df6e843bedd2c8312dfe926"></a>

### [`00af73fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af7/00af73fc.md) → [`00af7498`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af7498.md) FUN_00af7498

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`00713358`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00713/00713358.md) [`0071425c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00714/0071425c.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 2件 [`007133b0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/007133b0.md) [`007142b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/007142b4.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, return_value_candidate, store_destination

アドレスに依存する影響 `return_value_candidate` 1件, `store_destination` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00af749c",
      "incomplete_value": true,
      "site": "00af749c",
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
      "definition_site": "00af7400",
      "incomplete_value": true,
      "site": "00af7400",
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
      "definition_site": "00af749c",
      "incomplete_value": true,
      "site": "00af749c",
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
      "definition_site": "00af7400",
      "incomplete_value": true,
      "site": "00af7400",
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
    "new": null,
    "old": {
      "definition_site": "00af742c",
      "incomplete_value": true,
      "site": "00af7438",
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
- 00af7410 ["INT_ADD", "register:40f0:8", ["const:af7410:8", "const:4:8"]]
+ 00af74ac ["INT_ADD", "register:40f0:8", ["const:af74ac:8", "const:4:8"]]
~~~


<a id="compare-af025f0e1ca138097851160c4d7fdc96"></a>

### [`00af743c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af7/00af743c.md) → [`00af74d8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af74d8.md) FUN_00af74d8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

~~~diff
- 00af7458 ["INT_ADD", "register:40f0:8", ["const:af7458:8", "const:4:8"]]
+ 00af74f4 ["INT_ADD", "register:40f0:8", ["const:af74f4:8", "const:4:8"]]
~~~


<a id="compare-2f72b15f529915de49a03564d921eab7"></a>

### [`00af75e8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af7/00af75e8.md) → [`00af7684`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af7684.md) FUN_00af7684

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00713d24`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00713/00713d24.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00713d7c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/00713d7c.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies, return_value_candidate

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "00af7618",
      "incomplete_value": true,
      "site": "00af7624",
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
- 00af75fc ["INT_ADD", "register:40f0:8", ["const:af75fc:8", "const:4:8"]]
+ 00af7698 ["INT_ADD", "register:40f0:8", ["const:af7698:8", "const:4:8"]]
~~~


<a id="compare-f52d2b53c67da60d990813a967fe0d34"></a>

### [`00af7674`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af7/00af7674.md) → [`00af7710`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af7710.md) FUN_00af7710

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00700af8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) · 呼出先 2件 [`005e7420`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00700b50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 2件 [`005e7460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

~~~diff
- 00af7688 ["INT_ADD", "register:40f0:8", ["const:af7688:8", "const:4:8"]]
+ 00af7724 ["INT_ADD", "register:40f0:8", ["const:af7724:8", "const:4:8"]]
- 00af769c ["INT_ADD", "register:40f0:8", ["const:af769c:8", "const:4:8"]]
+ 00af7738 ["INT_ADD", "register:40f0:8", ["const:af7738:8", "const:4:8"]]
- 00af76a0 ["CBRANCH", null, ["local:b3:8", "tmp:3:1"]]
+ 00af773c ["CBRANCH", null, ["local:b2:8", "tmp:3:1"]]
~~~


<a id="compare-0e65e61f047aec7b0454269dd86fcc5d"></a>

### [`00af7754`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af7/00af7754.md) → [`00af77f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af77f0.md) FUN_00af77f0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`0070ea5c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0070e/0070ea5c.md) · 呼出先 2件 [`005e7420`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`0070eab4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) · 呼出先 2件 [`005e7460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies

~~~diff
- 00af7768 ["INT_ADD", "register:40f0:8", ["const:af7768:8", "const:4:8"]]
+ 00af7804 ["INT_ADD", "register:40f0:8", ["const:af7804:8", "const:4:8"]]
- 00af777c ["INT_ADD", "register:40f0:8", ["const:af777c:8", "const:4:8"]]
+ 00af7818 ["INT_ADD", "register:40f0:8", ["const:af7818:8", "const:4:8"]]
- 00af7790 ["INT_ADD", "register:40f0:8", ["const:af7790:8", "const:4:8"]]
+ 00af782c ["INT_ADD", "register:40f0:8", ["const:af782c:8", "const:4:8"]]
~~~


<a id="compare-55da2942cf69e6781a99086ee4414490"></a>

### [`00af789c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af7/00af789c.md) → [`00af7938`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af7938.md) FUN_00af7938

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 2件 [`005e7420`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 2件 [`005e7460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, store_destination

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00af7990",
      "incomplete_value": true,
      "site": "00af7990",
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
      "definition_site": "00af78f4",
      "incomplete_value": true,
      "site": "00af78f4",
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
- 00af78b8 ["INT_ADD", "register:40f0:8", ["const:af78b8:8", "const:4:8"]]
+ 00af7954 ["INT_ADD", "register:40f0:8", ["const:af7954:8", "const:4:8"]]
- 00af78cc ["INT_ADD", "register:40f0:8", ["const:af78cc:8", "const:4:8"]]
+ 00af7968 ["INT_ADD", "register:40f0:8", ["const:af7968:8", "const:4:8"]]
- 00af78d0 ["CBRANCH", null, ["local:b2:8", "tmp:3:1"]]
+ 00af796c ["CBRANCH", null, ["local:b5:8", "tmp:3:1"]]
~~~


<a id="compare-5944279635cda6bc763feb3af09068a1"></a>

### [`00af7908`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af7/00af7908.md) → [`00af79a4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af79a4.md) FUN_00af79a4

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
      "definition_site": "00af79dc",
      "incomplete_value": true,
      "site": "00af79dc",
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
      "definition_site": "00af7940",
      "incomplete_value": true,
      "site": "00af7940",
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
- 00af7924 ["INT_ADD", "register:40f0:8", ["const:af7924:8", "const:4:8"]]
+ 00af79c0 ["INT_ADD", "register:40f0:8", ["const:af79c0:8", "const:4:8"]]
~~~


<a id="compare-044956c6a5b9ed087161479e36bc1d4e"></a>

### [`00af7954`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af7/00af7954.md) → [`00af79f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af79f0.md) FUN_00af79f0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`0070792c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00707/0070792c.md) [`00713358`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00713/00713358.md) [`0071425c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00714/0071425c.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 3件 [`00707984`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707984.md) [`007133b0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/007133b0.md) [`007142b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/007142b4.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies

参照の変更（関数入口からの相対位置）

~~~json
{
  "removed": [
    [
      68,
      "DATA",
      [
        "storage",
        "0030a38c",
        null,
        null
      ]
    ],
    [
      124,
      "DATA",
      [
        "storage",
        "0030a398",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      68,
      "DATA",
      [
        "storage",
        "0030a3cc",
        null,
        null
      ]
    ],
    [
      124,
      "DATA",
      [
        "storage",
        "0030a3d8",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00af7970 ["CBRANCH", null, ["local:b4:8", "tmp:1:1"]]
+ 00af7a0c ["CBRANCH", null, ["local:b5:8", "tmp:1:1"]]
- 00af7978 ["INT_ADD", "register:40f0:8", ["const:af7978:8", "const:4:8"]]
+ 00af7a14 ["INT_ADD", "register:40f0:8", ["const:af7a14:8", "const:4:8"]]
- 00af7994 ["COPY", "tmp:0:8", ["const:38c:8"]]
+ 00af7a30 ["COPY", "tmp:0:8", ["const:3cc:8"]]
~~~


<a id="compare-19f03bc0b37b56398c97d117906b8917"></a>

### [`00af7a38`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af7/00af7a38.md) → [`00af7ad4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af7ad4.md) FUN_00af7ad4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, local_def_use, operands_and_dependencies, store_destination

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00af7b28",
      "incomplete_value": true,
      "site": "00af7b28",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
              "INT_LEFT"
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
      "definition_site": "00af7a8c",
      "incomplete_value": true,
      "site": "00af7a8c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
              "INT_LEFT"
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
    "ordinal": 6,
    "slot": 1
  }
]
~~~


参照の変更（関数入口からの相対位置）

~~~json
{
  "removed": [
    [
      68,
      "DATA",
      [
        "storage",
        "002c3f0c",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      68,
      "DATA",
      [
        "storage",
        "002c3f4c",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00af7a5c ["INT_ADD", "register:40f0:8", ["const:af7a5c:8", "const:4:8"]]
+ 00af7af8 ["INT_ADD", "register:40f0:8", ["const:af7af8:8", "const:4:8"]]
- 00af7a68 ["COPY", "tmp:0:8", ["const:f10:8"]]
+ 00af7b04 ["COPY", "tmp:0:8", ["const:f50:8"]]
~~~


<a id="compare-6c9f20fa1a60b0fcaed809b2496ba88e"></a>

### [`00af7aa0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af7/00af7aa0.md) → [`00af7b3c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af7b3c.md) FUN_00af7b3c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0070792c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00707/0070792c.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00707984`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707984.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies

参照の変更（関数入口からの相対位置）

~~~json
{
  "removed": [
    [
      76,
      "DATA",
      [
        "storage",
        "0030a38c",
        null,
        null
      ]
    ],
    [
      124,
      "DATA",
      [
        "storage",
        "0030a398",
        null,
        "undefined4"
      ]
    ],
    [
      232,
      "READ",
      [
        "storage",
        "0030a398",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      76,
      "DATA",
      [
        "storage",
        "0030a3cc",
        null,
        null
      ]
    ],
    [
      124,
      "DATA",
      [
        "storage",
        "0030a3d8",
        null,
        "undefined4"
      ]
    ],
    [
      232,
      "READ",
      [
        "storage",
        "0030a3d8",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00af7ac0 ["COPY", "tmp:0:8", ["const:398:8"]]
+ 00af7b5c ["COPY", "tmp:0:8", ["const:3d8:8"]]
- 00af7ac4 ["CBRANCH", null, ["local:b3:8", "tmp:1:1"]]
+ 00af7b60 ["CBRANCH", null, ["local:b5:8", "tmp:1:1"]]
- 00af7acc ["INT_ADD", "register:40f0:8", ["const:af7acc:8", "const:4:8"]]
+ 00af7b68 ["INT_ADD", "register:40f0:8", ["const:af7b68:8", "const:4:8"]]
~~~


<a id="compare-08b6f0cf0e65616f8d65b44727747ca7"></a>

### [`00af7bac`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af7/00af7bac.md) → [`00af7c48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af7c48.md) FUN_00af7c48

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies, store_destination

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00af7c94",
      "incomplete_value": true,
      "site": "00af7c94",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
              "INT_LEFT"
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
      "definition_site": "00af7bf8",
      "incomplete_value": true,
      "site": "00af7bf8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
              "INT_LEFT"
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
    "ordinal": 6,
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
        "0030a398",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      60,
      "DATA",
      [
        "storage",
        "0030a3d8",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00af7bcc ["INT_ADD", "register:40f0:8", ["const:af7bcc:8", "const:4:8"]]
+ 00af7c68 ["INT_ADD", "register:40f0:8", ["const:af7c68:8", "const:4:8"]]
- 00af7be4 ["COPY", "tmp:0:8", ["const:398:8"]]
+ 00af7c80 ["COPY", "tmp:0:8", ["const:3d8:8"]]
~~~


<a id="compare-5fe51b4187b501d9de0a66a375e256bc"></a>

### [`00af7c0c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af7/00af7c0c.md) → [`00af7ca8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af7ca8.md) FUN_00af7ca8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0070792c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00707/0070792c.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00707984`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707984.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies, return_value_candidate

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00af7da8",
      "incomplete_value": true,
      "site": "00af7db8",
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
      "definition_site": "00af7d0c",
      "incomplete_value": true,
      "site": "00af7d1c",
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
      68,
      "DATA",
      [
        "storage",
        "0030a38c",
        null,
        null
      ]
    ],
    [
      124,
      "DATA",
      [
        "storage",
        "0030a398",
        null,
        "undefined4"
      ]
    ],
    [
      240,
      "READ",
      [
        "storage",
        "0030a3a4",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      68,
      "DATA",
      [
        "storage",
        "0030a3cc",
        null,
        null
      ]
    ],
    [
      124,
      "DATA",
      [
        "storage",
        "0030a3d8",
        null,
        "undefined4"
      ]
    ],
    [
      240,
      "READ",
      [
        "storage",
        "0030a3e4",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00af7c30 ["INT_ADD", "register:40f0:8", ["const:af7c30:8", "const:4:8"]]
+ 00af7ccc ["INT_ADD", "register:40f0:8", ["const:af7ccc:8", "const:4:8"]]
- 00af7c4c ["COPY", "tmp:0:8", ["const:38c:8"]]
+ 00af7ce8 ["COPY", "tmp:0:8", ["const:3cc:8"]]
- 00af7c6c ["INT_ADD", "register:40f0:8", ["const:af7c6c:8", "const:4:8"]]
+ 00af7d08 ["INT_ADD", "register:40f0:8", ["const:af7d08:8", "const:4:8"]]
~~~


<a id="compare-ddbedaef24d9c5c335944b08efd9a82c"></a>

### [`00af7d20`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af7/00af7d20.md) → [`00af7dbc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af7dbc.md) FUN_00af7dbc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies, store_destination

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00af7e08",
      "incomplete_value": true,
      "site": "00af7e08",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
              "INT_LEFT"
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
      "definition_site": "00af7d6c",
      "incomplete_value": true,
      "site": "00af7d6c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
              "INT_LEFT"
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
    "ordinal": 6,
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
        "0030a3a4",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      60,
      "DATA",
      [
        "storage",
        "0030a3e4",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00af7d40 ["INT_ADD", "register:40f0:8", ["const:af7d40:8", "const:4:8"]]
+ 00af7ddc ["INT_ADD", "register:40f0:8", ["const:af7ddc:8", "const:4:8"]]
- 00af7d58 ["COPY", "tmp:0:8", ["const:3a4:8"]]
+ 00af7df4 ["COPY", "tmp:0:8", ["const:3e4:8"]]
~~~


<a id="compare-831854dcf492a3de0115143353adadb5"></a>

### [`00af7d80`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af7/00af7d80.md) → [`00af7e1c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af7e1c.md) FUN_00af7e1c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00713d24`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00713/00713d24.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00713d7c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/00713d7c.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

~~~diff
- 00af7d94 ["INT_ADD", "register:40f0:8", ["const:af7d94:8", "const:4:8"]]
+ 00af7e30 ["INT_ADD", "register:40f0:8", ["const:af7e30:8", "const:4:8"]]
~~~


<a id="compare-f0fb635c987aeacef480c736918350f7"></a>

### [`00af7dc8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af7/00af7dc8.md) → [`00af7e64`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af7e64.md) FUN_00af7e64

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00713d24`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00713/00713d24.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00713d7c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/00713d7c.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

~~~diff
- 00af7ddc ["INT_ADD", "register:40f0:8", ["const:af7ddc:8", "const:4:8"]]
+ 00af7e78 ["INT_ADD", "register:40f0:8", ["const:af7e78:8", "const:4:8"]]
~~~


<a id="compare-438765f943cd5cdaebdf566a1a16e674"></a>

### [`00af7e54`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af7/00af7e54.md) → [`00af7ef0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af7ef0.md) FUN_00af7ef0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`007102d8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00710/007102d8.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00710330`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, return_value_candidate

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00af7f20",
      "incomplete_value": true,
      "site": "00af7f2c",
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
      "definition_site": "00af7e84",
      "incomplete_value": true,
      "site": "00af7e90",
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
- 00af7e68 ["INT_ADD", "register:40f0:8", ["const:af7e68:8", "const:4:8"]]
+ 00af7f04 ["INT_ADD", "register:40f0:8", ["const:af7f04:8", "const:4:8"]]
~~~


<a id="compare-13704353d16bf06300009cb45355e58f"></a>

### [`00af7e94`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af7/00af7e94.md) → [`00af7f30`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af7f30.md) FUN_00af7f30

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
      "definition_site": "00af7f38",
      "incomplete_value": true,
      "site": "00af7f38",
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
      "definition_site": "00af7e9c",
      "incomplete_value": true,
      "site": "00af7e9c",
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
      "definition_site": "00af7f38",
      "incomplete_value": true,
      "site": "00af7f38",
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
      "definition_site": "00af7e9c",
      "incomplete_value": true,
      "site": "00af7e9c",
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
      "definition_site": "00af7f68",
      "incomplete_value": true,
      "site": "00af7f68",
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
      "definition_site": "00af7ecc",
      "incomplete_value": true,
      "site": "00af7ecc",
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
- 00af7eb0 ["INT_ADD", "register:40f0:8", ["const:af7eb0:8", "const:4:8"]]
+ 00af7f4c ["INT_ADD", "register:40f0:8", ["const:af7f4c:8", "const:4:8"]]
~~~


<a id="compare-257296ab3fbd091b40ed851120c4c582"></a>

### [`00af7ee0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af7/00af7ee0.md) → [`00af7f7c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af7f7c.md) FUN_00af7f7c

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
      "definition_site": "00af7f80",
      "incomplete_value": true,
      "site": "00af7f80",
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
      "definition_site": "00af7ee4",
      "incomplete_value": true,
      "site": "00af7ee4",
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
      "definition_site": "00af7f80",
      "incomplete_value": true,
      "site": "00af7f80",
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
      "definition_site": "00af7ee4",
      "incomplete_value": true,
      "site": "00af7ee4",
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
      "definition_site": "00af7fac",
      "incomplete_value": true,
      "site": "00af7fb8",
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
      "definition_site": "00af7f10",
      "incomplete_value": true,
      "site": "00af7f1c",
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
- 00af7ef4 ["INT_ADD", "register:40f0:8", ["const:af7ef4:8", "const:4:8"]]
+ 00af7f90 ["INT_ADD", "register:40f0:8", ["const:af7f90:8", "const:4:8"]]
~~~


<a id="compare-d03d2602685e6e94749246556707056e"></a>

### [`00af7f6c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af7/00af7f6c.md) → [`00af8008`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8008.md) FUN_00af8008

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`007102d8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00710/007102d8.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00710330`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, return_value_candidate

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "00af7f9c",
      "incomplete_value": true,
      "site": "00af7fa8",
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
- 00af7f80 ["INT_ADD", "register:40f0:8", ["const:af7f80:8", "const:4:8"]]
+ 00af801c ["INT_ADD", "register:40f0:8", ["const:af801c:8", "const:4:8"]]
~~~


<a id="compare-b6f7b2fe6914dc1d3058c85c61ccb9ac"></a>

### [`00af7ff8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af7/00af7ff8.md) → [`00af8094`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8094.md) FUN_00af8094

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
      "definition_site": "00af80cc",
      "incomplete_value": true,
      "site": "00af80d8",
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
    "old": null,
    "ordinal": 0,
    "slot": 0
  }
]
~~~


~~~diff
- 00af800c ["INT_ADD", "register:40f0:8", ["const:af800c:8", "const:4:8"]]
+ 00af80a8 ["INT_ADD", "register:40f0:8", ["const:af80a8:8", "const:4:8"]]
~~~


<a id="compare-862403255b4a3af2def268e9ad5bd7b7"></a>

### [`00af8040`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af8/00af8040.md) → [`00af80dc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af80dc.md) FUN_00af80dc

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
    "new": null,
    "old": {
      "definition_site": "00af8070",
      "incomplete_value": true,
      "site": "00af807c",
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
- 00af8054 ["INT_ADD", "register:40f0:8", ["const:af8054:8", "const:4:8"]]
+ 00af80f0 ["INT_ADD", "register:40f0:8", ["const:af80f0:8", "const:4:8"]]
~~~


<a id="compare-8e5ea4b88eaf8a3a44bc02926db77144"></a>

### [`00af80c8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af8/00af80c8.md) → [`00af8164`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8164.md) FUN_00af8164

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00713d24`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00713/00713d24.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00713d7c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/00713d7c.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies, return_value_candidate

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00af8194",
      "incomplete_value": true,
      "site": "00af81a0",
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
    "ordinal": 0,
    "slot": 0
  }
]
~~~


~~~diff
- 00af80dc ["INT_ADD", "register:40f0:8", ["const:af80dc:8", "const:4:8"]]
+ 00af8178 ["INT_ADD", "register:40f0:8", ["const:af8178:8", "const:4:8"]]
~~~


<a id="compare-b716e8a304a184747ffc8135cba54b13"></a>

### [`00af8108`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af8/00af8108.md) → [`00af81a4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af81a4.md) FUN_00af81a4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

~~~diff
- 00af8124 ["INT_ADD", "register:40f0:8", ["const:af8124:8", "const:4:8"]]
+ 00af81c0 ["INT_ADD", "register:40f0:8", ["const:af81c0:8", "const:4:8"]]
~~~


<a id="compare-fd265d32bcad2589281ef75aadedb312"></a>

### [`00af8154`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af8/00af8154.md) → [`00af81f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af81f0.md) FUN_00af81f0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`007119f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00711/007119f0.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00711a48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies

~~~diff
- 00af8168 ["INT_ADD", "register:40f0:8", ["const:af8168:8", "const:4:8"]]
+ 00af8204 ["INT_ADD", "register:40f0:8", ["const:af8204:8", "const:4:8"]]
~~~


<a id="compare-34dad4ec59efe53d7b47a439396153bc"></a>

### [`00af8194`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af8/00af8194.md) → [`00af8230`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8230.md) FUN_00af8230

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

~~~diff
- 00af81b0 ["INT_ADD", "register:40f0:8", ["const:af81b0:8", "const:4:8"]]
+ 00af824c ["INT_ADD", "register:40f0:8", ["const:af824c:8", "const:4:8"]]
~~~


<a id="compare-53c3e0abf0f61a496a6965edcf331b15"></a>

### [`00af8260`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af8/00af8260.md) → [`00af82fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af82fc.md) FUN_00af82fc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies

~~~diff
- 00af827c ["INT_ADD", "register:40f0:8", ["const:af827c:8", "const:4:8"]]
+ 00af8318 ["INT_ADD", "register:40f0:8", ["const:af8318:8", "const:4:8"]]
~~~


<a id="compare-92f7728070685240ceafd9ab8832342a"></a>

### [`00af82ac`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af8/00af82ac.md) → [`00af8348`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8348.md) FUN_00af8348

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`00713358`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00713/00713358.md) [`0071425c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00714/0071425c.md) [`00714f8c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00714/00714f8c.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 3件 [`007133b0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/007133b0.md) [`007142b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/007142b4.md) [`00714fe4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/00714fe4.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

~~~diff
- 00af82c0 ["INT_ADD", "register:40f0:8", ["const:af82c0:8", "const:4:8"]]
+ 00af835c ["INT_ADD", "register:40f0:8", ["const:af835c:8", "const:4:8"]]
~~~


<a id="compare-bee6f926c7d2f0b4ce3fec67a5548a6b"></a>

### [`00af82ec`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af8/00af82ec.md) → [`00af8388`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8388.md) FUN_00af8388

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
      "definition_site": "00af838c",
      "incomplete_value": true,
      "site": "00af838c",
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
      "definition_site": "00af82f0",
      "incomplete_value": true,
      "site": "00af82f0",
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
      "definition_site": "00af8390",
      "incomplete_value": true,
      "site": "00af8390",
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
      "definition_site": "00af82f4",
      "incomplete_value": true,
      "site": "00af82f4",
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
      "definition_site": "00af8390",
      "incomplete_value": true,
      "site": "00af8390",
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
      "definition_site": "00af82f4",
      "incomplete_value": true,
      "site": "00af82f4",
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
- 00af8308 ["INT_ADD", "register:40f0:8", ["const:af8308:8", "const:4:8"]]
+ 00af83a4 ["INT_ADD", "register:40f0:8", ["const:af83a4:8", "const:4:8"]]
~~~


<a id="compare-8a3cf926633223d253285263077121bf"></a>

### [`00af8338`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af8/00af8338.md) → [`00af83d4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af83d4.md) FUN_00af83d4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`00713358`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00713/00713358.md) [`0071425c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00714/0071425c.md) [`00714f8c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00714/00714f8c.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 3件 [`007133b0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/007133b0.md) [`007142b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/007142b4.md) [`00714fe4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/00714fe4.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

~~~diff
- 00af834c ["INT_ADD", "register:40f0:8", ["const:af834c:8", "const:4:8"]]
+ 00af83e8 ["INT_ADD", "register:40f0:8", ["const:af83e8:8", "const:4:8"]]
~~~


<a id="compare-0686c267dc323e9c6ab855409c40613a"></a>

### [`00af8378`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af8/00af8378.md) → [`00af8414`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8414.md) FUN_00af8414

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies

~~~diff
- 00af8394 ["INT_ADD", "register:40f0:8", ["const:af8394:8", "const:4:8"]]
+ 00af8430 ["INT_ADD", "register:40f0:8", ["const:af8430:8", "const:4:8"]]
~~~


<a id="compare-aea4c38f5516b0b9650d72a1f48f2f05"></a>

### [`00af83c4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af8/00af83c4.md) → [`00af8460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8460.md) FUN_00af8460

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`00713358`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00713/00713358.md) [`0071425c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00714/0071425c.md) [`00714f8c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00714/00714f8c.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 3件 [`007133b0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/007133b0.md) [`007142b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/007142b4.md) [`00714fe4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/00714fe4.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

~~~diff
- 00af83d8 ["INT_ADD", "register:40f0:8", ["const:af83d8:8", "const:4:8"]]
+ 00af8474 ["INT_ADD", "register:40f0:8", ["const:af8474:8", "const:4:8"]]
~~~


<a id="compare-d3a050af5f927e4c49c0395d3c7931eb"></a>

### [`00af8450`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af8/00af8450.md) → [`00af84ec`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af84ec.md) FUN_00af84ec

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
      "definition_site": "00af8524",
      "incomplete_value": true,
      "site": "00af8524",
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
      "definition_site": "00af8488",
      "incomplete_value": true,
      "site": "00af8488",
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
- 00af846c ["INT_ADD", "register:40f0:8", ["const:af846c:8", "const:4:8"]]
+ 00af8508 ["INT_ADD", "register:40f0:8", ["const:af8508:8", "const:4:8"]]
~~~


<a id="compare-5168a8204bdc9ed2ff4dc40f9ae5f125"></a>

### [`00af849c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af8/00af849c.md) → [`00af8538`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8538.md) FUN_00af8538

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
      "definition_site": "00af8570",
      "incomplete_value": true,
      "site": "00af8570",
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
      "definition_site": "00af84d4",
      "incomplete_value": true,
      "site": "00af84d4",
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
- 00af84b8 ["INT_ADD", "register:40f0:8", ["const:af84b8:8", "const:4:8"]]
+ 00af8554 ["INT_ADD", "register:40f0:8", ["const:af8554:8", "const:4:8"]]
~~~


<a id="compare-46c6bb355b6979e99ff1652c0c0a86ec"></a>

### [`00af84e8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af8/00af84e8.md) → [`00af8584`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8584.md) FUN_00af8584

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`00714f8c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00714/00714f8c.md) [`00715500`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00715/00715500.md) [`00716d90`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00716/00716d90.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 3件 [`00714fe4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/00714fe4.md) [`00715558`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00715/00715558.md) [`00716de8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, return_value_candidate, store_destination

アドレスに依存する影響 `return_value_candidate` 1件, `store_destination` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00af8588",
      "incomplete_value": true,
      "site": "00af8588",
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
      "definition_site": "00af84ec",
      "incomplete_value": true,
      "site": "00af84ec",
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
      "definition_site": "00af8588",
      "incomplete_value": true,
      "site": "00af8588",
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
      "definition_site": "00af84ec",
      "incomplete_value": true,
      "site": "00af84ec",
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
      "definition_site": "00af85b4",
      "incomplete_value": true,
      "site": "00af85c0",
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
      "definition_site": "00af8518",
      "incomplete_value": true,
      "site": "00af8524",
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
- 00af84fc ["INT_ADD", "register:40f0:8", ["const:af84fc:8", "const:4:8"]]
+ 00af8598 ["INT_ADD", "register:40f0:8", ["const:af8598:8", "const:4:8"]]
~~~


<a id="compare-70d7026ab1d77e0a24a849263f57ba73"></a>

### [`00af8528`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af8/00af8528.md) → [`00af85c4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af85c4.md) FUN_00af85c4

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
      "definition_site": "00af85fc",
      "incomplete_value": true,
      "site": "00af85fc",
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
      "definition_site": "00af8560",
      "incomplete_value": true,
      "site": "00af8560",
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
- 00af8544 ["INT_ADD", "register:40f0:8", ["const:af8544:8", "const:4:8"]]
+ 00af85e0 ["INT_ADD", "register:40f0:8", ["const:af85e0:8", "const:4:8"]]
~~~


<a id="compare-50586c2b9bd424d2ea557e3662285760"></a>

### [`00af8574`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af8/00af8574.md) → [`00af8610`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8610.md) FUN_00af8610

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`00714f8c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00714/00714f8c.md) [`00715500`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00715/00715500.md) [`00716d90`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00716/00716d90.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 3件 [`00714fe4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/00714fe4.md) [`00715558`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00715/00715558.md) [`00716de8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies, return_value_candidate

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00af8640",
      "incomplete_value": true,
      "site": "00af864c",
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
    "ordinal": 0,
    "slot": 0
  }
]
~~~


~~~diff
- 00af8588 ["INT_ADD", "register:40f0:8", ["const:af8588:8", "const:4:8"]]
+ 00af8624 ["INT_ADD", "register:40f0:8", ["const:af8624:8", "const:4:8"]]
~~~


<a id="compare-cd1ee129fa6b63576477d7084915132c"></a>

### [`00af8600`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af8/00af8600.md) → [`00af869c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af869c.md) FUN_00af869c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`00714f8c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00714/00714f8c.md) [`00715500`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00715/00715500.md) [`00716d90`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00716/00716d90.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 3件 [`00714fe4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/00714fe4.md) [`00715558`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00715/00715558.md) [`00716de8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, return_value_candidate

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "00af8630",
      "incomplete_value": true,
      "site": "00af863c",
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
- 00af8614 ["INT_ADD", "register:40f0:8", ["const:af8614:8", "const:4:8"]]
+ 00af86b0 ["INT_ADD", "register:40f0:8", ["const:af86b0:8", "const:4:8"]]
~~~


<a id="compare-152215d46c152888b736806c24b34b90"></a>

### [`00af8640`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af8/00af8640.md) → [`00af86dc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af86dc.md) FUN_00af86dc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

~~~diff
- 00af865c ["INT_ADD", "register:40f0:8", ["const:af865c:8", "const:4:8"]]
+ 00af86f8 ["INT_ADD", "register:40f0:8", ["const:af86f8:8", "const:4:8"]]
~~~


<a id="compare-72ad5f481b3ad7520c3208d11550db09"></a>

### [`00af868c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af8/00af868c.md) → [`00af8728`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8728.md) FUN_00af8728

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00714f8c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00714/00714f8c.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00714fe4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/00714fe4.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

~~~diff
- 00af86a0 ["INT_ADD", "register:40f0:8", ["const:af86a0:8", "const:4:8"]]
+ 00af873c ["INT_ADD", "register:40f0:8", ["const:af873c:8", "const:4:8"]]
~~~


<a id="compare-7f2b8852e2ff2ce2e2e5e56416515b44"></a>

### [`00af86cc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af8/00af86cc.md) → [`00af8768`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8768.md) FUN_00af8768

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies

~~~diff
- 00af86e8 ["INT_ADD", "register:40f0:8", ["const:af86e8:8", "const:4:8"]]
+ 00af8784 ["INT_ADD", "register:40f0:8", ["const:af8784:8", "const:4:8"]]
~~~


<a id="compare-88ab916b8dea69db579aeb0435521682"></a>

### [`00af8718`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af8/00af8718.md) → [`00af87b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af87b4.md) FUN_00af87b4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`00714f8c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00714/00714f8c.md) [`00715500`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00715/00715500.md) [`00716d90`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00716/00716d90.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 3件 [`00714fe4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/00714fe4.md) [`00715558`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00715/00715558.md) [`00716de8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, return_value_candidate, store_destination

アドレスに依存する影響 `return_value_candidate` 1件, `store_destination` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00af87b8",
      "incomplete_value": true,
      "site": "00af87b8",
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
      "definition_site": "00af871c",
      "incomplete_value": true,
      "site": "00af871c",
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
      "definition_site": "00af87b8",
      "incomplete_value": true,
      "site": "00af87b8",
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
      "definition_site": "00af871c",
      "incomplete_value": true,
      "site": "00af871c",
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
      "definition_site": "00af8748",
      "incomplete_value": true,
      "site": "00af8754",
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
- 00af872c ["INT_ADD", "register:40f0:8", ["const:af872c:8", "const:4:8"]]
+ 00af87c8 ["INT_ADD", "register:40f0:8", ["const:af87c8:8", "const:4:8"]]
~~~


<a id="compare-7ae1de8ff462891c6c69e924003ade90"></a>

### [`00af8758`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af8/00af8758.md) → [`00af87f4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af87f4.md) FUN_00af87f4

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
      "definition_site": "00af87f8",
      "incomplete_value": true,
      "site": "00af87f8",
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
      "definition_site": "00af875c",
      "incomplete_value": true,
      "site": "00af875c",
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
      "definition_site": "00af87fc",
      "incomplete_value": true,
      "site": "00af87fc",
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
      "definition_site": "00af8760",
      "incomplete_value": true,
      "site": "00af8760",
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
      "definition_site": "00af87fc",
      "incomplete_value": true,
      "site": "00af87fc",
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
      "definition_site": "00af8760",
      "incomplete_value": true,
      "site": "00af8760",
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
- 00af8774 ["INT_ADD", "register:40f0:8", ["const:af8774:8", "const:4:8"]]
+ 00af8810 ["INT_ADD", "register:40f0:8", ["const:af8810:8", "const:4:8"]]
~~~


<a id="compare-a40d5c6756bc30efa3290b898060e566"></a>

### [`00af87a4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af8/00af87a4.md) → [`00af8840`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8840.md) FUN_00af8840

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`00714f8c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00714/00714f8c.md) [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 2件 [`00714fe4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/00714fe4.md) [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

~~~diff
- 00af87b8 ["INT_ADD", "register:40f0:8", ["const:af87b8:8", "const:4:8"]]
+ 00af8854 ["INT_ADD", "register:40f0:8", ["const:af8854:8", "const:4:8"]]
~~~


<a id="compare-9f60672f04b8e4ad1dc244e10bfe0fcd"></a>

### [`00af87ec`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af8/00af87ec.md) → [`00af8888`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8888.md) FUN_00af8888

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`00714f8c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00714/00714f8c.md) [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 2件 [`00714fe4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/00714fe4.md) [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies

~~~diff
- 00af8808 ["INT_ADD", "register:40f0:8", ["const:af8808:8", "const:4:8"]]
+ 00af88a4 ["INT_ADD", "register:40f0:8", ["const:af88a4:8", "const:4:8"]]
~~~


<a id="compare-5eb754b863752be56f359ba7e16f9fc7"></a>

### [`00af8838`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af8/00af8838.md) → [`00af88d4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af88d4.md) FUN_00af88d4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00714f8c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00714/00714f8c.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00714fe4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/00714fe4.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies

~~~diff
- 00af884c ["INT_ADD", "register:40f0:8", ["const:af884c:8", "const:4:8"]]
+ 00af88e8 ["INT_ADD", "register:40f0:8", ["const:af88e8:8", "const:4:8"]]
~~~


<a id="compare-3e12e3fc394d35f139a6123dde7d56ae"></a>

### [`00af8878`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af8/00af8878.md) → [`00af8914`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8914.md) FUN_00af8914

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
      "definition_site": "00af8918",
      "incomplete_value": true,
      "site": "00af8918",
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
      "definition_site": "00af887c",
      "incomplete_value": true,
      "site": "00af887c",
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
      "definition_site": "00af891c",
      "incomplete_value": true,
      "site": "00af891c",
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
      "definition_site": "00af8880",
      "incomplete_value": true,
      "site": "00af8880",
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
      "definition_site": "00af891c",
      "incomplete_value": true,
      "site": "00af891c",
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
      "definition_site": "00af8880",
      "incomplete_value": true,
      "site": "00af8880",
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
- 00af8894 ["INT_ADD", "register:40f0:8", ["const:af8894:8", "const:4:8"]]
+ 00af8930 ["INT_ADD", "register:40f0:8", ["const:af8930:8", "const:4:8"]]
~~~


<a id="compare-126152b9c1f760dcbd71c39d65b83562"></a>

### [`00af88c4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af8/00af88c4.md) → [`00af8960`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8960.md) FUN_00af8960

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00714f8c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00714/00714f8c.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00714fe4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/00714fe4.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, return_value_candidate

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00af8998",
      "incomplete_value": true,
      "site": "00af89a4",
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
    "old": null,
    "ordinal": 0,
    "slot": 0
  }
]
~~~


~~~diff
- 00af88d8 ["INT_ADD", "register:40f0:8", ["const:af88d8:8", "const:4:8"]]
+ 00af8974 ["INT_ADD", "register:40f0:8", ["const:af8974:8", "const:4:8"]]
~~~


<a id="compare-0e072e9c0de074a6274b68abaa9d48cd"></a>

### [`00af890c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af8/00af890c.md) → [`00af89a8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af89a8.md) FUN_00af89a8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`00714f8c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00714/00714f8c.md) [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 2件 [`00714fe4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/00714fe4.md) [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00af89ac",
      "incomplete_value": true,
      "site": "00af89ac",
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
      "definition_site": "00af8910",
      "incomplete_value": true,
      "site": "00af8910",
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
      "definition_site": "00af89b0",
      "incomplete_value": true,
      "site": "00af89b0",
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
      "definition_site": "00af8914",
      "incomplete_value": true,
      "site": "00af8914",
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
      "definition_site": "00af89b0",
      "incomplete_value": true,
      "site": "00af89b0",
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
      "definition_site": "00af8914",
      "incomplete_value": true,
      "site": "00af8914",
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
- 00af8928 ["INT_ADD", "register:40f0:8", ["const:af8928:8", "const:4:8"]]
+ 00af89c4 ["INT_ADD", "register:40f0:8", ["const:af89c4:8", "const:4:8"]]
~~~


<a id="compare-2c2f8f55d4f5f6b2f0e8bad21333aa61"></a>

### [`00af8998`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af8/00af8998.md) → [`00af8a34`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8a34.md) FUN_00af8a34

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

~~~diff
- 00af89b4 ["INT_ADD", "register:40f0:8", ["const:af89b4:8", "const:4:8"]]
+ 00af8a50 ["INT_ADD", "register:40f0:8", ["const:af8a50:8", "const:4:8"]]
~~~


<a id="compare-72b771a909baa41cc2fdce4108a5ed6c"></a>

### [`00af89e4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af8/00af89e4.md) → [`00af8a80`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8a80.md) FUN_00af8a80

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`00713358`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00713/00713358.md) [`0071425c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00714/0071425c.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 2件 [`007133b0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/007133b0.md) [`007142b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/007142b4.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, return_value_candidate

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00af8ab0",
      "incomplete_value": true,
      "site": "00af8abc",
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
      "definition_site": "00af8a14",
      "incomplete_value": true,
      "site": "00af8a20",
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
- 00af89f8 ["INT_ADD", "register:40f0:8", ["const:af89f8:8", "const:4:8"]]
+ 00af8a94 ["INT_ADD", "register:40f0:8", ["const:af8a94:8", "const:4:8"]]
~~~


<a id="compare-a194cef9c57e92f640df3080cd4370aa"></a>

### [`00af8a24`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af8/00af8a24.md) → [`00af8ac0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8ac0.md) FUN_00af8ac0

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
      "definition_site": "00af8af8",
      "incomplete_value": true,
      "site": "00af8af8",
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
      "definition_site": "00af8a5c",
      "incomplete_value": true,
      "site": "00af8a5c",
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
- 00af8a40 ["INT_ADD", "register:40f0:8", ["const:af8a40:8", "const:4:8"]]
+ 00af8adc ["INT_ADD", "register:40f0:8", ["const:af8adc:8", "const:4:8"]]
~~~


<a id="compare-be3b445555fc806c54256fc7b49a6e65"></a>

### [`00af8afc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af8/00af8afc.md) → [`00af8b98`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8b98.md) FUN_00af8b98

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00715500`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00715/00715500.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00715558`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00715/00715558.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, return_value_candidate

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "00af8b2c",
      "incomplete_value": true,
      "site": "00af8b38",
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
- 00af8b10 ["INT_ADD", "register:40f0:8", ["const:af8b10:8", "const:4:8"]]
+ 00af8bac ["INT_ADD", "register:40f0:8", ["const:af8bac:8", "const:4:8"]]
~~~


<a id="compare-93986c4e9e5ebfabca63c58e36d25295"></a>

### [`00af8b3c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af8/00af8b3c.md) → [`00af8bd8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8bd8.md) FUN_00af8bd8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies

~~~diff
- 00af8b58 ["INT_ADD", "register:40f0:8", ["const:af8b58:8", "const:4:8"]]
+ 00af8bf4 ["INT_ADD", "register:40f0:8", ["const:af8bf4:8", "const:4:8"]]
~~~


<a id="compare-bb41172f1c77f5ddb6e1b096e078aeae"></a>

### [`00af8bd4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af8/00af8bd4.md) → [`00af8c70`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8c70.md) FUN_00af8c70

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`007119f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00711/007119f0.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00711a48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies

~~~diff
- 00af8be8 ["INT_ADD", "register:40f0:8", ["const:af8be8:8", "const:4:8"]]
+ 00af8c84 ["INT_ADD", "register:40f0:8", ["const:af8c84:8", "const:4:8"]]
~~~


<a id="compare-8e3515e61b78cb355f587c71371c1e5c"></a>

### [`00af8c1c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af8/00af8c1c.md) → [`00af8cb8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8cb8.md) FUN_00af8cb8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a51fc4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a51/00a51fc4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a52034`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a52/00a52034.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

~~~diff
- 00af8c30 ["INT_ADD", "register:40f0:8", ["const:af8c30:8", "const:4:8"]]
+ 00af8ccc ["INT_ADD", "register:40f0:8", ["const:af8ccc:8", "const:4:8"]]
~~~


<a id="compare-692e5c616803c86c236ecd96eeb01eca"></a>

### [`00af8c5c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af8/00af8c5c.md) → [`00af8cf8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8cf8.md) FUN_00af8cf8

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
      "definition_site": "00af8d00",
      "incomplete_value": true,
      "site": "00af8d00",
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
      "definition_site": "00af8c64",
      "incomplete_value": true,
      "site": "00af8c64",
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
      "definition_site": "00af8d00",
      "incomplete_value": true,
      "site": "00af8d00",
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
      "definition_site": "00af8c64",
      "incomplete_value": true,
      "site": "00af8c64",
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
- 00af8c78 ["INT_ADD", "register:40f0:8", ["const:af8c78:8", "const:4:8"]]
+ 00af8d14 ["INT_ADD", "register:40f0:8", ["const:af8d14:8", "const:4:8"]]
~~~


<a id="compare-5213d63c1d5568e07342606684a980fb"></a>

### [`00af8ca8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af8/00af8ca8.md) → [`00af8d44`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8d44.md) FUN_00af8d44

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`00713d24`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00713/00713d24.md) [`00af34ec`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af3/00af34ec.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 2件 [`00713d7c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/00713d7c.md) [`00af3588`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af3/00af3588.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00af8d48",
      "incomplete_value": true,
      "site": "00af8d48",
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
      "definition_site": "00af8cac",
      "incomplete_value": true,
      "site": "00af8cac",
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
      "definition_site": "00af8d48",
      "incomplete_value": true,
      "site": "00af8d48",
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
      "definition_site": "00af8cac",
      "incomplete_value": true,
      "site": "00af8cac",
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
- 00af8cbc ["INT_ADD", "register:40f0:8", ["const:af8cbc:8", "const:4:8"]]
+ 00af8d58 ["INT_ADD", "register:40f0:8", ["const:af8d58:8", "const:4:8"]]
~~~


<a id="compare-5abd9a86ebf422a0af8fa9265da71cda"></a>

### [`00af8cf0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af8/00af8cf0.md) → [`00af8d8c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8d8c.md) FUN_00af8d8c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00713d24`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00713/00713d24.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00713d7c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/00713d7c.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00af8d90",
      "incomplete_value": true,
      "site": "00af8d90",
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
      "definition_site": "00af8cf4",
      "incomplete_value": true,
      "site": "00af8cf4",
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
      "definition_site": "00af8d90",
      "incomplete_value": true,
      "site": "00af8d90",
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
      "definition_site": "00af8cf4",
      "incomplete_value": true,
      "site": "00af8cf4",
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
- 00af8d04 ["INT_ADD", "register:40f0:8", ["const:af8d04:8", "const:4:8"]]
+ 00af8da0 ["INT_ADD", "register:40f0:8", ["const:af8da0:8", "const:4:8"]]
~~~


<a id="compare-39803df6d8c58b4231833e2b6eaf6490"></a>

### [`00af8d7c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af8/00af8d7c.md) → [`00af8e18`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8e18.md) FUN_00af8e18

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`007102d8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00710/007102d8.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00710330`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, return_value_candidate

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00af8e48",
      "incomplete_value": true,
      "site": "00af8e54",
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
    "ordinal": 0,
    "slot": 0
  }
]
~~~


~~~diff
- 00af8d90 ["INT_ADD", "register:40f0:8", ["const:af8d90:8", "const:4:8"]]
+ 00af8e2c ["INT_ADD", "register:40f0:8", ["const:af8e2c:8", "const:4:8"]]
~~~


<a id="compare-0211865d98a05833f5ed968b3d0f9079"></a>

### [`00af8dbc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af8/00af8dbc.md) → [`00af8e58`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8e58.md) FUN_00af8e58

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) [`00af3500`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af3/00af3500.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 2件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00af359c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af3/00af359c.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00af8e90",
      "incomplete_value": true,
      "site": "00af8e90",
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
      "definition_site": "00af8df4",
      "incomplete_value": true,
      "site": "00af8df4",
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
- 00af8dd8 ["INT_ADD", "register:40f0:8", ["const:af8dd8:8", "const:4:8"]]
+ 00af8e74 ["INT_ADD", "register:40f0:8", ["const:af8e74:8", "const:4:8"]]
~~~


<a id="compare-99e4d4dd3e7be08bb2568496e7565ca2"></a>

### [`00af8e08`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af8/00af8e08.md) → [`00af8ea4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8ea4.md) FUN_00af8ea4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`00713d24`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00713/00713d24.md) [`00af350c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af3/00af350c.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 2件 [`00713d7c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/00713d7c.md) [`00af35a8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af3/00af35a8.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies

~~~diff
- 00af8e1c ["INT_ADD", "register:40f0:8", ["const:af8e1c:8", "const:4:8"]]
+ 00af8eb8 ["INT_ADD", "register:40f0:8", ["const:af8eb8:8", "const:4:8"]]
~~~


<a id="compare-c4a204d7fe634b5664e02949efabfa6a"></a>

### [`00af8e50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af8/00af8e50.md) → [`00af8eec`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8eec.md) FUN_00af8eec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00713d24`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00713/00713d24.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00713d7c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/00713d7c.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

~~~diff
- 00af8e64 ["INT_ADD", "register:40f0:8", ["const:af8e64:8", "const:4:8"]]
+ 00af8f00 ["INT_ADD", "register:40f0:8", ["const:af8f00:8", "const:4:8"]]
~~~


<a id="compare-6b86f6b275ce4299d6a6a4ce9b48dfdd"></a>

### [`00af8e90`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af8/00af8e90.md) → [`00af8f2c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8f2c.md) FUN_00af8f2c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) [`00af3514`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af3/00af3514.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 2件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00af35b0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af3/00af35b0.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00af8f64",
      "incomplete_value": true,
      "site": "00af8f64",
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
      "definition_site": "00af8ec8",
      "incomplete_value": true,
      "site": "00af8ec8",
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
- 00af8eac ["INT_ADD", "register:40f0:8", ["const:af8eac:8", "const:4:8"]]
+ 00af8f48 ["INT_ADD", "register:40f0:8", ["const:af8f48:8", "const:4:8"]]
~~~


<a id="compare-9ae9a16221c2292e6b4560aac416e623"></a>

### [`00af8f1c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af8/00af8f1c.md) → [`00af8fb8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8fb8.md) FUN_00af8fb8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) [`00af3520`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af3/00af3520.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 2件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00af35bc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af3/00af35bc.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00af8ff0",
      "incomplete_value": true,
      "site": "00af8ff0",
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
      "definition_site": "00af8f54",
      "incomplete_value": true,
      "site": "00af8f54",
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
- 00af8f38 ["INT_ADD", "register:40f0:8", ["const:af8f38:8", "const:4:8"]]
+ 00af8fd4 ["INT_ADD", "register:40f0:8", ["const:af8fd4:8", "const:4:8"]]
~~~


<a id="compare-25ac2df45dd17cf41d616344c92f108c"></a>

### [`00af8f68`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af8/00af8f68.md) → [`00af9004`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9004.md) FUN_00af9004

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00713d24`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00713/00713d24.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00713d7c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/00713d7c.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies

~~~diff
- 00af8f7c ["INT_ADD", "register:40f0:8", ["const:af8f7c:8", "const:4:8"]]
+ 00af9018 ["INT_ADD", "register:40f0:8", ["const:af9018:8", "const:4:8"]]
~~~


<a id="compare-b0fb0de003057df27993dfb148ae9d4a"></a>

### [`00af8ff0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af8/00af8ff0.md) → [`00af908c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af908c.md) FUN_00af908c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

~~~diff
- 00af900c ["INT_ADD", "register:40f0:8", ["const:af900c:8", "const:4:8"]]
+ 00af90a8 ["INT_ADD", "register:40f0:8", ["const:af90a8:8", "const:4:8"]]
~~~


<a id="compare-2996e1bae89c303406a68b30ba267279"></a>

### [`00af9108`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af9/00af9108.md) → [`00af91a4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af91a4.md) FUN_00af91a4

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
      "definition_site": "00af91dc",
      "incomplete_value": true,
      "site": "00af91dc",
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
      "definition_site": "00af9140",
      "incomplete_value": true,
      "site": "00af9140",
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
- 00af9124 ["INT_ADD", "register:40f0:8", ["const:af9124:8", "const:4:8"]]
+ 00af91c0 ["INT_ADD", "register:40f0:8", ["const:af91c0:8", "const:4:8"]]
~~~


<a id="compare-852a5743abb04907caa2406e82585799"></a>

### [`00af9154`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af9/00af9154.md) → [`00af91f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af91f0.md) FUN_00af91f0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`00713d24`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00713/00713d24.md) [`00af352c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af3/00af352c.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 2件 [`00713d7c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/00713d7c.md) [`00af35c8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af3/00af35c8.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, return_value_candidate

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00af9228",
      "incomplete_value": true,
      "site": "00af9234",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "BOOL_NEGATE",
            "1",
            [
              [
                "live",
                "register:101:1"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00af918c",
      "incomplete_value": true,
      "site": "00af9198",
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
- 00af9168 ["INT_ADD", "register:40f0:8", ["const:af9168:8", "const:4:8"]]
+ 00af9204 ["INT_ADD", "register:40f0:8", ["const:af9204:8", "const:4:8"]]
~~~


<a id="compare-b230d8b721fb76ca982ad4a96aecb451"></a>

### [`00af919c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af9/00af919c.md) → [`00af9238`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9238.md) FUN_00af9238

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00713d24`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00713/00713d24.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00713d7c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/00713d7c.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, store_destination

アドレスに依存する影響 `store_destination` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00af923c",
      "incomplete_value": true,
      "site": "00af923c",
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
      "definition_site": "00af91a0",
      "incomplete_value": true,
      "site": "00af91a0",
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
      "definition_site": "00af923c",
      "incomplete_value": true,
      "site": "00af923c",
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
      "definition_site": "00af91a0",
      "incomplete_value": true,
      "site": "00af91a0",
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
- 00af91b0 ["INT_ADD", "register:40f0:8", ["const:af91b0:8", "const:4:8"]]
+ 00af924c ["INT_ADD", "register:40f0:8", ["const:af924c:8", "const:4:8"]]
~~~


<a id="compare-df02fe8d4ac04dc0bc54518dbd3d54fc"></a>

### [`00af91dc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af9/00af91dc.md) → [`00af9278`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9278.md) FUN_00af9278

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) [`00af3534`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af3/00af3534.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 2件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00af35d0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af3/00af35d0.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies

~~~diff
- 00af91f8 ["INT_ADD", "register:40f0:8", ["const:af91f8:8", "const:4:8"]]
+ 00af9294 ["INT_ADD", "register:40f0:8", ["const:af9294:8", "const:4:8"]]
~~~


<a id="compare-1474a5df3d047845f918ff862850b09c"></a>

### [`00af9228`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af9/00af9228.md) → [`00af92c4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af92c4.md) FUN_00af92c4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`007102d8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00710/007102d8.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00710330`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

~~~diff
- 00af923c ["INT_ADD", "register:40f0:8", ["const:af923c:8", "const:4:8"]]
+ 00af92d8 ["INT_ADD", "register:40f0:8", ["const:af92d8:8", "const:4:8"]]
~~~


<a id="compare-678a0338615c1c7907f632f1e51d1558"></a>

### [`00af9268`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af9/00af9268.md) → [`00af9304`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9304.md) FUN_00af9304

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) [`00af3540`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af3/00af3540.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 2件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00af35dc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af3/00af35dc.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

~~~diff
- 00af9284 ["INT_ADD", "register:40f0:8", ["const:af9284:8", "const:4:8"]]
+ 00af9320 ["INT_ADD", "register:40f0:8", ["const:af9320:8", "const:4:8"]]
~~~


<a id="compare-537707bc64c1d1f46e56eae99854f5d2"></a>

### [`00af92b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af9/00af92b4.md) → [`00af9350`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9350.md) FUN_00af9350

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
      "definition_site": "00af9354",
      "incomplete_value": true,
      "site": "00af9354",
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
      "definition_site": "00af92b8",
      "incomplete_value": true,
      "site": "00af92b8",
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
      "definition_site": "00af9354",
      "incomplete_value": true,
      "site": "00af9354",
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
      "definition_site": "00af92b8",
      "incomplete_value": true,
      "site": "00af92b8",
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
- 00af92c8 ["INT_ADD", "register:40f0:8", ["const:af92c8:8", "const:4:8"]]
+ 00af9364 ["INT_ADD", "register:40f0:8", ["const:af9364:8", "const:4:8"]]
~~~


<a id="compare-b3944d4d2064f7cf0c8908e0c4e54328"></a>

### [`00af9340`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af9/00af9340.md) → [`00af93dc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af93dc.md) FUN_00af93dc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`0070ea5c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0070e/0070ea5c.md) [`007119f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00711/007119f0.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 2件 [`0070eab4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00711a48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, return_value_candidate

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00af940c",
      "incomplete_value": true,
      "site": "00af9418",
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
      "definition_site": "00af9370",
      "incomplete_value": true,
      "site": "00af937c",
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
- 00af9354 ["INT_ADD", "register:40f0:8", ["const:af9354:8", "const:4:8"]]
+ 00af93f0 ["INT_ADD", "register:40f0:8", ["const:af93f0:8", "const:4:8"]]
~~~


<a id="compare-f2fba8c69b2971247e374e4b46f9a45e"></a>

### [`00af9380`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af9/00af9380.md) → [`00af941c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af941c.md) FUN_00af941c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

~~~diff
- 00af939c ["INT_ADD", "register:40f0:8", ["const:af939c:8", "const:4:8"]]
+ 00af9438 ["INT_ADD", "register:40f0:8", ["const:af9438:8", "const:4:8"]]
~~~


<a id="compare-c4357ec1c25c819c338041cee5eb4522"></a>

### [`00af93cc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af9/00af93cc.md) → [`00af9468`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9468.md) FUN_00af9468

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`005f2d68`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f2/005f2d68.md) [`00707ee0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00707/00707ee0.md) [`0070ea5c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0070e/0070ea5c.md) · 呼出先 9件 [`005e0eec`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e0/005e0eec.md) [`005e1b30`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e1/005e1b30.md) [`006899ac`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00689/006899ac.md) [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`009365c4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00936/009365c4.md)
- 新版 呼出元 3件 [`005f2da8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f2/005f2da8.md) [`00707f38`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) [`0070eab4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) · 呼出先 9件 [`005e0f2c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e0/005e0f2c.md) [`005e1b70`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e1/005e1b70.md) [`006899ec`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00689/006899ec.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00936618`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00936/00936618.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_target, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, store_destination, store_value

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 5件, `call_target` 1件, `store_destination` 1件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00af9498",
      "incomplete_value": true,
      "site": "00af9498",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_SUB",
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
      "definition_site": "00af93fc",
      "incomplete_value": true,
      "site": "00af93fc",
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
    "ordinal": 11,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00af9498",
      "incomplete_value": true,
      "site": "00af9498",
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
      "definition_site": "00af93fc",
      "incomplete_value": true,
      "site": "00af93fc",
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
    "ordinal": 11,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00af95b4",
      "incomplete_value": true,
      "site": "00af95c4",
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
                "const:b9c:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00af9518",
      "incomplete_value": true,
      "site": "00af9528",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "live",
            "register:4040:8"
          ]
        ]
      ]
    },
    "ordinal": 13,
    "slot": 2
  }
]
~~~


参照の変更（関数入口からの相対位置）

~~~json
{
  "removed": [
    [
      332,
      "READ",
      [
        "storage",
        "002b6b5c",
        null,
        "string"
      ]
    ],
    [
      336,
      "READ",
      [
        "storage",
        "002b6b65",
        null,
        "string"
      ]
    ],
    [
      340,
      "READ",
      [
        "storage",
        "002c2790",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      332,
      "READ",
      [
        "storage",
        "002b6b9c",
        null,
        "string"
      ]
    ],
    [
      336,
      "READ",
      [
        "storage",
        "002b6ba5",
        null,
        "string"
      ]
    ],
    [
      340,
      "READ",
      [
        "storage",
        "002c27d0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00af9400 ["INT_ADD", "register:40f0:8", ["const:af9400:8", "const:4:8"]]
+ 00af949c ["INT_ADD", "register:40f0:8", ["const:af949c:8", "const:4:8"]]
- 00af942c ["INT_ADD", "register:40f0:8", ["const:af942c:8", "const:4:8"]]
+ 00af94c8 ["INT_ADD", "register:40f0:8", ["const:af94c8:8", "const:4:8"]]
- 00af944c ["INT_ADD", "register:40f0:8", ["const:af944c:8", "const:4:8"]]
+ 00af94e8 ["INT_ADD", "register:40f0:8", ["const:af94e8:8", "const:4:8"]]
~~~


<a id="compare-aef93d97f16d9fb478d6af951c1fb448"></a>

### [`00af9634`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af9/00af9634.md) → [`00af96d0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af96d0.md) FUN_00af96d0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`0070ea5c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0070e/0070ea5c.md) [`007119f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00711/007119f0.md) · 呼出先 2件 [`005e7420`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 2件 [`0070eab4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00711a48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 2件 [`005e7460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00af96f4",
      "incomplete_value": true,
      "site": "00af96f8",
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
- 00af9648 ["INT_ADD", "register:40f0:8", ["const:af9648:8", "const:4:8"]]
+ 00af96e4 ["INT_ADD", "register:40f0:8", ["const:af96e4:8", "const:4:8"]]
- 00af965c ["INT_ADD", "register:40f0:8", ["const:af965c:8", "const:4:8"]]
+ 00af96f8 ["INT_ADD", "register:40f0:8", ["const:af96f8:8", "const:4:8"]]
- 00af9660 ["CBRANCH", null, ["local:b4:8", "tmp:3:1"]]
+ 00af96fc ["CBRANCH", null, ["local:b2:8", "tmp:3:1"]]
~~~


<a id="compare-64d2df13826168c9065321eab16f0979"></a>

### [`00af96a4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af9/00af96a4.md) → [`00af9740`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9740.md) FUN_00af9740

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
      "definition_site": "00af976c",
      "incomplete_value": true,
      "site": "00af9770",
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
    "old": {
      "definition_site": "00af96d0",
      "incomplete_value": true,
      "site": "00af96d4",
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
- 00af96c0 ["INT_ADD", "register:40f0:8", ["const:af96c0:8", "const:4:8"]]
+ 00af975c ["INT_ADD", "register:40f0:8", ["const:af975c:8", "const:4:8"]]
- 00af96d4 ["INT_ADD", "register:40f0:8", ["const:af96d4:8", "const:4:8"]]
+ 00af9770 ["INT_ADD", "register:40f0:8", ["const:af9770:8", "const:4:8"]]
- 00af96d8 ["CBRANCH", null, ["local:b2:8", "tmp:3:1"]]
+ 00af9774 ["CBRANCH", null, ["local:b5:8", "tmp:3:1"]]
~~~


<a id="compare-d0e7d55cdbeeb02387f6ff735ffa97dc"></a>

### [`00af9714`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af9/00af9714.md) → [`00af97b0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af97b0.md) FUN_00af97b0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`007119f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00711/007119f0.md) · 呼出先 2件 [`005e7420`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00711a48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 2件 [`005e7460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies

~~~diff
- 00af9728 ["INT_ADD", "register:40f0:8", ["const:af9728:8", "const:4:8"]]
+ 00af97c4 ["INT_ADD", "register:40f0:8", ["const:af97c4:8", "const:4:8"]]
- 00af973c ["INT_ADD", "register:40f0:8", ["const:af973c:8", "const:4:8"]]
+ 00af97d8 ["INT_ADD", "register:40f0:8", ["const:af97d8:8", "const:4:8"]]
- 00af9748 ["BRANCH", null, ["local:b12:8"]]
+ 00af97e4 ["BRANCH", null, ["local:b11:8"]]
~~~


<a id="compare-7f9f1689b6f0dd9ec205906bd83b960b"></a>

### [`00af9784`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af9/00af9784.md) → [`00af9820`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9820.md) FUN_00af9820

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 2件 [`005e7420`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 2件 [`005e7460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, store_destination

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00af9824",
      "incomplete_value": true,
      "site": "00af9824",
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
      "definition_site": "00af9788",
      "incomplete_value": true,
      "site": "00af9788",
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
      "definition_site": "00af9828",
      "incomplete_value": true,
      "site": "00af9828",
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
      "definition_site": "00af978c",
      "incomplete_value": true,
      "site": "00af978c",
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
      "definition_site": "00af9828",
      "incomplete_value": true,
      "site": "00af9828",
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
      "definition_site": "00af978c",
      "incomplete_value": true,
      "site": "00af978c",
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
- 00af97a0 ["INT_ADD", "register:40f0:8", ["const:af97a0:8", "const:4:8"]]
+ 00af983c ["INT_ADD", "register:40f0:8", ["const:af983c:8", "const:4:8"]]
- 00af97b4 ["INT_ADD", "register:40f0:8", ["const:af97b4:8", "const:4:8"]]
+ 00af9850 ["INT_ADD", "register:40f0:8", ["const:af9850:8", "const:4:8"]]
- 00af97b8 ["CBRANCH", null, ["local:b10:8", "tmp:3:1"]]
+ 00af9854 ["CBRANCH", null, ["local:b5:8", "tmp:3:1"]]
~~~


<a id="compare-974bc60b3b2972e3e0d8b8d8048f9075"></a>

### [`00af97f4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af9/00af97f4.md) → [`00af9890`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9890.md) FUN_00af9890

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`0070ea5c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0070e/0070ea5c.md) · 呼出先 2件 [`005e7420`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`0070eab4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) · 呼出先 2件 [`005e7460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, call_argument_candidate, constant, control_flow, local_def_use, operands_and_dependencies

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00af98b4",
      "incomplete_value": true,
      "site": "00af98b8",
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
- 00af9808 ["INT_ADD", "register:40f0:8", ["const:af9808:8", "const:4:8"]]
+ 00af98a4 ["INT_ADD", "register:40f0:8", ["const:af98a4:8", "const:4:8"]]
- 00af981c ["INT_ADD", "register:40f0:8", ["const:af981c:8", "const:4:8"]]
+ 00af98b8 ["INT_ADD", "register:40f0:8", ["const:af98b8:8", "const:4:8"]]
- 00af9820 ["CBRANCH", null, ["local:b3:8", "tmp:3:1"]]
+ 00af98bc ["CBRANCH", null, ["local:b4:8", "tmp:3:1"]]
~~~


<a id="compare-4d4a3c6add40573f20ab67a1c8298bae"></a>

### [`00af9864`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af9/00af9864.md) → [`00af9900`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9900.md) FUN_00af9900

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 2件 [`005e7420`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 2件 [`005e7460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, store_destination

優先判定に残った影響 `store_destination` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00af9904",
      "incomplete_value": true,
      "site": "00af9904",
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
      "definition_site": "00af9868",
      "incomplete_value": true,
      "site": "00af9868",
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
      "definition_site": "00af995c",
      "incomplete_value": true,
      "site": "00af995c",
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
      "definition_site": "00af98c0",
      "incomplete_value": true,
      "site": "00af98c0",
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
- 00af9880 ["INT_ADD", "register:40f0:8", ["const:af9880:8", "const:4:8"]]
+ 00af991c ["INT_ADD", "register:40f0:8", ["const:af991c:8", "const:4:8"]]
- 00af9894 ["INT_ADD", "register:40f0:8", ["const:af9894:8", "const:4:8"]]
+ 00af9930 ["INT_ADD", "register:40f0:8", ["const:af9930:8", "const:4:8"]]
- 00af9898 ["CBRANCH", null, ["local:b5:8", "tmp:3:1"]]
+ 00af9934 ["CBRANCH", null, ["local:b4:8", "tmp:3:1"]]
~~~


<a id="compare-254d9a9b874f196f857c8bbd7c992563"></a>

### [`00af98d4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af9/00af98d4.md) → [`00af9970`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9970.md) FUN_00af9970

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
      "definition_site": "00af98f8",
      "incomplete_value": true,
      "site": "00af98fc",
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
- 00af98e8 ["INT_ADD", "register:40f0:8", ["const:af98e8:8", "const:4:8"]]
+ 00af9984 ["INT_ADD", "register:40f0:8", ["const:af9984:8", "const:4:8"]]
- 00af98fc ["INT_ADD", "register:40f0:8", ["const:af98fc:8", "const:4:8"]]
+ 00af9998 ["INT_ADD", "register:40f0:8", ["const:af9998:8", "const:4:8"]]
- 00af9900 ["CBRANCH", null, ["local:b2:8", "tmp:3:1"]]
+ 00af999c ["CBRANCH", null, ["local:b3:8", "tmp:3:1"]]
~~~


<a id="compare-7ab9e4a0b22f7aed8078b6909bf0a4b6"></a>

### [`00af9944`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af9/00af9944.md) → [`00af99e0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af99e0.md) FUN_00af99e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 2件 [`005e7420`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 2件 [`005e7460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies

~~~diff
- 00af9960 ["INT_ADD", "register:40f0:8", ["const:af9960:8", "const:4:8"]]
+ 00af99fc ["INT_ADD", "register:40f0:8", ["const:af99fc:8", "const:4:8"]]
- 00af9974 ["INT_ADD", "register:40f0:8", ["const:af9974:8", "const:4:8"]]
+ 00af9a10 ["INT_ADD", "register:40f0:8", ["const:af9a10:8", "const:4:8"]]
- 00af9978 ["CBRANCH", null, ["local:b2:8", "tmp:3:1"]]
+ 00af9a14 ["CBRANCH", null, ["local:b4:8", "tmp:3:1"]]
~~~


<a id="compare-ebaad98e978e4384092b096d84ad951d"></a>

### [`00af99b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af9/00af99b4.md) → [`00af9a50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9a50.md) FUN_00af9a50

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`0070ea5c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0070e/0070ea5c.md) · 呼出先 2件 [`005e7420`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`0070eab4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) · 呼出先 2件 [`005e7460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00af9a74",
      "incomplete_value": true,
      "site": "00af9a78",
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
      "definition_site": "00af99d8",
      "incomplete_value": true,
      "site": "00af99dc",
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
- 00af99c8 ["INT_ADD", "register:40f0:8", ["const:af99c8:8", "const:4:8"]]
+ 00af9a64 ["INT_ADD", "register:40f0:8", ["const:af9a64:8", "const:4:8"]]
- 00af99dc ["INT_ADD", "register:40f0:8", ["const:af99dc:8", "const:4:8"]]
+ 00af9a78 ["INT_ADD", "register:40f0:8", ["const:af9a78:8", "const:4:8"]]
- 00af99e0 ["CBRANCH", null, ["local:b4:8", "tmp:3:1"]]
+ 00af9a7c ["CBRANCH", null, ["local:b2:8", "tmp:3:1"]]
~~~


<a id="compare-80bd3b024bffeb64d5b345c5fe332b32"></a>

### [`00af9a94`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af9/00af9a94.md) → [`00af9b30`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9b30.md) FUN_00af9b30

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00713d24`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00713/00713d24.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00713d7c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/00713d7c.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, return_value_candidate, store_destination

アドレスに依存する影響 `return_value_candidate` 1件, `store_destination` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00af9b34",
      "incomplete_value": true,
      "site": "00af9b34",
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
      "definition_site": "00af9a98",
      "incomplete_value": true,
      "site": "00af9a98",
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
      "definition_site": "00af9b34",
      "incomplete_value": true,
      "site": "00af9b34",
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
      "definition_site": "00af9a98",
      "incomplete_value": true,
      "site": "00af9a98",
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
      "definition_site": "00af9b68",
      "incomplete_value": true,
      "site": "00af9b74",
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
    "old": null,
    "ordinal": 0,
    "slot": 0
  }
]
~~~


~~~diff
- 00af9aa8 ["INT_ADD", "register:40f0:8", ["const:af9aa8:8", "const:4:8"]]
+ 00af9b44 ["INT_ADD", "register:40f0:8", ["const:af9b44:8", "const:4:8"]]
~~~


<a id="compare-d71df2aa56e83c0a4a02fdeadf071690"></a>

### [`00af9adc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af9/00af9adc.md) → [`00af9b78`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9b78.md) FUN_00af9b78

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00713d24`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00713/00713d24.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00713d7c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/00713d7c.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies, return_value_candidate

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "00af9b0c",
      "incomplete_value": true,
      "site": "00af9b18",
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
- 00af9af0 ["INT_ADD", "register:40f0:8", ["const:af9af0:8", "const:4:8"]]
+ 00af9b8c ["INT_ADD", "register:40f0:8", ["const:af9b8c:8", "const:4:8"]]
~~~


<a id="compare-09de3ab3656889aef94dab963174b17f"></a>

### [`00af9b1c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af9/00af9b1c.md) → [`00af9bb8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9bb8.md) FUN_00af9bb8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies

~~~diff
- 00af9b38 ["INT_ADD", "register:40f0:8", ["const:af9b38:8", "const:4:8"]]
+ 00af9bd4 ["INT_ADD", "register:40f0:8", ["const:af9bd4:8", "const:4:8"]]
~~~


<a id="compare-f1660c5074b4d45ef0ecb77f0bea7284"></a>

### [`00af9bb0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af9/00af9bb0.md) → [`00af9c4c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9c4c.md) FUN_00af9c4c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

~~~diff
- 00af9bcc ["INT_ADD", "register:40f0:8", ["const:af9bcc:8", "const:4:8"]]
+ 00af9c68 ["INT_ADD", "register:40f0:8", ["const:af9c68:8", "const:4:8"]]
~~~


<a id="compare-50a038bedf9405a00c935eb12d1f199c"></a>

### [`00af9bfc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af9/00af9bfc.md) → [`00af9c98`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9c98.md) FUN_00af9c98

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`0070ea5c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0070e/0070ea5c.md) · 呼出先 2件 [`005e7420`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`0070eab4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) · 呼出先 2件 [`005e7460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, store_destination

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00af9c9c",
      "incomplete_value": true,
      "site": "00af9c9c",
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
      "definition_site": "00af9c00",
      "incomplete_value": true,
      "site": "00af9c00",
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
      "definition_site": "00af9c9c",
      "incomplete_value": true,
      "site": "00af9c9c",
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
      "definition_site": "00af9c00",
      "incomplete_value": true,
      "site": "00af9c00",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00af9cbc",
      "incomplete_value": true,
      "site": "00af9cc0",
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
    "old": {
      "definition_site": "00af9c20",
      "incomplete_value": true,
      "site": "00af9c24",
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
- 00af9c10 ["INT_ADD", "register:40f0:8", ["const:af9c10:8", "const:4:8"]]
+ 00af9cac ["INT_ADD", "register:40f0:8", ["const:af9cac:8", "const:4:8"]]
- 00af9c24 ["INT_ADD", "register:40f0:8", ["const:af9c24:8", "const:4:8"]]
+ 00af9cc0 ["INT_ADD", "register:40f0:8", ["const:af9cc0:8", "const:4:8"]]
- 00af9c28 ["CBRANCH", null, ["local:b4:8", "tmp:3:1"]]
+ 00af9cc4 ["CBRANCH", null, ["local:b7:8", "tmp:3:1"]]
~~~


<a id="compare-02d80bf7c83d70b4b64a049775faff11"></a>

### [`00af9c6c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af9/00af9c6c.md) → [`00af9d08`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9d08.md) FUN_00af9d08

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 2件 [`005e7420`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 2件 [`005e7460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, store_destination

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00af9d0c",
      "incomplete_value": true,
      "site": "00af9d0c",
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
      "definition_site": "00af9c70",
      "incomplete_value": true,
      "site": "00af9c70",
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
      "definition_site": "00af9d10",
      "incomplete_value": true,
      "site": "00af9d10",
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
      "definition_site": "00af9c74",
      "incomplete_value": true,
      "site": "00af9c74",
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
      "definition_site": "00af9d10",
      "incomplete_value": true,
      "site": "00af9d10",
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
      "definition_site": "00af9c74",
      "incomplete_value": true,
      "site": "00af9c74",
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
- 00af9c88 ["INT_ADD", "register:40f0:8", ["const:af9c88:8", "const:4:8"]]
+ 00af9d24 ["INT_ADD", "register:40f0:8", ["const:af9d24:8", "const:4:8"]]
- 00af9c9c ["INT_ADD", "register:40f0:8", ["const:af9c9c:8", "const:4:8"]]
+ 00af9d38 ["INT_ADD", "register:40f0:8", ["const:af9d38:8", "const:4:8"]]
- 00af9ca0 ["CBRANCH", null, ["local:b12:8", "tmp:3:1"]]
+ 00af9d3c ["CBRANCH", null, ["local:b6:8", "tmp:3:1"]]
~~~


<a id="compare-4cda219accd25e4ae1b936542103aa92"></a>

### [`00af9cdc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af9/00af9cdc.md) → [`00af9d78`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9d78.md) FUN_00af9d78

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`0070ea5c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0070e/0070ea5c.md) [`007119f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00711/007119f0.md) · 呼出先 2件 [`005e7420`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 2件 [`0070eab4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00711a48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 2件 [`005e7460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

~~~diff
- 00af9cf0 ["INT_ADD", "register:40f0:8", ["const:af9cf0:8", "const:4:8"]]
+ 00af9d8c ["INT_ADD", "register:40f0:8", ["const:af9d8c:8", "const:4:8"]]
- 00af9d04 ["INT_ADD", "register:40f0:8", ["const:af9d04:8", "const:4:8"]]
+ 00af9da0 ["INT_ADD", "register:40f0:8", ["const:af9da0:8", "const:4:8"]]
- 00af9d08 ["CBRANCH", null, ["local:b3:8", "tmp:3:1"]]
+ 00af9da4 ["CBRANCH", null, ["local:b2:8", "tmp:3:1"]]
~~~


<a id="compare-109d43b087bdc611f689ce0f2b25da09"></a>

### [`00af9d4c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af9/00af9d4c.md) → [`00af9de8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9de8.md) FUN_00af9de8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 2件 [`005e7420`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 2件 [`005e7460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

~~~diff
- 00af9d68 ["INT_ADD", "register:40f0:8", ["const:af9d68:8", "const:4:8"]]
+ 00af9e04 ["INT_ADD", "register:40f0:8", ["const:af9e04:8", "const:4:8"]]
- 00af9d7c ["INT_ADD", "register:40f0:8", ["const:af9d7c:8", "const:4:8"]]
+ 00af9e18 ["INT_ADD", "register:40f0:8", ["const:af9e18:8", "const:4:8"]]
- 00af9d80 ["CBRANCH", null, ["local:b2:8", "tmp:3:1"]]
+ 00af9e1c ["CBRANCH", null, ["local:b4:8", "tmp:3:1"]]
~~~


<a id="compare-fb210808d2349c14e7b76809ece7dc8e"></a>

### [`00af9dbc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af9/00af9dbc.md) → [`00af9e58`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9e58.md) FUN_00af9e58

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`0070ea5c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0070e/0070ea5c.md) [`007119f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00711/007119f0.md) · 呼出先 2件 [`005e7420`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 2件 [`0070eab4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00711a48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 2件 [`005e7460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, control_flow, operands_and_dependencies

~~~diff
- 00af9dd0 ["INT_ADD", "register:40f0:8", ["const:af9dd0:8", "const:4:8"]]
+ 00af9e6c ["INT_ADD", "register:40f0:8", ["const:af9e6c:8", "const:4:8"]]
- 00af9de4 ["INT_ADD", "register:40f0:8", ["const:af9de4:8", "const:4:8"]]
+ 00af9e80 ["INT_ADD", "register:40f0:8", ["const:af9e80:8", "const:4:8"]]
- 00af9df0 ["BRANCH", null, ["local:b3:8"]]
+ 00af9e8c ["BRANCH", null, ["local:b5:8"]]
~~~


<a id="compare-c8de43b35229264c10043370f5f600b6"></a>

### [`00af9e2c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af9/00af9e2c.md) → [`00af9ec8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9ec8.md) FUN_00af9ec8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 2件 [`005e7420`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 2件 [`005e7460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, operands_and_dependencies

~~~diff
- 00af9e48 ["INT_ADD", "register:40f0:8", ["const:af9e48:8", "const:4:8"]]
+ 00af9ee4 ["INT_ADD", "register:40f0:8", ["const:af9ee4:8", "const:4:8"]]
- 00af9e5c ["INT_ADD", "register:40f0:8", ["const:af9e5c:8", "const:4:8"]]
+ 00af9ef8 ["INT_ADD", "register:40f0:8", ["const:af9ef8:8", "const:4:8"]]
- 00af9e6c ["INT_ADD", "register:40f0:8", ["const:af9e6c:8", "const:4:8"]]
+ 00af9f08 ["INT_ADD", "register:40f0:8", ["const:af9f08:8", "const:4:8"]]
~~~


<a id="compare-eb1ec90d4c73f54522716b547df1f3bb"></a>

### [`00af9e9c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af9/00af9e9c.md) → [`00af9f38`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9f38.md) FUN_00af9f38

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`0070ea5c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0070e/0070ea5c.md) [`007119f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00711/007119f0.md) · 呼出先 2件 [`005e7420`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 2件 [`0070eab4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00711a48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 2件 [`005e7460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

~~~diff
- 00af9eb0 ["INT_ADD", "register:40f0:8", ["const:af9eb0:8", "const:4:8"]]
+ 00af9f4c ["INT_ADD", "register:40f0:8", ["const:af9f4c:8", "const:4:8"]]
- 00af9ec4 ["INT_ADD", "register:40f0:8", ["const:af9ec4:8", "const:4:8"]]
+ 00af9f60 ["INT_ADD", "register:40f0:8", ["const:af9f60:8", "const:4:8"]]
- 00af9ec8 ["CBRANCH", null, ["local:b4:8", "tmp:3:1"]]
+ 00af9f64 ["CBRANCH", null, ["local:b2:8", "tmp:3:1"]]
~~~


<a id="compare-3f8daf9554c7398f5f5e218c558835ed"></a>

### [`00af9f7c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af9/00af9f7c.md) → [`00afa018`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afa018.md) FUN_00afa018

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`0070ea5c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0070e/0070ea5c.md) · 呼出先 2件 [`005e7420`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`0070eab4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) · 呼出先 2件 [`005e7460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00afa03c",
      "incomplete_value": true,
      "site": "00afa040",
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
    "old": {
      "definition_site": "00af9fa0",
      "incomplete_value": true,
      "site": "00af9fa4",
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
- 00af9f90 ["INT_ADD", "register:40f0:8", ["const:af9f90:8", "const:4:8"]]
+ 00afa02c ["INT_ADD", "register:40f0:8", ["const:afa02c:8", "const:4:8"]]
- 00af9fa4 ["INT_ADD", "register:40f0:8", ["const:af9fa4:8", "const:4:8"]]
+ 00afa040 ["INT_ADD", "register:40f0:8", ["const:afa040:8", "const:4:8"]]
- 00af9fa8 ["CBRANCH", null, ["local:b2:8", "tmp:3:1"]]
+ 00afa044 ["CBRANCH", null, ["local:b4:8", "tmp:3:1"]]
~~~


<a id="compare-b9dd321c8ef23402249189d5252ac444"></a>

### [`00afa05c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afa/00afa05c.md) → [`00afa0f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afa0f8.md) FUN_00afa0f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f3b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 2件 [`005e7420`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 2件 [`005e7460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, store_destination

優先判定に残った影響 `store_destination` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afa104",
      "incomplete_value": true,
      "site": "00afa104",
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
      "definition_site": "00afa068",
      "incomplete_value": true,
      "site": "00afa068",
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
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afa104",
      "incomplete_value": true,
      "site": "00afa104",
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
                "const:30:8"
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
      "definition_site": "00afa068",
      "incomplete_value": true,
      "site": "00afa068",
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
                "const:30:8"
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
    "ordinal": 7,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afa170",
      "incomplete_value": true,
      "site": "00afa170",
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
      "definition_site": "00afa0d4",
      "incomplete_value": true,
      "site": "00afa0d4",
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
    "ordinal": 9,
    "slot": 1
  }
]
~~~


~~~diff
- 00afa080 ["INT_ADD", "register:40f0:8", ["const:afa080:8", "const:4:8"]]
+ 00afa11c ["INT_ADD", "register:40f0:8", ["const:afa11c:8", "const:4:8"]]
- 00afa094 ["INT_ADD", "register:40f0:8", ["const:afa094:8", "const:4:8"]]
+ 00afa130 ["INT_ADD", "register:40f0:8", ["const:afa130:8", "const:4:8"]]
- 00afa098 ["CBRANCH", null, ["local:b6:8", "tmp:3:1"]]
+ 00afa134 ["CBRANCH", null, ["local:b4:8", "tmp:3:1"]]
~~~


<a id="compare-e224c3a64cc8b932c1fb63785383bdb1"></a>

### [`00afa0ec`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afa/00afa0ec.md) → [`00afa188`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afa/00afa188.md) FUN_00afa188

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`007119f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00711/007119f0.md) · 呼出先 2件 [`005e7420`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00711a48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 2件 [`005e7460`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, call_argument_candidate, constant, control_flow, local_def_use, operands_and_dependencies, store_destination

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00afa18c",
      "incomplete_value": true,
      "site": "00afa18c",
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
      "definition_site": "00afa0f0",
      "incomplete_value": true,
      "site": "00afa0f0",
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
      "definition_site": "00afa18c",
      "incomplete_value": true,
      "site": "00afa18c",
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
      "definition_site": "00afa0f0",
      "incomplete_value": true,
      "site": "00afa0f0",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00afa1d4",
      "incomplete_value": true,
      "site": "00afa1d8",
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
      "definition_site": "00afa138",
      "incomplete_value": true,
      "site": "00afa13c",
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
    "ordinal": 3,
    "slot": 1
  }
]
~~~


~~~diff
- 00afa100 ["INT_ADD", "register:40f0:8", ["const:afa100:8", "const:4:8"]]
+ 00afa19c ["INT_ADD", "register:40f0:8", ["const:afa19c:8", "const:4:8"]]
- 00afa114 ["INT_ADD", "register:40f0:8", ["const:afa114:8", "const:4:8"]]
+ 00afa1b0 ["INT_ADD", "register:40f0:8", ["const:afa1b0:8", "const:4:8"]]
- 00afa118 ["CBRANCH", null, ["local:b2:8", "tmp:3:1"]]
+ 00afa1b4 ["CBRANCH", null, ["local:b3:8", "tmp:3:1"]]
~~~


