# v16.0.1 → v16.0.2 · 最優先の変更候補 (49)

[一覧の目次](README.md)

<a id="compare-2df4cf66d34b607caa9fe303851d4bf2"></a>

### [`00880cf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00880/00880cf4.md) → [`00880d4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00880/00880d4c.md) FUN_00880d4c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 16件 [`0047377c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00473/0047377c.md) [`00856e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00856/00856e2c.md) [`00873dc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00873/00873dc8.md) [`00881098`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00881/00881098.md) [`00883ad4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00883/00883ad4.md) · 呼出先 14件 [`0044f8e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044f/0044f8e0.md) [`00452c54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00452/00452c54.md) [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00764384`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00764/00764384.md) [`007683c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00768/007683c8.md)
- 新版 呼出元 16件 [`004737bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00473/004737bc.md) [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) [`00873e20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/00873e20.md) [`008810f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00881/008810f0.md) [`00883b2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00883/00883b2c.md) · 呼出先 14件 [`0044f920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044f920.md) [`00452c94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00452/00452c94.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`007643dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/007643dc.md) [`00768420`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00768/00768420.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.52% / 新版 97.52%

優先判定に残った影響 `call_target` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00880e90",
      "incomplete_value": false,
      "site": "00880e90",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:df8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00880e38",
      "incomplete_value": false,
      "site": "00880e38",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:d28:8"
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
      "site": "00880d80",
      "value": [
        "leaf",
        "ram:768420:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00880d28",
      "value": [
        "leaf",
        "ram:7683c8:8"
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
      "site": "00880db4",
      "value": [
        "leaf",
        "ram:7643dc:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00880d5c",
      "value": [
        "leaf",
        "ram:764384:8"
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
      "00880d80",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007683c8"
      ]
    ],
    [
      "00880db4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00764384"
      ]
    ],
    [
      "00880e90",
      "DATA",
      [
        "storage",
        "00c80d28",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00880d80",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00768420"
      ]
    ],
    [
      "00880db4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007643dc"
      ]
    ],
    [
      "00880e90",
      "DATA",
      [
        "storage",
        "00c80df8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00880d28 ["INT_ADD", "register:40f0:8", ["const:880d28:8", "const:4:8"]]
- 00880d28 ["CALL", null, ["ram:7683c8:8"]]
+ 00880d80 ["INT_ADD", "register:40f0:8", ["const:880d80:8", "const:4:8"]]
+ 00880d80 ["CALL", null, ["ram:768420:8"]]
- 00880d5c ["INT_ADD", "register:40f0:8", ["const:880d5c:8", "const:4:8"]]
- 00880d5c ["CALL", null, ["ram:764384:8"]]
+ 00880db4 ["INT_ADD", "register:40f0:8", ["const:880db4:8", "const:4:8"]]
+ 00880db4 ["CALL", null, ["ram:7643dc:8"]]
- 00880db4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00880db4 ["INT_ADD", "register:40f0:8", ["const:880db4:8", "const:4:8"]]
- 00880db4 ["CALLIND", null, ["register:0:8"]]
+ 00880e0c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00880e0c ["INT_ADD", "register:40f0:8", ["const:880e0c:8", "const:4:8"]]
+ 00880e0c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-86dfbd98db05e52c199cbc32511a7264"></a>

### [`00881098`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00881/00881098.md) → [`008810f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00881/008810f0.md) FUN_008810f0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008959d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00895/008959d0.md) · 呼出先 9件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0056085c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00560/0056085c.md) [`00880cf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00880/00880cf4.md) [`008861a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00886/008861a0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 1件 [`00895a28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00895/00895a28.md) · 呼出先 9件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0056089c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00560/0056089c.md) [`00880d4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00880/00880d4c.md) [`008861f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00886/008861f8.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 97.79% / 新版 97.79%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008811c0",
      "incomplete_value": false,
      "site": "008811c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:ef8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00881168",
      "incomplete_value": false,
      "site": "00881168",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:e28:8"
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
      "008811c0",
      "DATA",
      [
        "storage",
        "00c80e28",
        null,
        "undefined *"
      ]
    ],
    [
      "00881240",
      "READ",
      [
        "storage",
        "00c80e50",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008811c0",
      "DATA",
      [
        "storage",
        "00c80ef8",
        null,
        "undefined *"
      ]
    ],
    [
      "00881240",
      "READ",
      [
        "storage",
        "00c80f20",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008810cc ["INT_ADD", "register:40f0:8", ["const:8810cc:8", "const:4:8"]]
- 008810cc ["CALL", null, ["callee:0056089c:8"]]
+ 00881124 ["INT_ADD", "register:40f0:8", ["const:881124:8", "const:4:8"]]
+ 00881124 ["CALL", null, ["callee:0056089c:8"]]
- 00881100 ["INT_ADD", "register:40f0:8", ["const:881100:8", "const:4:8"]]
- 00881100 ["CALL", null, ["callee:0043bb60:8"]]
+ 00881158 ["INT_ADD", "register:40f0:8", ["const:881158:8", "const:4:8"]]
+ 00881158 ["CALL", null, ["callee:0043bb60:8"]]
- 00881124 ["COPY", "register:0:8", ["register:4040:8"]]
- 00881124 ["INT_ADD", "register:40f0:8", ["const:881124:8", "const:4:8"]]
- 00881124 ["CALLIND", null, ["register:0:8"]]
+ 0088117c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0088117c ["INT_ADD", "register:40f0:8", ["const:88117c:8", "const:4:8"]]
+ 0088117c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-fa4fd6743162884d764ad6c82a0d3ec2"></a>

### [`008813b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00881/008813b0.md) → [`00881408`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00881/00881408.md) FUN_00881408

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 9件 [`00484210`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00484/00484210.md) [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048e7e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048e/0048e7e0.md) [`004928ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/004928ac.md) [`00492d04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/00492d04.md)
- 新版 呼出元 0件  · 呼出先 9件 [`00484250`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00484/00484250.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`004928ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/004928ec.md) [`00492d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492d44.md)

変更の種類 call, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 84.95% / 新版 84.95%

優先判定に残った影響 `call_target` 3件, `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008814f8",
      "incomplete_value": true,
      "site": "00881508",
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
                "const:20c:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008814a0",
      "incomplete_value": true,
      "site": "008814b0",
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
                "const:260:8"
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
      "definition_site": "008814fc",
      "incomplete_value": true,
      "site": "0088150c",
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
      "definition_site": "008814a4",
      "incomplete_value": true,
      "site": "008814b4",
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
    "ordinal": 16,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00881500",
      "incomplete_value": true,
      "site": "00881510",
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
      "definition_site": "008814a8",
      "incomplete_value": true,
      "site": "008814b8",
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
      "00881444",
      "READ",
      [
        "storage",
        "002ba8ab",
        null,
        "string"
      ]
    ],
    [
      "00881448",
      "DATA",
      [
        "storage",
        "0039b1d8",
        null,
        "dword"
      ]
    ],
    [
      "00881480",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ]
  ],
  "added": [
    [
      "00881444",
      "READ",
      [
        "storage",
        "002ba857",
        null,
        "string"
      ]
    ],
    [
      "00881448",
      "DATA",
      [
        "storage",
        "0039b1d8",
        "fde_0039b1d8",
        "dword"
      ]
    ],
    [
      "00881480",
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
- 00881428 ["INT_ADD", "register:40f0:8", ["const:881428:8", "const:4:8"]]
- 00881428 ["CALL", null, ["ram:48ccf8:8"]]
+ 00881480 ["INT_ADD", "register:40f0:8", ["const:881480:8", "const:4:8"]]
+ 00881480 ["CALL", null, ["ram:48cd38:8"]]
- 00881460 ["INT_ADD", "register:40f0:8", ["const:881460:8", "const:4:8"]]
- 00881460 ["CALL", null, ["callee:00492d44:8"]]
+ 008814b8 ["INT_ADD", "register:40f0:8", ["const:8814b8:8", "const:4:8"]]
+ 008814b8 ["CALL", null, ["callee:00492d44:8"]]
- 00881484 ["INT_ADD", "register:40f0:8", ["const:881484:8", "const:4:8"]]
- 00881484 ["CALL", null, ["ram:48ccf8:8"]]
+ 008814dc ["INT_ADD", "register:40f0:8", ["const:8814dc:8", "const:4:8"]]
+ 008814dc ["CALL", null, ["ram:48cd38:8"]]
~~~


<a id="compare-1c71adbad235d4cd0c70a62af1807327"></a>

### [`00881584`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00881/00881584.md) → [`008815dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00881/008815dc.md) FUN_008815dc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 9件 [`00484210`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00484/00484210.md) [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048e7e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048e/0048e7e0.md) [`004928ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/004928ac.md) [`00492d04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/00492d04.md)
- 新版 呼出元 0件  · 呼出先 9件 [`00484250`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00484/00484250.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`004928ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/004928ec.md) [`00492d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492d44.md)

変更の種類 call, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 82.80% / 新版 82.80%

優先判定に残った影響 `call_target` 3件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00881628",
      "incomplete_value": true,
      "site": "00881628",
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
                "const:857:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008815d0",
      "incomplete_value": true,
      "site": "008815d0",
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
                "const:8ab:8"
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
      "definition_site": "008816cc",
      "incomplete_value": true,
      "site": "008816dc",
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
                "const:20c:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00881674",
      "incomplete_value": true,
      "site": "00881684",
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
                "const:260:8"
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
      "definition_site": "008816d0",
      "incomplete_value": true,
      "site": "008816e0",
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
      "definition_site": "00881678",
      "incomplete_value": true,
      "site": "00881688",
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
      "00881618",
      "READ",
      [
        "storage",
        "002ba8ab",
        null,
        "string"
      ]
    ],
    [
      "0088161c",
      "DATA",
      [
        "storage",
        "0039b1d8",
        null,
        "dword"
      ]
    ],
    [
      "00881654",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ]
  ],
  "added": [
    [
      "00881618",
      "READ",
      [
        "storage",
        "002ba857",
        null,
        "string"
      ]
    ],
    [
      "0088161c",
      "DATA",
      [
        "storage",
        "0039b1d8",
        "fde_0039b1d8",
        "dword"
      ]
    ],
    [
      "00881654",
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
- 008815fc ["INT_ADD", "register:40f0:8", ["const:8815fc:8", "const:4:8"]]
- 008815fc ["CALL", null, ["ram:48ccf8:8"]]
+ 00881654 ["INT_ADD", "register:40f0:8", ["const:881654:8", "const:4:8"]]
+ 00881654 ["CALL", null, ["ram:48cd38:8"]]
- 00881634 ["INT_ADD", "register:40f0:8", ["const:881634:8", "const:4:8"]]
- 00881634 ["CALL", null, ["callee:00492d44:8"]]
+ 0088168c ["INT_ADD", "register:40f0:8", ["const:88168c:8", "const:4:8"]]
+ 0088168c ["CALL", null, ["callee:00492d44:8"]]
- 00881658 ["INT_ADD", "register:40f0:8", ["const:881658:8", "const:4:8"]]
- 00881658 ["CALL", null, ["ram:48ccf8:8"]]
+ 008816b0 ["INT_ADD", "register:40f0:8", ["const:8816b0:8", "const:4:8"]]
+ 008816b0 ["CALL", null, ["ram:48cd38:8"]]
~~~


<a id="compare-77e676dc9fcb5a6f8aac8c43a9c56328"></a>

### [`00881758`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00881/00881758.md) → [`008817b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00881/008817b0.md) FUN_008817b0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 28件 [`0043e94c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043e/0043e94c.md) [`0043f438`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043f/0043f438.md) [`0044f8e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044f/0044f8e0.md) [`0045440c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00454/0045440c.md) [`00456324`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00456/00456324.md)
- 新版 呼出元 0件  · 呼出先 28件 [`0043e98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e98c.md) [`0043f478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f478.md) [`0044f920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044f920.md) [`0045444c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00454/0045444c.md) [`00456364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00456/00456364.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.49% / 新版 95.49%

優先判定に残った影響 `call_target` 4件, `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008819c4",
      "incomplete_value": false,
      "site": "008819c4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088196c",
      "incomplete_value": false,
      "site": "0088196c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:f38:8"
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
      "definition_site": "00881a94",
      "incomplete_value": false,
      "site": "00881a98",
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
                "const:c65000:8"
              ],
              [
                "leaf",
                "const:600:8"
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
      "definition_site": "00881a3c",
      "incomplete_value": false,
      "site": "00881a40",
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
                "const:c65000:8"
              ],
              [
                "leaf",
                "const:530:8"
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
    "ordinal": 29,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008817f0",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00881798",
      "value": [
        "leaf",
        "ram:48ccf8:8"
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
      "008817ec",
      "DATA",
      [
        "storage",
        "0039b1d8",
        null,
        "dword"
      ]
    ],
    [
      "008817f0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "0088180c",
      "READ",
      [
        "storage",
        "002a15cd",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008817ec",
      "DATA",
      [
        "storage",
        "0039b1d8",
        "fde_0039b1d8",
        "dword"
      ]
    ],
    [
      "008817f0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "0088180c",
      "READ",
      [
        "storage",
        "002a1580",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00881798 ["INT_ADD", "register:40f0:8", ["const:881798:8", "const:4:8"]]
- 00881798 ["CALL", null, ["ram:48ccf8:8"]]
+ 008817f0 ["INT_ADD", "register:40f0:8", ["const:8817f0:8", "const:4:8"]]
+ 008817f0 ["CALL", null, ["ram:48cd38:8"]]
- 0088181c ["INT_ADD", "register:40f0:8", ["const:88181c:8", "const:4:8"]]
- 0088181c ["CALL", null, ["ram:48ccf8:8"]]
+ 00881874 ["INT_ADD", "register:40f0:8", ["const:881874:8", "const:4:8"]]
+ 00881874 ["CALL", null, ["ram:48cd38:8"]]
- 008818a4 ["INT_ADD", "register:40f0:8", ["const:8818a4:8", "const:4:8"]]
- 008818a4 ["CALL", null, ["callee:004820ec:8"]]
+ 008818fc ["INT_ADD", "register:40f0:8", ["const:8818fc:8", "const:4:8"]]
+ 008818fc ["CALL", null, ["callee:004820ec:8"]]
~~~


<a id="compare-53c4ceeef6ae7c463512b09eac2d2846"></a>

### [`00881c7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00881/00881c7c.md) → [`00881cd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00881/00881cd4.md) FUN_00881cd4

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
      "definition_site": "00881d10",
      "incomplete_value": true,
      "site": "00881d24",
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
      "definition_site": "00881cb8",
      "incomplete_value": true,
      "site": "00881ccc",
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
      "site": "00881d00",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00881ca8",
      "value": [
        "leaf",
        "ram:48ccf8:8"
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
      "site": "00881d64",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00881d0c",
      "value": [
        "leaf",
        "ram:48ccf8:8"
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
      "00881cfc",
      "DATA",
      [
        "storage",
        "0039b1d8",
        null,
        "dword"
      ]
    ],
    [
      "00881d00",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "00881d10",
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
      "00881cfc",
      "DATA",
      [
        "storage",
        "0039b1d8",
        "fde_0039b1d8",
        "dword"
      ]
    ],
    [
      "00881d00",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "00881d10",
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
- 00881ca8 ["INT_ADD", "register:40f0:8", ["const:881ca8:8", "const:4:8"]]
- 00881ca8 ["CALL", null, ["ram:48ccf8:8"]]
+ 00881d00 ["INT_ADD", "register:40f0:8", ["const:881d00:8", "const:4:8"]]
+ 00881d00 ["CALL", null, ["ram:48cd38:8"]]
- 00881d0c ["INT_ADD", "register:40f0:8", ["const:881d0c:8", "const:4:8"]]
- 00881d0c ["CALL", null, ["ram:48ccf8:8"]]
+ 00881d64 ["INT_ADD", "register:40f0:8", ["const:881d64:8", "const:4:8"]]
+ 00881d64 ["CALL", null, ["ram:48cd38:8"]]
- 00881c98 ["INT_ADD", "register:40f0:8", ["const:881c98:8", "const:4:8"]]
- 00881c98 ["CALL", null, ["callee:00851550:8"]]
+ 00881cf0 ["INT_ADD", "register:40f0:8", ["const:881cf0:8", "const:4:8"]]
+ 00881cf0 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-71e597c20e28876a23bd21113d765701"></a>

### [`00882440`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00882/00882440.md) → [`00882498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00882/00882498.md) FUN_00882498

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
      "definition_site": "008824a4",
      "incomplete_value": false,
      "site": "008824b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:7e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088244c",
      "incomplete_value": false,
      "site": "00882458",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
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
      "008824b0",
      "DATA",
      [
        "storage",
        "00c80718",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008824b0",
      "DATA",
      [
        "storage",
        "00c807e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088244c ["COPY", "tmp:0:8", ["const:718:8"]]
- 0088244c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0088244c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0088244c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 008824a4 ["COPY", "tmp:0:8", ["const:7e8:8"]]
+ 008824a4 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 008824a4 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 008824a4 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-7ba741a50d6dd05268285ac70160f7e3"></a>

### [`00882484`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00882/00882484.md) → [`008824dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00882/008824dc.md) FUN_008824dc

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
      "definition_site": "008824f4",
      "incomplete_value": false,
      "site": "00882500",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:7e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088249c",
      "incomplete_value": false,
      "site": "008824a8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:718:8"
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
      "00882500",
      "DATA",
      [
        "storage",
        "00c80718",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00882500",
      "DATA",
      [
        "storage",
        "00c807e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088249c ["COPY", "tmp:0:8", ["const:718:8"]]
- 0088249c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088249c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088249c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008824f4 ["COPY", "tmp:0:8", ["const:7e8:8"]]
+ 008824f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008824f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008824f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008824cc ["COPY", "register:0:8", ["register:4040:8"]]
- 008824cc ["INT_ADD", "register:40f0:8", ["const:8824cc:8", "const:4:8"]]
- 008824cc ["CALLIND", null, ["register:0:8"]]
+ 00882524 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00882524 ["INT_ADD", "register:40f0:8", ["const:882524:8", "const:4:8"]]
+ 00882524 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-3cbb40a0703216485e9355da9a7464c6"></a>

### [`008824e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00882/008824e0.md) → [`00882538`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00882/00882538.md) FUN_00882538

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.10% / 新版 93.10%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00882564",
      "incomplete_value": false,
      "site": "00882564",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:7e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088250c",
      "incomplete_value": false,
      "site": "0088250c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:718:8"
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
      "00882564",
      "DATA",
      [
        "storage",
        "00c80718",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00882564",
      "DATA",
      [
        "storage",
        "00c807e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008824f4 ["INT_ADD", "register:40f0:8", ["const:8824f4:8", "const:4:8"]]
- 008824f4 ["CALL", null, ["callee:00c57f60:8"]]
+ 0088254c ["INT_ADD", "register:40f0:8", ["const:88254c:8", "const:4:8"]]
+ 0088254c ["CALL", null, ["callee:00c57f60:8"]]
- 00882504 ["COPY", "tmp:0:8", ["const:718:8"]]
- 00882504 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00882504 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00882504 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088255c ["COPY", "tmp:0:8", ["const:7e8:8"]]
+ 0088255c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088255c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088255c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00882528 ["COPY", "register:0:8", ["register:4040:8"]]
- 00882528 ["INT_ADD", "register:40f0:8", ["const:882528:8", "const:4:8"]]
- 00882528 ["CALLIND", null, ["register:0:8"]]
+ 00882580 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00882580 ["INT_ADD", "register:40f0:8", ["const:882580:8", "const:4:8"]]
+ 00882580 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-fc47d9cc57c390c72b4284e170b1a345"></a>

### [`00882568`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00882/00882568.md) → [`008825c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00882/008825c0.md) FUN_008825c0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.10% / 新版 93.10%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008825dc",
      "incomplete_value": false,
      "site": "008825dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:7e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00882584",
      "incomplete_value": false,
      "site": "00882584",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:718:8"
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
      "008825dc",
      "DATA",
      [
        "storage",
        "00c80718",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008825dc",
      "DATA",
      [
        "storage",
        "00c807e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00882580 ["COPY", "tmp:0:8", ["const:718:8"]]
- 00882580 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00882580 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00882580 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008825d8 ["COPY", "tmp:0:8", ["const:7e8:8"]]
+ 008825d8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008825d8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008825d8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 008825a4 ["COPY", "register:0:8", ["register:4048:8"]]
- 008825a4 ["INT_ADD", "register:40f0:8", ["const:8825a4:8", "const:4:8"]]
- 008825a4 ["CALLIND", null, ["register:0:8"]]
+ 008825fc ["COPY", "register:0:8", ["register:4048:8"]]
+ 008825fc ["INT_ADD", "register:40f0:8", ["const:8825fc:8", "const:4:8"]]
+ 008825fc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-eb9b3bc5bdfa418279ca067826d0df46"></a>

### [`008826a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00882/008826a8.md) → [`00882700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00882/00882700.md) FUN_00882700

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
      "definition_site": "00882714",
      "incomplete_value": false,
      "site": "00882718",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:868:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008826bc",
      "incomplete_value": false,
      "site": "008826c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
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
      "00882718",
      "DATA",
      [
        "storage",
        "00c80798",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00882718",
      "DATA",
      [
        "storage",
        "00c80868",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008826b4 ["INT_ADD", "register:40f0:8", ["const:8826b4:8", "const:4:8"]]
- 008826b4 ["CALL", null, ["callee:00c57f60:8"]]
+ 0088270c ["INT_ADD", "register:40f0:8", ["const:88270c:8", "const:4:8"]]
+ 0088270c ["CALL", null, ["callee:00c57f60:8"]]
- 008826bc ["COPY", "tmp:0:8", ["const:798:8"]]
- 008826bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008826bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008826bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00882714 ["COPY", "tmp:0:8", ["const:868:8"]]
+ 00882714 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00882714 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00882714 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f23fbe76b2299c721df9cbf1fcf3daef"></a>

### [`008826cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00882/008826cc.md) → [`00882724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00882/00882724.md) FUN_00882724

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
      "definition_site": "00882728",
      "incomplete_value": false,
      "site": "0088272c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:868:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008826d0",
      "incomplete_value": false,
      "site": "008826d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
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
      "0088272c",
      "DATA",
      [
        "storage",
        "00c80798",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088272c",
      "DATA",
      [
        "storage",
        "00c80868",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008826d0 ["COPY", "tmp:0:8", ["const:798:8"]]
- 008826d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008826d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008826d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00882728 ["COPY", "tmp:0:8", ["const:868:8"]]
+ 00882728 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00882728 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00882728 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ed9e6e1781e3999dabfc32a5a1991a3c"></a>

### [`008826e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00882/008826e4.md) → [`0088273c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00882/0088273c.md) FUN_0088273c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00442b38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442b38.md) [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`00492f28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/00492f28.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00442b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442b78.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00492f68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492f68.md)

変更の種類 call, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 91.35% / 新版 91.35%

優先判定に残った影響 `call_target` 1件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00882778",
      "incomplete_value": true,
      "site": "00882780",
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
                "const:280:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00882720",
      "incomplete_value": true,
      "site": "00882728",
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
                "const:240:8"
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
      "definition_site": "00882774",
      "incomplete_value": true,
      "site": "00882784",
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
                "const:74a:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088271c",
      "incomplete_value": true,
      "site": "0088272c",
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
                "const:70a:8"
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
      "definition_site": "00882774",
      "incomplete_value": true,
      "site": "00882784",
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
      "definition_site": "0088271c",
      "incomplete_value": true,
      "site": "0088272c",
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
      "00882758",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "00882774",
      "READ",
      [
        "storage",
        "002b670a",
        null,
        "string"
      ]
    ],
    [
      "00882774",
      "READ",
      [
        "storage",
        "002b671a",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00882758",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "00882774",
      "READ",
      [
        "storage",
        "002b674a",
        null,
        "string"
      ]
    ],
    [
      "00882774",
      "READ",
      [
        "storage",
        "002b675a",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00882700 ["INT_ADD", "register:40f0:8", ["const:882700:8", "const:4:8"]]
- 00882700 ["CALL", null, ["ram:48ccf8:8"]]
+ 00882758 ["INT_ADD", "register:40f0:8", ["const:882758:8", "const:4:8"]]
+ 00882758 ["CALL", null, ["ram:48cd38:8"]]
- 00882790 ["INT_ADD", "register:40f0:8", ["const:882790:8", "const:4:8"]]
- 00882790 ["CALL", null, ["callee:0043bb60:8"]]
+ 008827e8 ["INT_ADD", "register:40f0:8", ["const:8827e8:8", "const:4:8"]]
+ 008827e8 ["CALL", null, ["callee:0043bb60:8"]]
- 0088270c ["INT_ADD", "register:40f0:8", ["const:88270c:8", "const:4:8"]]
- 0088270c ["CALL", null, ["callee:00c57f60:8"]]
+ 00882764 ["INT_ADD", "register:40f0:8", ["const:882764:8", "const:4:8"]]
+ 00882764 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-27f0fef01b0e16acb21863c67a78c2d3"></a>

### [`00882964`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00882/00882964.md) → [`008829bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00882/008829bc.md) FUN_008829bc

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
      "definition_site": "008829d0",
      "incomplete_value": false,
      "site": "008829d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:8e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00882978",
      "incomplete_value": false,
      "site": "0088297c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
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
      "008829d4",
      "DATA",
      [
        "storage",
        "00c80818",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008829d4",
      "DATA",
      [
        "storage",
        "00c808e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00882970 ["INT_ADD", "register:40f0:8", ["const:882970:8", "const:4:8"]]
- 00882970 ["CALL", null, ["callee:00c57f60:8"]]
+ 008829c8 ["INT_ADD", "register:40f0:8", ["const:8829c8:8", "const:4:8"]]
+ 008829c8 ["CALL", null, ["callee:00c57f60:8"]]
- 00882978 ["COPY", "tmp:0:8", ["const:818:8"]]
- 00882978 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00882978 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00882978 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008829d0 ["COPY", "tmp:0:8", ["const:8e8:8"]]
+ 008829d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008829d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008829d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-75e633bb3b73707ce924c48e70f83b02"></a>

### [`00882988`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00882/00882988.md) → [`008829e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00882/008829e0.md) FUN_008829e0

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
      "definition_site": "008829e4",
      "incomplete_value": false,
      "site": "008829e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:8e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088298c",
      "incomplete_value": false,
      "site": "00882990",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
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
      "008829e8",
      "DATA",
      [
        "storage",
        "00c80818",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008829e8",
      "DATA",
      [
        "storage",
        "00c808e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088298c ["COPY", "tmp:0:8", ["const:818:8"]]
- 0088298c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088298c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088298c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008829e4 ["COPY", "tmp:0:8", ["const:8e8:8"]]
+ 008829e4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008829e4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008829e4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-950105beed5cfe59ef94bf72bdd4d534"></a>

### [`008829a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00882/008829a0.md) → [`008829f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00882/008829f8.md) FUN_008829f8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00442b38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442b38.md) [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`00492f28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/00492f28.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00442b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442b78.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00492f68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492f68.md)

変更の種類 call, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 91.35% / 新版 91.35%

優先判定に残った影響 `call_target` 1件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00882a34",
      "incomplete_value": true,
      "site": "00882a3c",
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
                "const:280:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008829dc",
      "incomplete_value": true,
      "site": "008829e4",
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
                "const:240:8"
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
      "definition_site": "00882a30",
      "incomplete_value": true,
      "site": "00882a40",
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
                "const:4fd:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008829d8",
      "incomplete_value": true,
      "site": "008829e8",
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
                "const:551:8"
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
      "definition_site": "00882a30",
      "incomplete_value": true,
      "site": "00882a40",
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
      "definition_site": "008829d8",
      "incomplete_value": true,
      "site": "008829e8",
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
      "00882a14",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "00882a30",
      "READ",
      [
        "storage",
        "002b9551",
        null,
        "string"
      ]
    ],
    [
      "00882a30",
      "READ",
      [
        "storage",
        "002b9561",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00882a14",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "00882a30",
      "READ",
      [
        "storage",
        "002b94fd",
        null,
        "string"
      ]
    ],
    [
      "00882a30",
      "READ",
      [
        "storage",
        "002b950d",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008829bc ["INT_ADD", "register:40f0:8", ["const:8829bc:8", "const:4:8"]]
- 008829bc ["CALL", null, ["ram:48ccf8:8"]]
+ 00882a14 ["INT_ADD", "register:40f0:8", ["const:882a14:8", "const:4:8"]]
+ 00882a14 ["CALL", null, ["ram:48cd38:8"]]
- 00882a4c ["INT_ADD", "register:40f0:8", ["const:882a4c:8", "const:4:8"]]
- 00882a4c ["CALL", null, ["callee:0043bb60:8"]]
+ 00882aa4 ["INT_ADD", "register:40f0:8", ["const:882aa4:8", "const:4:8"]]
+ 00882aa4 ["CALL", null, ["callee:0043bb60:8"]]
- 008829c8 ["INT_ADD", "register:40f0:8", ["const:8829c8:8", "const:4:8"]]
- 008829c8 ["CALL", null, ["callee:00c57f60:8"]]
+ 00882a20 ["INT_ADD", "register:40f0:8", ["const:882a20:8", "const:4:8"]]
+ 00882a20 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-29a6baf4557c34db8701eb1c3ba7c684"></a>

### [`00882c1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00882/00882c1c.md) → [`00882c74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00882/00882c74.md) FUN_00882c74

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00882c7c",
      "incomplete_value": false,
      "site": "00882c80",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:968:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00882c24",
      "incomplete_value": false,
      "site": "00882c28",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
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
      "00882c80",
      "DATA",
      [
        "storage",
        "00c80898",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00882c80",
      "DATA",
      [
        "storage",
        "00c80968",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00882c24 ["COPY", "tmp:0:8", ["const:898:8"]]
- 00882c24 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00882c24 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00882c24 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00882c7c ["COPY", "tmp:0:8", ["const:968:8"]]
+ 00882c7c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00882c7c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00882c7c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-ef922a952bc96ee779bcea927ac3f912"></a>

### [`00882c3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00882/00882c3c.md) → [`00882c94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00882/00882c94.md) FUN_00882c94

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
      "definition_site": "00882c9c",
      "incomplete_value": false,
      "site": "00882ca0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:968:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00882c44",
      "incomplete_value": false,
      "site": "00882c48",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
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
      "00882ca0",
      "DATA",
      [
        "storage",
        "00c80898",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00882ca0",
      "DATA",
      [
        "storage",
        "00c80968",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00882c44 ["COPY", "tmp:0:8", ["const:898:8"]]
- 00882c44 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00882c44 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00882c44 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00882c9c ["COPY", "tmp:0:8", ["const:968:8"]]
+ 00882c9c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00882c9c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00882c9c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00882c68 ["INT_ADD", "register:40f0:8", ["const:882c68:8", "const:4:8"]]
- 00882c68 ["CALL", null, ["callee:00c57f80:8"]]
+ 00882cc0 ["INT_ADD", "register:40f0:8", ["const:882cc0:8", "const:4:8"]]
+ 00882cc0 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-c40e24a555571c7f0d9c69b375762c33"></a>

### [`00882c7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00882/00882c7c.md) → [`00882cd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00882/00882cd4.md) FUN_00882cd4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.67% / 新版 91.67%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00882d00",
      "incomplete_value": false,
      "site": "00882d00",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:968:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00882ca8",
      "incomplete_value": false,
      "site": "00882ca8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:898:8"
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
      "00882d00",
      "DATA",
      [
        "storage",
        "00c80898",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00882d00",
      "DATA",
      [
        "storage",
        "00c80968",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00882c90 ["INT_ADD", "register:40f0:8", ["const:882c90:8", "const:4:8"]]
- 00882c90 ["CALL", null, ["callee:00c57f60:8"]]
+ 00882ce8 ["INT_ADD", "register:40f0:8", ["const:882ce8:8", "const:4:8"]]
+ 00882ce8 ["CALL", null, ["callee:00c57f60:8"]]
- 00882ca0 ["COPY", "tmp:0:8", ["const:898:8"]]
- 00882ca0 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 00882ca0 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 00882ca0 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 00882cf8 ["COPY", "tmp:0:8", ["const:968:8"]]
+ 00882cf8 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 00882cf8 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 00882cf8 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 00882cc8 ["INT_ADD", "register:40f0:8", ["const:882cc8:8", "const:4:8"]]
- 00882cc8 ["CALL", null, ["callee:0043bb60:8"]]
+ 00882d20 ["INT_ADD", "register:40f0:8", ["const:882d20:8", "const:4:8"]]
+ 00882d20 ["CALL", null, ["callee:0043bb60:8"]]
~~~


<a id="compare-60b1a091b92b9546b2e5efe4c91084a1"></a>

### [`00882cf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00882/00882cf0.md) → [`00882d48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00882/00882d48.md) FUN_00882d48

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
      "definition_site": "00882d50",
      "incomplete_value": false,
      "site": "00882d50",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:968:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00882cf8",
      "incomplete_value": false,
      "site": "00882cf8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
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
      "00882d50",
      "DATA",
      [
        "storage",
        "00c80898",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00882d50",
      "DATA",
      [
        "storage",
        "00c80968",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00882cf4 ["COPY", "tmp:0:8", ["const:898:8"]]
- 00882cf4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00882cf4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00882cf4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00882d4c ["COPY", "tmp:0:8", ["const:968:8"]]
+ 00882d4c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00882d4c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00882d4c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-61e29f017955be8bc3c45d45117ecf38"></a>

### [`00882d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00882/00882d74.md) → [`00882dcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00882/00882dcc.md) FUN_00882dcc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`00492f28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/00492f28.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00492f68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492f68.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.77% / 新版 96.77%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00882df0",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00882d98",
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
      "00882df0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ]
  ],
  "added": [
    [
      "00882df0",
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
- 00882d98 ["INT_ADD", "register:40f0:8", ["const:882d98:8", "const:4:8"]]
- 00882d98 ["CALL", null, ["ram:48ccf8:8"]]
+ 00882df0 ["INT_ADD", "register:40f0:8", ["const:882df0:8", "const:4:8"]]
+ 00882df0 ["CALL", null, ["ram:48cd38:8"]]
- 00882da8 ["INT_ADD", "register:40f0:8", ["const:882da8:8", "const:4:8"]]
- 00882da8 ["CALL", null, ["callee:0048ce94:8"]]
+ 00882e00 ["INT_ADD", "register:40f0:8", ["const:882e00:8", "const:4:8"]]
+ 00882e00 ["CALL", null, ["callee:0048ce94:8"]]
- 00882db4 ["INT_ADD", "register:40f0:8", ["const:882db4:8", "const:4:8"]]
- 00882db4 ["CALL", null, ["callee:00492f68:8"]]
+ 00882e0c ["INT_ADD", "register:40f0:8", ["const:882e0c:8", "const:4:8"]]
+ 00882e0c ["CALL", null, ["callee:00492f68:8"]]
~~~


<a id="compare-2257bbae22cc237413563293e3baed85"></a>

### [`00882e48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00882/00882e48.md) → [`00882ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00882/00882ea0.md) FUN_00882ea0

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
      "definition_site": "00882eb4",
      "incomplete_value": false,
      "site": "00882eb8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:9e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00882e5c",
      "incomplete_value": false,
      "site": "00882e60",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:918:8"
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
      "00882eb8",
      "DATA",
      [
        "storage",
        "00c80918",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00882eb8",
      "DATA",
      [
        "storage",
        "00c809e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00882e54 ["INT_ADD", "register:40f0:8", ["const:882e54:8", "const:4:8"]]
- 00882e54 ["CALL", null, ["callee:00c57f60:8"]]
+ 00882eac ["INT_ADD", "register:40f0:8", ["const:882eac:8", "const:4:8"]]
+ 00882eac ["CALL", null, ["callee:00c57f60:8"]]
- 00882e5c ["COPY", "tmp:0:8", ["const:918:8"]]
- 00882e5c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00882e5c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00882e5c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00882eb4 ["COPY", "tmp:0:8", ["const:9e8:8"]]
+ 00882eb4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00882eb4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00882eb4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2915919fa9651190afc34dba168aa4bc"></a>

### [`00882e6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00882/00882e6c.md) → [`00882ec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00882/00882ec4.md) FUN_00882ec4

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
      "definition_site": "00882ec8",
      "incomplete_value": false,
      "site": "00882ecc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:9e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00882e70",
      "incomplete_value": false,
      "site": "00882e74",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
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
      "00882ecc",
      "DATA",
      [
        "storage",
        "00c80918",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00882ecc",
      "DATA",
      [
        "storage",
        "00c809e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00882e70 ["COPY", "tmp:0:8", ["const:918:8"]]
- 00882e70 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00882e70 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00882e70 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00882ec8 ["COPY", "tmp:0:8", ["const:9e8:8"]]
+ 00882ec8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00882ec8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00882ec8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e50394d9cabf2faf9a521b3c83127ee2"></a>

### [`00882e84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00882/00882e84.md) → [`00882edc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00882/00882edc.md) FUN_00882edc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00442b38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442b38.md) [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`00492f28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/00492f28.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00442b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442b78.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00492f68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492f68.md)

変更の種類 call, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 93.20% / 新版 93.20%

優先判定に残った影響 `call_target` 1件, `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00882f14",
      "incomplete_value": true,
      "site": "00882f28",
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
      "definition_site": "00882ebc",
      "incomplete_value": true,
      "site": "00882ed0",
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
    "ordinal": 7,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00882f20",
      "incomplete_value": true,
      "site": "00882f2c",
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
                "const:bec:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00882ec8",
      "incomplete_value": true,
      "site": "00882ed4",
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
                "const:c40:8"
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
      "definition_site": "00882f20",
      "incomplete_value": true,
      "site": "00882f2c",
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
      "definition_site": "00882ec8",
      "incomplete_value": true,
      "site": "00882ed4",
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
      "00882ef8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "00882f14",
      "READ",
      [
        "storage",
        "002c2690",
        null,
        null
      ]
    ],
    [
      "00882f20",
      "READ",
      [
        "storage",
        "002bcc40",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00882ef8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "00882f14",
      "READ",
      [
        "storage",
        "002c26d0",
        null,
        null
      ]
    ],
    [
      "00882f20",
      "READ",
      [
        "storage",
        "002bcbec",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00882ea0 ["INT_ADD", "register:40f0:8", ["const:882ea0:8", "const:4:8"]]
- 00882ea0 ["CALL", null, ["ram:48ccf8:8"]]
+ 00882ef8 ["INT_ADD", "register:40f0:8", ["const:882ef8:8", "const:4:8"]]
+ 00882ef8 ["CALL", null, ["ram:48cd38:8"]]
- 00882f2c ["INT_ADD", "register:40f0:8", ["const:882f2c:8", "const:4:8"]]
- 00882f2c ["CALL", null, ["callee:0043bb60:8"]]
+ 00882f84 ["INT_ADD", "register:40f0:8", ["const:882f84:8", "const:4:8"]]
+ 00882f84 ["CALL", null, ["callee:0043bb60:8"]]
- 00882eac ["INT_ADD", "register:40f0:8", ["const:882eac:8", "const:4:8"]]
- 00882eac ["CALL", null, ["callee:00c57f60:8"]]
+ 00882f04 ["INT_ADD", "register:40f0:8", ["const:882f04:8", "const:4:8"]]
+ 00882f04 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-f1c45a758e57f177daca895d197194f2"></a>

### [`00883100`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00883/00883100.md) → [`00883158`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00883/00883158.md) FUN_00883158

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
      "definition_site": "00883178",
      "incomplete_value": false,
      "site": "0088317c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:a68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00883120",
      "incomplete_value": false,
      "site": "00883124",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
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
      "0088317c",
      "DATA",
      [
        "storage",
        "00c80998",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088317c",
      "DATA",
      [
        "storage",
        "00c80a68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00883114 ["INT_ADD", "register:40f0:8", ["const:883114:8", "const:4:8"]]
- 00883114 ["CALL", null, ["callee:00c57f60:8"]]
+ 0088316c ["INT_ADD", "register:40f0:8", ["const:88316c:8", "const:4:8"]]
+ 0088316c ["CALL", null, ["callee:00c57f60:8"]]
- 00883120 ["COPY", "tmp:0:8", ["const:998:8"]]
- 00883120 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00883120 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00883120 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00883178 ["COPY", "tmp:0:8", ["const:a68:8"]]
+ 00883178 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00883178 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00883178 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-570fc23fddd0dee794c130337b53d7b0"></a>

### [`00883138`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00883/00883138.md) → [`00883190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00883/00883190.md) FUN_00883190

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
      "definition_site": "00883198",
      "incomplete_value": false,
      "site": "0088319c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:a68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00883140",
      "incomplete_value": false,
      "site": "00883144",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
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
      "0088319c",
      "DATA",
      [
        "storage",
        "00c80998",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088319c",
      "DATA",
      [
        "storage",
        "00c80a68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00883140 ["COPY", "tmp:0:8", ["const:998:8"]]
- 00883140 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00883140 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00883140 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00883198 ["COPY", "tmp:0:8", ["const:a68:8"]]
+ 00883198 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00883198 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00883198 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-4a6225b8bcfead630de4c516fc2aa0d7"></a>

### [`00883158`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00883/00883158.md) → [`008831b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00883/008831b0.md) FUN_008831b0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 12件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00442b38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442b38.md) [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`004932dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00493/004932dc.md)
- 新版 呼出元 0件  · 呼出先 12件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00442b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442b78.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0049331c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/0049331c.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.88% / 新版 93.88%

優先判定に残った影響 `call_target` 1件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00883210",
      "incomplete_value": true,
      "site": "00883210",
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
                "const:2a1000:8"
              ],
              [
                "leaf",
                "const:576:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008831b8",
      "incomplete_value": true,
      "site": "008831b8",
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
                "const:2a1000:8"
              ],
              [
                "leaf",
                "const:5c3:8"
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
      "definition_site": "00883218",
      "incomplete_value": true,
      "site": "00883218",
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
                "const:2af000:8"
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
      "definition_site": "008831c0",
      "incomplete_value": true,
      "site": "008831c0",
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
                "const:2af000:8"
              ],
              [
                "leaf",
                "const:fc2:8"
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
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00883328",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008832d0",
      "value": [
        "leaf",
        "ram:48ccf8:8"
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
      "00883204",
      "READ",
      [
        "storage",
        "002a15c3",
        null,
        "string"
      ]
    ],
    [
      "00883208",
      "READ",
      [
        "storage",
        "002affc2",
        null,
        "string"
      ]
    ],
    [
      "00883328",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ]
  ],
  "added": [
    [
      "00883204",
      "READ",
      [
        "storage",
        "002a1576",
        null,
        "string"
      ]
    ],
    [
      "00883208",
      "READ",
      [
        "storage",
        "002aff66",
        null,
        "string"
      ]
    ],
    [
      "00883328",
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
- 00883218 ["INT_ADD", "register:40f0:8", ["const:883218:8", "const:4:8"]]
- 00883218 ["CALL", null, ["callee:0043bb60:8"]]
+ 00883270 ["INT_ADD", "register:40f0:8", ["const:883270:8", "const:4:8"]]
+ 00883270 ["CALL", null, ["callee:0043bb60:8"]]
- 008832d0 ["INT_ADD", "register:40f0:8", ["const:8832d0:8", "const:4:8"]]
- 008832d0 ["CALL", null, ["ram:48ccf8:8"]]
+ 00883328 ["INT_ADD", "register:40f0:8", ["const:883328:8", "const:4:8"]]
+ 00883328 ["CALL", null, ["ram:48cd38:8"]]
- 00883194 ["COPY", "tmp:0:8", ["const:fc2:8"]]
- 00883194 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00883194 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00883194 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008831ec ["COPY", "tmp:0:8", ["const:f66:8"]]
+ 008831ec ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008831ec ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008831ec ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-275a710d83126cc469c03f704eea793b"></a>

### [`00883618`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00883/00883618.md) → [`00883670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00883/00883670.md) FUN_00883670

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
      "definition_site": "00883684",
      "incomplete_value": false,
      "site": "00883688",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:ad8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088362c",
      "incomplete_value": false,
      "site": "00883630",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:a08:8"
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
      "00883688",
      "DATA",
      [
        "storage",
        "00c80a08",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00883688",
      "DATA",
      [
        "storage",
        "00c80ad8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00883624 ["INT_ADD", "register:40f0:8", ["const:883624:8", "const:4:8"]]
- 00883624 ["CALL", null, ["callee:00c57f60:8"]]
+ 0088367c ["INT_ADD", "register:40f0:8", ["const:88367c:8", "const:4:8"]]
+ 0088367c ["CALL", null, ["callee:00c57f60:8"]]
- 0088362c ["COPY", "tmp:0:8", ["const:a08:8"]]
- 0088362c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088362c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088362c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00883684 ["COPY", "tmp:0:8", ["const:ad8:8"]]
+ 00883684 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00883684 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00883684 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7d7406ef38c3e9e1745cee5f2a66b881"></a>

### [`0088363c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00883/0088363c.md) → [`00883694`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00883/00883694.md) FUN_00883694

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
      "definition_site": "00883698",
      "incomplete_value": false,
      "site": "0088369c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:ad8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00883640",
      "incomplete_value": false,
      "site": "00883644",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:a08:8"
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
      "0088369c",
      "DATA",
      [
        "storage",
        "00c80a08",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088369c",
      "DATA",
      [
        "storage",
        "00c80ad8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00883640 ["COPY", "tmp:0:8", ["const:a08:8"]]
- 00883640 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00883640 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00883640 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00883698 ["COPY", "tmp:0:8", ["const:ad8:8"]]
+ 00883698 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00883698 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00883698 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9619a0032c47b26e4d610265c7e431e5"></a>

### [`00883654`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00883/00883654.md) → [`008836ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00883/008836ac.md) FUN_008836ac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`0048dc60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048d/0048dc60.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0048dca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048d/0048dca0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.24% / 新版 90.24%

優先判定に残った影響 `call_target` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008836f0",
      "incomplete_value": true,
      "site": "008836f0",
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
                "const:2a9000:8"
              ],
              [
                "leaf",
                "const:e83:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00883698",
      "incomplete_value": true,
      "site": "00883698",
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
                "const:2a9000:8"
              ],
              [
                "leaf",
                "const:edf:8"
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
      "site": "008836c8",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00883670",
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
      "008836c8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "008836dc",
      "READ",
      [
        "storage",
        "002a9edf",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008836c8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "008836dc",
      "READ",
      [
        "storage",
        "002a9e83",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00883670 ["INT_ADD", "register:40f0:8", ["const:883670:8", "const:4:8"]]
- 00883670 ["CALL", null, ["ram:48ccf8:8"]]
+ 008836c8 ["INT_ADD", "register:40f0:8", ["const:8836c8:8", "const:4:8"]]
+ 008836c8 ["CALL", null, ["ram:48cd38:8"]]
- 0088367c ["COPY", "tmp:0:8", ["const:edf:8"]]
- 0088367c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0088367c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0088367c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008836d4 ["COPY", "tmp:0:8", ["const:e83:8"]]
+ 008836d4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008836d4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008836d4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 008836a4 ["INT_ADD", "register:40f0:8", ["const:8836a4:8", "const:4:8"]]
- 008836a4 ["CALL", null, ["callee:0048ce94:8"]]
+ 008836fc ["INT_ADD", "register:40f0:8", ["const:8836fc:8", "const:4:8"]]
+ 008836fc ["CALL", null, ["callee:0048ce94:8"]]
~~~


<a id="compare-37c31ccde5261162a86054005d4917ec"></a>

### [`00883764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00883/00883764.md) → [`008837bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00883/008837bc.md) FUN_008837bc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008837d4",
      "incomplete_value": false,
      "site": "008837e0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:b68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088377c",
      "incomplete_value": false,
      "site": "00883788",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:a98:8"
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
      "008837e0",
      "DATA",
      [
        "storage",
        "00c80a98",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008837e0",
      "DATA",
      [
        "storage",
        "00c80b68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008837e0 ["COPY", "register:0:8", ["register:4040:8"]]
- 008837e0 ["INT_ADD", "register:40f0:8", ["const:8837e0:8", "const:4:8"]]
- 008837e0 ["CALLIND", null, ["register:0:8"]]
+ 00883838 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00883838 ["INT_ADD", "register:40f0:8", ["const:883838:8", "const:4:8"]]
+ 00883838 ["CALLIND", null, ["register:0:8"]]
- 0088377c ["COPY", "tmp:0:8", ["const:a98:8"]]
- 0088377c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088377c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088377c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008837d4 ["COPY", "tmp:0:8", ["const:b68:8"]]
+ 008837d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008837d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008837d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008837ac ["COPY", "register:0:8", ["register:4040:8"]]
- 008837ac ["INT_ADD", "register:40f0:8", ["const:8837ac:8", "const:4:8"]]
- 008837ac ["CALLIND", null, ["register:0:8"]]
+ 00883804 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00883804 ["INT_ADD", "register:40f0:8", ["const:883804:8", "const:4:8"]]
+ 00883804 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-18e552168a4c2318f6b97d3e17efb52c"></a>

### [`008837f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00883/008837f4.md) → [`0088384c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00883/0088384c.md) FUN_0088384c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

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
      "definition_site": "00883864",
      "incomplete_value": false,
      "site": "00883870",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:b68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088380c",
      "incomplete_value": false,
      "site": "00883818",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:a98:8"
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
      "00883870",
      "DATA",
      [
        "storage",
        "00c80a98",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00883870",
      "DATA",
      [
        "storage",
        "00c80b68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088380c ["COPY", "tmp:0:8", ["const:a98:8"]]
- 0088380c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088380c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088380c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00883864 ["COPY", "tmp:0:8", ["const:b68:8"]]
+ 00883864 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00883864 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00883864 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0088383c ["COPY", "register:0:8", ["register:4040:8"]]
- 0088383c ["INT_ADD", "register:40f0:8", ["const:88383c:8", "const:4:8"]]
- 0088383c ["CALLIND", null, ["register:0:8"]]
+ 00883894 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00883894 ["INT_ADD", "register:40f0:8", ["const:883894:8", "const:4:8"]]
+ 00883894 ["CALLIND", null, ["register:0:8"]]
- 00883850 ["INT_ADD", "register:40f0:8", ["const:883850:8", "const:4:8"]]
- 00883850 ["CALL", null, ["callee:00c53da0:8"]]
+ 008838a8 ["INT_ADD", "register:40f0:8", ["const:8838a8:8", "const:4:8"]]
+ 008838a8 ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-8166997e213ced220fca2110df7fca0d"></a>

### [`00883930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00883/00883930.md) → [`00883988`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00883/00883988.md) FUN_00883988

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.29% / 新版 94.29%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008839a4",
      "incomplete_value": false,
      "site": "008839b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:b68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088394c",
      "incomplete_value": false,
      "site": "00883958",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:a98:8"
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
      "008839b0",
      "DATA",
      [
        "storage",
        "00c80a98",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008839b0",
      "DATA",
      [
        "storage",
        "00c80b68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088394c ["COPY", "tmp:0:8", ["const:a98:8"]]
- 0088394c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0088394c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0088394c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008839a4 ["COPY", "tmp:0:8", ["const:b68:8"]]
+ 008839a4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008839a4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008839a4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0088396c ["INT_ADD", "register:40f0:8", ["const:88396c:8", "const:4:8"]]
- 0088396c ["CALL", null, ["callee:00c53d70:8"]]
+ 008839c4 ["INT_ADD", "register:40f0:8", ["const:8839c4:8", "const:4:8"]]
+ 008839c4 ["CALL", null, ["callee:00c53d70:8"]]
- 0088398c ["COPY", "register:0:8", ["register:4040:8"]]
- 0088398c ["INT_ADD", "register:40f0:8", ["const:88398c:8", "const:4:8"]]
- 0088398c ["CALLIND", null, ["register:0:8"]]
+ 008839e4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008839e4 ["INT_ADD", "register:40f0:8", ["const:8839e4:8", "const:4:8"]]
+ 008839e4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-93e38df39157901d18e7fd454251f370"></a>

### [`00883ad4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00883/00883ad4.md) → [`00883b2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00883/00883b2c.md) FUN_00883b2c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 11件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`007687f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00768/007687f0.md) [`00768be8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00768/00768be8.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00880cf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00880/00880cf4.md)
- 新版 呼出元 0件  · 呼出先 11件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00768848`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00768/00768848.md) [`00768c40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00768/00768c40.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00880d4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00880/00880d4c.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_target` 1件, `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00883d28",
      "incomplete_value": false,
      "site": "00883d30",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:c68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00883cd0",
      "incomplete_value": false,
      "site": "00883cd8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:b98:8"
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
      "definition_site": "00883dd4",
      "incomplete_value": false,
      "site": "00883ddc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:be8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00883d7c",
      "incomplete_value": false,
      "site": "00883d84",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:b18:8"
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
      "site": "00883bd8",
      "value": [
        "leaf",
        "ram:768c40:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00883b80",
      "value": [
        "leaf",
        "ram:768be8:8"
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
      "00883bd8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00768be8"
      ]
    ],
    [
      "00883d30",
      "DATA",
      [
        "storage",
        "00c80b98",
        null,
        "undefined *"
      ]
    ],
    [
      "00883ddc",
      "DATA",
      [
        "storage",
        "00c80b18",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00883bd8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00768c40"
      ]
    ],
    [
      "00883d30",
      "DATA",
      [
        "storage",
        "00c80c68",
        null,
        "undefined *"
      ]
    ],
    [
      "00883ddc",
      "DATA",
      [
        "storage",
        "00c80be8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00883b80 ["INT_ADD", "register:40f0:8", ["const:883b80:8", "const:4:8"]]
- 00883b80 ["CALL", null, ["ram:768be8:8"]]
+ 00883bd8 ["INT_ADD", "register:40f0:8", ["const:883bd8:8", "const:4:8"]]
+ 00883bd8 ["CALL", null, ["ram:768c40:8"]]
- 00883b3c ["COPY", "register:0:8", ["register:4040:8"]]
- 00883b3c ["INT_ADD", "register:40f0:8", ["const:883b3c:8", "const:4:8"]]
- 00883b3c ["CALLIND", null, ["register:0:8"]]
+ 00883b94 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00883b94 ["INT_ADD", "register:40f0:8", ["const:883b94:8", "const:4:8"]]
+ 00883b94 ["CALLIND", null, ["register:0:8"]]
- 00883b78 ["INT_ADD", "register:40f0:8", ["const:883b78:8", "const:4:8"]]
- 00883b78 ["CALL", null, ["callee:00851550:8"]]
+ 00883bd0 ["INT_ADD", "register:40f0:8", ["const:883bd0:8", "const:4:8"]]
+ 00883bd0 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-2724aa7294f6464c312ea251bd0c42c0"></a>

### [`008840ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00884/008840ac.md) → [`00884104`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00884/00884104.md) FUN_00884104

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088411c",
      "incomplete_value": false,
      "site": "00884128",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:be8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008840c4",
      "incomplete_value": false,
      "site": "008840d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:b18:8"
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
      "00884128",
      "DATA",
      [
        "storage",
        "00c80b18",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00884128",
      "DATA",
      [
        "storage",
        "00c80be8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00884128 ["COPY", "register:0:8", ["register:4040:8"]]
- 00884128 ["INT_ADD", "register:40f0:8", ["const:884128:8", "const:4:8"]]
- 00884128 ["CALLIND", null, ["register:0:8"]]
+ 00884180 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00884180 ["INT_ADD", "register:40f0:8", ["const:884180:8", "const:4:8"]]
+ 00884180 ["CALLIND", null, ["register:0:8"]]
- 008840c4 ["COPY", "tmp:0:8", ["const:b18:8"]]
- 008840c4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008840c4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008840c4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088411c ["COPY", "tmp:0:8", ["const:be8:8"]]
+ 0088411c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088411c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088411c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008840f4 ["COPY", "register:0:8", ["register:4040:8"]]
- 008840f4 ["INT_ADD", "register:40f0:8", ["const:8840f4:8", "const:4:8"]]
- 008840f4 ["CALLIND", null, ["register:0:8"]]
+ 0088414c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0088414c ["INT_ADD", "register:40f0:8", ["const:88414c:8", "const:4:8"]]
+ 0088414c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-91631dc2386b2b64197eb9d973033700"></a>

### [`0088413c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00884/0088413c.md) → [`00884194`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00884/00884194.md) FUN_00884194

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

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
      "definition_site": "008841ac",
      "incomplete_value": false,
      "site": "008841b8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:be8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00884154",
      "incomplete_value": false,
      "site": "00884160",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:b18:8"
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
      "008841b8",
      "DATA",
      [
        "storage",
        "00c80b18",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008841b8",
      "DATA",
      [
        "storage",
        "00c80be8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00884154 ["COPY", "tmp:0:8", ["const:b18:8"]]
- 00884154 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00884154 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00884154 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008841ac ["COPY", "tmp:0:8", ["const:be8:8"]]
+ 008841ac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008841ac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008841ac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00884184 ["COPY", "register:0:8", ["register:4040:8"]]
- 00884184 ["INT_ADD", "register:40f0:8", ["const:884184:8", "const:4:8"]]
- 00884184 ["CALLIND", null, ["register:0:8"]]
+ 008841dc ["COPY", "register:0:8", ["register:4040:8"]]
+ 008841dc ["INT_ADD", "register:40f0:8", ["const:8841dc:8", "const:4:8"]]
+ 008841dc ["CALLIND", null, ["register:0:8"]]
- 00884198 ["INT_ADD", "register:40f0:8", ["const:884198:8", "const:4:8"]]
- 00884198 ["CALL", null, ["callee:00c53da0:8"]]
+ 008841f0 ["INT_ADD", "register:40f0:8", ["const:8841f0:8", "const:4:8"]]
+ 008841f0 ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-628906a2c187955356cca0b85c0d40b3"></a>

### [`008841c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00884/008841c8.md) → [`00884220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00884/00884220.md) FUN_00884220

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.59% / 新版 94.59%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00884248",
      "incomplete_value": false,
      "site": "0088424c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:be8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008841f0",
      "incomplete_value": false,
      "site": "008841f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:b18:8"
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
      "0088424c",
      "DATA",
      [
        "storage",
        "00c80b18",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088424c",
      "DATA",
      [
        "storage",
        "00c80be8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008841dc ["INT_ADD", "register:40f0:8", ["const:8841dc:8", "const:4:8"]]
- 008841dc ["CALL", null, ["callee:00c57f60:8"]]
+ 00884234 ["INT_ADD", "register:40f0:8", ["const:884234:8", "const:4:8"]]
+ 00884234 ["CALL", null, ["callee:00c57f60:8"]]
- 008841f0 ["COPY", "tmp:0:8", ["const:b18:8"]]
- 008841f0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008841f0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008841f0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00884248 ["COPY", "tmp:0:8", ["const:be8:8"]]
+ 00884248 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00884248 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00884248 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0088420c ["INT_ADD", "register:40f0:8", ["const:88420c:8", "const:4:8"]]
- 0088420c ["CALL", null, ["callee:00c53d70:8"]]
+ 00884264 ["INT_ADD", "register:40f0:8", ["const:884264:8", "const:4:8"]]
+ 00884264 ["CALL", null, ["callee:00c53d70:8"]]
~~~


<a id="compare-2966c1a7991681e057b974577e2ea66a"></a>

### [`00884278`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00884/00884278.md) → [`008842d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00884/008842d0.md) FUN_008842d0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.29% / 新版 94.29%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008842ec",
      "incomplete_value": false,
      "site": "008842f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:be8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00884294",
      "incomplete_value": false,
      "site": "008842a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:b18:8"
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
      "008842f8",
      "DATA",
      [
        "storage",
        "00c80b18",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008842f8",
      "DATA",
      [
        "storage",
        "00c80be8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00884294 ["COPY", "tmp:0:8", ["const:b18:8"]]
- 00884294 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00884294 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00884294 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008842ec ["COPY", "tmp:0:8", ["const:be8:8"]]
+ 008842ec ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008842ec ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008842ec ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 008842b4 ["INT_ADD", "register:40f0:8", ["const:8842b4:8", "const:4:8"]]
- 008842b4 ["CALL", null, ["callee:00c53d70:8"]]
+ 0088430c ["INT_ADD", "register:40f0:8", ["const:88430c:8", "const:4:8"]]
+ 0088430c ["CALL", null, ["callee:00c53d70:8"]]
- 008842d4 ["COPY", "register:0:8", ["register:4040:8"]]
- 008842d4 ["INT_ADD", "register:40f0:8", ["const:8842d4:8", "const:4:8"]]
- 008842d4 ["CALLIND", null, ["register:0:8"]]
+ 0088432c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0088432c ["INT_ADD", "register:40f0:8", ["const:88432c:8", "const:4:8"]]
+ 0088432c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-a9522594b74c6b8e1871e29ab3155166"></a>

### [`00884458`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00884/00884458.md) → [`008844b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00884/008844b0.md) FUN_008844b0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008844c8",
      "incomplete_value": false,
      "site": "008844d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:c68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00884470",
      "incomplete_value": false,
      "site": "0088447c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:b98:8"
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
      "008844d4",
      "DATA",
      [
        "storage",
        "00c80b98",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008844d4",
      "DATA",
      [
        "storage",
        "00c80c68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008844d4 ["COPY", "register:0:8", ["register:4040:8"]]
- 008844d4 ["INT_ADD", "register:40f0:8", ["const:8844d4:8", "const:4:8"]]
- 008844d4 ["CALLIND", null, ["register:0:8"]]
+ 0088452c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0088452c ["INT_ADD", "register:40f0:8", ["const:88452c:8", "const:4:8"]]
+ 0088452c ["CALLIND", null, ["register:0:8"]]
- 00884470 ["COPY", "tmp:0:8", ["const:b98:8"]]
- 00884470 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00884470 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00884470 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008844c8 ["COPY", "tmp:0:8", ["const:c68:8"]]
+ 008844c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008844c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008844c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008844a0 ["COPY", "register:0:8", ["register:4040:8"]]
- 008844a0 ["INT_ADD", "register:40f0:8", ["const:8844a0:8", "const:4:8"]]
- 008844a0 ["CALLIND", null, ["register:0:8"]]
+ 008844f8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008844f8 ["INT_ADD", "register:40f0:8", ["const:8844f8:8", "const:4:8"]]
+ 008844f8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-fbaa2a3ed7c79fde5625b5bdbf34d8da"></a>

### [`008844e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00884/008844e8.md) → [`00884540`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00884/00884540.md) FUN_00884540

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

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
      "definition_site": "00884558",
      "incomplete_value": false,
      "site": "00884564",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:c68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00884500",
      "incomplete_value": false,
      "site": "0088450c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:b98:8"
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
      "00884564",
      "DATA",
      [
        "storage",
        "00c80b98",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00884564",
      "DATA",
      [
        "storage",
        "00c80c68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00884500 ["COPY", "tmp:0:8", ["const:b98:8"]]
- 00884500 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00884500 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00884500 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00884558 ["COPY", "tmp:0:8", ["const:c68:8"]]
+ 00884558 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00884558 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00884558 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00884530 ["COPY", "register:0:8", ["register:4040:8"]]
- 00884530 ["INT_ADD", "register:40f0:8", ["const:884530:8", "const:4:8"]]
- 00884530 ["CALLIND", null, ["register:0:8"]]
+ 00884588 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00884588 ["INT_ADD", "register:40f0:8", ["const:884588:8", "const:4:8"]]
+ 00884588 ["CALLIND", null, ["register:0:8"]]
- 00884544 ["INT_ADD", "register:40f0:8", ["const:884544:8", "const:4:8"]]
- 00884544 ["CALL", null, ["callee:00c53da0:8"]]
+ 0088459c ["INT_ADD", "register:40f0:8", ["const:88459c:8", "const:4:8"]]
+ 0088459c ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-64aa3b062c4cf88ccb3f0a290b52d84f"></a>

### [`00884574`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00884/00884574.md) → [`008845cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00884/008845cc.md) FUN_008845cc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.59% / 新版 94.59%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008845f4",
      "incomplete_value": false,
      "site": "008845f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:c68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088459c",
      "incomplete_value": false,
      "site": "008845a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:b98:8"
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
      "008845f8",
      "DATA",
      [
        "storage",
        "00c80b98",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008845f8",
      "DATA",
      [
        "storage",
        "00c80c68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00884588 ["INT_ADD", "register:40f0:8", ["const:884588:8", "const:4:8"]]
- 00884588 ["CALL", null, ["callee:00c57f60:8"]]
+ 008845e0 ["INT_ADD", "register:40f0:8", ["const:8845e0:8", "const:4:8"]]
+ 008845e0 ["CALL", null, ["callee:00c57f60:8"]]
- 0088459c ["COPY", "tmp:0:8", ["const:b98:8"]]
- 0088459c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0088459c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0088459c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008845f4 ["COPY", "tmp:0:8", ["const:c68:8"]]
+ 008845f4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008845f4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008845f4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 008845b8 ["INT_ADD", "register:40f0:8", ["const:8845b8:8", "const:4:8"]]
- 008845b8 ["CALL", null, ["callee:00c53d70:8"]]
+ 00884610 ["INT_ADD", "register:40f0:8", ["const:884610:8", "const:4:8"]]
+ 00884610 ["CALL", null, ["callee:00c53d70:8"]]
~~~


<a id="compare-234dbf06990e35cb0d5f886879a63f97"></a>

### [`00884804`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00884/00884804.md) → [`0088485c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00884/0088485c.md) FUN_0088485c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00884874",
      "incomplete_value": false,
      "site": "00884880",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:cf8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088481c",
      "incomplete_value": false,
      "site": "00884828",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:c28:8"
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
      "00884880",
      "DATA",
      [
        "storage",
        "00c80c28",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00884880",
      "DATA",
      [
        "storage",
        "00c80cf8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00884880 ["COPY", "register:0:8", ["register:4040:8"]]
- 00884880 ["INT_ADD", "register:40f0:8", ["const:884880:8", "const:4:8"]]
- 00884880 ["CALLIND", null, ["register:0:8"]]
+ 008848d8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008848d8 ["INT_ADD", "register:40f0:8", ["const:8848d8:8", "const:4:8"]]
+ 008848d8 ["CALLIND", null, ["register:0:8"]]
- 0088481c ["COPY", "tmp:0:8", ["const:c28:8"]]
- 0088481c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088481c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088481c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00884874 ["COPY", "tmp:0:8", ["const:cf8:8"]]
+ 00884874 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00884874 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00884874 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0088484c ["COPY", "register:0:8", ["register:4040:8"]]
- 0088484c ["INT_ADD", "register:40f0:8", ["const:88484c:8", "const:4:8"]]
- 0088484c ["CALLIND", null, ["register:0:8"]]
+ 008848a4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008848a4 ["INT_ADD", "register:40f0:8", ["const:8848a4:8", "const:4:8"]]
+ 008848a4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-aa53640586dd25b16f1fad27a37a5078"></a>

### [`00884894`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00884/00884894.md) → [`008848ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00884/008848ec.md) FUN_008848ec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

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
      "definition_site": "00884904",
      "incomplete_value": false,
      "site": "00884910",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:cf8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008848ac",
      "incomplete_value": false,
      "site": "008848b8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:c28:8"
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
      "00884910",
      "DATA",
      [
        "storage",
        "00c80c28",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00884910",
      "DATA",
      [
        "storage",
        "00c80cf8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008848ac ["COPY", "tmp:0:8", ["const:c28:8"]]
- 008848ac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008848ac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008848ac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00884904 ["COPY", "tmp:0:8", ["const:cf8:8"]]
+ 00884904 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00884904 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00884904 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008848dc ["COPY", "register:0:8", ["register:4040:8"]]
- 008848dc ["INT_ADD", "register:40f0:8", ["const:8848dc:8", "const:4:8"]]
- 008848dc ["CALLIND", null, ["register:0:8"]]
+ 00884934 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00884934 ["INT_ADD", "register:40f0:8", ["const:884934:8", "const:4:8"]]
+ 00884934 ["CALLIND", null, ["register:0:8"]]
- 008848f0 ["INT_ADD", "register:40f0:8", ["const:8848f0:8", "const:4:8"]]
- 008848f0 ["CALL", null, ["callee:00c53da0:8"]]
+ 00884948 ["INT_ADD", "register:40f0:8", ["const:884948:8", "const:4:8"]]
+ 00884948 ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-57fea1b1f0a81158263a3d1dcfbf34af"></a>

### [`00884920`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00884/00884920.md) → [`00884978`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00884/00884978.md) FUN_00884978

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.59% / 新版 94.59%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008849a0",
      "incomplete_value": false,
      "site": "008849a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:cf8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00884948",
      "incomplete_value": false,
      "site": "0088494c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:c28:8"
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
      "008849a4",
      "DATA",
      [
        "storage",
        "00c80c28",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008849a4",
      "DATA",
      [
        "storage",
        "00c80cf8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00884934 ["INT_ADD", "register:40f0:8", ["const:884934:8", "const:4:8"]]
- 00884934 ["CALL", null, ["callee:00c57f60:8"]]
+ 0088498c ["INT_ADD", "register:40f0:8", ["const:88498c:8", "const:4:8"]]
+ 0088498c ["CALL", null, ["callee:00c57f60:8"]]
- 00884948 ["COPY", "tmp:0:8", ["const:c28:8"]]
- 00884948 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00884948 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00884948 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008849a0 ["COPY", "tmp:0:8", ["const:cf8:8"]]
+ 008849a0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008849a0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008849a0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00884964 ["INT_ADD", "register:40f0:8", ["const:884964:8", "const:4:8"]]
- 00884964 ["CALL", null, ["callee:00c53d70:8"]]
+ 008849bc ["INT_ADD", "register:40f0:8", ["const:8849bc:8", "const:4:8"]]
+ 008849bc ["CALL", null, ["callee:00c53d70:8"]]
~~~


<a id="compare-a5f0663cdf0a662319330c81f519d178"></a>

### [`008849d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00884/008849d0.md) → [`00884a28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00884/00884a28.md) FUN_00884a28

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.29% / 新版 94.29%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00884a44",
      "incomplete_value": false,
      "site": "00884a50",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:cf8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008849ec",
      "incomplete_value": false,
      "site": "008849f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:c28:8"
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
      "00884a50",
      "DATA",
      [
        "storage",
        "00c80c28",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00884a50",
      "DATA",
      [
        "storage",
        "00c80cf8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008849ec ["COPY", "tmp:0:8", ["const:c28:8"]]
- 008849ec ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008849ec ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008849ec ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00884a44 ["COPY", "tmp:0:8", ["const:cf8:8"]]
+ 00884a44 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00884a44 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00884a44 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00884a0c ["INT_ADD", "register:40f0:8", ["const:884a0c:8", "const:4:8"]]
- 00884a0c ["CALL", null, ["callee:00c53d70:8"]]
+ 00884a64 ["INT_ADD", "register:40f0:8", ["const:884a64:8", "const:4:8"]]
+ 00884a64 ["CALL", null, ["callee:00c53d70:8"]]
- 00884a2c ["COPY", "register:0:8", ["register:4040:8"]]
- 00884a2c ["INT_ADD", "register:40f0:8", ["const:884a2c:8", "const:4:8"]]
- 00884a2c ["CALLIND", null, ["register:0:8"]]
+ 00884a84 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00884a84 ["INT_ADD", "register:40f0:8", ["const:884a84:8", "const:4:8"]]
+ 00884a84 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-56a60dffd783a6d50cca3014928bd077"></a>

### [`00884b74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00884/00884b74.md) → [`00884bcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00884/00884bcc.md) FUN_00884bcc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 15件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`007681b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00768/007681b4.md) [`007687f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00768/007687f0.md) [`00768be8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00768/00768be8.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 0件  · 呼出先 15件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`0076820c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00768/0076820c.md) [`00768848`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00768/00768848.md) [`00768c40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00768/00768c40.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.56% / 新版 98.56%

優先判定に残った影響 `call_target` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00884de0",
      "incomplete_value": false,
      "site": "00884de8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:d68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00884d88",
      "incomplete_value": false,
      "site": "00884d90",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:c98:8"
          ]
        ]
      ]
    },
    "ordinal": 36,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00884c34",
      "value": [
        "leaf",
        "ram:768c40:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00884bdc",
      "value": [
        "leaf",
        "ram:768be8:8"
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
      "00884c34",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00768be8"
      ]
    ],
    [
      "00884c70",
      "DATA",
      [
        "storage",
        "003c76c0",
        null,
        "byte[11]"
      ]
    ],
    [
      "00884c78",
      "DATA",
      [
        "storage",
        "003c76c0",
        null,
        "byte[11]"
      ]
    ]
  ],
  "added": [
    [
      "00884c34",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00768c40"
      ]
    ],
    [
      "00884c70",
      "DATA",
      [
        "storage",
        "003c76c0",
        null,
        "byte[15]"
      ]
    ],
    [
      "00884c78",
      "DATA",
      [
        "storage",
        "003c76c0",
        null,
        "byte[15]"
      ]
    ]
  ]
}
~~~


~~~diff
- 00884bdc ["INT_ADD", "register:40f0:8", ["const:884bdc:8", "const:4:8"]]
- 00884bdc ["CALL", null, ["ram:768be8:8"]]
+ 00884c34 ["INT_ADD", "register:40f0:8", ["const:884c34:8", "const:4:8"]]
+ 00884c34 ["CALL", null, ["ram:768c40:8"]]
- 00884bc8 ["INT_ADD", "register:40f0:8", ["const:884bc8:8", "const:4:8"]]
- 00884bc8 ["CALL", null, ["callee:00851550:8"]]
+ 00884c20 ["INT_ADD", "register:40f0:8", ["const:884c20:8", "const:4:8"]]
+ 00884c20 ["CALL", null, ["callee:00851550:8"]]
- 00884bd0 ["INT_ADD", "register:40f0:8", ["const:884bd0:8", "const:4:8"]]
- 00884bd0 ["CALL", null, ["callee:00768848:8"]]
+ 00884c28 ["INT_ADD", "register:40f0:8", ["const:884c28:8", "const:4:8"]]
+ 00884c28 ["CALL", null, ["callee:00768848:8"]]
~~~


<a id="compare-6faf107d820fe9990c4e9b5a5538d17a"></a>

### [`00884ff8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00884/00884ff8.md) → [`00885050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00885/00885050.md) FUN_00885050

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00885068",
      "incomplete_value": false,
      "site": "00885074",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:d68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00885010",
      "incomplete_value": false,
      "site": "0088501c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:c98:8"
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
      "00885074",
      "DATA",
      [
        "storage",
        "00c80c98",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00885074",
      "DATA",
      [
        "storage",
        "00c80d68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00885074 ["COPY", "register:0:8", ["register:4040:8"]]
- 00885074 ["INT_ADD", "register:40f0:8", ["const:885074:8", "const:4:8"]]
- 00885074 ["CALLIND", null, ["register:0:8"]]
+ 008850cc ["COPY", "register:0:8", ["register:4040:8"]]
+ 008850cc ["INT_ADD", "register:40f0:8", ["const:8850cc:8", "const:4:8"]]
+ 008850cc ["CALLIND", null, ["register:0:8"]]
- 00885010 ["COPY", "tmp:0:8", ["const:c98:8"]]
- 00885010 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00885010 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00885010 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00885068 ["COPY", "tmp:0:8", ["const:d68:8"]]
+ 00885068 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00885068 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00885068 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00885040 ["COPY", "register:0:8", ["register:4040:8"]]
- 00885040 ["INT_ADD", "register:40f0:8", ["const:885040:8", "const:4:8"]]
- 00885040 ["CALLIND", null, ["register:0:8"]]
+ 00885098 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00885098 ["INT_ADD", "register:40f0:8", ["const:885098:8", "const:4:8"]]
+ 00885098 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-21ea355259673d9f0f608df7b118d39f"></a>

### [`00885088`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00885/00885088.md) → [`008850e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00885/008850e0.md) FUN_008850e0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

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
      "definition_site": "008850f8",
      "incomplete_value": false,
      "site": "00885104",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:d68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008850a0",
      "incomplete_value": false,
      "site": "008850ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:c98:8"
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
      "00885104",
      "DATA",
      [
        "storage",
        "00c80c98",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00885104",
      "DATA",
      [
        "storage",
        "00c80d68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008850a0 ["COPY", "tmp:0:8", ["const:c98:8"]]
- 008850a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008850a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008850a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008850f8 ["COPY", "tmp:0:8", ["const:d68:8"]]
+ 008850f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008850f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008850f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008850d0 ["COPY", "register:0:8", ["register:4040:8"]]
- 008850d0 ["INT_ADD", "register:40f0:8", ["const:8850d0:8", "const:4:8"]]
- 008850d0 ["CALLIND", null, ["register:0:8"]]
+ 00885128 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00885128 ["INT_ADD", "register:40f0:8", ["const:885128:8", "const:4:8"]]
+ 00885128 ["CALLIND", null, ["register:0:8"]]
- 008850e4 ["INT_ADD", "register:40f0:8", ["const:8850e4:8", "const:4:8"]]
- 008850e4 ["CALL", null, ["callee:00c53da0:8"]]
+ 0088513c ["INT_ADD", "register:40f0:8", ["const:88513c:8", "const:4:8"]]
+ 0088513c ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-6112322603b109d7d21b3802995d3ab3"></a>

### [`00885114`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00885/00885114.md) → [`0088516c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00885/0088516c.md) FUN_0088516c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.59% / 新版 94.59%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00885194",
      "incomplete_value": false,
      "site": "00885198",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:d68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088513c",
      "incomplete_value": false,
      "site": "00885140",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:c98:8"
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
      "00885198",
      "DATA",
      [
        "storage",
        "00c80c98",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00885198",
      "DATA",
      [
        "storage",
        "00c80d68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00885128 ["INT_ADD", "register:40f0:8", ["const:885128:8", "const:4:8"]]
- 00885128 ["CALL", null, ["callee:00c57f60:8"]]
+ 00885180 ["INT_ADD", "register:40f0:8", ["const:885180:8", "const:4:8"]]
+ 00885180 ["CALL", null, ["callee:00c57f60:8"]]
- 0088513c ["COPY", "tmp:0:8", ["const:c98:8"]]
- 0088513c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0088513c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0088513c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00885194 ["COPY", "tmp:0:8", ["const:d68:8"]]
+ 00885194 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00885194 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00885194 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00885158 ["INT_ADD", "register:40f0:8", ["const:885158:8", "const:4:8"]]
- 00885158 ["CALL", null, ["callee:00c53d70:8"]]
+ 008851b0 ["INT_ADD", "register:40f0:8", ["const:8851b0:8", "const:4:8"]]
+ 008851b0 ["CALL", null, ["callee:00c53d70:8"]]
~~~


<a id="compare-93b5da53b75ac844beac1649e5baae39"></a>

### [`008851c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00885/008851c4.md) → [`0088521c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00885/0088521c.md) FUN_0088521c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.29% / 新版 94.29%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00885238",
      "incomplete_value": false,
      "site": "00885244",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:d68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008851e0",
      "incomplete_value": false,
      "site": "008851ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:c98:8"
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
      "00885244",
      "DATA",
      [
        "storage",
        "00c80c98",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00885244",
      "DATA",
      [
        "storage",
        "00c80d68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008851e0 ["COPY", "tmp:0:8", ["const:c98:8"]]
- 008851e0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008851e0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008851e0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00885238 ["COPY", "tmp:0:8", ["const:d68:8"]]
+ 00885238 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00885238 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00885238 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00885200 ["INT_ADD", "register:40f0:8", ["const:885200:8", "const:4:8"]]
- 00885200 ["CALL", null, ["callee:00c53d70:8"]]
+ 00885258 ["INT_ADD", "register:40f0:8", ["const:885258:8", "const:4:8"]]
+ 00885258 ["CALL", null, ["callee:00c53d70:8"]]
- 00885220 ["COPY", "register:0:8", ["register:4040:8"]]
- 00885220 ["INT_ADD", "register:40f0:8", ["const:885220:8", "const:4:8"]]
- 00885220 ["CALLIND", null, ["register:0:8"]]
+ 00885278 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00885278 ["INT_ADD", "register:40f0:8", ["const:885278:8", "const:4:8"]]
+ 00885278 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-796e33732d40775569e9196bcd272a39"></a>

### [`008853a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00885/008853a4.md) → [`008853fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00885/008853fc.md) FUN_008853fc

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
      "definition_site": "00885418",
      "incomplete_value": false,
      "site": "00885420",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:df8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008853c0",
      "incomplete_value": false,
      "site": "008853c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:d28:8"
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
      "00885420",
      "DATA",
      [
        "storage",
        "00c80d28",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00885420",
      "DATA",
      [
        "storage",
        "00c80df8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008853c0 ["COPY", "tmp:0:8", ["const:d28:8"]]
- 008853c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008853c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008853c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00885418 ["COPY", "tmp:0:8", ["const:df8:8"]]
+ 00885418 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00885418 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00885418 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008853d8 ["INT_ADD", "register:40f0:8", ["const:8853d8:8", "const:4:8"]]
- 008853d8 ["CALL", null, ["callee:00c53da0:8"]]
+ 00885430 ["INT_ADD", "register:40f0:8", ["const:885430:8", "const:4:8"]]
+ 00885430 ["CALL", null, ["callee:00c53da0:8"]]
- 008853ec ["COPY", "register:0:8", ["register:4040:8"]]
- 008853ec ["INT_ADD", "register:40f0:8", ["const:8853ec:8", "const:4:8"]]
- 008853ec ["CALLIND", null, ["register:0:8"]]
+ 00885444 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00885444 ["INT_ADD", "register:40f0:8", ["const:885444:8", "const:4:8"]]
+ 00885444 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-edb4f907c63d8e93520ffe0730b71a2b"></a>

### [`00885440`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00885/00885440.md) → [`00885498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00885/00885498.md) FUN_00885498

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.59% / 新版 94.59%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008854b4",
      "incomplete_value": false,
      "site": "008854bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:df8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088545c",
      "incomplete_value": false,
      "site": "00885464",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:d28:8"
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
      "008854bc",
      "DATA",
      [
        "storage",
        "00c80d28",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008854bc",
      "DATA",
      [
        "storage",
        "00c80df8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008854bc ["COPY", "register:0:8", ["register:4040:8"]]
- 008854bc ["INT_ADD", "register:40f0:8", ["const:8854bc:8", "const:4:8"]]
- 008854bc ["CALLIND", null, ["register:0:8"]]
+ 00885514 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00885514 ["INT_ADD", "register:40f0:8", ["const:885514:8", "const:4:8"]]
+ 00885514 ["CALLIND", null, ["register:0:8"]]
- 0088545c ["COPY", "tmp:0:8", ["const:d28:8"]]
- 0088545c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088545c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088545c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008854b4 ["COPY", "tmp:0:8", ["const:df8:8"]]
+ 008854b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008854b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008854b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00885474 ["INT_ADD", "register:40f0:8", ["const:885474:8", "const:4:8"]]
- 00885474 ["CALL", null, ["callee:00c53da0:8"]]
+ 008854cc ["INT_ADD", "register:40f0:8", ["const:8854cc:8", "const:4:8"]]
+ 008854cc ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-d94772b988c4b25c75d987e8ce047cdc"></a>

### [`008854d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00885/008854d4.md) → [`0088552c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00885/0088552c.md) FUN_0088552c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.59% / 新版 94.59%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00885558",
      "incomplete_value": false,
      "site": "00885558",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:df8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00885500",
      "incomplete_value": false,
      "site": "00885500",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:d28:8"
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
      "00885558",
      "DATA",
      [
        "storage",
        "00c80d28",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00885558",
      "DATA",
      [
        "storage",
        "00c80df8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008854e8 ["INT_ADD", "register:40f0:8", ["const:8854e8:8", "const:4:8"]]
- 008854e8 ["CALL", null, ["callee:00c57f60:8"]]
+ 00885540 ["INT_ADD", "register:40f0:8", ["const:885540:8", "const:4:8"]]
+ 00885540 ["CALL", null, ["callee:00c57f60:8"]]
- 008854f8 ["COPY", "tmp:0:8", ["const:d28:8"]]
- 008854f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008854f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008854f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00885550 ["COPY", "tmp:0:8", ["const:df8:8"]]
+ 00885550 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00885550 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00885550 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0088551c ["COPY", "register:0:8", ["register:4040:8"]]
- 0088551c ["INT_ADD", "register:40f0:8", ["const:88551c:8", "const:4:8"]]
- 0088551c ["CALLIND", null, ["register:0:8"]]
+ 00885574 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00885574 ["INT_ADD", "register:40f0:8", ["const:885574:8", "const:4:8"]]
+ 00885574 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-f54ba26e26e40cb76555520ac642d2e5"></a>

### [`0088557c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00885/0088557c.md) → [`008855d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00885/008855d4.md) FUN_008855d4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008855f4",
      "incomplete_value": false,
      "site": "008855f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:df8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088559c",
      "incomplete_value": false,
      "site": "0088559c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:d28:8"
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
      "008855f4",
      "DATA",
      [
        "storage",
        "00c80d28",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008855f4",
      "DATA",
      [
        "storage",
        "00c80df8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00885598 ["COPY", "tmp:0:8", ["const:d28:8"]]
- 00885598 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00885598 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00885598 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008855f0 ["COPY", "tmp:0:8", ["const:df8:8"]]
+ 008855f0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008855f0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008855f0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008855b8 ["COPY", "register:0:8", ["register:4040:8"]]
- 008855b8 ["INT_ADD", "register:40f0:8", ["const:8855b8:8", "const:4:8"]]
- 008855b8 ["CALLIND", null, ["register:0:8"]]
+ 00885610 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00885610 ["INT_ADD", "register:40f0:8", ["const:885610:8", "const:4:8"]]
+ 00885610 ["CALLIND", null, ["register:0:8"]]
- 008855dc ["COPY", "register:0:8", ["register:4040:8"]]
- 008855dc ["INT_ADD", "register:40f0:8", ["const:8855dc:8", "const:4:8"]]
- 008855dc ["CALLIND", null, ["register:0:8"]]
+ 00885634 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00885634 ["INT_ADD", "register:40f0:8", ["const:885634:8", "const:4:8"]]
+ 00885634 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b55cbb0e715d4ac77a3c5b1fcaf807f8"></a>

### [`00885724`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00885/00885724.md) → [`0088577c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00885/0088577c.md) FUN_0088577c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 11件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00768a28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00768/00768a28.md) [`00768e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00768/00768e90.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008806a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00880/008806a8.md)
- 新版 呼出元 0件  · 呼出先 11件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00768a80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00768/00768a80.md) [`00768ee8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00768/00768ee8.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00880700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00880/00880700.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.30% / 新版 98.30%

優先判定に残った影響 `call_target` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00885910",
      "incomplete_value": false,
      "site": "00885918",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:e68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008858b8",
      "incomplete_value": false,
      "site": "008858c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:d98:8"
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
      "site": "00885830",
      "value": [
        "leaf",
        "ram:768ee8:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008857d8",
      "value": [
        "leaf",
        "ram:768e90:8"
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
      "00885830",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00768e90"
      ]
    ],
    [
      "00885918",
      "DATA",
      [
        "storage",
        "00c80d98",
        null,
        "undefined *"
      ]
    ],
    [
      "008859b8",
      "READ",
      [
        "storage",
        "00c80dc0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00885830",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00768ee8"
      ]
    ],
    [
      "00885918",
      "DATA",
      [
        "storage",
        "00c80e68",
        null,
        "undefined *"
      ]
    ],
    [
      "008859b8",
      "READ",
      [
        "storage",
        "00c80e90",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008857d8 ["INT_ADD", "register:40f0:8", ["const:8857d8:8", "const:4:8"]]
- 008857d8 ["CALL", null, ["ram:768e90:8"]]
+ 00885830 ["INT_ADD", "register:40f0:8", ["const:885830:8", "const:4:8"]]
+ 00885830 ["CALL", null, ["ram:768ee8:8"]]
- 0088578c ["INT_ADD", "register:40f0:8", ["const:88578c:8", "const:4:8"]]
- 0088578c ["CALL", null, ["callee:00851550:8"]]
+ 008857e4 ["INT_ADD", "register:40f0:8", ["const:8857e4:8", "const:4:8"]]
+ 008857e4 ["CALL", null, ["callee:00851550:8"]]
- 00885794 ["INT_ADD", "register:40f0:8", ["const:885794:8", "const:4:8"]]
- 00885794 ["CALL", null, ["callee:00768a80:8"]]
+ 008857ec ["INT_ADD", "register:40f0:8", ["const:8857ec:8", "const:4:8"]]
+ 008857ec ["CALL", null, ["callee:00768a80:8"]]
~~~


<a id="compare-40ab42281bfed8237bd34dfa23e94c05"></a>

### [`00885b14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00885/00885b14.md) → [`00885b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00885/00885b6c.md) FUN_00885b6c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00885b84",
      "incomplete_value": false,
      "site": "00885b90",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:e68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00885b2c",
      "incomplete_value": false,
      "site": "00885b38",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:d98:8"
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
      "00885b90",
      "DATA",
      [
        "storage",
        "00c80d98",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00885b90",
      "DATA",
      [
        "storage",
        "00c80e68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00885b90 ["COPY", "register:0:8", ["register:4040:8"]]
- 00885b90 ["INT_ADD", "register:40f0:8", ["const:885b90:8", "const:4:8"]]
- 00885b90 ["CALLIND", null, ["register:0:8"]]
+ 00885be8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00885be8 ["INT_ADD", "register:40f0:8", ["const:885be8:8", "const:4:8"]]
+ 00885be8 ["CALLIND", null, ["register:0:8"]]
- 00885b2c ["COPY", "tmp:0:8", ["const:d98:8"]]
- 00885b2c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00885b2c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00885b2c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00885b84 ["COPY", "tmp:0:8", ["const:e68:8"]]
+ 00885b84 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00885b84 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00885b84 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00885b5c ["COPY", "register:0:8", ["register:4040:8"]]
- 00885b5c ["INT_ADD", "register:40f0:8", ["const:885b5c:8", "const:4:8"]]
- 00885b5c ["CALLIND", null, ["register:0:8"]]
+ 00885bb4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00885bb4 ["INT_ADD", "register:40f0:8", ["const:885bb4:8", "const:4:8"]]
+ 00885bb4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-68ed220f5b02faaecec74b4d0b5c7eaf"></a>

### [`00885ba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00885/00885ba4.md) → [`00885bfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00885/00885bfc.md) FUN_00885bfc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

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
      "definition_site": "00885c14",
      "incomplete_value": false,
      "site": "00885c20",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:e68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00885bbc",
      "incomplete_value": false,
      "site": "00885bc8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:d98:8"
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
      "00885c20",
      "DATA",
      [
        "storage",
        "00c80d98",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00885c20",
      "DATA",
      [
        "storage",
        "00c80e68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00885bbc ["COPY", "tmp:0:8", ["const:d98:8"]]
- 00885bbc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00885bbc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00885bbc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00885c14 ["COPY", "tmp:0:8", ["const:e68:8"]]
+ 00885c14 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00885c14 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00885c14 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00885bec ["COPY", "register:0:8", ["register:4040:8"]]
- 00885bec ["INT_ADD", "register:40f0:8", ["const:885bec:8", "const:4:8"]]
- 00885bec ["CALLIND", null, ["register:0:8"]]
+ 00885c44 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00885c44 ["INT_ADD", "register:40f0:8", ["const:885c44:8", "const:4:8"]]
+ 00885c44 ["CALLIND", null, ["register:0:8"]]
- 00885c00 ["INT_ADD", "register:40f0:8", ["const:885c00:8", "const:4:8"]]
- 00885c00 ["CALL", null, ["callee:00c53da0:8"]]
+ 00885c58 ["INT_ADD", "register:40f0:8", ["const:885c58:8", "const:4:8"]]
+ 00885c58 ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-ede0ac63253b1d7ed88fbfd864e6cf44"></a>

### [`00885c30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00885/00885c30.md) → [`00885c88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00885/00885c88.md) FUN_00885c88

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.59% / 新版 94.59%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00885cb0",
      "incomplete_value": false,
      "site": "00885cb4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:e68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00885c58",
      "incomplete_value": false,
      "site": "00885c5c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:d98:8"
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
      "00885cb4",
      "DATA",
      [
        "storage",
        "00c80d98",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00885cb4",
      "DATA",
      [
        "storage",
        "00c80e68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00885c44 ["INT_ADD", "register:40f0:8", ["const:885c44:8", "const:4:8"]]
- 00885c44 ["CALL", null, ["callee:00c57f60:8"]]
+ 00885c9c ["INT_ADD", "register:40f0:8", ["const:885c9c:8", "const:4:8"]]
+ 00885c9c ["CALL", null, ["callee:00c57f60:8"]]
- 00885c58 ["COPY", "tmp:0:8", ["const:d98:8"]]
- 00885c58 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00885c58 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00885c58 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00885cb0 ["COPY", "tmp:0:8", ["const:e68:8"]]
+ 00885cb0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00885cb0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00885cb0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00885c74 ["INT_ADD", "register:40f0:8", ["const:885c74:8", "const:4:8"]]
- 00885c74 ["CALL", null, ["callee:00c53d70:8"]]
+ 00885ccc ["INT_ADD", "register:40f0:8", ["const:885ccc:8", "const:4:8"]]
+ 00885ccc ["CALL", null, ["callee:00c53d70:8"]]
~~~


<a id="compare-ac40cd1e0951c81b96d678eaa4003a29"></a>

### [`00885ce0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00885/00885ce0.md) → [`00885d38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00885/00885d38.md) FUN_00885d38

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.29% / 新版 94.29%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00885d54",
      "incomplete_value": false,
      "site": "00885d60",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:e68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00885cfc",
      "incomplete_value": false,
      "site": "00885d08",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:d98:8"
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
      "00885d60",
      "DATA",
      [
        "storage",
        "00c80d98",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00885d60",
      "DATA",
      [
        "storage",
        "00c80e68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00885cfc ["COPY", "tmp:0:8", ["const:d98:8"]]
- 00885cfc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00885cfc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00885cfc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00885d54 ["COPY", "tmp:0:8", ["const:e68:8"]]
+ 00885d54 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00885d54 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00885d54 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00885d1c ["INT_ADD", "register:40f0:8", ["const:885d1c:8", "const:4:8"]]
- 00885d1c ["CALL", null, ["callee:00c53d70:8"]]
+ 00885d74 ["INT_ADD", "register:40f0:8", ["const:885d74:8", "const:4:8"]]
+ 00885d74 ["CALL", null, ["callee:00c53d70:8"]]
- 00885d3c ["COPY", "register:0:8", ["register:4040:8"]]
- 00885d3c ["INT_ADD", "register:40f0:8", ["const:885d3c:8", "const:4:8"]]
- 00885d3c ["CALLIND", null, ["register:0:8"]]
+ 00885d94 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00885d94 ["INT_ADD", "register:40f0:8", ["const:885d94:8", "const:4:8"]]
+ 00885d94 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-850c84ea848d055a93e8a7c86c075a98"></a>

### [`00885ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00885/00885ec0.md) → [`00885f18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00885/00885f18.md) FUN_00885f18

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.86% / 新版 92.86%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00885f30",
      "incomplete_value": false,
      "site": "00885f3c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:ef8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00885ed8",
      "incomplete_value": false,
      "site": "00885ee4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:e28:8"
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
      "00885f3c",
      "DATA",
      [
        "storage",
        "00c80e28",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00885f3c",
      "DATA",
      [
        "storage",
        "00c80ef8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00885ed8 ["COPY", "tmp:0:8", ["const:e28:8"]]
- 00885ed8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00885ed8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00885ed8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00885f30 ["COPY", "tmp:0:8", ["const:ef8:8"]]
+ 00885f30 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00885f30 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00885f30 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00885f08 ["COPY", "register:0:8", ["register:4040:8"]]
- 00885f08 ["INT_ADD", "register:40f0:8", ["const:885f08:8", "const:4:8"]]
- 00885f08 ["CALLIND", null, ["register:0:8"]]
+ 00885f60 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00885f60 ["INT_ADD", "register:40f0:8", ["const:885f60:8", "const:4:8"]]
+ 00885f60 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-8526638fe3e807b49ef60a12adef1cec"></a>

### [`00885f30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00885/00885f30.md) → [`00885f88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00885/00885f88.md) FUN_00885f88

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.59% / 新版 92.59%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00885fa0",
      "incomplete_value": false,
      "site": "00885fac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:ef8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00885f48",
      "incomplete_value": false,
      "site": "00885f54",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:e28:8"
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
      "00885fac",
      "DATA",
      [
        "storage",
        "00c80e28",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00885fac",
      "DATA",
      [
        "storage",
        "00c80ef8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00885f48 ["COPY", "tmp:0:8", ["const:e28:8"]]
- 00885f48 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00885f48 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00885f48 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00885fa0 ["COPY", "tmp:0:8", ["const:ef8:8"]]
+ 00885fa0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00885fa0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00885fa0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00885f78 ["COPY", "register:0:8", ["register:4040:8"]]
- 00885f78 ["INT_ADD", "register:40f0:8", ["const:885f78:8", "const:4:8"]]
- 00885f78 ["CALLIND", null, ["register:0:8"]]
+ 00885fd0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00885fd0 ["INT_ADD", "register:40f0:8", ["const:885fd0:8", "const:4:8"]]
+ 00885fd0 ["CALLIND", null, ["register:0:8"]]
- 00885f88 ["INT_ADD", "register:40f0:8", ["const:885f88:8", "const:4:8"]]
- 00885f88 ["CALL", null, ["callee:00c57f80:8"]]
+ 00885fe0 ["INT_ADD", "register:40f0:8", ["const:885fe0:8", "const:4:8"]]
+ 00885fe0 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-1dfa7b8462b3853bba8095a2851e52b6"></a>

### [`00885f9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00885/00885f9c.md) → [`00885ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00885/00885ff4.md) FUN_00885ff4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 93.02% / 新版 93.02%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00886028",
      "incomplete_value": false,
      "site": "00886028",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:ef8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00885fd0",
      "incomplete_value": false,
      "site": "00885fd0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:e28:8"
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
      "00886028",
      "DATA",
      [
        "storage",
        "00c80e28",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00886028",
      "DATA",
      [
        "storage",
        "00c80ef8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00885fb4 ["INT_ADD", "register:40f0:8", ["const:885fb4:8", "const:4:8"]]
- 00885fb4 ["CALL", null, ["callee:00c57f60:8"]]
+ 0088600c ["INT_ADD", "register:40f0:8", ["const:88600c:8", "const:4:8"]]
+ 0088600c ["CALL", null, ["callee:00c57f60:8"]]
- 00885fc4 ["COPY", "tmp:0:8", ["const:e28:8"]]
- 00885fc4 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 00885fc4 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 00885fc4 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0088601c ["COPY", "tmp:0:8", ["const:ef8:8"]]
+ 0088601c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0088601c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0088601c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 00885fcc ["COPY", "register:40a0:8", ["register:4000:8"]]
~~~


<a id="compare-bbafd76a624cf05758f84eb83b5a93ef"></a>

### [`00886074`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00886/00886074.md) → [`008860cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00886/008860cc.md) FUN_008860cc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 93.02% / 新版 93.02%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008860e8",
      "incomplete_value": false,
      "site": "008860e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:ef8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00886090",
      "incomplete_value": false,
      "site": "00886090",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:e28:8"
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
      "008860e8",
      "DATA",
      [
        "storage",
        "00c80e28",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008860e8",
      "DATA",
      [
        "storage",
        "00c80ef8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00886088 ["COPY", "tmp:0:8", ["const:e28:8"]]
- 00886088 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00886088 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00886088 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008860e0 ["COPY", "tmp:0:8", ["const:ef8:8"]]
+ 008860e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008860e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008860e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0088608c ["COPY", "register:40a0:8", ["register:4008:8"]]
- 008860cc ["INT_ADD", "register:40f0:8", ["const:8860cc:8", "const:4:8"]]
- 008860cc ["CALL", null, ["callee:0043bb60:8"]]
+ 00886124 ["INT_ADD", "register:40f0:8", ["const:886124:8", "const:4:8"]]
+ 00886124 ["CALL", null, ["callee:0043bb60:8"]]
~~~


<a id="compare-7a88484b48bd857357bfda9b7a8bae22"></a>

### [`00886200`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00886/00886200.md) → [`00886258`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00886/00886258.md) FUN_00886258

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 9件 [`0044f8e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044f/0044f8e0.md) [`004557dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00455/004557dc.md) [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00764ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00764/00764ee0.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 0件  · 呼出先 9件 [`0044f920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044f920.md) [`0045581c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00455/0045581c.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00764f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/00764f38.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.35% / 新版 98.35%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088633c",
      "incomplete_value": false,
      "site": "0088633c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:f68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008862e4",
      "incomplete_value": false,
      "site": "008862e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:e98:8"
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
      "0088633c",
      "DATA",
      [
        "storage",
        "00c80e98",
        null,
        "undefined *"
      ]
    ],
    [
      "008863b8",
      "READ",
      [
        "storage",
        "00c80ec0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088633c",
      "DATA",
      [
        "storage",
        "00c80f68",
        null,
        "undefined *"
      ]
    ],
    [
      "008863b8",
      "READ",
      [
        "storage",
        "00c80f90",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00886230 ["INT_ADD", "register:40f0:8", ["const:886230:8", "const:4:8"]]
- 00886230 ["CALL", null, ["callee:0044f920:8"]]
+ 00886288 ["INT_ADD", "register:40f0:8", ["const:886288:8", "const:4:8"]]
+ 00886288 ["CALL", null, ["callee:0044f920:8"]]
- 00886238 ["INT_ADD", "register:40f0:8", ["const:886238:8", "const:4:8"]]
- 00886238 ["CALL", null, ["callee:00851550:8"]]
+ 00886290 ["INT_ADD", "register:40f0:8", ["const:886290:8", "const:4:8"]]
+ 00886290 ["CALL", null, ["callee:00851550:8"]]
- 00886240 ["INT_ADD", "register:40f0:8", ["const:886240:8", "const:4:8"]]
- 00886240 ["CALL", null, ["callee:00764f38:8"]]
+ 00886298 ["INT_ADD", "register:40f0:8", ["const:886298:8", "const:4:8"]]
+ 00886298 ["CALL", null, ["callee:00764f38:8"]]
~~~


<a id="compare-e2374a4495eb32b1bc22f0f0dd1f77d2"></a>

### [`00886518`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00886/00886518.md) → [`00886570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00886/00886570.md) FUN_00886570

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
      "definition_site": "00886588",
      "incomplete_value": false,
      "site": "00886594",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:f68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00886530",
      "incomplete_value": false,
      "site": "0088653c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
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
      "00886594",
      "DATA",
      [
        "storage",
        "00c80e98",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00886594",
      "DATA",
      [
        "storage",
        "00c80f68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00886530 ["COPY", "tmp:0:8", ["const:e98:8"]]
- 00886530 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00886530 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00886530 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00886588 ["COPY", "tmp:0:8", ["const:f68:8"]]
+ 00886588 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00886588 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00886588 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00886560 ["COPY", "register:0:8", ["register:4040:8"]]
- 00886560 ["INT_ADD", "register:40f0:8", ["const:886560:8", "const:4:8"]]
- 00886560 ["CALLIND", null, ["register:0:8"]]
+ 008865b8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008865b8 ["INT_ADD", "register:40f0:8", ["const:8865b8:8", "const:4:8"]]
+ 008865b8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-2180213507cffcbeef89e0be57960ae3"></a>

### [`008865fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00886/008865fc.md) → [`00886654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00886/00886654.md) FUN_00886654

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.10% / 新版 93.10%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00886670",
      "incomplete_value": false,
      "site": "00886670",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:f68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00886618",
      "incomplete_value": false,
      "site": "00886618",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
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
      "00886670",
      "DATA",
      [
        "storage",
        "00c80e98",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00886670",
      "DATA",
      [
        "storage",
        "00c80f68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00886614 ["COPY", "tmp:0:8", ["const:e98:8"]]
- 00886614 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00886614 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00886614 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0088666c ["COPY", "tmp:0:8", ["const:f68:8"]]
+ 0088666c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0088666c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0088666c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00886638 ["COPY", "register:0:8", ["register:4048:8"]]
- 00886638 ["INT_ADD", "register:40f0:8", ["const:886638:8", "const:4:8"]]
- 00886638 ["CALLIND", null, ["register:0:8"]]
+ 00886690 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00886690 ["INT_ADD", "register:40f0:8", ["const:886690:8", "const:4:8"]]
+ 00886690 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-309233488dbfe8516b796383b52fb373"></a>

### [`008868b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00886/008868b8.md) → [`00886910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00886/00886910.md) FUN_00886910

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00886924",
      "incomplete_value": false,
      "site": "00886928",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008868cc",
      "incomplete_value": false,
      "site": "008868d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
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
      "00886928",
      "DATA",
      [
        "storage",
        "00c80f38",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00886928",
      "DATA",
      [
        "storage",
        "00c81008",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008868c8 ["COPY", "register:4040:8", ["const:c80000:8"]]
+ 00886920 ["COPY", "register:4040:8", ["const:c81000:8"]]
- 008868cc ["COPY", "tmp:0:8", ["const:f38:8"]]
- 008868cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008868cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008868cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00886924 ["COPY", "tmp:0:8", ["const:8:8"]]
+ 00886924 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00886924 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00886924 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008868e0 ["INT_ADD", "register:40f0:8", ["const:8868e0:8", "const:4:8"]]
- 008868e0 ["CALL", null, ["callee:00c53da0:8"]]
+ 00886938 ["INT_ADD", "register:40f0:8", ["const:886938:8", "const:4:8"]]
+ 00886938 ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-f6ef3d71264dcd1c55584da1a0674231"></a>

### [`00886914`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00886/00886914.md) → [`0088696c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00886/0088696c.md) FUN_0088696c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00886984",
      "incomplete_value": false,
      "site": "00886988",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088692c",
      "incomplete_value": false,
      "site": "00886930",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:f38:8"
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
      "00886988",
      "DATA",
      [
        "storage",
        "00c80f38",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00886988",
      "DATA",
      [
        "storage",
        "00c81008",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00886928 ["COPY", "register:4040:8", ["const:c80000:8"]]
+ 00886980 ["COPY", "register:4040:8", ["const:c81000:8"]]
- 0088692c ["COPY", "tmp:0:8", ["const:f38:8"]]
- 0088692c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088692c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088692c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00886984 ["COPY", "tmp:0:8", ["const:8:8"]]
+ 00886984 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00886984 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00886984 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00886940 ["INT_ADD", "register:40f0:8", ["const:886940:8", "const:4:8"]]
- 00886940 ["CALL", null, ["callee:00c53da0:8"]]
+ 00886998 ["INT_ADD", "register:40f0:8", ["const:886998:8", "const:4:8"]]
+ 00886998 ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-c3c0450f3246186ef8b58a62b3b2bf24"></a>

### [`00886970`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00886/00886970.md) → [`008869c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00886/008869c8.md) FUN_008869c8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008869ec",
      "incomplete_value": true,
      "site": "008869f0",
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
            "const:8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00886994",
      "incomplete_value": true,
      "site": "00886998",
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
      "008869f0",
      "DATA",
      [
        "storage",
        "00c80f38",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008869f0",
      "DATA",
      [
        "storage",
        "00c81008",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00886984 ["INT_ADD", "register:40f0:8", ["const:886984:8", "const:4:8"]]
- 00886984 ["CALL", null, ["callee:00c57f60:8"]]
+ 008869dc ["INT_ADD", "register:40f0:8", ["const:8869dc:8", "const:4:8"]]
+ 008869dc ["CALL", null, ["callee:00c57f60:8"]]
- 00886990 ["COPY", "register:4048:8", ["const:c80000:8"]]
+ 008869e8 ["COPY", "register:4048:8", ["const:c81000:8"]]
- 00886994 ["COPY", "tmp:0:8", ["const:f38:8"]]
- 00886994 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00886994 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00886994 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008869ec ["COPY", "tmp:0:8", ["const:8:8"]]
+ 008869ec ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008869ec ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008869ec ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-1cd013f861626530c78343e561fded90"></a>

### [`008869c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00886/008869c8.md) → [`00886a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00886/00886a20.md) FUN_00886a20

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.67% / 新版 86.67%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00886a28",
      "incomplete_value": false,
      "site": "00886a2c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008869d0",
      "incomplete_value": false,
      "site": "008869d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:f38:8"
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
      "00886a2c",
      "DATA",
      [
        "storage",
        "00c80f38",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00886a2c",
      "DATA",
      [
        "storage",
        "00c81008",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008869cc ["COPY", "register:4048:8", ["const:c80000:8"]]
+ 00886a24 ["COPY", "register:4048:8", ["const:c81000:8"]]
- 008869d0 ["COPY", "tmp:0:8", ["const:f38:8"]]
- 008869d0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008869d0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008869d0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00886a28 ["COPY", "tmp:0:8", ["const:8:8"]]
+ 00886a28 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00886a28 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00886a28 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 008869f8 ["INT_ADD", "register:40f0:8", ["const:8869f8:8", "const:4:8"]]
- 008869f8 ["CALL", null, ["callee:00c53d70:8"]]
+ 00886a50 ["INT_ADD", "register:40f0:8", ["const:886a50:8", "const:4:8"]]
+ 00886a50 ["CALL", null, ["callee:00c53d70:8"]]
~~~


<a id="compare-f32a84a8f631e667eab1a6e00fcd05d8"></a>

### [`00886aa4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00886/00886aa4.md) → [`00886afc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00886/00886afc.md) FUN_00886afc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0044f8e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044f/0044f8e0.md) [`00456808`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00456/00456808.md) [`0046479c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00464/0046479c.md) [`00886f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00886/00886f10.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0044f920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044f920.md) [`00456848`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00456/00456848.md) [`004647dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00464/004647dc.md) [`00886f68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00886/00886f68.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.63% / 新版 98.63%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00886c8c",
      "incomplete_value": false,
      "site": "00886c8c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00886c34",
      "incomplete_value": false,
      "site": "00886c34",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:fa8:8"
          ]
        ]
      ]
    },
    "ordinal": 59,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00886c8c",
      "DATA",
      [
        "storage",
        "00c80fa8",
        null,
        "undefined *"
      ]
    ],
    [
      "00886ce0",
      "READ",
      [
        "storage",
        "00c80fd0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00886c8c",
      "DATA",
      [
        "storage",
        "00c81078",
        null,
        "undefined *"
      ]
    ],
    [
      "00886ce0",
      "READ",
      [
        "storage",
        "00c810a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00886bdc ["INT_ADD", "register:40f0:8", ["const:886bdc:8", "const:4:8"]]
- 00886bdc ["CALL", null, ["callee:0044f920:8"]]
+ 00886c34 ["INT_ADD", "register:40f0:8", ["const:886c34:8", "const:4:8"]]
+ 00886c34 ["CALL", null, ["callee:0044f920:8"]]
- 00886c8c ["COPY", "register:0:8", ["register:4040:8"]]
- 00886c8c ["INT_ADD", "register:40f0:8", ["const:886c8c:8", "const:4:8"]]
- 00886c8c ["CALLIND", null, ["register:0:8"]]
+ 00886ce4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00886ce4 ["INT_ADD", "register:40f0:8", ["const:886ce4:8", "const:4:8"]]
+ 00886ce4 ["CALLIND", null, ["register:0:8"]]
- 00886bc8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00886bc8 ["INT_ADD", "register:40f0:8", ["const:886bc8:8", "const:4:8"]]
- 00886bc8 ["CALLIND", null, ["register:0:8"]]
+ 00886c20 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00886c20 ["INT_ADD", "register:40f0:8", ["const:886c20:8", "const:4:8"]]
+ 00886c20 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-69f3246411a64c1d61594d5f878a5171"></a>

### [`00886de0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00886/00886de0.md) → [`00886e38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00886/00886e38.md) FUN_00886e38

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00886e40",
      "incomplete_value": false,
      "site": "00886e44",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00886de8",
      "incomplete_value": false,
      "site": "00886dec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
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
      "00886e44",
      "DATA",
      [
        "storage",
        "00c80fa8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00886e44",
      "DATA",
      [
        "storage",
        "00c81078",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00886de4 ["COPY", "register:4048:8", ["const:c80000:8"]]
+ 00886e3c ["COPY", "register:4048:8", ["const:c81000:8"]]
- 00886de8 ["COPY", "tmp:0:8", ["const:fa8:8"]]
- 00886de8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00886de8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00886de8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00886e40 ["COPY", "tmp:0:8", ["const:78:8"]]
+ 00886e40 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00886e40 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00886e40 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-6803d8c2d811d1653a4c596797de697a"></a>

### [`00886e00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00886/00886e00.md) → [`00886e58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00886/00886e58.md) FUN_00886e58

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
      "definition_site": "00886e60",
      "incomplete_value": false,
      "site": "00886e64",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00886e08",
      "incomplete_value": false,
      "site": "00886e0c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
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
      "00886e64",
      "DATA",
      [
        "storage",
        "00c80fa8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00886e64",
      "DATA",
      [
        "storage",
        "00c81078",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00886e04 ["COPY", "register:4048:8", ["const:c80000:8"]]
+ 00886e5c ["COPY", "register:4048:8", ["const:c81000:8"]]
- 00886e08 ["COPY", "tmp:0:8", ["const:fa8:8"]]
- 00886e08 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00886e08 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00886e08 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00886e60 ["COPY", "tmp:0:8", ["const:78:8"]]
+ 00886e60 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00886e60 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00886e60 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00886e2c ["INT_ADD", "register:40f0:8", ["const:886e2c:8", "const:4:8"]]
- 00886e2c ["CALL", null, ["callee:00c57f80:8"]]
+ 00886e84 ["INT_ADD", "register:40f0:8", ["const:886e84:8", "const:4:8"]]
+ 00886e84 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-7d13d10ec26832ab4ea00b6804fc192d"></a>

### [`00886ebc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00886/00886ebc.md) → [`00886f14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00886/00886f14.md) FUN_00886f14

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
      "definition_site": "00886f20",
      "incomplete_value": false,
      "site": "00886f20",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00886ec8",
      "incomplete_value": false,
      "site": "00886ec8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
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
      "00886f20",
      "DATA",
      [
        "storage",
        "00c80fa8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00886f20",
      "DATA",
      [
        "storage",
        "00c81078",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00886ec0 ["COPY", "register:4048:8", ["const:c80000:8"]]
+ 00886f18 ["COPY", "register:4048:8", ["const:c81000:8"]]
- 00886ec4 ["COPY", "tmp:0:8", ["const:fa8:8"]]
- 00886ec4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00886ec4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00886ec4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00886f1c ["COPY", "tmp:0:8", ["const:78:8"]]
+ 00886f1c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00886f1c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00886f1c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-80bb5d9c9cd15458e1b2cb28df7caad7"></a>

### [`00886f44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00886/00886f44.md) → [`00886f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00886/00886f9c.md) FUN_00886f9c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 10件 [`0044f8e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044f/0044f8e0.md) [`00457400`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00457/00457400.md) [`00764384`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00764/00764384.md) [`00764ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00764/00764ee0.md) [`00767da4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00767/00767da4.md)
- 新版 呼出元 0件  · 呼出先 10件 [`0044f920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044f920.md) [`00457440`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00457/00457440.md) [`007643dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/007643dc.md) [`00764f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/00764f38.md) [`00767dfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00767/00767dfc.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.65% / 新版 98.65%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00886fd8",
      "value": [
        "leaf",
        "ram:7643dc:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00886f80",
      "value": [
        "leaf",
        "ram:764384:8"
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
      "00886fd8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00764384"
      ]
    ]
  ],
  "added": [
    [
      "00886fd8",
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
- 00886f80 ["INT_ADD", "register:40f0:8", ["const:886f80:8", "const:4:8"]]
- 00886f80 ["CALL", null, ["ram:764384:8"]]
+ 00886fd8 ["INT_ADD", "register:40f0:8", ["const:886fd8:8", "const:4:8"]]
+ 00886fd8 ["CALL", null, ["ram:7643dc:8"]]
- 00886fd8 ["INT_ADD", "register:40f0:8", ["const:886fd8:8", "const:4:8"]]
- 00886fd8 ["CALL", null, ["callee:00c57f80:8"]]
+ 00887030 ["INT_ADD", "register:40f0:8", ["const:887030:8", "const:4:8"]]
+ 00887030 ["CALL", null, ["callee:00c57f80:8"]]
- 00886f70 ["INT_ADD", "register:40f0:8", ["const:886f70:8", "const:4:8"]]
- 00886f70 ["CALL", null, ["callee:0044f920:8"]]
+ 00886fc8 ["INT_ADD", "register:40f0:8", ["const:886fc8:8", "const:4:8"]]
+ 00886fc8 ["CALL", null, ["callee:0044f920:8"]]
~~~


<a id="compare-8286d736a2d0f7a024fdd618f5ae38e0"></a>

### [`008870e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00887/008870e8.md) → [`00887140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/00887140.md) _INIT_164

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 87.01% / 新版 87.01%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008871a0",
      "incomplete_value": true,
      "site": "008871bc",
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
      "definition_site": "00887148",
      "incomplete_value": true,
      "site": "00887164",
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
      "definition_site": "008871c0",
      "incomplete_value": true,
      "site": "008871dc",
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
      "definition_site": "00887168",
      "incomplete_value": true,
      "site": "00887184",
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008871e0",
      "incomplete_value": true,
      "site": "008871f8",
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
    "old": {
      "definition_site": "00887188",
      "incomplete_value": true,
      "site": "008871a0",
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
                "const:f62:8"
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
      "0088717c",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "008871a0",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "008871c0",
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
      "0088717c",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "008871a0",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "008871c0",
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
- 008871bc ["COPY", "tmp:0:8", ["const:f5d:8"]]
- 008871bc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008871bc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008871bc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00887214 ["COPY", "tmp:0:8", ["const:f10:8"]]
+ 00887214 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00887214 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00887214 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 008871dc ["COPY", "tmp:0:8", ["const:f09:8"]]
- 008871dc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008871dc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008871dc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00887234 ["COPY", "tmp:0:8", ["const:ebc:8"]]
+ 00887234 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00887234 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00887234 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0088731c ["INT_ADD", "register:40f0:8", ["const:88731c:8", "const:4:8"]]
- 0088731c ["CALL", null, ["callee:00c57f00:8"]]
+ 00887374 ["INT_ADD", "register:40f0:8", ["const:887374:8", "const:4:8"]]
+ 00887374 ["CALL", null, ["callee:00c57f00:8"]]
~~~


<a id="compare-05754447324d87e762d33e28a142eb9d"></a>

### [`00887478`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00887/00887478.md) → [`008874d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/008874d0.md) FUN_008874d0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 10件 [`0088a7d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088a/0088a7d0.md) [`0088ad68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088a/0088ad68.md) [`0088ae8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088a/0088ae8c.md) [`0088afb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088a/0088afb0.md) [`0088b0d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088b/0088b0d4.md) · 呼出先 12件 [`00888e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00888/00888e30.md) [`00888e34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00888/00888e34.md) [`00888e7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00888/00888e7c.md) [`00889030`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00889/00889030.md) [`00889034`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00889/00889034.md)
- 新版 呼出元 10件 [`0088a828`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088a828.md) [`0088adc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088adc0.md) [`0088aee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088aee4.md) [`0088b008`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b008.md) [`0088b12c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b12c.md) · 呼出先 12件 [`00888e88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00888/00888e88.md) [`00888e8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00888/00888e8c.md) [`00888ed4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00888/00888ed4.md) [`00889088`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00889/00889088.md) [`0088908c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00889/0088908c.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `store_value` 5件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00887504",
      "incomplete_value": false,
      "site": "00887508",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:108:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008874ac",
      "incomplete_value": false,
      "site": "008874b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:38:8"
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
      "definition_site": "00887540",
      "incomplete_value": false,
      "site": "00887540",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:2c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008874e8",
      "incomplete_value": false,
      "site": "008874e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:1f0:8"
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
      "definition_site": "00887590",
      "incomplete_value": false,
      "site": "00887590",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:350:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00887538",
      "incomplete_value": false,
      "site": "00887538",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:280:8"
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
      "00887508",
      "DATA",
      [
        "storage",
        "00c81038",
        null,
        "pointer"
      ]
    ],
    [
      "00887540",
      "DATA",
      [
        "storage",
        "00c811f0",
        null,
        "undefined *"
      ]
    ],
    [
      "00887574",
      "READ",
      [
        "storage",
        "00c81210",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00887508",
      "DATA",
      [
        "storage",
        "00c81108",
        null,
        "pointer"
      ]
    ],
    [
      "00887540",
      "DATA",
      [
        "storage",
        "00c812c0",
        null,
        "undefined *"
      ]
    ],
    [
      "00887574",
      "READ",
      [
        "storage",
        "00c812e0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00887540 ["INT_ADD", "register:40f0:8", ["const:887540:8", "const:4:8"]]
- 00887540 ["CALL", null, ["callee:008890c8:8"]]
+ 00887598 ["INT_ADD", "register:40f0:8", ["const:887598:8", "const:4:8"]]
+ 00887598 ["CALL", null, ["callee:008890c8:8"]]
- 008874ac ["COPY", "tmp:0:8", ["const:38:8"]]
- 008874ac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008874ac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008874ac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00887504 ["COPY", "tmp:0:8", ["const:108:8"]]
+ 00887504 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00887504 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00887504 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008874b4 ["COPY", "register:4040:8", ["const:c81000:8"]]
~~~


<a id="compare-f7f818699575c6470be60a7701202848"></a>

### [`008876f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00887/008876f0.md) → [`00887748`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/00887748.md) FUN_00887748

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`00851504`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/00851504.md) · 呼出先 0件 
- 新版 呼出元 1件 [`0085155c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/0085155c.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088775c",
      "incomplete_value": false,
      "site": "00887760",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ba000:8"
          ],
          [
            "leaf",
            "const:862:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00887704",
      "incomplete_value": false,
      "site": "00887708",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ba000:8"
          ],
          [
            "leaf",
            "const:8b6:8"
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
      "00887760",
      "DATA",
      [
        "storage",
        "002ba8b6",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00887760",
      "DATA",
      [
        "storage",
        "002ba862",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00887704 ["COPY", "tmp:0:8", ["const:8b6:8"]]
- 00887704 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00887704 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00887704 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088775c ["COPY", "tmp:0:8", ["const:862:8"]]
+ 0088775c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088775c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088775c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-bf5b95c80d7e036cf4828448f2c3e1e2"></a>

### [`008877e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00887/008877e0.md) → [`00887838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/00887838.md) FUN_00887838

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`00a9add8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9a/00a9add8.md) · 呼出先 4件 [`00889b9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00889/00889b9c.md) [`00889ba0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00889/00889ba0.md) [`00b373dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b37/00b373dc.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00a9ae48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9ae48.md) · 呼出先 4件 [`00889bf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00889/00889bf4.md) [`00889bf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00889/00889bf8.md) [`00b37478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b37/00b37478.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.35% / 新版 95.35%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088786c",
      "incomplete_value": false,
      "site": "0088786c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:4e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00887814",
      "incomplete_value": false,
      "site": "00887814",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:410:8"
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
      "0088786c",
      "DATA",
      [
        "storage",
        "00c81410",
        null,
        "undefined *"
      ]
    ],
    [
      "008878ac",
      "READ",
      [
        "storage",
        "00c81430",
        null,
        "pointer"
      ]
    ],
    [
      "008878ac",
      "READ",
      [
        "storage",
        "00c81438",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088786c",
      "DATA",
      [
        "storage",
        "00c814e0",
        null,
        "undefined *"
      ]
    ],
    [
      "008878ac",
      "READ",
      [
        "storage",
        "00c81500",
        null,
        "pointer"
      ]
    ],
    [
      "008878ac",
      "READ",
      [
        "storage",
        "00c81508",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088780c ["COPY", "tmp:0:8", ["const:410:8"]]
- 0088780c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088780c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088780c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00887864 ["COPY", "tmp:0:8", ["const:4e0:8"]]
+ 00887864 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00887864 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00887864 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0088782c ["INT_ADD", "register:40f0:8", ["const:88782c:8", "const:4:8"]]
- 0088782c ["CALL", null, ["callee:00b37478:8"]]
+ 00887884 ["INT_ADD", "register:40f0:8", ["const:887884:8", "const:4:8"]]
+ 00887884 ["CALL", null, ["callee:00b37478:8"]]
- 00887858 ["COPY", "register:0:8", ["register:4040:8"]]
- 00887858 ["INT_ADD", "register:40f0:8", ["const:887858:8", "const:4:8"]]
- 00887858 ["CALLIND", null, ["register:0:8"]]
+ 008878b0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008878b0 ["INT_ADD", "register:40f0:8", ["const:8878b0:8", "const:4:8"]]
+ 008878b0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-977ac19dff8709a0ecc60d762809a4e6"></a>

### [`008878d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00887/008878d8.md) → [`00887930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/00887930.md) FUN_00887930

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 7件 [`005fe66c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fe/005fe66c.md) [`00605254`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00605/00605254.md) [`006b380c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b3/006b380c.md) [`0073c938`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0073c/0073c938.md) [`0075eb80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0075e/0075eb80.md) · 呼出先 24件 [`0043e94c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043e/0043e94c.md) [`00597a8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597a8c.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`0087eac0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087e/0087eac0.md) [`0088802c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00888/0088802c.md)
- 新版 呼出元 7件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`00605294`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00605/00605294.md) [`006b3864`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b3/006b3864.md) [`0073c990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073c/0073c990.md) [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) · 呼出先 24件 [`0043e98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e98c.md) [`00597acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597acc.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`0087eb18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087eb18.md) [`00888084`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00888/00888084.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.76% / 新版 99.76%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00887a80",
      "incomplete_value": true,
      "site": "00887a88",
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
                "const:750:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00887a28",
      "incomplete_value": true,
      "site": "00887a30",
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
                "const:680:8"
              ]
            ]
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
      "00887a80",
      "READ",
      [
        "storage",
        "00c9b680",
        null,
        "pointer"
      ]
    ],
    [
      "00887a80",
      "PARAM",
      [
        "storage",
        "011236a0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00887a80",
      "READ",
      [
        "storage",
        "00c9b750",
        null,
        "pointer"
      ]
    ],
    [
      "00887a80",
      "PARAM",
      [
        "storage",
        "011237a0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00887a30 ["INT_ADD", "register:40f0:8", ["const:887a30:8", "const:4:8"]]
- 00887a30 ["CALL", null, ["callee:0087eb18:8"]]
+ 00887a88 ["INT_ADD", "register:40f0:8", ["const:887a88:8", "const:4:8"]]
+ 00887a88 ["CALL", null, ["callee:0087eb18:8"]]
- 008879ec ["INT_ADD", "register:40f0:8", ["const:8879ec:8", "const:4:8"]]
- 008879ec ["CALL", null, ["callee:0088adc0:8"]]
+ 00887a44 ["INT_ADD", "register:40f0:8", ["const:887a44:8", "const:4:8"]]
+ 00887a44 ["CALL", null, ["callee:0088adc0:8"]]
- 00887a10 ["INT_ADD", "register:40f0:8", ["const:887a10:8", "const:4:8"]]
- 00887a10 ["CALL", null, ["callee:0088a948:8"]]
+ 00887a68 ["INT_ADD", "register:40f0:8", ["const:887a68:8", "const:4:8"]]
+ 00887a68 ["CALL", null, ["callee:0088a948:8"]]
~~~


<a id="compare-4ce469ecdde152481ca02e6a03cd1028"></a>

### [`00888428`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00888/00888428.md) → [`00888480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00888/00888480.md) FUN_00888480

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 6件 [`0061671c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00616/0061671c.md) [`0062626c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00626/0062626c.md) [`006ff318`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ff/006ff318.md) [`0074140c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00741/0074140c.md) [`007fd37c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fd/007fd37c.md) · 呼出先 11件 [`0058f434`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0058f/0058f434.md) [`0088b938`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088b/0088b938.md) [`0088b93c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088b/0088b93c.md) [`0088ba48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088b/0088ba48.md) [`0088ba4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088b/0088ba4c.md)
- 新版 呼出元 6件 [`0061675c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00616/0061675c.md) [`006262ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00626/006262ac.md) [`006ff370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ff/006ff370.md) [`00741464`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00741/00741464.md) [`007fd3d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fd3d4.md) · 呼出先 11件 [`0058f474`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058f474.md) [`0088b990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b990.md) [`0088b994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b994.md) [`0088baa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088baa0.md) [`0088baa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088baa4.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.43% / 新版 95.43%

優先判定に残った影響 `store_value` 4件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008885e0",
      "incomplete_value": false,
      "site": "008885e0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:910:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00888588",
      "incomplete_value": false,
      "site": "00888588",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:840:8"
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
      "definition_site": "00888604",
      "incomplete_value": false,
      "site": "00888604",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:990:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008885ac",
      "incomplete_value": false,
      "site": "008885ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:8c0:8"
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
      "definition_site": "0088861c",
      "incomplete_value": false,
      "site": "0088861c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:a10:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008885c4",
      "incomplete_value": false,
      "site": "008885c4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:940:8"
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
      "008885e0",
      "DATA",
      [
        "storage",
        "00c81840",
        null,
        "undefined *"
      ]
    ],
    [
      "00888604",
      "DATA",
      [
        "storage",
        "00c818c0",
        null,
        "undefined *"
      ]
    ],
    [
      "0088861c",
      "DATA",
      [
        "storage",
        "00c81940",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008885e0",
      "DATA",
      [
        "storage",
        "00c81910",
        null,
        "undefined *"
      ]
    ],
    [
      "00888604",
      "DATA",
      [
        "storage",
        "00c81990",
        null,
        "undefined *"
      ]
    ],
    [
      "0088861c",
      "DATA",
      [
        "storage",
        "00c81a10",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00888584 ["COPY", "tmp:0:8", ["const:840:8"]]
- 00888584 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00888584 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00888584 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008885dc ["COPY", "tmp:0:8", ["const:910:8"]]
+ 008885dc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008885dc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008885dc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00888510 ["COPY", "register:0:8", ["register:4040:8"]]
- 00888510 ["INT_ADD", "register:40f0:8", ["const:888510:8", "const:4:8"]]
- 00888510 ["CALLIND", null, ["register:0:8"]]
+ 00888568 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00888568 ["INT_ADD", "register:40f0:8", ["const:888568:8", "const:4:8"]]
+ 00888568 ["CALLIND", null, ["register:0:8"]]
- 0088853c ["COPY", "register:0:8", ["register:4040:8"]]
- 0088853c ["INT_ADD", "register:40f0:8", ["const:88853c:8", "const:4:8"]]
- 0088853c ["CALLIND", null, ["register:0:8"]]
+ 00888594 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00888594 ["INT_ADD", "register:40f0:8", ["const:888594:8", "const:4:8"]]
+ 00888594 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-d33ffab78ff411c44dc2f08963ea2c6c"></a>

### [`00888854`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00888/00888854.md) → [`008888ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00888/008888ac.md) FUN_008888ac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`007fd5f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fd/007fd5f0.md) · 呼出先 4件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c58610`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58610.md)
- 新版 呼出元 1件 [`007fd648`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fd648.md) · 呼出先 4件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c586e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c586e0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.70% / 新版 97.70%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0088898c",
      "incomplete_value": false,
      "site": "0088899c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:1f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00888934",
      "incomplete_value": false,
      "site": "00888944",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00888994",
      "incomplete_value": false,
      "site": "0088899c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:208:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088893c",
      "incomplete_value": false,
      "site": "00888944",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:138:8"
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
      "0088898c",
      "PARAM",
      [
        "storage",
        "00c81128",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00888994",
      "PARAM",
      [
        "storage",
        "00c81138",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "0088898c",
      "PARAM",
      [
        "storage",
        "00c811f8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00888994",
      "PARAM",
      [
        "storage",
        "00c81208",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 00888944 ["INT_ADD", "register:40f0:8", ["const:888944:8", "const:4:8"]]
- 00888944 ["CALL", null, ["callee:00c586e0:8"]]
+ 0088899c ["INT_ADD", "register:40f0:8", ["const:88899c:8", "const:4:8"]]
+ 0088899c ["CALL", null, ["callee:00c586e0:8"]]
- 00888934 ["COPY", "tmp:0:8", ["const:128:8"]]
- 00888934 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 00888934 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 00888934 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 0088898c ["COPY", "tmp:0:8", ["const:1f8:8"]]
+ 0088898c ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 0088898c ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 0088898c ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
- 0088893c ["COPY", "tmp:0:8", ["const:138:8"]]
- 0088893c ["INT_CARRY", "register:105:1", ["register:4010:8", "tmp:0:8"]]
- 0088893c ["INT_SCARRY", "register:106:1", ["register:4010:8", "tmp:0:8"]]
- 0088893c ["INT_ADD", "tmp:1:8", ["register:4010:8", "tmp:0:8"]]
+ 00888994 ["COPY", "tmp:0:8", ["const:208:8"]]
+ 00888994 ["INT_CARRY", "register:105:1", ["register:4010:8", "tmp:0:8"]]
+ 00888994 ["INT_SCARRY", "register:106:1", ["register:4010:8", "tmp:0:8"]]
+ 00888994 ["INT_ADD", "tmp:1:8", ["register:4010:8", "tmp:0:8"]]
~~~


<a id="compare-ccc2656b01db64e12776e0ff6980f32c"></a>

### [`008889b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00888/008889b0.md) → [`00888a08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00888/00888a08.md) FUN_00888a08

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`006ff640`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ff/006ff640.md) [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) · 呼出先 5件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58610`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58610.md)
- 新版 呼出元 2件 [`006ff698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ff/006ff698.md) [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 5件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c586e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c586e0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.55% / 新版 97.55%

優先判定に残った影響 `call_argument_candidate` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00888c74",
      "incomplete_value": false,
      "site": "00888c84",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:1f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00888c1c",
      "incomplete_value": false,
      "site": "00888c2c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00888c7c",
      "incomplete_value": false,
      "site": "00888c84",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:280:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00888c24",
      "incomplete_value": false,
      "site": "00888c2c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:1b0:8"
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
    "new": {
      "definition_site": "00888ccc",
      "incomplete_value": false,
      "site": "00888cdc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:1f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00888c74",
      "incomplete_value": false,
      "site": "00888c84",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:128:8"
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
      "00888c74",
      "PARAM",
      [
        "storage",
        "00c81128",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00888c7c",
      "PARAM",
      [
        "storage",
        "00c811b0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00888ccc",
      "PARAM",
      [
        "storage",
        "00c81128",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "00888c74",
      "PARAM",
      [
        "storage",
        "00c811f8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00888c7c",
      "PARAM",
      [
        "storage",
        "00c81280",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00888ccc",
      "PARAM",
      [
        "storage",
        "00c811f8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 00888c2c ["INT_ADD", "register:40f0:8", ["const:888c2c:8", "const:4:8"]]
- 00888c2c ["CALL", null, ["callee:00c586e0:8"]]
+ 00888c84 ["INT_ADD", "register:40f0:8", ["const:888c84:8", "const:4:8"]]
+ 00888c84 ["CALL", null, ["callee:00c586e0:8"]]
- 00888c84 ["INT_ADD", "register:40f0:8", ["const:888c84:8", "const:4:8"]]
- 00888c84 ["CALL", null, ["callee:00c586e0:8"]]
+ 00888cdc ["INT_ADD", "register:40f0:8", ["const:888cdc:8", "const:4:8"]]
+ 00888cdc ["CALL", null, ["callee:00c586e0:8"]]
- 00888c1c ["COPY", "tmp:0:8", ["const:128:8"]]
- 00888c1c ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 00888c1c ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 00888c1c ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 00888c74 ["COPY", "tmp:0:8", ["const:1f8:8"]]
+ 00888c74 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 00888c74 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 00888c74 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-33ba02ed43d55ed94a8db5cc77082fe9"></a>

### [`00888de8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00888/00888de8.md) → [`00888e40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00888/00888e40.md) FUN_00888e40

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
      "definition_site": "00888e64",
      "incomplete_value": false,
      "site": "00888e64",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:2c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00888e0c",
      "incomplete_value": false,
      "site": "00888e0c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:1f0:8"
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
      "00888e64",
      "DATA",
      [
        "storage",
        "00c811f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00888e64",
      "DATA",
      [
        "storage",
        "00c812c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00888dfc ["INT_ADD", "register:40f0:8", ["const:888dfc:8", "const:4:8"]]
- 00888dfc ["CALL", null, ["callee:00c57f60:8"]]
+ 00888e54 ["INT_ADD", "register:40f0:8", ["const:888e54:8", "const:4:8"]]
+ 00888e54 ["CALL", null, ["callee:00c57f60:8"]]
- 00888e08 ["COPY", "tmp:0:8", ["const:1f0:8"]]
- 00888e08 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00888e08 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00888e08 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00888e60 ["COPY", "tmp:0:8", ["const:2c0:8"]]
+ 00888e60 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00888e60 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00888e60 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b201827a54355a59c6d669356f034d6c"></a>

### [`00888e1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00888/00888e1c.md) → [`00888e74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00888/00888e74.md) FUN_00888e74

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
      "definition_site": "00888e80",
      "incomplete_value": false,
      "site": "00888e80",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:2c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00888e28",
      "incomplete_value": false,
      "site": "00888e28",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:1f0:8"
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
      "00888e80",
      "DATA",
      [
        "storage",
        "00c811f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00888e80",
      "DATA",
      [
        "storage",
        "00c812c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00888e24 ["COPY", "tmp:0:8", ["const:1f0:8"]]
- 00888e24 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00888e24 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00888e24 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00888e7c ["COPY", "tmp:0:8", ["const:2c0:8"]]
+ 00888e7c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00888e7c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00888e7c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-2268cf7d19abe44474f22dccdf5d9394"></a>

### [`00888fe8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00888/00888fe8.md) → [`00889040`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00889/00889040.md) FUN_00889040

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
      "definition_site": "00889064",
      "incomplete_value": false,
      "site": "00889064",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:350:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088900c",
      "incomplete_value": false,
      "site": "0088900c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:280:8"
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
      "00889064",
      "DATA",
      [
        "storage",
        "00c81280",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00889064",
      "DATA",
      [
        "storage",
        "00c81350",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00888ffc ["INT_ADD", "register:40f0:8", ["const:888ffc:8", "const:4:8"]]
- 00888ffc ["CALL", null, ["callee:00c57f60:8"]]
+ 00889054 ["INT_ADD", "register:40f0:8", ["const:889054:8", "const:4:8"]]
+ 00889054 ["CALL", null, ["callee:00c57f60:8"]]
- 00889008 ["COPY", "tmp:0:8", ["const:280:8"]]
- 00889008 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00889008 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00889008 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00889060 ["COPY", "tmp:0:8", ["const:350:8"]]
+ 00889060 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00889060 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00889060 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9fc2fe29ef1c634a197e472151ff19b2"></a>

### [`0088901c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00889/0088901c.md) → [`00889074`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00889/00889074.md) FUN_00889074

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
      "definition_site": "00889080",
      "incomplete_value": false,
      "site": "00889080",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:350:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00889028",
      "incomplete_value": false,
      "site": "00889028",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:280:8"
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
      "00889080",
      "DATA",
      [
        "storage",
        "00c81280",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00889080",
      "DATA",
      [
        "storage",
        "00c81350",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00889024 ["COPY", "tmp:0:8", ["const:280:8"]]
- 00889024 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00889024 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00889024 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0088907c ["COPY", "tmp:0:8", ["const:350:8"]]
+ 0088907c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0088907c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0088907c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-bbbcebee5c0b25649e0b611d92c6c92e"></a>

### [`008891dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00889/008891dc.md) → [`00889234`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00889/00889234.md) FUN_00889234

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
      "definition_site": "00889248",
      "incomplete_value": false,
      "site": "0088924c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:3e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008891f0",
      "incomplete_value": false,
      "site": "008891f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:310:8"
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
      "0088924c",
      "DATA",
      [
        "storage",
        "00c81310",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088924c",
      "DATA",
      [
        "storage",
        "00c813e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008891e8 ["INT_ADD", "register:40f0:8", ["const:8891e8:8", "const:4:8"]]
- 008891e8 ["CALL", null, ["callee:00c57f60:8"]]
+ 00889240 ["INT_ADD", "register:40f0:8", ["const:889240:8", "const:4:8"]]
+ 00889240 ["CALL", null, ["callee:00c57f60:8"]]
- 008891f0 ["COPY", "tmp:0:8", ["const:310:8"]]
- 008891f0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008891f0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008891f0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00889248 ["COPY", "tmp:0:8", ["const:3e0:8"]]
+ 00889248 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00889248 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00889248 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c16bbd5674e888573883a6fb5d6fc56c"></a>

### [`00889200`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00889/00889200.md) → [`00889258`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00889/00889258.md) FUN_00889258

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
      "definition_site": "0088925c",
      "incomplete_value": false,
      "site": "00889260",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:3e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00889204",
      "incomplete_value": false,
      "site": "00889208",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:310:8"
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
      "00889260",
      "DATA",
      [
        "storage",
        "00c81310",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00889260",
      "DATA",
      [
        "storage",
        "00c813e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00889204 ["COPY", "tmp:0:8", ["const:310:8"]]
- 00889204 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00889204 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00889204 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088925c ["COPY", "tmp:0:8", ["const:3e0:8"]]
+ 0088925c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088925c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088925c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b659cf79e32d77be12d33aff0af92105"></a>

### [`008896d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00889/008896d8.md) → [`00889730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00889/00889730.md) FUN_00889730

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
      "definition_site": "00889754",
      "incomplete_value": false,
      "site": "00889754",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:460:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008896fc",
      "incomplete_value": false,
      "site": "008896fc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:390:8"
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
      "00889754",
      "DATA",
      [
        "storage",
        "00c81390",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00889754",
      "DATA",
      [
        "storage",
        "00c81460",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008896ec ["INT_ADD", "register:40f0:8", ["const:8896ec:8", "const:4:8"]]
- 008896ec ["CALL", null, ["callee:00c57f60:8"]]
+ 00889744 ["INT_ADD", "register:40f0:8", ["const:889744:8", "const:4:8"]]
+ 00889744 ["CALL", null, ["callee:00c57f60:8"]]
- 008896f8 ["COPY", "tmp:0:8", ["const:390:8"]]
- 008896f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008896f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008896f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00889750 ["COPY", "tmp:0:8", ["const:460:8"]]
+ 00889750 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00889750 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00889750 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-24265c08a3acd7486f211217afe4a14b"></a>

### [`0088970c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00889/0088970c.md) → [`00889764`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00889/00889764.md) FUN_00889764

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
      "definition_site": "00889770",
      "incomplete_value": false,
      "site": "00889770",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:460:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00889718",
      "incomplete_value": false,
      "site": "00889718",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:390:8"
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
      "00889770",
      "DATA",
      [
        "storage",
        "00c81390",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00889770",
      "DATA",
      [
        "storage",
        "00c81460",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00889714 ["COPY", "tmp:0:8", ["const:390:8"]]
- 00889714 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00889714 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00889714 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0088976c ["COPY", "tmp:0:8", ["const:460:8"]]
+ 0088976c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0088976c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0088976c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-3eb53f6061e6cbffac568388f1812ff4"></a>

### [`00889b88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00889/00889b88.md) → [`00889be0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00889/00889be0.md) FUN_00889be0

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
      "definition_site": "00889bec",
      "incomplete_value": false,
      "site": "00889bec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:4e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00889b94",
      "incomplete_value": false,
      "site": "00889b94",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:410:8"
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
      "00889bec",
      "DATA",
      [
        "storage",
        "00c81410",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00889bec",
      "DATA",
      [
        "storage",
        "00c814e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00889b90 ["COPY", "tmp:0:8", ["const:410:8"]]
- 00889b90 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00889b90 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00889b90 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00889be8 ["COPY", "tmp:0:8", ["const:4e0:8"]]
+ 00889be8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00889be8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00889be8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-361e742147fe6041e4257225714dd5be"></a>

### [`00889ba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00889/00889ba4.md) → [`00889bfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00889/00889bfc.md) FUN_00889bfc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 6件 [`00889d68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00889/00889d68.md) [`00889d6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00889/00889d6c.md) [`0088a164`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088a/0088a164.md) [`0088a168`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088a/0088a168.md) [`00b37b88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b37/00b37b88.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00889dc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00889/00889dc0.md) [`00889dc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00889/00889dc4.md) [`0088a1bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088a1bc.md) [`0088a1c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088a1c0.md) [`00b37c24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b37/00b37c24.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.34% / 新版 94.34%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00889c40",
      "incomplete_value": false,
      "site": "00889c40",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:5d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00889be8",
      "incomplete_value": false,
      "site": "00889be8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:500:8"
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
      "00889c34",
      "DATA",
      [
        "storage",
        "00c81480",
        null,
        "undefined *"
      ]
    ],
    [
      "00889c40",
      "DATA",
      [
        "storage",
        "00c81500",
        null,
        "undefined *"
      ]
    ],
    [
      "00889c74",
      "READ",
      [
        "storage",
        "00c81520",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00889c34",
      "DATA",
      [
        "storage",
        "00c81550",
        null,
        "undefined *"
      ]
    ],
    [
      "00889c40",
      "DATA",
      [
        "storage",
        "00c815d0",
        null,
        "undefined *"
      ]
    ],
    [
      "00889c74",
      "READ",
      [
        "storage",
        "00c815f0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00889bbc ["COPY", "tmp:0:8", ["const:480:8"]]
- 00889bbc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00889bbc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00889bbc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00889c14 ["COPY", "tmp:0:8", ["const:550:8"]]
+ 00889c14 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00889c14 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00889c14 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00889be4 ["COPY", "tmp:0:8", ["const:500:8"]]
- 00889be4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00889be4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00889be4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00889c3c ["COPY", "tmp:0:8", ["const:5d0:8"]]
+ 00889c3c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00889c3c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00889c3c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00889bf4 ["INT_ADD", "register:40f0:8", ["const:889bf4:8", "const:4:8"]]
- 00889bf4 ["CALL", null, ["callee:00b37c24:8"]]
+ 00889c4c ["INT_ADD", "register:40f0:8", ["const:889c4c:8", "const:4:8"]]
+ 00889c4c ["CALL", null, ["callee:00b37c24:8"]]
~~~


<a id="compare-827d7bc4c0540df3c2824b4244e8dd33"></a>

### [`00889d20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00889/00889d20.md) → [`00889d78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00889/00889d78.md) FUN_00889d78

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
      "definition_site": "00889d9c",
      "incomplete_value": false,
      "site": "00889d9c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:550:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00889d44",
      "incomplete_value": false,
      "site": "00889d44",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:480:8"
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
      "00889d9c",
      "DATA",
      [
        "storage",
        "00c81480",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00889d9c",
      "DATA",
      [
        "storage",
        "00c81550",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00889d34 ["INT_ADD", "register:40f0:8", ["const:889d34:8", "const:4:8"]]
- 00889d34 ["CALL", null, ["callee:00c57f60:8"]]
+ 00889d8c ["INT_ADD", "register:40f0:8", ["const:889d8c:8", "const:4:8"]]
+ 00889d8c ["CALL", null, ["callee:00c57f60:8"]]
- 00889d40 ["COPY", "tmp:0:8", ["const:480:8"]]
- 00889d40 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00889d40 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00889d40 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00889d98 ["COPY", "tmp:0:8", ["const:550:8"]]
+ 00889d98 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00889d98 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00889d98 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-333a7b9670028c919a7769db5888fcc3"></a>

### [`00889d54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00889/00889d54.md) → [`00889dac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00889/00889dac.md) FUN_00889dac

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
      "definition_site": "00889db8",
      "incomplete_value": false,
      "site": "00889db8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:550:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00889d60",
      "incomplete_value": false,
      "site": "00889d60",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
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
      "00889db8",
      "DATA",
      [
        "storage",
        "00c81480",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00889db8",
      "DATA",
      [
        "storage",
        "00c81550",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00889d5c ["COPY", "tmp:0:8", ["const:480:8"]]
- 00889d5c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00889d5c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00889d5c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00889db4 ["COPY", "tmp:0:8", ["const:550:8"]]
+ 00889db4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00889db4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00889db4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-3c357b07cc6b719f55968139778a77a1"></a>

### [`00889d70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00889/00889d70.md) → [`00889dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00889/00889dc8.md) FUN_00889dc8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 10件 [`0044108c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/0044108c.md) [`0046d490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d490.md) [`0052dd00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0052d/0052dd00.md) [`0066d0fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0066d/0066d0fc.md) [`006a2b78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a2/006a2b78.md)
- 新版 呼出元 0件  · 呼出先 10件 [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0052dd40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0052d/0052dd40.md) [`0066d13c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066d/0066d13c.md) [`006a2bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2bd0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.41% / 新版 96.41%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00889e60",
      "incomplete_value": true,
      "site": "00889e60",
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
                "const:662:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00889e08",
      "incomplete_value": true,
      "site": "00889e08",
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
                "const:6af:8"
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
      "definition_site": "00889ee8",
      "incomplete_value": true,
      "site": "00889ee8",
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
                "const:942:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00889e90",
      "incomplete_value": true,
      "site": "00889e90",
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
                "const:996:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 25,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00889e50",
      "READ",
      [
        "storage",
        "002a06af",
        null,
        "string"
      ]
    ],
    [
      "00889ec4",
      "READ",
      [
        "storage",
        "002bb996",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00889e50",
      "READ",
      [
        "storage",
        "002a0662",
        null,
        "string"
      ]
    ],
    [
      "00889ec4",
      "READ",
      [
        "storage",
        "002bb942",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00889da8 ["INT_ADD", "register:40f0:8", ["const:889da8:8", "const:4:8"]]
- 00889da8 ["CALL", null, ["callee:00c581b0:8"]]
+ 00889e00 ["INT_ADD", "register:40f0:8", ["const:889e00:8", "const:4:8"]]
+ 00889e00 ["CALL", null, ["callee:00c581b0:8"]]
- 00889db4 ["INT_ADD", "register:40f0:8", ["const:889db4:8", "const:4:8"]]
- 00889db4 ["CALL", null, ["callee:00c58450:8"]]
+ 00889e0c ["INT_ADD", "register:40f0:8", ["const:889e0c:8", "const:4:8"]]
+ 00889e0c ["CALL", null, ["callee:00c58450:8"]]
- 00889dbc ["INT_ADD", "register:40f0:8", ["const:889dbc:8", "const:4:8"]]
- 00889dbc ["CALL", null, ["callee:00c581c0:8"]]
+ 00889e14 ["INT_ADD", "register:40f0:8", ["const:889e14:8", "const:4:8"]]
+ 00889e14 ["CALL", null, ["callee:00c581c0:8"]]
~~~


<a id="compare-ac3635418b41b6b4b4765d120c60339d"></a>

### [`0088a11c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088a/0088a11c.md) → [`0088a174`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088a174.md) FUN_0088a174

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
      "definition_site": "0088a198",
      "incomplete_value": false,
      "site": "0088a198",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:5d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088a140",
      "incomplete_value": false,
      "site": "0088a140",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:500:8"
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
      "0088a198",
      "DATA",
      [
        "storage",
        "00c81500",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088a198",
      "DATA",
      [
        "storage",
        "00c815d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088a130 ["INT_ADD", "register:40f0:8", ["const:88a130:8", "const:4:8"]]
- 0088a130 ["CALL", null, ["callee:00c57f60:8"]]
+ 0088a188 ["INT_ADD", "register:40f0:8", ["const:88a188:8", "const:4:8"]]
+ 0088a188 ["CALL", null, ["callee:00c57f60:8"]]
- 0088a13c ["COPY", "tmp:0:8", ["const:500:8"]]
- 0088a13c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088a13c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088a13c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088a194 ["COPY", "tmp:0:8", ["const:5d0:8"]]
+ 0088a194 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088a194 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088a194 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a4d71eeae74af6244ed97b064b590e30"></a>

### [`0088a150`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088a/0088a150.md) → [`0088a1a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088a1a8.md) FUN_0088a1a8

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
      "definition_site": "0088a1b4",
      "incomplete_value": false,
      "site": "0088a1b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:5d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088a15c",
      "incomplete_value": false,
      "site": "0088a15c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:500:8"
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
      "0088a1b4",
      "DATA",
      [
        "storage",
        "00c81500",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088a1b4",
      "DATA",
      [
        "storage",
        "00c815d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088a158 ["COPY", "tmp:0:8", ["const:500:8"]]
- 0088a158 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0088a158 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0088a158 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0088a1b0 ["COPY", "tmp:0:8", ["const:5d0:8"]]
+ 0088a1b0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0088a1b0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0088a1b0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-ea69ada3b7a484a9b44c68cd79ea3efa"></a>

### [`0088a16c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088a/0088a16c.md) → [`0088a1c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088a1c4.md) FUN_0088a1c4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 11件 [`0048ce50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce50.md) [`0069ef14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0069e/0069ef14.md) [`006a2b78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a2/006a2b78.md) [`006a2d48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a2/006a2d48.md) [`006a2d4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a2/006a2d4c.md)
- 新版 呼出元 0件  · 呼出先 11件 [`0048ce90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce90.md) [`0069ef6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069e/0069ef6c.md) [`006a2bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2bd0.md) [`006a2da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2da0.md) [`006a2da4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2da4.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.20% / 新版 96.20%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088a260",
      "incomplete_value": false,
      "site": "0088a26c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:640:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088a208",
      "incomplete_value": false,
      "site": "0088a214",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:570:8"
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
      "definition_site": "0088a220",
      "incomplete_value": false,
      "site": "0088a22c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:6a2000:8"
          ],
          [
            "leaf",
            "const:da0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088a1c8",
      "incomplete_value": false,
      "site": "0088a1d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:6a2000:8"
          ],
          [
            "leaf",
            "const:d48:8"
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
      "0088a220",
      "PARAM",
      [
        "storage",
        "006a2d48",
        null,
        null
      ]
    ],
    [
      "0088a26c",
      "DATA",
      [
        "storage",
        "00c81570",
        null,
        "undefined *"
      ]
    ],
    [
      "0088a2b8",
      "READ",
      [
        "storage",
        "00c81590",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0088a220",
      "PARAM",
      [
        "storage",
        "006a2da0",
        null,
        null
      ]
    ],
    [
      "0088a26c",
      "DATA",
      [
        "storage",
        "00c81640",
        null,
        "undefined *"
      ]
    ],
    [
      "0088a2b8",
      "READ",
      [
        "storage",
        "00c81660",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088a1d4 ["INT_ADD", "register:40f0:8", ["const:88a1d4:8", "const:4:8"]]
- 0088a1d4 ["CALL", null, ["callee:006a2da4:8"]]
+ 0088a22c ["INT_ADD", "register:40f0:8", ["const:88a22c:8", "const:4:8"]]
+ 0088a22c ["CALL", null, ["callee:006a2da4:8"]]
- 0088a19c ["INT_ADD", "register:40f0:8", ["const:88a19c:8", "const:4:8"]]
- 0088a19c ["CALL", null, ["callee:00c57f60:8"]]
+ 0088a1f4 ["INT_ADD", "register:40f0:8", ["const:88a1f4:8", "const:4:8"]]
+ 0088a1f4 ["CALL", null, ["callee:00c57f60:8"]]
- 0088a1c8 ["COPY", "tmp:0:8", ["const:d48:8"]]
- 0088a1c8 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 0088a1c8 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 0088a1c8 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 0088a220 ["COPY", "tmp:0:8", ["const:da0:8"]]
+ 0088a220 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 0088a220 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 0088a220 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-7fcdce60dc1f087d8a093d1e44b00fdb"></a>

### [`0088a34c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088a/0088a34c.md) → [`0088a3a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088a3a4.md) FUN_0088a3a4

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
      "definition_site": "0088a3b8",
      "incomplete_value": false,
      "site": "0088a3bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:640:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088a360",
      "incomplete_value": false,
      "site": "0088a364",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:570:8"
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
      "0088a3bc",
      "DATA",
      [
        "storage",
        "00c81570",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088a3bc",
      "DATA",
      [
        "storage",
        "00c81640",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088a358 ["INT_ADD", "register:40f0:8", ["const:88a358:8", "const:4:8"]]
- 0088a358 ["CALL", null, ["callee:00c57f60:8"]]
+ 0088a3b0 ["INT_ADD", "register:40f0:8", ["const:88a3b0:8", "const:4:8"]]
+ 0088a3b0 ["CALL", null, ["callee:00c57f60:8"]]
- 0088a360 ["COPY", "tmp:0:8", ["const:570:8"]]
- 0088a360 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088a360 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088a360 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088a3b8 ["COPY", "tmp:0:8", ["const:640:8"]]
+ 0088a3b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088a3b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088a3b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


