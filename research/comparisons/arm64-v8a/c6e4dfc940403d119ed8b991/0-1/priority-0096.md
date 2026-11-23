# v16.0.1 → v16.0.2 · 最優先の変更候補 (96)

[一覧の目次](README.md)

<a id="compare-bdae2b6a180036a230caf0856a43dc35"></a>

### [`00bf0408`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf0/00bf0408.md) → [`00bf04a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf04a4.md) _ZNKSt6__ndk112bad_weak_ptr4whatEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00bf04ac",
      "incomplete_value": false,
      "site": "00bf04b0",
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
            "const:b7:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf0410",
      "incomplete_value": false,
      "site": "00bf0414",
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
            "const:10b:8"
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
      "00bf04ac",
      "DATA",
      [
        "storage",
        "002bb10b",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bf04ac",
      "DATA",
      [
        "storage",
        "002bb0b7",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf0410 ["COPY", "tmp:0:8", ["const:10b:8"]]
- 00bf0410 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bf0410 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bf0410 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bf04ac ["COPY", "tmp:0:8", ["const:b7:8"]]
+ 00bf04ac ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bf04ac ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bf04ac ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-2737b5f15f8edfd500e084b1a056683e"></a>

### [`00bf0718`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf0/00bf0718.md) → [`00bf07b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf07b4.md) _ZSt17__throw_bad_allocv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5df80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5df80.md) · 呼出先 4件 [`00c37ba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37ba4.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md) [`00c58a40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58a40.md)
- 新版 呼出元 1件 [`00c5e050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e050.md) · 呼出先 4件 [`00c37c40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37c40.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c58b10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58b10.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bf07e0",
      "incomplete_value": true,
      "site": "00bf07e8",
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
                "const:eb8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf0744",
      "incomplete_value": true,
      "site": "00bf074c",
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
                "const:de8:8"
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
      "definition_site": "00bf07e4",
      "incomplete_value": true,
      "site": "00bf07e8",
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
                "const:ec0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf0748",
      "incomplete_value": true,
      "site": "00bf074c",
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
                "const:df0:8"
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
      "00bf07e0",
      "READ",
      [
        "storage",
        "00c9ade8",
        null,
        "pointer"
      ]
    ],
    [
      "00bf07e0",
      "PARAM",
      [
        "storage",
        "00c96698",
        "std::bad_alloc::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00bf07e4",
      "READ",
      [
        "storage",
        "00c9adf0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bf07e0",
      "READ",
      [
        "storage",
        "00c9aeb8",
        null,
        "pointer"
      ]
    ],
    [
      "00bf07e0",
      "PARAM",
      [
        "storage",
        "00c96768",
        "std::bad_alloc::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00bf07e4",
      "READ",
      [
        "storage",
        "00c9aec0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf074c ["INT_ADD", "register:40f0:8", ["const:bf074c:8", "const:4:8"]]
- 00bf074c ["CALL", null, ["callee:00c57fe0:8"]]
+ 00bf07e8 ["INT_ADD", "register:40f0:8", ["const:bf07e8:8", "const:4:8"]]
+ 00bf07e8 ["CALL", null, ["callee:00c57fe0:8"]]
- 00bf072c ["INT_ADD", "register:40f0:8", ["const:bf072c:8", "const:4:8"]]
- 00bf072c ["CALL", null, ["callee:00c57fc0:8"]]
+ 00bf07c8 ["INT_ADD", "register:40f0:8", ["const:bf07c8:8", "const:4:8"]]
+ 00bf07c8 ["CALL", null, ["callee:00c57fc0:8"]]
- 00bf0734 ["INT_ADD", "register:40f0:8", ["const:bf0734:8", "const:4:8"]]
- 00bf0734 ["CALL", null, ["callee:00c58b10:8"]]
+ 00bf07d0 ["INT_ADD", "register:40f0:8", ["const:bf07d0:8", "const:4:8"]]
+ 00bf07d0 ["CALL", null, ["callee:00c58b10:8"]]
~~~


<a id="compare-1f323f92431b8c893cdf7160fecc289d"></a>

### [`00bf0750`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf0/00bf0750.md) → [`00bf07ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf07ec.md) _ZNSt11logic_errorC2ERKNSt6__ndk112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5df90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5df90.md) · 呼出先 3件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`00c5e060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e060.md) · 呼出先 3件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.62% / 新版 90.62%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf080c",
      "incomplete_value": true,
      "site": "00bf0810",
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
      "definition_site": "00bf0770",
      "incomplete_value": true,
      "site": "00bf0774",
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
      "00bf0808",
      "READ",
      [
        "storage",
        "00c9ba90",
        null,
        "pointer"
      ]
    ],
    [
      "00bf0810",
      "DATA",
      [
        "storage",
        "00c966d8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bf0808",
      "READ",
      [
        "storage",
        "00c9bb60",
        null,
        "pointer"
      ]
    ],
    [
      "00bf0810",
      "DATA",
      [
        "storage",
        "00c967a8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf076c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a90:8"]]
- 00bf076c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bf0808 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:b60:8"]]
+ 00bf0808 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bf078c ["INT_ADD", "register:40f0:8", ["const:bf078c:8", "const:4:8"]]
- 00bf078c ["CALL", null, ["callee:00c580b0:8"]]
+ 00bf0828 ["INT_ADD", "register:40f0:8", ["const:bf0828:8", "const:4:8"]]
+ 00bf0828 ["CALL", null, ["callee:00c580b0:8"]]
- 00bf0798 ["INT_ADD", "register:40f0:8", ["const:bf0798:8", "const:4:8"]]
- 00bf0798 ["CALL", null, ["callee:00c57f60:8"]]
+ 00bf0834 ["INT_ADD", "register:40f0:8", ["const:bf0834:8", "const:4:8"]]
+ 00bf0834 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-27d39b01b43a553667b4d94b36a218a4"></a>

### [`00bf07e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf0/00bf07e4.md) → [`00bf0880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf0880.md) _ZNSt11logic_errorC1EPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c57f30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f30.md) · 呼出先 3件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`00c58000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58000.md) · 呼出先 3件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 89.66% / 新版 89.66%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf08a4",
      "incomplete_value": true,
      "site": "00bf08a8",
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
      "definition_site": "00bf0808",
      "incomplete_value": true,
      "site": "00bf080c",
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
      "00bf08a0",
      "READ",
      [
        "storage",
        "00c9ba90",
        null,
        "pointer"
      ]
    ],
    [
      "00bf08a8",
      "DATA",
      [
        "storage",
        "00c966d8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bf08a0",
      "READ",
      [
        "storage",
        "00c9bb60",
        null,
        "pointer"
      ]
    ],
    [
      "00bf08a8",
      "DATA",
      [
        "storage",
        "00c967a8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf0804 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a90:8"]]
- 00bf0804 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bf08a0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:b60:8"]]
+ 00bf08a0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bf0814 ["INT_ADD", "register:40f0:8", ["const:bf0814:8", "const:4:8"]]
- 00bf0814 ["CALL", null, ["callee:00c580b0:8"]]
+ 00bf08b0 ["INT_ADD", "register:40f0:8", ["const:bf08b0:8", "const:4:8"]]
+ 00bf08b0 ["CALL", null, ["callee:00c580b0:8"]]
- 00bf0820 ["INT_ADD", "register:40f0:8", ["const:bf0820:8", "const:4:8"]]
- 00bf0820 ["CALL", null, ["callee:00c57f60:8"]]
+ 00bf08bc ["INT_ADD", "register:40f0:8", ["const:bf08bc:8", "const:4:8"]]
+ 00bf08bc ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-8b6f4b82facbaada72776e75100eb3d3"></a>

### [`00bf0900`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf0/00bf0900.md) → [`00bf099c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf099c.md) _ZNSt13runtime_errorC1ERKNSt6__ndk112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5dfa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dfa0.md) · 呼出先 3件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`00c5e070`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e070.md) · 呼出先 3件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.62% / 新版 90.62%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf09bc",
      "incomplete_value": true,
      "site": "00bf09c0",
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
      "definition_site": "00bf0920",
      "incomplete_value": true,
      "site": "00bf0924",
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
      "00bf09b8",
      "READ",
      [
        "storage",
        "00c9ba98",
        null,
        "pointer"
      ]
    ],
    [
      "00bf09c0",
      "DATA",
      [
        "storage",
        "00c96700",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bf09b8",
      "READ",
      [
        "storage",
        "00c9bb68",
        null,
        "pointer"
      ]
    ],
    [
      "00bf09c0",
      "DATA",
      [
        "storage",
        "00c967d0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf091c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a98:8"]]
- 00bf091c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bf09b8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:b68:8"]]
+ 00bf09b8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bf093c ["INT_ADD", "register:40f0:8", ["const:bf093c:8", "const:4:8"]]
- 00bf093c ["CALL", null, ["callee:00c580b0:8"]]
+ 00bf09d8 ["INT_ADD", "register:40f0:8", ["const:bf09d8:8", "const:4:8"]]
+ 00bf09d8 ["CALL", null, ["callee:00c580b0:8"]]
- 00bf0948 ["INT_ADD", "register:40f0:8", ["const:bf0948:8", "const:4:8"]]
- 00bf0948 ["CALL", null, ["callee:00c57f60:8"]]
+ 00bf09e4 ["INT_ADD", "register:40f0:8", ["const:bf09e4:8", "const:4:8"]]
+ 00bf09e4 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-5672935add9766f10fa24f4bbb8810bf"></a>

### [`00bf0994`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf0/00bf0994.md) → [`00bf0a30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf0a30.md) _ZNSt13runtime_errorC1EPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00c5a8d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a8d0.md) [`00c5dfc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dfc0.md) · 呼出先 3件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 2件 [`00c5a9a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a9a0.md) [`00c5e090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e090.md) · 呼出先 3件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 89.66% / 新版 89.66%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf0a54",
      "incomplete_value": true,
      "site": "00bf0a58",
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
      "definition_site": "00bf09b8",
      "incomplete_value": true,
      "site": "00bf09bc",
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
      "00bf0a50",
      "READ",
      [
        "storage",
        "00c9ba98",
        null,
        "pointer"
      ]
    ],
    [
      "00bf0a58",
      "DATA",
      [
        "storage",
        "00c96700",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bf0a50",
      "READ",
      [
        "storage",
        "00c9bb68",
        null,
        "pointer"
      ]
    ],
    [
      "00bf0a58",
      "DATA",
      [
        "storage",
        "00c967d0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf09b4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a98:8"]]
- 00bf09b4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bf0a50 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:b68:8"]]
+ 00bf0a50 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bf09c4 ["INT_ADD", "register:40f0:8", ["const:bf09c4:8", "const:4:8"]]
- 00bf09c4 ["CALL", null, ["callee:00c580b0:8"]]
+ 00bf0a60 ["INT_ADD", "register:40f0:8", ["const:bf0a60:8", "const:4:8"]]
+ 00bf0a60 ["CALL", null, ["callee:00c580b0:8"]]
- 00bf09d0 ["INT_ADD", "register:40f0:8", ["const:bf09d0:8", "const:4:8"]]
- 00bf09d0 ["CALL", null, ["callee:00c57f60:8"]]
+ 00bf0a6c ["INT_ADD", "register:40f0:8", ["const:bf0a6c:8", "const:4:8"]]
+ 00bf0a6c ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-47b598ee5e61bfa1b786b230a7d6690d"></a>

### [`00bf0ab0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf0/00bf0ab0.md) → [`00bf0b4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf0b4c.md) _ZNSt6__ndk121__throw_runtime_errorEPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5dfb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dfb0.md) · 呼出先 4件 [`00c37d5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37d5c.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md) [`00c5dfc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dfc0.md)
- 新版 呼出元 1件 [`00c5e080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e080.md) · 呼出先 4件 [`00c37df8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37df8.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c5e090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e090.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bf0b80",
      "incomplete_value": true,
      "site": "00bf0b88",
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
                "const:b70:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf0ae4",
      "incomplete_value": true,
      "site": "00bf0aec",
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
                "const:aa0:8"
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
      "definition_site": "00bf0b84",
      "incomplete_value": true,
      "site": "00bf0b88",
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
                "const:b78:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf0ae8",
      "incomplete_value": true,
      "site": "00bf0aec",
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
                "const:aa8:8"
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
      "00bf0b80",
      "READ",
      [
        "storage",
        "00c9baa0",
        null,
        "pointer"
      ]
    ],
    [
      "00bf0b80",
      "PARAM",
      [
        "storage",
        "00c96858",
        "std::runtime_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00bf0b84",
      "READ",
      [
        "storage",
        "00c9baa8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bf0b80",
      "READ",
      [
        "storage",
        "00c9bb70",
        null,
        "pointer"
      ]
    ],
    [
      "00bf0b80",
      "PARAM",
      [
        "storage",
        "00c96928",
        "std::runtime_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00bf0b84",
      "READ",
      [
        "storage",
        "00c9bb78",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf0aec ["INT_ADD", "register:40f0:8", ["const:bf0aec:8", "const:4:8"]]
- 00bf0aec ["CALL", null, ["callee:00c57fe0:8"]]
+ 00bf0b88 ["INT_ADD", "register:40f0:8", ["const:bf0b88:8", "const:4:8"]]
+ 00bf0b88 ["CALL", null, ["callee:00c57fe0:8"]]
- 00bf0ac8 ["INT_ADD", "register:40f0:8", ["const:bf0ac8:8", "const:4:8"]]
- 00bf0ac8 ["CALL", null, ["callee:00c57fc0:8"]]
+ 00bf0b64 ["INT_ADD", "register:40f0:8", ["const:bf0b64:8", "const:4:8"]]
+ 00bf0b64 ["CALL", null, ["callee:00c57fc0:8"]]
- 00bf0ad4 ["INT_ADD", "register:40f0:8", ["const:bf0ad4:8", "const:4:8"]]
- 00bf0ad4 ["CALL", null, ["callee:00c5e090:8"]]
+ 00bf0b70 ["INT_ADD", "register:40f0:8", ["const:bf0b70:8", "const:4:8"]]
+ 00bf0b70 ["CALL", null, ["callee:00c5e090:8"]]
~~~


<a id="compare-54aa88a92f8c0b696dcb60108fd331ac"></a>

### [`00bf20a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf2/00bf20a4.md) → [`00bf2140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2140.md) _ZNKSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7compareEmmRKS5_mm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.73% / 新版 97.73%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bf21e8",
      "incomplete_value": false,
      "site": "00bf21ec",
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
            "const:6b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf214c",
      "incomplete_value": false,
      "site": "00bf2150",
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
            "const:714:8"
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
      "00bf21e8",
      "PARAM",
      [
        "storage",
        "002af714",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bf21e8",
      "PARAM",
      [
        "storage",
        "002af6b8",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf2150 ["INT_ADD", "register:40f0:8", ["const:bf2150:8", "const:4:8"]]
- 00bf2150 ["CALL", null, ["callee:00442970:8"]]
+ 00bf21ec ["INT_ADD", "register:40f0:8", ["const:bf21ec:8", "const:4:8"]]
+ 00bf21ec ["CALL", null, ["callee:00442970:8"]]
- 00bf211c ["INT_ADD", "register:40f0:8", ["const:bf211c:8", "const:4:8"]]
- 00bf211c ["CALL", null, ["callee:00c58120:8"]]
+ 00bf21b8 ["INT_ADD", "register:40f0:8", ["const:bf21b8:8", "const:4:8"]]
+ 00bf21b8 ["CALL", null, ["callee:00c58120:8"]]
- 00bf214c ["COPY", "tmp:0:8", ["const:714:8"]]
- 00bf214c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bf214c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bf214c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bf21e8 ["COPY", "tmp:0:8", ["const:6b8:8"]]
+ 00bf21e8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bf21e8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bf21e8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-b70f77b676737e0116ecfe1b0b254115"></a>

### [`00bf28d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf2/00bf28d8.md) → [`00bf2974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2974.md) FUN_00bf2974

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 17件 [`00bf2700`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf2/00bf2700.md) [`00bf2ddc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf2/00bf2ddc.md) [`00bf301c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf3/00bf301c.md) [`00bf3064`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf3/00bf3064.md) [`00bf3210`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf3/00bf3210.md) · 呼出先 1件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md)
- 新版 呼出元 17件 [`00bf279c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf279c.md) [`00bf2e78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2e78.md) [`00bf30b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf30b8.md) [`00bf3100`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf3100.md) [`00bf32ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf32ac.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bf2984",
      "incomplete_value": false,
      "site": "00bf2988",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b9000:8"
          ],
          [
            "leaf",
            "const:ecf:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf28e8",
      "incomplete_value": false,
      "site": "00bf28ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b9000:8"
          ],
          [
            "leaf",
            "const:f23:8"
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
      "00bf2984",
      "PARAM",
      [
        "storage",
        "002b9f23",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bf2984",
      "PARAM",
      [
        "storage",
        "002b9ecf",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf28ec ["INT_ADD", "register:40f0:8", ["const:bf28ec:8", "const:4:8"]]
- 00bf28ec ["CALL", null, ["callee:00442970:8"]]
+ 00bf2988 ["INT_ADD", "register:40f0:8", ["const:bf2988:8", "const:4:8"]]
+ 00bf2988 ["CALL", null, ["callee:00442970:8"]]
- 00bf28e8 ["COPY", "tmp:0:8", ["const:f23:8"]]
- 00bf28e8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bf28e8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bf28e8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bf2984 ["COPY", "tmp:0:8", ["const:ecf:8"]]
+ 00bf2984 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bf2984 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bf2984 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-bbb43f92218a988816ee3680c3e9be63"></a>

### [`00bf4510`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf4/00bf4510.md) → [`00bf45ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf45ac.md) _ZNKSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE7compareEmmRKS5_mm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`00c5e040`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e040.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00c5e110`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e110.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.83% / 新版 97.83%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bf465c",
      "incomplete_value": false,
      "site": "00bf4660",
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
            "const:6b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf45c0",
      "incomplete_value": false,
      "site": "00bf45c4",
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
            "const:714:8"
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
      "00bf465c",
      "PARAM",
      [
        "storage",
        "002af714",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bf465c",
      "PARAM",
      [
        "storage",
        "002af6b8",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf45c4 ["INT_ADD", "register:40f0:8", ["const:bf45c4:8", "const:4:8"]]
- 00bf45c4 ["CALL", null, ["callee:00442970:8"]]
+ 00bf4660 ["INT_ADD", "register:40f0:8", ["const:bf4660:8", "const:4:8"]]
+ 00bf4660 ["CALL", null, ["callee:00442970:8"]]
- 00bf4594 ["INT_ADD", "register:40f0:8", ["const:bf4594:8", "const:4:8"]]
- 00bf4594 ["CALL", null, ["callee:00c5e110:8"]]
+ 00bf4630 ["INT_ADD", "register:40f0:8", ["const:bf4630:8", "const:4:8"]]
+ 00bf4630 ["CALL", null, ["callee:00c5e110:8"]]
- 00bf45c0 ["COPY", "tmp:0:8", ["const:714:8"]]
- 00bf45c0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bf45c0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bf45c0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bf465c ["COPY", "tmp:0:8", ["const:6b8:8"]]
+ 00bf465c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bf465c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bf465c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-fbad3407c4900a07b55b1f03b8069c2d"></a>

### [`00bf4b70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf4/00bf4b70.md) → [`00bf4c0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf4c0c.md) _ZNKSt6__ndk121__basic_string_commonILb1EE20__throw_length_errorEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5b090`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b090.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`00c5b160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b160.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bf4c1c",
      "incomplete_value": false,
      "site": "00bf4c20",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b9000:8"
          ],
          [
            "leaf",
            "const:ecf:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf4b80",
      "incomplete_value": false,
      "site": "00bf4b84",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b9000:8"
          ],
          [
            "leaf",
            "const:f23:8"
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
      "00bf4c1c",
      "PARAM",
      [
        "storage",
        "002b9f23",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bf4c1c",
      "PARAM",
      [
        "storage",
        "002b9ecf",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf4b84 ["INT_ADD", "register:40f0:8", ["const:bf4b84:8", "const:4:8"]]
- 00bf4b84 ["CALL", null, ["callee:0043b7b8:8"]]
+ 00bf4c20 ["INT_ADD", "register:40f0:8", ["const:bf4c20:8", "const:4:8"]]
+ 00bf4c20 ["CALL", null, ["callee:0043b7b8:8"]]
- 00bf4b80 ["COPY", "tmp:0:8", ["const:f23:8"]]
- 00bf4b80 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bf4b80 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bf4b80 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bf4c1c ["COPY", "tmp:0:8", ["const:ecf:8"]]
+ 00bf4c1c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bf4c1c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bf4c1c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-4b85fb1c3f0b777950564e7932d03ba9"></a>

### [`00bf4b88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf4/00bf4b88.md) → [`00bf4c24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf4c24.md) _ZNKSt6__ndk121__basic_string_commonILb1EE20__throw_out_of_rangeEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5d450`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d450.md) · 呼出先 1件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md)
- 新版 呼出元 1件 [`00c5d520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d520.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bf4c34",
      "incomplete_value": false,
      "site": "00bf4c38",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b9000:8"
          ],
          [
            "leaf",
            "const:ecf:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf4b98",
      "incomplete_value": false,
      "site": "00bf4b9c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b9000:8"
          ],
          [
            "leaf",
            "const:f23:8"
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
      "00bf4c34",
      "PARAM",
      [
        "storage",
        "002b9f23",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bf4c34",
      "PARAM",
      [
        "storage",
        "002b9ecf",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf4b9c ["INT_ADD", "register:40f0:8", ["const:bf4b9c:8", "const:4:8"]]
- 00bf4b9c ["CALL", null, ["callee:00442970:8"]]
+ 00bf4c38 ["INT_ADD", "register:40f0:8", ["const:bf4c38:8", "const:4:8"]]
+ 00bf4c38 ["CALL", null, ["callee:00442970:8"]]
- 00bf4b98 ["COPY", "tmp:0:8", ["const:f23:8"]]
- 00bf4b98 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bf4b98 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bf4b98 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bf4c34 ["COPY", "tmp:0:8", ["const:ecf:8"]]
+ 00bf4c34 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bf4c34 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bf4c34 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-6ea6fde90b9ddea12e182b915d91c9c4"></a>

### [`00bf4ba0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf4/00bf4ba0.md) → [`00bf4c3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf4c3c.md) _ZNSt6__ndk14stoiERKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPmi

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c58060`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58060.md) · 呼出先 6件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`00481e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00481/00481e80.md) [`00bf817c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf8/00bf817c.md) [`00c580c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580c0.md) [`00c58590`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58590.md)
- 新版 呼出元 1件 [`00c58130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58130.md) · 呼出先 6件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00481ec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00481/00481ec0.md) [`00bf8218`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf8218.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c58660`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58660.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.21% / 新版 92.21%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf4d5c",
      "incomplete_value": true,
      "site": "00bf4d5c",
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
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:d72:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf4cc0",
      "incomplete_value": true,
      "site": "00bf4cc0",
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
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:dc6:8"
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
      "definition_site": "00bf4d64",
      "incomplete_value": true,
      "site": "00bf4d64",
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
      "definition_site": "00bf4cc8",
      "incomplete_value": true,
      "site": "00bf4cc8",
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
    "ordinal": 18,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bf4d08",
      "incomplete_value": false,
      "site": "00bf4d18",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b9000:8"
          ],
          [
            "leaf",
            "const:d72:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf4c6c",
      "incomplete_value": false,
      "site": "00bf4c7c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b9000:8"
          ],
          [
            "leaf",
            "const:dc6:8"
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
      "00bf4d08",
      "PARAM",
      [
        "storage",
        "002b9dc6",
        null,
        "string"
      ]
    ],
    [
      "00bf4d4c",
      "READ",
      [
        "storage",
        "002b9dc6",
        null,
        "string"
      ]
    ],
    [
      "00bf4d50",
      "READ",
      [
        "storage",
        "002b9dcc",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bf4d08",
      "PARAM",
      [
        "storage",
        "002b9d72",
        null,
        "string"
      ]
    ],
    [
      "00bf4d4c",
      "READ",
      [
        "storage",
        "002b9d72",
        null,
        "string"
      ]
    ],
    [
      "00bf4d50",
      "READ",
      [
        "storage",
        "002b9d78",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf4c7c ["INT_ADD", "register:40f0:8", ["const:bf4c7c:8", "const:4:8"]]
- 00bf4c7c ["CALL", null, ["callee:00481ec0:8"]]
+ 00bf4d18 ["INT_ADD", "register:40f0:8", ["const:bf4d18:8", "const:4:8"]]
+ 00bf4d18 ["CALL", null, ["callee:00481ec0:8"]]
- 00bf4bf0 ["INT_ADD", "register:40f0:8", ["const:bf4bf0:8", "const:4:8"]]
- 00bf4bf0 ["CALL", null, ["callee:00c58190:8"]]
+ 00bf4c8c ["INT_ADD", "register:40f0:8", ["const:bf4c8c:8", "const:4:8"]]
+ 00bf4c8c ["CALL", null, ["callee:00c58190:8"]]
- 00bf4c0c ["INT_ADD", "register:40f0:8", ["const:bf4c0c:8", "const:4:8"]]
- 00bf4c0c ["CALL", null, ["callee:00c58660:8"]]
+ 00bf4ca8 ["INT_ADD", "register:40f0:8", ["const:bf4ca8:8", "const:4:8"]]
+ 00bf4ca8 ["CALL", null, ["callee:00c58660:8"]]
~~~


<a id="compare-556dab66f70424c900fa076062e769bf"></a>

### [`00bf4cfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf4/00bf4cfc.md) → [`00bf4d98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf4d98.md) _ZNSt6__ndk14stolERKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPmi

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 7件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`00481e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00481/00481e80.md) [`00bf817c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf8/00bf817c.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c580c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580c0.md)
- 新版 呼出元 0件  · 呼出先 7件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00481ec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00481/00481ec0.md) [`00bf8218`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf8218.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.55% / 新版 98.55%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bf4e5c",
      "incomplete_value": false,
      "site": "00bf4e6c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b9000:8"
          ],
          [
            "leaf",
            "const:d72:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf4dc0",
      "incomplete_value": false,
      "site": "00bf4dd0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b9000:8"
          ],
          [
            "leaf",
            "const:dc6:8"
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
      "00bf4e5c",
      "PARAM",
      [
        "storage",
        "002b9dc6",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bf4e5c",
      "PARAM",
      [
        "storage",
        "002b9d72",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf4dd0 ["INT_ADD", "register:40f0:8", ["const:bf4dd0:8", "const:4:8"]]
- 00bf4dd0 ["CALL", null, ["callee:00481ec0:8"]]
+ 00bf4e6c ["INT_ADD", "register:40f0:8", ["const:bf4e6c:8", "const:4:8"]]
+ 00bf4e6c ["CALL", null, ["callee:00481ec0:8"]]
- 00bf4d4c ["INT_ADD", "register:40f0:8", ["const:bf4d4c:8", "const:4:8"]]
- 00bf4d4c ["CALL", null, ["callee:00c58190:8"]]
+ 00bf4de8 ["INT_ADD", "register:40f0:8", ["const:bf4de8:8", "const:4:8"]]
+ 00bf4de8 ["CALL", null, ["callee:00c58190:8"]]
- 00bf4d68 ["INT_ADD", "register:40f0:8", ["const:bf4d68:8", "const:4:8"]]
- 00bf4d68 ["CALL", null, ["callee:00c58660:8"]]
+ 00bf4e04 ["INT_ADD", "register:40f0:8", ["const:bf4e04:8", "const:4:8"]]
+ 00bf4e04 ["CALL", null, ["callee:00c58660:8"]]
~~~


<a id="compare-9b4a640c4b57c303c17df7b7997f4bfe"></a>

### [`00bf4e14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf4/00bf4e14.md) → [`00bf4eb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf4eb0.md) _ZNSt6__ndk15stoulERKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPmi

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c589f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c589f0.md) · 呼出先 6件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`00bf81cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf8/00bf81cc.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c580c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580c0.md) [`00c5e050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e050.md)
- 新版 呼出元 1件 [`00c58ac0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58ac0.md) · 呼出先 6件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00bf8268`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf8268.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c5e120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e120.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 89.01% / 新版 89.01%

優先判定に残った影響 `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf4fac",
      "incomplete_value": true,
      "site": "00bf4fac",
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
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:d72:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf4f10",
      "incomplete_value": true,
      "site": "00bf4f10",
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
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:dc6:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 19,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf4fb0",
      "incomplete_value": true,
      "site": "00bf4fb0",
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
      "definition_site": "00bf4f14",
      "incomplete_value": true,
      "site": "00bf4f14",
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
    "ordinal": 20,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf4fec",
      "incomplete_value": true,
      "site": "00bf4fec",
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
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:4ae:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf4f50",
      "incomplete_value": true,
      "site": "00bf4f50",
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
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:50a:8"
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
      "00bf4f94",
      "READ",
      [
        "storage",
        "002b9dc6",
        null,
        "string"
      ]
    ],
    [
      "00bf4f98",
      "READ",
      [
        "storage",
        "002b9dcc",
        null,
        "string"
      ]
    ],
    [
      "00bf4fd4",
      "READ",
      [
        "storage",
        "002a750a",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bf4f94",
      "READ",
      [
        "storage",
        "002b9d72",
        null,
        "string"
      ]
    ],
    [
      "00bf4f98",
      "READ",
      [
        "storage",
        "002b9d78",
        null,
        "string"
      ]
    ],
    [
      "00bf4fd4",
      "READ",
      [
        "storage",
        "002a74ae",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf4e70 ["INT_ADD", "register:40f0:8", ["const:bf4e70:8", "const:4:8"]]
- 00bf4e70 ["CALL", null, ["callee:00c58190:8"]]
+ 00bf4f0c ["INT_ADD", "register:40f0:8", ["const:bf4f0c:8", "const:4:8"]]
+ 00bf4f0c ["CALL", null, ["callee:00c58190:8"]]
- 00bf4e8c ["INT_ADD", "register:40f0:8", ["const:bf4e8c:8", "const:4:8"]]
- 00bf4e8c ["CALL", null, ["callee:00c5e130:8"]]
+ 00bf4f28 ["INT_ADD", "register:40f0:8", ["const:bf4f28:8", "const:4:8"]]
+ 00bf4f28 ["CALL", null, ["callee:00c5e130:8"]]
- 00bf4ebc ["INT_ADD", "register:40f0:8", ["const:bf4ebc:8", "const:4:8"]]
- 00bf4ebc ["CALL", null, ["callee:00c5e120:8"]]
+ 00bf4f58 ["INT_ADD", "register:40f0:8", ["const:bf4f58:8", "const:4:8"]]
+ 00bf4f58 ["CALL", null, ["callee:00c5e120:8"]]
~~~


<a id="compare-bc7af3a951fb1c37a7a5eaace3d851bc"></a>

### [`00bf4f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf4/00bf4f80.md) → [`00bf501c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf5/00bf501c.md) _ZNSt6__ndk15stollERKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPmi

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c58230`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58230.md) · 呼出先 6件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`00bf81cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf8/00bf81cc.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c580c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580c0.md) [`00c585a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c585a0.md)
- 新版 呼出元 1件 [`00c58300`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58300.md) · 呼出先 6件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00bf8268`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf8268.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c58670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58670.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 89.01% / 新版 89.01%

優先判定に残った影響 `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf5118",
      "incomplete_value": true,
      "site": "00bf5118",
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
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:d72:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf507c",
      "incomplete_value": true,
      "site": "00bf507c",
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
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:dc6:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 19,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf511c",
      "incomplete_value": true,
      "site": "00bf511c",
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
      "definition_site": "00bf5080",
      "incomplete_value": true,
      "site": "00bf5080",
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
    "ordinal": 20,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf5158",
      "incomplete_value": true,
      "site": "00bf5158",
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
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:4ae:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf50bc",
      "incomplete_value": true,
      "site": "00bf50bc",
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
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:50a:8"
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
      "00bf5100",
      "READ",
      [
        "storage",
        "002b9dc6",
        null,
        "string"
      ]
    ],
    [
      "00bf5104",
      "READ",
      [
        "storage",
        "002b9dcc",
        null,
        "string"
      ]
    ],
    [
      "00bf5140",
      "READ",
      [
        "storage",
        "002a750a",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bf5100",
      "READ",
      [
        "storage",
        "002b9d72",
        null,
        "string"
      ]
    ],
    [
      "00bf5104",
      "READ",
      [
        "storage",
        "002b9d78",
        null,
        "string"
      ]
    ],
    [
      "00bf5140",
      "READ",
      [
        "storage",
        "002a74ae",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf4fdc ["INT_ADD", "register:40f0:8", ["const:bf4fdc:8", "const:4:8"]]
- 00bf4fdc ["CALL", null, ["callee:00c58190:8"]]
+ 00bf5078 ["INT_ADD", "register:40f0:8", ["const:bf5078:8", "const:4:8"]]
+ 00bf5078 ["CALL", null, ["callee:00c58190:8"]]
- 00bf4ff8 ["INT_ADD", "register:40f0:8", ["const:bf4ff8:8", "const:4:8"]]
- 00bf4ff8 ["CALL", null, ["callee:00c58670:8"]]
+ 00bf5094 ["INT_ADD", "register:40f0:8", ["const:bf5094:8", "const:4:8"]]
+ 00bf5094 ["CALL", null, ["callee:00c58670:8"]]
- 00bf5028 ["INT_ADD", "register:40f0:8", ["const:bf5028:8", "const:4:8"]]
- 00bf5028 ["CALL", null, ["callee:00c5e120:8"]]
+ 00bf50c4 ["INT_ADD", "register:40f0:8", ["const:bf50c4:8", "const:4:8"]]
+ 00bf50c4 ["CALL", null, ["callee:00c5e120:8"]]
~~~


<a id="compare-a10aa8788412f61f622874cf9e67e18d"></a>

### [`00bf50ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf5/00bf50ec.md) → [`00bf5188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf5/00bf5188.md) _ZNSt6__ndk16stoullERKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPmi

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c58240`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58240.md) · 呼出先 6件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`00bf81cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf8/00bf81cc.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c580c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580c0.md) [`00c5e050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e050.md)
- 新版 呼出元 1件 [`00c58310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58310.md) · 呼出先 6件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00bf8268`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf8268.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c5e120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e120.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 89.13% / 新版 89.13%

優先判定に残った影響 `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf5288",
      "incomplete_value": true,
      "site": "00bf5288",
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
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:d72:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf51ec",
      "incomplete_value": true,
      "site": "00bf51ec",
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
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:dc6:8"
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
      "definition_site": "00bf528c",
      "incomplete_value": true,
      "site": "00bf528c",
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
      "definition_site": "00bf51f0",
      "incomplete_value": true,
      "site": "00bf51f0",
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
    "ordinal": 21,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf52c8",
      "incomplete_value": true,
      "site": "00bf52c8",
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
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:4ae:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf522c",
      "incomplete_value": true,
      "site": "00bf522c",
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
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:50a:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 26,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bf5270",
      "READ",
      [
        "storage",
        "002b9dc6",
        null,
        "string"
      ]
    ],
    [
      "00bf5274",
      "READ",
      [
        "storage",
        "002b9dcc",
        null,
        "string"
      ]
    ],
    [
      "00bf52b0",
      "READ",
      [
        "storage",
        "002a750a",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bf5270",
      "READ",
      [
        "storage",
        "002b9d72",
        null,
        "string"
      ]
    ],
    [
      "00bf5274",
      "READ",
      [
        "storage",
        "002b9d78",
        null,
        "string"
      ]
    ],
    [
      "00bf52b0",
      "READ",
      [
        "storage",
        "002a74ae",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf514c ["INT_ADD", "register:40f0:8", ["const:bf514c:8", "const:4:8"]]
- 00bf514c ["CALL", null, ["callee:00c58190:8"]]
+ 00bf51e8 ["INT_ADD", "register:40f0:8", ["const:bf51e8:8", "const:4:8"]]
+ 00bf51e8 ["CALL", null, ["callee:00c58190:8"]]
- 00bf5168 ["INT_ADD", "register:40f0:8", ["const:bf5168:8", "const:4:8"]]
- 00bf5168 ["CALL", null, ["callee:00c5e140:8"]]
+ 00bf5204 ["INT_ADD", "register:40f0:8", ["const:bf5204:8", "const:4:8"]]
+ 00bf5204 ["CALL", null, ["callee:00c5e140:8"]]
- 00bf5198 ["INT_ADD", "register:40f0:8", ["const:bf5198:8", "const:4:8"]]
- 00bf5198 ["CALL", null, ["callee:00c5e120:8"]]
+ 00bf5234 ["INT_ADD", "register:40f0:8", ["const:bf5234:8", "const:4:8"]]
+ 00bf5234 ["CALL", null, ["callee:00c5e120:8"]]
~~~


<a id="compare-b9030efd59bc994cd9aabf310c31f0fb"></a>

### [`00bf525c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf5/00bf525c.md) → [`00bf52f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf5/00bf52f8.md) _ZNSt6__ndk14stofERKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c585e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c585e0.md) · 呼出先 6件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`00bf81cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf8/00bf81cc.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c580c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580c0.md) [`00c585b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c585b0.md)
- 新版 呼出元 1件 [`00c586b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c586b0.md) · 呼出先 6件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00bf8268`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf8268.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c58680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58680.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 87.80% / 新版 87.80%

優先判定に残った影響 `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf53d4",
      "incomplete_value": true,
      "site": "00bf53d4",
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
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:d72:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf5338",
      "incomplete_value": true,
      "site": "00bf5338",
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
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:dc6:8"
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
      "definition_site": "00bf53dc",
      "incomplete_value": true,
      "site": "00bf53dc",
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
      "definition_site": "00bf5340",
      "incomplete_value": true,
      "site": "00bf5340",
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
    "ordinal": 18,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf540c",
      "incomplete_value": true,
      "site": "00bf540c",
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
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:4ae:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf5370",
      "incomplete_value": true,
      "site": "00bf5370",
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
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:50a:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 22,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bf53c4",
      "READ",
      [
        "storage",
        "002b9dc6",
        null,
        "string"
      ]
    ],
    [
      "00bf53c8",
      "READ",
      [
        "storage",
        "002b9dcc",
        null,
        "string"
      ]
    ],
    [
      "00bf53fc",
      "READ",
      [
        "storage",
        "002a750a",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bf53c4",
      "READ",
      [
        "storage",
        "002b9d72",
        null,
        "string"
      ]
    ],
    [
      "00bf53c8",
      "READ",
      [
        "storage",
        "002b9d78",
        null,
        "string"
      ]
    ],
    [
      "00bf53fc",
      "READ",
      [
        "storage",
        "002a74ae",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf52a8 ["INT_ADD", "register:40f0:8", ["const:bf52a8:8", "const:4:8"]]
- 00bf52a8 ["CALL", null, ["callee:00c58190:8"]]
+ 00bf5344 ["INT_ADD", "register:40f0:8", ["const:bf5344:8", "const:4:8"]]
+ 00bf5344 ["CALL", null, ["callee:00c58190:8"]]
- 00bf52c0 ["INT_ADD", "register:40f0:8", ["const:bf52c0:8", "const:4:8"]]
- 00bf52c0 ["CALL", null, ["callee:00c58680:8"]]
+ 00bf535c ["INT_ADD", "register:40f0:8", ["const:bf535c:8", "const:4:8"]]
+ 00bf535c ["CALL", null, ["callee:00c58680:8"]]
- 00bf52f0 ["INT_ADD", "register:40f0:8", ["const:bf52f0:8", "const:4:8"]]
- 00bf52f0 ["CALL", null, ["callee:00c5e120:8"]]
+ 00bf538c ["INT_ADD", "register:40f0:8", ["const:bf538c:8", "const:4:8"]]
+ 00bf538c ["CALL", null, ["callee:00c5e120:8"]]
~~~


<a id="compare-fe176ad9c209311b55348521e6f7b679"></a>

### [`00bf53a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf5/00bf53a4.md) → [`00bf5440`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf5/00bf5440.md) _ZNSt6__ndk14stodERKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c58250`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58250.md) · 呼出先 6件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`00bf81cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf8/00bf81cc.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c580c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580c0.md) [`00c585c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c585c0.md)
- 新版 呼出元 1件 [`00c58320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58320.md) · 呼出先 6件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00bf8268`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf8268.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c58690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58690.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 87.80% / 新版 87.80%

優先判定に残った影響 `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf551c",
      "incomplete_value": true,
      "site": "00bf551c",
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
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:d72:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf5480",
      "incomplete_value": true,
      "site": "00bf5480",
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
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:dc6:8"
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
      "definition_site": "00bf5524",
      "incomplete_value": true,
      "site": "00bf5524",
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
      "definition_site": "00bf5488",
      "incomplete_value": true,
      "site": "00bf5488",
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
    "ordinal": 18,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf5554",
      "incomplete_value": true,
      "site": "00bf5554",
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
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:4ae:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf54b8",
      "incomplete_value": true,
      "site": "00bf54b8",
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
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:50a:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 22,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bf550c",
      "READ",
      [
        "storage",
        "002b9dc6",
        null,
        "string"
      ]
    ],
    [
      "00bf5510",
      "READ",
      [
        "storage",
        "002b9dcc",
        null,
        "string"
      ]
    ],
    [
      "00bf5544",
      "READ",
      [
        "storage",
        "002a750a",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bf550c",
      "READ",
      [
        "storage",
        "002b9d72",
        null,
        "string"
      ]
    ],
    [
      "00bf5510",
      "READ",
      [
        "storage",
        "002b9d78",
        null,
        "string"
      ]
    ],
    [
      "00bf5544",
      "READ",
      [
        "storage",
        "002a74ae",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf53f0 ["INT_ADD", "register:40f0:8", ["const:bf53f0:8", "const:4:8"]]
- 00bf53f0 ["CALL", null, ["callee:00c58190:8"]]
+ 00bf548c ["INT_ADD", "register:40f0:8", ["const:bf548c:8", "const:4:8"]]
+ 00bf548c ["CALL", null, ["callee:00c58190:8"]]
- 00bf5408 ["INT_ADD", "register:40f0:8", ["const:bf5408:8", "const:4:8"]]
- 00bf5408 ["CALL", null, ["callee:00c58690:8"]]
+ 00bf54a4 ["INT_ADD", "register:40f0:8", ["const:bf54a4:8", "const:4:8"]]
+ 00bf54a4 ["CALL", null, ["callee:00c58690:8"]]
- 00bf5438 ["INT_ADD", "register:40f0:8", ["const:bf5438:8", "const:4:8"]]
- 00bf5438 ["CALL", null, ["callee:00c5e120:8"]]
+ 00bf54d4 ["INT_ADD", "register:40f0:8", ["const:bf54d4:8", "const:4:8"]]
+ 00bf54d4 ["CALL", null, ["callee:00c5e120:8"]]
~~~


<a id="compare-afec945125e6115d24eaf2bbf5f916d1"></a>

### [`00bf54ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf5/00bf54ec.md) → [`00bf5588`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf5/00bf5588.md) _ZNSt6__ndk15stoldERKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 6件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`00bf81cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf8/00bf81cc.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c580c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580c0.md) [`00c5e050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e050.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00bf8268`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf8268.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c5e120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e120.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.76% / 新版 88.76%

優先判定に残った影響 `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf567c",
      "incomplete_value": true,
      "site": "00bf567c",
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
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:d72:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf55e0",
      "incomplete_value": true,
      "site": "00bf55e0",
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
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:dc6:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 19,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf5680",
      "incomplete_value": true,
      "site": "00bf5680",
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
      "definition_site": "00bf55e4",
      "incomplete_value": true,
      "site": "00bf55e4",
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
    "ordinal": 20,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf56bc",
      "incomplete_value": true,
      "site": "00bf56bc",
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
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:4ae:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf5620",
      "incomplete_value": true,
      "site": "00bf5620",
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
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:50a:8"
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
      "00bf5664",
      "READ",
      [
        "storage",
        "002b9dc6",
        null,
        "string"
      ]
    ],
    [
      "00bf5668",
      "READ",
      [
        "storage",
        "002b9dcc",
        null,
        "string"
      ]
    ],
    [
      "00bf56a4",
      "READ",
      [
        "storage",
        "002a750a",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bf5664",
      "READ",
      [
        "storage",
        "002b9d72",
        null,
        "string"
      ]
    ],
    [
      "00bf5668",
      "READ",
      [
        "storage",
        "002b9d78",
        null,
        "string"
      ]
    ],
    [
      "00bf56a4",
      "READ",
      [
        "storage",
        "002a74ae",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf5544 ["INT_ADD", "register:40f0:8", ["const:bf5544:8", "const:4:8"]]
- 00bf5544 ["CALL", null, ["callee:00c58190:8"]]
+ 00bf55e0 ["INT_ADD", "register:40f0:8", ["const:bf55e0:8", "const:4:8"]]
+ 00bf55e0 ["CALL", null, ["callee:00c58190:8"]]
- 00bf555c ["INT_ADD", "register:40f0:8", ["const:bf555c:8", "const:4:8"]]
- 00bf555c ["CALL", null, ["callee:00c5e150:8"]]
+ 00bf55f8 ["INT_ADD", "register:40f0:8", ["const:bf55f8:8", "const:4:8"]]
+ 00bf55f8 ["CALL", null, ["callee:00c5e150:8"]]
- 00bf558c ["INT_ADD", "register:40f0:8", ["const:bf558c:8", "const:4:8"]]
- 00bf558c ["CALL", null, ["callee:00c5e120:8"]]
+ 00bf5628 ["INT_ADD", "register:40f0:8", ["const:bf5628:8", "const:4:8"]]
+ 00bf5628 ["CALL", null, ["callee:00c5e120:8"]]
~~~


<a id="compare-664fb467ec468e03c4fcc6be069168b0"></a>

### [`00bf5650`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf5/00bf5650.md) → [`00bf56ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf5/00bf56ec.md) _ZNSt6__ndk14stoiERKNS_12basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEEPmi

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 6件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`00481e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00481/00481e80.md) [`00bf817c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf8/00bf817c.md) [`00c580c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580c0.md) [`00c5e050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e050.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00481ec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00481/00481ec0.md) [`00bf8218`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf8218.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c5e120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e120.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.41% / 新版 92.41%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf5814",
      "incomplete_value": true,
      "site": "00bf5814",
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
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:d72:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf5778",
      "incomplete_value": true,
      "site": "00bf5778",
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
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:dc6:8"
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
      "definition_site": "00bf581c",
      "incomplete_value": true,
      "site": "00bf581c",
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
      "definition_site": "00bf5780",
      "incomplete_value": true,
      "site": "00bf5780",
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
    "ordinal": 18,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bf57c0",
      "incomplete_value": false,
      "site": "00bf57d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b9000:8"
          ],
          [
            "leaf",
            "const:d72:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf5724",
      "incomplete_value": false,
      "site": "00bf5734",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b9000:8"
          ],
          [
            "leaf",
            "const:dc6:8"
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
      "00bf57c0",
      "PARAM",
      [
        "storage",
        "002b9dc6",
        null,
        "string"
      ]
    ],
    [
      "00bf5804",
      "READ",
      [
        "storage",
        "002b9dc6",
        null,
        "string"
      ]
    ],
    [
      "00bf5808",
      "READ",
      [
        "storage",
        "002b9dcc",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bf57c0",
      "PARAM",
      [
        "storage",
        "002b9d72",
        null,
        "string"
      ]
    ],
    [
      "00bf5804",
      "READ",
      [
        "storage",
        "002b9d72",
        null,
        "string"
      ]
    ],
    [
      "00bf5808",
      "READ",
      [
        "storage",
        "002b9d78",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf5734 ["INT_ADD", "register:40f0:8", ["const:bf5734:8", "const:4:8"]]
- 00bf5734 ["CALL", null, ["callee:00481ec0:8"]]
+ 00bf57d0 ["INT_ADD", "register:40f0:8", ["const:bf57d0:8", "const:4:8"]]
+ 00bf57d0 ["CALL", null, ["callee:00481ec0:8"]]
- 00bf56a4 ["INT_ADD", "register:40f0:8", ["const:bf56a4:8", "const:4:8"]]
- 00bf56a4 ["CALL", null, ["callee:00c58190:8"]]
+ 00bf5740 ["INT_ADD", "register:40f0:8", ["const:bf5740:8", "const:4:8"]]
+ 00bf5740 ["CALL", null, ["callee:00c58190:8"]]
- 00bf56c0 ["INT_ADD", "register:40f0:8", ["const:bf56c0:8", "const:4:8"]]
- 00bf56c0 ["CALL", null, ["callee:00c5e160:8"]]
+ 00bf575c ["INT_ADD", "register:40f0:8", ["const:bf575c:8", "const:4:8"]]
+ 00bf575c ["CALL", null, ["callee:00c5e160:8"]]
~~~


<a id="compare-af866772629bb92eb6cd28fd573390ad"></a>

### [`00bf57b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf5/00bf57b4.md) → [`00bf5850`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf5/00bf5850.md) _ZNSt6__ndk14stolERKNS_12basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEEPmi

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 7件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`00481e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00481/00481e80.md) [`00bf817c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf8/00bf817c.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c580c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580c0.md)
- 新版 呼出元 0件  · 呼出先 7件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00481ec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00481/00481ec0.md) [`00bf8218`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf8218.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.59% / 新版 98.59%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bf591c",
      "incomplete_value": false,
      "site": "00bf592c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b9000:8"
          ],
          [
            "leaf",
            "const:d72:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf5880",
      "incomplete_value": false,
      "site": "00bf5890",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b9000:8"
          ],
          [
            "leaf",
            "const:dc6:8"
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
      "00bf591c",
      "PARAM",
      [
        "storage",
        "002b9dc6",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bf591c",
      "PARAM",
      [
        "storage",
        "002b9d72",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf5890 ["INT_ADD", "register:40f0:8", ["const:bf5890:8", "const:4:8"]]
- 00bf5890 ["CALL", null, ["callee:00481ec0:8"]]
+ 00bf592c ["INT_ADD", "register:40f0:8", ["const:bf592c:8", "const:4:8"]]
+ 00bf592c ["CALL", null, ["callee:00481ec0:8"]]
- 00bf5808 ["INT_ADD", "register:40f0:8", ["const:bf5808:8", "const:4:8"]]
- 00bf5808 ["CALL", null, ["callee:00c58190:8"]]
+ 00bf58a4 ["INT_ADD", "register:40f0:8", ["const:bf58a4:8", "const:4:8"]]
+ 00bf58a4 ["CALL", null, ["callee:00c58190:8"]]
- 00bf5824 ["INT_ADD", "register:40f0:8", ["const:bf5824:8", "const:4:8"]]
- 00bf5824 ["CALL", null, ["callee:00c5e160:8"]]
+ 00bf58c0 ["INT_ADD", "register:40f0:8", ["const:bf58c0:8", "const:4:8"]]
+ 00bf58c0 ["CALL", null, ["callee:00c5e160:8"]]
~~~


<a id="compare-c29c554891c90b5186b9d92ab750526e"></a>

### [`00bf58d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf5/00bf58d4.md) → [`00bf5970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf5/00bf5970.md) _ZNSt6__ndk15stoulERKNS_12basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEEPmi

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 6件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`00bf81cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf8/00bf81cc.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c580c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580c0.md) [`00c5e050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e050.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00bf8268`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf8268.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c5e120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e120.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 89.36% / 新版 89.36%

優先判定に残った影響 `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf5a74",
      "incomplete_value": true,
      "site": "00bf5a74",
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
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:d72:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf59d8",
      "incomplete_value": true,
      "site": "00bf59d8",
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
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:dc6:8"
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
      "definition_site": "00bf5a78",
      "incomplete_value": true,
      "site": "00bf5a78",
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
      "definition_site": "00bf59dc",
      "incomplete_value": true,
      "site": "00bf59dc",
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
    "ordinal": 19,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf5ab4",
      "incomplete_value": true,
      "site": "00bf5ab4",
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
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:4ae:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf5a18",
      "incomplete_value": true,
      "site": "00bf5a18",
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
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:50a:8"
              ]
            ]
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
      "00bf5a5c",
      "READ",
      [
        "storage",
        "002b9dc6",
        null,
        "string"
      ]
    ],
    [
      "00bf5a64",
      "READ",
      [
        "storage",
        "002b9dcc",
        null,
        "string"
      ]
    ],
    [
      "00bf5a9c",
      "READ",
      [
        "storage",
        "002a750a",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bf5a5c",
      "READ",
      [
        "storage",
        "002b9d72",
        null,
        "string"
      ]
    ],
    [
      "00bf5a64",
      "READ",
      [
        "storage",
        "002b9d78",
        null,
        "string"
      ]
    ],
    [
      "00bf5a9c",
      "READ",
      [
        "storage",
        "002a74ae",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf592c ["INT_ADD", "register:40f0:8", ["const:bf592c:8", "const:4:8"]]
- 00bf592c ["CALL", null, ["callee:00c58190:8"]]
+ 00bf59c8 ["INT_ADD", "register:40f0:8", ["const:bf59c8:8", "const:4:8"]]
+ 00bf59c8 ["CALL", null, ["callee:00c58190:8"]]
- 00bf5948 ["INT_ADD", "register:40f0:8", ["const:bf5948:8", "const:4:8"]]
- 00bf5948 ["CALL", null, ["callee:00c5e170:8"]]
+ 00bf59e4 ["INT_ADD", "register:40f0:8", ["const:bf59e4:8", "const:4:8"]]
+ 00bf59e4 ["CALL", null, ["callee:00c5e170:8"]]
- 00bf5984 ["INT_ADD", "register:40f0:8", ["const:bf5984:8", "const:4:8"]]
- 00bf5984 ["CALL", null, ["callee:00c5e120:8"]]
+ 00bf5a20 ["INT_ADD", "register:40f0:8", ["const:bf5a20:8", "const:4:8"]]
+ 00bf5a20 ["CALL", null, ["callee:00c5e120:8"]]
~~~


<a id="compare-bc1566ce1b2982c552352392fc2155cd"></a>

### [`00bf5a50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf5/00bf5a50.md) → [`00bf5aec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf5/00bf5aec.md) _ZNSt6__ndk15stollERKNS_12basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEEPmi

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 6件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`00bf81cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf8/00bf81cc.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c580c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580c0.md) [`00c5e050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e050.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00bf8268`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf8268.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c5e120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e120.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 89.36% / 新版 89.36%

優先判定に残った影響 `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf5bf0",
      "incomplete_value": true,
      "site": "00bf5bf0",
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
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:d72:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf5b54",
      "incomplete_value": true,
      "site": "00bf5b54",
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
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:dc6:8"
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
      "definition_site": "00bf5bf4",
      "incomplete_value": true,
      "site": "00bf5bf4",
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
      "definition_site": "00bf5b58",
      "incomplete_value": true,
      "site": "00bf5b58",
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
    "ordinal": 19,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf5c30",
      "incomplete_value": true,
      "site": "00bf5c30",
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
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:4ae:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf5b94",
      "incomplete_value": true,
      "site": "00bf5b94",
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
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:50a:8"
              ]
            ]
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
      "00bf5bd8",
      "READ",
      [
        "storage",
        "002b9dc6",
        null,
        "string"
      ]
    ],
    [
      "00bf5be0",
      "READ",
      [
        "storage",
        "002b9dcc",
        null,
        "string"
      ]
    ],
    [
      "00bf5c18",
      "READ",
      [
        "storage",
        "002a750a",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bf5bd8",
      "READ",
      [
        "storage",
        "002b9d72",
        null,
        "string"
      ]
    ],
    [
      "00bf5be0",
      "READ",
      [
        "storage",
        "002b9d78",
        null,
        "string"
      ]
    ],
    [
      "00bf5c18",
      "READ",
      [
        "storage",
        "002a74ae",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf5aa8 ["INT_ADD", "register:40f0:8", ["const:bf5aa8:8", "const:4:8"]]
- 00bf5aa8 ["CALL", null, ["callee:00c58190:8"]]
+ 00bf5b44 ["INT_ADD", "register:40f0:8", ["const:bf5b44:8", "const:4:8"]]
+ 00bf5b44 ["CALL", null, ["callee:00c58190:8"]]
- 00bf5ac4 ["INT_ADD", "register:40f0:8", ["const:bf5ac4:8", "const:4:8"]]
- 00bf5ac4 ["CALL", null, ["callee:00c5e180:8"]]
+ 00bf5b60 ["INT_ADD", "register:40f0:8", ["const:bf5b60:8", "const:4:8"]]
+ 00bf5b60 ["CALL", null, ["callee:00c5e180:8"]]
- 00bf5b00 ["INT_ADD", "register:40f0:8", ["const:bf5b00:8", "const:4:8"]]
- 00bf5b00 ["CALL", null, ["callee:00c5e120:8"]]
+ 00bf5b9c ["INT_ADD", "register:40f0:8", ["const:bf5b9c:8", "const:4:8"]]
+ 00bf5b9c ["CALL", null, ["callee:00c5e120:8"]]
~~~


<a id="compare-d3602b3a408d7e217f4c66d0e55ea0a3"></a>

### [`00bf5bcc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf5/00bf5bcc.md) → [`00bf5c68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf5/00bf5c68.md) _ZNSt6__ndk16stoullERKNS_12basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEEPmi

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 6件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`00bf81cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf8/00bf81cc.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c580c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580c0.md) [`00c5e050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e050.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00bf8268`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf8268.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c5e120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e120.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 89.47% / 新版 89.47%

優先判定に残った影響 `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf5d70",
      "incomplete_value": true,
      "site": "00bf5d70",
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
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:d72:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf5cd4",
      "incomplete_value": true,
      "site": "00bf5cd4",
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
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:dc6:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 19,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf5d74",
      "incomplete_value": true,
      "site": "00bf5d74",
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
      "definition_site": "00bf5cd8",
      "incomplete_value": true,
      "site": "00bf5cd8",
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
    "ordinal": 20,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf5db0",
      "incomplete_value": true,
      "site": "00bf5db0",
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
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:4ae:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf5d14",
      "incomplete_value": true,
      "site": "00bf5d14",
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
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:50a:8"
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
      "00bf5d58",
      "READ",
      [
        "storage",
        "002b9dc6",
        null,
        "string"
      ]
    ],
    [
      "00bf5d60",
      "READ",
      [
        "storage",
        "002b9dcc",
        null,
        "string"
      ]
    ],
    [
      "00bf5d98",
      "READ",
      [
        "storage",
        "002a750a",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bf5d58",
      "READ",
      [
        "storage",
        "002b9d72",
        null,
        "string"
      ]
    ],
    [
      "00bf5d60",
      "READ",
      [
        "storage",
        "002b9d78",
        null,
        "string"
      ]
    ],
    [
      "00bf5d98",
      "READ",
      [
        "storage",
        "002a74ae",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf5c28 ["INT_ADD", "register:40f0:8", ["const:bf5c28:8", "const:4:8"]]
- 00bf5c28 ["CALL", null, ["callee:00c58190:8"]]
+ 00bf5cc4 ["INT_ADD", "register:40f0:8", ["const:bf5cc4:8", "const:4:8"]]
+ 00bf5cc4 ["CALL", null, ["callee:00c58190:8"]]
- 00bf5c44 ["INT_ADD", "register:40f0:8", ["const:bf5c44:8", "const:4:8"]]
- 00bf5c44 ["CALL", null, ["callee:00c5e190:8"]]
+ 00bf5ce0 ["INT_ADD", "register:40f0:8", ["const:bf5ce0:8", "const:4:8"]]
+ 00bf5ce0 ["CALL", null, ["callee:00c5e190:8"]]
- 00bf5c80 ["INT_ADD", "register:40f0:8", ["const:bf5c80:8", "const:4:8"]]
- 00bf5c80 ["CALL", null, ["callee:00c5e120:8"]]
+ 00bf5d1c ["INT_ADD", "register:40f0:8", ["const:bf5d1c:8", "const:4:8"]]
+ 00bf5d1c ["CALL", null, ["callee:00c5e120:8"]]
~~~


<a id="compare-5652b4db453fb7dff130a4d253a47698"></a>

### [`00bf5d4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf5/00bf5d4c.md) → [`00bf5de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf5/00bf5de8.md) _ZNSt6__ndk14stofERKNS_12basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEEPm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 6件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`00bf81cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf8/00bf81cc.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c580c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580c0.md) [`00c5e050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e050.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00bf8268`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf8268.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c5e120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e120.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf5ecc",
      "incomplete_value": true,
      "site": "00bf5ecc",
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
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:d72:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf5e30",
      "incomplete_value": true,
      "site": "00bf5e30",
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
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:dc6:8"
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
      "definition_site": "00bf5ed4",
      "incomplete_value": true,
      "site": "00bf5ed4",
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
      "definition_site": "00bf5e38",
      "incomplete_value": true,
      "site": "00bf5e38",
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
    "ordinal": 18,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf5f04",
      "incomplete_value": true,
      "site": "00bf5f04",
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
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:4ae:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf5e68",
      "incomplete_value": true,
      "site": "00bf5e68",
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
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:50a:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 22,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bf5ebc",
      "READ",
      [
        "storage",
        "002b9dc6",
        null,
        "string"
      ]
    ],
    [
      "00bf5ec0",
      "READ",
      [
        "storage",
        "002b9dcc",
        null,
        "string"
      ]
    ],
    [
      "00bf5ef4",
      "READ",
      [
        "storage",
        "002a750a",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bf5ebc",
      "READ",
      [
        "storage",
        "002b9d72",
        null,
        "string"
      ]
    ],
    [
      "00bf5ec0",
      "READ",
      [
        "storage",
        "002b9d78",
        null,
        "string"
      ]
    ],
    [
      "00bf5ef4",
      "READ",
      [
        "storage",
        "002a74ae",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf5d9c ["INT_ADD", "register:40f0:8", ["const:bf5d9c:8", "const:4:8"]]
- 00bf5d9c ["CALL", null, ["callee:00c58190:8"]]
+ 00bf5e38 ["INT_ADD", "register:40f0:8", ["const:bf5e38:8", "const:4:8"]]
+ 00bf5e38 ["CALL", null, ["callee:00c58190:8"]]
- 00bf5db4 ["INT_ADD", "register:40f0:8", ["const:bf5db4:8", "const:4:8"]]
- 00bf5db4 ["CALL", null, ["callee:00c5e1a0:8"]]
+ 00bf5e50 ["INT_ADD", "register:40f0:8", ["const:bf5e50:8", "const:4:8"]]
+ 00bf5e50 ["CALL", null, ["callee:00c5e1a0:8"]]
- 00bf5de8 ["INT_ADD", "register:40f0:8", ["const:bf5de8:8", "const:4:8"]]
- 00bf5de8 ["CALL", null, ["callee:00c5e120:8"]]
+ 00bf5e84 ["INT_ADD", "register:40f0:8", ["const:bf5e84:8", "const:4:8"]]
+ 00bf5e84 ["CALL", null, ["callee:00c5e120:8"]]
~~~


<a id="compare-ac50470024241445550f1bd4a024408f"></a>

### [`00bf5ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf5/00bf5ea4.md) → [`00bf5f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf5/00bf5f40.md) _ZNSt6__ndk14stodERKNS_12basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEEPm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 6件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`00bf81cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf8/00bf81cc.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c580c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580c0.md) [`00c5e050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e050.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00bf8268`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf8268.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c5e120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e120.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf6024",
      "incomplete_value": true,
      "site": "00bf6024",
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
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:d72:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf5f88",
      "incomplete_value": true,
      "site": "00bf5f88",
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
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:dc6:8"
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
      "definition_site": "00bf602c",
      "incomplete_value": true,
      "site": "00bf602c",
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
      "definition_site": "00bf5f90",
      "incomplete_value": true,
      "site": "00bf5f90",
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
    "ordinal": 18,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf605c",
      "incomplete_value": true,
      "site": "00bf605c",
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
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:4ae:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf5fc0",
      "incomplete_value": true,
      "site": "00bf5fc0",
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
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:50a:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 22,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bf6014",
      "READ",
      [
        "storage",
        "002b9dc6",
        null,
        "string"
      ]
    ],
    [
      "00bf6018",
      "READ",
      [
        "storage",
        "002b9dcc",
        null,
        "string"
      ]
    ],
    [
      "00bf604c",
      "READ",
      [
        "storage",
        "002a750a",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bf6014",
      "READ",
      [
        "storage",
        "002b9d72",
        null,
        "string"
      ]
    ],
    [
      "00bf6018",
      "READ",
      [
        "storage",
        "002b9d78",
        null,
        "string"
      ]
    ],
    [
      "00bf604c",
      "READ",
      [
        "storage",
        "002a74ae",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf5ef4 ["INT_ADD", "register:40f0:8", ["const:bf5ef4:8", "const:4:8"]]
- 00bf5ef4 ["CALL", null, ["callee:00c58190:8"]]
+ 00bf5f90 ["INT_ADD", "register:40f0:8", ["const:bf5f90:8", "const:4:8"]]
+ 00bf5f90 ["CALL", null, ["callee:00c58190:8"]]
- 00bf5f0c ["INT_ADD", "register:40f0:8", ["const:bf5f0c:8", "const:4:8"]]
- 00bf5f0c ["CALL", null, ["callee:00c5e1b0:8"]]
+ 00bf5fa8 ["INT_ADD", "register:40f0:8", ["const:bf5fa8:8", "const:4:8"]]
+ 00bf5fa8 ["CALL", null, ["callee:00c5e1b0:8"]]
- 00bf5f40 ["INT_ADD", "register:40f0:8", ["const:bf5f40:8", "const:4:8"]]
- 00bf5f40 ["CALL", null, ["callee:00c5e120:8"]]
+ 00bf5fdc ["INT_ADD", "register:40f0:8", ["const:bf5fdc:8", "const:4:8"]]
+ 00bf5fdc ["CALL", null, ["callee:00c5e120:8"]]
~~~


<a id="compare-c03f1ebf535248f51f8a4353d0213b61"></a>

### [`00bf5ffc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf5/00bf5ffc.md) → [`00bf6098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf6/00bf6098.md) _ZNSt6__ndk15stoldERKNS_12basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEEPm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 6件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`00bf81cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf8/00bf81cc.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c580c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580c0.md) [`00c5e050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e050.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00bf8268`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf8268.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c5e120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e120.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf618c",
      "incomplete_value": true,
      "site": "00bf618c",
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
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:d72:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf60f0",
      "incomplete_value": true,
      "site": "00bf60f0",
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
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:dc6:8"
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
      "definition_site": "00bf6190",
      "incomplete_value": true,
      "site": "00bf6190",
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
      "definition_site": "00bf60f4",
      "incomplete_value": true,
      "site": "00bf60f4",
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
    "ordinal": 19,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf61cc",
      "incomplete_value": true,
      "site": "00bf61cc",
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
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:4ae:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf6130",
      "incomplete_value": true,
      "site": "00bf6130",
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
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:50a:8"
              ]
            ]
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
      "00bf6174",
      "READ",
      [
        "storage",
        "002b9dc6",
        null,
        "string"
      ]
    ],
    [
      "00bf617c",
      "READ",
      [
        "storage",
        "002b9dcc",
        null,
        "string"
      ]
    ],
    [
      "00bf61b4",
      "READ",
      [
        "storage",
        "002a750a",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bf6174",
      "READ",
      [
        "storage",
        "002b9d72",
        null,
        "string"
      ]
    ],
    [
      "00bf617c",
      "READ",
      [
        "storage",
        "002b9d78",
        null,
        "string"
      ]
    ],
    [
      "00bf61b4",
      "READ",
      [
        "storage",
        "002a74ae",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf604c ["INT_ADD", "register:40f0:8", ["const:bf604c:8", "const:4:8"]]
- 00bf604c ["CALL", null, ["callee:00c58190:8"]]
+ 00bf60e8 ["INT_ADD", "register:40f0:8", ["const:bf60e8:8", "const:4:8"]]
+ 00bf60e8 ["CALL", null, ["callee:00c58190:8"]]
- 00bf6064 ["INT_ADD", "register:40f0:8", ["const:bf6064:8", "const:4:8"]]
- 00bf6064 ["CALL", null, ["callee:00c5e1c0:8"]]
+ 00bf6100 ["INT_ADD", "register:40f0:8", ["const:bf6100:8", "const:4:8"]]
+ 00bf6100 ["CALL", null, ["callee:00c5e1c0:8"]]
- 00bf60a0 ["INT_ADD", "register:40f0:8", ["const:bf60a0:8", "const:4:8"]]
- 00bf60a0 ["CALL", null, ["callee:00c5e120:8"]]
+ 00bf613c ["INT_ADD", "register:40f0:8", ["const:bf613c:8", "const:4:8"]]
+ 00bf613c ["CALL", null, ["callee:00c5e120:8"]]
~~~


<a id="compare-e774020ee1210a2c3b999347b04beae9"></a>

### [`00bf7db4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf7/00bf7db4.md) → [`00bf7e50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf7/00bf7e50.md) _ZNSt6__ndk110to_wstringEf

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c5a890`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a890.md) [`00c5e110`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e110.md) [`00c5e120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e120.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5a960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a960.md) [`00c5e1e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e1e0.md) [`00c5e1f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e1f0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.00% / 新版 96.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf7e8c",
      "incomplete_value": true,
      "site": "00bf7e94",
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
                "const:2c0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf7df0",
      "incomplete_value": true,
      "site": "00bf7df8",
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
                "const:280:8"
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
      "00bf7e8c",
      "READ",
      [
        "storage",
        "002c3280",
        null,
        null
      ]
    ],
    [
      "00bf7ef4",
      "PARAM",
      [
        "storage",
        "003104f4",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bf7e8c",
      "READ",
      [
        "storage",
        "002c32c0",
        null,
        null
      ]
    ],
    [
      "00bf7ef4",
      "PARAM",
      [
        "storage",
        "00310534",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf7de0 ["INT_ADD", "register:40f0:8", ["const:bf7de0:8", "const:4:8"]]
- 00bf7de0 ["CALL", null, ["callee:00c57f60:8"]]
+ 00bf7e7c ["INT_ADD", "register:40f0:8", ["const:bf7e7c:8", "const:4:8"]]
+ 00bf7e7c ["CALL", null, ["callee:00c57f60:8"]]
- 00bf7df0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:280:8"]]
- 00bf7df0 ["LOAD", "register:5020:16", ["const:1b1:8", "tmp:0:8"]]
- 00bf7df0 ["COPY", "register:5030:8", ["const:0:8"]]
- 00bf7df0 ["COPY", "register:5038:8", ["const:0:8"]]
+ 00bf7e8c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:2c0:8"]]
+ 00bf7e8c ["LOAD", "register:5020:16", ["const:1b1:8", "tmp:0:8"]]
+ 00bf7e8c ["COPY", "register:5030:8", ["const:0:8"]]
+ 00bf7e8c ["COPY", "register:5038:8", ["const:0:8"]]
- 00bf7e18 ["INT_ADD", "register:40f0:8", ["const:bf7e18:8", "const:4:8"]]
- 00bf7e18 ["CALL", null, ["callee:00c5a960:8"]]
+ 00bf7eb4 ["INT_ADD", "register:40f0:8", ["const:bf7eb4:8", "const:4:8"]]
+ 00bf7eb4 ["CALL", null, ["callee:00c5a960:8"]]
~~~


<a id="compare-e9c4c913c65ec5f400fcdb047ee00e5c"></a>

### [`00bf7efc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf7/00bf7efc.md) → [`00bf7f98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf7/00bf7f98.md) _ZNSt6__ndk110to_wstringEd

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c5a890`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a890.md) [`00c5e110`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e110.md) [`00c5e120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e120.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5a960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a960.md) [`00c5e1e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e1e0.md) [`00c5e1f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e1f0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.95% / 新版 95.95%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf7fd4",
      "incomplete_value": true,
      "site": "00bf7fdc",
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
                "const:2c0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf7f38",
      "incomplete_value": true,
      "site": "00bf7f40",
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
                "const:280:8"
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
      "00bf7fd4",
      "READ",
      [
        "storage",
        "002c3280",
        null,
        null
      ]
    ],
    [
      "00bf8038",
      "PARAM",
      [
        "storage",
        "003104f4",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bf7fd4",
      "READ",
      [
        "storage",
        "002c32c0",
        null,
        null
      ]
    ],
    [
      "00bf8038",
      "PARAM",
      [
        "storage",
        "00310534",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf7f28 ["INT_ADD", "register:40f0:8", ["const:bf7f28:8", "const:4:8"]]
- 00bf7f28 ["CALL", null, ["callee:00c57f60:8"]]
+ 00bf7fc4 ["INT_ADD", "register:40f0:8", ["const:bf7fc4:8", "const:4:8"]]
+ 00bf7fc4 ["CALL", null, ["callee:00c57f60:8"]]
- 00bf7f38 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:280:8"]]
- 00bf7f38 ["LOAD", "register:5020:16", ["const:1b1:8", "tmp:0:8"]]
- 00bf7f38 ["COPY", "register:5030:8", ["const:0:8"]]
- 00bf7f38 ["COPY", "register:5038:8", ["const:0:8"]]
+ 00bf7fd4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:2c0:8"]]
+ 00bf7fd4 ["LOAD", "register:5020:16", ["const:1b1:8", "tmp:0:8"]]
+ 00bf7fd4 ["COPY", "register:5030:8", ["const:0:8"]]
+ 00bf7fd4 ["COPY", "register:5038:8", ["const:0:8"]]
- 00bf7f60 ["INT_ADD", "register:40f0:8", ["const:bf7f60:8", "const:4:8"]]
- 00bf7f60 ["CALL", null, ["callee:00c5a960:8"]]
+ 00bf7ffc ["INT_ADD", "register:40f0:8", ["const:bf7ffc:8", "const:4:8"]]
+ 00bf7ffc ["CALL", null, ["callee:00c5a960:8"]]
~~~


<a id="compare-2db44827c6f596ed57003de4cdea4ec7"></a>

### [`00bf8040`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf8/00bf8040.md) → [`00bf80dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf80dc.md) _ZNSt6__ndk110to_wstringEe

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c5a890`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a890.md) [`00c5e110`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e110.md) [`00c5e120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e120.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5a960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a960.md) [`00c5e1e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e1e0.md) [`00c5e1f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e1f0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.83% / 新版 95.83%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf8114",
      "incomplete_value": true,
      "site": "00bf811c",
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
                "const:2c0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf8078",
      "incomplete_value": true,
      "site": "00bf8080",
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
                "const:280:8"
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
      "00bf8114",
      "READ",
      [
        "storage",
        "002c3280",
        null,
        null
      ]
    ],
    [
      "00bf8178",
      "PARAM",
      [
        "storage",
        "00310564",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bf8114",
      "READ",
      [
        "storage",
        "002c32c0",
        null,
        null
      ]
    ],
    [
      "00bf8178",
      "PARAM",
      [
        "storage",
        "003105a4",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf8068 ["INT_ADD", "register:40f0:8", ["const:bf8068:8", "const:4:8"]]
- 00bf8068 ["CALL", null, ["callee:00c57f60:8"]]
+ 00bf8104 ["INT_ADD", "register:40f0:8", ["const:bf8104:8", "const:4:8"]]
+ 00bf8104 ["CALL", null, ["callee:00c57f60:8"]]
- 00bf8078 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:280:8"]]
- 00bf8078 ["LOAD", "register:5020:16", ["const:1b1:8", "tmp:0:8"]]
- 00bf8078 ["COPY", "register:5030:8", ["const:0:8"]]
- 00bf8078 ["COPY", "register:5038:8", ["const:0:8"]]
+ 00bf8114 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:2c0:8"]]
+ 00bf8114 ["LOAD", "register:5020:16", ["const:1b1:8", "tmp:0:8"]]
+ 00bf8114 ["COPY", "register:5030:8", ["const:0:8"]]
+ 00bf8114 ["COPY", "register:5038:8", ["const:0:8"]]
- 00bf80a0 ["INT_ADD", "register:40f0:8", ["const:bf80a0:8", "const:4:8"]]
- 00bf80a0 ["CALL", null, ["callee:00c5a960:8"]]
+ 00bf813c ["INT_ADD", "register:40f0:8", ["const:bf813c:8", "const:4:8"]]
+ 00bf813c ["CALL", null, ["callee:00c5a960:8"]]
~~~


<a id="compare-775051cdfc784a7ae03f24d75f0932fc"></a>

### [`00bf817c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf8/00bf817c.md) → [`00bf8218`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf8218.md) FUN_00bf8218

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`00bf4ba0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf4/00bf4ba0.md) [`00bf4cfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf4/00bf4cfc.md) [`00bf5650`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf5/00bf5650.md) [`00bf57b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf5/00bf57b4.md) · 呼出先 4件 [`00481e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00481/00481e80.md) [`00bf81cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf8/00bf81cc.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c5e050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e050.md)
- 新版 呼出元 4件 [`00bf4c3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf4c3c.md) [`00bf4d98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf4d98.md) [`00bf56ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf5/00bf56ec.md) [`00bf5850`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf5/00bf5850.md) · 呼出先 4件 [`00481ec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00481/00481ec0.md) [`00bf8268`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf8268.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c5e120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e120.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 95.00% / 新版 95.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bf8230",
      "incomplete_value": false,
      "site": "00bf823c",
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
            "const:4ae:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf8194",
      "incomplete_value": false,
      "site": "00bf81a0",
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
            "const:50a:8"
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
      "00bf8230",
      "PARAM",
      [
        "storage",
        "002a750a",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bf8230",
      "PARAM",
      [
        "storage",
        "002a74ae",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf81a0 ["INT_ADD", "register:40f0:8", ["const:bf81a0:8", "const:4:8"]]
- 00bf81a0 ["CALL", null, ["callee:00481ec0:8"]]
+ 00bf823c ["INT_ADD", "register:40f0:8", ["const:bf823c:8", "const:4:8"]]
+ 00bf823c ["CALL", null, ["callee:00481ec0:8"]]
- 00bf8194 ["COPY", "tmp:0:8", ["const:50a:8"]]
- 00bf8194 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 00bf8194 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 00bf8194 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 00bf8230 ["COPY", "tmp:0:8", ["const:4ae:8"]]
+ 00bf8230 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 00bf8230 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 00bf8230 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
- 00bf81b4 ["INT_ADD", "register:40f0:8", ["const:bf81b4:8", "const:4:8"]]
- 00bf81b4 ["CALL", null, ["callee:00bf8268:8"]]
+ 00bf8250 ["INT_ADD", "register:40f0:8", ["const:bf8250:8", "const:4:8"]]
+ 00bf8250 ["CALL", null, ["callee:00bf8268:8"]]
~~~


<a id="compare-f7da8b8c817877373966848d0e6fc698"></a>

### [`00bf81cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf8/00bf81cc.md) → [`00bf8268`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf8268.md) FUN_00bf8268

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 13件 [`00bf4e14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf4/00bf4e14.md) [`00bf4f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf4/00bf4f80.md) [`00bf50ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf5/00bf50ec.md) [`00bf525c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf5/00bf525c.md) [`00bf53a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf5/00bf53a4.md) · 呼出先 4件 [`00bf8220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf8/00bf8220.md) [`00c37ccc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37ccc.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md)
- 新版 呼出元 13件 [`00bf4eb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf4eb0.md) [`00bf501c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf5/00bf501c.md) [`00bf5188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf5/00bf5188.md) [`00bf52f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf5/00bf52f8.md) [`00bf5440`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf5/00bf5440.md) · 呼出先 4件 [`00bf82bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf82bc.md) [`00c37d68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37d68.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bf829c",
      "incomplete_value": true,
      "site": "00bf82a4",
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
                "const:b88:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf8200",
      "incomplete_value": true,
      "site": "00bf8208",
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
                "const:ab8:8"
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
      "definition_site": "00bf82a0",
      "incomplete_value": true,
      "site": "00bf82a4",
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
                "const:b90:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf8204",
      "incomplete_value": true,
      "site": "00bf8208",
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
                "const:ac0:8"
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
      "00bf829c",
      "READ",
      [
        "storage",
        "00c9bab8",
        null,
        "pointer"
      ]
    ],
    [
      "00bf829c",
      "PARAM",
      [
        "storage",
        "00c96798",
        "std::invalid_argument::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00bf82a0",
      "READ",
      [
        "storage",
        "00c9bac0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bf829c",
      "READ",
      [
        "storage",
        "00c9bb88",
        null,
        "pointer"
      ]
    ],
    [
      "00bf829c",
      "PARAM",
      [
        "storage",
        "00c96868",
        "std::invalid_argument::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00bf82a0",
      "READ",
      [
        "storage",
        "00c9bb90",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf8208 ["INT_ADD", "register:40f0:8", ["const:bf8208:8", "const:4:8"]]
- 00bf8208 ["CALL", null, ["callee:00c57fe0:8"]]
+ 00bf82a4 ["INT_ADD", "register:40f0:8", ["const:bf82a4:8", "const:4:8"]]
+ 00bf82a4 ["CALL", null, ["callee:00c57fe0:8"]]
- 00bf81e4 ["INT_ADD", "register:40f0:8", ["const:bf81e4:8", "const:4:8"]]
- 00bf81e4 ["CALL", null, ["callee:00c57fc0:8"]]
+ 00bf8280 ["INT_ADD", "register:40f0:8", ["const:bf8280:8", "const:4:8"]]
+ 00bf8280 ["CALL", null, ["callee:00c57fc0:8"]]
- 00bf81f0 ["INT_ADD", "register:40f0:8", ["const:bf81f0:8", "const:4:8"]]
- 00bf81f0 ["CALL", null, ["callee:00bf82bc:8"]]
+ 00bf828c ["INT_ADD", "register:40f0:8", ["const:bf828c:8", "const:4:8"]]
+ 00bf828c ["CALL", null, ["callee:00bf82bc:8"]]
~~~


<a id="compare-b18e062374317525d47df021d9f56686"></a>

### [`00bf8610`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf8/00bf8610.md) → [`00bf86ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf86ac.md) FUN_00bf86ac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`00bf8744`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf8/00bf8744.md) [`00bf880c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf8/00bf880c.md) [`00bfae78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfae78.md) · 呼出先 8件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md) [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md) [`00c580c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580c0.md)
- 新版 呼出元 3件 [`00bf87e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf87e0.md) [`00bf88a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf88a8.md) [`00bfaf14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfaf14.md) · 呼出先 8件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.26% / 新版 97.26%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bf871c",
      "incomplete_value": false,
      "site": "00bf8730",
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
            "const:e9b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf8680",
      "incomplete_value": false,
      "site": "00bf8694",
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
            "const:e5b:8"
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
      "00bf8710",
      "READ",
      [
        "storage",
        "002a63ea",
        null,
        "undefined1"
      ]
    ],
    [
      "00bf871c",
      "PARAM",
      [
        "storage",
        "002b7e5b",
        null,
        "string"
      ]
    ],
    [
      "00bf8734",
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
      "00bf8710",
      "READ",
      [
        "storage",
        "002a638e",
        null,
        "undefined1"
      ]
    ],
    [
      "00bf871c",
      "PARAM",
      [
        "storage",
        "002b7e9b",
        null,
        "string"
      ]
    ],
    [
      "00bf8734",
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
- 00bf8694 ["INT_ADD", "register:40f0:8", ["const:bf8694:8", "const:4:8"]]
- 00bf8694 ["CALL", null, ["callee:00c5e1d0:8"]]
+ 00bf8730 ["INT_ADD", "register:40f0:8", ["const:bf8730:8", "const:4:8"]]
+ 00bf8730 ["CALL", null, ["callee:00c5e1d0:8"]]
- 00bf8730 ["INT_ADD", "register:40f0:8", ["const:bf8730:8", "const:4:8"]]
- 00bf8730 ["CALL", null, ["callee:00c5b210:8"]]
+ 00bf87cc ["INT_ADD", "register:40f0:8", ["const:bf87cc:8", "const:4:8"]]
+ 00bf87cc ["CALL", null, ["callee:00c5b210:8"]]
- 00bf8634 ["INT_ADD", "register:40f0:8", ["const:bf8634:8", "const:4:8"]]
- 00bf8634 ["CALL", null, ["callee:00c58190:8"]]
+ 00bf86d0 ["INT_ADD", "register:40f0:8", ["const:bf86d0:8", "const:4:8"]]
+ 00bf86d0 ["CALL", null, ["callee:00c58190:8"]]
~~~


<a id="compare-5fd404eab14b0d81d2a5ab9f16204129"></a>

### [`00bf87ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf8/00bf87ac.md) → [`00bf8848`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf8848.md) _ZNSt6__ndk116generic_categoryEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bf887c",
      "incomplete_value": false,
      "site": "00bf8880",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1127000:8"
          ],
          [
            "leaf",
            "const:460:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf87e0",
      "incomplete_value": false,
      "site": "00bf87e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1127000:8"
          ],
          [
            "leaf",
            "const:360:8"
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
      "definition_site": "00bf888c",
      "incomplete_value": false,
      "site": "00bf8890",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1127000:8"
          ],
          [
            "leaf",
            "const:460:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf87f0",
      "incomplete_value": false,
      "site": "00bf87f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1127000:8"
          ],
          [
            "leaf",
            "const:360:8"
          ]
        ]
      ]
    },
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00bf8868",
      "incomplete_value": false,
      "site": "00bf8874",
      "value": [
        "leaf",
        "const:ca48b8:8"
      ]
    },
    "old": {
      "definition_site": "00bf87cc",
      "incomplete_value": false,
      "site": "00bf87d8",
      "value": [
        "leaf",
        "const:ca47e8:8"
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
      "00bf885c",
      "READ",
      [
        "storage",
        "01127360",
        null,
        "undefined1"
      ]
    ],
    [
      "00bf8868",
      "DATA",
      [
        "storage",
        "00ca47e8",
        null,
        "pointer"
      ]
    ],
    [
      "00bf887c",
      "PARAM",
      [
        "storage",
        "01127360",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bf885c",
      "READ",
      [
        "storage",
        "01127460",
        null,
        "undefined1"
      ]
    ],
    [
      "00bf8868",
      "DATA",
      [
        "storage",
        "00ca48b8",
        null,
        "pointer"
      ]
    ],
    [
      "00bf887c",
      "PARAM",
      [
        "storage",
        "01127460",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf87e4 ["INT_ADD", "register:40f0:8", ["const:bf87e4:8", "const:4:8"]]
- 00bf87e4 ["CALL", null, ["callee:00c57f20:8"]]
+ 00bf8880 ["INT_ADD", "register:40f0:8", ["const:bf8880:8", "const:4:8"]]
+ 00bf8880 ["CALL", null, ["callee:00c57f20:8"]]
- 00bf87f4 ["INT_ADD", "register:40f0:8", ["const:bf87f4:8", "const:4:8"]]
- 00bf87f4 ["CALL", null, ["callee:00c57f40:8"]]
+ 00bf8890 ["INT_ADD", "register:40f0:8", ["const:bf8890:8", "const:4:8"]]
+ 00bf8890 ["CALL", null, ["callee:00c57f40:8"]]
- 00bf87bc ["COPY", "tmp:0:8", ["const:360:8"]]
- 00bf87bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bf87bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bf87bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bf8858 ["COPY", "tmp:0:8", ["const:460:8"]]
+ 00bf8858 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bf8858 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bf8858 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-50fed357b5a228a9c59898b725df16e5"></a>

### [`00bf8894`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf8/00bf8894.md) → [`00bf8930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf8930.md) _ZNSt6__ndk115system_categoryEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bf8964",
      "incomplete_value": false,
      "site": "00bf8968",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1127000:8"
          ],
          [
            "leaf",
            "const:468:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf88c8",
      "incomplete_value": false,
      "site": "00bf88cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1127000:8"
          ],
          [
            "leaf",
            "const:368:8"
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
      "definition_site": "00bf8974",
      "incomplete_value": false,
      "site": "00bf8978",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1127000:8"
          ],
          [
            "leaf",
            "const:468:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf88d8",
      "incomplete_value": false,
      "site": "00bf88dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1127000:8"
          ],
          [
            "leaf",
            "const:368:8"
          ]
        ]
      ]
    },
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00bf8950",
      "incomplete_value": false,
      "site": "00bf895c",
      "value": [
        "leaf",
        "const:ca48c0:8"
      ]
    },
    "old": {
      "definition_site": "00bf88b4",
      "incomplete_value": false,
      "site": "00bf88c0",
      "value": [
        "leaf",
        "const:ca47f0:8"
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
      "00bf8944",
      "READ",
      [
        "storage",
        "01127368",
        null,
        "undefined1"
      ]
    ],
    [
      "00bf8950",
      "DATA",
      [
        "storage",
        "00ca47f0",
        null,
        "pointer"
      ]
    ],
    [
      "00bf8964",
      "PARAM",
      [
        "storage",
        "01127368",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bf8944",
      "READ",
      [
        "storage",
        "01127468",
        null,
        "undefined1"
      ]
    ],
    [
      "00bf8950",
      "DATA",
      [
        "storage",
        "00ca48c0",
        null,
        "pointer"
      ]
    ],
    [
      "00bf8964",
      "PARAM",
      [
        "storage",
        "01127468",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf88cc ["INT_ADD", "register:40f0:8", ["const:bf88cc:8", "const:4:8"]]
- 00bf88cc ["CALL", null, ["callee:00c57f20:8"]]
+ 00bf8968 ["INT_ADD", "register:40f0:8", ["const:bf8968:8", "const:4:8"]]
+ 00bf8968 ["CALL", null, ["callee:00c57f20:8"]]
- 00bf88dc ["INT_ADD", "register:40f0:8", ["const:bf88dc:8", "const:4:8"]]
- 00bf88dc ["CALL", null, ["callee:00c57f40:8"]]
+ 00bf8978 ["INT_ADD", "register:40f0:8", ["const:bf8978:8", "const:4:8"]]
+ 00bf8978 ["CALL", null, ["callee:00c57f40:8"]]
- 00bf88a4 ["COPY", "tmp:0:8", ["const:368:8"]]
- 00bf88a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bf88a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bf88a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bf8940 ["COPY", "tmp:0:8", ["const:468:8"]]
+ 00bf8940 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bf8940 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bf8940 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-404242fec73f8aa0f16a82f2aa22a32b"></a>

### [`00bf8a14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf8/00bf8a14.md) → [`00bf8ab0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf8ab0.md) FUN_00bf8ab0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 4件 [`00bf891c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf8/00bf891c.md) [`00bf8ae8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf8/00bf8ae8.md) [`00bf8cfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf8/00bf8cfc.md) [`00bf8e08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf8/00bf8e08.md) · 呼出先 3件 [`007dcf1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007dc/007dcf1c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f70.md)
- 新版 呼出元 4件 [`00bf89b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf89b8.md) [`00bf8b84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf8b84.md) [`00bf8d98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf8d98.md) [`00bf8ea4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf8ea4.md) · 呼出先 3件 [`007dcf74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007dc/007dcf74.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58040`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58040.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.83% / 新版 97.83%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bf8af8",
      "incomplete_value": false,
      "site": "00bf8b00",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2bd000:8"
          ],
          [
            "leaf",
            "const:71a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf8a5c",
      "incomplete_value": false,
      "site": "00bf8a64",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2bd000:8"
          ],
          [
            "leaf",
            "const:76e:8"
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
      "00bf8af8",
      "PARAM",
      [
        "storage",
        "002bd76e",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bf8af8",
      "PARAM",
      [
        "storage",
        "002bd71a",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf8a64 ["INT_ADD", "register:40f0:8", ["const:bf8a64:8", "const:4:8"]]
- 00bf8a64 ["CALL", null, ["callee:00c58040:8"]]
+ 00bf8b00 ["INT_ADD", "register:40f0:8", ["const:bf8b00:8", "const:4:8"]]
+ 00bf8b00 ["CALL", null, ["callee:00c58040:8"]]
- 00bf8a5c ["COPY", "tmp:0:8", ["const:76e:8"]]
- 00bf8a5c ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 00bf8a5c ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 00bf8a5c ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 00bf8af8 ["COPY", "tmp:0:8", ["const:71a:8"]]
+ 00bf8af8 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 00bf8af8 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 00bf8af8 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
- 00bf8a7c ["COPY", "register:0:8", ["register:4048:8"]]
- 00bf8a7c ["INT_ADD", "register:40f0:8", ["const:bf8a7c:8", "const:4:8"]]
- 00bf8a7c ["CALLIND", null, ["register:0:8"]]
+ 00bf8b18 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00bf8b18 ["INT_ADD", "register:40f0:8", ["const:bf8b18:8", "const:4:8"]]
+ 00bf8b18 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-c9fc976fc33d150e80ca1d14335ed893"></a>

### [`00bf9088`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf9/00bf9088.md) → [`00bf9124`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf9124.md) FUN_00bf9124

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00bf9068`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf9/00bf9068.md) · 呼出先 4件 [`00bf9034`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf9/00bf9034.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md) [`00c5e1b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e1b0.md)
- 新版 呼出元 1件 [`00bf9104`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf9104.md) · 呼出先 4件 [`00bf90d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf90d0.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c5e280`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e280.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bf916c",
      "incomplete_value": true,
      "site": "00bf9174",
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
                "const:bb0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf90d0",
      "incomplete_value": true,
      "site": "00bf90d8",
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
                "const:ae0:8"
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
      "definition_site": "00bf9170",
      "incomplete_value": true,
      "site": "00bf9174",
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
                "const:ba8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf90d4",
      "incomplete_value": true,
      "site": "00bf90d8",
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
                "const:ad8:8"
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
      "00bf916c",
      "READ",
      [
        "storage",
        "00c9bae0",
        null,
        "pointer"
      ]
    ],
    [
      "00bf916c",
      "PARAM",
      [
        "storage",
        "00c92ba0",
        "std::__ndk1::system_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00bf9170",
      "READ",
      [
        "storage",
        "00c9bad8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bf916c",
      "READ",
      [
        "storage",
        "00c9bbb0",
        null,
        "pointer"
      ]
    ],
    [
      "00bf916c",
      "PARAM",
      [
        "storage",
        "00c92c70",
        "std::__ndk1::system_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00bf9170",
      "READ",
      [
        "storage",
        "00c9bba8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf90d8 ["INT_ADD", "register:40f0:8", ["const:bf90d8:8", "const:4:8"]]
- 00bf90d8 ["CALL", null, ["callee:00c57fe0:8"]]
+ 00bf9174 ["INT_ADD", "register:40f0:8", ["const:bf9174:8", "const:4:8"]]
+ 00bf9174 ["CALL", null, ["callee:00c57fe0:8"]]
- 00bf90ac ["INT_ADD", "register:40f0:8", ["const:bf90ac:8", "const:4:8"]]
- 00bf90ac ["CALL", null, ["callee:00c57fc0:8"]]
+ 00bf9148 ["INT_ADD", "register:40f0:8", ["const:bf9148:8", "const:4:8"]]
+ 00bf9148 ["CALL", null, ["callee:00c57fc0:8"]]
- 00bf90c0 ["INT_ADD", "register:40f0:8", ["const:bf90c0:8", "const:4:8"]]
- 00bf90c0 ["CALL", null, ["callee:00c5e280:8"]]
+ 00bf915c ["INT_ADD", "register:40f0:8", ["const:bf915c:8", "const:4:8"]]
+ 00bf915c ["CALL", null, ["callee:00c5e280:8"]]
~~~


<a id="compare-de185e3bdbb78b656538b943a03f0a1f"></a>

### [`00bf955c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf9/00bf955c.md) → [`00bf95f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf95f8.md) _ZNSt6__ndk115future_categoryEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c58310`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58310.md) · 呼出先 2件 [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md)
- 新版 呼出元 1件 [`00c583e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583e0.md) · 呼出先 2件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bf962c",
      "incomplete_value": false,
      "site": "00bf9630",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1127000:8"
          ],
          [
            "leaf",
            "const:470:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf9590",
      "incomplete_value": false,
      "site": "00bf9594",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1127000:8"
          ],
          [
            "leaf",
            "const:370:8"
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
      "definition_site": "00bf963c",
      "incomplete_value": false,
      "site": "00bf9640",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1127000:8"
          ],
          [
            "leaf",
            "const:470:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf95a0",
      "incomplete_value": false,
      "site": "00bf95a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1127000:8"
          ],
          [
            "leaf",
            "const:370:8"
          ]
        ]
      ]
    },
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00bf9618",
      "incomplete_value": false,
      "site": "00bf9624",
      "value": [
        "leaf",
        "const:ca48c8:8"
      ]
    },
    "old": {
      "definition_site": "00bf957c",
      "incomplete_value": false,
      "site": "00bf9588",
      "value": [
        "leaf",
        "const:ca47f8:8"
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
      "00bf960c",
      "READ",
      [
        "storage",
        "01127370",
        null,
        "undefined1"
      ]
    ],
    [
      "00bf9618",
      "DATA",
      [
        "storage",
        "00ca47f8",
        null,
        null
      ]
    ],
    [
      "00bf962c",
      "PARAM",
      [
        "storage",
        "01127370",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bf960c",
      "READ",
      [
        "storage",
        "01127470",
        null,
        "undefined1"
      ]
    ],
    [
      "00bf9618",
      "DATA",
      [
        "storage",
        "00ca48c8",
        null,
        null
      ]
    ],
    [
      "00bf962c",
      "PARAM",
      [
        "storage",
        "01127470",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf9594 ["INT_ADD", "register:40f0:8", ["const:bf9594:8", "const:4:8"]]
- 00bf9594 ["CALL", null, ["callee:00c57f20:8"]]
+ 00bf9630 ["INT_ADD", "register:40f0:8", ["const:bf9630:8", "const:4:8"]]
+ 00bf9630 ["CALL", null, ["callee:00c57f20:8"]]
- 00bf95a4 ["INT_ADD", "register:40f0:8", ["const:bf95a4:8", "const:4:8"]]
- 00bf95a4 ["CALL", null, ["callee:00c57f40:8"]]
+ 00bf9640 ["INT_ADD", "register:40f0:8", ["const:bf9640:8", "const:4:8"]]
+ 00bf9640 ["CALL", null, ["callee:00c57f40:8"]]
- 00bf956c ["COPY", "tmp:0:8", ["const:370:8"]]
- 00bf956c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bf956c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bf956c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bf9608 ["COPY", "tmp:0:8", ["const:470:8"]]
+ 00bf9608 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bf9608 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bf9608 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8bddcb0b2f8db2f602d36a3608f0ab25"></a>

### [`00bf9a10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf9/00bf9a10.md) → [`00bf9aac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf9aac.md) _ZNSt6__ndk117__assoc_sub_state10__sub_waitERNS_11unique_lockINS_5mutexEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c584a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c584a0.md) · 呼出先 3件 [`00c580f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580f0.md) [`00c58120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58120.md) [`00c58480`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58480.md)
- 新版 呼出元 1件 [`00c58570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58570.md) · 呼出先 3件 [`00c581c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581c0.md) [`00c581f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581f0.md) [`00c58550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58550.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.22% / 新版 97.22%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bf9b30",
      "incomplete_value": false,
      "site": "00bf9b38",
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
            "const:9c7:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf9a94",
      "incomplete_value": false,
      "site": "00bf9a9c",
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
            "const:a1b:8"
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
      "00bf9b30",
      "PARAM",
      [
        "storage",
        "002bea1b",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bf9b30",
      "PARAM",
      [
        "storage",
        "002be9c7",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf9a9c ["INT_ADD", "register:40f0:8", ["const:bf9a9c:8", "const:4:8"]]
- 00bf9a9c ["CALL", null, ["callee:00c581f0:8"]]
+ 00bf9b38 ["INT_ADD", "register:40f0:8", ["const:bf9b38:8", "const:4:8"]]
+ 00bf9b38 ["CALL", null, ["callee:00c581f0:8"]]
- 00bf9a3c ["INT_ADD", "register:40f0:8", ["const:bf9a3c:8", "const:4:8"]]
- 00bf9a3c ["CALL", null, ["callee:00c58550:8"]]
+ 00bf9ad8 ["INT_ADD", "register:40f0:8", ["const:bf9ad8:8", "const:4:8"]]
+ 00bf9ad8 ["CALL", null, ["callee:00c58550:8"]]
- 00bf9a6c ["INT_ADD", "register:40f0:8", ["const:bf9a6c:8", "const:4:8"]]
- 00bf9a6c ["CALL", null, ["callee:00c581c0:8"]]
+ 00bf9b08 ["INT_ADD", "register:40f0:8", ["const:bf9b08:8", "const:4:8"]]
+ 00bf9b08 ["CALL", null, ["callee:00c581c0:8"]]
~~~


<a id="compare-e3901e0c2be38ef8583f4f380be0f173"></a>

### [`00bf9ca4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf9/00bf9ca4.md) → [`00bf9d40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf9d40.md) _ZNSt6__ndk17promiseIvEC1Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

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
      "definition_site": "00bf9d70",
      "incomplete_value": true,
      "site": "00bf9d70",
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
      "definition_site": "00bf9cd4",
      "incomplete_value": true,
      "site": "00bf9cd4",
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
      "00bf9d64",
      "READ",
      [
        "storage",
        "00c9ac50",
        null,
        "pointer"
      ]
    ],
    [
      "00bf9d70",
      "DATA",
      [
        "storage",
        "00c92cd8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bf9d64",
      "READ",
      [
        "storage",
        "00c9ad20",
        null,
        "pointer"
      ]
    ],
    [
      "00bf9d70",
      "DATA",
      [
        "storage",
        "00c92da8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf9cbc ["INT_ADD", "register:40f0:8", ["const:bf9cbc:8", "const:4:8"]]
- 00bf9cbc ["CALL", null, ["callee:00c57f60:8"]]
+ 00bf9d58 ["INT_ADD", "register:40f0:8", ["const:bf9d58:8", "const:4:8"]]
+ 00bf9d58 ["CALL", null, ["callee:00c57f60:8"]]
- 00bf9cc8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:c50:8"]]
- 00bf9cc8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bf9d64 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:d20:8"]]
+ 00bf9d64 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-b0565ac3c2b0e481776b3f9d9d6f4e26"></a>

### [`00bf9cf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf9/00bf9cf8.md) → [`00bf9d94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf9d94.md) _ZNSt6__ndk17promiseIvED1Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 14件 [`0045a6c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0045a/0045a6c8.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 14件 [`0045a708`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0045a/0045a708.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.11% / 新版 90.11%

優先判定に残った影響 `call_argument_candidate` 4件, `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf9e00",
      "incomplete_value": false,
      "site": "00bf9e00",
      "value": [
        "leaf",
        "const:ca48c8:8"
      ]
    },
    "old": {
      "definition_site": "00bf9d64",
      "incomplete_value": false,
      "site": "00bf9d64",
      "value": [
        "leaf",
        "const:ca47f8:8"
      ]
    },
    "ordinal": 8,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bf9e3c",
      "incomplete_value": true,
      "site": "00bf9e44",
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
      "definition_site": "00bf9da0",
      "incomplete_value": true,
      "site": "00bf9da8",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bf9e58",
      "incomplete_value": true,
      "site": "00bf9e60",
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
      "definition_site": "00bf9dbc",
      "incomplete_value": true,
      "site": "00bf9dc4",
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
      "00bf9dec",
      "READ",
      [
        "storage",
        "01127370",
        null,
        "undefined1"
      ]
    ],
    [
      "00bf9e00",
      "DATA",
      [
        "storage",
        "00ca47f8",
        null,
        null
      ]
    ],
    [
      "00bf9e34",
      "READ",
      [
        "storage",
        "00c9ac60",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bf9dec",
      "READ",
      [
        "storage",
        "01127470",
        null,
        "undefined1"
      ]
    ],
    [
      "00bf9e00",
      "DATA",
      [
        "storage",
        "00ca48c8",
        null,
        null
      ]
    ],
    [
      "00bf9e34",
      "READ",
      [
        "storage",
        "00c9ad30",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf9dc4 ["INT_ADD", "register:40f0:8", ["const:bf9dc4:8", "const:4:8"]]
- 00bf9dc4 ["CALL", null, ["callee:00c58400:8"]]
+ 00bf9e60 ["INT_ADD", "register:40f0:8", ["const:bf9e60:8", "const:4:8"]]
+ 00bf9e60 ["CALL", null, ["callee:00c58400:8"]]
- 00bf9e4c ["INT_ADD", "register:40f0:8", ["const:bf9e4c:8", "const:4:8"]]
- 00bf9e4c ["CALL", null, ["callee:00c57f20:8"]]
+ 00bf9ee8 ["INT_ADD", "register:40f0:8", ["const:bf9ee8:8", "const:4:8"]]
+ 00bf9ee8 ["CALL", null, ["callee:00c57f20:8"]]
- 00bf9e5c ["INT_ADD", "register:40f0:8", ["const:bf9e5c:8", "const:4:8"]]
- 00bf9e5c ["CALL", null, ["callee:00c57f40:8"]]
+ 00bf9ef8 ["INT_ADD", "register:40f0:8", ["const:bf9ef8:8", "const:4:8"]]
+ 00bf9ef8 ["CALL", null, ["callee:00c57f40:8"]]
~~~


<a id="compare-6c0fb391b0df0ccf3b26060a3a7906c3"></a>

### [`00bfa088`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa088.md) → [`00bfa124`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa124.md) FUN_00bfa124

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c57e60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e60.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c580d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580d0.md) [`00c582f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582f0.md) [`00c58300`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58300.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c57f30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f30.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c581a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581a0.md) [`00c583c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583c0.md) [`00c583d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583d0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.96% / 新版 86.96%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bfa14c",
      "incomplete_value": true,
      "site": "00bfa14c",
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
      "definition_site": "00bfa0b0",
      "incomplete_value": true,
      "site": "00bfa0b0",
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
      "00bfa140",
      "READ",
      [
        "storage",
        "00c9ac50",
        null,
        "pointer"
      ]
    ],
    [
      "00bfa14c",
      "DATA",
      [
        "storage",
        "00c92cd8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bfa140",
      "READ",
      [
        "storage",
        "00c9ad20",
        null,
        "pointer"
      ]
    ],
    [
      "00bfa14c",
      "DATA",
      [
        "storage",
        "00c92da8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfa0a4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:c50:8"]]
- 00bfa0a4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bfa140 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:d20:8"]]
+ 00bfa140 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bfa0b4 ["INT_ADD", "register:40f0:8", ["const:bfa0b4:8", "const:4:8"]]
- 00bfa0b4 ["CALL", null, ["callee:00c581a0:8"]]
+ 00bfa150 ["INT_ADD", "register:40f0:8", ["const:bfa150:8", "const:4:8"]]
+ 00bfa150 ["CALL", null, ["callee:00c581a0:8"]]
- 00bfa0bc ["INT_ADD", "register:40f0:8", ["const:bfa0bc:8", "const:4:8"]]
- 00bfa0bc ["CALL", null, ["callee:00c57f30:8"]]
+ 00bfa158 ["INT_ADD", "register:40f0:8", ["const:bfa158:8", "const:4:8"]]
+ 00bfa158 ["CALL", null, ["callee:00c57f30:8"]]
~~~


<a id="compare-38d2c9aed29a2645225a4d4c44489264"></a>

### [`00bfa130`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa130.md) → [`00bfa1cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa1cc.md) _ZNSt6__ndk15mutex4lockEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c580e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580e0.md) · 呼出先 2件 [`00c58120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58120.md) [`00c5b6a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b6a0.md)
- 新版 呼出元 1件 [`00c581b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581b0.md) · 呼出先 2件 [`00c581f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581f0.md) [`00c5b770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b770.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfa1f0",
      "incomplete_value": false,
      "site": "00bfa1f4",
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
            "const:742:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfa154",
      "incomplete_value": false,
      "site": "00bfa158",
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
            "const:79e:8"
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
      "00bfa1f0",
      "PARAM",
      [
        "storage",
        "002b179e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bfa1f0",
      "PARAM",
      [
        "storage",
        "002b1742",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfa158 ["INT_ADD", "register:40f0:8", ["const:bfa158:8", "const:4:8"]]
- 00bfa158 ["CALL", null, ["callee:00c581f0:8"]]
+ 00bfa1f4 ["INT_ADD", "register:40f0:8", ["const:bfa1f4:8", "const:4:8"]]
+ 00bfa1f4 ["CALL", null, ["callee:00c581f0:8"]]
- 00bfa13c ["INT_ADD", "register:40f0:8", ["const:bfa13c:8", "const:4:8"]]
- 00bfa13c ["CALL", null, ["callee:00c5b770:8"]]
+ 00bfa1d8 ["INT_ADD", "register:40f0:8", ["const:bfa1d8:8", "const:4:8"]]
+ 00bfa1d8 ["CALL", null, ["callee:00c5b770:8"]]
- 00bfa154 ["COPY", "tmp:0:8", ["const:79e:8"]]
- 00bfa154 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 00bfa154 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 00bfa154 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 00bfa1f0 ["COPY", "tmp:0:8", ["const:742:8"]]
+ 00bfa1f0 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 00bfa1f0 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 00bfa1f0 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-e4654e9475e3f804da8570f33719dad9"></a>

### [`00bfa1a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa1a4.md) → [`00bfa240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa240.md) _ZNSt6__ndk115recursive_mutexC1Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5a0c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0c0.md) · 呼出先 6件 [`00c58120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58120.md) [`00c5b690`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b690.md) [`00c5be80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5be80.md) [`00c5be90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5be90.md) [`00c5bea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bea0.md)
- 新版 呼出元 1件 [`00c5a190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a190.md) · 呼出先 6件 [`00c581f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581f0.md) [`00c5b760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b760.md) [`00c5bf50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf50.md) [`00c5bf60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf60.md) [`00c5bf70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf70.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.56% / 新版 97.56%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfa2dc",
      "incomplete_value": false,
      "site": "00bfa2e0",
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
            "const:867:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfa240",
      "incomplete_value": false,
      "site": "00bfa244",
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
            "const:8c3:8"
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
      "00bfa2dc",
      "PARAM",
      [
        "storage",
        "002a88c3",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bfa2dc",
      "PARAM",
      [
        "storage",
        "002a8867",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfa244 ["INT_ADD", "register:40f0:8", ["const:bfa244:8", "const:4:8"]]
- 00bfa244 ["CALL", null, ["callee:00c581f0:8"]]
+ 00bfa2e0 ["INT_ADD", "register:40f0:8", ["const:bfa2e0:8", "const:4:8"]]
+ 00bfa2e0 ["CALL", null, ["callee:00c581f0:8"]]
- 00bfa1c0 ["INT_ADD", "register:40f0:8", ["const:bfa1c0:8", "const:4:8"]]
- 00bfa1c0 ["CALL", null, ["callee:00c5bf70:8"]]
+ 00bfa25c ["INT_ADD", "register:40f0:8", ["const:bfa25c:8", "const:4:8"]]
+ 00bfa25c ["CALL", null, ["callee:00c5bf70:8"]]
- 00bfa1d0 ["INT_ADD", "register:40f0:8", ["const:bfa1d0:8", "const:4:8"]]
- 00bfa1d0 ["CALL", null, ["callee:00c5bf80:8"]]
+ 00bfa26c ["INT_ADD", "register:40f0:8", ["const:bfa26c:8", "const:4:8"]]
+ 00bfa26c ["CALL", null, ["callee:00c5bf80:8"]]
~~~


<a id="compare-b77679999305c73ccb1b023c5cf9a512"></a>

### [`00bfa268`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa268.md) → [`00bfa304`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa304.md) _ZNSt6__ndk115recursive_mutex4lockEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5a0e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0e0.md) · 呼出先 2件 [`00c58120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58120.md) [`00c5b6a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b6a0.md)
- 新版 呼出元 1件 [`00c5a1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a1b0.md) · 呼出先 2件 [`00c581f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581f0.md) [`00c5b770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b770.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfa328",
      "incomplete_value": false,
      "site": "00bfa32c",
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
            "const:4be:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfa28c",
      "incomplete_value": false,
      "site": "00bfa290",
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
            "const:51a:8"
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
      "00bfa328",
      "PARAM",
      [
        "storage",
        "002a751a",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bfa328",
      "PARAM",
      [
        "storage",
        "002a74be",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfa290 ["INT_ADD", "register:40f0:8", ["const:bfa290:8", "const:4:8"]]
- 00bfa290 ["CALL", null, ["callee:00c581f0:8"]]
+ 00bfa32c ["INT_ADD", "register:40f0:8", ["const:bfa32c:8", "const:4:8"]]
+ 00bfa32c ["CALL", null, ["callee:00c581f0:8"]]
- 00bfa274 ["INT_ADD", "register:40f0:8", ["const:bfa274:8", "const:4:8"]]
- 00bfa274 ["CALL", null, ["callee:00c5b770:8"]]
+ 00bfa310 ["INT_ADD", "register:40f0:8", ["const:bfa310:8", "const:4:8"]]
+ 00bfa310 ["CALL", null, ["callee:00c5b770:8"]]
- 00bfa28c ["COPY", "tmp:0:8", ["const:51a:8"]]
- 00bfa28c ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 00bfa28c ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 00bfa28c ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 00bfa328 ["COPY", "tmp:0:8", ["const:4be:8"]]
+ 00bfa328 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 00bfa328 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 00bfa328 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-df33c4035e5e26420246424c7fb4bdec"></a>

### [`00bfa2f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa2f8.md) → [`00bfa394`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa394.md) _ZNSt6__ndk111timed_mutexD1Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c57e60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e60.md) [`00c580d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580d0.md) [`00c58120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58120.md) [`00c5b6a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b6a0.md) [`00c5b6b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b6b0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c57f30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f30.md) [`00c581a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581a0.md) [`00c581f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581f0.md) [`00c5b770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b770.md) [`00c5b780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b780.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 94.74% / 新版 94.74%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfa3d8",
      "incomplete_value": false,
      "site": "00bfa3dc",
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
            "const:742:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfa33c",
      "incomplete_value": false,
      "site": "00bfa340",
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
            "const:79e:8"
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
      "00bfa3d8",
      "PARAM",
      [
        "storage",
        "002b179e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bfa3d8",
      "PARAM",
      [
        "storage",
        "002b1742",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfa340 ["INT_ADD", "register:40f0:8", ["const:bfa340:8", "const:4:8"]]
- 00bfa340 ["CALL", null, ["callee:00c581f0:8"]]
+ 00bfa3dc ["INT_ADD", "register:40f0:8", ["const:bfa3dc:8", "const:4:8"]]
+ 00bfa3dc ["CALL", null, ["callee:00c581f0:8"]]
- 00bfa30c ["INT_ADD", "register:40f0:8", ["const:bfa30c:8", "const:4:8"]]
- 00bfa30c ["CALL", null, ["callee:00c5b770:8"]]
+ 00bfa3a8 ["INT_ADD", "register:40f0:8", ["const:bfa3a8:8", "const:4:8"]]
+ 00bfa3a8 ["CALL", null, ["callee:00c5b770:8"]]
- 00bfa318 ["INT_ADD", "register:40f0:8", ["const:bfa318:8", "const:4:8"]]
- 00bfa318 ["CALL", null, ["callee:00c5b780:8"]]
+ 00bfa3b4 ["INT_ADD", "register:40f0:8", ["const:bfa3b4:8", "const:4:8"]]
+ 00bfa3b4 ["CALL", null, ["callee:00c5b780:8"]]
~~~


<a id="compare-2329a6af9e442eb0863c954c7595717c"></a>

### [`00bfa34c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa34c.md) → [`00bfa3e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa3e8.md) _ZNSt6__ndk111timed_mutex4lockEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c58120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58120.md) [`00c58480`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58480.md) [`00c5b6a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b6a0.md) [`00c5b6b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b6b0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c581f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581f0.md) [`00c58550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58550.md) [`00c5b770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b770.md) [`00c5b780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b780.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.14% / 新版 97.14%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfa46c",
      "incomplete_value": false,
      "site": "00bfa470",
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
            "const:742:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfa3d0",
      "incomplete_value": false,
      "site": "00bfa3d4",
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
            "const:79e:8"
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
      "00bfa46c",
      "PARAM",
      [
        "storage",
        "002b179e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bfa46c",
      "PARAM",
      [
        "storage",
        "002b1742",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfa3d4 ["INT_ADD", "register:40f0:8", ["const:bfa3d4:8", "const:4:8"]]
- 00bfa3d4 ["CALL", null, ["callee:00c581f0:8"]]
+ 00bfa470 ["INT_ADD", "register:40f0:8", ["const:bfa470:8", "const:4:8"]]
+ 00bfa470 ["CALL", null, ["callee:00c581f0:8"]]
- 00bfa370 ["INT_ADD", "register:40f0:8", ["const:bfa370:8", "const:4:8"]]
- 00bfa370 ["CALL", null, ["callee:00c5b770:8"]]
+ 00bfa40c ["INT_ADD", "register:40f0:8", ["const:bfa40c:8", "const:4:8"]]
+ 00bfa40c ["CALL", null, ["callee:00c5b770:8"]]
- 00bfa388 ["INT_ADD", "register:40f0:8", ["const:bfa388:8", "const:4:8"]]
- 00bfa388 ["CALL", null, ["callee:00c58550:8"]]
+ 00bfa424 ["INT_ADD", "register:40f0:8", ["const:bfa424:8", "const:4:8"]]
+ 00bfa424 ["CALL", null, ["callee:00c58550:8"]]
~~~


<a id="compare-862b1a686a60ff2c7db7a98bad5e5e21"></a>

### [`00bfa43c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa43c.md) → [`00bfa4d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa4d8.md) _ZNSt6__ndk111timed_mutex6unlockEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c58120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58120.md) [`00c59110`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59110.md) [`00c5b6a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b6a0.md) [`00c5b6b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b6b0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c581f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581f0.md) [`00c591e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c591e0.md) [`00c5b770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b770.md) [`00c5b780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b780.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 94.74% / 新版 94.74%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfa51c",
      "incomplete_value": false,
      "site": "00bfa520",
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
            "const:742:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfa480",
      "incomplete_value": false,
      "site": "00bfa484",
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
            "const:79e:8"
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
      "00bfa51c",
      "PARAM",
      [
        "storage",
        "002b179e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bfa51c",
      "PARAM",
      [
        "storage",
        "002b1742",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfa484 ["INT_ADD", "register:40f0:8", ["const:bfa484:8", "const:4:8"]]
- 00bfa484 ["CALL", null, ["callee:00c581f0:8"]]
+ 00bfa520 ["INT_ADD", "register:40f0:8", ["const:bfa520:8", "const:4:8"]]
+ 00bfa520 ["CALL", null, ["callee:00c581f0:8"]]
- 00bfa450 ["INT_ADD", "register:40f0:8", ["const:bfa450:8", "const:4:8"]]
- 00bfa450 ["CALL", null, ["callee:00c5b770:8"]]
+ 00bfa4ec ["INT_ADD", "register:40f0:8", ["const:bfa4ec:8", "const:4:8"]]
+ 00bfa4ec ["CALL", null, ["callee:00c5b770:8"]]
- 00bfa460 ["INT_ADD", "register:40f0:8", ["const:bfa460:8", "const:4:8"]]
- 00bfa460 ["CALL", null, ["callee:00c591e0:8"]]
+ 00bfa4fc ["INT_ADD", "register:40f0:8", ["const:bfa4fc:8", "const:4:8"]]
+ 00bfa4fc ["CALL", null, ["callee:00c591e0:8"]]
~~~


<a id="compare-161f0749c7a110a4d2dd1b06742a0cc0"></a>

### [`00bfa4ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa4ac.md) → [`00bfa548`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa548.md) _ZNSt6__ndk121recursive_timed_mutexD1Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c57e60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e60.md) [`00c580d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580d0.md) [`00c58120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58120.md) [`00c5b6a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b6a0.md) [`00c5b6b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b6b0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c57f30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f30.md) [`00c581a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581a0.md) [`00c581f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581f0.md) [`00c5b770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b770.md) [`00c5b780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b780.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 94.74% / 新版 94.74%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfa58c",
      "incomplete_value": false,
      "site": "00bfa590",
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
            "const:742:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfa4f0",
      "incomplete_value": false,
      "site": "00bfa4f4",
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
            "const:79e:8"
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
      "00bfa58c",
      "PARAM",
      [
        "storage",
        "002b179e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bfa58c",
      "PARAM",
      [
        "storage",
        "002b1742",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfa4f4 ["INT_ADD", "register:40f0:8", ["const:bfa4f4:8", "const:4:8"]]
- 00bfa4f4 ["CALL", null, ["callee:00c581f0:8"]]
+ 00bfa590 ["INT_ADD", "register:40f0:8", ["const:bfa590:8", "const:4:8"]]
+ 00bfa590 ["CALL", null, ["callee:00c581f0:8"]]
- 00bfa4c0 ["INT_ADD", "register:40f0:8", ["const:bfa4c0:8", "const:4:8"]]
- 00bfa4c0 ["CALL", null, ["callee:00c5b770:8"]]
+ 00bfa55c ["INT_ADD", "register:40f0:8", ["const:bfa55c:8", "const:4:8"]]
+ 00bfa55c ["CALL", null, ["callee:00c5b770:8"]]
- 00bfa4cc ["INT_ADD", "register:40f0:8", ["const:bfa4cc:8", "const:4:8"]]
- 00bfa4cc ["CALL", null, ["callee:00c5b780:8"]]
+ 00bfa568 ["INT_ADD", "register:40f0:8", ["const:bfa568:8", "const:4:8"]]
+ 00bfa568 ["CALL", null, ["callee:00c5b780:8"]]
~~~


<a id="compare-5bee49ef10d3a31df30458f09343a1cd"></a>

### [`00bfa500`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa500.md) → [`00bfa59c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa59c.md) _ZNSt6__ndk121recursive_timed_mutex4lockEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c58120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58120.md) [`00c58480`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58480.md) [`00c58620`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58620.md) [`00c5b6a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b6a0.md) [`00c5b6b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b6b0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c581f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581f0.md) [`00c58550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58550.md) [`00c586f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c586f0.md) [`00c5b770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b770.md) [`00c5b780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b780.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 95.92% / 新版 95.92%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfa648",
      "incomplete_value": false,
      "site": "00bfa64c",
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
            "const:742:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfa5ac",
      "incomplete_value": false,
      "site": "00bfa5b0",
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
            "const:79e:8"
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
      "definition_site": "00bfa654",
      "incomplete_value": false,
      "site": "00bfa65c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a3000:8"
          ],
          [
            "leaf",
            "const:d7a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfa5b8",
      "incomplete_value": false,
      "site": "00bfa5c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a3000:8"
          ],
          [
            "leaf",
            "const:dc7:8"
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
      "00bfa648",
      "PARAM",
      [
        "storage",
        "002b179e",
        null,
        "string"
      ]
    ],
    [
      "00bfa654",
      "PARAM",
      [
        "storage",
        "002a3dc7",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bfa648",
      "PARAM",
      [
        "storage",
        "002b1742",
        null,
        "string"
      ]
    ],
    [
      "00bfa654",
      "PARAM",
      [
        "storage",
        "002a3d7a",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfa5b0 ["INT_ADD", "register:40f0:8", ["const:bfa5b0:8", "const:4:8"]]
- 00bfa5b0 ["CALL", null, ["callee:00c581f0:8"]]
+ 00bfa64c ["INT_ADD", "register:40f0:8", ["const:bfa64c:8", "const:4:8"]]
+ 00bfa64c ["CALL", null, ["callee:00c581f0:8"]]
- 00bfa5c0 ["INT_ADD", "register:40f0:8", ["const:bfa5c0:8", "const:4:8"]]
- 00bfa5c0 ["CALL", null, ["callee:00c581f0:8"]]
+ 00bfa65c ["INT_ADD", "register:40f0:8", ["const:bfa65c:8", "const:4:8"]]
+ 00bfa65c ["CALL", null, ["callee:00c581f0:8"]]
- 00bfa518 ["INT_ADD", "register:40f0:8", ["const:bfa518:8", "const:4:8"]]
- 00bfa518 ["CALL", null, ["callee:00c586f0:8"]]
+ 00bfa5b4 ["INT_ADD", "register:40f0:8", ["const:bfa5b4:8", "const:4:8"]]
+ 00bfa5b4 ["CALL", null, ["callee:00c586f0:8"]]
~~~


<a id="compare-7200c086b805967c3654b388666539d5"></a>

### [`00bfa668`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa668.md) → [`00bfa704`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa704.md) _ZNSt6__ndk121recursive_timed_mutex6unlockEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c58120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58120.md) [`00c59110`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59110.md) [`00c5b6a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b6a0.md) [`00c5b6b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b6b0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c581f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581f0.md) [`00c591e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c591e0.md) [`00c5b770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b770.md) [`00c5b780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b780.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.43% / 新版 96.43%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfa76c",
      "incomplete_value": false,
      "site": "00bfa770",
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
            "const:742:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfa6d0",
      "incomplete_value": false,
      "site": "00bfa6d4",
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
            "const:79e:8"
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
      "00bfa76c",
      "PARAM",
      [
        "storage",
        "002b179e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bfa76c",
      "PARAM",
      [
        "storage",
        "002b1742",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfa6d4 ["INT_ADD", "register:40f0:8", ["const:bfa6d4:8", "const:4:8"]]
- 00bfa6d4 ["CALL", null, ["callee:00c581f0:8"]]
+ 00bfa770 ["INT_ADD", "register:40f0:8", ["const:bfa770:8", "const:4:8"]]
+ 00bfa770 ["CALL", null, ["callee:00c581f0:8"]]
- 00bfa67c ["INT_ADD", "register:40f0:8", ["const:bfa67c:8", "const:4:8"]]
- 00bfa67c ["CALL", null, ["callee:00c5b770:8"]]
+ 00bfa718 ["INT_ADD", "register:40f0:8", ["const:bfa718:8", "const:4:8"]]
+ 00bfa718 ["CALL", null, ["callee:00c5b770:8"]]
- 00bfa698 ["INT_ADD", "register:40f0:8", ["const:bfa698:8", "const:4:8"]]
- 00bfa698 ["CALL", null, ["callee:00c5b780:8"]]
+ 00bfa734 ["INT_ADD", "register:40f0:8", ["const:bfa734:8", "const:4:8"]]
+ 00bfa734 ["CALL", null, ["callee:00c5b780:8"]]
~~~


<a id="compare-21ff21754cac11e633066a7d3b6d9cb9"></a>

### [`00bfa704`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa704.md) → [`00bfa7a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa7a0.md) _ZNSt6__ndk16thread4joinEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c58170`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58170.md) · 呼出先 2件 [`00c58120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58120.md) [`00c5d640`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d640.md)
- 新版 呼出元 1件 [`00c58240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58240.md) · 呼出先 2件 [`00c581f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581f0.md) [`00c5d710`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d710.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 94.74% / 新版 94.74%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfa7e4",
      "incomplete_value": false,
      "site": "00bfa7e8",
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
            "const:28b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfa748",
      "incomplete_value": false,
      "site": "00bfa74c",
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
            "const:2e7:8"
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
      "00bfa7e4",
      "PARAM",
      [
        "storage",
        "002a62e7",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bfa7e4",
      "PARAM",
      [
        "storage",
        "002a628b",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfa74c ["INT_ADD", "register:40f0:8", ["const:bfa74c:8", "const:4:8"]]
- 00bfa74c ["CALL", null, ["callee:00c581f0:8"]]
+ 00bfa7e8 ["INT_ADD", "register:40f0:8", ["const:bfa7e8:8", "const:4:8"]]
+ 00bfa7e8 ["CALL", null, ["callee:00c581f0:8"]]
- 00bfa724 ["INT_ADD", "register:40f0:8", ["const:bfa724:8", "const:4:8"]]
- 00bfa724 ["CALL", null, ["callee:00c5d710:8"]]
+ 00bfa7c0 ["INT_ADD", "register:40f0:8", ["const:bfa7c0:8", "const:4:8"]]
+ 00bfa7c0 ["CALL", null, ["callee:00c5d710:8"]]
- 00bfa748 ["COPY", "tmp:0:8", ["const:2e7:8"]]
- 00bfa748 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 00bfa748 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 00bfa748 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 00bfa7e4 ["COPY", "tmp:0:8", ["const:28b:8"]]
+ 00bfa7e4 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 00bfa7e4 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 00bfa7e4 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-f84d7a1b98e5580447e10ce1f3cc744d"></a>

### [`00bfa750`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa750.md) → [`00bfa7ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa7ec.md) _ZNSt6__ndk16thread6detachEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c58510`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58510.md) · 呼出先 2件 [`00c58120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58120.md) [`00c5e280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e280.md)
- 新版 呼出元 1件 [`00c585e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c585e0.md) · 呼出先 2件 [`00c581f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581f0.md) [`00c5e350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e350.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfa82c",
      "incomplete_value": false,
      "site": "00bfa830",
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
            "const:4ef:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfa790",
      "incomplete_value": false,
      "site": "00bfa794",
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
            "const:54b:8"
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
      "00bfa82c",
      "PARAM",
      [
        "storage",
        "002ae54b",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bfa82c",
      "PARAM",
      [
        "storage",
        "002ae4ef",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfa794 ["INT_ADD", "register:40f0:8", ["const:bfa794:8", "const:4:8"]]
- 00bfa794 ["CALL", null, ["callee:00c581f0:8"]]
+ 00bfa830 ["INT_ADD", "register:40f0:8", ["const:bfa830:8", "const:4:8"]]
+ 00bfa830 ["CALL", null, ["callee:00c581f0:8"]]
- 00bfa76c ["INT_ADD", "register:40f0:8", ["const:bfa76c:8", "const:4:8"]]
- 00bfa76c ["CALL", null, ["callee:00c5e350:8"]]
+ 00bfa808 ["INT_ADD", "register:40f0:8", ["const:bfa808:8", "const:4:8"]]
+ 00bfa808 ["CALL", null, ["callee:00c5e350:8"]]
- 00bfa790 ["COPY", "tmp:0:8", ["const:54b:8"]]
- 00bfa790 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 00bfa790 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 00bfa790 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 00bfa82c ["COPY", "tmp:0:8", ["const:4ef:8"]]
+ 00bfa82c ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 00bfa82c ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 00bfa82c ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-fe91dfea844a5ad86b58e45812d189a2"></a>

### [`00bfa844`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa844.md) → [`00bfa8e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa8e0.md) _ZNSt6__ndk119__thread_local_dataEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c58130`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58130.md) · 呼出先 3件 [`00bfa8c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa8c8.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md)
- 新版 呼出元 1件 [`00c58200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58200.md) · 呼出先 3件 [`00bfa964`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa964.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, return_value_candidate, store_destination

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `call_argument_candidate` 3件, `return_value_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bfa940",
      "incomplete_value": true,
      "site": "00bfa940",
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
            "const:480:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfa8a4",
      "incomplete_value": true,
      "site": "00bfa8a4",
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
            "const:380:8"
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
      "definition_site": "00bfa91c",
      "incomplete_value": false,
      "site": "00bfa920",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1127000:8"
          ],
          [
            "leaf",
            "const:488:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfa880",
      "incomplete_value": false,
      "site": "00bfa884",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1127000:8"
          ],
          [
            "leaf",
            "const:388:8"
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
      "definition_site": "00bfa930",
      "incomplete_value": false,
      "site": "00bfa934",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1127000:8"
          ],
          [
            "leaf",
            "const:478:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfa894",
      "incomplete_value": false,
      "site": "00bfa898",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1127000:8"
          ],
          [
            "leaf",
            "const:378:8"
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
      "00bfa8fc",
      "READ",
      [
        "storage",
        "01127388",
        null,
        "undefined1"
      ]
    ],
    [
      "00bfa904",
      "READ",
      [
        "storage",
        "01127380",
        null,
        "undefined8"
      ]
    ],
    [
      "00bfa904",
      "DATA",
      [
        "storage",
        "01127378",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bfa8fc",
      "READ",
      [
        "storage",
        "01127488",
        null,
        "undefined1"
      ]
    ],
    [
      "00bfa904",
      "READ",
      [
        "storage",
        "01127480",
        null,
        "undefined8"
      ]
    ],
    [
      "00bfa904",
      "DATA",
      [
        "storage",
        "01127478",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfa884 ["INT_ADD", "register:40f0:8", ["const:bfa884:8", "const:4:8"]]
- 00bfa884 ["CALL", null, ["callee:00c57f20:8"]]
+ 00bfa920 ["INT_ADD", "register:40f0:8", ["const:bfa920:8", "const:4:8"]]
+ 00bfa920 ["CALL", null, ["callee:00c57f20:8"]]
- 00bfa898 ["INT_ADD", "register:40f0:8", ["const:bfa898:8", "const:4:8"]]
- 00bfa898 ["CALL", null, ["callee:00bfa964:8"]]
+ 00bfa934 ["INT_ADD", "register:40f0:8", ["const:bfa934:8", "const:4:8"]]
+ 00bfa934 ["CALL", null, ["callee:00bfa964:8"]]
- 00bfa8a4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:380:8"]]
- 00bfa8a4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
+ 00bfa940 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:480:8"]]
+ 00bfa940 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
~~~


<a id="compare-63de06bce77ded33ec9ca47a929fe1ec"></a>

### [`00bfa8c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa8c8.md) → [`00bfa964`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa964.md) FUN_00bfa964

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00bfa844`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa844.md) · 呼出先 3件 [`00bfac7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfac7c.md) [`00c58120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58120.md) [`00c5a300`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a300.md)
- 新版 呼出元 1件 [`00bfa8e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa8e0.md) · 呼出先 3件 [`00bfad18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfad18.md) [`00c581f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581f0.md) [`00c5a3d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a3d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 92.31% / 新版 92.31%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfa974",
      "incomplete_value": false,
      "site": "00bfa978",
      "value": [
        "leaf",
        "const:bfad18:8"
      ]
    },
    "old": {
      "definition_site": "00bfa8d8",
      "incomplete_value": false,
      "site": "00bfa8dc",
      "value": [
        "leaf",
        "const:bfac7c:8"
      ]
    },
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfa990",
      "incomplete_value": false,
      "site": "00bfa994",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a3000:8"
          ],
          [
            "leaf",
            "const:da3:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfa8f4",
      "incomplete_value": false,
      "site": "00bfa8f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a3000:8"
          ],
          [
            "leaf",
            "const:df0:8"
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
      "00bfa974",
      "PARAM",
      [
        "storage",
        "00bfac7c",
        null,
        null
      ]
    ],
    [
      "00bfa990",
      "PARAM",
      [
        "storage",
        "002a3df0",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bfa974",
      "PARAM",
      [
        "storage",
        "00bfad18",
        null,
        null
      ]
    ],
    [
      "00bfa990",
      "PARAM",
      [
        "storage",
        "002a3da3",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfa8dc ["INT_ADD", "register:40f0:8", ["const:bfa8dc:8", "const:4:8"]]
- 00bfa8dc ["CALL", null, ["callee:00c5a3d0:8"]]
+ 00bfa978 ["INT_ADD", "register:40f0:8", ["const:bfa978:8", "const:4:8"]]
+ 00bfa978 ["CALL", null, ["callee:00c5a3d0:8"]]
- 00bfa8f8 ["INT_ADD", "register:40f0:8", ["const:bfa8f8:8", "const:4:8"]]
- 00bfa8f8 ["CALL", null, ["callee:00c581f0:8"]]
+ 00bfa994 ["INT_ADD", "register:40f0:8", ["const:bfa994:8", "const:4:8"]]
+ 00bfa994 ["CALL", null, ["callee:00c581f0:8"]]
- 00bfa8d8 ["COPY", "register:4008:8", ["const:bfac7c:8"]]
+ 00bfa974 ["COPY", "register:4008:8", ["const:bfad18:8"]]
~~~


<a id="compare-f49be379d8abb41b7657300f2aa1d31c"></a>

### [`00bfac4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfac4c.md) → [`00bface8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bface8.md) FUN_00bface8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00bfa9c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa9c8.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`00bfaa64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfaa64.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfacf8",
      "incomplete_value": false,
      "site": "00bfacfc",
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
      "definition_site": "00bfac5c",
      "incomplete_value": false,
      "site": "00bfac60",
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
      "00bfacf8",
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
      "00bfacf8",
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
- 00bfac60 ["INT_ADD", "register:40f0:8", ["const:bfac60:8", "const:4:8"]]
- 00bfac60 ["CALL", null, ["callee:0043b7b8:8"]]
+ 00bfacfc ["INT_ADD", "register:40f0:8", ["const:bfacfc:8", "const:4:8"]]
+ 00bfacfc ["CALL", null, ["callee:0043b7b8:8"]]
- 00bfac5c ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 00bfac5c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bfac5c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bfac5c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bfacf8 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 00bfacf8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bfacf8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bfacf8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-2223a055a113c661ff37e70a1c4f280b"></a>

### [`00bfac64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfac64.md) → [`00bfad00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfad00.md) FUN_00bfad00

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00bfaac4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfaac4.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`00bfab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfab60.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfad10",
      "incomplete_value": false,
      "site": "00bfad14",
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
      "definition_site": "00bfac74",
      "incomplete_value": false,
      "site": "00bfac78",
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
      "00bfad10",
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
      "00bfad10",
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
- 00bfac78 ["INT_ADD", "register:40f0:8", ["const:bfac78:8", "const:4:8"]]
- 00bfac78 ["CALL", null, ["callee:0043b7b8:8"]]
+ 00bfad14 ["INT_ADD", "register:40f0:8", ["const:bfad14:8", "const:4:8"]]
+ 00bfad14 ["CALL", null, ["callee:0043b7b8:8"]]
- 00bfac74 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 00bfac74 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bfac74 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bfac74 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bfad10 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 00bfad10 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bfad10 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bfad10 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-47a8a3b4d645834483eb3d70d4e4c034"></a>

### [`00bfacb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfacb4.md) → [`00bfad50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfad50.md) _ZNSt6__ndk113random_deviceC2ERKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c583a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c583a0.md) · 呼出先 4件 [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md) [`00c580c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580c0.md) [`00c58120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58120.md) [`00c5d610`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d610.md)
- 新版 呼出元 1件 [`00c58470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58470.md) · 呼出先 4件 [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c581f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581f0.md) [`00c5d6e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d6e0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.06% / 新版 97.06%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfadac",
      "incomplete_value": false,
      "site": "00bfadbc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b4000:8"
          ],
          [
            "leaf",
            "const:a33:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfad10",
      "incomplete_value": false,
      "site": "00bfad20",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b4000:8"
          ],
          [
            "leaf",
            "const:a02:8"
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
      "00bfadac",
      "PARAM",
      [
        "storage",
        "002b4a02",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bfadac",
      "PARAM",
      [
        "storage",
        "002b4a33",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfad20 ["INT_ADD", "register:40f0:8", ["const:bfad20:8", "const:4:8"]]
- 00bfad20 ["CALL", null, ["callee:00c58180:8"]]
+ 00bfadbc ["INT_ADD", "register:40f0:8", ["const:bfadbc:8", "const:4:8"]]
+ 00bfadbc ["CALL", null, ["callee:00c58180:8"]]
- 00bface4 ["INT_ADD", "register:40f0:8", ["const:bface4:8", "const:4:8"]]
- 00bface4 ["CALL", null, ["callee:00c5d6e0:8"]]
+ 00bfad80 ["INT_ADD", "register:40f0:8", ["const:bfad80:8", "const:4:8"]]
+ 00bfad80 ["CALL", null, ["callee:00c5d6e0:8"]]
- 00bfad04 ["INT_ADD", "register:40f0:8", ["const:bfad04:8", "const:4:8"]]
- 00bfad04 ["CALL", null, ["callee:00c58190:8"]]
+ 00bfada0 ["INT_ADD", "register:40f0:8", ["const:bfada0:8", "const:4:8"]]
+ 00bfada0 ["CALL", null, ["callee:00c58190:8"]]
~~~


<a id="compare-4a5a09642d48b5c3882293208ab3fedb"></a>

### [`00bfad7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfad7c.md) → [`00bfae18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfae18.md) _ZNSt6__ndk113random_deviceclEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c583b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c583b0.md) · 呼出先 3件 [`00c580c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580c0.md) [`00c58120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58120.md) [`00c5d650`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d650.md)
- 新版 呼出元 1件 [`00c58480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58480.md) · 呼出先 3件 [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c581f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581f0.md) [`00c5d720`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d720.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 94.59% / 新版 94.59%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfae94",
      "incomplete_value": false,
      "site": "00bfae98",
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
            "const:cee:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfadf8",
      "incomplete_value": false,
      "site": "00bfadfc",
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
            "const:d42:8"
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
      "definition_site": "00bfaea0",
      "incomplete_value": false,
      "site": "00bfaea8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ac000:8"
          ],
          [
            "leaf",
            "const:44f:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfae04",
      "incomplete_value": false,
      "site": "00bfae0c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ac000:8"
          ],
          [
            "leaf",
            "const:4ab:8"
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
      "00bfae94",
      "PARAM",
      [
        "storage",
        "002b8d42",
        null,
        "string"
      ]
    ],
    [
      "00bfaea0",
      "PARAM",
      [
        "storage",
        "002ac4ab",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bfae94",
      "PARAM",
      [
        "storage",
        "002b8cee",
        null,
        "string"
      ]
    ],
    [
      "00bfaea0",
      "PARAM",
      [
        "storage",
        "002ac44f",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfadfc ["INT_ADD", "register:40f0:8", ["const:bfadfc:8", "const:4:8"]]
- 00bfadfc ["CALL", null, ["callee:00c581f0:8"]]
+ 00bfae98 ["INT_ADD", "register:40f0:8", ["const:bfae98:8", "const:4:8"]]
+ 00bfae98 ["CALL", null, ["callee:00c581f0:8"]]
- 00bfae0c ["INT_ADD", "register:40f0:8", ["const:bfae0c:8", "const:4:8"]]
- 00bfae0c ["CALL", null, ["callee:00c581f0:8"]]
+ 00bfaea8 ["INT_ADD", "register:40f0:8", ["const:bfaea8:8", "const:4:8"]]
+ 00bfaea8 ["CALL", null, ["callee:00c581f0:8"]]
- 00bfada0 ["INT_ADD", "register:40f0:8", ["const:bfada0:8", "const:4:8"]]
- 00bfada0 ["CALL", null, ["callee:00c58190:8"]]
+ 00bfae3c ["INT_ADD", "register:40f0:8", ["const:bfae3c:8", "const:4:8"]]
+ 00bfae3c ["CALL", null, ["callee:00c58190:8"]]
~~~


<a id="compare-ae4092c106b4cfa3d7a033075c12e1eb"></a>

### [`00bfaeec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfaeec.md) → [`00bfaf88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfaf88.md) _ZNSt6__ndk117iostream_categoryEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfafbc",
      "incomplete_value": false,
      "site": "00bfafc0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1127000:8"
          ],
          [
            "leaf",
            "const:490:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfaf20",
      "incomplete_value": false,
      "site": "00bfaf24",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1127000:8"
          ],
          [
            "leaf",
            "const:390:8"
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
      "definition_site": "00bfafcc",
      "incomplete_value": false,
      "site": "00bfafd0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1127000:8"
          ],
          [
            "leaf",
            "const:490:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfaf30",
      "incomplete_value": false,
      "site": "00bfaf34",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1127000:8"
          ],
          [
            "leaf",
            "const:390:8"
          ]
        ]
      ]
    },
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00bfafa8",
      "incomplete_value": false,
      "site": "00bfafb4",
      "value": [
        "leaf",
        "const:ca48d0:8"
      ]
    },
    "old": {
      "definition_site": "00bfaf0c",
      "incomplete_value": false,
      "site": "00bfaf18",
      "value": [
        "leaf",
        "const:ca4800:8"
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
      "00bfaf9c",
      "READ",
      [
        "storage",
        "01127390",
        null,
        "undefined1"
      ]
    ],
    [
      "00bfafa8",
      "DATA",
      [
        "storage",
        "00ca4800",
        null,
        "pointer"
      ]
    ],
    [
      "00bfafbc",
      "PARAM",
      [
        "storage",
        "01127390",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bfaf9c",
      "READ",
      [
        "storage",
        "01127490",
        null,
        "undefined1"
      ]
    ],
    [
      "00bfafa8",
      "DATA",
      [
        "storage",
        "00ca48d0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfafbc",
      "PARAM",
      [
        "storage",
        "01127490",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfaf24 ["INT_ADD", "register:40f0:8", ["const:bfaf24:8", "const:4:8"]]
- 00bfaf24 ["CALL", null, ["callee:00c57f20:8"]]
+ 00bfafc0 ["INT_ADD", "register:40f0:8", ["const:bfafc0:8", "const:4:8"]]
+ 00bfafc0 ["CALL", null, ["callee:00c57f20:8"]]
- 00bfaf34 ["INT_ADD", "register:40f0:8", ["const:bfaf34:8", "const:4:8"]]
- 00bfaf34 ["CALL", null, ["callee:00c57f40:8"]]
+ 00bfafd0 ["INT_ADD", "register:40f0:8", ["const:bfafd0:8", "const:4:8"]]
+ 00bfafd0 ["CALL", null, ["callee:00c57f40:8"]]
- 00bfaefc ["COPY", "tmp:0:8", ["const:390:8"]]
- 00bfaefc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bfaefc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bfaefc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bfaf98 ["COPY", "tmp:0:8", ["const:490:8"]]
+ 00bfaf98 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bfaf98 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bfaf98 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c42d0e1dd860fcdc00ae9f7f8a692f23"></a>

### [`00bfb0f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfb/00bfb0f4.md) → [`00bfb190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfb190.md) _ZNSt6__ndk18ios_base6xallocEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c53ca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53ca0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c53d40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d40.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfb1a4",
      "incomplete_value": true,
      "site": "00bfb1a8",
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
                "const:bc8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfb108",
      "incomplete_value": true,
      "site": "00bfb10c",
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
                "const:af8:8"
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
      "00bfb1a4",
      "READ",
      [
        "storage",
        "00c9baf8",
        null,
        "pointer"
      ]
    ],
    [
      "00bfb1a4",
      "PARAM",
      [
        "storage",
        "01127398",
        "std::__ndk1::ios_base::__xindex_",
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "00bfb1a4",
      "READ",
      [
        "storage",
        "00c9bbc8",
        null,
        "pointer"
      ]
    ],
    [
      "00bfb1a4",
      "PARAM",
      [
        "storage",
        "01127498",
        "std::__ndk1::ios_base::__xindex_",
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfb10c ["INT_ADD", "register:40f0:8", ["const:bfb10c:8", "const:4:8"]]
- 00bfb10c ["CALL", null, ["callee:00c53d40:8"]]
+ 00bfb1a8 ["INT_ADD", "register:40f0:8", ["const:bfb1a8:8", "const:4:8"]]
+ 00bfb1a8 ["CALL", null, ["callee:00c53d40:8"]]
- 00bfb108 ["INT_ADD", "tmp:0:8", ["register:4008:8", "const:af8:8"]]
- 00bfb108 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bfb1a4 ["INT_ADD", "tmp:0:8", ["register:4008:8", "const:bc8:8"]]
+ 00bfb1a4 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-6b96fe531e964aecce228a8e329b0f78"></a>

### [`00bfb11c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfb/00bfb11c.md) → [`00bfb1b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfb1b8.md) _ZNSt6__ndk18ios_base5iwordEi

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00bfb544`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfb/00bfb544.md) [`00c58090`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58090.md) [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00bfb5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfb5e0.md) [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 95.65% / 新版 95.65%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bfb2b8",
      "incomplete_value": false,
      "site": "00bfb2b8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1127000:8"
          ],
          [
            "leaf",
            "const:4a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfb21c",
      "incomplete_value": false,
      "site": "00bfb21c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1127000:8"
          ],
          [
            "leaf",
            "const:3a0:8"
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
      "definition_site": "00bfb2c4",
      "incomplete_value": false,
      "site": "00bfb2c8",
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
            "const:4da:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfb228",
      "incomplete_value": false,
      "site": "00bfb22c",
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
            "const:536:8"
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
      "00bfb2b4",
      "DATA",
      [
        "storage",
        "011273a0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bfb2b8",
      "WRITE",
      [
        "storage",
        "011273a0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bfb2c4",
      "PARAM",
      [
        "storage",
        "002a7536",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bfb2b4",
      "DATA",
      [
        "storage",
        "011274a0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bfb2b8",
      "WRITE",
      [
        "storage",
        "011274a0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bfb2c4",
      "PARAM",
      [
        "storage",
        "002a74da",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfb22c ["INT_ADD", "register:40f0:8", ["const:bfb22c:8", "const:4:8"]]
- 00bfb22c ["CALL", null, ["callee:00bfb5e0:8"]]
+ 00bfb2c8 ["INT_ADD", "register:40f0:8", ["const:bfb2c8:8", "const:4:8"]]
+ 00bfb2c8 ["CALL", null, ["callee:00bfb5e0:8"]]
- 00bfb174 ["INT_ADD", "register:40f0:8", ["const:bfb174:8", "const:4:8"]]
- 00bfb174 ["CALL", null, ["callee:00c5a170:8"]]
+ 00bfb210 ["INT_ADD", "register:40f0:8", ["const:bfb210:8", "const:4:8"]]
+ 00bfb210 ["CALL", null, ["callee:00c5a170:8"]]
- 00bfb1c4 ["INT_ADD", "register:40f0:8", ["const:bfb1c4:8", "const:4:8"]]
- 00bfb1c4 ["CALL", null, ["callee:00c58160:8"]]
+ 00bfb260 ["INT_ADD", "register:40f0:8", ["const:bfb260:8", "const:4:8"]]
+ 00bfb260 ["CALL", null, ["callee:00c58160:8"]]
~~~


<a id="compare-00d986ea682c9ef189e1b5fbdde1cfe8"></a>

### [`00bfb230`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfb/00bfb230.md) → [`00bfb2cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfb2cc.md) _ZNSt6__ndk18ios_base5pwordEi

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00bfb544`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfb/00bfb544.md) [`00c58090`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58090.md) [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00bfb5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfb5e0.md) [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 95.65% / 新版 95.65%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bfb3cc",
      "incomplete_value": false,
      "site": "00bfb3cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1127000:8"
          ],
          [
            "leaf",
            "const:4a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfb330",
      "incomplete_value": false,
      "site": "00bfb330",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1127000:8"
          ],
          [
            "leaf",
            "const:3a8:8"
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
      "definition_site": "00bfb3d8",
      "incomplete_value": false,
      "site": "00bfb3dc",
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
            "const:4da:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfb33c",
      "incomplete_value": false,
      "site": "00bfb340",
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
            "const:536:8"
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
      "00bfb3c8",
      "DATA",
      [
        "storage",
        "011273a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bfb3cc",
      "WRITE",
      [
        "storage",
        "011273a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bfb3d8",
      "PARAM",
      [
        "storage",
        "002a7536",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bfb3c8",
      "DATA",
      [
        "storage",
        "011274a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bfb3cc",
      "WRITE",
      [
        "storage",
        "011274a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bfb3d8",
      "PARAM",
      [
        "storage",
        "002a74da",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfb340 ["INT_ADD", "register:40f0:8", ["const:bfb340:8", "const:4:8"]]
- 00bfb340 ["CALL", null, ["callee:00bfb5e0:8"]]
+ 00bfb3dc ["INT_ADD", "register:40f0:8", ["const:bfb3dc:8", "const:4:8"]]
+ 00bfb3dc ["CALL", null, ["callee:00bfb5e0:8"]]
- 00bfb288 ["INT_ADD", "register:40f0:8", ["const:bfb288:8", "const:4:8"]]
- 00bfb288 ["CALL", null, ["callee:00c5a170:8"]]
+ 00bfb324 ["INT_ADD", "register:40f0:8", ["const:bfb324:8", "const:4:8"]]
+ 00bfb324 ["CALL", null, ["callee:00c5a170:8"]]
- 00bfb2d8 ["INT_ADD", "register:40f0:8", ["const:bfb2d8:8", "const:4:8"]]
- 00bfb2d8 ["CALL", null, ["callee:00c58160:8"]]
+ 00bfb374 ["INT_ADD", "register:40f0:8", ["const:bfb374:8", "const:4:8"]]
+ 00bfb374 ["CALL", null, ["callee:00c58160:8"]]
~~~


<a id="compare-37d662e24eae26dc5e13d03938880431"></a>

### [`00bfb344`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfb/00bfb344.md) → [`00bfb3e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfb3e0.md) _ZNSt6__ndk18ios_base17register_callbackEPFvNS0_5eventERS0_iEi

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00bfb544`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfb/00bfb544.md) [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00bfb5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfb5e0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.21% / 新版 98.21%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfb4b8",
      "incomplete_value": false,
      "site": "00bfb4bc",
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
            "const:4da:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfb41c",
      "incomplete_value": false,
      "site": "00bfb420",
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
            "const:536:8"
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
      "00bfb4b8",
      "PARAM",
      [
        "storage",
        "002a7536",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bfb4b8",
      "PARAM",
      [
        "storage",
        "002a74da",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfb420 ["INT_ADD", "register:40f0:8", ["const:bfb420:8", "const:4:8"]]
- 00bfb420 ["CALL", null, ["callee:00bfb5e0:8"]]
+ 00bfb4bc ["INT_ADD", "register:40f0:8", ["const:bfb4bc:8", "const:4:8"]]
+ 00bfb4bc ["CALL", null, ["callee:00bfb5e0:8"]]
- 00bfb398 ["INT_ADD", "register:40f0:8", ["const:bfb398:8", "const:4:8"]]
- 00bfb398 ["CALL", null, ["callee:00c5a170:8"]]
+ 00bfb434 ["INT_ADD", "register:40f0:8", ["const:bfb434:8", "const:4:8"]]
+ 00bfb434 ["CALL", null, ["callee:00c5a170:8"]]
- 00bfb3c4 ["INT_ADD", "register:40f0:8", ["const:bfb3c4:8", "const:4:8"]]
- 00bfb3c4 ["CALL", null, ["callee:00c5a170:8"]]
+ 00bfb460 ["INT_ADD", "register:40f0:8", ["const:bfb460:8", "const:4:8"]]
+ 00bfb460 ["CALL", null, ["callee:00c5a170:8"]]
~~~


<a id="compare-7f6c885924fffadf250823277f66cf87"></a>

### [`00bfb424`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfb/00bfb424.md) → [`00bfb4c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfb4c0.md) _ZNSt6__ndk18ios_baseD1Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c5d0e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d0e0.md) [`00c5e2f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e2f0.md) · 呼出先 2件 [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c58660`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58660.md)
- 新版 呼出元 2件 [`00c5d1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1b0.md) [`00c5e3c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3c0.md) · 呼出先 2件 [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58730.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.18% / 新版 93.18%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bfb4e4",
      "incomplete_value": true,
      "site": "00bfb4e8",
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
      "definition_site": "00bfb448",
      "incomplete_value": true,
      "site": "00bfb44c",
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
      "00bfb4dc",
      "READ",
      [
        "storage",
        "00c9bb00",
        null,
        "pointer"
      ]
    ],
    [
      "00bfb4e8",
      "DATA",
      [
        "storage",
        "00c92da8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bfb4dc",
      "READ",
      [
        "storage",
        "00c9bbd0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfb4e8",
      "DATA",
      [
        "storage",
        "00c92e78",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfb440 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:b00:8"]]
- 00bfb440 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bfb4dc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:bd0:8"]]
+ 00bfb4dc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bfb478 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bfb478 ["INT_ADD", "register:40f0:8", ["const:bfb478:8", "const:4:8"]]
- 00bfb478 ["CALLIND", null, ["register:0:8"]]
+ 00bfb514 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bfb514 ["INT_ADD", "register:40f0:8", ["const:bfb514:8", "const:4:8"]]
+ 00bfb514 ["CALLIND", null, ["register:0:8"]]
- 00bfb48c ["INT_ADD", "register:40f0:8", ["const:bfb48c:8", "const:4:8"]]
- 00bfb48c ["CALL", null, ["callee:00c58360:8"]]
+ 00bfb528 ["INT_ADD", "register:40f0:8", ["const:bfb528:8", "const:4:8"]]
+ 00bfb528 ["CALL", null, ["callee:00c58360:8"]]
~~~


<a id="compare-b4962e26f2508238c9bc3d6ae7817647"></a>

### [`00bfb504`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfb/00bfb504.md) → [`00bfb5a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfb5a0.md) _ZNSt6__ndk18ios_base5clearEj

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) · 呼出先 1件 [`00bfb544`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfb/00bfb544.md)
- 新版 呼出元 1件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) · 呼出先 1件 [`00bfb5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfb5e0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 93.75% / 新版 93.75%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfb5d8",
      "incomplete_value": false,
      "site": "00bfb5dc",
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
            "const:4da:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfb53c",
      "incomplete_value": false,
      "site": "00bfb540",
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
            "const:536:8"
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
      "00bfb5d8",
      "PARAM",
      [
        "storage",
        "002a7536",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bfb5d8",
      "PARAM",
      [
        "storage",
        "002a74da",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfb540 ["INT_ADD", "register:40f0:8", ["const:bfb540:8", "const:4:8"]]
- 00bfb540 ["CALL", null, ["callee:00bfb5e0:8"]]
+ 00bfb5dc ["INT_ADD", "register:40f0:8", ["const:bfb5dc:8", "const:4:8"]]
+ 00bfb5dc ["CALL", null, ["callee:00bfb5e0:8"]]
- 00bfb53c ["COPY", "tmp:0:8", ["const:536:8"]]
- 00bfb53c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bfb53c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bfb53c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bfb5d8 ["COPY", "tmp:0:8", ["const:4da:8"]]
+ 00bfb5d8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bfb5d8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bfb5d8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-df26aa8e3d485ec550a83a5cb801e0de"></a>

### [`00bfb544`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfb/00bfb544.md) → [`00bfb5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfb5e0.md) FUN_00bfb5e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`00bfb11c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfb/00bfb11c.md) [`00bfb230`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfb/00bfb230.md) [`00bfb344`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfb/00bfb344.md) [`00bfb504`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfb/00bfb504.md) · 呼出先 6件 [`00bfafbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfafbc.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md)
- 新版 呼出元 4件 [`00bfb1b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfb1b8.md) [`00bfb2cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfb2cc.md) [`00bfb3e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfb3e0.md) [`00bfb5a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfb5a0.md) · 呼出先 6件 [`00bfb058`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfb058.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 4件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00bfb620",
      "incomplete_value": false,
      "site": "00bfb620",
      "value": [
        "leaf",
        "const:ca48d0:8"
      ]
    },
    "old": {
      "definition_site": "00bfb584",
      "incomplete_value": false,
      "site": "00bfb584",
      "value": [
        "leaf",
        "const:ca4800:8"
      ]
    },
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfb640",
      "incomplete_value": true,
      "site": "00bfb648",
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
                "const:bd8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfb5a4",
      "incomplete_value": true,
      "site": "00bfb5ac",
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
                "const:b08:8"
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
      "definition_site": "00bfb644",
      "incomplete_value": true,
      "site": "00bfb648",
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
                "const:bc0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfb5a8",
      "incomplete_value": true,
      "site": "00bfb5ac",
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
                "const:af0:8"
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
      "00bfb60c",
      "READ",
      [
        "storage",
        "01127390",
        null,
        "undefined1"
      ]
    ],
    [
      "00bfb620",
      "DATA",
      [
        "storage",
        "00ca4800",
        null,
        "pointer"
      ]
    ],
    [
      "00bfb640",
      "READ",
      [
        "storage",
        "00c9bb08",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bfb60c",
      "READ",
      [
        "storage",
        "01127490",
        null,
        "undefined1"
      ]
    ],
    [
      "00bfb620",
      "DATA",
      [
        "storage",
        "00ca48d0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfb640",
      "READ",
      [
        "storage",
        "00c9bbd8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfb5ac ["INT_ADD", "register:40f0:8", ["const:bfb5ac:8", "const:4:8"]]
- 00bfb5ac ["CALL", null, ["callee:00c57fe0:8"]]
+ 00bfb648 ["INT_ADD", "register:40f0:8", ["const:bfb648:8", "const:4:8"]]
+ 00bfb648 ["CALL", null, ["callee:00c57fe0:8"]]
- 00bfb5b8 ["INT_ADD", "register:40f0:8", ["const:bfb5b8:8", "const:4:8"]]
- 00bfb5b8 ["CALL", null, ["callee:00c57f20:8"]]
+ 00bfb654 ["INT_ADD", "register:40f0:8", ["const:bfb654:8", "const:4:8"]]
+ 00bfb654 ["CALL", null, ["callee:00c57f20:8"]]
- 00bfb5c8 ["INT_ADD", "register:40f0:8", ["const:bfb5c8:8", "const:4:8"]]
- 00bfb5c8 ["CALL", null, ["callee:00c57f40:8"]]
+ 00bfb664 ["INT_ADD", "register:40f0:8", ["const:bfb664:8", "const:4:8"]]
+ 00bfb664 ["CALL", null, ["callee:00c57f40:8"]]
~~~


<a id="compare-e0a92beea055eecbdfea97191fc96690"></a>

### [`00bfb5e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfb/00bfb5e4.md) → [`00bfb680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfb680.md) _ZNSt6__ndk18ios_base4initEPv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c581e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c581e0.md) · 呼出先 1件 [`00c5a7a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a7a0.md)
- 新版 呼出元 1件 [`00c582b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582b0.md) · 呼出先 1件 [`00c5a870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a870.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 89.47% / 新版 89.47%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bfb690",
      "incomplete_value": true,
      "site": "00bfb6a4",
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
                "const:70:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfb5f4",
      "incomplete_value": true,
      "site": "00bfb608",
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
                "const:30:8"
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
      "00bfb690",
      "READ",
      [
        "storage",
        "002c3030",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bfb690",
      "READ",
      [
        "storage",
        "002c3070",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfb5f4 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:30:8"]]
- 00bfb5f4 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
- 00bfb5f4 ["COPY", "register:5010:8", ["const:0:8"]]
- 00bfb5f4 ["COPY", "register:5018:8", ["const:0:8"]]
+ 00bfb690 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:70:8"]]
+ 00bfb690 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
+ 00bfb690 ["COPY", "register:5010:8", ["const:0:8"]]
+ 00bfb690 ["COPY", "register:5018:8", ["const:0:8"]]
~~~


<a id="compare-65d3b15066248a961a09571b62729782"></a>

### [`00bfbb00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfb/00bfbb00.md) → [`00bfbb9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfbb9c.md) _ZNSt6__ndk18ios_base15sync_with_stdioEb

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 71.43% / 新版 71.43%

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bfbbac",
      "incomplete_value": false,
      "site": "00bfbbac",
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
            "const:8d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfbb10",
      "incomplete_value": false,
      "site": "00bfbb10",
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
            "const:808:8"
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
      "00bfbba8",
      "READ",
      [
        "storage",
        "00ca4808",
        null,
        "undefined1"
      ]
    ],
    [
      "00bfbbac",
      "WRITE",
      [
        "storage",
        "00ca4808",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bfbba8",
      "READ",
      [
        "storage",
        "00ca48d8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bfbbac",
      "WRITE",
      [
        "storage",
        "00ca48d8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfbb10 ["COPY", "tmp:0:4", ["register:4048:4"]]
- 00bfbb10 ["INT_ADD", "tmp:1:8", ["register:4050:8", "const:808:8"]]
- 00bfbb10 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bfbbac ["COPY", "tmp:0:4", ["register:4048:4"]]
+ 00bfbbac ["INT_ADD", "tmp:1:8", ["register:4050:8", "const:8d8:8"]]
+ 00bfbbac ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bfbb0c ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:808:8"]]
- 00bfbb0c ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bfbb0c ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bfbba8 ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:8d8:8"]]
+ 00bfbba8 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bfbba8 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-76ea7feb27f77378ee4b0c96c29496a5"></a>

### [`00bfbe9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfb/00bfbe9c.md) → [`00bfbf38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfbf38.md) _ZNSt6__ndk115basic_streambufIcNS_11char_traitsIcEEEC1Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c581f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c581f0.md) · 呼出先 1件 [`00c5a7a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a7a0.md)
- 新版 呼出元 1件 [`00c582c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582c0.md) · 呼出先 1件 [`00c5a870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a870.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 82.35% / 新版 82.35%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bfbf58",
      "incomplete_value": true,
      "site": "00bfbf58",
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
      "definition_site": "00bfbebc",
      "incomplete_value": true,
      "site": "00bfbebc",
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
      "00bfbf50",
      "READ",
      [
        "storage",
        "00c9b848",
        null,
        "pointer"
      ]
    ],
    [
      "00bfbf58",
      "DATA",
      [
        "storage",
        "00c90cb0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bfbf50",
      "READ",
      [
        "storage",
        "00c9b918",
        null,
        "pointer"
      ]
    ],
    [
      "00bfbf58",
      "DATA",
      [
        "storage",
        "00c90d80",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfbeb4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:848:8"]]
- 00bfbeb4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bfbf50 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:918:8"]]
+ 00bfbf50 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bfbec0 ["INT_ADD", "register:40f0:8", ["const:bfbec0:8", "const:4:8"]]
- 00bfbec0 ["CALL", null, ["callee:00c5a870:8"]]
+ 00bfbf5c ["INT_ADD", "register:40f0:8", ["const:bfbf5c:8", "const:4:8"]]
+ 00bfbf5c ["CALL", null, ["callee:00c5a870:8"]]
~~~


<a id="compare-e597a5f3252055756429407e03f8cbbe"></a>

### [`00bfbee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfb/00bfbee0.md) → [`00bfbf7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfbf7c.md) _ZNSt6__ndk115basic_streambufIcNS_11char_traitsIcEEEC1ERKS3_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5a7d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a7d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5a8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8a0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.36% / 新版 86.36%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bfbfa4",
      "incomplete_value": true,
      "site": "00bfbfa4",
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
      "definition_site": "00bfbf08",
      "incomplete_value": true,
      "site": "00bfbf08",
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
      "00bfbf98",
      "READ",
      [
        "storage",
        "00c9b848",
        null,
        "pointer"
      ]
    ],
    [
      "00bfbfa4",
      "DATA",
      [
        "storage",
        "00c90cb0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bfbf98",
      "READ",
      [
        "storage",
        "00c9b918",
        null,
        "pointer"
      ]
    ],
    [
      "00bfbfa4",
      "DATA",
      [
        "storage",
        "00c90d80",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfbefc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:848:8"]]
- 00bfbefc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bfbf98 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:918:8"]]
+ 00bfbf98 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bfbf0c ["INT_ADD", "register:40f0:8", ["const:bfbf0c:8", "const:4:8"]]
- 00bfbf0c ["CALL", null, ["callee:00c5a8a0:8"]]
+ 00bfbfa8 ["INT_ADD", "register:40f0:8", ["const:bfbfa8:8", "const:4:8"]]
+ 00bfbfa8 ["CALL", null, ["callee:00c5a8a0:8"]]
~~~


<a id="compare-696742448d3680a33ecc34f4356f9b24"></a>

### [`00bfc0e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfc/00bfc0e8.md) → [`00bfc184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfc/00bfc184.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEEC1EPNS_15basic_streambufIcS2_EE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c581e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c581e0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c582b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582b0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.27% / 新版 77.27%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bfc1b0",
      "incomplete_value": true,
      "site": "00bfc1b0",
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
      "definition_site": "00bfc114",
      "incomplete_value": true,
      "site": "00bfc114",
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
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bfc1b4",
      "incomplete_value": true,
      "site": "00bfc1b4",
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
            "const:18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfc118",
      "incomplete_value": true,
      "site": "00bfc118",
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
            "const:18:8"
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
      "00bfc1a0",
      "READ",
      [
        "storage",
        "00c9b230",
        null,
        "pointer"
      ]
    ],
    [
      "00bfc1b0",
      "DATA",
      [
        "storage",
        "00c92e38",
        null,
        "pointer"
      ]
    ],
    [
      "00bfc1b4",
      "DATA",
      [
        "storage",
        "00c92e10",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bfc1a0",
      "READ",
      [
        "storage",
        "00c9b300",
        null,
        "pointer"
      ]
    ],
    [
      "00bfc1b0",
      "DATA",
      [
        "storage",
        "00c92f08",
        null,
        "pointer"
      ]
    ],
    [
      "00bfc1b4",
      "DATA",
      [
        "storage",
        "00c92ee0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfc104 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:230:8"]]
- 00bfc104 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bfc1a0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:300:8"]]
+ 00bfc1a0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bfc120 ["INT_ADD", "register:40f0:8", ["const:bfc120:8", "const:4:8"]]
- 00bfc120 ["CALL", null, ["callee:00c582b0:8"]]
+ 00bfc1bc ["INT_ADD", "register:40f0:8", ["const:bfc1bc:8", "const:4:8"]]
+ 00bfc1bc ["CALL", null, ["callee:00c582b0:8"]]
~~~


<a id="compare-f813ebfcc5d1ad7d3b8c3a4626db83c8"></a>

### [`00bfc1c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfc/00bfc1c8.md) → [`00bfc264`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfc/00bfc264.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEE6sentryC1ERS3_b

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c59dd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59dd0.md) · 呼出先 5件 [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c58ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58ef0.md)
- 新版 呼出元 1件 [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c58fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58fc0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.12% / 新版 99.12%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfc2f4",
      "incomplete_value": true,
      "site": "00bfc2f8",
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
      "definition_site": "00bfc258",
      "incomplete_value": true,
      "site": "00bfc25c",
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
      "00bfc2f4",
      "READ",
      [
        "storage",
        "00c9ac30",
        null,
        "pointer"
      ]
    ],
    [
      "00bfc2f4",
      "PARAM",
      [
        "storage",
        "01127e18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bfc2f4",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ],
    [
      "00bfc2f4",
      "PARAM",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfc25c ["INT_ADD", "register:40f0:8", ["const:bfc25c:8", "const:4:8"]]
- 00bfc25c ["CALL", null, ["callee:00c58350:8"]]
+ 00bfc2f8 ["INT_ADD", "register:40f0:8", ["const:bfc2f8:8", "const:4:8"]]
+ 00bfc2f8 ["CALL", null, ["callee:00c58350:8"]]
- 00bfc228 ["INT_ADD", "register:40f0:8", ["const:bfc228:8", "const:4:8"]]
- 00bfc228 ["CALL", null, ["callee:00c58fc0:8"]]
+ 00bfc2c4 ["INT_ADD", "register:40f0:8", ["const:bfc2c4:8", "const:4:8"]]
+ 00bfc2c4 ["CALL", null, ["callee:00c58fc0:8"]]
- 00bfc24c ["INT_ADD", "register:40f0:8", ["const:bfc24c:8", "const:4:8"]]
- 00bfc24c ["CALL", null, ["callee:00c58340:8"]]
+ 00bfc2e8 ["INT_ADD", "register:40f0:8", ["const:bfc2e8:8", "const:4:8"]]
+ 00bfc2e8 ["CALL", null, ["callee:00c58340:8"]]
~~~


<a id="compare-fd3cbd59cb231d09f53034dac7136336"></a>

### [`00bfc5d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfc/00bfc5d8.md) → [`00bfc674`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfc/00bfc674.md) FUN_00bfc674

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00bfc5d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfc/00bfc5d0.md) · 呼出先 5件 [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c59dd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59dd0.md)
- 新版 呼出元 1件 [`00bfc66c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfc/00bfc66c.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfc6c8",
      "incomplete_value": true,
      "site": "00bfc6cc",
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfc62c",
      "incomplete_value": true,
      "site": "00bfc630",
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
                "const:b10:8"
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
      "00bfc6c8",
      "READ",
      [
        "storage",
        "00c9bb10",
        null,
        "pointer"
      ]
    ],
    [
      "00bfc6c8",
      "PARAM",
      [
        "storage",
        "01127b78",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bfc6c8",
      "READ",
      [
        "storage",
        "00c9bbe0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfc6c8",
      "PARAM",
      [
        "storage",
        "01127c78",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfc630 ["INT_ADD", "register:40f0:8", ["const:bfc630:8", "const:4:8"]]
- 00bfc630 ["CALL", null, ["callee:00c58350:8"]]
+ 00bfc6cc ["INT_ADD", "register:40f0:8", ["const:bfc6cc:8", "const:4:8"]]
+ 00bfc6cc ["CALL", null, ["callee:00c58350:8"]]
- 00bfc604 ["INT_ADD", "register:40f0:8", ["const:bfc604:8", "const:4:8"]]
- 00bfc604 ["CALL", null, ["callee:00c59ea0:8"]]
+ 00bfc6a0 ["INT_ADD", "register:40f0:8", ["const:bfc6a0:8", "const:4:8"]]
+ 00bfc6a0 ["CALL", null, ["callee:00c59ea0:8"]]
- 00bfc620 ["INT_ADD", "register:40f0:8", ["const:bfc620:8", "const:4:8"]]
- 00bfc620 ["CALL", null, ["callee:00c58340:8"]]
+ 00bfc6bc ["INT_ADD", "register:40f0:8", ["const:bfc6bc:8", "const:4:8"]]
+ 00bfc6bc ["CALL", null, ["callee:00c58340:8"]]
~~~


<a id="compare-f43a8d005cfa4ebaf90c0ce52d8192ec"></a>

### [`00bfc710`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfc/00bfc710.md) → [`00bfc7ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfc/00bfc7ac.md) FUN_00bfc7ac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00bfc708`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfc/00bfc708.md) · 呼出先 5件 [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c59dd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59dd0.md)
- 新版 呼出元 1件 [`00bfc7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfc/00bfc7a4.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.44% / 新版 98.44%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfc800",
      "incomplete_value": true,
      "site": "00bfc804",
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfc764",
      "incomplete_value": true,
      "site": "00bfc768",
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
                "const:b10:8"
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
      "00bfc800",
      "READ",
      [
        "storage",
        "00c9bb10",
        null,
        "pointer"
      ]
    ],
    [
      "00bfc800",
      "PARAM",
      [
        "storage",
        "01127b78",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bfc800",
      "READ",
      [
        "storage",
        "00c9bbe0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfc800",
      "PARAM",
      [
        "storage",
        "01127c78",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfc768 ["INT_ADD", "register:40f0:8", ["const:bfc768:8", "const:4:8"]]
- 00bfc768 ["CALL", null, ["callee:00c58350:8"]]
+ 00bfc804 ["INT_ADD", "register:40f0:8", ["const:bfc804:8", "const:4:8"]]
+ 00bfc804 ["CALL", null, ["callee:00c58350:8"]]
- 00bfc73c ["INT_ADD", "register:40f0:8", ["const:bfc73c:8", "const:4:8"]]
- 00bfc73c ["CALL", null, ["callee:00c59ea0:8"]]
+ 00bfc7d8 ["INT_ADD", "register:40f0:8", ["const:bfc7d8:8", "const:4:8"]]
+ 00bfc7d8 ["CALL", null, ["callee:00c59ea0:8"]]
- 00bfc758 ["INT_ADD", "register:40f0:8", ["const:bfc758:8", "const:4:8"]]
- 00bfc758 ["CALL", null, ["callee:00c58340:8"]]
+ 00bfc7f4 ["INT_ADD", "register:40f0:8", ["const:bfc7f4:8", "const:4:8"]]
+ 00bfc7f4 ["CALL", null, ["callee:00c58340:8"]]
~~~


<a id="compare-9bd241fe3d3d68c30fb8e6631da2f22b"></a>

### [`00bfc888`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfc/00bfc888.md) → [`00bfc924`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfc/00bfc924.md) FUN_00bfc924

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00bfc880`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfc/00bfc880.md) · 呼出先 5件 [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c59dd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59dd0.md)
- 新版 呼出元 1件 [`00bfc91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfc/00bfc91c.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfc978",
      "incomplete_value": true,
      "site": "00bfc97c",
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfc8dc",
      "incomplete_value": true,
      "site": "00bfc8e0",
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
                "const:b10:8"
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
      "00bfc978",
      "READ",
      [
        "storage",
        "00c9bb10",
        null,
        "pointer"
      ]
    ],
    [
      "00bfc978",
      "PARAM",
      [
        "storage",
        "01127b78",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bfc978",
      "READ",
      [
        "storage",
        "00c9bbe0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfc978",
      "PARAM",
      [
        "storage",
        "01127c78",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfc8e0 ["INT_ADD", "register:40f0:8", ["const:bfc8e0:8", "const:4:8"]]
- 00bfc8e0 ["CALL", null, ["callee:00c58350:8"]]
+ 00bfc97c ["INT_ADD", "register:40f0:8", ["const:bfc97c:8", "const:4:8"]]
+ 00bfc97c ["CALL", null, ["callee:00c58350:8"]]
- 00bfc8b4 ["INT_ADD", "register:40f0:8", ["const:bfc8b4:8", "const:4:8"]]
- 00bfc8b4 ["CALL", null, ["callee:00c59ea0:8"]]
+ 00bfc950 ["INT_ADD", "register:40f0:8", ["const:bfc950:8", "const:4:8"]]
+ 00bfc950 ["CALL", null, ["callee:00c59ea0:8"]]
- 00bfc8d0 ["INT_ADD", "register:40f0:8", ["const:bfc8d0:8", "const:4:8"]]
- 00bfc8d0 ["CALL", null, ["callee:00c58340:8"]]
+ 00bfc96c ["INT_ADD", "register:40f0:8", ["const:bfc96c:8", "const:4:8"]]
+ 00bfc96c ["CALL", null, ["callee:00c58340:8"]]
~~~


<a id="compare-35b16e94d3d1f909cea4456b2fe402f4"></a>

### [`00bfc9c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfc/00bfc9c0.md) → [`00bfca5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfc/00bfca5c.md) FUN_00bfca5c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00bfc9b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfc/00bfc9b8.md) · 呼出先 5件 [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c59dd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59dd0.md)
- 新版 呼出元 1件 [`00bfca54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfc/00bfca54.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.46% / 新版 98.46%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfcab0",
      "incomplete_value": true,
      "site": "00bfcab4",
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfca14",
      "incomplete_value": true,
      "site": "00bfca18",
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
                "const:b10:8"
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
      "00bfcab0",
      "READ",
      [
        "storage",
        "00c9bb10",
        null,
        "pointer"
      ]
    ],
    [
      "00bfcab0",
      "PARAM",
      [
        "storage",
        "01127b78",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bfcab0",
      "READ",
      [
        "storage",
        "00c9bbe0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfcab0",
      "PARAM",
      [
        "storage",
        "01127c78",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfca18 ["INT_ADD", "register:40f0:8", ["const:bfca18:8", "const:4:8"]]
- 00bfca18 ["CALL", null, ["callee:00c58350:8"]]
+ 00bfcab4 ["INT_ADD", "register:40f0:8", ["const:bfcab4:8", "const:4:8"]]
+ 00bfcab4 ["CALL", null, ["callee:00c58350:8"]]
- 00bfc9ec ["INT_ADD", "register:40f0:8", ["const:bfc9ec:8", "const:4:8"]]
- 00bfc9ec ["CALL", null, ["callee:00c59ea0:8"]]
+ 00bfca88 ["INT_ADD", "register:40f0:8", ["const:bfca88:8", "const:4:8"]]
+ 00bfca88 ["CALL", null, ["callee:00c59ea0:8"]]
- 00bfca08 ["INT_ADD", "register:40f0:8", ["const:bfca08:8", "const:4:8"]]
- 00bfca08 ["CALL", null, ["callee:00c58340:8"]]
+ 00bfcaa4 ["INT_ADD", "register:40f0:8", ["const:bfcaa4:8", "const:4:8"]]
+ 00bfcaa4 ["CALL", null, ["callee:00c58340:8"]]
~~~


<a id="compare-6e95aed9031f95399bbf68f33879725e"></a>

### [`00bfcb3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfc/00bfcb3c.md) → [`00bfcbd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfc/00bfcbd8.md) FUN_00bfcbd8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00bfcb34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfc/00bfcb34.md) · 呼出先 5件 [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c59dd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59dd0.md)
- 新版 呼出元 1件 [`00bfcbd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfc/00bfcbd0.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfcc2c",
      "incomplete_value": true,
      "site": "00bfcc30",
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfcb90",
      "incomplete_value": true,
      "site": "00bfcb94",
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
                "const:b10:8"
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
      "00bfcc2c",
      "READ",
      [
        "storage",
        "00c9bb10",
        null,
        "pointer"
      ]
    ],
    [
      "00bfcc2c",
      "PARAM",
      [
        "storage",
        "01127b78",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bfcc2c",
      "READ",
      [
        "storage",
        "00c9bbe0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfcc2c",
      "PARAM",
      [
        "storage",
        "01127c78",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfcb94 ["INT_ADD", "register:40f0:8", ["const:bfcb94:8", "const:4:8"]]
- 00bfcb94 ["CALL", null, ["callee:00c58350:8"]]
+ 00bfcc30 ["INT_ADD", "register:40f0:8", ["const:bfcc30:8", "const:4:8"]]
+ 00bfcc30 ["CALL", null, ["callee:00c58350:8"]]
- 00bfcb68 ["INT_ADD", "register:40f0:8", ["const:bfcb68:8", "const:4:8"]]
- 00bfcb68 ["CALL", null, ["callee:00c59ea0:8"]]
+ 00bfcc04 ["INT_ADD", "register:40f0:8", ["const:bfcc04:8", "const:4:8"]]
+ 00bfcc04 ["CALL", null, ["callee:00c59ea0:8"]]
- 00bfcb84 ["INT_ADD", "register:40f0:8", ["const:bfcb84:8", "const:4:8"]]
- 00bfcb84 ["CALL", null, ["callee:00c58340:8"]]
+ 00bfcc20 ["INT_ADD", "register:40f0:8", ["const:bfcc20:8", "const:4:8"]]
+ 00bfcc20 ["CALL", null, ["callee:00c58340:8"]]
~~~


<a id="compare-bb1a16dee1beff3bbe6f3e89c2aa4d19"></a>

### [`00bfcc74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfc/00bfcc74.md) → [`00bfcd10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfc/00bfcd10.md) FUN_00bfcd10

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00bfcc6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfc/00bfcc6c.md) · 呼出先 5件 [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c59dd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59dd0.md)
- 新版 呼出元 1件 [`00bfcd08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfc/00bfcd08.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfcd64",
      "incomplete_value": true,
      "site": "00bfcd68",
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfccc8",
      "incomplete_value": true,
      "site": "00bfcccc",
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
                "const:b10:8"
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
      "00bfcd64",
      "READ",
      [
        "storage",
        "00c9bb10",
        null,
        "pointer"
      ]
    ],
    [
      "00bfcd64",
      "PARAM",
      [
        "storage",
        "01127b78",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bfcd64",
      "READ",
      [
        "storage",
        "00c9bbe0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfcd64",
      "PARAM",
      [
        "storage",
        "01127c78",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfcccc ["INT_ADD", "register:40f0:8", ["const:bfcccc:8", "const:4:8"]]
- 00bfcccc ["CALL", null, ["callee:00c58350:8"]]
+ 00bfcd68 ["INT_ADD", "register:40f0:8", ["const:bfcd68:8", "const:4:8"]]
+ 00bfcd68 ["CALL", null, ["callee:00c58350:8"]]
- 00bfcca0 ["INT_ADD", "register:40f0:8", ["const:bfcca0:8", "const:4:8"]]
- 00bfcca0 ["CALL", null, ["callee:00c59ea0:8"]]
+ 00bfcd3c ["INT_ADD", "register:40f0:8", ["const:bfcd3c:8", "const:4:8"]]
+ 00bfcd3c ["CALL", null, ["callee:00c59ea0:8"]]
- 00bfccbc ["INT_ADD", "register:40f0:8", ["const:bfccbc:8", "const:4:8"]]
- 00bfccbc ["CALL", null, ["callee:00c58340:8"]]
+ 00bfcd58 ["INT_ADD", "register:40f0:8", ["const:bfcd58:8", "const:4:8"]]
+ 00bfcd58 ["CALL", null, ["callee:00c58340:8"]]
~~~


<a id="compare-09016db4153ca1af830adf8aa909d2d0"></a>

### [`00bfcdac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfc/00bfcdac.md) → [`00bfce48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfc/00bfce48.md) FUN_00bfce48

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00bfcda4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfc/00bfcda4.md) · 呼出先 5件 [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c59dd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59dd0.md)
- 新版 呼出元 1件 [`00bfce40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfc/00bfce40.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfce9c",
      "incomplete_value": true,
      "site": "00bfcea0",
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfce00",
      "incomplete_value": true,
      "site": "00bfce04",
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
                "const:b10:8"
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
      "00bfce9c",
      "READ",
      [
        "storage",
        "00c9bb10",
        null,
        "pointer"
      ]
    ],
    [
      "00bfce9c",
      "PARAM",
      [
        "storage",
        "01127b78",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bfce9c",
      "READ",
      [
        "storage",
        "00c9bbe0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfce9c",
      "PARAM",
      [
        "storage",
        "01127c78",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfce04 ["INT_ADD", "register:40f0:8", ["const:bfce04:8", "const:4:8"]]
- 00bfce04 ["CALL", null, ["callee:00c58350:8"]]
+ 00bfcea0 ["INT_ADD", "register:40f0:8", ["const:bfcea0:8", "const:4:8"]]
+ 00bfcea0 ["CALL", null, ["callee:00c58350:8"]]
- 00bfcdd8 ["INT_ADD", "register:40f0:8", ["const:bfcdd8:8", "const:4:8"]]
- 00bfcdd8 ["CALL", null, ["callee:00c59ea0:8"]]
+ 00bfce74 ["INT_ADD", "register:40f0:8", ["const:bfce74:8", "const:4:8"]]
+ 00bfce74 ["CALL", null, ["callee:00c59ea0:8"]]
- 00bfcdf4 ["INT_ADD", "register:40f0:8", ["const:bfcdf4:8", "const:4:8"]]
- 00bfcdf4 ["CALL", null, ["callee:00c58340:8"]]
+ 00bfce90 ["INT_ADD", "register:40f0:8", ["const:bfce90:8", "const:4:8"]]
+ 00bfce90 ["CALL", null, ["callee:00c58340:8"]]
~~~


<a id="compare-917f6d727f497c1f693da4f96dcacaba"></a>

### [`00bfcee4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfc/00bfcee4.md) → [`00bfcf80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfc/00bfcf80.md) FUN_00bfcf80

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00bfcedc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfc/00bfcedc.md) · 呼出先 5件 [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c59dd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59dd0.md)
- 新版 呼出元 1件 [`00bfcf78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfc/00bfcf78.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfcfd4",
      "incomplete_value": true,
      "site": "00bfcfd8",
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfcf38",
      "incomplete_value": true,
      "site": "00bfcf3c",
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
                "const:b10:8"
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
      "00bfcfd4",
      "READ",
      [
        "storage",
        "00c9bb10",
        null,
        "pointer"
      ]
    ],
    [
      "00bfcfd4",
      "PARAM",
      [
        "storage",
        "01127b78",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bfcfd4",
      "READ",
      [
        "storage",
        "00c9bbe0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfcfd4",
      "PARAM",
      [
        "storage",
        "01127c78",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfcf3c ["INT_ADD", "register:40f0:8", ["const:bfcf3c:8", "const:4:8"]]
- 00bfcf3c ["CALL", null, ["callee:00c58350:8"]]
+ 00bfcfd8 ["INT_ADD", "register:40f0:8", ["const:bfcfd8:8", "const:4:8"]]
+ 00bfcfd8 ["CALL", null, ["callee:00c58350:8"]]
- 00bfcf10 ["INT_ADD", "register:40f0:8", ["const:bfcf10:8", "const:4:8"]]
- 00bfcf10 ["CALL", null, ["callee:00c59ea0:8"]]
+ 00bfcfac ["INT_ADD", "register:40f0:8", ["const:bfcfac:8", "const:4:8"]]
+ 00bfcfac ["CALL", null, ["callee:00c59ea0:8"]]
- 00bfcf2c ["INT_ADD", "register:40f0:8", ["const:bfcf2c:8", "const:4:8"]]
- 00bfcf2c ["CALL", null, ["callee:00c58340:8"]]
+ 00bfcfc8 ["INT_ADD", "register:40f0:8", ["const:bfcfc8:8", "const:4:8"]]
+ 00bfcfc8 ["CALL", null, ["callee:00c58340:8"]]
~~~


<a id="compare-5a247bea34539344194a190cd0c3357a"></a>

### [`00bfd01c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfd/00bfd01c.md) → [`00bfd0b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfd/00bfd0b8.md) FUN_00bfd0b8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00bfd014`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfd/00bfd014.md) · 呼出先 5件 [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c59dd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59dd0.md)
- 新版 呼出元 1件 [`00bfd0b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfd/00bfd0b0.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfd10c",
      "incomplete_value": true,
      "site": "00bfd110",
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfd070",
      "incomplete_value": true,
      "site": "00bfd074",
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
                "const:b10:8"
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
      "00bfd10c",
      "READ",
      [
        "storage",
        "00c9bb10",
        null,
        "pointer"
      ]
    ],
    [
      "00bfd10c",
      "PARAM",
      [
        "storage",
        "01127b78",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bfd10c",
      "READ",
      [
        "storage",
        "00c9bbe0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfd10c",
      "PARAM",
      [
        "storage",
        "01127c78",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfd074 ["INT_ADD", "register:40f0:8", ["const:bfd074:8", "const:4:8"]]
- 00bfd074 ["CALL", null, ["callee:00c58350:8"]]
+ 00bfd110 ["INT_ADD", "register:40f0:8", ["const:bfd110:8", "const:4:8"]]
+ 00bfd110 ["CALL", null, ["callee:00c58350:8"]]
- 00bfd048 ["INT_ADD", "register:40f0:8", ["const:bfd048:8", "const:4:8"]]
- 00bfd048 ["CALL", null, ["callee:00c59ea0:8"]]
+ 00bfd0e4 ["INT_ADD", "register:40f0:8", ["const:bfd0e4:8", "const:4:8"]]
+ 00bfd0e4 ["CALL", null, ["callee:00c59ea0:8"]]
- 00bfd064 ["INT_ADD", "register:40f0:8", ["const:bfd064:8", "const:4:8"]]
- 00bfd064 ["CALL", null, ["callee:00c58340:8"]]
+ 00bfd100 ["INT_ADD", "register:40f0:8", ["const:bfd100:8", "const:4:8"]]
+ 00bfd100 ["CALL", null, ["callee:00c58340:8"]]
~~~


<a id="compare-1f3537eea315ce3122bedfa645f7ca31"></a>

### [`00bfd154`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfd/00bfd154.md) → [`00bfd1f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfd/00bfd1f0.md) FUN_00bfd1f0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00bfd14c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfd/00bfd14c.md) · 呼出先 5件 [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c59dd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59dd0.md)
- 新版 呼出元 1件 [`00bfd1e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfd/00bfd1e8.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfd244",
      "incomplete_value": true,
      "site": "00bfd248",
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfd1a8",
      "incomplete_value": true,
      "site": "00bfd1ac",
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
                "const:b10:8"
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
      "00bfd244",
      "READ",
      [
        "storage",
        "00c9bb10",
        null,
        "pointer"
      ]
    ],
    [
      "00bfd244",
      "PARAM",
      [
        "storage",
        "01127b78",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bfd244",
      "READ",
      [
        "storage",
        "00c9bbe0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfd244",
      "PARAM",
      [
        "storage",
        "01127c78",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfd1ac ["INT_ADD", "register:40f0:8", ["const:bfd1ac:8", "const:4:8"]]
- 00bfd1ac ["CALL", null, ["callee:00c58350:8"]]
+ 00bfd248 ["INT_ADD", "register:40f0:8", ["const:bfd248:8", "const:4:8"]]
+ 00bfd248 ["CALL", null, ["callee:00c58350:8"]]
- 00bfd180 ["INT_ADD", "register:40f0:8", ["const:bfd180:8", "const:4:8"]]
- 00bfd180 ["CALL", null, ["callee:00c59ea0:8"]]
+ 00bfd21c ["INT_ADD", "register:40f0:8", ["const:bfd21c:8", "const:4:8"]]
+ 00bfd21c ["CALL", null, ["callee:00c59ea0:8"]]
- 00bfd19c ["INT_ADD", "register:40f0:8", ["const:bfd19c:8", "const:4:8"]]
- 00bfd19c ["CALL", null, ["callee:00c58340:8"]]
+ 00bfd238 ["INT_ADD", "register:40f0:8", ["const:bfd238:8", "const:4:8"]]
+ 00bfd238 ["CALL", null, ["callee:00c58340:8"]]
~~~


<a id="compare-cf46596cab262fc29ed4b1d9524e3627"></a>

### [`00bfd28c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfd/00bfd28c.md) → [`00bfd328`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfd/00bfd328.md) FUN_00bfd328

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00bfd284`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfd/00bfd284.md) · 呼出先 5件 [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c59dd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59dd0.md)
- 新版 呼出元 1件 [`00bfd320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfd/00bfd320.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfd37c",
      "incomplete_value": true,
      "site": "00bfd380",
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfd2e0",
      "incomplete_value": true,
      "site": "00bfd2e4",
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
                "const:b10:8"
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
      "00bfd37c",
      "READ",
      [
        "storage",
        "00c9bb10",
        null,
        "pointer"
      ]
    ],
    [
      "00bfd37c",
      "PARAM",
      [
        "storage",
        "01127b78",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bfd37c",
      "READ",
      [
        "storage",
        "00c9bbe0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfd37c",
      "PARAM",
      [
        "storage",
        "01127c78",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfd2e4 ["INT_ADD", "register:40f0:8", ["const:bfd2e4:8", "const:4:8"]]
- 00bfd2e4 ["CALL", null, ["callee:00c58350:8"]]
+ 00bfd380 ["INT_ADD", "register:40f0:8", ["const:bfd380:8", "const:4:8"]]
+ 00bfd380 ["CALL", null, ["callee:00c58350:8"]]
- 00bfd2b8 ["INT_ADD", "register:40f0:8", ["const:bfd2b8:8", "const:4:8"]]
- 00bfd2b8 ["CALL", null, ["callee:00c59ea0:8"]]
+ 00bfd354 ["INT_ADD", "register:40f0:8", ["const:bfd354:8", "const:4:8"]]
+ 00bfd354 ["CALL", null, ["callee:00c59ea0:8"]]
- 00bfd2d4 ["INT_ADD", "register:40f0:8", ["const:bfd2d4:8", "const:4:8"]]
- 00bfd2d4 ["CALL", null, ["callee:00c58340:8"]]
+ 00bfd370 ["INT_ADD", "register:40f0:8", ["const:bfd370:8", "const:4:8"]]
+ 00bfd370 ["CALL", null, ["callee:00c58340:8"]]
~~~


<a id="compare-c60ba3e91bf4dbf6ba0e3bca50f2c1b8"></a>

### [`00bfd3c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfd/00bfd3c4.md) → [`00bfd460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfd/00bfd460.md) FUN_00bfd460

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00bfd3bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfd/00bfd3bc.md) · 呼出先 5件 [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c59dd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59dd0.md)
- 新版 呼出元 1件 [`00bfd458`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfd/00bfd458.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfd4b4",
      "incomplete_value": true,
      "site": "00bfd4b8",
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfd418",
      "incomplete_value": true,
      "site": "00bfd41c",
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
                "const:b10:8"
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
      "00bfd4b4",
      "READ",
      [
        "storage",
        "00c9bb10",
        null,
        "pointer"
      ]
    ],
    [
      "00bfd4b4",
      "PARAM",
      [
        "storage",
        "01127b78",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bfd4b4",
      "READ",
      [
        "storage",
        "00c9bbe0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfd4b4",
      "PARAM",
      [
        "storage",
        "01127c78",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfd41c ["INT_ADD", "register:40f0:8", ["const:bfd41c:8", "const:4:8"]]
- 00bfd41c ["CALL", null, ["callee:00c58350:8"]]
+ 00bfd4b8 ["INT_ADD", "register:40f0:8", ["const:bfd4b8:8", "const:4:8"]]
+ 00bfd4b8 ["CALL", null, ["callee:00c58350:8"]]
- 00bfd3f0 ["INT_ADD", "register:40f0:8", ["const:bfd3f0:8", "const:4:8"]]
- 00bfd3f0 ["CALL", null, ["callee:00c59ea0:8"]]
+ 00bfd48c ["INT_ADD", "register:40f0:8", ["const:bfd48c:8", "const:4:8"]]
+ 00bfd48c ["CALL", null, ["callee:00c59ea0:8"]]
- 00bfd40c ["INT_ADD", "register:40f0:8", ["const:bfd40c:8", "const:4:8"]]
- 00bfd40c ["CALL", null, ["callee:00c58340:8"]]
+ 00bfd4a8 ["INT_ADD", "register:40f0:8", ["const:bfd4a8:8", "const:4:8"]]
+ 00bfd4a8 ["CALL", null, ["callee:00c58340:8"]]
~~~


<a id="compare-7b98faf974cd72847cef464e66a6ba62"></a>

### [`00bfd4fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfd/00bfd4fc.md) → [`00bfd598`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfd/00bfd598.md) FUN_00bfd598

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00bfd4f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfd/00bfd4f4.md) · 呼出先 5件 [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c59dd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59dd0.md)
- 新版 呼出元 1件 [`00bfd590`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfd/00bfd590.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfd5ec",
      "incomplete_value": true,
      "site": "00bfd5f0",
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfd550",
      "incomplete_value": true,
      "site": "00bfd554",
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
                "const:b10:8"
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
      "00bfd5ec",
      "READ",
      [
        "storage",
        "00c9bb10",
        null,
        "pointer"
      ]
    ],
    [
      "00bfd5ec",
      "PARAM",
      [
        "storage",
        "01127b78",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bfd5ec",
      "READ",
      [
        "storage",
        "00c9bbe0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfd5ec",
      "PARAM",
      [
        "storage",
        "01127c78",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfd554 ["INT_ADD", "register:40f0:8", ["const:bfd554:8", "const:4:8"]]
- 00bfd554 ["CALL", null, ["callee:00c58350:8"]]
+ 00bfd5f0 ["INT_ADD", "register:40f0:8", ["const:bfd5f0:8", "const:4:8"]]
+ 00bfd5f0 ["CALL", null, ["callee:00c58350:8"]]
- 00bfd528 ["INT_ADD", "register:40f0:8", ["const:bfd528:8", "const:4:8"]]
- 00bfd528 ["CALL", null, ["callee:00c59ea0:8"]]
+ 00bfd5c4 ["INT_ADD", "register:40f0:8", ["const:bfd5c4:8", "const:4:8"]]
+ 00bfd5c4 ["CALL", null, ["callee:00c59ea0:8"]]
- 00bfd544 ["INT_ADD", "register:40f0:8", ["const:bfd544:8", "const:4:8"]]
- 00bfd544 ["CALL", null, ["callee:00c58340:8"]]
+ 00bfd5e0 ["INT_ADD", "register:40f0:8", ["const:bfd5e0:8", "const:4:8"]]
+ 00bfd5e0 ["CALL", null, ["callee:00c58340:8"]]
~~~


<a id="compare-ac25a85cb28f4f98b4e95b587c72d323"></a>

### [`00bfd780`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfd/00bfd780.md) → [`00bfd81c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfd/00bfd81c.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEE3getEPcl

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c5e370`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e370.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5e440`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e440.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.22% / 新版 97.22%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfd85c",
      "incomplete_value": true,
      "site": "00bfd860",
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
      "definition_site": "00bfd7c0",
      "incomplete_value": true,
      "site": "00bfd7c4",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bfd85c",
      "READ",
      [
        "storage",
        "00c9ac30",
        null,
        "pointer"
      ]
    ],
    [
      "00bfd85c",
      "PARAM",
      [
        "storage",
        "01127e18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bfd85c",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ],
    [
      "00bfd85c",
      "PARAM",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfd7c4 ["INT_ADD", "register:40f0:8", ["const:bfd7c4:8", "const:4:8"]]
- 00bfd7c4 ["CALL", null, ["callee:00c58350:8"]]
+ 00bfd860 ["INT_ADD", "register:40f0:8", ["const:bfd860:8", "const:4:8"]]
+ 00bfd860 ["CALL", null, ["callee:00c58350:8"]]
- 00bfd7b4 ["INT_ADD", "register:40f0:8", ["const:bfd7b4:8", "const:4:8"]]
- 00bfd7b4 ["CALL", null, ["callee:00c58340:8"]]
+ 00bfd850 ["INT_ADD", "register:40f0:8", ["const:bfd850:8", "const:4:8"]]
+ 00bfd850 ["CALL", null, ["callee:00c58340:8"]]
- 00bfd7c0 ["INT_ADD", "tmp:0:8", ["register:4008:8", "const:c30:8"]]
- 00bfd7c0 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bfd85c ["INT_ADD", "tmp:0:8", ["register:4008:8", "const:d00:8"]]
+ 00bfd85c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-a1b99f390e4d7a87650528f172798078"></a>

### [`00bfd9f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfd/00bfd9f8.md) → [`00bfda94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfd/00bfda94.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEE3getERNS_15basic_streambufIcS2_EE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c5e380`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e380.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5e450`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e450.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.88% / 新版 96.88%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfdacc",
      "incomplete_value": true,
      "site": "00bfdad0",
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
      "definition_site": "00bfda30",
      "incomplete_value": true,
      "site": "00bfda34",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bfdacc",
      "READ",
      [
        "storage",
        "00c9ac30",
        null,
        "pointer"
      ]
    ],
    [
      "00bfdacc",
      "PARAM",
      [
        "storage",
        "01127e18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bfdacc",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ],
    [
      "00bfdacc",
      "PARAM",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfda34 ["INT_ADD", "register:40f0:8", ["const:bfda34:8", "const:4:8"]]
- 00bfda34 ["CALL", null, ["callee:00c58350:8"]]
+ 00bfdad0 ["INT_ADD", "register:40f0:8", ["const:bfdad0:8", "const:4:8"]]
+ 00bfdad0 ["CALL", null, ["callee:00c58350:8"]]
- 00bfda24 ["INT_ADD", "register:40f0:8", ["const:bfda24:8", "const:4:8"]]
- 00bfda24 ["CALL", null, ["callee:00c58340:8"]]
+ 00bfdac0 ["INT_ADD", "register:40f0:8", ["const:bfdac0:8", "const:4:8"]]
+ 00bfdac0 ["CALL", null, ["callee:00c58340:8"]]
- 00bfda30 ["INT_ADD", "tmp:0:8", ["register:4008:8", "const:c30:8"]]
- 00bfda30 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bfdacc ["INT_ADD", "tmp:0:8", ["register:4008:8", "const:d00:8"]]
+ 00bfdacc ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-95c990e922c8b87a0911922bd8648247"></a>

### [`00bfdbfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfd/00bfdbfc.md) → [`00bfdc98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfd/00bfdc98.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEE7getlineEPcl

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c5e390`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e390.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5e460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e460.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.22% / 新版 97.22%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfdcd8",
      "incomplete_value": true,
      "site": "00bfdcdc",
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
      "definition_site": "00bfdc3c",
      "incomplete_value": true,
      "site": "00bfdc40",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bfdcd8",
      "READ",
      [
        "storage",
        "00c9ac30",
        null,
        "pointer"
      ]
    ],
    [
      "00bfdcd8",
      "PARAM",
      [
        "storage",
        "01127e18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bfdcd8",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ],
    [
      "00bfdcd8",
      "PARAM",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfdc40 ["INT_ADD", "register:40f0:8", ["const:bfdc40:8", "const:4:8"]]
- 00bfdc40 ["CALL", null, ["callee:00c58350:8"]]
+ 00bfdcdc ["INT_ADD", "register:40f0:8", ["const:bfdcdc:8", "const:4:8"]]
+ 00bfdcdc ["CALL", null, ["callee:00c58350:8"]]
- 00bfdc30 ["INT_ADD", "register:40f0:8", ["const:bfdc30:8", "const:4:8"]]
- 00bfdc30 ["CALL", null, ["callee:00c58340:8"]]
+ 00bfdccc ["INT_ADD", "register:40f0:8", ["const:bfdccc:8", "const:4:8"]]
+ 00bfdccc ["CALL", null, ["callee:00c58340:8"]]
- 00bfdc3c ["INT_ADD", "tmp:0:8", ["register:4008:8", "const:c30:8"]]
- 00bfdc3c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bfdcd8 ["INT_ADD", "tmp:0:8", ["register:4008:8", "const:d00:8"]]
+ 00bfdcd8 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-34dbe3b3ef2a7568affecc8c2d2b485a"></a>

### [`00bfe89c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfe/00bfe89c.md) → [`00bfe938`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfe/00bfe938.md) _ZNSt6__ndk113basic_ostreamIcNS_11char_traitsIcEEEC1EPNS_15basic_streambufIcS2_EE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c581e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c581e0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c582b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582b0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.27% / 新版 77.27%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bfe964",
      "incomplete_value": true,
      "site": "00bfe964",
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
      "definition_site": "00bfe8c8",
      "incomplete_value": true,
      "site": "00bfe8c8",
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
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bfe960",
      "incomplete_value": true,
      "site": "00bfe968",
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
            "const:18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfe8c4",
      "incomplete_value": true,
      "site": "00bfe8cc",
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
            "const:18:8"
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
      "00bfe954",
      "READ",
      [
        "storage",
        "00c9bb18",
        null,
        "pointer"
      ]
    ],
    [
      "00bfe964",
      "DATA",
      [
        "storage",
        "00c92e98",
        null,
        "pointer"
      ]
    ],
    [
      "00bfe968",
      "DATA",
      [
        "storage",
        "00c92e70",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bfe954",
      "READ",
      [
        "storage",
        "00c9bbe8",
        null,
        "pointer"
      ]
    ],
    [
      "00bfe964",
      "DATA",
      [
        "storage",
        "00c92f68",
        null,
        "pointer"
      ]
    ],
    [
      "00bfe968",
      "DATA",
      [
        "storage",
        "00c92f40",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfe8b8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:b18:8"]]
- 00bfe8b8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bfe954 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:be8:8"]]
+ 00bfe954 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bfe8d4 ["INT_ADD", "register:40f0:8", ["const:bfe8d4:8", "const:4:8"]]
- 00bfe8d4 ["CALL", null, ["callee:00c582b0:8"]]
+ 00bfe970 ["INT_ADD", "register:40f0:8", ["const:bfe970:8", "const:4:8"]]
+ 00bfe970 ["CALL", null, ["callee:00c582b0:8"]]
~~~


<a id="compare-5b686c5e65f19d7d579faa2ab51e7928"></a>

### [`00bfeafc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfe/00bfeafc.md) → [`00bfeb98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfe/00bfeb98.md) _ZNSt6__ndk113basic_ostreamIcNS_11char_traitsIcEEElsEb

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c58260`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58260.md) [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c58330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58330.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.33% / 新版 97.33%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfebec",
      "incomplete_value": true,
      "site": "00bfebf0",
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
                "const:908:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfeb50",
      "incomplete_value": true,
      "site": "00bfeb54",
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
                "const:838:8"
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
      "definition_site": "00bfec34",
      "incomplete_value": true,
      "site": "00bfec38",
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
      "definition_site": "00bfeb98",
      "incomplete_value": true,
      "site": "00bfeb9c",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bfebec",
      "READ",
      [
        "storage",
        "00c9b838",
        null,
        "pointer"
      ]
    ],
    [
      "00bfebec",
      "PARAM",
      [
        "storage",
        "01127b98",
        "std::__ndk1::num_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00bfec34",
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
      "00bfebec",
      "READ",
      [
        "storage",
        "00c9b908",
        null,
        "pointer"
      ]
    ],
    [
      "00bfebec",
      "PARAM",
      [
        "storage",
        "01127c98",
        "std::__ndk1::num_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00bfec34",
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
- 00bfeb54 ["INT_ADD", "register:40f0:8", ["const:bfeb54:8", "const:4:8"]]
- 00bfeb54 ["CALL", null, ["callee:00c58350:8"]]
+ 00bfebf0 ["INT_ADD", "register:40f0:8", ["const:bfebf0:8", "const:4:8"]]
+ 00bfebf0 ["CALL", null, ["callee:00c58350:8"]]
- 00bfeb9c ["INT_ADD", "register:40f0:8", ["const:bfeb9c:8", "const:4:8"]]
- 00bfeb9c ["CALL", null, ["callee:00c58350:8"]]
+ 00bfec38 ["INT_ADD", "register:40f0:8", ["const:bfec38:8", "const:4:8"]]
+ 00bfec38 ["CALL", null, ["callee:00c58350:8"]]
- 00bfeb28 ["INT_ADD", "register:40f0:8", ["const:bfeb28:8", "const:4:8"]]
- 00bfeb28 ["CALL", null, ["callee:00c58330:8"]]
+ 00bfebc4 ["INT_ADD", "register:40f0:8", ["const:bfebc4:8", "const:4:8"]]
+ 00bfebc4 ["CALL", null, ["callee:00c58330:8"]]
~~~


<a id="compare-79d25039201b262094ffe76401688478"></a>

### [`00bfec8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfe/00bfec8c.md) → [`00bfed28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfe/00bfed28.md) _ZNSt6__ndk113basic_ostreamIcNS_11char_traitsIcEEElsEx

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c58260`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58260.md) [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c58330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58330.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.33% / 新版 97.33%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfed7c",
      "incomplete_value": true,
      "site": "00bfed80",
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
                "const:908:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfece0",
      "incomplete_value": true,
      "site": "00bfece4",
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
                "const:838:8"
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
      "definition_site": "00bfedc4",
      "incomplete_value": true,
      "site": "00bfedc8",
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
      "definition_site": "00bfed28",
      "incomplete_value": true,
      "site": "00bfed2c",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bfed7c",
      "READ",
      [
        "storage",
        "00c9b838",
        null,
        "pointer"
      ]
    ],
    [
      "00bfed7c",
      "PARAM",
      [
        "storage",
        "01127b98",
        "std::__ndk1::num_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00bfedc4",
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
      "00bfed7c",
      "READ",
      [
        "storage",
        "00c9b908",
        null,
        "pointer"
      ]
    ],
    [
      "00bfed7c",
      "PARAM",
      [
        "storage",
        "01127c98",
        "std::__ndk1::num_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00bfedc4",
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
- 00bfece4 ["INT_ADD", "register:40f0:8", ["const:bfece4:8", "const:4:8"]]
- 00bfece4 ["CALL", null, ["callee:00c58350:8"]]
+ 00bfed80 ["INT_ADD", "register:40f0:8", ["const:bfed80:8", "const:4:8"]]
+ 00bfed80 ["CALL", null, ["callee:00c58350:8"]]
- 00bfed2c ["INT_ADD", "register:40f0:8", ["const:bfed2c:8", "const:4:8"]]
- 00bfed2c ["CALL", null, ["callee:00c58350:8"]]
+ 00bfedc8 ["INT_ADD", "register:40f0:8", ["const:bfedc8:8", "const:4:8"]]
+ 00bfedc8 ["CALL", null, ["callee:00c58350:8"]]
- 00bfecb8 ["INT_ADD", "register:40f0:8", ["const:bfecb8:8", "const:4:8"]]
- 00bfecb8 ["CALL", null, ["callee:00c58330:8"]]
+ 00bfed54 ["INT_ADD", "register:40f0:8", ["const:bfed54:8", "const:4:8"]]
+ 00bfed54 ["CALL", null, ["callee:00c58330:8"]]
~~~


<a id="compare-25bdfe7d399e1a7a89ba22023c70623d"></a>

### [`00bfee1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfe/00bfee1c.md) → [`00bfeeb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfe/00bfeeb8.md) _ZNSt6__ndk113basic_ostreamIcNS_11char_traitsIcEEElsEy

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c58260`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58260.md) [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c58330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58330.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.33% / 新版 97.33%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfef0c",
      "incomplete_value": true,
      "site": "00bfef10",
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
                "const:908:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfee70",
      "incomplete_value": true,
      "site": "00bfee74",
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
                "const:838:8"
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
      "definition_site": "00bfef54",
      "incomplete_value": true,
      "site": "00bfef58",
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
      "definition_site": "00bfeeb8",
      "incomplete_value": true,
      "site": "00bfeebc",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bfef0c",
      "READ",
      [
        "storage",
        "00c9b838",
        null,
        "pointer"
      ]
    ],
    [
      "00bfef0c",
      "PARAM",
      [
        "storage",
        "01127b98",
        "std::__ndk1::num_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00bfef54",
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
      "00bfef0c",
      "READ",
      [
        "storage",
        "00c9b908",
        null,
        "pointer"
      ]
    ],
    [
      "00bfef0c",
      "PARAM",
      [
        "storage",
        "01127c98",
        "std::__ndk1::num_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00bfef54",
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
- 00bfee74 ["INT_ADD", "register:40f0:8", ["const:bfee74:8", "const:4:8"]]
- 00bfee74 ["CALL", null, ["callee:00c58350:8"]]
+ 00bfef10 ["INT_ADD", "register:40f0:8", ["const:bfef10:8", "const:4:8"]]
+ 00bfef10 ["CALL", null, ["callee:00c58350:8"]]
- 00bfeebc ["INT_ADD", "register:40f0:8", ["const:bfeebc:8", "const:4:8"]]
- 00bfeebc ["CALL", null, ["callee:00c58350:8"]]
+ 00bfef58 ["INT_ADD", "register:40f0:8", ["const:bfef58:8", "const:4:8"]]
+ 00bfef58 ["CALL", null, ["callee:00c58350:8"]]
- 00bfee48 ["INT_ADD", "register:40f0:8", ["const:bfee48:8", "const:4:8"]]
- 00bfee48 ["CALL", null, ["callee:00c58330:8"]]
+ 00bfeee4 ["INT_ADD", "register:40f0:8", ["const:bfeee4:8", "const:4:8"]]
+ 00bfeee4 ["CALL", null, ["callee:00c58330:8"]]
~~~


<a id="compare-b4ec2fa6ccef6d7c1c2dd15897ea49c2"></a>

### [`00bfefac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfe/00bfefac.md) → [`00bff048`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bff/00bff048.md) _ZNSt6__ndk113basic_ostreamIcNS_11char_traitsIcEEElsEf

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c58260`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58260.md) [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c58330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58330.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.40% / 新版 97.40%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bff0a0",
      "incomplete_value": true,
      "site": "00bff0a4",
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
                "const:908:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bff004",
      "incomplete_value": true,
      "site": "00bff008",
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
                "const:838:8"
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
      "definition_site": "00bff0e8",
      "incomplete_value": true,
      "site": "00bff0ec",
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
      "definition_site": "00bff04c",
      "incomplete_value": true,
      "site": "00bff050",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bff0a0",
      "READ",
      [
        "storage",
        "00c9b838",
        null,
        "pointer"
      ]
    ],
    [
      "00bff0a0",
      "PARAM",
      [
        "storage",
        "01127b98",
        "std::__ndk1::num_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00bff0e8",
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
      "00bff0a0",
      "READ",
      [
        "storage",
        "00c9b908",
        null,
        "pointer"
      ]
    ],
    [
      "00bff0a0",
      "PARAM",
      [
        "storage",
        "01127c98",
        "std::__ndk1::num_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00bff0e8",
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
- 00bff008 ["INT_ADD", "register:40f0:8", ["const:bff008:8", "const:4:8"]]
- 00bff008 ["CALL", null, ["callee:00c58350:8"]]
+ 00bff0a4 ["INT_ADD", "register:40f0:8", ["const:bff0a4:8", "const:4:8"]]
+ 00bff0a4 ["CALL", null, ["callee:00c58350:8"]]
- 00bff050 ["INT_ADD", "register:40f0:8", ["const:bff050:8", "const:4:8"]]
- 00bff050 ["CALL", null, ["callee:00c58350:8"]]
+ 00bff0ec ["INT_ADD", "register:40f0:8", ["const:bff0ec:8", "const:4:8"]]
+ 00bff0ec ["CALL", null, ["callee:00c58350:8"]]
- 00bfefdc ["INT_ADD", "register:40f0:8", ["const:bfefdc:8", "const:4:8"]]
- 00bfefdc ["CALL", null, ["callee:00c58330:8"]]
+ 00bff078 ["INT_ADD", "register:40f0:8", ["const:bff078:8", "const:4:8"]]
+ 00bff078 ["CALL", null, ["callee:00c58330:8"]]
~~~


<a id="compare-d89971dc75ca35257d5d92631cfa07df"></a>

### [`00bff144`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bff/00bff144.md) → [`00bff1e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bff/00bff1e0.md) _ZNSt6__ndk113basic_ostreamIcNS_11char_traitsIcEEElsEe

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c58260`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58260.md) [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c58330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58330.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.33% / 新版 97.33%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bff234",
      "incomplete_value": true,
      "site": "00bff238",
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
                "const:908:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bff198",
      "incomplete_value": true,
      "site": "00bff19c",
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
                "const:838:8"
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
      "definition_site": "00bff27c",
      "incomplete_value": true,
      "site": "00bff280",
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
      "definition_site": "00bff1e0",
      "incomplete_value": true,
      "site": "00bff1e4",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bff234",
      "READ",
      [
        "storage",
        "00c9b838",
        null,
        "pointer"
      ]
    ],
    [
      "00bff234",
      "PARAM",
      [
        "storage",
        "01127b98",
        "std::__ndk1::num_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00bff27c",
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
      "00bff234",
      "READ",
      [
        "storage",
        "00c9b908",
        null,
        "pointer"
      ]
    ],
    [
      "00bff234",
      "PARAM",
      [
        "storage",
        "01127c98",
        "std::__ndk1::num_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00bff27c",
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
- 00bff19c ["INT_ADD", "register:40f0:8", ["const:bff19c:8", "const:4:8"]]
- 00bff19c ["CALL", null, ["callee:00c58350:8"]]
+ 00bff238 ["INT_ADD", "register:40f0:8", ["const:bff238:8", "const:4:8"]]
+ 00bff238 ["CALL", null, ["callee:00c58350:8"]]
- 00bff1e4 ["INT_ADD", "register:40f0:8", ["const:bff1e4:8", "const:4:8"]]
- 00bff1e4 ["CALL", null, ["callee:00c58350:8"]]
+ 00bff280 ["INT_ADD", "register:40f0:8", ["const:bff280:8", "const:4:8"]]
+ 00bff280 ["CALL", null, ["callee:00c58350:8"]]
- 00bff170 ["INT_ADD", "register:40f0:8", ["const:bff170:8", "const:4:8"]]
- 00bff170 ["CALL", null, ["callee:00c58330:8"]]
+ 00bff20c ["INT_ADD", "register:40f0:8", ["const:bff20c:8", "const:4:8"]]
+ 00bff20c ["CALL", null, ["callee:00c58330:8"]]
~~~


<a id="compare-9824c68297cb2e6f24c830abe5edb973"></a>

### [`00bff2d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bff/00bff2d4.md) → [`00bff370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bff/00bff370.md) _ZNSt6__ndk113basic_ostreamIcNS_11char_traitsIcEEElsEPKv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c58260`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58260.md) [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c58330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58330.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.33% / 新版 97.33%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bff3c4",
      "incomplete_value": true,
      "site": "00bff3c8",
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
                "const:908:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bff328",
      "incomplete_value": true,
      "site": "00bff32c",
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
                "const:838:8"
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
      "definition_site": "00bff40c",
      "incomplete_value": true,
      "site": "00bff410",
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
      "definition_site": "00bff370",
      "incomplete_value": true,
      "site": "00bff374",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bff3c4",
      "READ",
      [
        "storage",
        "00c9b838",
        null,
        "pointer"
      ]
    ],
    [
      "00bff3c4",
      "PARAM",
      [
        "storage",
        "01127b98",
        "std::__ndk1::num_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00bff40c",
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
      "00bff3c4",
      "READ",
      [
        "storage",
        "00c9b908",
        null,
        "pointer"
      ]
    ],
    [
      "00bff3c4",
      "PARAM",
      [
        "storage",
        "01127c98",
        "std::__ndk1::num_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00bff40c",
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
- 00bff32c ["INT_ADD", "register:40f0:8", ["const:bff32c:8", "const:4:8"]]
- 00bff32c ["CALL", null, ["callee:00c58350:8"]]
+ 00bff3c8 ["INT_ADD", "register:40f0:8", ["const:bff3c8:8", "const:4:8"]]
+ 00bff3c8 ["CALL", null, ["callee:00c58350:8"]]
- 00bff374 ["INT_ADD", "register:40f0:8", ["const:bff374:8", "const:4:8"]]
- 00bff374 ["CALL", null, ["callee:00c58350:8"]]
+ 00bff410 ["INT_ADD", "register:40f0:8", ["const:bff410:8", "const:4:8"]]
+ 00bff410 ["CALL", null, ["callee:00c58350:8"]]
- 00bff300 ["INT_ADD", "register:40f0:8", ["const:bff300:8", "const:4:8"]]
- 00bff300 ["CALL", null, ["callee:00c58330:8"]]
+ 00bff39c ["INT_ADD", "register:40f0:8", ["const:bff39c:8", "const:4:8"]]
+ 00bff39c ["CALL", null, ["callee:00c58330:8"]]
~~~


<a id="compare-8dc1322d82e00e69420bc641780d5ab7"></a>

### [`00bff7e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bff/00bff7e4.md) → [`00bff880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bff/00bff880.md) _ZNSt6__ndk114basic_iostreamIcNS_11char_traitsIcEEEC1EPNS_15basic_streambufIcS2_EE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c581e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c581e0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c582b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582b0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 62.07% / 新版 62.07%

優先判定に残った影響 `store_value` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bff8ac",
      "incomplete_value": true,
      "site": "00bff8ac",
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
      "definition_site": "00bff810",
      "incomplete_value": true,
      "site": "00bff810",
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
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bff8b0",
      "incomplete_value": true,
      "site": "00bff8b0",
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
            "const:18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bff814",
      "incomplete_value": true,
      "site": "00bff814",
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
            "const:18:8"
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
      "definition_site": "00bff8d0",
      "incomplete_value": true,
      "site": "00bff8dc",
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
            "const:18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bff834",
      "incomplete_value": true,
      "site": "00bff840",
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
            "const:18:8"
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
      "00bff89c",
      "READ",
      [
        "storage",
        "00c9bb20",
        null,
        "pointer"
      ]
    ],
    [
      "00bff8ac",
      "DATA",
      [
        "storage",
        "00c93358",
        null,
        "undefined1[80]"
      ]
    ],
    [
      "00bff8b0",
      "DATA",
      [
        "storage",
        "00c93330",
        null,
        "undefined1[80]"
      ]
    ]
  ],
  "added": [
    [
      "00bff89c",
      "READ",
      [
        "storage",
        "00c9bbf0",
        null,
        "pointer"
      ]
    ],
    [
      "00bff8ac",
      "DATA",
      [
        "storage",
        "00c93428",
        null,
        "undefined1[80]"
      ]
    ],
    [
      "00bff8b0",
      "DATA",
      [
        "storage",
        "00c93400",
        null,
        "undefined1[80]"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bff800 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:b20:8"]]
- 00bff800 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bff89c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:bf0:8"]]
+ 00bff89c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bff81c ["INT_ADD", "register:40f0:8", ["const:bff81c:8", "const:4:8"]]
- 00bff81c ["CALL", null, ["callee:00c582b0:8"]]
+ 00bff8b8 ["INT_ADD", "register:40f0:8", ["const:bff8b8:8", "const:4:8"]]
+ 00bff8b8 ["CALL", null, ["callee:00c582b0:8"]]
- 00bff828 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:b28:8"]]
- 00bff828 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bff8c4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:bf8:8"]]
+ 00bff8c4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-15fca007f9567e4b6452c573bda7d999"></a>

### [`00bffd08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bff/00bffd08.md) → [`00bffda4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bff/00bffda4.md) _ZNSt6__ndk115basic_streambufIwNS_11char_traitsIwEEEC2Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5e3e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e3e0.md) · 呼出先 1件 [`00c5a7a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a7a0.md)
- 新版 呼出元 1件 [`00c5e4b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4b0.md) · 呼出先 1件 [`00c5a870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a870.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 82.35% / 新版 82.35%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bffdc4",
      "incomplete_value": true,
      "site": "00bffdc4",
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
      "definition_site": "00bffd28",
      "incomplete_value": true,
      "site": "00bffd28",
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
      "00bffdbc",
      "READ",
      [
        "storage",
        "00c9bb30",
        null,
        "pointer"
      ]
    ],
    [
      "00bffdc4",
      "DATA",
      [
        "storage",
        "00c92f78",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bffdbc",
      "READ",
      [
        "storage",
        "00c9bc00",
        null,
        "pointer"
      ]
    ],
    [
      "00bffdc4",
      "DATA",
      [
        "storage",
        "00c93048",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bffd20 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:b30:8"]]
- 00bffd20 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bffdbc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:c00:8"]]
+ 00bffdbc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bffd2c ["INT_ADD", "register:40f0:8", ["const:bffd2c:8", "const:4:8"]]
- 00bffd2c ["CALL", null, ["callee:00c5a870:8"]]
+ 00bffdc8 ["INT_ADD", "register:40f0:8", ["const:bffdc8:8", "const:4:8"]]
+ 00bffdc8 ["CALL", null, ["callee:00c5a870:8"]]
~~~


<a id="compare-caa0a95c40298b14b0fe3f7eb2a931c1"></a>

### [`00bffd4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bff/00bffd4c.md) → [`00bffde8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bff/00bffde8.md) _ZNSt6__ndk115basic_streambufIwNS_11char_traitsIwEEEC1ERKS3_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5a7d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a7d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5a8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8a0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.36% / 新版 86.36%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bffe10",
      "incomplete_value": true,
      "site": "00bffe10",
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
      "definition_site": "00bffd74",
      "incomplete_value": true,
      "site": "00bffd74",
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
      "00bffe04",
      "READ",
      [
        "storage",
        "00c9bb30",
        null,
        "pointer"
      ]
    ],
    [
      "00bffe10",
      "DATA",
      [
        "storage",
        "00c92f78",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bffe04",
      "READ",
      [
        "storage",
        "00c9bc00",
        null,
        "pointer"
      ]
    ],
    [
      "00bffe10",
      "DATA",
      [
        "storage",
        "00c93048",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bffd68 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:b30:8"]]
- 00bffd68 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bffe04 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:c00:8"]]
+ 00bffe04 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bffd78 ["INT_ADD", "register:40f0:8", ["const:bffd78:8", "const:4:8"]]
- 00bffd78 ["CALL", null, ["callee:00c5a8a0:8"]]
+ 00bffe14 ["INT_ADD", "register:40f0:8", ["const:bffe14:8", "const:4:8"]]
+ 00bffe14 ["CALL", null, ["callee:00c5a8a0:8"]]
~~~


