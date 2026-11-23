# v16.0.1 → v16.0.2 · 最優先の変更候補 (77)

[一覧の目次](README.md)

<a id="compare-15e66ca04f476b1693de7f89f8c34406"></a>

### [`00b426e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b42/00b426e4.md) → [`00b42780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b42/00b42780.md) _ZN8firebase9analytics29LogAppleTransactionLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5abe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5abe0.md) [`00c5ac70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac70.md) [`00c5acb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5acb0.md)
- 新版 呼出元 0件  · 呼出先 7件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5acb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5acb0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ad80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence

命令の説明率　旧版 97.44% / 新版 97.44%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b427ac",
      "incomplete_value": true,
      "site": "00b427b0",
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
            "const:8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b42710",
      "incomplete_value": true,
      "site": "00b42714",
      "value": [
        "live",
        "register:40a8:8"
      ]
    },
    "ordinal": 2,
    "slot": 1
  }
]
~~~


~~~diff
- 00b42714 ["INT_ADD", "register:40f0:8", ["const:b42714:8", "const:4:8"]]
- 00b42714 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b427b0 ["INT_ADD", "register:40f0:8", ["const:b427b0:8", "const:4:8"]]
+ 00b427b0 ["CALL", null, ["callee:00c5aad0:8"]]
- 00b426f8 ["INT_ADD", "register:40f0:8", ["const:b426f8:8", "const:4:8"]]
- 00b426f8 ["CALL", null, ["callee:00c5ad80:8"]]
+ 00b42794 ["INT_ADD", "register:40f0:8", ["const:b42794:8", "const:4:8"]]
+ 00b42794 ["CALL", null, ["callee:00c5ad80:8"]]
- 00b426fc ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00b426fc ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00b42798 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 00b42798 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
~~~


<a id="compare-6cefc9612dca14c1876aa92ea0e0c966"></a>

### [`00b427c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b42/00b427c4.md) → [`00b42860`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b42/00b42860.md) _ZN8firebase9analytics25SetDefaultEventParametersEPKNS0_9ParameterEm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b040`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b040.md) · 呼出先 10件 [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`005896f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/005896f4.md) [`00c5aca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aca0.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md) [`00c5af90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af90.md)
- 新版 呼出元 1件 [`00c5b110`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b110.md) · 呼出先 10件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b060.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 6件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b42880",
      "incomplete_value": true,
      "site": "00b42880",
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
      "definition_site": "00b427e4",
      "incomplete_value": true,
      "site": "00b427e4",
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
      "definition_site": "00b4295c",
      "incomplete_value": true,
      "site": "00b4296c",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:508:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b428c0",
      "incomplete_value": true,
      "site": "00b428d0",
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
                "const:408:8"
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
      "definition_site": "00b42960",
      "incomplete_value": true,
      "site": "00b4296c",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:490:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b428c4",
      "incomplete_value": true,
      "site": "00b428d0",
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
                "const:390:8"
              ]
            ]
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
      "00b4287c",
      "READ",
      [
        "storage",
        "01125400",
        null,
        "undefined8"
      ]
    ],
    [
      "00b428cc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b42900"
      ]
    ],
    [
      "00b428d0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b42900"
      ]
    ]
  ],
  "added": [
    [
      "00b4287c",
      "READ",
      [
        "storage",
        "01125500",
        null,
        "undefined8"
      ]
    ],
    [
      "00b428cc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b4299c"
      ]
    ],
    [
      "00b428d0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b4299c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b427e4 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00b427e4 ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
+ 00b42880 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00b42880 ["CBRANCH", null, ["local:b12:8", "tmp:0:1"]]
- 00b42880 ["INT_ADD", "register:40f0:8", ["const:b42880:8", "const:4:8"]]
- 00b42880 ["CALL", null, ["callee:00c5b0c0:8"]]
+ 00b4291c ["INT_ADD", "register:40f0:8", ["const:b4291c:8", "const:4:8"]]
+ 00b4291c ["CALL", null, ["callee:00c5b0c0:8"]]
- 00b428d0 ["INT_ADD", "register:40f0:8", ["const:b428d0:8", "const:4:8"]]
- 00b428d0 ["CALL", null, ["callee:00574d2c:8"]]
+ 00b4296c ["INT_ADD", "register:40f0:8", ["const:b4296c:8", "const:4:8"]]
+ 00b4296c ["CALL", null, ["callee:00574d2c:8"]]
~~~


<a id="compare-0836f2d40ce384785d106852c726769f"></a>

### [`00b42a08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b42/00b42a08.md) → [`00b42aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b42/00b42aa4.md) _ZN8firebase9analytics15SetUserPropertyEPKcS2_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`00c5aca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aca0.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md) [`00c5b080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b080.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 90.77% / 新版 90.77%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_call_alignment` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b42ac0",
      "incomplete_value": true,
      "site": "00b42ac0",
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
      "definition_site": "00b42a24",
      "incomplete_value": true,
      "site": "00b42a24",
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
      "definition_site": "00b42b3c",
      "incomplete_value": true,
      "site": "00b42b48",
      "value": [
        "live",
        "register:4098:8"
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
      "definition_site": "00b42b34",
      "incomplete_value": true,
      "site": "00b42b48",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:508:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": null,
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
      "00b42abc",
      "READ",
      [
        "storage",
        "01125400",
        null,
        "undefined8"
      ]
    ],
    [
      "00b42b1c",
      "PARAM",
      [
        "storage",
        "002a2915",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b42a98",
      "READ",
      [
        "storage",
        "01125408",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b42abc",
      "READ",
      [
        "storage",
        "01125500",
        null,
        "undefined8"
      ]
    ],
    [
      "00b42b1c",
      "PARAM",
      [
        "storage",
        "002a28c8",
        null,
        "string"
      ]
    ],
    [
      "00b42b34",
      "READ",
      [
        "storage",
        "01125508",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b42a24 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00b42a24 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00b42ac0 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00b42ac0 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 00b42aac ["INT_ADD", "register:40f0:8", ["const:b42aac:8", "const:4:8"]]
- 00b42aac ["CALL", null, ["callee:00574d2c:8"]]
+ 00b42b48 ["INT_ADD", "register:40f0:8", ["const:b42b48:8", "const:4:8"]]
+ 00b42b48 ["CALL", null, ["callee:00574d2c:8"]]
- 00b42ac0 ["COPY", "tmp:0:8", ["const:d56:8"]]
- 00b42ac0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b42ac0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b42ac0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-d6372b83676cf8f4fb5204a8349bf1fb"></a>

### [`00b42b0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b42/00b42b0c.md) → [`00b42ba8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b42/00b42ba8.md) _ZN8firebase9analytics9SetUserIdEPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5a980`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a980.md) · 呼出先 5件 [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`00c5aca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aca0.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md) [`00c5b080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b080.md)
- 新版 呼出元 1件 [`00c5aa50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aa50.md) · 呼出先 5件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 92.45% / 新版 92.45%

優先判定に残った影響 `call_argument_candidate` 3件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b42bc0",
      "incomplete_value": true,
      "site": "00b42bc0",
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
      "definition_site": "00b42b24",
      "incomplete_value": true,
      "site": "00b42b24",
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
      "definition_site": "00b42c18",
      "incomplete_value": true,
      "site": "00b42c28",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:508:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b42b7c",
      "incomplete_value": true,
      "site": "00b42b8c",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:408:8"
              ]
            ]
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
      "definition_site": "00b42c1c",
      "incomplete_value": true,
      "site": "00b42c28",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:460:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b42b80",
      "incomplete_value": true,
      "site": "00b42b8c",
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
                "const:1125000:8"
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
      "00b42bbc",
      "READ",
      [
        "storage",
        "01125400",
        null,
        "undefined8"
      ]
    ],
    [
      "00b42c00",
      "PARAM",
      [
        "storage",
        "002a2915",
        null,
        "string"
      ]
    ],
    [
      "00b42c18",
      "READ",
      [
        "storage",
        "01125408",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b42bbc",
      "READ",
      [
        "storage",
        "01125500",
        null,
        "undefined8"
      ]
    ],
    [
      "00b42c00",
      "PARAM",
      [
        "storage",
        "002a28c8",
        null,
        "string"
      ]
    ],
    [
      "00b42c18",
      "READ",
      [
        "storage",
        "01125508",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b42b8c ["INT_ADD", "register:40f0:8", ["const:b42b8c:8", "const:4:8"]]
- 00b42b8c ["CALL", null, ["callee:00574d2c:8"]]
+ 00b42c28 ["INT_ADD", "register:40f0:8", ["const:b42c28:8", "const:4:8"]]
+ 00b42c28 ["CALL", null, ["callee:00574d2c:8"]]
- 00b42ba8 ["INT_ADD", "register:40f0:8", ["const:b42ba8:8", "const:4:8"]]
- 00b42ba8 ["CALL", null, ["callee:00c5ad70:8"]]
+ 00b42c44 ["INT_ADD", "register:40f0:8", ["const:b42c44:8", "const:4:8"]]
+ 00b42c44 ["CALL", null, ["callee:00c5ad70:8"]]
- 00b42b20 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:400:8"]]
- 00b42b20 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b42bbc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:500:8"]]
+ 00b42bbc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-b58ac08268665f34b617c982f3895bf3"></a>

### [`00b42be0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b42/00b42be0.md) → [`00b42c7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b42/00b42c7c.md) _ZN8firebase9analytics25SetSessionTimeoutDurationEl

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5a970`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a970.md) · 呼出先 4件 [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md) [`00c5b080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b080.md)
- 新版 呼出元 1件 [`00c5aa40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aa40.md) · 呼出先 4件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 88.00% / 新版 88.00%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b42c90",
      "incomplete_value": true,
      "site": "00b42c90",
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
      "definition_site": "00b42bf4",
      "incomplete_value": true,
      "site": "00b42bf4",
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
      "definition_site": "00b42ca8",
      "incomplete_value": true,
      "site": "00b42cb8",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:508:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b42c0c",
      "incomplete_value": true,
      "site": "00b42c1c",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:408:8"
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
      "definition_site": "00b42cac",
      "incomplete_value": true,
      "site": "00b42cb8",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:468:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b42c10",
      "incomplete_value": true,
      "site": "00b42c1c",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:368:8"
              ]
            ]
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
      "00b42c8c",
      "READ",
      [
        "storage",
        "01125400",
        null,
        "undefined8"
      ]
    ],
    [
      "00b42ca8",
      "READ",
      [
        "storage",
        "01125408",
        null,
        "undefined8"
      ]
    ],
    [
      "00b42cac",
      "READ",
      [
        "storage",
        "01125368",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b42c8c",
      "READ",
      [
        "storage",
        "01125500",
        null,
        "undefined8"
      ]
    ],
    [
      "00b42ca8",
      "READ",
      [
        "storage",
        "01125508",
        null,
        "undefined8"
      ]
    ],
    [
      "00b42cac",
      "READ",
      [
        "storage",
        "01125468",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b42c1c ["INT_ADD", "register:40f0:8", ["const:b42c1c:8", "const:4:8"]]
- 00b42c1c ["CALL", null, ["callee:00574d2c:8"]]
+ 00b42cb8 ["INT_ADD", "register:40f0:8", ["const:b42cb8:8", "const:4:8"]]
+ 00b42cb8 ["CALL", null, ["callee:00574d2c:8"]]
- 00b42bf0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:400:8"]]
- 00b42bf0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b42c8c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:500:8"]]
+ 00b42c8c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b42c00 ["INT_ADD", "register:40f0:8", ["const:b42c00:8", "const:4:8"]]
- 00b42c00 ["CALL", null, ["callee:00c5b150:8"]]
+ 00b42c9c ["INT_ADD", "register:40f0:8", ["const:b42c9c:8", "const:4:8"]]
+ 00b42c9c ["CALL", null, ["callee:00c5b150:8"]]
~~~


<a id="compare-45f9307521c9772c338abb0d81677108"></a>

### [`00b42c44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b42/00b42c44.md) → [`00b42ce0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b42/00b42ce0.md) _ZN8firebase9analytics18ResetAnalyticsDataEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md) [`00c5b080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b080.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 86.36% / 新版 86.36%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b42cf4",
      "incomplete_value": true,
      "site": "00b42cf4",
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
      "definition_site": "00b42c58",
      "incomplete_value": true,
      "site": "00b42c58",
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
      "definition_site": "00b42d04",
      "incomplete_value": true,
      "site": "00b42d10",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:508:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b42c68",
      "incomplete_value": true,
      "site": "00b42c74",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:408:8"
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
      "definition_site": "00b42d08",
      "incomplete_value": true,
      "site": "00b42d10",
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
                "const:1125000:8"
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
      "definition_site": "00b42c6c",
      "incomplete_value": true,
      "site": "00b42c74",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:370:8"
              ]
            ]
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
      "00b42cf0",
      "READ",
      [
        "storage",
        "01125400",
        null,
        "undefined8"
      ]
    ],
    [
      "00b42d04",
      "READ",
      [
        "storage",
        "01125408",
        null,
        "undefined8"
      ]
    ],
    [
      "00b42d08",
      "READ",
      [
        "storage",
        "01125370",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b42cf0",
      "READ",
      [
        "storage",
        "01125500",
        null,
        "undefined8"
      ]
    ],
    [
      "00b42d04",
      "READ",
      [
        "storage",
        "01125508",
        null,
        "undefined8"
      ]
    ],
    [
      "00b42d08",
      "READ",
      [
        "storage",
        "01125470",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b42c74 ["INT_ADD", "register:40f0:8", ["const:b42c74:8", "const:4:8"]]
- 00b42c74 ["CALL", null, ["callee:00574d2c:8"]]
+ 00b42d10 ["INT_ADD", "register:40f0:8", ["const:b42d10:8", "const:4:8"]]
+ 00b42d10 ["CALL", null, ["callee:00574d2c:8"]]
- 00b42c54 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:400:8"]]
- 00b42c54 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b42cf0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:500:8"]]
+ 00b42cf0 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
- 00b42c5c ["INT_ADD", "register:40f0:8", ["const:b42c5c:8", "const:4:8"]]
- 00b42c5c ["CALL", null, ["callee:00c5b150:8"]]
+ 00b42cf8 ["INT_ADD", "register:40f0:8", ["const:b42cf8:8", "const:4:8"]]
+ 00b42cf8 ["CALL", null, ["callee:00c5b150:8"]]
~~~


<a id="compare-00bd70299e59b202597cee60f8f89afe"></a>

### [`00b42cb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b42/00b42cb0.md) → [`00b42d4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b42/00b42d4c.md) _ZN8firebase9analytics22GetAnalyticsInstanceIdEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 17件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00b4358c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b43/00b4358c.md) [`00b43fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b43/00b43fb8.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 17件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00b43628`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b43/00b43628.md) [`00b44054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b44054.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 94.92% / 新版 94.92%

優先判定に残った影響 `call_argument_candidate` 7件, `unresolved_branch_alignment` 1件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 2件, `store_condition` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b42d7c",
      "incomplete_value": true,
      "site": "00b42d7c",
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
      "definition_site": "00b42ce0",
      "incomplete_value": true,
      "site": "00b42ce0",
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
      "definition_site": "00b42da4",
      "incomplete_value": true,
      "site": "00b42db8",
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
                "const:788:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b42d08",
      "incomplete_value": true,
      "site": "00b42d1c",
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
                "const:6b8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b42d50",
      "incomplete_value": true,
      "site": "00b42d54",
      "value": [
        "live",
        "register:40a8:8"
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
      "00b42d78",
      "READ",
      [
        "storage",
        "01125400",
        null,
        "undefined8"
      ]
    ],
    [
      "00b42da4",
      "READ",
      [
        "storage",
        "00c9b6b8",
        null,
        "pointer"
      ]
    ],
    [
      "00b42da4",
      "PARAM",
      [
        "storage",
        "00b43fb8",
        "firebase::ReferenceCountedFutureImpl::DeleteT<std::__ndk1::basic_string<char,std::__ndk1::char_traits<char>,std::__ndk1::allocator<char>>>",
        null
      ]
    ]
  ],
  "added": [
    [
      "00b42d78",
      "READ",
      [
        "storage",
        "01125500",
        null,
        "undefined8"
      ]
    ],
    [
      "00b42da4",
      "READ",
      [
        "storage",
        "00c9b788",
        null,
        "pointer"
      ]
    ],
    [
      "00b42da4",
      "PARAM",
      [
        "storage",
        "00b44054",
        "firebase::ReferenceCountedFutureImpl::DeleteT<std::__ndk1::basic_string<char,std::__ndk1::char_traits<char>,std::__ndk1::allocator<char>>>",
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b42d1c ["INT_ADD", "register:40f0:8", ["const:b42d1c:8", "const:4:8"]]
- 00b42d1c ["CALL", null, ["callee:00c5af10:8"]]
+ 00b42db8 ["INT_ADD", "register:40f0:8", ["const:b42db8:8", "const:4:8"]]
+ 00b42db8 ["CALL", null, ["callee:00c5af10:8"]]
- 00b42d54 ["INT_ADD", "register:40f0:8", ["const:b42d54:8", "const:4:8"]]
- 00b42d54 ["CALL", null, ["callee:00497874:8"]]
+ 00b42df0 ["INT_ADD", "register:40f0:8", ["const:b42df0:8", "const:4:8"]]
+ 00b42df0 ["CALL", null, ["callee:00497874:8"]]
- 00b42d7c ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00b42d7c ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
+ 00b42e18 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00b42e18 ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
~~~


<a id="compare-ac507ed2b02f3a80db99ca4da09ca7cd"></a>

### [`00b42f04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b42/00b42f04.md) → [`00b42fa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b42/00b42fa0.md) _ZN8firebase9analytics32GetAnalyticsInstanceIdLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b050.md) · 呼出先 8件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5abe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5abe0.md) [`00c5ac70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac70.md) [`00c5acb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5acb0.md)
- 新版 呼出元 1件 [`00c5b120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b120.md) · 呼出先 8件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5acb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5acb0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ad80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad80.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 95.24% / 新版 95.24%

優先判定に残った影響 `call_argument_candidate` 3件, `store_condition` 2件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b42f44",
      "incomplete_value": true,
      "site": "00b42f4c",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b43010",
      "incomplete_value": false,
      "site": "00b43014",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a2000:8"
          ],
          [
            "leaf",
            "const:8c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b42f74",
      "incomplete_value": false,
      "site": "00b42f78",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a2000:8"
          ],
          [
            "leaf",
            "const:915:8"
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
      "definition_site": "00b43024",
      "incomplete_value": true,
      "site": "00b43034",
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
            "const:30:8"
          ]
        ]
      ]
    },
    "old": null,
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
      "00b42fb4",
      "READ",
      [
        "storage",
        "01125400",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b42f20",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b4300c"
      ]
    ],
    [
      "unmatched:00b42f74",
      "PARAM",
      [
        "storage",
        "002a2915",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b42fb4",
      "READ",
      [
        "storage",
        "01125500",
        null,
        "undefined8"
      ]
    ],
    [
      "00b42fbc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b4300c"
      ]
    ],
    [
      "00b43010",
      "PARAM",
      [
        "storage",
        "002a28c8",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b42f4c ["INT_ADD", "register:40f0:8", ["const:b42f4c:8", "const:4:8"]]
- 00b42f4c ["CALL", null, ["callee:00c5ad40:8"]]
+ 00b42fe8 ["INT_ADD", "register:40f0:8", ["const:b42fe8:8", "const:4:8"]]
+ 00b42fe8 ["CALL", null, ["callee:00c5ad40:8"]]
- 00b42f78 ["INT_ADD", "register:40f0:8", ["const:b42f78:8", "const:4:8"]]
- 00b42f78 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b43014 ["INT_ADD", "register:40f0:8", ["const:b43014:8", "const:4:8"]]
+ 00b43014 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b42f98 ["INT_ADD", "register:40f0:8", ["const:b42f98:8", "const:4:8"]]
- 00b42f98 ["CALL", null, ["callee:00c5acb0:8"]]
+ 00b43034 ["INT_ADD", "register:40f0:8", ["const:b43034:8", "const:4:8"]]
+ 00b43034 ["CALL", null, ["callee:00c5acb0:8"]]
~~~


<a id="compare-2d649e66e7ec0ef3743afdf5e46100b6"></a>

### [`00b42fd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b42/00b42fd8.md) → [`00b43074`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b43/00b43074.md) _ZN8firebase6FutureINSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEEC2EPNS_6detail18FutureApiInterfaceERKNS_12FutureHand

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5adb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5adb0.md) · 呼出先 3件 [`00c5ac70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac70.md) [`00c5adf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5adf0.md) [`00c5ae00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae00.md)
- 新版 呼出元 1件 [`00c5ae80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae80.md) · 呼出先 3件 [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5aec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aec0.md) [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 74.19% / 新版 74.19%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b430c0",
      "incomplete_value": true,
      "site": "00b430c4",
      "value": [
        "live",
        "register:40a0:8"
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
      "unmatched:00b42fd8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b42fdc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b42fe0",
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
      "00b43074",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b43078",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b4307c",
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
- 00b43028 ["INT_ADD", "register:40f0:8", ["const:b43028:8", "const:4:8"]]
- 00b43028 ["CALL", null, ["callee:00c5aec0:8"]]
+ 00b430c4 ["INT_ADD", "register:40f0:8", ["const:b430c4:8", "const:4:8"]]
+ 00b430c4 ["CALL", null, ["callee:00c5aec0:8"]]
- 00b42fd8 ["COPY", "tmp:0:8", ["register:40a8:8"]]
- 00b42fd8 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00b42fd8 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b42fdc ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b42fdc ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b42fdc ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b42fdc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-0728642eb5ea625bd4776a93e0563c54"></a>

### [`00b43078`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b43/00b43078.md) → [`00b43114`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b43/00b43114.md) _ZN8firebase9analytics12GetSessionIdEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 19件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00b43af0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b43/00b43af0.md) [`00b43ff0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b43/00b43ff0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 19件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00b43b8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b43/00b43b8c.md) [`00b4408c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b4408c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 81.42% / 新版 81.42%

優先判定に残った影響 `call_argument_candidate` 13件, `store_condition` 1件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 2件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4315c",
      "incomplete_value": true,
      "site": "00b43170",
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
                "const:790:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b430c0",
      "incomplete_value": true,
      "site": "00b430d4",
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
                "const:6c0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 2,
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b43198",
      "incomplete_value": true,
      "site": "00b431a4",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:508:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b430fc",
      "incomplete_value": true,
      "site": "00b43108",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:408:8"
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4319c",
      "incomplete_value": true,
      "site": "00b431a4",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:480:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b43100",
      "incomplete_value": true,
      "site": "00b43108",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:380:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 6,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b430a4",
      "READ",
      [
        "storage",
        "01125400",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b430a8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b4321c"
      ]
    ],
    [
      "00b4315c",
      "READ",
      [
        "storage",
        "00c9b6c0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b43140",
      "READ",
      [
        "storage",
        "01125500",
        null,
        "undefined8"
      ]
    ],
    [
      "00b43144",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b4321c"
      ]
    ],
    [
      "00b4315c",
      "READ",
      [
        "storage",
        "00c9b790",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b430d4 ["INT_ADD", "register:40f0:8", ["const:b430d4:8", "const:4:8"]]
- 00b430d4 ["CALL", null, ["callee:00c5af10:8"]]
+ 00b43170 ["INT_ADD", "register:40f0:8", ["const:b43170:8", "const:4:8"]]
+ 00b43170 ["CALL", null, ["callee:00c5af10:8"]]
- 00b43108 ["INT_ADD", "register:40f0:8", ["const:b43108:8", "const:4:8"]]
- 00b43108 ["CALL", null, ["callee:00497874:8"]]
+ 00b431a4 ["INT_ADD", "register:40f0:8", ["const:b431a4:8", "const:4:8"]]
+ 00b431a4 ["CALL", null, ["callee:00497874:8"]]
- 00b43150 ["INT_ADD", "register:40f0:8", ["const:b43150:8", "const:4:8"]]
- 00b43150 ["CALL", null, ["callee:00c5ad70:8"]]
+ 00b431ec ["INT_ADD", "register:40f0:8", ["const:b431ec:8", "const:4:8"]]
+ 00b431ec ["CALL", null, ["callee:00c5ad70:8"]]
~~~


<a id="compare-4ce47c3f6d9e8e02d2e2ba5e665b5d3a"></a>

### [`00b432a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b43/00b432a0.md) → [`00b4333c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b43/00b4333c.md) _ZN8firebase6FutureIlEC2EPNS_6detail18FutureApiInterfaceERKNS_12FutureHandleE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5adc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5adc0.md) · 呼出先 3件 [`00c5ac70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac70.md) [`00c5adf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5adf0.md) [`00c5ae00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae00.md)
- 新版 呼出元 1件 [`00c5ae90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae90.md) · 呼出先 3件 [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5aec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aec0.md) [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md)

変更の種類 branch_condition_or_target, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 96.77% / 新版 96.77%

優先判定に残った影響 `unresolved_return_alignment` 1件

~~~diff
- 00b432c0 ["INT_ADD", "register:40f0:8", ["const:b432c0:8", "const:4:8"]]
- 00b432c0 ["CALL", null, ["callee:00c5ad40:8"]]
+ 00b4335c ["INT_ADD", "register:40f0:8", ["const:b4335c:8", "const:4:8"]]
+ 00b4335c ["CALL", null, ["callee:00c5ad40:8"]]
- 00b432d4 ["INT_ADD", "register:40f0:8", ["const:b432d4:8", "const:4:8"]]
- 00b432d4 ["CALL", null, ["callee:00c5aed0:8"]]
+ 00b43370 ["INT_ADD", "register:40f0:8", ["const:b43370:8", "const:4:8"]]
+ 00b43370 ["CALL", null, ["callee:00c5aed0:8"]]
- 00b432e8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b432e8 ["INT_ADD", "register:40f0:8", ["const:b432e8:8", "const:4:8"]]
- 00b432e8 ["CALLIND", null, ["register:0:8"]]
+ 00b43384 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b43384 ["INT_ADD", "register:40f0:8", ["const:b43384:8", "const:4:8"]]
+ 00b43384 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-1b564e93c2fc39ccd45b1ef8cb340095"></a>

### [`00b43340`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b43/00b43340.md) → [`00b433dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b43/00b433dc.md) _ZN8firebase9analytics22GetSessionIdLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 8件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5abe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5abe0.md) [`00c5ac70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac70.md) [`00c5acb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5acb0.md)
- 新版 呼出元 0件  · 呼出先 8件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5acb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5acb0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ad80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b43430",
      "incomplete_value": true,
      "site": "00b43434",
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
            "const:30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b43394",
      "incomplete_value": true,
      "site": "00b43398",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4343c",
      "incomplete_value": true,
      "site": "00b43440",
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
      "definition_site": "00b43438",
      "incomplete_value": true,
      "site": "00b43440",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40b0:8"
          ],
          [
            "leaf",
            "const:40:8"
          ]
        ]
      ]
    },
    "old": null,
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
      "unmatched:00b43340",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b43344",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b43348",
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
      "00b433dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b433e0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b433e4",
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
- 00b43398 ["INT_ADD", "register:40f0:8", ["const:b43398:8", "const:4:8"]]
- 00b43398 ["CALL", null, ["callee:00c5aee0:8"]]
+ 00b43434 ["INT_ADD", "register:40f0:8", ["const:b43434:8", "const:4:8"]]
+ 00b43434 ["CALL", null, ["callee:00c5aee0:8"]]
- 00b433a4 ["INT_ADD", "register:40f0:8", ["const:b433a4:8", "const:4:8"]]
- 00b433a4 ["CALL", null, ["callee:00c5ae20:8"]]
+ 00b43440 ["INT_ADD", "register:40f0:8", ["const:b43440:8", "const:4:8"]]
+ 00b43440 ["CALL", null, ["callee:00c5ae20:8"]]
- 00b433b4 ["INT_ADD", "register:40f0:8", ["const:b433b4:8", "const:4:8"]]
- 00b433b4 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b43450 ["INT_ADD", "register:40f0:8", ["const:b43450:8", "const:4:8"]]
+ 00b43450 ["CALL", null, ["callee:00c5b0d0:8"]]
~~~


<a id="compare-8ca0593ea8f00525f450296e7a73b809"></a>

### [`00b43418`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b43/00b43418.md) → [`00b434b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b43/00b434b4.md) _ZN8firebase10FutureBaseaSERKS0_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5ad50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ad50.md) · 呼出先 6件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5aa90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa90.md) [`00c5ae10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae10.md)
- 新版 呼出元 1件 [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) · 呼出先 6件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 84.06% / 新版 84.06%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_call_alignment` 3件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b43510",
      "incomplete_value": true,
      "site": "00b43514",
      "value": [
        "live",
        "register:4098:8"
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
      "definition_site": "00b43554",
      "incomplete_value": true,
      "site": "00b43558",
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
            "const:30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b434b8",
      "incomplete_value": true,
      "site": "00b434bc",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "ordinal": 9,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b4343c",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b43458",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ],
    [
      "unmatched:00b4346c",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00b434d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00b434f4",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ],
    [
      "00b43508",
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
- 00b43478 ["INT_ADD", "register:40f0:8", ["const:b43478:8", "const:4:8"]]
- 00b43478 ["CALL", null, ["callee:00c5aae0:8"]]
+ 00b43514 ["INT_ADD", "register:40f0:8", ["const:b43514:8", "const:4:8"]]
+ 00b43514 ["CALL", null, ["callee:00c5aae0:8"]]
- 00b434bc ["INT_ADD", "register:40f0:8", ["const:b434bc:8", "const:4:8"]]
- 00b434bc ["CALL", null, ["callee:00c5aef0:8"]]
+ 00b43558 ["INT_ADD", "register:40f0:8", ["const:b43558:8", "const:4:8"]]
+ 00b43558 ["CALL", null, ["callee:00c5aef0:8"]]
- 00b43430 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:28:8"]]
- 00b43430 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-60fddaedfcf18935c0152fbcb8567473"></a>

### [`00b4358c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b43/00b4358c.md) → [`00b43628`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b43/00b43628.md) FUN_00b43628

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00b42cb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b42/00b42cb0.md) · 呼出先 12件 [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`00b42d4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b42/00b42d4c.md) · 呼出先 12件 [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 87.60% / 新版 87.60%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_branch_alignment` 4件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b43740",
      "incomplete_value": true,
      "site": "00b43744",
      "value": [
        "INT_AND",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              [
                "live",
                "register:40b8:8"
              ],
              [
                "leaf",
                "const:10:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:fffffffffffffff0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b436a4",
      "incomplete_value": true,
      "site": "00b436a8",
      "value": [
        "INT_AND",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "leaf",
            "const:fffffffffffffff0:8"
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
    "new": null,
    "old": {
      "definition_site": "00b436d4",
      "incomplete_value": true,
      "site": "00b436e4",
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
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b436d0",
      "incomplete_value": true,
      "site": "00b436e4",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "INT_MULT",
            "4",
            [
              "INT_AND",
              [
                "leaf",
                "const:ffffffff:4"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 6,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b435a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b43660",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b43674",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b437f8"
      ]
    ]
  ],
  "added": [
    [
      "00b43640",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b436fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ],
    [
      "00b43710",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b437f8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b436a8 ["INT_ADD", "register:40f0:8", ["const:b436a8:8", "const:4:8"]]
- 00b436a8 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b43744 ["INT_ADD", "register:40f0:8", ["const:b43744:8", "const:4:8"]]
+ 00b43744 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b436a8 ["COPY", "tmp:0:8", ["const:38e:8"]]
+ 00b436a8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00b436a8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00b436a8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00b436e4 ["INT_ADD", "register:40f0:8", ["const:b436e4:8", "const:4:8"]]
- 00b436e4 ["CALL", null, ["callee:00c5ae30:8"]]
+ 00b43780 ["INT_ADD", "register:40f0:8", ["const:b43780:8", "const:4:8"]]
+ 00b43780 ["CALL", null, ["callee:00c5ae30:8"]]
~~~


<a id="compare-da437516363b27779cfeb553e00b17f3"></a>

### [`00b437b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b43/00b437b0.md) → [`00b4384c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b43/00b4384c.md) _ZN8firebase26ReferenceCountedFutureImpl16CompleteInternalINSt6__ndk112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEZNS0_26Complet

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5ad60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ad60.md) · 呼出先 11件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ae30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae30.md) [`00c5ae50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae50.md) [`00c5ae60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae60.md)
- 新版 呼出元 1件 [`00c5ae30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae30.md) · 呼出先 11件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5af00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af00.md) [`00c5af20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af20.md) [`00c5af30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af30.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b438b8",
      "incomplete_value": false,
      "site": "00b438bc",
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
            "const:88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4381c",
      "incomplete_value": false,
      "site": "00b43820",
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
            "const:e4:8"
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
      "definition_site": "00b438c0",
      "incomplete_value": true,
      "site": "00b438d0",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "old": null,
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b438c4",
      "incomplete_value": true,
      "site": "00b438d0",
      "value": [
        "live",
        "register:40b0:8"
      ]
    },
    "old": null,
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
      "unmatched:00b437c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b43814",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b438c0"
      ]
    ],
    [
      "unmatched:00b4381c",
      "PARAM",
      [
        "storage",
        "002a70e4",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b4385c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b438b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b438c0"
      ]
    ],
    [
      "00b438b8",
      "PARAM",
      [
        "storage",
        "002a7088",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b43820 ["INT_ADD", "register:40f0:8", ["const:b43820:8", "const:4:8"]]
- 00b43820 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b438bc ["INT_ADD", "register:40f0:8", ["const:b438bc:8", "const:4:8"]]
+ 00b438bc ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b43834 ["INT_ADD", "register:40f0:8", ["const:b43834:8", "const:4:8"]]
- 00b43834 ["CALL", null, ["callee:00c5af40:8"]]
+ 00b438d0 ["INT_ADD", "register:40f0:8", ["const:b438d0:8", "const:4:8"]]
+ 00b438d0 ["CALL", null, ["callee:00c5af40:8"]]
- 00b43840 ["INT_ADD", "register:40f0:8", ["const:b43840:8", "const:4:8"]]
- 00b43840 ["CALL", null, ["callee:00c5af00:8"]]
+ 00b438dc ["INT_ADD", "register:40f0:8", ["const:b438dc:8", "const:4:8"]]
+ 00b438dc ["CALL", null, ["callee:00c5af00:8"]]
~~~


<a id="compare-e96940cee5154b8e958a9c062827cebb"></a>

### [`00b438f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b43/00b438f0.md) → [`00b4398c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b43/00b4398c.md) _ZNSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEPKcm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b0b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b0b0.md) · 呼出先 2件 [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md) [`00c5b0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b0a0.md)
- 新版 呼出元 1件 [`00c5b180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b180.md) · 呼出先 2件 [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c5b170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b170.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 94.00% / 新版 94.00%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b43960",
      "incomplete_value": true,
      "site": "00b43964",
      "value": [
        "live",
        "register:40a0:8"
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
      "unmatched:00b4391c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b439e0"
      ]
    ]
  ],
  "added": [
    [
      "00b439b8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b439e0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b43964 ["INT_ADD", "register:40f0:8", ["const:b43964:8", "const:4:8"]]
- 00b43964 ["CALL", null, ["callee:00c58010:8"]]
+ 00b43a00 ["INT_ADD", "register:40f0:8", ["const:b43a00:8", "const:4:8"]]
+ 00b43a00 ["CALL", null, ["callee:00c58010:8"]]
- 00b43910 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 00b43910 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00b43910 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00b43910 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 00b439ac ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 00b439ac ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00b439ac ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00b439ac ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
- 00b43918 ["INT_LESSEQUAL", "register:105:1", ["register:40a0:8", "register:4008:8"]]
- 00b43918 ["INT_SBORROW", "register:106:1", ["register:4008:8", "register:40a0:8"]]
- 00b43918 ["INT_SUB", "tmp:0:8", ["register:4008:8", "register:40a0:8"]]
- 00b43918 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
~~~


<a id="compare-dfe264c1edfbe473c6c9d0ccaefa8ff7"></a>

### [`00b439b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b43/00b439b8.md) → [`00b43a54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b43/00b43a54.md) _ZNSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE21__grow_by_and_replaceEmmmmmmPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b0a0.md) · 呼出先 4件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5b090`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b090.md)
- 新版 呼出元 1件 [`00c5b170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b170.md) · 呼出先 4件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b160.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 89.74% / 新版 89.74%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b43b14",
      "incomplete_value": true,
      "site": "00b43b20",
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
            "register:40b8:8"
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
      "definition_site": "00b43b18",
      "incomplete_value": true,
      "site": "00b43b20",
      "value": [
        "live",
        "register:40d0:8"
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
      "definition_site": "00b43b1c",
      "incomplete_value": true,
      "site": "00b43b20",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "old": null,
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
      "unmatched:00b43a90",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b43b44"
      ]
    ]
  ],
  "added": [
    [
      "00b43b2c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b43b44"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b43a84 ["INT_ADD", "register:40f0:8", ["const:b43a84:8", "const:4:8"]]
- 00b43a84 ["CALL", null, ["callee:00c580d0:8"]]
+ 00b43b20 ["INT_ADD", "register:40f0:8", ["const:b43b20:8", "const:4:8"]]
+ 00b43b20 ["CALL", null, ["callee:00c580d0:8"]]
- 00b43aa4 ["INT_ADD", "register:40f0:8", ["const:b43aa4:8", "const:4:8"]]
- 00b43aa4 ["CALL", null, ["callee:00c580d0:8"]]
+ 00b43b40 ["INT_ADD", "register:40f0:8", ["const:b43b40:8", "const:4:8"]]
+ 00b43b40 ["CALL", null, ["callee:00c580d0:8"]]
- 00b439e4 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
- 00b439e4 ["CBRANCH", null, ["local:b20:8", "tmp:0:1"]]
+ 00b43a80 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
+ 00b43a80 ["CBRANCH", null, ["local:b22:8", "tmp:0:1"]]
~~~


<a id="compare-3e5fb0410ae6b2390abeaca0100d9950"></a>

### [`00b43af0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b43/00b43af0.md) → [`00b43b8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b43/00b43b8c.md) FUN_00b43b8c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00b43078`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b43/00b43078.md) · 呼出先 9件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5aa90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa90.md) [`00c5abe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5abe0.md) [`00c5aca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aca0.md) [`00c5acb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5acb0.md)
- 新版 呼出元 1件 [`00b43114`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b43/00b43114.md) · 呼出先 9件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md) [`00c5acb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5acb0.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5ad80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 91.86% / 新版 91.86%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b43bfc",
      "incomplete_value": true,
      "site": "00b43c0c",
      "value": [
        "live",
        "register:8:8"
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
      "definition_site": "00b43c14",
      "incomplete_value": false,
      "site": "00b43c1c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2aa000:8"
          ],
          [
            "leaf",
            "const:6b5:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b43b78",
      "incomplete_value": false,
      "site": "00b43b80",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2aa000:8"
          ],
          [
            "leaf",
            "const:711:8"
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
      "definition_site": "00b43c54",
      "incomplete_value": true,
      "site": "00b43c5c",
      "value": [
        "live",
        "register:40a8:8"
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
      "unmatched:00b43b58",
      "PARAM",
      [
        "storage",
        "002a19b6",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b43b78",
      "PARAM",
      [
        "storage",
        "002aa711",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b43bac",
      "PARAM",
      [
        "storage",
        "002a63ea",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b43bf4",
      "PARAM",
      [
        "storage",
        "002a1969",
        null,
        "string"
      ]
    ],
    [
      "00b43c14",
      "PARAM",
      [
        "storage",
        "002aa6b5",
        null,
        "string"
      ]
    ],
    [
      "00b43c48",
      "PARAM",
      [
        "storage",
        "002a638e",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b43b70 ["INT_ADD", "register:40f0:8", ["const:b43b70:8", "const:4:8"]]
- 00b43b70 ["CALL", null, ["callee:00c5ae40:8"]]
+ 00b43c0c ["INT_ADD", "register:40f0:8", ["const:b43c0c:8", "const:4:8"]]
+ 00b43c0c ["CALL", null, ["callee:00c5ae40:8"]]
- 00b43b80 ["INT_ADD", "register:40f0:8", ["const:b43b80:8", "const:4:8"]]
- 00b43b80 ["CALL", null, ["callee:00c5ad70:8"]]
+ 00b43c1c ["INT_ADD", "register:40f0:8", ["const:b43c1c:8", "const:4:8"]]
+ 00b43c1c ["CALL", null, ["callee:00c5ad70:8"]]
- 00b43bc0 ["INT_ADD", "register:40f0:8", ["const:b43bc0:8", "const:4:8"]]
- 00b43bc0 ["CALL", null, ["callee:00c5ae60:8"]]
+ 00b43c5c ["INT_ADD", "register:40f0:8", ["const:b43c5c:8", "const:4:8"]]
+ 00b43c5c ["CALL", null, ["callee:00c5ae60:8"]]
~~~


<a id="compare-7fa24e0f812c834d617e4a4d2a1b9629"></a>

### [`00b43c68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b43/00b43c68.md) → [`00b43d04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b43/00b43d04.md) _ZN8firebase26ReferenceCountedFutureImpl16CompleteInternalImZNS0_26CompleteWithResultInternalImEEvRKNS_12FutureHandleEiPKcRKT_EUlPmE_EEvS5_i

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5ad90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ad90.md) · 呼出先 10件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ae30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae30.md) [`00c5ae50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae50.md) [`00c5ae60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae60.md)
- 新版 呼出元 1件 [`00c5ae60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae60.md) · 呼出先 10件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5af00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af00.md) [`00c5af20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af20.md) [`00c5af30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 87.67% / 新版 87.67%

優先判定に残った影響 `call_argument_candidate` 9件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b43d24",
      "incomplete_value": true,
      "site": "00b43d38",
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
            "const:8:8"
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
      "definition_site": "00b43d70",
      "incomplete_value": false,
      "site": "00b43d74",
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
            "const:88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b43cd4",
      "incomplete_value": false,
      "site": "00b43cd8",
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
            "const:e4:8"
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
    "new": null,
    "old": {
      "definition_site": "00b43cdc",
      "incomplete_value": true,
      "site": "00b43cec",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
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
      "00b43d48",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b43d58"
      ]
    ],
    [
      "unmatched:00b43cd4",
      "PARAM",
      [
        "storage",
        "002a70e4",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b43d48",
      "READ",
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
      "00b43d48",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b43df4"
      ]
    ],
    [
      "00b43d70",
      "PARAM",
      [
        "storage",
        "002a7088",
        null,
        "string"
      ]
    ],
    [
      "00b43de4",
      "READ",
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
- 00b43c9c ["INT_ADD", "register:40f0:8", ["const:b43c9c:8", "const:4:8"]]
- 00b43c9c ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b43d38 ["INT_ADD", "register:40f0:8", ["const:b43d38:8", "const:4:8"]]
+ 00b43d38 ["CALL", null, ["callee:00c5aad0:8"]]
- 00b43cd8 ["INT_ADD", "register:40f0:8", ["const:b43cd8:8", "const:4:8"]]
- 00b43cd8 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b43d74 ["INT_ADD", "register:40f0:8", ["const:b43d74:8", "const:4:8"]]
+ 00b43d74 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b43cec ["INT_ADD", "register:40f0:8", ["const:b43cec:8", "const:4:8"]]
- 00b43cec ["CALL", null, ["callee:00c5af40:8"]]
+ 00b43d88 ["INT_ADD", "register:40f0:8", ["const:b43d88:8", "const:4:8"]]
+ 00b43d88 ["CALL", null, ["callee:00c5af40:8"]]
~~~


<a id="compare-05bd087e2e60aa910121b69f80ae89a6"></a>

### [`00b43d8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b43/00b43d8c.md) → [`00b43e28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b43/00b43e28.md) _ZN8firebase26ReferenceCountedFutureImpl16CompleteInternalIiZNS0_26CompleteWithResultInternalIiEEvRKNS_12FutureHandleEiPKcRKT_EUlPiE_EEvS5_i

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5ad70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ad70.md) · 呼出先 10件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ae30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae30.md) [`00c5ae50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae50.md) [`00c5ae60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae60.md)
- 新版 呼出元 1件 [`00c5ae40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae40.md) · 呼出先 10件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5af00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af00.md) [`00c5af20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af20.md) [`00c5af30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 91.78% / 新版 91.78%

優先判定に残った影響 `call_argument_candidate` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b43df8",
      "incomplete_value": false,
      "site": "00b43dfc",
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
            "const:e4:8"
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
    "new": null,
    "old": {
      "definition_site": "00b43e00",
      "incomplete_value": true,
      "site": "00b43e10",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b43e2c",
      "incomplete_value": true,
      "site": "00b43e30",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
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
      "unmatched:00b43df8",
      "PARAM",
      [
        "storage",
        "002a70e4",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b43e6c",
      "READ",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b43e70",
      "READ",
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
      "00b43e94",
      "PARAM",
      [
        "storage",
        "002a7088",
        null,
        "string"
      ]
    ],
    [
      "00b43f08",
      "READ",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b43f0c",
      "READ",
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
- 00b43dfc ["INT_ADD", "register:40f0:8", ["const:b43dfc:8", "const:4:8"]]
- 00b43dfc ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b43e98 ["INT_ADD", "register:40f0:8", ["const:b43e98:8", "const:4:8"]]
+ 00b43e98 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b43e10 ["INT_ADD", "register:40f0:8", ["const:b43e10:8", "const:4:8"]]
- 00b43e10 ["CALL", null, ["callee:00c5af40:8"]]
+ 00b43eac ["INT_ADD", "register:40f0:8", ["const:b43eac:8", "const:4:8"]]
+ 00b43eac ["CALL", null, ["callee:00c5af40:8"]]
- 00b43e30 ["INT_ADD", "register:40f0:8", ["const:b43e30:8", "const:4:8"]]
- 00b43e30 ["CALL", null, ["callee:00c5af30:8"]]
+ 00b43ecc ["INT_ADD", "register:40f0:8", ["const:b43ecc:8", "const:4:8"]]
+ 00b43ecc ["CALL", null, ["callee:00c5af30:8"]]
~~~


<a id="compare-6b0cd3e3d70a4e6c5d5492e03f3575b1"></a>

### [`00b43eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b43/00b43eb0.md) → [`00b43f4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b43/00b43f4c.md) _ZN8firebase26ReferenceCountedFutureImpl16CompleteInternalIvZNS0_16CompleteInternalIvEEvRKNS_12FutureHandleEiPKcEUlPvE_EEvS5_iS7_RKT0_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5ada0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ada0.md) · 呼出先 10件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ae30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae30.md) [`00c5ae50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae50.md) [`00c5ae60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae60.md)
- 新版 呼出元 1件 [`00c5ae70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae70.md) · 呼出先 10件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5af00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af00.md) [`00c5af20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af20.md) [`00c5af30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence

命令の説明率　旧版 96.97% / 新版 96.97%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b43fb0",
      "incomplete_value": false,
      "site": "00b43fb4",
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
            "const:88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b43f14",
      "incomplete_value": false,
      "site": "00b43f18",
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
            "const:e4:8"
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
      "00b43fb0",
      "PARAM",
      [
        "storage",
        "002a70e4",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b43fb0",
      "PARAM",
      [
        "storage",
        "002a7088",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b43f18 ["INT_ADD", "register:40f0:8", ["const:b43f18:8", "const:4:8"]]
- 00b43f18 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b43fb4 ["INT_ADD", "register:40f0:8", ["const:b43fb4:8", "const:4:8"]]
+ 00b43fb4 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b43edc ["INT_ADD", "register:40f0:8", ["const:b43edc:8", "const:4:8"]]
- 00b43edc ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b43f78 ["INT_ADD", "register:40f0:8", ["const:b43f78:8", "const:4:8"]]
+ 00b43f78 ["CALL", null, ["callee:00c5aad0:8"]]
- 00b43ee8 ["INT_ADD", "register:40f0:8", ["const:b43ee8:8", "const:4:8"]]
- 00b43ee8 ["CALL", null, ["callee:00c5af50:8"]]
+ 00b43f84 ["INT_ADD", "register:40f0:8", ["const:b43f84:8", "const:4:8"]]
+ 00b43f84 ["CALL", null, ["callee:00c5af50:8"]]
~~~


<a id="compare-5af8420ceda8ed22aa40f540fc94649a"></a>

### [`00b43fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b43/00b43fb8.md) → [`00b44054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b44054.md) _ZN8firebase26ReferenceCountedFutureImpl7DeleteTINSt6__ndk112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEEEvPv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`00b42cb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b42/00b42cb0.md) [`00bbc7d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bbc/00bbc7d8.md) [`00bde818`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bde/00bde818.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 3件 [`00b42d4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b42/00b42d4c.md) [`00bbc874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bbc/00bbc874.md) [`00bde8b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bde/00bde8b4.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b43fb8 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00b43fb8 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 00b44054 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 00b44054 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 00b43fd0 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 00b43fd0 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00b43fd0 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00b43fd0 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 00b4406c ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 00b4406c ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00b4406c ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00b4406c ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
- 00b43fd8 ["INT_ADD", "register:40f0:8", ["const:b43fd8:8", "const:4:8"]]
- 00b43fd8 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b44074 ["INT_ADD", "register:40f0:8", ["const:b44074:8", "const:4:8"]]
+ 00b44074 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-ec42da4deafd2df8a05b0e8fa76feaab"></a>

### [`00b43ffc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b43/00b43ffc.md) → [`00b44098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b44098.md) _ZN8firebase26ReferenceCountedFutureImpl16CompleteInternalIlZNS0_26CompleteWithResultInternalIlEEvRKNS_12FutureHandleEiPKcRKT_EUlPlE_EEvS5_i

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5ad80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ad80.md) · 呼出先 10件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ae30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae30.md) [`00c5ae50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae50.md) [`00c5ae60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae60.md)
- 新版 呼出元 1件 [`00c5ae50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae50.md) · 呼出先 10件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5af00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af00.md) [`00c5af20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af20.md) [`00c5af30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af30.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 73.97% / 新版 73.97%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b44104",
      "incomplete_value": false,
      "site": "00b44108",
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
            "const:88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b44068",
      "incomplete_value": false,
      "site": "00b4406c",
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
            "const:e4:8"
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
      "unmatched:00b43ffc",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b44000",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b44004",
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
      "00b44098",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00b4409c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00b440a0",
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
- 00b4406c ["INT_ADD", "register:40f0:8", ["const:b4406c:8", "const:4:8"]]
- 00b4406c ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b44108 ["INT_ADD", "register:40f0:8", ["const:b44108:8", "const:4:8"]]
+ 00b44108 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b43ffc ["COPY", "tmp:0:8", ["register:40c8:8"]]
- 00b43ffc ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffb0:8"]]
- 00b43ffc ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b44000 ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 00b44000 ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 00b44000 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b44000 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-b9e2e24cffb4c83d631e6c121a85299f"></a>

### [`00b44150`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b44/00b44150.md) → [`00b441ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b441ec.md) _ZN8firebase23LogMessageWithCallbackVENS_8LogLevelEPKcSt9__va_list

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b120.md) · 呼出先 8件 [`00b44120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b44/00b44120.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md)
- 新版 呼出元 1件 [`00c5b1f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b1f0.md) · 呼出先 8件 [`00b441bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b441bc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 62.30% / 新版 62.30%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 3件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b44278",
      "incomplete_value": false,
      "site": "00b44284",
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
            "const:521:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b441dc",
      "incomplete_value": false,
      "site": "00b441e8",
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
            "const:421:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00b4418c"
      ],
      [
        "FALL_THROUGH",
        "00b44228"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b44228",
      "incomplete_value": true,
      "site": "00b44240",
      "value": [
        "INT_NOTEQUAL",
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
              "LOAD"
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
      "definition_site": "00b4418c",
      "incomplete_value": true,
      "site": "00b441a4",
      "value": [
        "INT_NOTEQUAL",
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
              "LOAD"
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
        "00b441c4"
      ],
      [
        "FALL_THROUGH",
        "00b44260"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b44260",
      "incomplete_value": true,
      "site": "00b44280",
      "value": [
        "BOOL_AND",
        "1",
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
          ],
          [
            "INT_EQUAL",
            "1",
            [
              [
                "live",
                "register:100:1"
              ],
              [
                "live",
                "register:103:1"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b441c4",
      "incomplete_value": true,
      "site": "00b441e4",
      "value": [
        "BOOL_AND",
        "1",
        [
          [
            "BOOL_NEGATE",
            "1",
            [
              "INT_EQUAL"
            ]
          ],
          [
            "INT_EQUAL",
            "1",
            [
              "INT_SLESS",
              "INT_SBORROW"
            ]
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
      "unmatched:00b4417c",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b44180",
      "READ",
      [
        "storage",
        "00c9b6d8",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:00b44188",
      "READ",
      [
        "storage",
        "01125418",
        "firebase::g_log_mutex",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b44218",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "00b4421c",
      "READ",
      [
        "storage",
        "00c9b7a8",
        null,
        "pointer"
      ]
    ],
    [
      "00b44224",
      "READ",
      [
        "storage",
        "01125518",
        "firebase::g_log_mutex",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b441e8 ["INT_ADD", "register:40f0:8", ["const:b441e8:8", "const:4:8"]]
- 00b441e8 ["CALL", null, ["callee:00c5b220:8"]]
+ 00b44284 ["INT_ADD", "register:40f0:8", ["const:b44284:8", "const:4:8"]]
+ 00b44284 ["CALL", null, ["callee:00c5b220:8"]]
- 00b44240 ["INT_ADD", "register:40f0:8", ["const:b44240:8", "const:4:8"]]
- 00b44240 ["CALL", null, ["callee:00c57fb0:8"]]
+ 00b442dc ["INT_ADD", "register:40f0:8", ["const:b442dc:8", "const:4:8"]]
+ 00b442dc ["CALL", null, ["callee:00c57fb0:8"]]
- 00b4417c ["INT_ADD", "tmp:0:8", ["register:8:8", "const:28:8"]]
- 00b4417c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-38b9163c1691da1b1ac70c4b63086018"></a>

### [`00b44244`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b44/00b44244.md) → [`00b442e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b442e0.md) _ZN8firebase11GetLogLevelEv

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b0d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b0d0.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5b1a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b1a0.md) · 呼出先 0件 

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b44248",
      "READ",
      [
        "storage",
        "00c9b6d0",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:00b4424c",
      "READ",
      [
        "storage",
        "00ca4640",
        "firebase::g_log_level",
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "00b442e4",
      "READ",
      [
        "storage",
        "00c9b7a0",
        null,
        "pointer"
      ]
    ],
    [
      "00b442e8",
      "READ",
      [
        "storage",
        "00ca4710",
        "firebase::g_log_level",
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b44244 ["COPY", "register:4040:8", ["const:c9b000:8"]]
- 00b44248 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:6d0:8"]]
- 00b44248 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b4424c ["COPY", "tmp:0:8", ["register:4040:8"]]
- 00b4424c ["LOAD", "tmp:1:4", ["const:1b1:8", "tmp:0:8"]]
- 00b4424c ["INT_ZEXT", "register:4000:8", ["tmp:1:4"]]
~~~


<a id="compare-55ea1f2149e60b4f43f1723eb322fa19"></a>

### [`00b44284`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b44/00b44284.md) → [`00b44320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b44320.md) _ZN8firebase8LogDebugEPKcz

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b130`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b130.md) · 呼出先 2件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5b120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b120.md)
- 新版 呼出元 1件 [`00c5b200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b200.md) · 呼出先 2件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5b1f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b1f0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 68.29% / 新版 68.29%

優先判定に残った影響 `unresolved_store_alignment` 11件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b44288",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b4428c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b442dc",
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
      "00b44324",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b44328",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b44378",
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
- 00b44284 ["INT_SUB", "register:8:8", ["register:8:8", "const:130:8"]]
- 00b44288 ["COPY", "tmp:0:8", ["register:40e0:8"]]
- 00b44288 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b44288 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:110:8"]]
- 00b44288 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b4428c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b4428c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b4428c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:120:8"]]
- 00b4428c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-03a69bb1a47bc1322c92044c31997ab1"></a>

### [`00b44328`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b44/00b44328.md) → [`00b443c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b443c4.md) _ZN8firebase7LogInfoEPKcz

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5afe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5afe0.md) · 呼出先 2件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5b120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b120.md)
- 新版 呼出元 1件 [`00c5b0b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0b0.md) · 呼出先 2件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5b1f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b1f0.md)

変更の種類 comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 43.90% / 新版 43.90%

アドレスに依存する影響 `store_value` 2件, `unresolved_store_alignment` 20件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b44428",
      "incomplete_value": true,
      "site": "00b4443c",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_SUB",
            "8",
            [
              [
                "live",
                "register:40e8:8"
              ],
              [
                "leaf",
                "const:38:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4438c",
      "incomplete_value": true,
      "site": "00b443a0",
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
            "register:4048:8"
          ]
        ]
      ]
    },
    "ordinal": 24,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b44428",
      "incomplete_value": true,
      "site": "00b4443c",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              "INT_SUB",
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
      "definition_site": "00b4438c",
      "incomplete_value": true,
      "site": "00b443a0",
      "value": [
        "LOAD",
        "16",
        [
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
                "const:10:8"
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
      "unmatched:00b44338",
      "WRITE",
      [
        "storage",
        "Stack[-0xa8]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b4433c",
      "WRITE",
      [
        "storage",
        "Stack[-0x98]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b44340",
      "WRITE",
      [
        "storage",
        "Stack[-0x88]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b443d4",
      "WRITE",
      [
        "storage",
        "Stack[-0xa8]",
        null,
        null
      ]
    ],
    [
      "00b443d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x98]",
        null,
        null
      ]
    ],
    [
      "00b443dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x88]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b44338 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 00b44338 ["COPY", "tmp:1:8", ["register:4010:8"]]
- 00b44338 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:88:8"]]
- 00b44338 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b4433c ["COPY", "tmp:0:8", ["register:4018:8"]]
- 00b4433c ["COPY", "tmp:1:8", ["register:4020:8"]]
- 00b4433c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:98:8"]]
- 00b4433c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b44340 ["COPY", "tmp:0:8", ["register:4028:8"]]
- 00b44340 ["COPY", "tmp:1:8", ["register:4030:8"]]
- 00b44340 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:a8:8"]]
- 00b44340 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-3ea6cf3a2886500af1d94a584cfe6cd9"></a>

### [`00b44470`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b44/00b44470.md) → [`00b4450c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b4450c.md) _ZN8firebase8LogErrorEPKcz

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5aca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aca0.md) · 呼出先 2件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5b120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b120.md)
- 新版 呼出元 1件 [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) · 呼出先 2件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5b1f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b1f0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 90.24% / 新版 90.24%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b44578",
      "incomplete_value": true,
      "site": "00b44588",
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
            "const:60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b444dc",
      "incomplete_value": true,
      "site": "00b444ec",
      "value": [
        "INT_SUB",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_SUB",
              [
                "leaf",
                "const:120:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:60:8"
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
      "unmatched:00b444e8",
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
      "00b44584",
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
- 00b444ec ["INT_ADD", "register:40f0:8", ["const:b444ec:8", "const:4:8"]]
- 00b444ec ["CALL", null, ["callee:00c5b1f0:8"]]
+ 00b44588 ["INT_ADD", "register:40f0:8", ["const:b44588:8", "const:4:8"]]
+ 00b44588 ["CALL", null, ["callee:00c5b1f0:8"]]
- 00b444dc ["INT_SUB", "register:4010:8", ["register:40e8:8", "const:60:8"]]
- 00b444e0 ["COPY", "register:4000:8", ["const:4:8"]]
~~~


<a id="compare-5fbdf6e2c0015f36f56892f49b19c8a9"></a>

### [`00b44514`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b44/00b44514.md) → [`00b445b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b445b0.md) _ZN8firebase9LogAssertEPKcz

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md) · 呼出先 2件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5b120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b120.md)
- 新版 呼出元 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) · 呼出先 2件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5b1f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b1f0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 80.49% / 新版 80.49%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b44584",
      "incomplete_value": false,
      "site": "00b44590",
      "value": [
        "leaf",
        "const:5:8"
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
      "definition_site": "00b44588",
      "incomplete_value": true,
      "site": "00b44590",
      "value": [
        "live",
        "register:4000:8"
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
      "definition_site": "00b44580",
      "incomplete_value": true,
      "site": "00b44590",
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
            "const:60:8"
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
      "unmatched:00b44518",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b4451c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b4458c",
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
      "00b445b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b445b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b44628",
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
- 00b44590 ["INT_ADD", "register:40f0:8", ["const:b44590:8", "const:4:8"]]
- 00b44590 ["CALL", null, ["callee:00c5b1f0:8"]]
+ 00b4462c ["INT_ADD", "register:40f0:8", ["const:b4462c:8", "const:4:8"]]
+ 00b4462c ["CALL", null, ["callee:00c5b1f0:8"]]
- 00b44514 ["INT_SUB", "register:8:8", ["register:8:8", "const:130:8"]]
- 00b44518 ["COPY", "tmp:0:8", ["register:40e0:8"]]
- 00b44518 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b44518 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:110:8"]]
- 00b44518 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-835bde48725bd7878229340257aac977"></a>

### [`00b445b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b44/00b445b8.md) → [`00b44654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b44654.md) _ZN8firebase10LogMessageENS_8LogLevelEPKcz

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5b0c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b0c0.md) · 呼出先 2件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5b120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b120.md)
- 新版 呼出元 1件 [`00c5b190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b190.md) · 呼出先 2件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5b1f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b1f0.md)

変更の種類 call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 59.46% / 新版 59.46%

アドレスに依存する影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 13件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b445c8",
      "WRITE",
      [
        "storage",
        "Stack[-0xa0]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b445cc",
      "WRITE",
      [
        "storage",
        "Stack[-0x90]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b445d0",
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
      "00b44664",
      "WRITE",
      [
        "storage",
        "Stack[-0xa0]",
        null,
        null
      ]
    ],
    [
      "00b44668",
      "WRITE",
      [
        "storage",
        "Stack[-0x90]",
        null,
        null
      ]
    ],
    [
      "00b4466c",
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
- 00b445c4 ["COPY", "tmp:0:8", ["const:110:8"]]
- 00b445c4 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00b445c4 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00b445c4 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
- 00b445c8 ["COPY", "tmp:0:8", ["register:4010:8"]]
- 00b445c8 ["COPY", "tmp:1:8", ["register:4018:8"]]
- 00b445c8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:80:8"]]
- 00b445c8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b445cc ["COPY", "tmp:0:8", ["register:4020:8"]]
- 00b445cc ["COPY", "tmp:1:8", ["register:4028:8"]]
- 00b445cc ["INT_ADD", "tmp:2:8", ["register:8:8", "const:90:8"]]
- 00b445cc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-d8eafd97bf4ec3c9f4d0a1151acf241a"></a>

### [`00b4464c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b44/00b4464c.md) → [`00b446e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b446e8.md) _ZN8firebase14LogSetCallbackEPFvNS_8LogLevelEPKcPvES3_

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00b44120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b44/00b44120.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00b441bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b441bc.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 36.36% / 新版 36.36%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b44654",
      "READ",
      [
        "storage",
        "00c9b6e0",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:00b44658",
      "READ",
      [
        "storage",
        "00c9b6e8",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:00b4466c",
      "WRITE",
      [
        "storage",
        "00ca4648",
        "firebase::g_log_callback",
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b446f0",
      "READ",
      [
        "storage",
        "00c9b7b0",
        null,
        "pointer"
      ]
    ],
    [
      "00b446f4",
      "READ",
      [
        "storage",
        "00c9b7b8",
        null,
        "pointer"
      ]
    ],
    [
      "00b44708",
      "WRITE",
      [
        "storage",
        "00ca4718",
        "firebase::g_log_callback",
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4464c ["COPY", "register:4048:8", ["const:c9b000:8"]]
- 00b44650 ["COPY", "register:4050:8", ["const:c9b000:8"]]
- 00b44654 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:6e0:8"]]
- 00b44654 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-f9699c5c1dac62b425b9f8da4106876c"></a>

### [`00b44678`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b44/00b44678.md) → [`00b44714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b44714.md) _ZN8firebase14LogGetCallbackEPPv

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00b44120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b44/00b44120.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00b441bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b441bc.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00b44750",
      "incomplete_value": true,
      "site": "00b44758",
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
      "definition_site": "00b446b4",
      "incomplete_value": true,
      "site": "00b446bc",
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
      "00b44724",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b44698"
      ]
    ],
    [
      "unmatched:00b44690",
      "PARAM",
      [
        "storage",
        "002abf7a",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b44694",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5b0d0"
      ]
    ]
  ],
  "added": [
    [
      "00b44724",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b44734"
      ]
    ],
    [
      "00b4472c",
      "PARAM",
      [
        "storage",
        "002abf1e",
        null,
        "string"
      ]
    ],
    [
      "00b44730",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5b0d0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b44690 ["COPY", "tmp:0:8", ["const:f7a:8"]]
- 00b44690 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b44690 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b44690 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b44694 ["INT_ADD", "register:40f0:8", ["const:b44694:8", "const:4:8"]]
- 00b44694 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b44698 ["COPY", "register:4040:8", ["const:c9b000:8"]]
~~~


<a id="compare-347623b32c194c647bdf5ef3f876e913"></a>

### [`00b446c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b44/00b446c0.md) → [`00b4475c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b4475c.md) FUN_00b4475c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b44120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b44/00b44120.md) · 呼出先 2件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5b0e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b0e0.md)
- 新版 呼出元 1件 [`00b441bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b441bc.md) · 呼出先 2件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5b1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b1b0.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b4472c",
      "incomplete_value": true,
      "site": "00b44734",
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
            "const:60:8"
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
      "unmatched:00b446d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b446dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x120]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b446e0",
      "WRITE",
      [
        "storage",
        "Stack[-0x100]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b44774",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ],
    [
      "00b44778",
      "WRITE",
      [
        "storage",
        "Stack[-0x120]",
        null,
        null
      ]
    ],
    [
      "00b4477c",
      "WRITE",
      [
        "storage",
        "Stack[-0x100]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b44734 ["INT_ADD", "register:40f0:8", ["const:b44734:8", "const:4:8"]]
- 00b44734 ["CALL", null, ["callee:00c5b1b0:8"]]
+ 00b447d0 ["INT_ADD", "register:40f0:8", ["const:b447d0:8", "const:4:8"]]
+ 00b447d0 ["CALL", null, ["callee:00c5b1b0:8"]]
- 00b446d8 ["COPY", "tmp:0:8", ["register:4030:8"]]
- 00b446d8 ["COPY", "tmp:1:8", ["register:4038:8"]]
- 00b446d8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:a0:8"]]
- 00b446d8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b446dc ["COPY", "tmp:0:8", ["register:8:8"]]
- 00b446dc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:5000:16"]]
- 00b446dc ["INT_ADD", "tmp:1:8", ["tmp:0:8", "const:10:8"]]
- 00b446dc ["STORE", null, ["const:1b1:8", "tmp:1:8", "register:5020:16"]]
~~~


<a id="compare-74b1ea695e1f83917017c02524268997"></a>

### [`00b447a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b44/00b447a0.md) → [`00b4483c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b4483c.md) _ZN8firebase18AndroidLogMessageVEiPKcS1_St9__va_list

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5b1f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b1f0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5b2c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b2c0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4485c",
      "incomplete_value": true,
      "site": "00b44864",
      "value": [
        "live",
        "register:8:8"
      ]
    },
    "old": {
      "definition_site": "00b447c0",
      "incomplete_value": true,
      "site": "00b447c8",
      "value": [
        "INT_SUB",
        "8",
        [
          [
            "live",
            "register:8:8"
          ],
          [
            "leaf",
            "const:50:8"
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
      "unmatched:00b447a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b447a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b447b8",
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
      "00b44840",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b44844",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b44854",
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
- 00b447c8 ["INT_ADD", "register:40f0:8", ["const:b447c8:8", "const:4:8"]]
- 00b447c8 ["CALL", null, ["callee:00c5b2c0:8"]]
+ 00b44864 ["INT_ADD", "register:40f0:8", ["const:b44864:8", "const:4:8"]]
+ 00b44864 ["CALL", null, ["callee:00c5b2c0:8"]]
- 00b447a0 ["INT_SUB", "register:8:8", ["register:8:8", "const:50:8"]]
- 00b447a4 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:30:8"]]
- 00b447a4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
~~~


<a id="compare-c711bfaf6e8db2eea7bb8044d15459ab"></a>

### [`00b447f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b44/00b447f4.md) → [`00b44890`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b44890.md) _ZN8firebase11LogMessageVENS_8LogLevelEPKcSt9__va_list

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b0e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b0e0.md) · 呼出先 2件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5b1f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b1f0.md)
- 新版 呼出元 1件 [`00c5b1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b1b0.md) · 呼出先 2件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5b2c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b2c0.md)

変更の種類 branch_condition_or_target, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 83.08% / 新版 83.08%

優先判定に残った影響 `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b448c4",
      "DATA",
      [
        "storage",
        "0030b5f4",
        "switchD_00b44834::switchdataD_0030b5f4",
        "byte"
      ]
    ],
    [
      "unmatched:00b44840",
      "READ",
      [
        "storage",
        "00c9b700",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:00b44858",
      "READ",
      [
        "storage",
        "00c9b700",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b448c4",
      "DATA",
      [
        "storage",
        "0030b634",
        "switchD_00b448d0::switchdataD_0030b634",
        "byte"
      ]
    ],
    [
      "00b448dc",
      "READ",
      [
        "storage",
        "00c9b7d0",
        null,
        "pointer"
      ]
    ],
    [
      "00b448f4",
      "READ",
      [
        "storage",
        "00c9b7d0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b44814 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00b44814 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 00b44814 ["CBRANCH", null, ["local:b10:8", "tmp:1:1"]]
+ 00b448b0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00b448b0 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
+ 00b448b0 ["CBRANCH", null, ["local:b11:8", "tmp:1:1"]]
- 00b44820 ["COPY", "tmp:0:8", ["const:5f4:8"]]
- 00b44820 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 00b44820 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 00b44820 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 00b448bc ["COPY", "tmp:0:8", ["const:634:8"]]
+ 00b448bc ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 00b448bc ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 00b448bc ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 00b44824 ["COPY", "register:4058:8", ["const:b44838:8"]]
~~~


<a id="compare-7bae67b53002c970b8bbe5622ed76379"></a>

### [`00b448f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b44/00b448f8.md) → [`00b44994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b44994.md) _ZN8firebase4util12class_loader19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, branch_value, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b449a8",
      "incomplete_value": true,
      "site": "00b449a8",
      "value": [
        "INT_NOTEQUAL",
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
      "definition_site": "00b4490c",
      "incomplete_value": true,
      "site": "00b4490c",
      "value": [
        "INT_NOTEQUAL",
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
      "00b449a4",
      "READ",
      [
        "storage",
        "01125628",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b44918",
      "PARAM",
      [
        "storage",
        "002b8a26",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b4491c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5afe0"
      ]
    ]
  ],
  "added": [
    [
      "00b449a4",
      "READ",
      [
        "storage",
        "01125728",
        null,
        "undefined8"
      ]
    ],
    [
      "00b449b4",
      "PARAM",
      [
        "storage",
        "002b89d2",
        null,
        "string"
      ]
    ],
    [
      "00b449b8",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5afe0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4490c ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00b4490c ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00b449a8 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00b449a8 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00b44908 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:628:8"]]
- 00b44908 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b449a4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:728:8"]]
+ 00b449a4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b44918 ["COPY", "tmp:0:8", ["const:a26:8"]]
- 00b44918 ["INT_CARRY", "register:105:1", ["register:4018:8", "tmp:0:8"]]
- 00b44918 ["INT_SCARRY", "register:106:1", ["register:4018:8", "tmp:0:8"]]
- 00b44918 ["INT_ADD", "tmp:1:8", ["register:4018:8", "tmp:0:8"]]
~~~


<a id="compare-41c4cc7391a6ec5139cefb90e4eb6ffd"></a>

### [`00b44938`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b44/00b44938.md) → [`00b449d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b449d4.md) _ZN8firebase4util15FindClassGlobalEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS5_9allocatorIS8_EEEEPKcNS0_16ClassReq

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md) · 呼出先 4件 [`00c5aca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aca0.md) [`00c5b130`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b130.md) [`00c5b330`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b330.md) [`00c5b570`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b570.md)
- 新版 呼出元 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) · 呼出先 4件 [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b200.md) [`00c5b400`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b400.md) [`00c5b640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b640.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence

命令の説明率　旧版 94.74% / 新版 94.74%

優先判定に残った影響 `call_argument_candidate` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b449f4",
      "incomplete_value": false,
      "site": "00b44a08",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b6000:8"
          ],
          [
            "leaf",
            "const:c54:8"
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
      "definition_site": "00b449f8",
      "incomplete_value": true,
      "site": "00b44a08",
      "value": [
        "live",
        "register:4018:8"
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
      "definition_site": "00b44a40",
      "incomplete_value": false,
      "site": "00b44a4c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b2000:8"
          ],
          [
            "leaf",
            "const:5c6:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b449a4",
      "incomplete_value": false,
      "site": "00b449b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b2000:8"
          ],
          [
            "leaf",
            "const:595:8"
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
      "unmatched:00b44958",
      "PARAM",
      [
        "storage",
        "002b6c14",
        null,
        "string"
      ]
    ],
    [
      "00b44a40",
      "PARAM",
      [
        "storage",
        "002b2595",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b449e8",
      "PARAM",
      [
        "storage",
        "002a9535",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b449f4",
      "PARAM",
      [
        "storage",
        "002b6c54",
        null,
        "string"
      ]
    ],
    [
      "00b44a40",
      "PARAM",
      [
        "storage",
        "002b25c6",
        null,
        "string"
      ]
    ],
    [
      "00b44a84",
      "PARAM",
      [
        "storage",
        "002a9564",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4496c ["INT_ADD", "register:40f0:8", ["const:b4496c:8", "const:4:8"]]
- 00b4496c ["CALL", null, ["callee:00c5b200:8"]]
+ 00b44a08 ["INT_ADD", "register:40f0:8", ["const:b44a08:8", "const:4:8"]]
+ 00b44a08 ["CALL", null, ["callee:00c5b200:8"]]
- 00b449b0 ["INT_ADD", "register:40f0:8", ["const:b449b0:8", "const:4:8"]]
- 00b449b0 ["CALL", null, ["callee:00c5b200:8"]]
+ 00b44a4c ["INT_ADD", "register:40f0:8", ["const:b44a4c:8", "const:4:8"]]
+ 00b44a4c ["CALL", null, ["callee:00c5b200:8"]]
- 00b449f4 ["INT_ADD", "register:40f0:8", ["const:b449f4:8", "const:4:8"]]
- 00b449f4 ["CALL", null, ["callee:00c5b200:8"]]
+ 00b44a90 ["INT_ADD", "register:40f0:8", ["const:b44a90:8", "const:4:8"]]
+ 00b44a90 ["CALL", null, ["callee:00c5b200:8"]]
~~~


<a id="compare-565ff5e6eeb29e5e3a4af3686acd41a0"></a>

### [`00b44a68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b44/00b44a68.md) → [`00b44b04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b44b04.md) _ZN8firebase4util12class_loader19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b44b30",
      "incomplete_value": true,
      "site": "00b44b30",
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
            "const:728:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b44a94",
      "incomplete_value": true,
      "site": "00b44a94",
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
            "const:628:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b44b18",
      "incomplete_value": true,
      "site": "00b44b18",
      "value": [
        "INT_NOTEQUAL",
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
      "definition_site": "00b44a7c",
      "incomplete_value": true,
      "site": "00b44a7c",
      "value": [
        "INT_NOTEQUAL",
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
      "definition_site": "00b44b20",
      "incomplete_value": false,
      "site": "00b44b28",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b8000:8"
          ],
          [
            "leaf",
            "const:9d2:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b44a84",
      "incomplete_value": false,
      "site": "00b44a8c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b8000:8"
          ],
          [
            "leaf",
            "const:a26:8"
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
      "00b44b14",
      "READ",
      [
        "storage",
        "01125628",
        null,
        "undefined8"
      ]
    ],
    [
      "00b44b20",
      "PARAM",
      [
        "storage",
        "002b8a26",
        null,
        "string"
      ]
    ],
    [
      "00b44b30",
      "WRITE",
      [
        "storage",
        "01125628",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b44b14",
      "READ",
      [
        "storage",
        "01125728",
        null,
        "undefined8"
      ]
    ],
    [
      "00b44b20",
      "PARAM",
      [
        "storage",
        "002b89d2",
        null,
        "string"
      ]
    ],
    [
      "00b44b30",
      "WRITE",
      [
        "storage",
        "01125728",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b44a8c ["INT_ADD", "register:40f0:8", ["const:b44a8c:8", "const:4:8"]]
- 00b44a8c ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b44b28 ["INT_ADD", "register:40f0:8", ["const:b44b28:8", "const:4:8"]]
+ 00b44b28 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b44a94 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:628:8"]]
- 00b44a94 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b44b30 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:728:8"]]
+ 00b44b30 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b44a78 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:628:8"]]
- 00b44a78 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b44b14 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:728:8"]]
+ 00b44b14 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-3f13ab23916418171f3456628bf2dcfd"></a>

### [`00b44aa8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b44/00b44aa8.md) → [`00b44b44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b44b44.md) _ZN8firebase4util12class_loader10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, branch_value, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 70.59% / 新版 70.59%

優先判定に残った影響 `return_value_candidate` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b44b58",
      "incomplete_value": true,
      "site": "00b44b58",
      "value": [
        "INT_NOTEQUAL",
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
      "definition_site": "00b44abc",
      "incomplete_value": true,
      "site": "00b44abc",
      "value": [
        "INT_NOTEQUAL",
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
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "00b44ae0",
      "incomplete_value": true,
      "site": "00b44ae8",
      "value": [
        "live",
        "register:4040:8"
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
      "00b44b54",
      "READ",
      [
        "storage",
        "01125628",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b44ac8",
      "PARAM",
      [
        "storage",
        "002b8a26",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b44ad0",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5afe0"
      ]
    ]
  ],
  "added": [
    [
      "00b44b54",
      "READ",
      [
        "storage",
        "01125728",
        null,
        "undefined8"
      ]
    ],
    [
      "00b44b64",
      "PARAM",
      [
        "storage",
        "002b89d2",
        null,
        "string"
      ]
    ],
    [
      "00b44b6c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5afe0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b44abc ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00b44abc ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00b44b58 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00b44b58 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00b44ab8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:628:8"]]
- 00b44ab8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b44b54 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:728:8"]]
+ 00b44b54 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b44ac8 ["COPY", "tmp:0:8", ["const:a26:8"]]
- 00b44ac8 ["INT_CARRY", "register:105:1", ["register:4018:8", "tmp:0:8"]]
- 00b44ac8 ["INT_SCARRY", "register:106:1", ["register:4018:8", "tmp:0:8"]]
- 00b44ac8 ["INT_ADD", "tmp:1:8", ["register:4018:8", "tmp:0:8"]]
~~~


<a id="compare-1fb9928d8049ea1bc43fa6c1c0823857"></a>

### [`00b44aec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b44/00b44aec.md) → [`00b44b88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b44b88.md) _ZN8firebase4util12class_loader10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_value, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 64.71% / 新版 64.71%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b44b9c",
      "incomplete_value": true,
      "site": "00b44b9c",
      "value": [
        "INT_NOTEQUAL",
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
      "definition_site": "00b44b00",
      "incomplete_value": true,
      "site": "00b44b00",
      "value": [
        "INT_NOTEQUAL",
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
      "00b44b98",
      "READ",
      [
        "storage",
        "01125628",
        null,
        "undefined8"
      ]
    ],
    [
      "00b44b9c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b44b20"
      ]
    ],
    [
      "unmatched:00b44b08",
      "PARAM",
      [
        "storage",
        "002b8a26",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b44b98",
      "READ",
      [
        "storage",
        "01125728",
        null,
        "undefined8"
      ]
    ],
    [
      "00b44b9c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b44bbc"
      ]
    ],
    [
      "00b44ba4",
      "PARAM",
      [
        "storage",
        "002b89d2",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b44afc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:628:8"]]
- 00b44afc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b44b98 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:728:8"]]
+ 00b44b98 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b44b08 ["COPY", "tmp:0:8", ["const:a26:8"]]
- 00b44b08 ["INT_CARRY", "register:105:1", ["register:4018:8", "tmp:0:8"]]
- 00b44b08 ["INT_SCARRY", "register:106:1", ["register:4018:8", "tmp:0:8"]]
- 00b44b08 ["INT_ADD", "tmp:1:8", ["register:4018:8", "tmp:0:8"]]
- 00b44b14 ["INT_ADD", "register:40f0:8", ["const:b44b14:8", "const:4:8"]]
- 00b44b14 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b44bb0 ["INT_ADD", "register:40f0:8", ["const:b44bb0:8", "const:4:8"]]
+ 00b44bb0 ["CALL", null, ["callee:00c5afe0:8"]]
~~~


<a id="compare-da69b9f41cd209ebcb8d400f40dceabf"></a>

### [`00b44b3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b44/00b44b3c.md) → [`00b44bd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b44bd8.md) _ZN8firebase4util12class_loader15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 76.92% / 新版 76.92%

優先判定に残った影響 `unresolved_call_alignment` 2件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b44bec",
      "READ",
      [
        "storage",
        "01125630",
        null,
        "undefined1"
      ]
    ],
    [
      "unmatched:00b44b70",
      "READ",
      [
        "storage",
        "01125628",
        null,
        "undefined8"
      ]
    ],
    [
      "00b44c34",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b44bbc"
      ]
    ]
  ],
  "added": [
    [
      "00b44bec",
      "READ",
      [
        "storage",
        "01125730",
        null,
        "undefined1"
      ]
    ],
    [
      "00b44c0c",
      "READ",
      [
        "storage",
        "01125728",
        null,
        "undefined8"
      ]
    ],
    [
      "00b44c34",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b44c58"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b44b50 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:630:8"]]
- 00b44b50 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00b44b50 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00b44bec ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:730:8"]]
+ 00b44bec ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00b44bec ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
- 00b44b54 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 00b44b54 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00b44bf0 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 00b44bf0 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 00b44b5c ["BRANCH", null, ["local:b7:8"]]
+ 00b44bf8 ["BRANCH", null, ["local:b8:8"]]
~~~


<a id="compare-652c0bc00c9710f8620c0f464694c16a"></a>

### [`00b44bd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b44/00b44bd8.md) → [`00b44c74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b44c74.md) _ZN8firebase4util26CheckAndClearJniExceptionsEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 95.65% / 新版 95.65%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b44c08",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00b44ca4",
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
- 00b44bf0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b44bf0 ["INT_ADD", "register:40f0:8", ["const:b44bf0:8", "const:4:8"]]
- 00b44bf0 ["CALLIND", null, ["register:0:8"]]
+ 00b44c8c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b44c8c ["INT_ADD", "register:40f0:8", ["const:b44c8c:8", "const:4:8"]]
+ 00b44c8c ["CALLIND", null, ["register:0:8"]]
- 00b44bf8 ["CBRANCH", null, ["local:b4:8", "register:101:1"]]
+ 00b44c94 ["CBRANCH", null, ["local:b2:8", "register:101:1"]]
- 00b44c08 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b44c08 ["INT_ADD", "register:40f0:8", ["const:b44c08:8", "const:4:8"]]
- 00b44c08 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-bdedbc3cd3937b7040ca87e0b001f1fc"></a>

### [`00b44c34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b44/00b44c34.md) → [`00b44cd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b44cd0.md) _ZN8firebase4util12class_loader12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_destination, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b44d5c",
      "incomplete_value": true,
      "site": "00b44d5c",
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
            "const:728:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b44cc0",
      "incomplete_value": true,
      "site": "00b44cc0",
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
            "const:628:8"
          ]
        ]
      ]
    },
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b44ce8",
      "incomplete_value": true,
      "site": "00b44ce8",
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
      "definition_site": "00b44c4c",
      "incomplete_value": true,
      "site": "00b44c4c",
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
      "definition_site": "00b44d4c",
      "incomplete_value": true,
      "site": "00b44d58",
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
                "register:40a0:8"
              ],
              [
                "leaf",
                "const:728:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b44cb0",
      "incomplete_value": true,
      "site": "00b44cbc",
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
                "register:40a0:8"
              ],
              [
                "leaf",
                "const:628:8"
              ]
            ]
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
      "00b44ce4",
      "READ",
      [
        "storage",
        "01125628",
        null,
        "undefined8"
      ]
    ],
    [
      "00b44cf0",
      "READ",
      [
        "storage",
        "01125630",
        null,
        "undefined1"
      ]
    ],
    [
      "unmatched:00b44c70",
      "WRITE",
      [
        "storage",
        "01125630",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b44ce4",
      "READ",
      [
        "storage",
        "01125728",
        null,
        "undefined8"
      ]
    ],
    [
      "00b44cf0",
      "READ",
      [
        "storage",
        "01125730",
        null,
        "undefined1"
      ]
    ],
    [
      "00b44d0c",
      "WRITE",
      [
        "storage",
        "01125730",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b44c4c ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00b44c4c ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
+ 00b44ce8 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 00b44ce8 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
- 00b44cbc ["COPY", "register:0:8", ["register:4040:8"]]
- 00b44cbc ["INT_ADD", "register:40f0:8", ["const:b44cbc:8", "const:4:8"]]
- 00b44cbc ["CALLIND", null, ["register:0:8"]]
+ 00b44d58 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b44d58 ["INT_ADD", "register:40f0:8", ["const:b44d58:8", "const:4:8"]]
+ 00b44d58 ["CALLIND", null, ["register:0:8"]]
- 00b44cc0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:628:8"]]
- 00b44cc0 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b44cc0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b44d5c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:728:8"]]
+ 00b44d5c ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b44d5c ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-8799bde241b8e3c61fc04591293f8d4b"></a>

### [`00b44cd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b44/00b44cd4.md) → [`00b44d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b44d70.md) _ZN8firebase4util12class_loader14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md) [`00c5af30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af30.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b44db0",
      "incomplete_value": true,
      "site": "00b44db0",
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
            "const:728:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b44d14",
      "incomplete_value": true,
      "site": "00b44d14",
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
            "const:628:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b44d8c",
      "incomplete_value": true,
      "site": "00b44d8c",
      "value": [
        "INT_NOTEQUAL",
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
      "definition_site": "00b44cf0",
      "incomplete_value": true,
      "site": "00b44cf0",
      "value": [
        "INT_NOTEQUAL",
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
      "definition_site": "00b44d94",
      "incomplete_value": false,
      "site": "00b44da8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b8000:8"
          ],
          [
            "leaf",
            "const:9d2:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b44cf8",
      "incomplete_value": false,
      "site": "00b44d0c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b8000:8"
          ],
          [
            "leaf",
            "const:a26:8"
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
      "00b44d84",
      "READ",
      [
        "storage",
        "01125628",
        null,
        "undefined8"
      ]
    ],
    [
      "00b44d94",
      "PARAM",
      [
        "storage",
        "002b8a26",
        null,
        "string"
      ]
    ],
    [
      "00b44db0",
      "WRITE",
      [
        "storage",
        "01125628",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b44d84",
      "READ",
      [
        "storage",
        "01125728",
        null,
        "undefined8"
      ]
    ],
    [
      "00b44d94",
      "PARAM",
      [
        "storage",
        "002b89d2",
        null,
        "string"
      ]
    ],
    [
      "00b44db0",
      "WRITE",
      [
        "storage",
        "01125728",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b44d0c ["INT_ADD", "register:40f0:8", ["const:b44d0c:8", "const:4:8"]]
- 00b44d0c ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b44da8 ["INT_ADD", "register:40f0:8", ["const:b44da8:8", "const:4:8"]]
+ 00b44da8 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b44d14 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:628:8"]]
- 00b44d14 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b44db0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:728:8"]]
+ 00b44db0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b44ce8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:628:8"]]
- 00b44ce8 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b44d84 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:728:8"]]
+ 00b44d84 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-4438f1aeced5365de36e305ed58b4ba0"></a>

### [`00b44d44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b44/00b44d44.md) → [`00b44de0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b44de0.md) _ZN8firebase4util15LookupMethodIdsEP7_JNIEnvP7_jclassPKNS0_19MethodNameSignatureEmPP10_jmethodIDPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5af30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af30.md) · 呼出先 5件 [`00b517a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b51/00b517a0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5aca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aca0.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md) [`00c5b130`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b130.md)
- 新版 呼出元 1件 [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md) · 呼出先 5件 [`00b5183c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b51/00b5183c.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b200.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 77.42% / 新版 77.42%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 5件, `unresolved_call_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b44e38",
      "incomplete_value": false,
      "site": "00b44e40",
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
            "const:874:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b44d9c",
      "incomplete_value": false,
      "site": "00b44da4",
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
            "const:834:8"
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
      "definition_site": "00b44fb4",
      "incomplete_value": false,
      "site": "00b44fb8",
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
            "const:99:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b44f18",
      "incomplete_value": false,
      "site": "00b44f1c",
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
            "const:f5:8"
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
      "definition_site": "00b44fe0",
      "incomplete_value": false,
      "site": "00b44fec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:30b000:8"
          ],
          [
            "leaf",
            "const:a20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b44f44",
      "incomplete_value": false,
      "site": "00b44f50",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:30b000:8"
          ],
          [
            "leaf",
            "const:9e0:8"
          ]
        ]
      ]
    },
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
      "00b44e2c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b44f24"
      ]
    ],
    [
      "00b44e30",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b44f34"
      ]
    ],
    [
      "00b44e38",
      "PARAM",
      [
        "storage",
        "002c0834",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b44e2c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b44fc0"
      ]
    ],
    [
      "00b44e30",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b44fd0"
      ]
    ],
    [
      "00b44e38",
      "PARAM",
      [
        "storage",
        "002c0874",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b44da4 ["INT_ADD", "register:40f0:8", ["const:b44da4:8", "const:4:8"]]
- 00b44da4 ["CALL", null, ["callee:00c5b200:8"]]
+ 00b44e40 ["INT_ADD", "register:40f0:8", ["const:b44e40:8", "const:4:8"]]
+ 00b44e40 ["CALL", null, ["callee:00c5b200:8"]]
- 00b44e40 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:720:8"]]
- 00b44e40 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b44f1c ["INT_ADD", "register:40f0:8", ["const:b44f1c:8", "const:4:8"]]
- 00b44f1c ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b44fb8 ["INT_ADD", "register:40f0:8", ["const:b44fb8:8", "const:4:8"]]
+ 00b44fb8 ["CALL", null, ["callee:00c5b0d0:8"]]
~~~


<a id="compare-12f8e9cdcaf6ea43eb294ad3c9027830"></a>

### [`00b44fb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b44/00b44fb0.md) → [`00b4504c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b4504c.md) _ZN8firebase4util12class_loader11GetMethodIdENS1_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment

命令の説明率　旧版 33.33% / 新版 33.33%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b44fc4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b44fd4"
      ]
    ],
    [
      "unmatched:00b44fcc",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b44fd0",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5b0d0"
      ]
    ]
  ],
  "added": [
    [
      "00b45060",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b45070"
      ]
    ],
    [
      "00b45068",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b4506c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5b0d0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b44fc4 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 00b44fc4 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 00b44fc8 ["COPY", "register:4000:8", ["const:2a8000:8"]]
- 00b44fcc ["COPY", "tmp:0:8", ["const:367:8"]]
- 00b44fcc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b44fcc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b44fcc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-b2956ea8cde2c3ec8fa5a2182a92934d"></a>

### [`00b44fec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b44/00b44fec.md) → [`00b45088`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45088.md) _ZN8firebase4util12class_loader13CacheFieldIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5aef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aef0.md) [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 67.86% / 新版 67.86%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b450ac",
      "incomplete_value": false,
      "site": "00b450c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b8000:8"
          ],
          [
            "leaf",
            "const:9d2:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45010",
      "incomplete_value": false,
      "site": "00b45024",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b8000:8"
          ],
          [
            "leaf",
            "const:a26:8"
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
      "unmatched:00b45000",
      "READ",
      [
        "storage",
        "01125628",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b45008",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b450cc"
      ]
    ],
    [
      "unmatched:00b45010",
      "PARAM",
      [
        "storage",
        "002b8a26",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b4509c",
      "READ",
      [
        "storage",
        "01125728",
        null,
        "undefined8"
      ]
    ],
    [
      "00b450a4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b450cc"
      ]
    ],
    [
      "00b450ac",
      "PARAM",
      [
        "storage",
        "002b89d2",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b45024 ["INT_ADD", "register:40f0:8", ["const:b45024:8", "const:4:8"]]
- 00b45024 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b450c0 ["INT_ADD", "register:40f0:8", ["const:b450c0:8", "const:4:8"]]
+ 00b450c0 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b45000 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:628:8"]]
- 00b45000 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00b45004 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-2bc9a2e4ccf5bc32b91821835a9dcb60"></a>

### [`00b4505c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b45/00b4505c.md) → [`00b450f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b450f8.md) _ZN8firebase4util14LookupFieldIdsEP7_JNIEnvP7_jclassPKNS0_15FieldDescriptorEmPP9_jfieldIDPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5aef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aef0.md) · 呼出先 5件 [`00b517a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b51/00b517a0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5aca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aca0.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md) [`00c5b130`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b130.md)
- 新版 呼出元 1件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) · 呼出先 5件 [`00b5183c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b51/00b5183c.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b200.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 78.71% / 新版 78.71%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_branch_alignment` 6件, `unresolved_call_alignment` 4件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b45150",
      "incomplete_value": false,
      "site": "00b45158",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b6000:8"
          ],
          [
            "leaf",
            "const:c38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b450b4",
      "incomplete_value": false,
      "site": "00b450bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b6000:8"
          ],
          [
            "leaf",
            "const:bf8:8"
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
      "definition_site": "00b45294",
      "incomplete_value": false,
      "site": "00b45298",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2aa000:8"
          ],
          [
            "leaf",
            "const:6f4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b451f8",
      "incomplete_value": false,
      "site": "00b451fc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2aa000:8"
          ],
          [
            "leaf",
            "const:750:8"
          ]
        ]
      ]
    },
    "ordinal": 7,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b452a0",
      "incomplete_value": false,
      "site": "00b452ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:30b000:8"
          ],
          [
            "leaf",
            "const:a85:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45204",
      "incomplete_value": false,
      "site": "00b45210",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:30b000:8"
          ],
          [
            "leaf",
            "const:a45:8"
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
      "unmatched:00b4509c",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "00b45140",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b4522c"
      ]
    ],
    [
      "00b45148",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b4524c"
      ]
    ]
  ],
  "added": [
    [
      "00b45138",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "00b45140",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b452c8"
      ]
    ],
    [
      "00b45148",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b452e8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b450bc ["INT_ADD", "register:40f0:8", ["const:b450bc:8", "const:4:8"]]
- 00b450bc ["CALL", null, ["callee:00c5b200:8"]]
+ 00b45158 ["INT_ADD", "register:40f0:8", ["const:b45158:8", "const:4:8"]]
+ 00b45158 ["CALL", null, ["callee:00c5b200:8"]]
- 00b451fc ["INT_ADD", "register:40f0:8", ["const:b451fc:8", "const:4:8"]]
- 00b451fc ["CALL", null, ["callee:00c5ad70:8"]]
+ 00b45298 ["INT_ADD", "register:40f0:8", ["const:b45298:8", "const:4:8"]]
+ 00b45298 ["CALL", null, ["callee:00c5ad70:8"]]
- 00b45210 ["INT_ADD", "register:40f0:8", ["const:b45210:8", "const:4:8"]]
- 00b45210 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b452ac ["INT_ADD", "register:40f0:8", ["const:b452ac:8", "const:4:8"]]
+ 00b452ac ["CALL", null, ["callee:00c5b0d0:8"]]
~~~


<a id="compare-631aab11a59cb7542ea9ec93585a9f58"></a>

### [`00b452c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b45/00b452c8.md) → [`00b45364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45364.md) _ZN8firebase4util12class_loader10GetFieldIdENS1_5FieldE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b45380",
      "incomplete_value": false,
      "site": "00b45384",
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
            "const:54d:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b452e4",
      "incomplete_value": false,
      "site": "00b452e8",
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
            "const:51e:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00b45390",
      "incomplete_value": true,
      "site": "00b4539c",
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
              "INT_LEFT"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b452f4",
      "incomplete_value": true,
      "site": "00b45300",
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
              "INT_LEFT"
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
      "00b45380",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "00b45390",
      "DATA",
      [
        "storage",
        "01125648",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b45380",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b45390",
      "DATA",
      [
        "storage",
        "01125748",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b452e8 ["INT_ADD", "register:40f0:8", ["const:b452e8:8", "const:4:8"]]
- 00b452e8 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b45384 ["INT_ADD", "register:40f0:8", ["const:b45384:8", "const:4:8"]]
+ 00b45384 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b452e4 ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00b452e4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b452e4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b452e4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b45380 ["COPY", "tmp:0:8", ["const:54d:8"]]
+ 00b45380 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b45380 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b45380 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b452f0 ["COPY", "tmp:0:8", ["const:648:8"]]
- 00b452f0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b452f0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b452f0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b4538c ["COPY", "tmp:0:8", ["const:748:8"]]
+ 00b4538c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b4538c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b4538c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6dfeed44836070861afaef5e65a69b84"></a>

### [`00b45304`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b45/00b45304.md) → [`00b453a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b453a0.md) _ZN8firebase4util17jniresultcallback19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b453cc",
      "incomplete_value": true,
      "site": "00b453cc",
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
            "const:750:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45330",
      "incomplete_value": true,
      "site": "00b45330",
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
            "const:650:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b453b4",
      "incomplete_value": true,
      "site": "00b453b4",
      "value": [
        "INT_NOTEQUAL",
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
      "definition_site": "00b45318",
      "incomplete_value": true,
      "site": "00b45318",
      "value": [
        "INT_NOTEQUAL",
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
      "definition_site": "00b453c0",
      "incomplete_value": false,
      "site": "00b453c4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b0000:8"
          ],
          [
            "leaf",
            "const:4a1:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45324",
      "incomplete_value": false,
      "site": "00b45328",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b0000:8"
          ],
          [
            "leaf",
            "const:4fd:8"
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
      "00b453b0",
      "READ",
      [
        "storage",
        "01125650",
        null,
        "undefined8"
      ]
    ],
    [
      "00b453c0",
      "PARAM",
      [
        "storage",
        "002b04fd",
        null,
        "string"
      ]
    ],
    [
      "00b453cc",
      "WRITE",
      [
        "storage",
        "01125650",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b453b0",
      "READ",
      [
        "storage",
        "01125750",
        null,
        "undefined8"
      ]
    ],
    [
      "00b453c0",
      "PARAM",
      [
        "storage",
        "002b04a1",
        null,
        "string"
      ]
    ],
    [
      "00b453cc",
      "WRITE",
      [
        "storage",
        "01125750",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b45328 ["INT_ADD", "register:40f0:8", ["const:b45328:8", "const:4:8"]]
- 00b45328 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b453c4 ["INT_ADD", "register:40f0:8", ["const:b453c4:8", "const:4:8"]]
+ 00b453c4 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b45330 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:650:8"]]
- 00b45330 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b453cc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:750:8"]]
+ 00b453cc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b45314 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:650:8"]]
- 00b45314 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b453b0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:750:8"]]
+ 00b453b0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-bbbe7e3a896474799e2ec340c46008a4"></a>

### [`00b45344`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b45/00b45344.md) → [`00b453e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b453e0.md) _ZN8firebase4util17jniresultcallback19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4540c",
      "incomplete_value": true,
      "site": "00b4540c",
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
            "const:750:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45370",
      "incomplete_value": true,
      "site": "00b45370",
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
            "const:650:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b453f4",
      "incomplete_value": true,
      "site": "00b453f4",
      "value": [
        "INT_NOTEQUAL",
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
      "definition_site": "00b45358",
      "incomplete_value": true,
      "site": "00b45358",
      "value": [
        "INT_NOTEQUAL",
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
      "definition_site": "00b453fc",
      "incomplete_value": false,
      "site": "00b45404",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b0000:8"
          ],
          [
            "leaf",
            "const:4a1:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45360",
      "incomplete_value": false,
      "site": "00b45368",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b0000:8"
          ],
          [
            "leaf",
            "const:4fd:8"
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
      "00b453f0",
      "READ",
      [
        "storage",
        "01125650",
        null,
        "undefined8"
      ]
    ],
    [
      "00b453fc",
      "PARAM",
      [
        "storage",
        "002b04fd",
        null,
        "string"
      ]
    ],
    [
      "00b4540c",
      "WRITE",
      [
        "storage",
        "01125650",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b453f0",
      "READ",
      [
        "storage",
        "01125750",
        null,
        "undefined8"
      ]
    ],
    [
      "00b453fc",
      "PARAM",
      [
        "storage",
        "002b04a1",
        null,
        "string"
      ]
    ],
    [
      "00b4540c",
      "WRITE",
      [
        "storage",
        "01125750",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b45368 ["INT_ADD", "register:40f0:8", ["const:b45368:8", "const:4:8"]]
- 00b45368 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b45404 ["INT_ADD", "register:40f0:8", ["const:b45404:8", "const:4:8"]]
+ 00b45404 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b45370 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:650:8"]]
- 00b45370 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4540c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:750:8"]]
+ 00b4540c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b45354 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:650:8"]]
- 00b45354 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b453f0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:750:8"]]
+ 00b453f0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-cf105f21a588f475871dbf6a0c9dbf4a"></a>

### [`00b45384`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b45/00b45384.md) → [`00b45420`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45420.md) _ZN8firebase4util17jniresultcallback10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b45450",
      "incomplete_value": true,
      "site": "00b45450",
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
            "const:750:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b453b4",
      "incomplete_value": true,
      "site": "00b453b4",
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
            "const:650:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b45434",
      "incomplete_value": true,
      "site": "00b45434",
      "value": [
        "INT_NOTEQUAL",
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
      "definition_site": "00b45398",
      "incomplete_value": true,
      "site": "00b45398",
      "value": [
        "INT_NOTEQUAL",
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
      "definition_site": "00b45440",
      "incomplete_value": false,
      "site": "00b45448",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b0000:8"
          ],
          [
            "leaf",
            "const:4a1:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b453a4",
      "incomplete_value": false,
      "site": "00b453ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b0000:8"
          ],
          [
            "leaf",
            "const:4fd:8"
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
      "00b45430",
      "READ",
      [
        "storage",
        "01125650",
        null,
        "undefined8"
      ]
    ],
    [
      "00b45440",
      "PARAM",
      [
        "storage",
        "002b04fd",
        null,
        "string"
      ]
    ],
    [
      "00b45450",
      "WRITE",
      [
        "storage",
        "01125650",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b45430",
      "READ",
      [
        "storage",
        "01125750",
        null,
        "undefined8"
      ]
    ],
    [
      "00b45440",
      "PARAM",
      [
        "storage",
        "002b04a1",
        null,
        "string"
      ]
    ],
    [
      "00b45450",
      "WRITE",
      [
        "storage",
        "01125750",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b453ac ["INT_ADD", "register:40f0:8", ["const:b453ac:8", "const:4:8"]]
- 00b453ac ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b45448 ["INT_ADD", "register:40f0:8", ["const:b45448:8", "const:4:8"]]
+ 00b45448 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b453b4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:650:8"]]
- 00b453b4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b45450 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:750:8"]]
+ 00b45450 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b45394 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:650:8"]]
- 00b45394 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b45430 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:750:8"]]
+ 00b45430 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-62e0faa0d9275d19e27921bb6c41aa7c"></a>

### [`00b453c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b45/00b453c8.md) → [`00b45464`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45464.md) _ZN8firebase4util17jniresultcallback10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b45494",
      "incomplete_value": true,
      "site": "00b45494",
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
            "const:750:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b453f8",
      "incomplete_value": true,
      "site": "00b453f8",
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
            "const:650:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b45478",
      "incomplete_value": true,
      "site": "00b45478",
      "value": [
        "INT_NOTEQUAL",
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
      "definition_site": "00b453dc",
      "incomplete_value": true,
      "site": "00b453dc",
      "value": [
        "INT_NOTEQUAL",
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
      "definition_site": "00b45480",
      "incomplete_value": false,
      "site": "00b4548c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b0000:8"
          ],
          [
            "leaf",
            "const:4a1:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b453e4",
      "incomplete_value": false,
      "site": "00b453f0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b0000:8"
          ],
          [
            "leaf",
            "const:4fd:8"
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
      "00b45474",
      "READ",
      [
        "storage",
        "01125650",
        null,
        "undefined8"
      ]
    ],
    [
      "00b45480",
      "PARAM",
      [
        "storage",
        "002b04fd",
        null,
        "string"
      ]
    ],
    [
      "00b45494",
      "WRITE",
      [
        "storage",
        "01125650",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b45474",
      "READ",
      [
        "storage",
        "01125750",
        null,
        "undefined8"
      ]
    ],
    [
      "00b45480",
      "PARAM",
      [
        "storage",
        "002b04a1",
        null,
        "string"
      ]
    ],
    [
      "00b45494",
      "WRITE",
      [
        "storage",
        "01125750",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b453f0 ["INT_ADD", "register:40f0:8", ["const:b453f0:8", "const:4:8"]]
- 00b453f0 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4548c ["INT_ADD", "register:40f0:8", ["const:b4548c:8", "const:4:8"]]
+ 00b4548c ["CALL", null, ["callee:00c5afe0:8"]]
- 00b453f8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:650:8"]]
- 00b453f8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b45494 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:750:8"]]
+ 00b45494 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b453d8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:650:8"]]
- 00b453d8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b45474 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:750:8"]]
+ 00b45474 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-4fb60cbf4e053766e5f52207840fdd6f"></a>

### [`00b45418`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b45/00b45418.md) → [`00b454b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b454b4.md) _ZN8firebase4util17jniresultcallback15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_destination, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 71.79% / 新版 71.79%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4553c",
      "incomplete_value": true,
      "site": "00b4553c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:758:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b454a0",
      "incomplete_value": true,
      "site": "00b454a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:658:8"
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
      "definition_site": "00b454e8",
      "incomplete_value": true,
      "site": "00b454f4",
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
                "const:1125000:8"
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
      "definition_site": "00b4544c",
      "incomplete_value": true,
      "site": "00b45458",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:650:8"
              ]
            ]
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
      "00b454c8",
      "READ",
      [
        "storage",
        "01125658",
        null,
        "undefined1"
      ]
    ],
    [
      "unmatched:00b4544c",
      "READ",
      [
        "storage",
        "01125650",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b45474",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b45534"
      ]
    ]
  ],
  "added": [
    [
      "00b454c8",
      "READ",
      [
        "storage",
        "01125758",
        null,
        "undefined1"
      ]
    ],
    [
      "00b454e8",
      "READ",
      [
        "storage",
        "01125750",
        null,
        "undefined8"
      ]
    ],
    [
      "00b45510",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b45534"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b45458 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b45458 ["INT_ADD", "register:40f0:8", ["const:b45458:8", "const:4:8"]]
- 00b45458 ["CALLIND", null, ["register:0:8"]]
+ 00b454f4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b454f4 ["INT_ADD", "register:40f0:8", ["const:b454f4:8", "const:4:8"]]
+ 00b454f4 ["CALLIND", null, ["register:0:8"]]
- 00b454a0 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b454a0 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:658:8"]]
- 00b454a0 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b4553c ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b4553c ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:758:8"]]
+ 00b4553c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b4542c ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:658:8"]]
- 00b4542c ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00b4542c ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00b454c8 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:758:8"]]
+ 00b454c8 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00b454c8 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-c73c677eb532b9fb600acd0e8b9cb115"></a>

### [`00b454b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b45/00b454b4.md) → [`00b45550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45550.md) _ZN8firebase4util17jniresultcallback12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 32.50% / 新版 32.50%

優先判定に残った影響 `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 3件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 7件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b454b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b454b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b454bc",
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
      "00b45550",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b45554",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b45558",
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
- 00b454b4 ["COPY", "tmp:0:8", ["register:40a8:8"]]
- 00b454b4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00b454b4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b454b8 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b454b8 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b454b8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b454b8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b454bc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b454bc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b454bc ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00b454bc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-83881e488fb20324a1f3b153c26f6827"></a>

### [`00b45554`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b45/00b45554.md) → [`00b455f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b455f0.md) _ZN8firebase4util17jniresultcallback14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md) [`00c5af30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af30.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b45630",
      "incomplete_value": true,
      "site": "00b45630",
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
            "const:750:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45594",
      "incomplete_value": true,
      "site": "00b45594",
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
            "const:650:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b4560c",
      "incomplete_value": true,
      "site": "00b4560c",
      "value": [
        "INT_NOTEQUAL",
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
      "definition_site": "00b45570",
      "incomplete_value": true,
      "site": "00b45570",
      "value": [
        "INT_NOTEQUAL",
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
      "definition_site": "00b45614",
      "incomplete_value": false,
      "site": "00b45628",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b0000:8"
          ],
          [
            "leaf",
            "const:4a1:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45578",
      "incomplete_value": false,
      "site": "00b4558c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b0000:8"
          ],
          [
            "leaf",
            "const:4fd:8"
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
      "00b45604",
      "READ",
      [
        "storage",
        "01125650",
        null,
        "undefined8"
      ]
    ],
    [
      "00b45614",
      "PARAM",
      [
        "storage",
        "002b04fd",
        null,
        "string"
      ]
    ],
    [
      "00b45630",
      "WRITE",
      [
        "storage",
        "01125650",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b45604",
      "READ",
      [
        "storage",
        "01125750",
        null,
        "undefined8"
      ]
    ],
    [
      "00b45614",
      "PARAM",
      [
        "storage",
        "002b04a1",
        null,
        "string"
      ]
    ],
    [
      "00b45630",
      "WRITE",
      [
        "storage",
        "01125750",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4558c ["INT_ADD", "register:40f0:8", ["const:b4558c:8", "const:4:8"]]
- 00b4558c ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b45628 ["INT_ADD", "register:40f0:8", ["const:b45628:8", "const:4:8"]]
+ 00b45628 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b45594 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:650:8"]]
- 00b45594 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b45630 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:750:8"]]
+ 00b45630 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b45568 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:650:8"]]
- 00b45568 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b45604 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:750:8"]]
+ 00b45604 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-ca9a116f1daa9b6f22a0e7287b940af4"></a>

### [`00b455c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b45/00b455c4.md) → [`00b45660`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45660.md) _ZN8firebase4util17jniresultcallback11GetMethodIdENS1_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4567c",
      "incomplete_value": false,
      "site": "00b45680",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a8000:8"
          ],
          [
            "leaf",
            "const:30b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b455e0",
      "incomplete_value": false,
      "site": "00b455e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a8000:8"
          ],
          [
            "leaf",
            "const:367:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00b4568c",
      "incomplete_value": true,
      "site": "00b45698",
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
              "INT_LEFT"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b455f0",
      "incomplete_value": true,
      "site": "00b455fc",
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
              "INT_LEFT"
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
      "00b4567c",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "00b4568c",
      "DATA",
      [
        "storage",
        "01125660",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4567c",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b4568c",
      "DATA",
      [
        "storage",
        "01125760",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b455e4 ["INT_ADD", "register:40f0:8", ["const:b455e4:8", "const:4:8"]]
- 00b455e4 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b45680 ["INT_ADD", "register:40f0:8", ["const:b45680:8", "const:4:8"]]
+ 00b45680 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b455e0 ["COPY", "tmp:0:8", ["const:367:8"]]
- 00b455e0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b455e0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b455e0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4567c ["COPY", "tmp:0:8", ["const:30b:8"]]
+ 00b4567c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4567c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4567c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b455ec ["COPY", "tmp:0:8", ["const:660:8"]]
- 00b455ec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b455ec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b455ec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b45688 ["COPY", "tmp:0:8", ["const:760:8"]]
+ 00b45688 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b45688 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b45688 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-237acb77bcef042ee05389f31dc7f625"></a>

### [`00b45600`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b45/00b45600.md) → [`00b4569c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b4569c.md) _ZN8firebase4util17jniresultcallback13CacheFieldIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5aef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aef0.md) [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 67.86% / 新版 67.86%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b456c0",
      "incomplete_value": false,
      "site": "00b456d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b0000:8"
          ],
          [
            "leaf",
            "const:4a1:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45624",
      "incomplete_value": false,
      "site": "00b45638",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b0000:8"
          ],
          [
            "leaf",
            "const:4fd:8"
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
      "unmatched:00b45614",
      "READ",
      [
        "storage",
        "01125650",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b4561c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b456e0"
      ]
    ],
    [
      "unmatched:00b45624",
      "PARAM",
      [
        "storage",
        "002b04fd",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b456b0",
      "READ",
      [
        "storage",
        "01125750",
        null,
        "undefined8"
      ]
    ],
    [
      "00b456b8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b456e0"
      ]
    ],
    [
      "00b456c0",
      "PARAM",
      [
        "storage",
        "002b04a1",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b45638 ["INT_ADD", "register:40f0:8", ["const:b45638:8", "const:4:8"]]
- 00b45638 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b456d4 ["INT_ADD", "register:40f0:8", ["const:b456d4:8", "const:4:8"]]
+ 00b456d4 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b45614 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:650:8"]]
- 00b45614 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00b45618 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-2c5e2edfcd104d148cbaf708cde80bcb"></a>

### [`00b45670`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b45/00b45670.md) → [`00b4570c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b4570c.md) _ZN8firebase4util17jniresultcallback10GetFieldIdENS1_5FieldE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b45670",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b45674",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b45684",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b45694"
      ]
    ]
  ],
  "added": [
    [
      "00b4570c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b45710",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b45720",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b45730"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b45670 ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00b45670 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00b45670 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b45674 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b45674 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b45674 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b45674 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b45678 ["COPY", "tmp:0:8", ["const:10:8"]]
- 00b45678 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00b45678 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00b45678 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-05ad509513229a66e12d117bd6415fd4"></a>

### [`00b456ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b45/00b456ac.md) → [`00b45748`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45748.md) _ZN8firebase4util26cppthreaddispatchercontext19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9al

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b456bc",
      "READ",
      [
        "storage",
        "01125678",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b456c0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b45778"
      ]
    ],
    [
      "unmatched:00b456cc",
      "PARAM",
      [
        "storage",
        "002be58b",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b45758",
      "READ",
      [
        "storage",
        "01125778",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4575c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b45778"
      ]
    ],
    [
      "00b45768",
      "PARAM",
      [
        "storage",
        "002be537",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b456bc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:678:8"]]
- 00b456bc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b456c0 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00b456c0 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 00b456c4 ["INT_ZEXT", "register:4020:8", ["register:4018:4"]]
~~~


<a id="compare-0d6ae19365cafc8e70ae0178c16b9e14"></a>

### [`00b456ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b45/00b456ec.md) → [`00b45788`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45788.md) _ZN8firebase4util26cppthreaddispatchercontext19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9al

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_value, call_argument_candidate, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_destination, unresolved_store_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `call_argument_candidate` 2件, `store_destination` 1件, `unresolved_store_alignment` 2件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b457b4",
      "incomplete_value": true,
      "site": "00b457b4",
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
            "const:778:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45718",
      "incomplete_value": true,
      "site": "00b45718",
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
            "const:678:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b4579c",
      "incomplete_value": true,
      "site": "00b4579c",
      "value": [
        "INT_NOTEQUAL",
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
      "definition_site": "00b45700",
      "incomplete_value": true,
      "site": "00b45700",
      "value": [
        "INT_NOTEQUAL",
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
    "new": null,
    "old": {
      "definition_site": "00b45708",
      "incomplete_value": true,
      "site": "00b45710",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4018:8"
          ],
          [
            "leaf",
            "const:58b:8"
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
      "unmatched:00b456f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b45798",
      "READ",
      [
        "storage",
        "01125678",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b45708",
      "PARAM",
      [
        "storage",
        "002be58b",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b4578c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b45798",
      "READ",
      [
        "storage",
        "01125778",
        null,
        "undefined8"
      ]
    ],
    [
      "00b457a4",
      "PARAM",
      [
        "storage",
        "002be537",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b45710 ["INT_ADD", "register:40f0:8", ["const:b45710:8", "const:4:8"]]
- 00b45710 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b457ac ["INT_ADD", "register:40f0:8", ["const:b457ac:8", "const:4:8"]]
+ 00b457ac ["CALL", null, ["callee:00c5afe0:8"]]
- 00b45718 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:678:8"]]
- 00b45718 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b457b4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:778:8"]]
+ 00b457b4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b456f0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b456f0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b456f0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b456f0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-0028f168392e632cee4e4f32f333be3e"></a>

### [`00b4572c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b45/00b4572c.md) → [`00b457c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b457c8.md) _ZN8firebase4util26cppthreaddispatchercontext10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 23.53% / 新版 23.53%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b4573c",
      "READ",
      [
        "storage",
        "01125678",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b45740",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b45760"
      ]
    ],
    [
      "unmatched:00b4574c",
      "PARAM",
      [
        "storage",
        "002be58b",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b457d8",
      "READ",
      [
        "storage",
        "01125778",
        null,
        "undefined8"
      ]
    ],
    [
      "00b457dc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b457fc"
      ]
    ],
    [
      "00b457e8",
      "PARAM",
      [
        "storage",
        "002be537",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4573c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:678:8"]]
- 00b4573c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b45740 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00b45740 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 00b45744 ["COPY", "register:4018:8", ["const:2be000:8"]]
~~~


<a id="compare-b7d0032861e45941ba1c530bdc8c4638"></a>

### [`00b45770`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b45/00b45770.md) → [`00b4580c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b4580c.md) _ZN8firebase4util26cppthreaddispatchercontext10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b45820",
      "incomplete_value": true,
      "site": "00b45820",
      "value": [
        "INT_NOTEQUAL",
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
      "definition_site": "00b45784",
      "incomplete_value": true,
      "site": "00b45784",
      "value": [
        "INT_NOTEQUAL",
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
      "definition_site": "00b45828",
      "incomplete_value": false,
      "site": "00b45834",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2be000:8"
          ],
          [
            "leaf",
            "const:537:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4578c",
      "incomplete_value": false,
      "site": "00b45798",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2be000:8"
          ],
          [
            "leaf",
            "const:58b:8"
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
      "00b4581c",
      "READ",
      [
        "storage",
        "01125678",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b4578c",
      "PARAM",
      [
        "storage",
        "002be58b",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b457a0",
      "WRITE",
      [
        "storage",
        "01125678",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4581c",
      "READ",
      [
        "storage",
        "01125778",
        null,
        "undefined8"
      ]
    ],
    [
      "00b45828",
      "PARAM",
      [
        "storage",
        "002be537",
        null,
        "string"
      ]
    ],
    [
      "00b4583c",
      "WRITE",
      [
        "storage",
        "01125778",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b45784 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00b45784 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00b45820 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00b45820 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 00b45798 ["INT_ADD", "register:40f0:8", ["const:b45798:8", "const:4:8"]]
- 00b45798 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b45834 ["INT_ADD", "register:40f0:8", ["const:b45834:8", "const:4:8"]]
+ 00b45834 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b45780 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:678:8"]]
- 00b45780 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4581c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:778:8"]]
+ 00b4581c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-f988ae8f11a9bce3649e9b58d36c66ec"></a>

### [`00b457b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b45/00b457b4.md) → [`00b45850`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45850.md) _ZN8firebase4util26cppthreaddispatchercontext8GetClassEv

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b457b8",
      "READ",
      [
        "storage",
        "01125678",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b45854",
      "READ",
      [
        "storage",
        "01125778",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b457b4 ["COPY", "register:4040:8", ["const:1125000:8"]]
- 00b457b8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:678:8"]]
- 00b457b8 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
- 00b457bc ["COPY", "register:0:8", ["register:40f0:8"]]
- 00b457bc ["RETURN", null, ["register:0:8"]]
~~~


<a id="compare-2821da6e06a241005a0bdb0efba7d2cc"></a>

### [`00b457c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b45/00b457c0.md) → [`00b4585c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b4585c.md) _ZN8firebase4util26cppthreaddispatchercontext15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 58.97% / 新版 58.97%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b457d4",
      "READ",
      [
        "storage",
        "01125680",
        null,
        "undefined1"
      ]
    ],
    [
      "unmatched:00b457f4",
      "READ",
      [
        "storage",
        "01125678",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b4581c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b45840"
      ]
    ]
  ],
  "added": [
    [
      "00b45870",
      "READ",
      [
        "storage",
        "01125780",
        null,
        "undefined1"
      ]
    ],
    [
      "00b45890",
      "READ",
      [
        "storage",
        "01125778",
        null,
        "undefined8"
      ]
    ],
    [
      "00b458b8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b458dc"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b457d4 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:680:8"]]
- 00b457d4 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00b457d4 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
- 00b457d8 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 00b457d8 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00b45874 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 00b45874 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 00b457e0 ["BRANCH", null, ["local:b10:8"]]
+ 00b4587c ["BRANCH", null, ["local:b18:8"]]
~~~


<a id="compare-61e00773bdcd623419a561bdda0b46c3"></a>

### [`00b4585c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b45/00b4585c.md) → [`00b458f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b458f8.md) _ZN8firebase4util26cppthreaddispatchercontext12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 35.00% / 新版 35.00%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 7件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b4585c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b45860",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b45864",
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
      "00b458f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b458fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b45900",
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
- 00b4585c ["COPY", "tmp:0:8", ["register:40a8:8"]]
- 00b4585c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00b4585c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b45860 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b45860 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b45860 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b45860 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b45864 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b45864 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b45864 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00b45864 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-df287fd1467a4a08d3c93dbf7b65ad9a"></a>

### [`00b458fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b45/00b458fc.md) → [`00b45998`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45998.md) _ZN8firebase4util26cppthreaddispatchercontext14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md) [`00c5af30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af30.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 71.43% / 新版 71.43%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b459c0",
      "incomplete_value": true,
      "site": "00b459d0",
      "value": [
        "live",
        "register:4098:8"
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
      "definition_site": "00b459c4",
      "incomplete_value": true,
      "site": "00b459d0",
      "value": [
        "live",
        "register:4040:8"
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
      "definition_site": "00b459c8",
      "incomplete_value": false,
      "site": "00b459d0",
      "value": [
        "leaf",
        "const:0:8"
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
      "unmatched:00b45910",
      "READ",
      [
        "storage",
        "01125678",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b45918",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b459dc"
      ]
    ],
    [
      "unmatched:00b45920",
      "PARAM",
      [
        "storage",
        "002be58b",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b459ac",
      "READ",
      [
        "storage",
        "01125778",
        null,
        "undefined8"
      ]
    ],
    [
      "00b459b4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b459dc"
      ]
    ],
    [
      "00b459bc",
      "PARAM",
      [
        "storage",
        "002be537",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b45934 ["INT_ADD", "register:40f0:8", ["const:b45934:8", "const:4:8"]]
- 00b45934 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b459d0 ["INT_ADD", "register:40f0:8", ["const:b459d0:8", "const:4:8"]]
+ 00b459d0 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b45910 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:678:8"]]
- 00b45910 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00b45914 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-d242d6e50cd2ed411a2f6be9c476646f"></a>

### [`00b4596c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b45/00b4596c.md) → [`00b45a08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45a08.md) _ZN8firebase4util26cppthreaddispatchercontext11GetMethodIdENS1_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 26.67% / 新版 26.67%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b4596c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b45970",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b45a1c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b45990"
      ]
    ]
  ],
  "added": [
    [
      "00b45a08",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b45a0c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b45a1c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b45a2c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4596c ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00b4596c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00b4596c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b45970 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b45970 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b45970 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b45970 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b45974 ["COPY", "tmp:0:8", ["const:10:8"]]
- 00b45974 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00b45974 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00b45974 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-c543a1a1dd917b9192bbdb6194475b09"></a>

### [`00b459a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b45/00b459a8.md) → [`00b45a44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45a44.md) _ZN8firebase4util26cppthreaddispatchercontext13CacheFieldIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5aef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aef0.md) [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b459d0",
      "incomplete_value": true,
      "site": "00b459e0",
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
    "new": null,
    "old": {
      "definition_site": "00b459d4",
      "incomplete_value": true,
      "site": "00b459e0",
      "value": [
        "live",
        "register:4040:8"
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
      "definition_site": "00b459d8",
      "incomplete_value": false,
      "site": "00b459e0",
      "value": [
        "leaf",
        "const:0:8"
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
      "unmatched:00b459a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b459ac",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b459bc",
      "READ",
      [
        "storage",
        "01125678",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b45a44",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b45a48",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b45a58",
      "READ",
      [
        "storage",
        "01125778",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b459e0 ["INT_ADD", "register:40f0:8", ["const:b459e0:8", "const:4:8"]]
- 00b459e0 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b45a7c ["INT_ADD", "register:40f0:8", ["const:b45a7c:8", "const:4:8"]]
+ 00b45a7c ["CALL", null, ["callee:00c5afe0:8"]]
- 00b459a8 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b459a8 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b459a8 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00b459a8 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b459ac ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b459ac ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b459ac ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b459ac ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-03ac70e4df35ab1a60ff83ea3300cd61"></a>

### [`00b45a18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b45/00b45a18.md) → [`00b45ab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45ab4.md) _ZN8firebase4util26cppthreaddispatchercontext10GetFieldIdENS1_5FieldE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b45a18",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b45a1c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b45a2c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b45a3c"
      ]
    ]
  ],
  "added": [
    [
      "00b45ab4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b45ab8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b45ac8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b45ad8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b45a18 ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00b45a18 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00b45a18 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b45a1c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b45a1c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b45a1c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b45a1c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b45a20 ["COPY", "tmp:0:8", ["const:10:8"]]
- 00b45a20 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00b45a20 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00b45a20 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-9e1ba8226e7223d4e3b913a1d7be1de9"></a>

### [`00b45a54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b45/00b45a54.md) → [`00b45af0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45af0.md) _ZN8firebase4util19cppthreaddispatcher19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocator

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 25.00% / 新版 25.00%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b45a54",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b45a58",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b45a64",
      "READ",
      [
        "storage",
        "011256b0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b45af0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b45af4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b45b00",
      "READ",
      [
        "storage",
        "011257b0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b45a54 ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00b45a54 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00b45a54 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b45a58 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b45a58 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b45a58 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b45a58 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b45a5c ["COPY", "tmp:0:8", ["const:10:8"]]
- 00b45a5c ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00b45a5c ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00b45a5c ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-69d99f4a9a19d8101b126dc6e8fd1271"></a>

### [`00b45a94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b45/00b45a94.md) → [`00b45b30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45b30.md) _ZN8firebase4util19cppthreaddispatcher19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocator

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 25.00% / 新版 25.00%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b45aa4",
      "READ",
      [
        "storage",
        "011256b0",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b45aa8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b45ac4"
      ]
    ],
    [
      "unmatched:00b45ab0",
      "PARAM",
      [
        "storage",
        "002bada3",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b45b40",
      "READ",
      [
        "storage",
        "011257b0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b45b44",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b45b60"
      ]
    ],
    [
      "00b45b4c",
      "PARAM",
      [
        "storage",
        "002bad4f",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b45aa4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:6b0:8"]]
- 00b45aa4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b45aa8 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00b45aa8 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
- 00b45aac ["COPY", "register:4018:8", ["const:2ba000:8"]]
~~~


<a id="compare-75ed6f872af68b10aa121b117f35d16a"></a>

### [`00b45ad4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b45/00b45ad4.md) → [`00b45b70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45b70.md) _ZN8firebase4util19cppthreaddispatcher10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b45ad4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b45ad8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b45ae4",
      "READ",
      [
        "storage",
        "011256b0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b45b70",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b45b74",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b45b80",
      "READ",
      [
        "storage",
        "011257b0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b45ad4 ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00b45ad4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00b45ad4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b45ad8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b45ad8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b45ad8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b45ad8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b45adc ["COPY", "tmp:0:8", ["const:10:8"]]
- 00b45adc ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00b45adc ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00b45adc ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-91eb5e9286110088dbead69d4f84591d"></a>

### [`00b45b18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b45/00b45b18.md) → [`00b45bb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45bb4.md) _ZN8firebase4util19cppthreaddispatcher10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 64.71% / 新版 64.71%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b45bc8",
      "incomplete_value": true,
      "site": "00b45bc8",
      "value": [
        "INT_NOTEQUAL",
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
      "definition_site": "00b45b2c",
      "incomplete_value": true,
      "site": "00b45b2c",
      "value": [
        "INT_NOTEQUAL",
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
      "definition_site": "00b45bd4",
      "incomplete_value": false,
      "site": "00b45bdc",
      "value": [
        "leaf",
        "const:0:8"
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
      "00b45bc4",
      "READ",
      [
        "storage",
        "011256b0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b45bc8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b45b4c"
      ]
    ],
    [
      "unmatched:00b45b34",
      "PARAM",
      [
        "storage",
        "002bada3",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b45bc4",
      "READ",
      [
        "storage",
        "011257b0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b45bc8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b45be8"
      ]
    ],
    [
      "00b45bd0",
      "PARAM",
      [
        "storage",
        "002bad4f",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b45b2c ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00b45b2c ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 00b45bc8 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00b45bc8 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00b45b40 ["INT_ADD", "register:40f0:8", ["const:b45b40:8", "const:4:8"]]
- 00b45b40 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b45bdc ["INT_ADD", "register:40f0:8", ["const:b45bdc:8", "const:4:8"]]
+ 00b45bdc ["CALL", null, ["callee:00c5afe0:8"]]
- 00b45b28 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:6b0:8"]]
- 00b45b28 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b45bc4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:7b0:8"]]
+ 00b45bc4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-57029541718757949a08442ea1ce7689"></a>

### [`00b45b68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b45/00b45b68.md) → [`00b45c04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45c04.md) _ZN8firebase4util19cppthreaddispatcher15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 69.23% / 新版 69.23%

優先判定に残った影響 `unresolved_call_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b45c18",
      "READ",
      [
        "storage",
        "011256b8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b45c24",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b45bf4"
      ]
    ],
    [
      "unmatched:00b45b9c",
      "READ",
      [
        "storage",
        "011256b0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b45c18",
      "READ",
      [
        "storage",
        "011257b8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b45c24",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00b45c90"
      ]
    ],
    [
      "00b45c38",
      "READ",
      [
        "storage",
        "011257b0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b45b7c ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:6b8:8"]]
- 00b45b7c ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00b45b7c ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00b45c18 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:7b8:8"]]
+ 00b45c18 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00b45c18 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
- 00b45b9c ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:6b0:8"]]
- 00b45b9c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00b45ba0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:6b8:8"]]
- 00b45ba0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-4037b740e9cfdb44c7e43d45072b38a9"></a>

### [`00b45c04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b45/00b45c04.md) → [`00b45ca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45ca0.md) _ZN8firebase4util19cppthreaddispatcher12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 65.00% / 新版 65.00%

優先判定に残った影響 `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 7件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b45c04",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b45c08",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b45c0c",
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
      "00b45ca0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b45ca4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b45ca8",
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
- 00b45c04 ["COPY", "tmp:0:8", ["register:40a8:8"]]
- 00b45c04 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00b45c04 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b45c08 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b45c08 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b45c08 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b45c08 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b45c0c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b45c0c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b45c0c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00b45c0c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-f1116bb5acfb07d5aa96e9cd89d65f95"></a>

### [`00b45ca4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b45/00b45ca4.md) → [`00b45d40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45d40.md) _ZN8firebase4util19cppthreaddispatcher14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md) [`00c5af30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af30.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b45cc8",
      "incomplete_value": true,
      "site": "00b45cdc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4018:8"
          ],
          [
            "leaf",
            "const:da3:8"
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
      "unmatched:00b45ca4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b45ca8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b45cb8",
      "READ",
      [
        "storage",
        "011256b0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b45d40",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b45d44",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b45d54",
      "READ",
      [
        "storage",
        "011257b0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b45cdc ["INT_ADD", "register:40f0:8", ["const:b45cdc:8", "const:4:8"]]
- 00b45cdc ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b45d78 ["INT_ADD", "register:40f0:8", ["const:b45d78:8", "const:4:8"]]
+ 00b45d78 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b45ca4 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b45ca4 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b45ca4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00b45ca4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b45ca8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b45ca8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b45ca8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b45ca8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-304c0b45a8d81c88498bc223970f676d"></a>

### [`00b45d14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b45/00b45d14.md) → [`00b45db0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45db0.md) _ZN8firebase4util19cppthreaddispatcher11GetMethodIdENS1_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b45d14",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b45d18",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b45d28",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b45d38"
      ]
    ]
  ],
  "added": [
    [
      "00b45db0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b45db4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b45dc4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b45dd4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b45d14 ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00b45d14 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00b45d14 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b45d18 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b45d18 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b45d18 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b45d18 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b45d1c ["COPY", "tmp:0:8", ["const:10:8"]]
- 00b45d1c ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00b45d1c ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00b45d1c ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-cc4932697388db3559edb1d59d4d21e8"></a>

### [`00b45d50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b45/00b45d50.md) → [`00b45dec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45dec.md) _ZN8firebase4util19cppthreaddispatcher13CacheFieldIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5aef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aef0.md) [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b45d78",
      "incomplete_value": true,
      "site": "00b45d88",
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
    "new": null,
    "old": {
      "definition_site": "00b45d7c",
      "incomplete_value": true,
      "site": "00b45d88",
      "value": [
        "live",
        "register:4040:8"
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
      "unmatched:00b45d50",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b45d54",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b45d64",
      "READ",
      [
        "storage",
        "011256b0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b45dec",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b45df0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b45e00",
      "READ",
      [
        "storage",
        "011257b0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b45d88 ["INT_ADD", "register:40f0:8", ["const:b45d88:8", "const:4:8"]]
- 00b45d88 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b45e24 ["INT_ADD", "register:40f0:8", ["const:b45e24:8", "const:4:8"]]
+ 00b45e24 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b45d50 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b45d50 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b45d50 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00b45d50 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b45d54 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b45d54 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b45d54 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b45d54 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-8022ff418a1f8f476676fcfa0fad5bdb"></a>

### [`00b45dc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b45/00b45dc0.md) → [`00b45e5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45e5c.md) _ZN8firebase4util19cppthreaddispatcher10GetFieldIdENS1_5FieldE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 73.33% / 新版 73.33%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b45ddc",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b45de0",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5b0d0"
      ]
    ],
    [
      "00b45e88",
      "DATA",
      [
        "storage",
        "011256d0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b45e78",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b45e7c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5b0d0"
      ]
    ],
    [
      "00b45e88",
      "DATA",
      [
        "storage",
        "011257d0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b45dd4 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 00b45dd4 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00b45e70 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 00b45e70 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00b45ddc ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00b45ddc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b45ddc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b45ddc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b45de0 ["INT_ADD", "register:40f0:8", ["const:b45de0:8", "const:4:8"]]
- 00b45de0 ["CALL", null, ["callee:00c5b0d0:8"]]
~~~


<a id="compare-e32fa172f0eccddb82bab56cbb579a70"></a>

### [`00b45dfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b45/00b45dfc.md) → [`00b45e98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45e98.md) _ZN8firebase4util3log19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEENS0_16Cla

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 56.25% / 新版 56.25%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b45e0c",
      "READ",
      [
        "storage",
        "011256d8",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b45e1c",
      "PARAM",
      [
        "storage",
        "002bbdb7",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b45e20",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5afe0"
      ]
    ]
  ],
  "added": [
    [
      "00b45ea8",
      "READ",
      [
        "storage",
        "011257d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b45eb8",
      "PARAM",
      [
        "storage",
        "002bbd63",
        null,
        "string"
      ]
    ],
    [
      "00b45ebc",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5afe0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b45e0c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:6d8:8"]]
- 00b45e0c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b45e10 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00b45e10 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00b45eac ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00b45eac ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
- 00b45e14 ["INT_ZEXT", "register:4020:8", ["register:4018:4"]]
~~~


<a id="compare-992e5b73a2ca701d1227752b8a5cc3a6"></a>

### [`00b45e3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b45/00b45e3c.md) → [`00b45ed8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45ed8.md) _ZN8firebase4util3log19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 6.25% / 新版 6.25%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b45e3c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b45e40",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b45e4c",
      "READ",
      [
        "storage",
        "011256d8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b45ed8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b45edc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b45ee8",
      "READ",
      [
        "storage",
        "011257d8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b45e3c ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00b45e3c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00b45e3c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b45e40 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b45e40 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b45e40 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b45e40 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b45e44 ["COPY", "tmp:0:8", ["const:10:8"]]
- 00b45e44 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00b45e44 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00b45e44 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-f23d65157e8582b85830da0089d65619"></a>

### [`00b45e7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b45/00b45e7c.md) → [`00b45f18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45f18.md) _ZN8firebase4util3log10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_destination, unresolved_return_alignment

命令の説明率　旧版 47.06% / 新版 47.06%

優先判定に残った影響 `store_destination` 1件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b45f48",
      "incomplete_value": true,
      "site": "00b45f48",
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
            "const:7d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45eac",
      "incomplete_value": true,
      "site": "00b45eac",
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
            "const:6d8:8"
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
      "unmatched:00b45e8c",
      "READ",
      [
        "storage",
        "011256d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b45f2c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b45eb0"
      ]
    ],
    [
      "unmatched:00b45e9c",
      "PARAM",
      [
        "storage",
        "002bbdb7",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b45f28",
      "READ",
      [
        "storage",
        "011257d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b45f2c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b45f4c"
      ]
    ],
    [
      "00b45f38",
      "PARAM",
      [
        "storage",
        "002bbd63",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b45eac ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:6d8:8"]]
- 00b45eac ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b45f48 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:7d8:8"]]
+ 00b45f48 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b45e8c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:6d8:8"]]
- 00b45e8c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b45e90 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00b45e90 ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
+ 00b45f2c ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00b45f2c ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
~~~


<a id="compare-c5c3e5a5a44f4fdb05ddc9ad2a9adc87"></a>

### [`00b45ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b45/00b45ec0.md) → [`00b45f5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45f5c.md) _ZN8firebase4util3log10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 47.06% / 新版 47.06%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b45f7c",
      "incomplete_value": false,
      "site": "00b45f84",
      "value": [
        "leaf",
        "const:0:8"
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
      "definition_site": "00b45f78",
      "incomplete_value": false,
      "site": "00b45f84",
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
            "const:d63:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 0,
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b45f80",
      "incomplete_value": false,
      "site": "00b45f84",
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
    "ordinal": 0,
    "slot": 5
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b45ed0",
      "READ",
      [
        "storage",
        "011256d8",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b45ed4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b45ef4"
      ]
    ],
    [
      "unmatched:00b45edc",
      "PARAM",
      [
        "storage",
        "002bbdb7",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b45f6c",
      "READ",
      [
        "storage",
        "011257d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b45f70",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b45f90"
      ]
    ],
    [
      "00b45f78",
      "PARAM",
      [
        "storage",
        "002bbd63",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b45ee8 ["INT_ADD", "register:40f0:8", ["const:b45ee8:8", "const:4:8"]]
- 00b45ee8 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b45f84 ["INT_ADD", "register:40f0:8", ["const:b45f84:8", "const:4:8"]]
+ 00b45f84 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b45ed0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:6d8:8"]]
- 00b45ed0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b45ed4 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00b45ed4 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
~~~


<a id="compare-8f07e8d17c95eb23ade0a9b6d30ad945"></a>

### [`00b45f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b45/00b45f10.md) → [`00b45fac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45fac.md) _ZN8firebase4util3log15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_destination, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 76.92% / 新版 76.92%

優先判定に残った影響 `call_argument_candidate` 2件, `store_destination` 1件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b46034",
      "incomplete_value": true,
      "site": "00b46034",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:7e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45f98",
      "incomplete_value": true,
      "site": "00b45f98",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:6e0:8"
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
      "definition_site": "00b45f44",
      "incomplete_value": true,
      "site": "00b45f50",
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
                "const:6d8:8"
              ]
            ]
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
      "definition_site": "00b45f40",
      "incomplete_value": true,
      "site": "00b45f50",
      "value": [
        "live",
        "register:4008:8"
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
      "unmatched:00b45f10",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b45f14",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b45f18",
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
      "00b45fac",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b45fb0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b45fb4",
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
- 00b45f50 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b45f50 ["INT_ADD", "register:40f0:8", ["const:b45f50:8", "const:4:8"]]
- 00b45f50 ["CALLIND", null, ["register:0:8"]]
+ 00b45fec ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b45fec ["INT_ADD", "register:40f0:8", ["const:b45fec:8", "const:4:8"]]
+ 00b45fec ["CALLIND", null, ["register:0:8"]]
- 00b45f98 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b45f98 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:6e0:8"]]
- 00b45f98 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b46034 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b46034 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:7e0:8"]]
+ 00b46034 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b45f10 ["COPY", "tmp:0:8", ["register:40a8:8"]]
- 00b45f10 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00b45f10 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-ba6bc81a3a3fb6ea26cc355d1adaa9ab"></a>

### [`00b45fac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b45/00b45fac.md) → [`00b46048`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b46048.md) _ZN8firebase4util3log12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 47.50% / 新版 47.50%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 5件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b45fc0",
      "READ",
      [
        "storage",
        "011256d8",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b45fc4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b460d8"
      ]
    ],
    [
      "00b46068",
      "READ",
      [
        "storage",
        "011256e0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4605c",
      "READ",
      [
        "storage",
        "011257d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b46060",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b460d8"
      ]
    ],
    [
      "00b46068",
      "READ",
      [
        "storage",
        "011257e0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b45fc0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:6d8:8"]]
- 00b45fc0 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00b45fc4 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00b45fc4 ["CBRANCH", null, ["local:b14:8", "tmp:0:1"]]
- 00b45fcc ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:6e0:8"]]
- 00b45fcc ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00b45fcc ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00b46068 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:7e0:8"]]
+ 00b46068 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00b46068 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-6cb78e74a2b243c8edf8e4ee88535268"></a>

### [`00b4604c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b46/00b4604c.md) → [`00b460e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b460e8.md) _ZN8firebase4util3log14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md) [`00c5af30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af30.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 67.86% / 新版 67.86%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4610c",
      "incomplete_value": false,
      "site": "00b46120",
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
            "const:d63:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46070",
      "incomplete_value": false,
      "site": "00b46084",
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
            "const:db7:8"
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
      "unmatched:00b46060",
      "READ",
      [
        "storage",
        "011256d8",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b46068",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b4612c"
      ]
    ],
    [
      "unmatched:00b46070",
      "PARAM",
      [
        "storage",
        "002bbdb7",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b460fc",
      "READ",
      [
        "storage",
        "011257d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b46104",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b4612c"
      ]
    ],
    [
      "00b4610c",
      "PARAM",
      [
        "storage",
        "002bbd63",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b46084 ["INT_ADD", "register:40f0:8", ["const:b46084:8", "const:4:8"]]
- 00b46084 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b46120 ["INT_ADD", "register:40f0:8", ["const:b46120:8", "const:4:8"]]
+ 00b46120 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b46060 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:6d8:8"]]
- 00b46060 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00b46064 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-eec2931e50242f5d86f3a2a958391bfd"></a>

### [`00b460bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b46/00b460bc.md) → [`00b46158`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b46158.md) _ZN8firebase4util3log11GetMethodIdENS1_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 40.00% / 新版 40.00%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b460bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b460c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b4616c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b460e0"
      ]
    ]
  ],
  "added": [
    [
      "00b46158",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b4615c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b4616c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b4617c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b460bc ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00b460bc ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00b460bc ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b460c0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b460c0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b460c0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b460c0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b460c4 ["COPY", "tmp:0:8", ["const:10:8"]]
- 00b460c4 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00b460c4 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00b460c4 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-0012bdf2fe1a97adf219c8ce73f3c95b"></a>

### [`00b460f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b46/00b460f8.md) → [`00b46194`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b46194.md) _ZN8firebase4util3log13CacheFieldIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5aef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aef0.md) [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 67.86% / 新版 67.86%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b461bc",
      "incomplete_value": true,
      "site": "00b461cc",
      "value": [
        "live",
        "register:4098:8"
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
      "definition_site": "00b461c0",
      "incomplete_value": true,
      "site": "00b461cc",
      "value": [
        "live",
        "register:4040:8"
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
      "definition_site": "00b461c4",
      "incomplete_value": false,
      "site": "00b461cc",
      "value": [
        "leaf",
        "const:0:8"
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
      "unmatched:00b4610c",
      "READ",
      [
        "storage",
        "011256d8",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b46114",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b461d8"
      ]
    ],
    [
      "unmatched:00b4611c",
      "PARAM",
      [
        "storage",
        "002bbdb7",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b461a8",
      "READ",
      [
        "storage",
        "011257d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b461b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b461d8"
      ]
    ],
    [
      "00b461b8",
      "PARAM",
      [
        "storage",
        "002bbd63",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b46130 ["INT_ADD", "register:40f0:8", ["const:b46130:8", "const:4:8"]]
- 00b46130 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b461cc ["INT_ADD", "register:40f0:8", ["const:b461cc:8", "const:4:8"]]
+ 00b461cc ["CALL", null, ["callee:00c5afe0:8"]]
- 00b4610c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:6d8:8"]]
- 00b4610c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00b46110 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-49d67b07cc0b56157e82f8670fbdfd2e"></a>

### [`00b46168`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b46/00b46168.md) → [`00b46204`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b46204.md) _ZN8firebase4util3log10GetFieldIdENS1_5FieldE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b46220",
      "incomplete_value": false,
      "site": "00b46224",
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
            "const:54d:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46184",
      "incomplete_value": false,
      "site": "00b46188",
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
            "const:51e:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00b46230",
      "incomplete_value": true,
      "site": "00b4623c",
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
              "INT_LEFT"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46194",
      "incomplete_value": true,
      "site": "00b461a0",
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
              "INT_LEFT"
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
      "00b46220",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "00b46230",
      "DATA",
      [
        "storage",
        "011256f0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b46220",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b46230",
      "DATA",
      [
        "storage",
        "011257f0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b46188 ["INT_ADD", "register:40f0:8", ["const:b46188:8", "const:4:8"]]
- 00b46188 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b46224 ["INT_ADD", "register:40f0:8", ["const:b46224:8", "const:4:8"]]
+ 00b46224 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b46184 ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00b46184 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b46184 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b46184 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b46220 ["COPY", "tmp:0:8", ["const:54d:8"]]
+ 00b46220 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b46220 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b46220 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b46190 ["COPY", "tmp:0:8", ["const:6f0:8"]]
- 00b46190 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b46190 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b46190 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b4622c ["COPY", "tmp:0:8", ["const:7f0:8"]]
+ 00b4622c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b4622c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b4622c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e7fc3a7314c6a7a489ea27135198f589"></a>

### [`00b461a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b46/00b461a4.md) → [`00b46240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b46240.md) _ZN8firebase4util10uribuilder19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEEN

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4626c",
      "incomplete_value": true,
      "site": "00b4626c",
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
            "const:7f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b461d0",
      "incomplete_value": true,
      "site": "00b461d0",
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
            "const:6f8:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b46254",
      "incomplete_value": true,
      "site": "00b46254",
      "value": [
        "INT_NOTEQUAL",
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
      "definition_site": "00b461b8",
      "incomplete_value": true,
      "site": "00b461b8",
      "value": [
        "INT_NOTEQUAL",
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
      "definition_site": "00b46260",
      "incomplete_value": false,
      "site": "00b46264",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2af000:8"
          ],
          [
            "leaf",
            "const:2b1:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b461c4",
      "incomplete_value": false,
      "site": "00b461c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2af000:8"
          ],
          [
            "leaf",
            "const:30d:8"
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
      "00b46250",
      "READ",
      [
        "storage",
        "011256f8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b46260",
      "PARAM",
      [
        "storage",
        "002af30d",
        null,
        "string"
      ]
    ],
    [
      "00b4626c",
      "WRITE",
      [
        "storage",
        "011256f8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b46250",
      "READ",
      [
        "storage",
        "011257f8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b46260",
      "PARAM",
      [
        "storage",
        "002af2b1",
        null,
        "string"
      ]
    ],
    [
      "00b4626c",
      "WRITE",
      [
        "storage",
        "011257f8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b461c8 ["INT_ADD", "register:40f0:8", ["const:b461c8:8", "const:4:8"]]
- 00b461c8 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b46264 ["INT_ADD", "register:40f0:8", ["const:b46264:8", "const:4:8"]]
+ 00b46264 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b461d0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:6f8:8"]]
- 00b461d0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4626c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:7f8:8"]]
+ 00b4626c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b461b4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:6f8:8"]]
- 00b461b4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b46250 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:7f8:8"]]
+ 00b46250 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-f95d4344b19489ebf76926347c332776"></a>

### [`00b461e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b46/00b461e4.md) → [`00b46280`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b46280.md) _ZN8firebase4util10uribuilder19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, branch_value, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 68.75% / 新版 68.75%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b46294",
      "incomplete_value": true,
      "site": "00b46294",
      "value": [
        "INT_NOTEQUAL",
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
      "definition_site": "00b461f8",
      "incomplete_value": true,
      "site": "00b461f8",
      "value": [
        "INT_NOTEQUAL",
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
      "00b46290",
      "READ",
      [
        "storage",
        "011256f8",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b46200",
      "PARAM",
      [
        "storage",
        "002af30d",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b46208",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5afe0"
      ]
    ]
  ],
  "added": [
    [
      "00b46290",
      "READ",
      [
        "storage",
        "011257f8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4629c",
      "PARAM",
      [
        "storage",
        "002af2b1",
        null,
        "string"
      ]
    ],
    [
      "00b462a4",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5afe0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b461f8 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00b461f8 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00b46294 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00b46294 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00b461f4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:6f8:8"]]
- 00b461f4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b46290 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:7f8:8"]]
+ 00b46290 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b46200 ["COPY", "tmp:0:8", ["const:30d:8"]]
- 00b46200 ["INT_CARRY", "register:105:1", ["register:4018:8", "tmp:0:8"]]
- 00b46200 ["INT_SCARRY", "register:106:1", ["register:4018:8", "tmp:0:8"]]
- 00b46200 ["INT_ADD", "tmp:1:8", ["register:4018:8", "tmp:0:8"]]
~~~


<a id="compare-83af8640633b2f1993b33c0ee1ac2b84"></a>

### [`00b46224`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b46/00b46224.md) → [`00b462c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b462c0.md) _ZN8firebase4util10uribuilder10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, branch_value, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 70.59% / 新版 70.59%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b462d4",
      "incomplete_value": true,
      "site": "00b462d4",
      "value": [
        "INT_NOTEQUAL",
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
      "definition_site": "00b46238",
      "incomplete_value": true,
      "site": "00b46238",
      "value": [
        "INT_NOTEQUAL",
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
      "00b462d0",
      "READ",
      [
        "storage",
        "011256f8",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b46244",
      "PARAM",
      [
        "storage",
        "002af30d",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b4624c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5afe0"
      ]
    ]
  ],
  "added": [
    [
      "00b462d0",
      "READ",
      [
        "storage",
        "011257f8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b462e0",
      "PARAM",
      [
        "storage",
        "002af2b1",
        null,
        "string"
      ]
    ],
    [
      "00b462e8",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5afe0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b46238 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00b46238 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00b462d4 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00b462d4 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 00b46234 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:6f8:8"]]
- 00b46234 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b462d0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:7f8:8"]]
+ 00b462d0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b46244 ["COPY", "tmp:0:8", ["const:30d:8"]]
- 00b46244 ["INT_CARRY", "register:105:1", ["register:4018:8", "tmp:0:8"]]
- 00b46244 ["INT_SCARRY", "register:106:1", ["register:4018:8", "tmp:0:8"]]
- 00b46244 ["INT_ADD", "tmp:1:8", ["register:4018:8", "tmp:0:8"]]
~~~


<a id="compare-0aae9bd98824a5823cd9f6129284ee5d"></a>

### [`00b46268`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b46/00b46268.md) → [`00b46304`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b46304.md) _ZN8firebase4util10uribuilder10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 70.59% / 新版 70.59%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 4件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b46318",
      "incomplete_value": true,
      "site": "00b46318",
      "value": [
        "INT_NOTEQUAL",
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
      "definition_site": "00b4627c",
      "incomplete_value": true,
      "site": "00b4627c",
      "value": [
        "INT_NOTEQUAL",
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
      "definition_site": "00b46320",
      "incomplete_value": false,
      "site": "00b4632c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2af000:8"
          ],
          [
            "leaf",
            "const:2b1:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46284",
      "incomplete_value": false,
      "site": "00b46290",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2af000:8"
          ],
          [
            "leaf",
            "const:30d:8"
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
      "unmatched:00b46268",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b4626c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b46314",
      "READ",
      [
        "storage",
        "011256f8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b46304",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b46308",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b46314",
      "READ",
      [
        "storage",
        "011257f8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4627c ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00b4627c ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00b46318 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00b46318 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 00b46290 ["INT_ADD", "register:40f0:8", ["const:b46290:8", "const:4:8"]]
- 00b46290 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b4632c ["INT_ADD", "register:40f0:8", ["const:b4632c:8", "const:4:8"]]
+ 00b4632c ["CALL", null, ["callee:00c5afe0:8"]]
- 00b46268 ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00b46268 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00b46268 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-c965a432cc4e27d686d707e8f846c7bf"></a>

### [`00b462b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b46/00b462b8.md) → [`00b46354`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b46354.md) _ZN8firebase4util10uribuilder15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 94.87% / 新版 94.87%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b463dc",
      "incomplete_value": true,
      "site": "00b463dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:800:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46340",
      "incomplete_value": true,
      "site": "00b46340",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:700:8"
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
      "definition_site": "00b46388",
      "incomplete_value": true,
      "site": "00b46394",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:7f8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b462ec",
      "incomplete_value": true,
      "site": "00b462f8",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:6f8:8"
              ]
            ]
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
      "00b46368",
      "READ",
      [
        "storage",
        "01125700",
        null,
        "undefined1"
      ]
    ],
    [
      "00b46388",
      "READ",
      [
        "storage",
        "011256f8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b463dc",
      "WRITE",
      [
        "storage",
        "01125700",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b46368",
      "READ",
      [
        "storage",
        "01125800",
        null,
        "undefined1"
      ]
    ],
    [
      "00b46388",
      "READ",
      [
        "storage",
        "011257f8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b463dc",
      "WRITE",
      [
        "storage",
        "01125800",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b462f8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b462f8 ["INT_ADD", "register:40f0:8", ["const:b462f8:8", "const:4:8"]]
- 00b462f8 ["CALLIND", null, ["register:0:8"]]
+ 00b46394 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b46394 ["INT_ADD", "register:40f0:8", ["const:b46394:8", "const:4:8"]]
+ 00b46394 ["CALLIND", null, ["register:0:8"]]
- 00b46340 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b46340 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:700:8"]]
- 00b46340 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b463dc ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b463dc ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:800:8"]]
+ 00b463dc ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b462cc ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:700:8"]]
- 00b462cc ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00b462cc ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00b46368 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:800:8"]]
+ 00b46368 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00b46368 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-f6c065bd91ed20e19b72c3a912618915"></a>

### [`00b46354`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b46/00b46354.md) → [`00b463f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b463f0.md) _ZN8firebase4util10uribuilder12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_destination, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4647c",
      "incomplete_value": true,
      "site": "00b4647c",
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
            "const:7f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b463e0",
      "incomplete_value": true,
      "site": "00b463e0",
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
            "const:6f8:8"
          ]
        ]
      ]
    },
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b46408",
      "incomplete_value": true,
      "site": "00b46408",
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
      "definition_site": "00b4636c",
      "incomplete_value": true,
      "site": "00b4636c",
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
      "definition_site": "00b4646c",
      "incomplete_value": true,
      "site": "00b46478",
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
                "register:40a0:8"
              ],
              [
                "leaf",
                "const:7f8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b463d0",
      "incomplete_value": true,
      "site": "00b463dc",
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
                "register:40a0:8"
              ],
              [
                "leaf",
                "const:6f8:8"
              ]
            ]
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
      "00b46404",
      "READ",
      [
        "storage",
        "011256f8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b46410",
      "READ",
      [
        "storage",
        "01125700",
        null,
        "undefined1"
      ]
    ],
    [
      "unmatched:00b46390",
      "WRITE",
      [
        "storage",
        "01125700",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b46404",
      "READ",
      [
        "storage",
        "011257f8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b46410",
      "READ",
      [
        "storage",
        "01125800",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4642c",
      "WRITE",
      [
        "storage",
        "01125800",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b463dc ["COPY", "register:0:8", ["register:4040:8"]]
- 00b463dc ["INT_ADD", "register:40f0:8", ["const:b463dc:8", "const:4:8"]]
- 00b463dc ["CALLIND", null, ["register:0:8"]]
+ 00b46478 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b46478 ["INT_ADD", "register:40f0:8", ["const:b46478:8", "const:4:8"]]
+ 00b46478 ["CALLIND", null, ["register:0:8"]]
- 00b463e0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:6f8:8"]]
- 00b463e0 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b463e0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b4647c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:7f8:8"]]
+ 00b4647c ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b4647c ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
- 00b46368 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:6f8:8"]]
- 00b46368 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b46404 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:7f8:8"]]
+ 00b46404 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-f78b52ce85ee6b895f519045a5184de5"></a>

### [`00b463f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b46/00b463f4.md) → [`00b46490`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b46490.md) _ZN8firebase4util10uribuilder14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md) [`00c5af30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af30.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 67.86% / 新版 67.86%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b464b4",
      "incomplete_value": false,
      "site": "00b464c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2af000:8"
          ],
          [
            "leaf",
            "const:2b1:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46418",
      "incomplete_value": false,
      "site": "00b4642c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2af000:8"
          ],
          [
            "leaf",
            "const:30d:8"
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
      "unmatched:00b46408",
      "READ",
      [
        "storage",
        "011256f8",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b46410",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b464d4"
      ]
    ],
    [
      "unmatched:00b46418",
      "PARAM",
      [
        "storage",
        "002af30d",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b464a4",
      "READ",
      [
        "storage",
        "011257f8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b464ac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b464d4"
      ]
    ],
    [
      "00b464b4",
      "PARAM",
      [
        "storage",
        "002af2b1",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4642c ["INT_ADD", "register:40f0:8", ["const:b4642c:8", "const:4:8"]]
- 00b4642c ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b464c8 ["INT_ADD", "register:40f0:8", ["const:b464c8:8", "const:4:8"]]
+ 00b464c8 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b46408 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:6f8:8"]]
- 00b46408 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00b4640c ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-168ea1d4b4ef1a01ab07dfe5e6182231"></a>

### [`00b46464`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b46/00b46464.md) → [`00b46500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b46500.md) _ZN8firebase4util10uribuilder11GetMethodIdENS1_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4651c",
      "incomplete_value": false,
      "site": "00b46520",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a8000:8"
          ],
          [
            "leaf",
            "const:30b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46480",
      "incomplete_value": false,
      "site": "00b46484",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a8000:8"
          ],
          [
            "leaf",
            "const:367:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00b4652c",
      "incomplete_value": true,
      "site": "00b46538",
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
              "INT_LEFT"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46490",
      "incomplete_value": true,
      "site": "00b4649c",
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
              "INT_LEFT"
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
      "00b4651c",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "00b4652c",
      "DATA",
      [
        "storage",
        "01125708",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4651c",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b4652c",
      "DATA",
      [
        "storage",
        "01125808",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b46484 ["INT_ADD", "register:40f0:8", ["const:b46484:8", "const:4:8"]]
- 00b46484 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b46520 ["INT_ADD", "register:40f0:8", ["const:b46520:8", "const:4:8"]]
+ 00b46520 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b46480 ["COPY", "tmp:0:8", ["const:367:8"]]
- 00b46480 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b46480 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b46480 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4651c ["COPY", "tmp:0:8", ["const:30b:8"]]
+ 00b4651c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4651c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4651c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4648c ["COPY", "tmp:0:8", ["const:708:8"]]
- 00b4648c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b4648c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b4648c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b46528 ["COPY", "tmp:0:8", ["const:808:8"]]
+ 00b46528 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b46528 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b46528 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e4da1acc951b1bc55a33eec4db6ed020"></a>

### [`00b464a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b46/00b464a0.md) → [`00b4653c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b4653c.md) _ZN8firebase4util10uribuilder13CacheFieldIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5aef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aef0.md) [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4657c",
      "incomplete_value": true,
      "site": "00b4657c",
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
            "const:7f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b464e0",
      "incomplete_value": true,
      "site": "00b464e0",
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
            "const:6f8:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b46558",
      "incomplete_value": true,
      "site": "00b46558",
      "value": [
        "INT_NOTEQUAL",
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
      "definition_site": "00b464bc",
      "incomplete_value": true,
      "site": "00b464bc",
      "value": [
        "INT_NOTEQUAL",
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
      "definition_site": "00b46560",
      "incomplete_value": false,
      "site": "00b46574",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2af000:8"
          ],
          [
            "leaf",
            "const:2b1:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b464c4",
      "incomplete_value": false,
      "site": "00b464d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2af000:8"
          ],
          [
            "leaf",
            "const:30d:8"
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
      "00b46550",
      "READ",
      [
        "storage",
        "011256f8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b46560",
      "PARAM",
      [
        "storage",
        "002af30d",
        null,
        "string"
      ]
    ],
    [
      "00b4657c",
      "WRITE",
      [
        "storage",
        "011256f8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b46550",
      "READ",
      [
        "storage",
        "011257f8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b46560",
      "PARAM",
      [
        "storage",
        "002af2b1",
        null,
        "string"
      ]
    ],
    [
      "00b4657c",
      "WRITE",
      [
        "storage",
        "011257f8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b464d8 ["INT_ADD", "register:40f0:8", ["const:b464d8:8", "const:4:8"]]
- 00b464d8 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b46574 ["INT_ADD", "register:40f0:8", ["const:b46574:8", "const:4:8"]]
+ 00b46574 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b464e0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:6f8:8"]]
- 00b464e0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4657c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:7f8:8"]]
+ 00b4657c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b464b4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:6f8:8"]]
- 00b464b4 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b46550 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:7f8:8"]]
+ 00b46550 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-a4f5e64b04af8b301872ec74213820e3"></a>

### [`00b46510`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b46/00b46510.md) → [`00b465ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b465ac.md) _ZN8firebase4util10uribuilder10GetFieldIdENS1_5FieldE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment

命令の説明率　旧版 46.67% / 新版 46.67%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b465c0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b46534"
      ]
    ],
    [
      "unmatched:00b4652c",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b46530",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5b0d0"
      ]
    ]
  ],
  "added": [
    [
      "00b465c0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b465d0"
      ]
    ],
    [
      "00b465c8",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b465cc",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5b0d0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b46524 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 00b46524 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00b465c0 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 00b465c0 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 00b4652c ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00b4652c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4652c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4652c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b46530 ["INT_ADD", "register:40f0:8", ["const:b46530:8", "const:4:8"]]
- 00b46530 ["CALL", null, ["callee:00c5b0d0:8"]]
~~~


