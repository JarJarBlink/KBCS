# v16.0.1 → v16.0.2 · 最優先の変更候補 (30)

[一覧の目次](README.md)

<a id="compare-44979b1af39208a4997e0336259d234d"></a>

### [`00687d90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00687/00687d90.md) → [`00687dd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00687/00687dd0.md) FUN_00687dd0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`005cc6e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cc/005cc6e4.md) [`00687e60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00687/00687e60.md) · 呼出先 2件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`0049f3f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0049f/0049f3f0.md)
- 新版 呼出元 2件 [`005cc724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cc/005cc724.md) [`00687ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00687/00687ea0.md) · 呼出先 2件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`0049f430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f430.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.08% / 新版 98.08%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00687e78",
      "incomplete_value": false,
      "site": "00687e7c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a0000:8"
          ],
          [
            "leaf",
            "const:170:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00687e38",
      "incomplete_value": false,
      "site": "00687e3c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a0000:8"
          ],
          [
            "leaf",
            "const:1bd:8"
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
      "00687e78",
      "PARAM",
      [
        "storage",
        "002a01bd",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00687e78",
      "PARAM",
      [
        "storage",
        "002a0170",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00687e3c ["INT_ADD", "register:40f0:8", ["const:687e3c:8", "const:4:8"]]
- 00687e3c ["CALL", null, ["callee:00442970:8"]]
+ 00687e7c ["INT_ADD", "register:40f0:8", ["const:687e7c:8", "const:4:8"]]
+ 00687e7c ["CALL", null, ["callee:00442970:8"]]
- 00687e38 ["COPY", "tmp:0:8", ["const:1bd:8"]]
- 00687e38 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00687e38 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00687e38 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00687e78 ["COPY", "tmp:0:8", ["const:170:8"]]
+ 00687e78 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00687e78 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00687e78 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00687e5c ["INT_ADD", "register:40f0:8", ["const:687e5c:8", "const:4:8"]]
- 00687e5c ["CALL", null, ["callee:0049f430:8"]]
+ 00687e9c ["INT_ADD", "register:40f0:8", ["const:687e9c:8", "const:4:8"]]
+ 00687e9c ["CALL", null, ["callee:0049f430:8"]]
~~~


<a id="compare-3a387b203fb0f22ab670638bddec885e"></a>

### [`00688014`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00688/00688014.md) → [`00688054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00688/00688054.md) FUN_00688054

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`006877c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00687/006877c8.md) · 呼出先 5件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`00688178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00688/00688178.md) [`00691800`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00691/00691800.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00687808`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00687/00687808.md) · 呼出先 5件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`006881b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00688/006881b8.md) [`00691858`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00691/00691858.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.73% / 新版 98.73%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00688120",
      "incomplete_value": false,
      "site": "00688124",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a0000:8"
          ],
          [
            "leaf",
            "const:170:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006880e0",
      "incomplete_value": false,
      "site": "006880e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a0000:8"
          ],
          [
            "leaf",
            "const:1bd:8"
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
      "00688120",
      "PARAM",
      [
        "storage",
        "002a01bd",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00688120",
      "PARAM",
      [
        "storage",
        "002a0170",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 006880e4 ["INT_ADD", "register:40f0:8", ["const:6880e4:8", "const:4:8"]]
- 006880e4 ["CALL", null, ["callee:00442970:8"]]
+ 00688124 ["INT_ADD", "register:40f0:8", ["const:688124:8", "const:4:8"]]
+ 00688124 ["CALL", null, ["callee:00442970:8"]]
- 00688124 ["INT_ADD", "register:40f0:8", ["const:688124:8", "const:4:8"]]
- 00688124 ["CALL", null, ["callee:006881b8:8"]]
+ 00688164 ["INT_ADD", "register:40f0:8", ["const:688164:8", "const:4:8"]]
+ 00688164 ["CALL", null, ["callee:006881b8:8"]]
- 0068803c ["INT_ADD", "register:40f0:8", ["const:68803c:8", "const:4:8"]]
- 0068803c ["CALL", null, ["callee:00851550:8"]]
+ 0068807c ["INT_ADD", "register:40f0:8", ["const:68807c:8", "const:4:8"]]
+ 0068807c ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-ead43ba589c8a2d3282ad96a87db5f5f"></a>

### [`00688294`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00688/00688294.md) → [`006882d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00688/006882d4.md) FUN_006882d4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 10件 [`005fe66c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fe/005fe66c.md) [`00688458`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00688/00688458.md) [`00689624`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00689/00689624.md) [`00689954`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00689/00689954.md) [`00689980`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00689/00689980.md) · 呼出先 2件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 11件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`00688498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00688/00688498.md) [`00689664`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00689/00689664.md) [`00689994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00689/00689994.md) [`006899c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00689/006899c0.md) · 呼出先 2件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.96% / 新版 97.96%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00688378",
      "incomplete_value": false,
      "site": "0068837c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a0000:8"
          ],
          [
            "leaf",
            "const:170:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00688338",
      "incomplete_value": false,
      "site": "0068833c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a0000:8"
          ],
          [
            "leaf",
            "const:1bd:8"
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
      "00688378",
      "PARAM",
      [
        "storage",
        "002a01bd",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00688378",
      "PARAM",
      [
        "storage",
        "002a0170",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 006882fc ["INT_ADD", "register:40f0:8", ["const:6882fc:8", "const:4:8"]]
- 006882fc ["CALL", null, ["callee:00851550:8"]]
+ 0068833c ["INT_ADD", "register:40f0:8", ["const:68833c:8", "const:4:8"]]
+ 0068833c ["CALL", null, ["callee:00851550:8"]]
- 0068833c ["INT_ADD", "register:40f0:8", ["const:68833c:8", "const:4:8"]]
- 0068833c ["CALL", null, ["callee:00442970:8"]]
+ 0068837c ["INT_ADD", "register:40f0:8", ["const:68837c:8", "const:4:8"]]
+ 0068837c ["CALL", null, ["callee:00442970:8"]]
- 006882a4 ["INT_ADD", "register:40f0:8", ["const:6882a4:8", "const:4:8"]]
- 006882a4 ["CALL", null, ["callee:00851550:8"]]
+ 006882e4 ["INT_ADD", "register:40f0:8", ["const:6882e4:8", "const:4:8"]]
+ 006882e4 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-af8382a0cacb717074e0764e125dbdfb"></a>

### [`00688358`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00688/00688358.md) → [`00688398`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00688/00688398.md) FUN_00688398

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) · 呼出先 2件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 2件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.44% / 新版 98.44%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00688474",
      "incomplete_value": false,
      "site": "00688478",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a0000:8"
          ],
          [
            "leaf",
            "const:170:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00688434",
      "incomplete_value": false,
      "site": "00688438",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a0000:8"
          ],
          [
            "leaf",
            "const:1bd:8"
          ]
        ]
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
      "00688474",
      "PARAM",
      [
        "storage",
        "002a01bd",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00688474",
      "PARAM",
      [
        "storage",
        "002a0170",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00688438 ["INT_ADD", "register:40f0:8", ["const:688438:8", "const:4:8"]]
- 00688438 ["CALL", null, ["callee:00442970:8"]]
+ 00688478 ["INT_ADD", "register:40f0:8", ["const:688478:8", "const:4:8"]]
+ 00688478 ["CALL", null, ["callee:00442970:8"]]
- 0068838c ["INT_ADD", "register:40f0:8", ["const:68838c:8", "const:4:8"]]
- 0068838c ["CALL", null, ["callee:00851550:8"]]
+ 006883cc ["INT_ADD", "register:40f0:8", ["const:6883cc:8", "const:4:8"]]
+ 006883cc ["CALL", null, ["callee:00851550:8"]]
- 006883b0 ["INT_ADD", "register:40f0:8", ["const:6883b0:8", "const:4:8"]]
- 006883b0 ["CALL", null, ["callee:00851550:8"]]
+ 006883f0 ["INT_ADD", "register:40f0:8", ["const:6883f0:8", "const:4:8"]]
+ 006883f0 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-27486920cef9ee82a8a87bff7fc336de"></a>

### [`00688458`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00688/00688458.md) → [`00688498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00688/00688498.md) FUN_00688498

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00a75dac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a75/00a75dac.md) [`00a79c04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a79/00a79c04.md) · 呼出先 6件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`00688294`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00688/00688294.md) [`00688620`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00688/00688620.md) [`00691e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00691/00691e2c.md) [`00691e54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00691/00691e54.md)
- 新版 呼出元 2件 [`00a75e1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a75/00a75e1c.md) [`00a79c74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a79/00a79c74.md) · 呼出先 6件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`006882d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00688/006882d4.md) [`00688660`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00688/00688660.md) [`00691e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00691/00691e84.md) [`00691eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00691/00691eac.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.12% / 新版 99.12%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00688628",
      "incomplete_value": false,
      "site": "0068862c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a0000:8"
          ],
          [
            "leaf",
            "const:170:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006885e8",
      "incomplete_value": false,
      "site": "006885ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a0000:8"
          ],
          [
            "leaf",
            "const:1bd:8"
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
      "00688628",
      "PARAM",
      [
        "storage",
        "002a01bd",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00688628",
      "PARAM",
      [
        "storage",
        "002a0170",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 006885ec ["INT_ADD", "register:40f0:8", ["const:6885ec:8", "const:4:8"]]
- 006885ec ["CALL", null, ["callee:00442970:8"]]
+ 0068862c ["INT_ADD", "register:40f0:8", ["const:68862c:8", "const:4:8"]]
+ 0068862c ["CALL", null, ["callee:00442970:8"]]
- 006884c4 ["INT_ADD", "register:40f0:8", ["const:6884c4:8", "const:4:8"]]
- 006884c4 ["CALL", null, ["callee:00688660:8"]]
+ 00688504 ["INT_ADD", "register:40f0:8", ["const:688504:8", "const:4:8"]]
+ 00688504 ["CALL", null, ["callee:00688660:8"]]
- 006884cc ["INT_ADD", "register:40f0:8", ["const:6884cc:8", "const:4:8"]]
- 006884cc ["CALL", null, ["callee:00851550:8"]]
+ 0068850c ["INT_ADD", "register:40f0:8", ["const:68850c:8", "const:4:8"]]
+ 0068850c ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-8ca81a2d22236a8bfb55cd0bee3f45b0"></a>

### [`00689ab4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00689/00689ab4.md) → [`00689b0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00689/00689b0c.md) FUN_00689b0c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`005e7f3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7f3c.md) [`005e8060`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e8/005e8060.md) [`005f5790`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f5/005f5790.md) · 呼出先 2件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 3件 [`005e7f7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7f7c.md) [`005e80a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e8/005e80a0.md) [`005f57d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f5/005f57d0.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00689b8c",
      "incomplete_value": false,
      "site": "00689b90",
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
    "slot": 0
  }
]
~~~


~~~diff
- 00689ab8 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00689ab8 ["CBRANCH", null, ["local:b12:8", "tmp:0:1"]]
+ 00689b10 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00689b10 ["CBRANCH", null, ["local:b13:8", "tmp:0:1"]]
- 00689adc ["INT_EQUAL", "tmp:0:1", ["register:4048:8", "const:0:8"]]
- 00689adc ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
+ 00689b34 ["INT_EQUAL", "tmp:0:1", ["register:4048:8", "const:0:8"]]
+ 00689b34 ["CBRANCH", null, ["local:b12:8", "tmp:0:1"]]
- 00689b4c ["INT_ADD", "register:40f0:8", ["const:689b4c:8", "const:4:8"]]
- 00689b4c ["CALL", null, ["callee:00c57f60:8"]]
+ 00689ba4 ["INT_ADD", "register:40f0:8", ["const:689ba4:8", "const:4:8"]]
+ 00689ba4 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-f92884f477354ef8c275b8a1f579e5a2"></a>

### [`00689cbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00689/00689cbc.md) → [`00689d14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00689/00689d14.md) FUN_00689d14

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 6件 [`0070ea5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0070e/0070ea5c.md) [`00a4f3b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) [`00a51fc4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a51/00a51fc4.md) [`00afe40c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afe/00afe40c.md) [`00aff62c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aff/00aff62c.md) · 呼出先 7件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`0049f3f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0049f/0049f3f0.md) [`006877c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00687/006877c8.md) [`00691e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00691/00691e2c.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 6件 [`0070eab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00a52034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a52/00a52034.md) [`00afe4a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afe/00afe4a8.md) [`00aff6c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aff/00aff6c8.md) · 呼出先 7件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`0049f430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f430.md) [`00687808`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00687/00687808.md) [`00691e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00691/00691e84.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 94.79% / 新版 94.79%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00689e7c",
      "incomplete_value": false,
      "site": "00689e80",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a0000:8"
          ],
          [
            "leaf",
            "const:170:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00689e24",
      "incomplete_value": false,
      "site": "00689e28",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a0000:8"
          ],
          [
            "leaf",
            "const:1bd:8"
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
      "definition_site": "00689e2c",
      "incomplete_value": true,
      "site": "00689e30",
      "value": [
        "live",
        "register:40a0:8"
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
      "unmatched:00689d70",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00689db8"
      ]
    ],
    [
      "unmatched:00689de4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00689da0"
      ]
    ],
    [
      "unmatched:00689e00",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00689e8c"
      ]
    ]
  ],
  "added": [
    [
      "00689dc8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00689db8"
      ]
    ],
    [
      "00689e3c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00689da0"
      ]
    ],
    [
      "00689e58",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00689e8c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00689e28 ["INT_ADD", "register:40f0:8", ["const:689e28:8", "const:4:8"]]
- 00689e28 ["CALL", null, ["callee:00442970:8"]]
+ 00689e80 ["INT_ADD", "register:40f0:8", ["const:689e80:8", "const:4:8"]]
+ 00689e80 ["CALL", null, ["callee:00442970:8"]]
- 00689e30 ["INT_ADD", "register:40f0:8", ["const:689e30:8", "const:4:8"]]
- 00689e30 ["CALL", null, ["callee:00691e84:8"]]
+ 00689e88 ["INT_ADD", "register:40f0:8", ["const:689e88:8", "const:4:8"]]
+ 00689e88 ["CALL", null, ["callee:00691e84:8"]]
- 00689ce8 ["INT_ADD", "register:40f0:8", ["const:689ce8:8", "const:4:8"]]
- 00689ce8 ["CALL", null, ["callee:00851550:8"]]
+ 00689d40 ["INT_ADD", "register:40f0:8", ["const:689d40:8", "const:4:8"]]
+ 00689d40 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-c70831e307c8f6fdaa7055ecfc94cd3f"></a>

### [`00689e3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00689/00689e3c.md) → [`00689e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00689/00689e94.md) FUN_00689e94

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f3b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 7件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`0049f3f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0049f/0049f3f0.md) [`006877c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00687/006877c8.md) [`00691e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00691/00691e2c.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 7件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`0049f430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f430.md) [`00687808`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00687/00687808.md) [`00691e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00691/00691e84.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 82.22% / 新版 82.22%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 4件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00689fe4",
      "incomplete_value": false,
      "site": "00689fe8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a0000:8"
          ],
          [
            "leaf",
            "const:170:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00689f8c",
      "incomplete_value": false,
      "site": "00689f90",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a0000:8"
          ],
          [
            "leaf",
            "const:1bd:8"
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
      "unmatched:00689e3c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00689e40",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00689e44",
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
      "00689e94",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00689e98",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00689e9c",
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
- 00689f90 ["INT_ADD", "register:40f0:8", ["const:689f90:8", "const:4:8"]]
- 00689f90 ["CALL", null, ["callee:00442970:8"]]
+ 00689fe8 ["INT_ADD", "register:40f0:8", ["const:689fe8:8", "const:4:8"]]
+ 00689fe8 ["CALL", null, ["callee:00442970:8"]]
- 00689e3c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00689e3c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00689e3c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffc0:8"]]
- 00689e3c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00689e40 ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 00689e40 ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 00689e40 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00689e40 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-44b4ae8d5f860d2fc003f95a13698993"></a>

### [`00689fa4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00689/00689fa4.md) → [`00689ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00689/00689ffc.md) FUN_00689ffc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0070ea5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0070e/0070ea5c.md) [`007119f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00711/007119f0.md) · 呼出先 7件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`0049f3f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0049f/0049f3f0.md) [`006877c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00687/006877c8.md) [`00691e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00691/00691e2c.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 2件 [`0070eab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 7件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`0049f430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f430.md) [`00687808`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00687/00687808.md) [`00691e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00691/00691e84.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 99.21% / 新版 99.21%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0068a1d4",
      "incomplete_value": false,
      "site": "0068a1d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a0000:8"
          ],
          [
            "leaf",
            "const:170:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0068a17c",
      "incomplete_value": false,
      "site": "0068a180",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a0000:8"
          ],
          [
            "leaf",
            "const:1bd:8"
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
      "0068a1d4",
      "PARAM",
      [
        "storage",
        "002a01bd",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0068a1d4",
      "PARAM",
      [
        "storage",
        "002a0170",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0068a180 ["INT_ADD", "register:40f0:8", ["const:68a180:8", "const:4:8"]]
- 0068a180 ["CALL", null, ["callee:00442970:8"]]
+ 0068a1d8 ["INT_ADD", "register:40f0:8", ["const:68a1d8:8", "const:4:8"]]
+ 0068a1d8 ["CALL", null, ["callee:00442970:8"]]
- 00689fd4 ["INT_ADD", "register:40f0:8", ["const:689fd4:8", "const:4:8"]]
- 00689fd4 ["CALL", null, ["callee:00851550:8"]]
+ 0068a02c ["INT_ADD", "register:40f0:8", ["const:68a02c:8", "const:4:8"]]
+ 0068a02c ["CALL", null, ["callee:00851550:8"]]
- 00689fe8 ["INT_ADD", "register:40f0:8", ["const:689fe8:8", "const:4:8"]]
- 00689fe8 ["CALL", null, ["callee:00903f98:8"]]
+ 0068a040 ["INT_ADD", "register:40f0:8", ["const:68a040:8", "const:4:8"]]
+ 0068a040 ["CALL", null, ["callee:00903f98:8"]]
~~~


<a id="compare-2d09b1c7cd188b74d2f861d3742bb6ef"></a>

### [`0068a19c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0068a/0068a19c.md) → [`0068a1f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068a/0068a1f4.md) FUN_0068a1f4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0068a2b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0068a/0068a2b8.md) · 呼出先 1件 [`0048793c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048793c.md)
- 新版 呼出元 1件 [`0068a310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068a/0068a310.md) · 呼出先 1件 [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 95.77% / 新版 95.77%

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0068a260",
      "DATA",
      [
        "storage",
        "002c2200",
        null,
        null
      ]
    ],
    [
      "unmatched:0068a29c",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "0068a2bc"
      ]
    ]
  ],
  "added": [
    [
      "0068a2b8",
      "DATA",
      [
        "storage",
        "002c2240",
        null,
        null
      ]
    ],
    [
      "0068a30c",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "0068a2bc"
      ]
    ]
  ]
}
~~~


~~~diff
- 0068a1d8 ["INT_ADD", "register:40f0:8", ["const:68a1d8:8", "const:4:8"]]
- 0068a1d8 ["CALL", null, ["callee:0048797c:8"]]
+ 0068a230 ["INT_ADD", "register:40f0:8", ["const:68a230:8", "const:4:8"]]
+ 0068a230 ["CALL", null, ["callee:0048797c:8"]]
- 0068a200 ["INT_ADD", "register:40f0:8", ["const:68a200:8", "const:4:8"]]
- 0068a200 ["CALL", null, ["callee:0048797c:8"]]
+ 0068a258 ["INT_ADD", "register:40f0:8", ["const:68a258:8", "const:4:8"]]
+ 0068a258 ["CALL", null, ["callee:0048797c:8"]]
- 0068a210 ["INT_ADD", "register:40f0:8", ["const:68a210:8", "const:4:8"]]
- 0068a210 ["CALL", null, ["callee:0048797c:8"]]
+ 0068a268 ["INT_ADD", "register:40f0:8", ["const:68a268:8", "const:4:8"]]
+ 0068a268 ["CALL", null, ["callee:0048797c:8"]]
~~~


<a id="compare-2a30cdcfe92ced8e37c5c390fd6b7bee"></a>

### [`0068a2b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0068a/0068a2b8.md) → [`0068a310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068a/0068a310.md) FUN_0068a310

根拠 `similar_code_calls_and_string` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00b28f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b28/00b28f54.md) · 呼出先 16件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0048791c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048791c.md) [`00487e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487e20.md) [`00488658`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00488/00488658.md) [`0068a19c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0068a/0068a19c.md)
- 新版 呼出元 1件 [`00b28ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b28/00b28ff0.md) · 呼出先 16件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488698.md) [`0068a1f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068a/0068a1f4.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_destination, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 80.77% / 新版 80.77%

優先判定に残った影響 `call_argument_candidate` 15件, `store_destination` 1件, `store_value` 3件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 7件

アドレスに依存する影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0068a540",
      "incomplete_value": true,
      "site": "0068a54c",
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
                "const:d0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0068a4e8",
      "incomplete_value": true,
      "site": "0068a4f4",
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
                "const:90:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 34,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0068a5d8",
      "incomplete_value": true,
      "site": "0068a5dc",
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
      "definition_site": "0068a580",
      "incomplete_value": true,
      "site": "0068a584",
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
    "ordinal": 35,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0068a5d4",
      "incomplete_value": true,
      "site": "0068a5e0",
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
      "definition_site": "0068a57c",
      "incomplete_value": true,
      "site": "0068a588",
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
    "ordinal": 36,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0068a2ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "unmatched:0068a2f0",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00487e60"
      ]
    ],
    [
      "unmatched:0068a300",
      "DATA",
      [
        "storage",
        "00c64d38",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0068a344",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "0068a348",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00487e60"
      ]
    ],
    [
      "0068a358",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0068a3f0 ["INT_ADD", "register:40f0:8", ["const:68a3f0:8", "const:4:8"]]
- 0068a3f0 ["CALL", null, ["callee:0068a1f4:8"]]
+ 0068a448 ["INT_ADD", "register:40f0:8", ["const:68a448:8", "const:4:8"]]
+ 0068a448 ["CALL", null, ["callee:0068a1f4:8"]]
- 0068a448 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
- 0068a448 ["COPY", "tmp:1:8", ["register:4040:8"]]
- 0068a448 ["CBRANCH", null, ["const:2:4", "tmp:0:1"]]
- 0068a448 ["COPY", "tmp:1:8", ["register:40e0:8"]]
- 0068a460 ["INT_ADD", "register:40f0:8", ["const:68a460:8", "const:4:8"]]
- 0068a460 ["CALL", null, ["callee:00c57f60:8"]]
+ 0068a4b8 ["INT_ADD", "register:40f0:8", ["const:68a4b8:8", "const:4:8"]]
+ 0068a4b8 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-8db76571b7a794206a45b862505c4c96"></a>

### [`0068a6c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0068a/0068a6c4.md) → [`0068a71c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068a/0068a71c.md) FUN_0068a71c

根拠 `similar_code_calls_and_string` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0068bbc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0068b/0068bbc8.md) · 呼出先 11件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`00492e08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/00492e08.md) [`006924ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00692/006924ec.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`0068bc20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068b/0068bc20.md) · 呼出先 11件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00492e48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492e48.md) [`00692544`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00692/00692544.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 84.39% / 新版 84.39%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_branch_alignment` 4件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0068a7a0",
      "incomplete_value": false,
      "site": "0068a7a4",
      "value": [
        "leaf",
        "const:20:8"
      ]
    },
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0068a84c",
      "incomplete_value": false,
      "site": "0068a858",
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
            "const:67d:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0068a7f4",
      "incomplete_value": false,
      "site": "0068a800",
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
            "const:63d:8"
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
      "definition_site": "0068a824",
      "incomplete_value": true,
      "site": "0068a828",
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
      "unmatched:0068a744",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0068a914"
      ]
    ],
    [
      "unmatched:0068a7b4",
      "READ",
      [
        "storage",
        "002a2323",
        null,
        "string"
      ]
    ],
    [
      "unmatched:0068a7b8",
      "READ",
      [
        "storage",
        "002a232d",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0068a79c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0068a914"
      ]
    ],
    [
      "0068a80c",
      "READ",
      [
        "storage",
        "002a22d6",
        null,
        "string"
      ]
    ],
    [
      "0068a810",
      "READ",
      [
        "storage",
        "002a22e0",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0068a7a4 ["INT_ADD", "register:40f0:8", ["const:68a7a4:8", "const:4:8"]]
- 0068a7a4 ["CALL", null, ["callee:00c57f60:8"]]
+ 0068a7fc ["INT_ADD", "register:40f0:8", ["const:68a7fc:8", "const:4:8"]]
+ 0068a7fc ["CALL", null, ["callee:00c57f60:8"]]
- 0068a800 ["INT_ADD", "register:40f0:8", ["const:68a800:8", "const:4:8"]]
- 0068a800 ["CALL", null, ["callee:00c58030:8"]]
+ 0068a858 ["INT_ADD", "register:40f0:8", ["const:68a858:8", "const:4:8"]]
+ 0068a858 ["CALL", null, ["callee:00c58030:8"]]
- 0068a828 ["INT_ADD", "register:40f0:8", ["const:68a828:8", "const:4:8"]]
- 0068a828 ["CALL", null, ["callee:00c58040:8"]]
+ 0068a880 ["INT_ADD", "register:40f0:8", ["const:68a880:8", "const:4:8"]]
+ 0068a880 ["CALL", null, ["callee:00c58040:8"]]
~~~


<a id="compare-32925c0663bbf2dcbfcc8ab67b0ad06e"></a>

### [`0068aa88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0068a/0068aa88.md) → [`0068aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068a/0068aae0.md) FUN_0068aae0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0068bbc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0068b/0068bbc8.md) · 呼出先 21件 [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00859b4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00859/00859b4c.md) [`0085b2ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085b/0085b2ac.md) [`0085b2bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085b/0085b2bc.md)
- 新版 呼出元 1件 [`0068bc20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068b/0068bc20.md) · 呼出先 21件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00859ba4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859ba4.md) [`0085b304`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b304.md) [`0085b314`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b314.md)

変更の種類 branch_condition_or_target, call_argument_candidate, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 87.67% / 新版 87.67%

優先判定に残った影響 `call_argument_candidate` 4件, `store_value` 1件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0068abf8",
      "incomplete_value": true,
      "site": "0068abf8",
      "value": [
        "TRUNC",
        "4",
        [
          [
            "FLOAT_MULT",
            "8",
            [
              "INT2FLOAT",
              "LOAD"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0068aba0",
      "incomplete_value": true,
      "site": "0068aba0",
      "value": [
        "TRUNC",
        "4",
        [
          [
            "FLOAT_MULT",
            "8",
            [
              "INT2FLOAT",
              "LOAD"
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0068acf0",
      "incomplete_value": true,
      "site": "0068acfc",
      "value": [
        "live",
        "register:40a8:8"
      ]
    },
    "old": null,
    "ordinal": 25,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0068ae18",
      "incomplete_value": true,
      "site": "0068ae34",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "old": null,
    "ordinal": 47,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0068abe0",
      "READ",
      [
        "storage",
        "002c4158",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:0068ac24",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008b6eb0"
      ]
    ],
    [
      "unmatched:0068ac4c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008b6efc"
      ]
    ]
  ],
  "added": [
    [
      "0068abe0",
      "READ",
      [
        "storage",
        "002c4198",
        null,
        "undefined8"
      ]
    ],
    [
      "0068ac7c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008b6eb0"
      ]
    ],
    [
      "0068aca4",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008b6efc"
      ]
    ]
  ]
}
~~~


~~~diff
- 0068aca4 ["INT_ADD", "register:40f0:8", ["const:68aca4:8", "const:4:8"]]
- 0068aca4 ["CALL", null, ["callee:00a468e4:8"]]
+ 0068acfc ["INT_ADD", "register:40f0:8", ["const:68acfc:8", "const:4:8"]]
+ 0068acfc ["CALL", null, ["callee:00a468e4:8"]]
- 0068addc ["INT_ADD", "register:40f0:8", ["const:68addc:8", "const:4:8"]]
- 0068addc ["CALL", null, ["callee:00a52e70:8"]]
+ 0068ae34 ["INT_ADD", "register:40f0:8", ["const:68ae34:8", "const:4:8"]]
+ 0068ae34 ["CALL", null, ["callee:00a52e70:8"]]
- 0068aac8 ["INT_ADD", "register:40f0:8", ["const:68aac8:8", "const:4:8"]]
- 0068aac8 ["CALL", null, ["callee:00851550:8"]]
+ 0068ab20 ["INT_ADD", "register:40f0:8", ["const:68ab20:8", "const:4:8"]]
+ 0068ab20 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-9099165587eab186c7040c870d6678a6"></a>

### [`0068bad0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0068b/0068bad0.md) → [`0068bb28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068b/0068bb28.md) FUN_0068bb28

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 5件 [`00693388`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00693/00693388.md) [`00693458`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00693/00693458.md) [`00693cb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00693/00693cb8.md) [`00693d88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00693/00693d88.md) [`006944d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00694/006944d0.md) · 呼出先 6件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b6f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6f10.md) [`008b6f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6f40.md) [`008b7948`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b7948.md) [`008b79c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b79c8.md)
- 新版 呼出元 5件 [`006933e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00693/006933e0.md) [`006934b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00693/006934b0.md) [`00693d10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00693/00693d10.md) [`00693de0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00693/00693de0.md) [`00694528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00694/00694528.md) · 呼出先 6件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6f68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f68.md) [`008b6f98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f98.md) [`008b79a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b79a0.md) [`008b7a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a20.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 82.26% / 新版 82.26%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0068bb50",
      "incomplete_value": true,
      "site": "0068bb58",
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
            "register:40a0:8"
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
      "unmatched:0068bad0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0068bad4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0068bad8",
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
      "0068bb28",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0068bb2c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0068bb30",
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
- 0068bb58 ["INT_ADD", "register:40f0:8", ["const:68bb58:8", "const:4:8"]]
- 0068bb58 ["CALL", null, ["callee:008b7a20:8"]]
+ 0068bbb0 ["INT_ADD", "register:40f0:8", ["const:68bbb0:8", "const:4:8"]]
+ 0068bbb0 ["CALL", null, ["callee:008b7a20:8"]]
+ 0068bb58 ["INT_ADD", "register:40f0:8", ["const:68bb58:8", "const:4:8"]]
+ 0068bb58 ["CALL", null, ["callee:008b6f98:8"]]
- 0068bad0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0068bad0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0068bad0 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 0068bad0 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-e7659abc2ac9bbbd0821ba0f7670180c"></a>

### [`0068bbc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0068b/0068bbc8.md) → [`0068bc20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068b/0068bc20.md) FUN_0068bc20

根拠 `similar_code_calls_and_string` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0068d948`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0068d/0068d948.md) [`00a75dac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a75/00a75dac.md) · 呼出先 10件 [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`0068a6c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0068a/0068a6c4.md) [`0068aa88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0068a/0068aa88.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 2件 [`0068d9a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068d/0068d9a0.md) [`00a75e1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a75/00a75e1c.md) · 呼出先 10件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0068a71c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068a/0068a71c.md) [`0068aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068a/0068aae0.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 88.99% / 新版 88.99%

優先判定に残った影響 `call_argument_candidate` 2件, `store_condition` 1件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0068bd44",
      "incomplete_value": false,
      "site": "0068bd54",
      "value": [
        "leaf",
        "const:8:8"
      ]
    },
    "old": null,
    "ordinal": 11,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0068bd40",
      "incomplete_value": true,
      "site": "0068bd54",
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
    "old": null,
    "ordinal": 11,
    "slot": 3
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "0068bc78"
      ],
      [
        "FALL_THROUGH",
        "0068bcd0"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0068bccc",
      "incomplete_value": true,
      "site": "0068bd1c",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "4",
            [
              [
                "live",
                "register:4008:4"
              ],
              [
                "leaf",
                "const:1:4"
              ]
            ]
          ],
          [
            "leaf",
            "const:0:4"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0068bcc4",
      "value": [
        "live",
        "register:101:1"
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
      "unmatched:0068bc78",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0068bd80"
      ]
    ],
    [
      "unmatched:0068bc98",
      "READ",
      [
        "storage",
        "002a33fe",
        null,
        "string"
      ]
    ],
    [
      "unmatched:0068bc9c",
      "READ",
      [
        "storage",
        "002c2680",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0068bcd0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0068bd80"
      ]
    ],
    [
      "0068bcf0",
      "READ",
      [
        "storage",
        "002a33b1",
        null,
        "string"
      ]
    ],
    [
      "0068bcf4",
      "READ",
      [
        "storage",
        "002c26c0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0068bc6c ["INT_ADD", "register:40f0:8", ["const:68bc6c:8", "const:4:8"]]
- 0068bc6c ["CALL", null, ["callee:00c57f80:8"]]
+ 0068bcc4 ["INT_ADD", "register:40f0:8", ["const:68bcc4:8", "const:4:8"]]
+ 0068bcc4 ["CALL", null, ["callee:00c57f80:8"]]
- 0068bcfc ["INT_ADD", "register:40f0:8", ["const:68bcfc:8", "const:4:8"]]
- 0068bcfc ["CALL", null, ["callee:00a834bc:8"]]
+ 0068bd54 ["INT_ADD", "register:40f0:8", ["const:68bd54:8", "const:4:8"]]
+ 0068bd54 ["CALL", null, ["callee:00a834bc:8"]]
- 0068bd1c ["INT_ADD", "register:40f0:8", ["const:68bd1c:8", "const:4:8"]]
- 0068bd1c ["CALL", null, ["callee:00c57f80:8"]]
+ 0068bd74 ["INT_ADD", "register:40f0:8", ["const:68bd74:8", "const:4:8"]]
+ 0068bd74 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-2ebab1c08cfdaaf52c2c4824a9699047"></a>

### [`0068be10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0068b/0068be10.md) → [`0068be68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068b/0068be68.md) FUN_0068be68

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0068d990`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0068d/0068d990.md) [`00a79c04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a79/00a79c04.md) · 呼出先 21件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`00467db4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467db4.md) [`00467e9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467e9c.md) [`00467ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467ea4.md)
- 新版 呼出元 2件 [`0068d9e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068d/0068d9e8.md) [`00a79c74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a79/00a79c74.md) · 呼出先 21件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467df4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467df4.md) [`00467edc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467edc.md) [`00467ee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ee4.md)

変更の種類 branch_condition_or_target, call_argument_candidate, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 95.70% / 新版 95.70%

優先判定に残った影響 `call_argument_candidate` 62件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0068be9c",
      "incomplete_value": true,
      "site": "0068beb0",
      "value": [
        "live",
        "register:4098:8"
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
      "definition_site": "0068bea0",
      "incomplete_value": false,
      "site": "0068beb0",
      "value": [
        "leaf",
        "const:ff:8"
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
      "definition_site": "0068bea4",
      "incomplete_value": false,
      "site": "0068beb0",
      "value": [
        "leaf",
        "const:ff:8"
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
      "unmatched:0068be10",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "unmatched:0068be14",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:0068be18",
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
      "0068be68",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "0068be6c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "0068be70",
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
- 0068be58 ["INT_ADD", "register:40f0:8", ["const:68be58:8", "const:4:8"]]
- 0068be58 ["CALL", null, ["callee:00467b6c:8"]]
+ 0068beb0 ["INT_ADD", "register:40f0:8", ["const:68beb0:8", "const:4:8"]]
+ 0068beb0 ["CALL", null, ["callee:00467b6c:8"]]
- 0068beb0 ["INT_ADD", "register:40f0:8", ["const:68beb0:8", "const:4:8"]]
- 0068beb0 ["CALL", null, ["callee:00467b6c:8"]]
+ 0068bf08 ["INT_ADD", "register:40f0:8", ["const:68bf08:8", "const:4:8"]]
+ 0068bf08 ["CALL", null, ["callee:00467b6c:8"]]
- 0068bf70 ["INT_ADD", "register:40f0:8", ["const:68bf70:8", "const:4:8"]]
- 0068bf70 ["CALL", null, ["callee:00469c44:8"]]
+ 0068bfc8 ["INT_ADD", "register:40f0:8", ["const:68bfc8:8", "const:4:8"]]
+ 0068bfc8 ["CALL", null, ["callee:00469c44:8"]]
~~~


<a id="compare-214656b343b5ed975b5d20c9ccbbd79a"></a>

### [`0068c610`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0068c/0068c610.md) → [`0068c668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068c/0068c668.md) FUN_0068c668

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`006d9ae8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d9/006d9ae8.md) [`009a3338`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a3/009a3338.md) [`00aed3bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aed/00aed3bc.md) · 呼出先 38件 [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`00470994`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470994.md) [`00489f4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00489/00489f4c.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`005d8bc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d8/005d8bc8.md)
- 新版 呼出元 3件 [`006d9b40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d9/006d9b40.md) [`009a338c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a3/009a338c.md) [`00aed458`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aed/00aed458.md) · 呼出先 38件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`004709d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/004709d4.md) [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 58.16% / 新版 58.16%

優先判定に残った影響 `call_argument_candidate` 27件, `store_condition` 3件, `store_value` 3件, `unresolved_branch_alignment` 44件, `unresolved_call_alignment` 79件, `unresolved_store_alignment` 75件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0068c98c",
      "incomplete_value": false,
      "site": "0068c98c",
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
            "const:c20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0068c934",
      "incomplete_value": false,
      "site": "0068c934",
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
            "const:b50:8"
          ]
        ]
      ]
    },
    "ordinal": 39,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0068cbc0",
      "incomplete_value": false,
      "site": "0068cbc0",
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
            "const:d20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0068cb68",
      "incomplete_value": false,
      "site": "0068cb68",
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
            "const:c50:8"
          ]
        ]
      ]
    },
    "ordinal": 56,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0068d070",
      "incomplete_value": false,
      "site": "0068d070",
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
            "const:e20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0068d018",
      "incomplete_value": false,
      "site": "0068d018",
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
            "const:d50:8"
          ]
        ]
      ]
    },
    "ordinal": 91,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0068c6b0",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00a46950"
      ]
    ],
    [
      "unmatched:0068c6b4",
      "READ",
      [
        "storage",
        "Stack[-0x1d0]",
        null,
        null
      ]
    ],
    [
      "unmatched:0068c6f4",
      "DATA",
      [
        "storage",
        "00c74ad0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0068c708",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00a46950"
      ]
    ],
    [
      "0068c70c",
      "READ",
      [
        "storage",
        "Stack[-0x1d0]",
        null,
        null
      ]
    ],
    [
      "0068c74c",
      "DATA",
      [
        "storage",
        "00c74ba0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0068c868 ["INT_ADD", "register:40f0:8", ["const:68c868:8", "const:4:8"]]
- 0068c868 ["CALL", null, ["callee:00a46950:8"]]
+ 0068c8c0 ["INT_ADD", "register:40f0:8", ["const:68c8c0:8", "const:4:8"]]
+ 0068c8c0 ["CALL", null, ["callee:00a46950:8"]]
+ 0068c934 ["INT_ADD", "register:40f0:8", ["const:68c934:8", "const:4:8"]]
+ 0068c934 ["CALL", null, ["callee:00c53da0:8"]]
- 0068c988 ["COPY", "register:0:8", ["register:4040:8"]]
- 0068c988 ["INT_ADD", "register:40f0:8", ["const:68c988:8", "const:4:8"]]
- 0068c988 ["CALLIND", null, ["register:0:8"]]
+ 0068cb1c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0068cb1c ["INT_ADD", "register:40f0:8", ["const:68cb1c:8", "const:4:8"]]
+ 0068cb1c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-c7784a4d0e3b40e90fc0571956bc607f"></a>

### [`0068d990`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0068d/0068d990.md) → [`0068d9e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068d/0068d9e8.md) FUN_0068d9e8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`0099703c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00997/0099703c.md) [`00ae128c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ae1/00ae128c.md) · 呼出先 11件 [`0068be10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0068b/0068be10.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b6d9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6d9c.md) [`008b6ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6ea4.md) [`008b79c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b79c8.md)
- 新版 呼出元 2件 [`00997090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00997/00997090.md) [`00ae1328`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ae1/00ae1328.md) · 呼出先 11件 [`0068be68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068b/0068be68.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6df4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6df4.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md) [`008b7a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a20.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 79.66% / 新版 79.66%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0068daa8",
      "incomplete_value": true,
      "site": "0068daac",
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
      "definition_site": "0068da50",
      "incomplete_value": true,
      "site": "0068da54",
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
            "register:4040:8"
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
      "definition_site": "0068db54",
      "incomplete_value": true,
      "site": "0068db58",
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
      "definition_site": "0068dafc",
      "incomplete_value": true,
      "site": "0068db00",
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
            "register:4040:8"
          ]
        ]
      ]
    },
    "ordinal": 18,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0068db50",
      "incomplete_value": false,
      "site": "0068db58",
      "value": [
        "leaf",
        "const:259:8"
      ]
    },
    "old": null,
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
      "unmatched:0068d994",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:0068d998",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:0068d99c",
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
      "0068d9ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "0068d9f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "0068d9f4",
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
- 0068da54 ["INT_ADD", "register:40f0:8", ["const:68da54:8", "const:4:8"]]
- 0068da54 ["CALL", null, ["callee:008b7a20:8"]]
+ 0068daac ["INT_ADD", "register:40f0:8", ["const:68daac:8", "const:4:8"]]
+ 0068daac ["CALL", null, ["callee:008b7a20:8"]]
- 0068db00 ["INT_ADD", "register:40f0:8", ["const:68db00:8", "const:4:8"]]
- 0068db00 ["CALL", null, ["callee:008b7a20:8"]]
+ 0068db58 ["INT_ADD", "register:40f0:8", ["const:68db58:8", "const:4:8"]]
+ 0068db58 ["CALL", null, ["callee:008b7a20:8"]]
- 0068d990 ["INT_SUB", "register:8:8", ["register:8:8", "const:70:8"]]
~~~


<a id="compare-067488674a90ff396017ab1ffdb89f35"></a>

### [`0068db8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0068d/0068db8c.md) → [`0068dbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068d/0068dbe4.md) FUN_0068dbe4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`007595dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00759/007595dc.md) · 呼出先 8件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0049f3f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0049f/0049f3f0.md) [`005c3e7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c3/005c3e7c.md) [`006891c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00689/006891c8.md) [`00691e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00691/00691e2c.md)
- 新版 呼出元 1件 [`00759634`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00759/00759634.md) · 呼出先 8件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0049f430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f430.md) [`005c3ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3ebc.md) [`00689208`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00689/00689208.md) [`00691e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00691/00691e84.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 66.16% / 新版 66.16%

優先判定に残った影響 `return_value_candidate` 1件, `unresolved_branch_alignment` 47件, `unresolved_call_alignment` 14件, `unresolved_store_alignment` 63件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "0068e698",
      "incomplete_value": true,
      "site": "0068e6b8",
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
    "old": null,
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
      "unmatched:0068dbfc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:0068dbdc"
      ]
    ],
    [
      "unmatched:0068dc04",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0068dc80"
      ]
    ],
    [
      "unmatched:0068dc10",
      "READ",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0068dc54",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0068dc34"
      ]
    ],
    [
      "0068dc5c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0068dc80"
      ]
    ],
    [
      "0068dcac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0068dd18"
      ]
    ]
  ]
}
~~~


~~~diff
- 0068dbc4 ["INT_ADD", "register:40f0:8", ["const:68dbc4:8", "const:4:8"]]
- 0068dbc4 ["CALL", null, ["callee:00689208:8"]]
+ 0068dc1c ["INT_ADD", "register:40f0:8", ["const:68dc1c:8", "const:4:8"]]
+ 0068dc1c ["CALL", null, ["callee:00689208:8"]]
- 0068dbd0 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 0068dbd0 ["CBRANCH", null, ["local:b40:8", "tmp:0:1"]]
+ 0068dc28 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 0068dc28 ["CBRANCH", null, ["local:b42:8", "tmp:0:1"]]
- 0068dbdc ["INT_ADD", "tmp:0:8", ["register:4068:8", "const:20:8"]]
- 0068dbdc ["LOAD", "tmp:1:4", ["const:1b1:8", "tmp:0:8"]]
- 0068dbdc ["INT_ZEXT", "register:4058:8", ["tmp:1:4"]]
~~~


<a id="compare-3f53c45bf0fbc8a197277cb16e3c49a1"></a>

### [`0068e754`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0068e/0068e754.md) → [`0068e7ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068e/0068e7ac.md) FUN_0068e7ac

根拠 `similar_code_calls_and_string` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00a75dac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a75/00a75dac.md) · 呼出先 25件 [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0046daf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046daf4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`00687904`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00687/00687904.md) [`006924c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00692/006924c4.md)
- 新版 呼出元 1件 [`00a75e1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a75/00a75e1c.md) · 呼出先 25件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046db34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db34.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00687944`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00687/00687944.md) [`0069251c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00692/0069251c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 84.91% / 新版 84.91%

優先判定に残った影響 `call_argument_candidate` 17件, `unresolved_branch_alignment` 7件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 15件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0068e83c",
      "incomplete_value": true,
      "site": "0068e84c",
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
            "const:40:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 1,
    "slot": 6
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0068e850",
      "incomplete_value": false,
      "site": "0068e854",
      "value": [
        "leaf",
        "const:fffffffe:8"
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
      "definition_site": "0068e8f8",
      "incomplete_value": true,
      "site": "0068e8fc",
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
            "const:70:8"
          ]
        ]
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
      "0068e7f8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:0068e7b4"
      ]
    ],
    [
      "unmatched:0068e7ac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0068e7f0"
      ]
    ],
    [
      "unmatched:0068e7b4",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00851550"
      ]
    ]
  ],
  "added": [
    [
      "0068e7f8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0068e80c"
      ]
    ],
    [
      "0068e804",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0068e7f0"
      ]
    ],
    [
      "0068e80c",
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
- 0068e7f4 ["INT_ADD", "register:40f0:8", ["const:68e7f4:8", "const:4:8"]]
- 0068e7f4 ["CALL", null, ["callee:008bad20:8"]]
+ 0068e84c ["INT_ADD", "register:40f0:8", ["const:68e84c:8", "const:4:8"]]
+ 0068e84c ["CALL", null, ["callee:008bad20:8"]]
- 0068e7fc ["INT_ADD", "register:40f0:8", ["const:68e7fc:8", "const:4:8"]]
- 0068e7fc ["CALL", null, ["callee:008b98b0:8"]]
+ 0068e854 ["INT_ADD", "register:40f0:8", ["const:68e854:8", "const:4:8"]]
+ 0068e854 ["CALL", null, ["callee:008b98b0:8"]]
- 0068e84c ["INT_ADD", "register:40f0:8", ["const:68e84c:8", "const:4:8"]]
- 0068e84c ["CALL", null, ["callee:00c57f80:8"]]
+ 0068e8a4 ["INT_ADD", "register:40f0:8", ["const:68e8a4:8", "const:4:8"]]
+ 0068e8a4 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-7e1ccd017c322e0cc70b4ea6d57c17e7"></a>

### [`0068ed80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0068e/0068ed80.md) → [`0068edd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068e/0068edd8.md) FUN_0068edd8

根拠 `similar_code_calls_and_string` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 4件 [`00694b14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00694/00694b14.md) [`00696e24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00696/00696e24.md) [`00698dd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00698/00698dd4.md) [`00a75dac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a75/00a75dac.md) · 呼出先 32件 [`0046d490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d490.md) [`0046daf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046daf4.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md)
- 新版 呼出元 4件 [`00694b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00694/00694b6c.md) [`00696e7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00696/00696e7c.md) [`00698e2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/00698e2c.md) [`00a75e1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a75/00a75e1c.md) · 呼出先 32件 [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0046db34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db34.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 60.95% / 新版 60.95%

優先判定に残った影響 `call_argument_candidate` 3件, `call_target` 1件, `store_value` 1件, `unresolved_branch_alignment` 20件, `unresolved_call_alignment` 15件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 34件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0068f3b8",
      "incomplete_value": false,
      "site": "0068f3b8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:2d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0068f360",
      "incomplete_value": false,
      "site": "0068f360",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:200:8"
          ]
        ]
      ]
    },
    "ordinal": 52,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0068ee4c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0068edf4",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0068f0e8",
      "incomplete_value": true,
      "site": "0068f0f0",
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
            "register:4040:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0068f090",
      "incomplete_value": true,
      "site": "0068f098",
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
            "const:3078:8"
          ]
        ]
      ]
    },
    "ordinal": 22,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0068ed80",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:0068ed84",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:0068ed88",
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
      "0068edd8",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "0068eddc",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "0068ede0",
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
- 0068edf4 ["INT_ADD", "register:40f0:8", ["const:68edf4:8", "const:4:8"]]
- 0068edf4 ["CALL", null, ["ram:47acf4:8"]]
+ 0068ee4c ["INT_ADD", "register:40f0:8", ["const:68ee4c:8", "const:4:8"]]
+ 0068ee4c ["CALL", null, ["ram:47ad34:8"]]
- 0068ee4c ["INT_ADD", "tmp:0:8", ["register:8:8", "const:60:8"]]
- 0068ee4c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:5040:16"]]
- 0068f098 ["INT_ADD", "register:40f0:8", ["const:68f098:8", "const:4:8"]]
- 0068f098 ["CALL", null, ["callee:00a832d0:8"]]
+ 0068f0f0 ["INT_ADD", "register:40f0:8", ["const:68f0f0:8", "const:4:8"]]
+ 0068f0f0 ["CALL", null, ["callee:00a832d0:8"]]
~~~


<a id="compare-418c0d12df5186f9e8332233300d43aa"></a>

### [`0068f5d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0068f/0068f5d8.md) → [`0068f630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068f/0068f630.md) FUN_0068f630

根拠 `similar_code_calls_and_string` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`00696444`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00696/00696444.md) [`00698788`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00698/00698788.md) · 呼出先 43件 [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0046d490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d490.md) [`0046daf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046daf4.md) [`00489f4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00489/00489f4c.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md)
- 新版 呼出元 2件 [`0069649c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00696/0069649c.md) [`006987e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/006987e0.md) · 呼出先 43件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0046db34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db34.md) [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 57.02% / 新版 57.02%

優先判定に残った影響 `call_argument_candidate` 8件, `store_value` 8件, `unresolved_branch_alignment` 37件, `unresolved_call_alignment` 63件, `unresolved_store_alignment` 45件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0068f6b8",
      "incomplete_value": false,
      "site": "0068f6b8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:350:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0068f660",
      "incomplete_value": false,
      "site": "0068f660",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:280:8"
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
      "definition_site": "0068f994",
      "incomplete_value": true,
      "site": "0068f9a4",
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
                "const:f94:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0068f93c",
      "incomplete_value": true,
      "site": "0068f94c",
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
                "const:f63:8"
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
      "definition_site": "0068f998",
      "incomplete_value": true,
      "site": "0068f9a8",
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
                "const:f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0068f940",
      "incomplete_value": true,
      "site": "0068f950",
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
                "const:f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 47,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0068f6b8",
      "DATA",
      [
        "storage",
        "00c75280",
        null,
        "undefined *"
      ]
    ],
    [
      "0068f720",
      "READ",
      [
        "storage",
        "00c752a0",
        null,
        "pointer"
      ]
    ],
    [
      "0068f720",
      "READ",
      [
        "storage",
        "00c752a8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0068f6b8",
      "DATA",
      [
        "storage",
        "00c75350",
        null,
        "undefined *"
      ]
    ],
    [
      "0068f720",
      "READ",
      [
        "storage",
        "00c75370",
        null,
        "pointer"
      ]
    ],
    [
      "0068f720",
      "READ",
      [
        "storage",
        "00c75378",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
+ 0068f94c ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 0068f94c ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 0068f94c ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 0068f94c ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 0068f950 ["INT_ADD", "tmp:0:8", ["register:40e8:8", "const:ffffffffffffff80:8"]]
+ 0068f950 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 0068f950 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 0068f954 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 0068f954 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 0068f954 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 0068f954 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
~~~


<a id="compare-0d94da82f3e5e93d1efdc8240a025e86"></a>

### [`006906e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00690/006906e8.md) → [`00690740`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00690/00690740.md) FUN_00690740

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00696e24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00696/00696e24.md) · 呼出先 35件 [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0046d490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d490.md) [`0046daf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046daf4.md) [`00489f4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00489/00489f4c.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md)
- 新版 呼出元 1件 [`00696e7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00696/00696e7c.md) · 呼出先 35件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0046db34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db34.md) [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 92.53% / 新版 92.53%

優先判定に残った影響 `call_argument_candidate` 12件, `store_value` 4件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006907c4",
      "incomplete_value": true,
      "site": "006907dc",
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
                "const:674:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0069076c",
      "incomplete_value": true,
      "site": "00690784",
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
                "const:6c8:8"
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
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00690b14",
      "incomplete_value": false,
      "site": "00690b14",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:650:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00690abc",
      "incomplete_value": false,
      "site": "00690abc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:580:8"
          ]
        ]
      ]
    },
    "ordinal": 40,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00690c88",
      "incomplete_value": false,
      "site": "00690c88",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:6d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00690c30",
      "incomplete_value": false,
      "site": "00690c30",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:600:8"
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
      "006907c4",
      "READ",
      [
        "storage",
        "002bb6c8",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00690820",
      "DATA",
      [
        "storage",
        "00c75500",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00690820",
      "WRITE",
      [
        "storage",
        "Stack[-0xe0]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "006907c4",
      "READ",
      [
        "storage",
        "002bb674",
        null,
        "string"
      ]
    ],
    [
      "00690878",
      "DATA",
      [
        "storage",
        "00c755d0",
        null,
        "undefined *"
      ]
    ],
    [
      "00690878",
      "WRITE",
      [
        "storage",
        "Stack[-0xe0]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00690800 ["INT_ADD", "register:40f0:8", ["const:690800:8", "const:4:8"]]
- 00690800 ["CALL", null, ["callee:0052dd40:8"]]
+ 00690858 ["INT_ADD", "register:40f0:8", ["const:690858:8", "const:4:8"]]
+ 00690858 ["CALL", null, ["callee:0052dd40:8"]]
- 00690810 ["INT_ADD", "register:40f0:8", ["const:690810:8", "const:4:8"]]
- 00690810 ["CALL", null, ["callee:005cd130:8"]]
+ 00690868 ["INT_ADD", "register:40f0:8", ["const:690868:8", "const:4:8"]]
+ 00690868 ["CALL", null, ["callee:005cd130:8"]]
- 00690848 ["INT_ADD", "register:40f0:8", ["const:690848:8", "const:4:8"]]
- 00690848 ["CALL", null, ["callee:008bb144:8"]]
+ 006908a0 ["INT_ADD", "register:40f0:8", ["const:6908a0:8", "const:4:8"]]
+ 006908a0 ["CALL", null, ["callee:008bb144:8"]]
~~~


<a id="compare-d1327f782b332523d8a572faf0388ea3"></a>

### [`00690ea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00690/00690ea0.md) → [`00690ef8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00690/00690ef8.md) FUN_00690ef8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00696444`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00696/00696444.md) · 呼出先 37件 [`0046d490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d490.md) [`0046daf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046daf4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`0052dd00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0052d/0052dd00.md) [`005cd0f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cd/005cd0f0.md)
- 新版 呼出元 1件 [`0069649c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00696/0069649c.md) · 呼出先 37件 [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0046db34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db34.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0052dd40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0052d/0052dd40.md) [`005cd130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cd130.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 63.56% / 新版 63.56%

優先判定に残った影響 `call_argument_candidate` 6件, `store_condition` 1件, `store_value` 2件, `unresolved_branch_alignment` 11件, `unresolved_call_alignment` 31件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 37件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00691494",
      "incomplete_value": false,
      "site": "00691494",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:850:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0069143c",
      "incomplete_value": false,
      "site": "0069143c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:780:8"
          ]
        ]
      ]
    },
    "ordinal": 54,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0069158c",
      "incomplete_value": false,
      "site": "0069158c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:8d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00691534",
      "incomplete_value": false,
      "site": "00691534",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:800:8"
          ]
        ]
      ]
    },
    "ordinal": 62,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00691000",
      "incomplete_value": true,
      "site": "00691018",
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
            "const:2f08:8"
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
      "unmatched:00690ea0",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00690ea4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00690ea8",
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
      "00690ef8",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00690efc",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00690f00",
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
- 00690fc0 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 00690fc0 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00690fc0 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00690fc0 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 00691018 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 00691018 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00691018 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00691018 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
- 00691018 ["INT_ADD", "register:40f0:8", ["const:691018:8", "const:4:8"]]
- 00691018 ["CALL", null, ["callee:008bad20:8"]]
+ 00691070 ["INT_ADD", "register:40f0:8", ["const:691070:8", "const:4:8"]]
+ 00691070 ["CALL", null, ["callee:008bad20:8"]]
- 0069120c ["INT_ADD", "register:40f0:8", ["const:69120c:8", "const:4:8"]]
- 0069120c ["CALL", null, ["callee:00c57f50:8"]]
~~~


<a id="compare-096ceaedd174e0905449af98bea68781"></a>

### [`00691c18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00691/00691c18.md) → [`00691c70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00691/00691c70.md) FUN_00691c70

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00691acc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00691/00691acc.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`00691b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00691/00691b24.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00691c7c",
      "incomplete_value": false,
      "site": "00691c80",
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
      "definition_site": "00691c24",
      "incomplete_value": false,
      "site": "00691c28",
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
      "00691c7c",
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
      "00691c7c",
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
- 00691c28 ["INT_ADD", "register:40f0:8", ["const:691c28:8", "const:4:8"]]
- 00691c28 ["CALL", null, ["callee:0043b7b8:8"]]
+ 00691c80 ["INT_ADD", "register:40f0:8", ["const:691c80:8", "const:4:8"]]
+ 00691c80 ["CALL", null, ["callee:0043b7b8:8"]]
- 00691c24 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 00691c24 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00691c24 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00691c24 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00691c7c ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 00691c7c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00691c7c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00691c7c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-6cc4c64f963401ed94d3b33346ae8f2d"></a>

### [`00691e18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00691/00691e18.md) → [`00691e70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00691/00691e70.md) FUN_00691e70

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00685ae4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00685/00685ae4.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`00685b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00685/00685b24.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00691e7c",
      "incomplete_value": false,
      "site": "00691e80",
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
      "definition_site": "00691e24",
      "incomplete_value": false,
      "site": "00691e28",
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
      "00691e7c",
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
      "00691e7c",
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
- 00691e28 ["INT_ADD", "register:40f0:8", ["const:691e28:8", "const:4:8"]]
- 00691e28 ["CALL", null, ["callee:0043b7b8:8"]]
+ 00691e80 ["INT_ADD", "register:40f0:8", ["const:691e80:8", "const:4:8"]]
+ 00691e80 ["CALL", null, ["callee:0043b7b8:8"]]
- 00691e24 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 00691e24 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00691e24 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00691e24 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00691e7c ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 00691e7c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00691e7c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00691e7c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-d41892ed283e181b201f7029ce0a434e"></a>

### [`00691e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00691/00691e2c.md) → [`00691e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00691/00691e84.md) FUN_00691e84

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 17件 [`00684f0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00684/00684f0c.md) [`00685ae4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00685/00685ae4.md) [`00687628`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00687/00687628.md) [`00687650`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00687/00687650.md) [`00687b4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00687/00687b4c.md) · 呼出先 1件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md)
- 新版 呼出元 17件 [`00684f4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00684/00684f4c.md) [`00685b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00685/00685b24.md) [`00687668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00687/00687668.md) [`00687690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00687/00687690.md) [`00687b8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00687/00687b8c.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00691e90",
      "incomplete_value": false,
      "site": "00691e94",
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
      "definition_site": "00691e38",
      "incomplete_value": false,
      "site": "00691e3c",
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
      "00691e90",
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
      "00691e90",
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
- 00691e3c ["INT_ADD", "register:40f0:8", ["const:691e3c:8", "const:4:8"]]
- 00691e3c ["CALL", null, ["callee:00442970:8"]]
+ 00691e94 ["INT_ADD", "register:40f0:8", ["const:691e94:8", "const:4:8"]]
+ 00691e94 ["CALL", null, ["callee:00442970:8"]]
- 00691e38 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 00691e38 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00691e38 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00691e38 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00691e90 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 00691e90 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00691e90 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00691e90 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-cad03e7fb1d5240a28e45b6096c5bffc"></a>

### [`00691e40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00691/00691e40.md) → [`00691e98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00691/00691e98.md) FUN_00691e98

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00685ff0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00685/00685ff0.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`00686030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00686/00686030.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00691ea4",
      "incomplete_value": false,
      "site": "00691ea8",
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
      "definition_site": "00691e4c",
      "incomplete_value": false,
      "site": "00691e50",
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
      "00691ea4",
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
      "00691ea4",
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
- 00691e50 ["INT_ADD", "register:40f0:8", ["const:691e50:8", "const:4:8"]]
- 00691e50 ["CALL", null, ["callee:0043b7b8:8"]]
+ 00691ea8 ["INT_ADD", "register:40f0:8", ["const:691ea8:8", "const:4:8"]]
+ 00691ea8 ["CALL", null, ["callee:0043b7b8:8"]]
- 00691e4c ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 00691e4c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00691e4c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00691e4c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00691ea4 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 00691ea4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00691ea4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00691ea4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-227a6fd62bae5b261accb6f7f416d601"></a>

### [`00691e54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00691/00691e54.md) → [`00691eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00691/00691eac.md) FUN_00691eac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 7件 [`00684e3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00684/00684e3c.md) [`00684e84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00684/00684e84.md) [`00684ed8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00684/00684ed8.md) [`00684fb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00684/00684fb0.md) [`00685ff0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00685/00685ff0.md) · 呼出先 1件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md)
- 新版 呼出元 7件 [`00684e7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00684/00684e7c.md) [`00684ec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00684/00684ec4.md) [`00684f18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00684/00684f18.md) [`00684ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00684/00684ff0.md) [`00686030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00686/00686030.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00691eb8",
      "incomplete_value": false,
      "site": "00691ebc",
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
      "definition_site": "00691e60",
      "incomplete_value": false,
      "site": "00691e64",
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
      "00691eb8",
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
      "00691eb8",
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
- 00691e64 ["INT_ADD", "register:40f0:8", ["const:691e64:8", "const:4:8"]]
- 00691e64 ["CALL", null, ["callee:00442970:8"]]
+ 00691ebc ["INT_ADD", "register:40f0:8", ["const:691ebc:8", "const:4:8"]]
+ 00691ebc ["CALL", null, ["callee:00442970:8"]]
- 00691e60 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 00691e60 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00691e60 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00691e60 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00691eb8 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 00691eb8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00691eb8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00691eb8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-6369aeb642f37f027622b2349262a2ec"></a>

### [`00692008`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00692/00692008.md) → [`00692060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00692/00692060.md) FUN_00692060

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00691e68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00691/00691e68.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`00691ec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00691/00691ec0.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0069206c",
      "incomplete_value": false,
      "site": "00692070",
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
      "definition_site": "00692014",
      "incomplete_value": false,
      "site": "00692018",
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
      "0069206c",
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
      "0069206c",
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
- 00692018 ["INT_ADD", "register:40f0:8", ["const:692018:8", "const:4:8"]]
- 00692018 ["CALL", null, ["callee:0043b7b8:8"]]
+ 00692070 ["INT_ADD", "register:40f0:8", ["const:692070:8", "const:4:8"]]
+ 00692070 ["CALL", null, ["callee:0043b7b8:8"]]
- 00692014 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 00692014 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00692014 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00692014 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0069206c ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 0069206c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0069206c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0069206c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-28081b873cfd3645cbd01f75dc6898ea"></a>

### [`0069201c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00692/0069201c.md) → [`00692074`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00692/00692074.md) FUN_00692074

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00686a78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00686/00686a78.md) · 呼出先 6件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00692244`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00692/00692244.md) [`0069241c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00692/0069241c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00686ab8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00686/00686ab8.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0069229c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00692/0069229c.md) [`00692474`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00692/00692474.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 95.35% / 新版 95.35%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0069219c",
      "incomplete_value": true,
      "site": "006921a4",
      "value": [
        "live",
        "register:8:8"
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
      "006920d4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:006921f0"
      ]
    ],
    [
      "unmatched:00692140",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:006921f4",
      "READ",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "006920d4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00692248"
      ]
    ],
    [
      "00692198",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "0069224c",
      "READ",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0069214c ["INT_ADD", "register:40f0:8", ["const:69214c:8", "const:4:8"]]
- 0069214c ["CALL", null, ["callee:0069229c:8"]]
+ 006921a4 ["INT_ADD", "register:40f0:8", ["const:6921a4:8", "const:4:8"]]
+ 006921a4 ["CALL", null, ["callee:0069229c:8"]]
- 006920c8 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 006920c8 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 006920c8 ["CBRANCH", null, ["local:b24:8", "tmp:1:1"]]
+ 00692120 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00692120 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
+ 00692120 ["CBRANCH", null, ["local:b23:8", "tmp:1:1"]]
- 006920d4 ["INT_ADD", "register:40f0:8", ["const:6920d4:8", "const:4:8"]]
- 006920d4 ["CALL", null, ["callee:00c57f60:8"]]
+ 0069212c ["INT_ADD", "register:40f0:8", ["const:69212c:8", "const:4:8"]]
+ 0069212c ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-1625dd9ecad1368cdfdb44085910338f"></a>

### [`00692244`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00692/00692244.md) → [`0069229c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00692/0069229c.md) FUN_0069229c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0069201c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00692/0069201c.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00692074`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00692/00692074.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 92.31% / 新版 92.31%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00692274",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00692388"
      ]
    ]
  ],
  "added": [
    [
      "006922cc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00692388"
      ]
    ]
  ]
}
~~~


~~~diff
- 00692268 ["INT_SUB", "register:4048:8", ["register:40b0:8", "register:40a8:8"]]
- 0069226c ["INT_LESSEQUAL", "register:105:1", ["register:40b0:8", "register:40a8:8"]]
- 0069226c ["INT_SBORROW", "register:106:1", ["register:40a8:8", "register:40b0:8"]]
- 0069226c ["INT_SUB", "tmp:0:8", ["register:40a8:8", "register:40b0:8"]]
- 0069226c ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
- 00692270 ["COPY", "tmp:0:8", ["register:4048:8"]]
- 00692270 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00692270 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00692270 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9bab03c0eef1b572ef72e9caf74c7715"></a>

### [`0069237c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00692/0069237c.md) → [`006923d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00692/006923d4.md) FUN_006923d4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 97.50% / 新版 97.50%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006923c8",
      "incomplete_value": true,
      "site": "006923cc",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:fffffffffffffff8:8"
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
    "new": {
      "definition_site": "00692440",
      "incomplete_value": true,
      "site": "00692444",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:ffffffffffffffc8:8"
              ]
            ]
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
      "unmatched:006923d4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00692414"
      ]
    ],
    [
      "0069242c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006923f0"
      ]
    ]
  ],
  "added": [
    [
      "0069242c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00692414"
      ]
    ],
    [
      "0069243c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006923f0"
      ]
    ]
  ]
}
~~~


~~~diff
- 006923cc ["INT_ADD", "register:40f0:8", ["const:6923cc:8", "const:4:8"]]
- 006923cc ["CALL", null, ["callee:00c57f80:8"]]
+ 00692424 ["INT_ADD", "register:40f0:8", ["const:692424:8", "const:4:8"]]
+ 00692424 ["CALL", null, ["callee:00c57f80:8"]]
- 006923ec ["INT_ADD", "register:40f0:8", ["const:6923ec:8", "const:4:8"]]
- 006923ec ["CALL", null, ["callee:00c57f80:8"]]
+ 00692444 ["INT_ADD", "register:40f0:8", ["const:692444:8", "const:4:8"]]
+ 00692444 ["CALL", null, ["callee:00c57f80:8"]]
- 006923a0 ["CBRANCH", null, ["local:b13:8", "register:101:1"]]
+ 006923f8 ["CBRANCH", null, ["local:b12:8", "register:101:1"]]
~~~


<a id="compare-3bdb8d472bae8905a2d3c614b06d7739"></a>

### [`0069241c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00692/0069241c.md) → [`00692474`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00692/00692474.md) FUN_00692474

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0069201c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00692/0069201c.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`00692074`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00692/00692074.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00692480",
      "incomplete_value": false,
      "site": "00692484",
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
      "definition_site": "00692428",
      "incomplete_value": false,
      "site": "0069242c",
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
      "00692480",
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
      "00692480",
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
- 0069242c ["INT_ADD", "register:40f0:8", ["const:69242c:8", "const:4:8"]]
- 0069242c ["CALL", null, ["callee:0043b7b8:8"]]
+ 00692484 ["INT_ADD", "register:40f0:8", ["const:692484:8", "const:4:8"]]
+ 00692484 ["CALL", null, ["callee:0043b7b8:8"]]
- 00692428 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 00692428 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00692428 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00692428 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00692480 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 00692480 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00692480 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00692480 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-970be1d4e3696bd7f361fa62d6956392"></a>

### [`006924c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00692/006924c4.md) → [`0069251c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00692/0069251c.md) FUN_0069251c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 11件 [`00687904`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00687/00687904.md) [`0068e754`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0068e/0068e754.md) [`0068f5d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0068f/0068f5d8.md) [`00694d28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00694/00694d28.md) [`00694de0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00694/00694de0.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 11件 [`00687944`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00687/00687944.md) [`0068e7ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068e/0068e7ac.md) [`0068f630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068f/0068f630.md) [`00694d80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00694/00694d80.md) [`00694e38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00694/00694e38.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00692528",
      "incomplete_value": false,
      "site": "0069252c",
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
      "definition_site": "006924d0",
      "incomplete_value": false,
      "site": "006924d4",
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
      "00692528",
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
      "00692528",
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
- 006924d4 ["INT_ADD", "register:40f0:8", ["const:6924d4:8", "const:4:8"]]
- 006924d4 ["CALL", null, ["callee:0043b7b8:8"]]
+ 0069252c ["INT_ADD", "register:40f0:8", ["const:69252c:8", "const:4:8"]]
+ 0069252c ["CALL", null, ["callee:0043b7b8:8"]]
- 006924d0 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 006924d0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 006924d0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 006924d0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00692528 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 00692528 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00692528 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00692528 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-d90a6929309bd7d0cd25f860d1c52b2f"></a>

### [`006924d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00692/006924d8.md) → [`00692530`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00692/00692530.md) FUN_00692530

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`00684fb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00684/00684fb0.md) [`00685248`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00685/00685248.md) [`00685374`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00685/00685374.md) · 呼出先 1件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md)
- 新版 呼出元 3件 [`00684ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00684/00684ff0.md) [`00685288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00685/00685288.md) [`006853b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00685/006853b4.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0069253c",
      "incomplete_value": false,
      "site": "00692540",
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
      "definition_site": "006924e4",
      "incomplete_value": false,
      "site": "006924e8",
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
      "0069253c",
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
      "0069253c",
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
- 006924e8 ["INT_ADD", "register:40f0:8", ["const:6924e8:8", "const:4:8"]]
- 006924e8 ["CALL", null, ["callee:00442970:8"]]
+ 00692540 ["INT_ADD", "register:40f0:8", ["const:692540:8", "const:4:8"]]
+ 00692540 ["CALL", null, ["callee:00442970:8"]]
- 006924e4 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 006924e4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 006924e4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 006924e4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0069253c ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 0069253c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0069253c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0069253c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-3875536654b075c56d8e4b03792aab66"></a>

### [`006924ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00692/006924ec.md) → [`00692544`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00692/00692544.md) FUN_00692544

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`00684fb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00684/00684fb0.md) [`006852e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00685/006852e0.md) [`00685374`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00685/00685374.md) [`0068a6c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0068a/0068a6c4.md) · 呼出先 1件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md)
- 新版 呼出元 4件 [`00684ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00684/00684ff0.md) [`00685320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00685/00685320.md) [`006853b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00685/006853b4.md) [`0068a71c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068a/0068a71c.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00692550",
      "incomplete_value": false,
      "site": "00692554",
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
      "definition_site": "006924f8",
      "incomplete_value": false,
      "site": "006924fc",
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
      "00692550",
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
      "00692550",
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
- 006924fc ["INT_ADD", "register:40f0:8", ["const:6924fc:8", "const:4:8"]]
- 006924fc ["CALL", null, ["callee:00442970:8"]]
+ 00692554 ["INT_ADD", "register:40f0:8", ["const:692554:8", "const:4:8"]]
+ 00692554 ["CALL", null, ["callee:00442970:8"]]
- 006924f8 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 006924f8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 006924f8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 006924f8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00692550 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 00692550 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00692550 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00692550 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-b5306cf5915eaa675c6e61cdb2b13cab"></a>

### [`00692500`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00692/00692500.md) → [`00692558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00692/00692558.md) FUN_00692558

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0068a2b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0068a/0068a2b8.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`0068a310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068a/0068a310.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00692564",
      "incomplete_value": false,
      "site": "00692568",
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
      "definition_site": "0069250c",
      "incomplete_value": false,
      "site": "00692510",
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
      "00692564",
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
      "00692564",
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
- 00692510 ["INT_ADD", "register:40f0:8", ["const:692510:8", "const:4:8"]]
- 00692510 ["CALL", null, ["callee:0043b7b8:8"]]
+ 00692568 ["INT_ADD", "register:40f0:8", ["const:692568:8", "const:4:8"]]
+ 00692568 ["CALL", null, ["callee:0043b7b8:8"]]
- 0069250c ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 0069250c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0069250c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0069250c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00692564 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 00692564 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00692564 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00692564 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-d2aea05570fd3373badec845cf54f908"></a>

### [`00692514`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00692/00692514.md) → [`0069256c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00692/0069256c.md) FUN_0069256c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`0068a2b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0068a/0068a2b8.md) [`00692514`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00692/00692514.md) [`006928b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00692/006928b4.md) · 呼出先 4件 [`00692514`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00692/00692514.md) [`006928b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00692/006928b4.md) [`00692bd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00692/00692bd8.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 3件 [`0068a310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068a/0068a310.md) [`0069256c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00692/0069256c.md) [`0069290c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00692/0069290c.md) · 呼出先 4件 [`0069256c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00692/0069256c.md) [`0069290c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00692/0069290c.md) [`00692c30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00692/00692c30.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 92.67% / 新版 92.67%

優先判定に残った影響 `call_target` 2件, `unresolved_branch_alignment` 4件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006927fc",
      "value": [
        "leaf",
        "ram:69290c:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006927a4",
      "value": [
        "leaf",
        "ram:6928b4:8"
      ]
    },
    "ordinal": 2,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0069281c",
      "value": [
        "leaf",
        "ram:69290c:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006927c4",
      "value": [
        "leaf",
        "ram:6928b4:8"
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
      "unmatched:00692634",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006925a0"
      ]
    ],
    [
      "unmatched:00692684",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ],
    [
      "unmatched:00692688",
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
      "0069268c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006925a0"
      ]
    ],
    [
      "006926dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ],
    [
      "006926e0",
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
- 006927a4 ["INT_ADD", "register:40f0:8", ["const:6927a4:8", "const:4:8"]]
- 006927a4 ["CALL", null, ["ram:6928b4:8"]]
+ 006927fc ["INT_ADD", "register:40f0:8", ["const:6927fc:8", "const:4:8"]]
+ 006927fc ["CALL", null, ["ram:69290c:8"]]
- 006927c4 ["INT_ADD", "register:40f0:8", ["const:6927c4:8", "const:4:8"]]
- 006927c4 ["CALL", null, ["ram:6928b4:8"]]
+ 0069281c ["INT_ADD", "register:40f0:8", ["const:69281c:8", "const:4:8"]]
+ 0069281c ["CALL", null, ["ram:69290c:8"]]
- 00692554 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00692554 ["CBRANCH", null, ["local:b42:8", "tmp:0:1"]]
+ 006925ac ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 006925ac ["CBRANCH", null, ["local:b43:8", "tmp:0:1"]]
~~~


<a id="compare-72cbdd2afddf4fe7dc12261babeacfc4"></a>

### [`00692bd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00692/00692bd8.md) → [`00692c30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00692/00692c30.md) FUN_00692c30

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00692514`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00692/00692514.md) [`00692bd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00692/00692bd8.md) · 呼出先 4件 [`00692bd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00692/00692bd8.md) [`006930f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00693/006930f4.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md)
- 新版 呼出元 2件 [`0069256c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00692/0069256c.md) [`00692c30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00692/00692c30.md) · 呼出先 4件 [`00692c30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00692/00692c30.md) [`0069314c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00693/0069314c.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 86.85% / 新版 86.85%

優先判定に残った影響 `call_argument_candidate` 7件, `unresolved_branch_alignment` 8件, `unresolved_store_alignment` 22件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00692e88",
      "incomplete_value": true,
      "site": "00692e9c",
      "value": [
        "live",
        "register:40e0:8"
      ]
    },
    "old": null,
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00692e8c",
      "incomplete_value": true,
      "site": "00692e9c",
      "value": [
        "live",
        "register:40b0:8"
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
      "definition_site": "00692e90",
      "incomplete_value": true,
      "site": "00692e9c",
      "value": [
        "live",
        "register:40a0:8"
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
      "unmatched:00692bdc",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00692be0",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00692be4",
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
      "00692c34",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00692c38",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00692c3c",
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
- 00692e44 ["INT_ADD", "register:40f0:8", ["const:692e44:8", "const:4:8"]]
- 00692e44 ["CALL", null, ["local:b0:8"]]
+ 00692e9c ["INT_ADD", "register:40f0:8", ["const:692e9c:8", "const:4:8"]]
+ 00692e9c ["CALL", null, ["local:b0:8"]]
- 00692bd8 ["INT_SUB", "register:8:8", ["register:8:8", "const:d0:8"]]
- 00692bdc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00692bdc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00692bdc ["INT_ADD", "tmp:2:8", ["register:8:8", "const:70:8"]]
- 00692bdc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-1a38c8ee25245ac9023f25cfd134bce8"></a>

### [`006930f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00693/006930f4.md) → [`0069314c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00693/0069314c.md) FUN_0069314c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00692bd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00692/00692bd8.md) · 呼出先 2件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md)
- 新版 呼出元 1件 [`00692c30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00692/00692c30.md) · 呼出先 2件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 84.72% / 新版 84.72%

優先判定に残った影響 `store_condition` 6件, `unresolved_branch_alignment` 4件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "00693130"
      ],
      [
        "CONDITIONAL_JUMP",
        "00693188"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00693240",
      "value": [
        "live",
        "register:101:1"
      ]
    },
    "old": {
      "definition_site": "0069312c",
      "incomplete_value": true,
      "site": "006931e8",
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
                "register:4008:8"
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
    "ordinal": 13,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "00693130"
      ],
      [
        "CONDITIONAL_JUMP",
        "00693188"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00693240",
      "value": [
        "live",
        "register:101:1"
      ]
    },
    "old": {
      "definition_site": "0069312c",
      "incomplete_value": true,
      "site": "006931e8",
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
                "register:4008:8"
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
    "ordinal": 14,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "00693130"
      ],
      [
        "CONDITIONAL_JUMP",
        "00693188"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00693244",
      "value": [
        "live",
        "register:101:1"
      ]
    },
    "old": {
      "definition_site": "0069312c",
      "incomplete_value": true,
      "site": "006931ec",
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
                "register:4008:8"
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
    "ordinal": 15,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00693174",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00693304"
      ]
    ],
    [
      "unmatched:00693130",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00693228"
      ]
    ],
    [
      "unmatched:0069316c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006932c4"
      ]
    ]
  ],
  "added": [
    [
      "00693174",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0069335c"
      ]
    ],
    [
      "00693188",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00693228"
      ]
    ],
    [
      "006931c4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006932c4"
      ]
    ]
  ]
}
~~~


~~~diff
- 006931ac ["CBRANCH", null, ["local:b11:8", "register:101:1"]]
+ 00693204 ["CBRANCH", null, ["local:b10:8", "register:101:1"]]
- 0069311c ["CBRANCH", null, ["local:b26:8", "register:101:1"]]
+ 00693174 ["CBRANCH", null, ["local:b28:8", "register:101:1"]]
- 00693124 ["CBRANCH", null, ["local:b12:8", "register:101:1"]]
+ 0069317c ["CBRANCH", null, ["local:b11:8", "register:101:1"]]
~~~


<a id="compare-3e00d592341d6e60b532b80810683edd"></a>

### [`00693338`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00693/00693338.md) → [`00693390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00693/00693390.md) FUN_00693390

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 61.54% / 新版 61.54%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0069335c",
      "DATA",
      [
        "storage",
        "00c74850",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00693360",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00693364",
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
      "006933b4",
      "DATA",
      [
        "storage",
        "00c74920",
        null,
        "undefined *"
      ]
    ],
    [
      "006933b8",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "006933bc",
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
- 0069334c ["INT_ADD", "register:40f0:8", ["const:69334c:8", "const:4:8"]]
- 0069334c ["CALL", null, ["callee:00c57f60:8"]]
+ 006933a4 ["INT_ADD", "register:40f0:8", ["const:6933a4:8", "const:4:8"]]
+ 006933a4 ["CALL", null, ["callee:00c57f60:8"]]
- 00693358 ["COPY", "tmp:0:8", ["const:850:8"]]
- 00693358 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00693358 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00693358 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0069335c ["COPY", "tmp:0:8", ["register:4040:8"]]
- 0069335c ["COPY", "tmp:1:8", ["register:4048:8"]]
- 0069335c ["COPY", "tmp:2:8", ["register:4000:8"]]
- 0069335c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-8cda7c057d74777620cd275ecd390bca"></a>

### [`00693388`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00693/00693388.md) → [`006933e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00693/006933e0.md) FUN_006933e0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0068bad0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0068b/0068bad0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0068bb28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068b/0068bb28.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00693400",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006933a8",
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
      "site": "0069340c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006933b4",
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
      "00693400",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "0069340c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00693400",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "0069340c",
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
- 006933a8 ["INT_ADD", "register:40f0:8", ["const:6933a8:8", "const:4:8"]]
- 006933a8 ["CALL", null, ["ram:47acf4:8"]]
+ 00693400 ["INT_ADD", "register:40f0:8", ["const:693400:8", "const:4:8"]]
+ 00693400 ["CALL", null, ["ram:47ad34:8"]]
- 006933b4 ["INT_ADD", "register:40f0:8", ["const:6933b4:8", "const:4:8"]]
- 006933b4 ["CALL", null, ["ram:47acf4:8"]]
+ 0069340c ["INT_ADD", "register:40f0:8", ["const:69340c:8", "const:4:8"]]
+ 0069340c ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-f9acca97bf370c7dad33a92bf6909406"></a>

### [`00693408`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00693/00693408.md) → [`00693460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00693/00693460.md) FUN_00693460

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
      "unmatched:0069342c",
      "DATA",
      [
        "storage",
        "00c748d0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00693430",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00693434",
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
      "00693484",
      "DATA",
      [
        "storage",
        "00c749a0",
        null,
        "undefined *"
      ]
    ],
    [
      "00693488",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0069348c",
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
- 0069341c ["INT_ADD", "register:40f0:8", ["const:69341c:8", "const:4:8"]]
- 0069341c ["CALL", null, ["callee:00c57f60:8"]]
+ 00693474 ["INT_ADD", "register:40f0:8", ["const:693474:8", "const:4:8"]]
+ 00693474 ["CALL", null, ["callee:00c57f60:8"]]
- 00693428 ["COPY", "tmp:0:8", ["const:8d0:8"]]
- 00693428 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00693428 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00693428 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0069342c ["COPY", "tmp:0:8", ["register:4040:8"]]
- 0069342c ["COPY", "tmp:1:8", ["register:4048:8"]]
- 0069342c ["COPY", "tmp:2:8", ["register:4000:8"]]
- 0069342c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-148e714e9a5c0ac9c2aeac3a0225cbf9"></a>

### [`00693458`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00693/00693458.md) → [`006934b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00693/006934b0.md) FUN_006934b0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 15件 [`00470994`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470994.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`0068bad0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0068b/0068bad0.md)
- 新版 呼出元 0件  · 呼出先 15件 [`004709d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/004709d4.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0068bb28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068b/0068bb28.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 77.40% / 新版 77.40%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 7件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006935a4",
      "incomplete_value": false,
      "site": "006935a8",
      "value": [
        "leaf",
        "const:19:8"
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
      "006934e0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:006934ac"
      ]
    ],
    [
      "unmatched:00693490",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "unmatched:00693498",
      "READ",
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
      "006934e0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00693504"
      ]
    ],
    [
      "006934e8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006934f0",
      "READ",
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
- 00693550 ["INT_ADD", "register:40f0:8", ["const:693550:8", "const:4:8"]]
- 00693550 ["CALL", null, ["callee:004709d4:8"]]
+ 006935a8 ["INT_ADD", "register:40f0:8", ["const:6935a8:8", "const:4:8"]]
+ 006935a8 ["CALL", null, ["callee:004709d4:8"]]
- 006935a8 ["INT_ADD", "register:40f0:8", ["const:6935a8:8", "const:4:8"]]
- 006935a8 ["CALL", null, ["callee:00c57f60:8"]]
+ 00693600 ["INT_ADD", "register:40f0:8", ["const:693600:8", "const:4:8"]]
+ 00693600 ["CALL", null, ["callee:00c57f60:8"]]
- 00693488 ["CBRANCH", null, ["local:b5:8", "register:101:1"]]
+ 006934e0 ["CBRANCH", null, ["local:b6:8", "register:101:1"]]
~~~


<a id="compare-a1986a81bc6811cdea2a8ef587bf57a9"></a>

### [`0069375c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00693/0069375c.md) → [`006937b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00693/006937b4.md) FUN_006937b4

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
      "definition_site": "006937d8",
      "incomplete_value": false,
      "site": "006937d8",
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
            "const:a10:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00693780",
      "incomplete_value": false,
      "site": "00693780",
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
            "const:940:8"
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
      "006937d8",
      "DATA",
      [
        "storage",
        "00c74940",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006937d8",
      "DATA",
      [
        "storage",
        "00c74a10",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00693770 ["INT_ADD", "register:40f0:8", ["const:693770:8", "const:4:8"]]
- 00693770 ["CALL", null, ["callee:00c57f60:8"]]
+ 006937c8 ["INT_ADD", "register:40f0:8", ["const:6937c8:8", "const:4:8"]]
+ 006937c8 ["CALL", null, ["callee:00c57f60:8"]]
- 0069377c ["COPY", "tmp:0:8", ["const:940:8"]]
- 0069377c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0069377c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0069377c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006937d4 ["COPY", "tmp:0:8", ["const:a10:8"]]
+ 006937d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006937d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006937d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c73b94591913b5e9c9023ecb057cb9ef"></a>

### [`00693790`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00693/00693790.md) → [`006937e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00693/006937e8.md) FUN_006937e8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0069379c",
      "DATA",
      [
        "storage",
        "00c74940",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006937f4",
      "DATA",
      [
        "storage",
        "00c74a10",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00693790 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 00693790 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00693794 ["COPY", "register:4048:8", ["const:c74000:8"]]
- 00693798 ["COPY", "tmp:0:8", ["const:940:8"]]
- 00693798 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00693798 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00693798 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-2f4498bd04fff7faea5131ee77c42baf"></a>

### [`006937ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00693/006937ac.md) → [`00693804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00693/00693804.md) FUN_00693804

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
      "site": "00693820",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006937c8",
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
      "00693820",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00693820",
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
- 006937c8 ["INT_ADD", "register:40f0:8", ["const:6937c8:8", "const:4:8"]]
- 006937c8 ["CALL", null, ["ram:47acf4:8"]]
+ 00693820 ["INT_ADD", "register:40f0:8", ["const:693820:8", "const:4:8"]]
+ 00693820 ["CALL", null, ["ram:47ad34:8"]]
- 006937d4 ["INT_ADD", "register:40f0:8", ["const:6937d4:8", "const:4:8"]]
- 006937d4 ["CALL", null, ["callee:0047ce14:8"]]
+ 0069382c ["INT_ADD", "register:40f0:8", ["const:69382c:8", "const:4:8"]]
+ 0069382c ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-7d646b78259581a53b7d6829118db621"></a>

### [`00693818`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00693/00693818.md) → [`00693870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00693/00693870.md) FUN_00693870

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
      "definition_site": "00693894",
      "incomplete_value": false,
      "site": "00693894",
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
            "const:aa0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0069383c",
      "incomplete_value": false,
      "site": "0069383c",
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
            "const:9d0:8"
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
      "00693894",
      "DATA",
      [
        "storage",
        "00c749d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00693894",
      "DATA",
      [
        "storage",
        "00c74aa0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0069382c ["INT_ADD", "register:40f0:8", ["const:69382c:8", "const:4:8"]]
- 0069382c ["CALL", null, ["callee:00c57f60:8"]]
+ 00693884 ["INT_ADD", "register:40f0:8", ["const:693884:8", "const:4:8"]]
+ 00693884 ["CALL", null, ["callee:00c57f60:8"]]
- 00693838 ["COPY", "tmp:0:8", ["const:9d0:8"]]
- 00693838 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00693838 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00693838 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00693890 ["COPY", "tmp:0:8", ["const:aa0:8"]]
+ 00693890 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00693890 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00693890 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-89dfb8a8dc6412cb20389dcfb129ed42"></a>

### [`00693868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00693/00693868.md) → [`006938c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00693/006938c0.md) FUN_006938c0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 7件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0068a9ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0068a/0068a9ac.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b6ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6ea4.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0068aa04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068a/0068aa04.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 95.65% / 新版 95.65%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006938e8",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00693890",
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
      "site": "006938f8",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006938a0",
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
      "006938e8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "006938f8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "006938e8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006938f8",
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
- 00693890 ["INT_ADD", "register:40f0:8", ["const:693890:8", "const:4:8"]]
- 00693890 ["CALL", null, ["ram:47acf4:8"]]
+ 006938e8 ["INT_ADD", "register:40f0:8", ["const:6938e8:8", "const:4:8"]]
+ 006938e8 ["CALL", null, ["ram:47ad34:8"]]
- 006938a0 ["INT_ADD", "register:40f0:8", ["const:6938a0:8", "const:4:8"]]
- 006938a0 ["CALL", null, ["ram:47acf4:8"]]
+ 006938f8 ["INT_ADD", "register:40f0:8", ["const:6938f8:8", "const:4:8"]]
+ 006938f8 ["CALL", null, ["ram:47ad34:8"]]
- 006938c0 ["INT_ADD", "register:40f0:8", ["const:6938c0:8", "const:4:8"]]
- 006938c0 ["CALL", null, ["callee:0068aa04:8"]]
+ 00693918 ["INT_ADD", "register:40f0:8", ["const:693918:8", "const:4:8"]]
+ 00693918 ["CALL", null, ["callee:0068aa04:8"]]
~~~


<a id="compare-a0138b480d69dfead2f7a23daa21a140"></a>

### [`0069394c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00693/0069394c.md) → [`006939a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00693/006939a4.md) FUN_006939a4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006939c8",
      "incomplete_value": false,
      "site": "006939d0",
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
            "const:b20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00693970",
      "incomplete_value": false,
      "site": "00693978",
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
            "const:a50:8"
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
      "006939d0",
      "DATA",
      [
        "storage",
        "00c74a50",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006939d0",
      "DATA",
      [
        "storage",
        "00c74b20",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00693960 ["INT_ADD", "register:40f0:8", ["const:693960:8", "const:4:8"]]
- 00693960 ["CALL", null, ["callee:00c57f60:8"]]
+ 006939b8 ["INT_ADD", "register:40f0:8", ["const:6939b8:8", "const:4:8"]]
+ 006939b8 ["CALL", null, ["callee:00c57f60:8"]]
- 00693970 ["COPY", "tmp:0:8", ["const:a50:8"]]
- 00693970 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00693970 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00693970 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006939c8 ["COPY", "tmp:0:8", ["const:b20:8"]]
+ 006939c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006939c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006939c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e0370a5b9e3c91c052bb016dafeda209"></a>

### [`006939c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00693/006939c4.md) → [`00693a1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00693/00693a1c.md) FUN_00693a1c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 14件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 0件  · 呼出先 14件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.73% / 新版 98.73%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00693ac8",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00693a70",
      "value": [
        "leaf",
        "ram:47acf4:8"
      ]
    },
    "ordinal": 2,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00693af0",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00693a98",
      "value": [
        "leaf",
        "ram:47acf4:8"
      ]
    },
    "ordinal": 4,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00693ac8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00693af0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00693ac8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00693af0",
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
- 00693a70 ["INT_ADD", "register:40f0:8", ["const:693a70:8", "const:4:8"]]
- 00693a70 ["CALL", null, ["ram:47acf4:8"]]
+ 00693ac8 ["INT_ADD", "register:40f0:8", ["const:693ac8:8", "const:4:8"]]
+ 00693ac8 ["CALL", null, ["ram:47ad34:8"]]
- 00693a98 ["INT_ADD", "register:40f0:8", ["const:693a98:8", "const:4:8"]]
- 00693a98 ["CALL", null, ["ram:47acf4:8"]]
+ 00693af0 ["INT_ADD", "register:40f0:8", ["const:693af0:8", "const:4:8"]]
+ 00693af0 ["CALL", null, ["ram:47ad34:8"]]
- 00693a38 ["INT_ADD", "register:40f0:8", ["const:693a38:8", "const:4:8"]]
- 00693a38 ["CALL", null, ["callee:00c58520:8"]]
+ 00693a90 ["INT_ADD", "register:40f0:8", ["const:693a90:8", "const:4:8"]]
+ 00693a90 ["CALL", null, ["callee:00c58520:8"]]
~~~


<a id="compare-8cb1c6adec733897e012095568d4d9ce"></a>

### [`00693c68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00693/00693c68.md) → [`00693cc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00693/00693cc0.md) FUN_00693cc0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 61.54% / 新版 61.54%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00693c8c",
      "DATA",
      [
        "storage",
        "00c74ad0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00693c90",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00693c94",
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
      "00693ce4",
      "DATA",
      [
        "storage",
        "00c74ba0",
        null,
        "undefined *"
      ]
    ],
    [
      "00693ce8",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00693cec",
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
- 00693c7c ["INT_ADD", "register:40f0:8", ["const:693c7c:8", "const:4:8"]]
- 00693c7c ["CALL", null, ["callee:00c57f60:8"]]
+ 00693cd4 ["INT_ADD", "register:40f0:8", ["const:693cd4:8", "const:4:8"]]
+ 00693cd4 ["CALL", null, ["callee:00c57f60:8"]]
- 00693c88 ["COPY", "tmp:0:8", ["const:ad0:8"]]
- 00693c88 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00693c88 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00693c88 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00693c8c ["COPY", "tmp:0:8", ["register:4040:8"]]
- 00693c8c ["COPY", "tmp:1:8", ["register:4048:8"]]
- 00693c8c ["COPY", "tmp:2:8", ["register:4000:8"]]
- 00693c8c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-a3dd341d988c1f8edf9118584c9d9035"></a>

### [`00693c9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00693/00693c9c.md) → [`00693cf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00693/00693cf4.md) FUN_00693cf4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00693ca8",
      "DATA",
      [
        "storage",
        "00c74ad0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00693d00",
      "DATA",
      [
        "storage",
        "00c74ba0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00693c9c ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 00693c9c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00693ca0 ["COPY", "register:4048:8", ["const:c74000:8"]]
- 00693ca4 ["COPY", "tmp:0:8", ["const:ad0:8"]]
- 00693ca4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00693ca4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00693ca4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-f7fc0755045dd7fd2e6c52d0825079be"></a>

### [`00693cb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00693/00693cb8.md) → [`00693d10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00693/00693d10.md) FUN_00693d10

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0068bad0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0068b/0068bad0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0068bb28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068b/0068bb28.md)

変更の種類 branch_condition_or_target, call, call_count, call_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_target` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00693d30",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00693cd8",
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
      "unmatched:00693cd0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00693ce4"
      ]
    ],
    [
      "00693d30",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "unmatched:00693ce4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00693d28",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00693d3c"
      ]
    ],
    [
      "00693d30",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00693d3c",
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
- 00693cd8 ["INT_ADD", "register:40f0:8", ["const:693cd8:8", "const:4:8"]]
- 00693cd8 ["CALL", null, ["ram:47acf4:8"]]
+ 00693d30 ["INT_ADD", "register:40f0:8", ["const:693d30:8", "const:4:8"]]
+ 00693d30 ["CALL", null, ["ram:47ad34:8"]]
- 00693cc8 ["CBRANCH", null, ["local:b7:8", "register:101:1"]]
+ 00693d20 ["CBRANCH", null, ["local:b8:8", "register:101:1"]]
- 00693cd0 ["CBRANCH", null, ["local:b4:8", "register:101:1"]]
~~~


<a id="compare-226a388daba1d6d2caf3d468b1b1e292"></a>

### [`00693d38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00693/00693d38.md) → [`00693d90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00693/00693d90.md) FUN_00693d90

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
      "unmatched:00693d5c",
      "DATA",
      [
        "storage",
        "00c74b50",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00693d60",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00693d64",
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
      "00693db4",
      "DATA",
      [
        "storage",
        "00c74c20",
        null,
        "undefined *"
      ]
    ],
    [
      "00693db8",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00693dbc",
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
- 00693d4c ["INT_ADD", "register:40f0:8", ["const:693d4c:8", "const:4:8"]]
- 00693d4c ["CALL", null, ["callee:00c57f60:8"]]
+ 00693da4 ["INT_ADD", "register:40f0:8", ["const:693da4:8", "const:4:8"]]
+ 00693da4 ["CALL", null, ["callee:00c57f60:8"]]
- 00693d58 ["COPY", "tmp:0:8", ["const:b50:8"]]
- 00693d58 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00693d58 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00693d58 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00693d5c ["COPY", "tmp:0:8", ["register:4040:8"]]
- 00693d5c ["COPY", "tmp:1:8", ["register:4048:8"]]
- 00693d5c ["COPY", "tmp:2:8", ["register:4000:8"]]
- 00693d5c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-d1b9527775d35a45d59a4a3292fc4513"></a>

### [`00693d6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00693/00693d6c.md) → [`00693dc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00693/00693dc4.md) FUN_00693dc4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00693d78",
      "DATA",
      [
        "storage",
        "00c74b50",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00693dd0",
      "DATA",
      [
        "storage",
        "00c74c20",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00693d6c ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 00693d6c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00693d70 ["COPY", "register:4048:8", ["const:c74000:8"]]
- 00693d74 ["COPY", "tmp:0:8", ["const:b50:8"]]
- 00693d74 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00693d74 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00693d74 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-f4754acee885b424260e3f95d27867e8"></a>

### [`00693d88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00693/00693d88.md) → [`00693de0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00693/00693de0.md) FUN_00693de0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 13件 [`00470994`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470994.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`0068bad0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0068b/0068bad0.md)
- 新版 呼出元 0件  · 呼出先 13件 [`004709d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/004709d4.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0068bb28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068b/0068bb28.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 79.27% / 新版 79.27%

優先判定に残った影響 `call_argument_candidate` 5件, `call_target` 2件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 16件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00693e24",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00693dcc",
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
      "site": "00693e40",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00693de8",
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
    "new": null,
    "old": {
      "definition_site": "00693e30",
      "incomplete_value": true,
      "site": "00693e3c",
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
            "const:30:8"
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
      "unmatched:00693d8c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00693d90",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00693d94",
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
      "00693de4",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00693de8",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00693dec",
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
- 00693dcc ["INT_ADD", "register:40f0:8", ["const:693dcc:8", "const:4:8"]]
- 00693dcc ["CALL", null, ["ram:47acf4:8"]]
+ 00693e24 ["INT_ADD", "register:40f0:8", ["const:693e24:8", "const:4:8"]]
+ 00693e24 ["CALL", null, ["ram:47ad34:8"]]
- 00693de8 ["INT_ADD", "register:40f0:8", ["const:693de8:8", "const:4:8"]]
- 00693de8 ["CALL", null, ["ram:47acf4:8"]]
+ 00693e40 ["INT_ADD", "register:40f0:8", ["const:693e40:8", "const:4:8"]]
+ 00693e40 ["CALL", null, ["ram:47ad34:8"]]
+ 00693de8 ["COPY", "tmp:0:8", ["register:40e0:8"]]
+ 00693de8 ["COPY", "tmp:1:8", ["register:40d8:8"]]
+ 00693de8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:80:8"]]
+ 00693de8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-c623459ab9cd9aa7292a0640d9cde91d"></a>

### [`00694290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00694/00694290.md) → [`006942e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00694/006942e8.md) FUN_006942e8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 38.46% / 新版 38.46%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00694290",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00694294",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:006942b4",
      "DATA",
      [
        "storage",
        "00c74bc0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006942e8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "006942ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0069430c",
      "DATA",
      [
        "storage",
        "00c74c90",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00694290 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00694290 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00694290 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00694290 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00694294 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00694294 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 00694298 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-eb22656dccb89f392a5f2257bdebc07e"></a>

### [`006942c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00694/006942c4.md) → [`0069431c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00694/0069431c.md) FUN_0069431c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006942d0",
      "DATA",
      [
        "storage",
        "00c74bc0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00694328",
      "DATA",
      [
        "storage",
        "00c74c90",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006942c4 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 006942c4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 006942c8 ["COPY", "register:4048:8", ["const:c74000:8"]]
- 006942cc ["COPY", "tmp:0:8", ["const:bc0:8"]]
- 006942cc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 006942cc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 006942cc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-9cde5dea028be84a889003b4b80b88d2"></a>

### [`006942e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00694/006942e0.md) → [`00694338`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00694/00694338.md) FUN_00694338

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006942f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:006942fc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00694348",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00694354",
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
- 006942e8 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 006942e8 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 00694340 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00694340 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 006942f0 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 006942f0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 006942f4 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-b809cf81c3aa78a8c11086336f9f097e"></a>

### [`0069434c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00694/0069434c.md) → [`006943a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00694/006943a4.md) FUN_006943a4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 61.54% / 新版 61.54%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00694370",
      "DATA",
      [
        "storage",
        "00c74c50",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00694374",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00694378",
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
      "006943c8",
      "DATA",
      [
        "storage",
        "00c74d20",
        null,
        "undefined *"
      ]
    ],
    [
      "006943cc",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "006943d0",
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
- 00694360 ["INT_ADD", "register:40f0:8", ["const:694360:8", "const:4:8"]]
- 00694360 ["CALL", null, ["callee:00c57f60:8"]]
+ 006943b8 ["INT_ADD", "register:40f0:8", ["const:6943b8:8", "const:4:8"]]
+ 006943b8 ["CALL", null, ["callee:00c57f60:8"]]
- 0069436c ["COPY", "tmp:0:8", ["const:c50:8"]]
- 0069436c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0069436c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0069436c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00694370 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 00694370 ["COPY", "tmp:1:8", ["register:4048:8"]]
- 00694370 ["COPY", "tmp:2:8", ["register:4000:8"]]
- 00694370 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-1ae840621f85d1e3d0288f06e1bd3d43"></a>

### [`00694380`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00694/00694380.md) → [`006943d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00694/006943d8.md) FUN_006943d8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0069438c",
      "DATA",
      [
        "storage",
        "00c74c50",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006943e4",
      "DATA",
      [
        "storage",
        "00c74d20",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00694380 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 00694380 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00694384 ["COPY", "register:4048:8", ["const:c74000:8"]]
- 00694388 ["COPY", "tmp:0:8", ["const:c50:8"]]
- 00694388 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00694388 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00694388 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-3d22e1584ca34504af85b704b3b01d9a"></a>

### [`0069439c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00694/0069439c.md) → [`006943f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00694/006943f4.md) FUN_006943f4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0068a9ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0068a/0068a9ac.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b6ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6ea4.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0068aa04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068a/0068aa04.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies

命令の説明率　旧版 95.65% / 新版 95.65%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0069441c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006943c4",
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
      "site": "0069442c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006943d4",
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
    "new": null,
    "old": {
      "definition_site": "006943ec",
      "incomplete_value": true,
      "site": "006943f4",
      "value": [
        "live",
        "register:4098:8"
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
      "0069441c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "0069442c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "0069441c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "0069442c",
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
- 006943c4 ["INT_ADD", "register:40f0:8", ["const:6943c4:8", "const:4:8"]]
- 006943c4 ["CALL", null, ["ram:47acf4:8"]]
+ 0069441c ["INT_ADD", "register:40f0:8", ["const:69441c:8", "const:4:8"]]
+ 0069441c ["CALL", null, ["ram:47ad34:8"]]
- 006943d4 ["INT_ADD", "register:40f0:8", ["const:6943d4:8", "const:4:8"]]
- 006943d4 ["CALL", null, ["ram:47acf4:8"]]
+ 0069442c ["INT_ADD", "register:40f0:8", ["const:69442c:8", "const:4:8"]]
+ 0069442c ["CALL", null, ["ram:47ad34:8"]]
- 006943f4 ["INT_ADD", "register:40f0:8", ["const:6943f4:8", "const:4:8"]]
- 006943f4 ["CALL", null, ["callee:0068aa04:8"]]
+ 0069444c ["INT_ADD", "register:40f0:8", ["const:69444c:8", "const:4:8"]]
+ 0069444c ["CALL", null, ["callee:0068aa04:8"]]
~~~


<a id="compare-a0e1c6c02d7c391f4a8370cd425c444a"></a>

### [`00694480`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00694/00694480.md) → [`006944d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00694/006944d8.md) FUN_006944d8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 38.46% / 新版 38.46%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00694480",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00694484",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:006944a4",
      "DATA",
      [
        "storage",
        "00c74cd0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006944d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "006944dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "006944fc",
      "DATA",
      [
        "storage",
        "00c74da0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00694480 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00694480 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00694480 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00694480 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00694484 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00694484 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 00694488 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-1435723f171821e4959e79662a030e1b"></a>

### [`006944b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00694/006944b4.md) → [`0069450c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00694/0069450c.md) FUN_0069450c

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
      "definition_site": "00694518",
      "incomplete_value": false,
      "site": "00694518",
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
            "const:da0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006944c0",
      "incomplete_value": false,
      "site": "006944c0",
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
            "const:cd0:8"
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
      "00694518",
      "DATA",
      [
        "storage",
        "00c74cd0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00694518",
      "DATA",
      [
        "storage",
        "00c74da0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006944bc ["COPY", "tmp:0:8", ["const:cd0:8"]]
- 006944bc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 006944bc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 006944bc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00694514 ["COPY", "tmp:0:8", ["const:da0:8"]]
+ 00694514 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00694514 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00694514 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-025384312002b968210d32bce16362c2"></a>

### [`0069456c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00694/0069456c.md) → [`006945c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00694/006945c4.md) FUN_006945c4

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
      "definition_site": "006945e8",
      "incomplete_value": false,
      "site": "006945e8",
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
            "const:e20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00694590",
      "incomplete_value": false,
      "site": "00694590",
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
            "const:d50:8"
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
      "006945e8",
      "DATA",
      [
        "storage",
        "00c74d50",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006945e8",
      "DATA",
      [
        "storage",
        "00c74e20",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00694580 ["INT_ADD", "register:40f0:8", ["const:694580:8", "const:4:8"]]
- 00694580 ["CALL", null, ["callee:00c57f60:8"]]
+ 006945d8 ["INT_ADD", "register:40f0:8", ["const:6945d8:8", "const:4:8"]]
+ 006945d8 ["CALL", null, ["callee:00c57f60:8"]]
- 0069458c ["COPY", "tmp:0:8", ["const:d50:8"]]
- 0069458c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0069458c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0069458c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006945e4 ["COPY", "tmp:0:8", ["const:e20:8"]]
+ 006945e4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006945e4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006945e4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c1e9546154ed3bce8fab0385970a35bd"></a>

### [`006945a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00694/006945a0.md) → [`006945f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00694/006945f8.md) FUN_006945f8

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
      "definition_site": "00694604",
      "incomplete_value": false,
      "site": "00694604",
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
            "const:e20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006945ac",
      "incomplete_value": false,
      "site": "006945ac",
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
            "const:d50:8"
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
      "00694604",
      "DATA",
      [
        "storage",
        "00c74d50",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00694604",
      "DATA",
      [
        "storage",
        "00c74e20",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006945a8 ["COPY", "tmp:0:8", ["const:d50:8"]]
- 006945a8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 006945a8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 006945a8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00694600 ["COPY", "tmp:0:8", ["const:e20:8"]]
+ 00694600 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00694600 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00694600 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-05a66ffa06e84c6eeb27d924e0f6d90b"></a>

### [`006945bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00694/006945bc.md) → [`00694614`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00694/00694614.md) FUN_00694614

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b6ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6ea4.md) [`00a468d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a46/00a468d8.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md) [`00a4692c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a4692c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.61% / 新版 96.61%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006946b8",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00694660",
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
      "site": "006946e4",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0069468c",
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
      "006946b8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "006946e4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "006946b8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006946e4",
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
- 00694634 ["INT_ADD", "register:40f0:8", ["const:694634:8", "const:4:8"]]
- 00694634 ["CALL", null, ["callee:00851550:8"]]
+ 0069468c ["INT_ADD", "register:40f0:8", ["const:69468c:8", "const:4:8"]]
+ 0069468c ["CALL", null, ["callee:00851550:8"]]
- 00694660 ["INT_ADD", "register:40f0:8", ["const:694660:8", "const:4:8"]]
- 00694660 ["CALL", null, ["ram:47acf4:8"]]
+ 006946b8 ["INT_ADD", "register:40f0:8", ["const:6946b8:8", "const:4:8"]]
+ 006946b8 ["CALL", null, ["ram:47ad34:8"]]
- 0069468c ["INT_ADD", "register:40f0:8", ["const:69468c:8", "const:4:8"]]
- 0069468c ["CALL", null, ["ram:47acf4:8"]]
+ 006946e4 ["INT_ADD", "register:40f0:8", ["const:6946e4:8", "const:4:8"]]
+ 006946e4 ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-07745f60b238c9d101dbb18b6ad8432b"></a>

### [`006946d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00694/006946d4.md) → [`0069472c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00694/0069472c.md) FUN_0069472c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00694750",
      "incomplete_value": false,
      "site": "00694758",
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
            "const:ea0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006946f8",
      "incomplete_value": false,
      "site": "00694700",
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
            "const:dd0:8"
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
      "00694758",
      "DATA",
      [
        "storage",
        "00c74dd0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00694758",
      "DATA",
      [
        "storage",
        "00c74ea0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006946e8 ["INT_ADD", "register:40f0:8", ["const:6946e8:8", "const:4:8"]]
- 006946e8 ["CALL", null, ["callee:00c57f60:8"]]
+ 00694740 ["INT_ADD", "register:40f0:8", ["const:694740:8", "const:4:8"]]
+ 00694740 ["CALL", null, ["callee:00c57f60:8"]]
- 006946f8 ["COPY", "tmp:0:8", ["const:dd0:8"]]
- 006946f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006946f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006946f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00694750 ["COPY", "tmp:0:8", ["const:ea0:8"]]
+ 00694750 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00694750 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00694750 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1420f0577dabb04abb49a9ff88a23eab"></a>

### [`0069471c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00694/0069471c.md) → [`00694774`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00694/00694774.md) FUN_00694774

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00694778",
      "incomplete_value": false,
      "site": "0069477c",
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
            "const:ea0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00694720",
      "incomplete_value": false,
      "site": "00694724",
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
            "const:dd0:8"
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
      "0069477c",
      "DATA",
      [
        "storage",
        "00c74dd0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0069477c",
      "DATA",
      [
        "storage",
        "00c74ea0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00694720 ["COPY", "tmp:0:8", ["const:dd0:8"]]
- 00694720 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00694720 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00694720 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00694778 ["COPY", "tmp:0:8", ["const:ea0:8"]]
+ 00694778 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00694778 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00694778 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-76b04cb8d8f02fce795ac543be233e23"></a>

### [`0069474c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00694/0069474c.md) → [`006947a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00694/006947a4.md) FUN_006947a4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 14件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 0件  · 呼出先 14件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 96.84% / 新版 96.84%

優先判定に残った影響 `call_argument_candidate` 3件, `call_target` 2件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00694850",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006947f8",
      "value": [
        "leaf",
        "ram:47acf4:8"
      ]
    },
    "ordinal": 2,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00694878",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00694820",
      "value": [
        "leaf",
        "ram:47acf4:8"
      ]
    },
    "ordinal": 4,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00694944",
      "incomplete_value": true,
      "site": "00694958",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40c8:8"
              ],
              [
                "leaf",
                "const:a0:8"
              ]
            ]
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
      "00694850",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00694878",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00694850",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00694878",
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
- 006947f8 ["INT_ADD", "register:40f0:8", ["const:6947f8:8", "const:4:8"]]
- 006947f8 ["CALL", null, ["ram:47acf4:8"]]
+ 00694850 ["INT_ADD", "register:40f0:8", ["const:694850:8", "const:4:8"]]
+ 00694850 ["CALL", null, ["ram:47ad34:8"]]
- 00694820 ["INT_ADD", "register:40f0:8", ["const:694820:8", "const:4:8"]]
- 00694820 ["CALL", null, ["ram:47acf4:8"]]
+ 00694878 ["INT_ADD", "register:40f0:8", ["const:694878:8", "const:4:8"]]
+ 00694878 ["CALL", null, ["ram:47ad34:8"]]
- 006948a8 ["INT_ADD", "register:40f0:8", ["const:6948a8:8", "const:4:8"]]
- 006948a8 ["CALL", null, ["callee:00c57f60:8"]]
+ 00694900 ["INT_ADD", "register:40f0:8", ["const:694900:8", "const:4:8"]]
+ 00694900 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-a99e81991c6ec176a3cc4293a8a62da1"></a>

### [`006949f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00694/006949f0.md) → [`00694a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00694/00694a48.md) FUN_00694a48

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
      "definition_site": "00694a6c",
      "incomplete_value": false,
      "site": "00694a6c",
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
            "const:f20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00694a14",
      "incomplete_value": false,
      "site": "00694a14",
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
            "const:e50:8"
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
      "00694a6c",
      "DATA",
      [
        "storage",
        "00c74e50",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00694a6c",
      "DATA",
      [
        "storage",
        "00c74f20",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00694a04 ["INT_ADD", "register:40f0:8", ["const:694a04:8", "const:4:8"]]
- 00694a04 ["CALL", null, ["callee:00c57f60:8"]]
+ 00694a5c ["INT_ADD", "register:40f0:8", ["const:694a5c:8", "const:4:8"]]
+ 00694a5c ["CALL", null, ["callee:00c57f60:8"]]
- 00694a10 ["COPY", "tmp:0:8", ["const:e50:8"]]
- 00694a10 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00694a10 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00694a10 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00694a68 ["COPY", "tmp:0:8", ["const:f20:8"]]
+ 00694a68 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00694a68 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00694a68 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5a868e049b74264897930ee0b1e66075"></a>

### [`00694a24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00694/00694a24.md) → [`00694a7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00694/00694a7c.md) FUN_00694a7c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00694a30",
      "DATA",
      [
        "storage",
        "00c74e50",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00694a88",
      "DATA",
      [
        "storage",
        "00c74f20",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00694a24 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 00694a24 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00694a28 ["COPY", "register:4048:8", ["const:c74000:8"]]
- 00694a2c ["COPY", "tmp:0:8", ["const:e50:8"]]
- 00694a2c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00694a2c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00694a2c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-921d3567957037ef210e7c525689572e"></a>

### [`00694a40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00694/00694a40.md) → [`00694a98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00694/00694a98.md) FUN_00694a98

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `store_condition` 3件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00694a48"
      ],
      [
        "FALL_THROUGH",
        "00694aa0"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00694aa0",
      "incomplete_value": true,
      "site": "00694aa4",
      "value": [
        "BOOL_NEGATE",
        "1",
        [
          [
            "live",
            "register:101:1"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00694a48",
      "incomplete_value": true,
      "site": "00694a4c",
      "value": [
        "BOOL_NEGATE",
        "1",
        [
          [
            "INT_EQUAL",
            "1",
            [
              "INT_SUB",
              [
                "leaf",
                "const:0:4"
              ]
            ]
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
        "00694a48"
      ],
      [
        "FALL_THROUGH",
        "00694aa0"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00694aa0",
      "incomplete_value": true,
      "site": "00694aa4",
      "value": [
        "BOOL_NEGATE",
        "1",
        [
          [
            "live",
            "register:101:1"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00694a48",
      "incomplete_value": true,
      "site": "00694a4c",
      "value": [
        "BOOL_NEGATE",
        "1",
        [
          [
            "INT_EQUAL",
            "1",
            [
              "INT_SUB",
              [
                "leaf",
                "const:0:4"
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
    "guard": [
      [
        "FALL_THROUGH",
        "00694a48"
      ],
      [
        "FALL_THROUGH",
        "00694aa0"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00694aa0",
      "incomplete_value": true,
      "site": "00694aa8",
      "value": [
        "BOOL_NEGATE",
        "1",
        [
          [
            "live",
            "register:101:1"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00694a48",
      "incomplete_value": true,
      "site": "00694a50",
      "value": [
        "BOOL_NEGATE",
        "1",
        [
          [
            "INT_EQUAL",
            "1",
            [
              "INT_SUB",
              [
                "leaf",
                "const:0:4"
              ]
            ]
          ]
        ]
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
      "unmatched:00694a48",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00694ad4"
      ]
    ],
    [
      "unmatched:00694a5c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00694aa0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00694ad4"
      ]
    ],
    [
      "00694ab4",
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
- 00694a40 ["COPY", "tmp:0:8", ["register:4010:8"]]
- 00694a40 ["LOAD", "tmp:1:4", ["const:1b1:8", "tmp:0:8"]]
- 00694a40 ["INT_ZEXT", "register:4040:8", ["tmp:1:4"]]
- 00694a44 ["COPY", "tmp:0:4", ["const:2:4"]]
- 00694a44 ["INT_LESSEQUAL", "register:105:1", ["const:2:4", "register:4040:4"]]
- 00694a44 ["INT_SBORROW", "register:106:1", ["register:4040:4", "const:2:4"]]
- 00694a44 ["INT_SUB", "tmp:1:4", ["register:4040:4", "tmp:0:4"]]
- 00694a48 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00694a48 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-f79605415f9ed11ed84089475c6c0ccd"></a>

### [`00694aac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00694/00694aac.md) → [`00694b04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00694/00694b04.md) FUN_00694b04

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
      "definition_site": "00694b28",
      "incomplete_value": false,
      "site": "00694b2c",
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
            "const:fa0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00694ad0",
      "incomplete_value": false,
      "site": "00694ad4",
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
            "const:ed0:8"
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
      "00694b2c",
      "DATA",
      [
        "storage",
        "00c74ed0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00694b2c",
      "DATA",
      [
        "storage",
        "00c74fa0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00694ac0 ["INT_ADD", "register:40f0:8", ["const:694ac0:8", "const:4:8"]]
- 00694ac0 ["CALL", null, ["callee:00c57f60:8"]]
+ 00694b18 ["INT_ADD", "register:40f0:8", ["const:694b18:8", "const:4:8"]]
+ 00694b18 ["CALL", null, ["callee:00c57f60:8"]]
- 00694ad0 ["COPY", "tmp:0:8", ["const:ed0:8"]]
- 00694ad0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00694ad0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00694ad0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00694b28 ["COPY", "tmp:0:8", ["const:fa0:8"]]
+ 00694b28 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00694b28 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00694b28 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8fdda277225f19c7cceccd0a6fecba1a"></a>

### [`00694aec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00694/00694aec.md) → [`00694b44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00694/00694b44.md) FUN_00694b44

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00694af4",
      "DATA",
      [
        "storage",
        "00c74ed0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00694b4c",
      "DATA",
      [
        "storage",
        "00c74fa0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00694aec ["COPY", "register:4040:8", ["const:c74000:8"]]
- 00694af0 ["COPY", "tmp:0:8", ["const:ed0:8"]]
- 00694af0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00694af0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00694af0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00694af4 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 00694af4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-281638886933ba142c1c37a520725683"></a>

### [`00694b14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00694/00694b14.md) → [`00694b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00694/00694b6c.md) FUN_00694b6c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 10件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`006847fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00684/006847fc.md) [`0068ed80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0068e/0068ed80.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 0件  · 呼出先 10件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0068483c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00684/0068483c.md) [`0068edd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068e/0068edd8.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, call, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 92.86% / 新版 92.86%

優先判定に残った影響 `call_target` 1件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00694bb8",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00694b60",
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
      "unmatched:00694b38",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "unmatched:00694b54",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00694bd8"
      ]
    ],
    [
      "00694bb8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00694b90",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "00694bac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00694bd8"
      ]
    ],
    [
      "00694bb8",
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
- 00694b60 ["INT_ADD", "register:40f0:8", ["const:694b60:8", "const:4:8"]]
- 00694b60 ["CALL", null, ["ram:47acf4:8"]]
+ 00694bb8 ["INT_ADD", "register:40f0:8", ["const:694bb8:8", "const:4:8"]]
+ 00694bb8 ["CALL", null, ["ram:47ad34:8"]]
- 00694b38 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 00694b38 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 00694b38 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
- 00694b4c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00694b4c ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
+ 00694ba4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00694ba4 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
~~~


<a id="compare-4e8645fbf5ec2c17cbc580e499309b7d"></a>

### [`00694cc4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00694/00694cc4.md) → [`00694d1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00694/00694d1c.md) FUN_00694d1c

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
      "definition_site": "00694d28",
      "incomplete_value": false,
      "site": "00694d2c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00694cd0",
      "incomplete_value": false,
      "site": "00694cd4",
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
            "const:f50:8"
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
      "00694d2c",
      "DATA",
      [
        "storage",
        "00c74f50",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00694d2c",
      "DATA",
      [
        "storage",
        "00c75020",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00694ccc ["COPY", "register:4048:8", ["const:c74000:8"]]
+ 00694d24 ["COPY", "register:4048:8", ["const:c75000:8"]]
- 00694cd0 ["COPY", "tmp:0:8", ["const:f50:8"]]
- 00694cd0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00694cd0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00694cd0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00694d28 ["COPY", "tmp:0:8", ["const:20:8"]]
+ 00694d28 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00694d28 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00694d28 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-9d30d2c8b2e953cec894b386342d5a2e"></a>

### [`00694ce8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00694/00694ce8.md) → [`00694d40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00694/00694d40.md) FUN_00694d40

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00694d68",
      "incomplete_value": true,
      "site": "00694d6c",
      "value": [
        "live",
        "register:4040:8"
      ]
    },
    "old": null,
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
      "unmatched:00694cf4",
      "DATA",
      [
        "storage",
        "00c74f50",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00694d4c",
      "DATA",
      [
        "storage",
        "00c75020",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00694d14 ["INT_ADD", "register:40f0:8", ["const:694d14:8", "const:4:8"]]
- 00694d14 ["CALL", null, ["callee:00c57f80:8"]]
+ 00694d6c ["INT_ADD", "register:40f0:8", ["const:694d6c:8", "const:4:8"]]
+ 00694d6c ["CALL", null, ["callee:00c57f80:8"]]
- 00694ce8 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:18:8"]]
- 00694ce8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00694cec ["COPY", "register:4048:8", ["const:c74000:8"]]
~~~


<a id="compare-46dca3f4e4548eee0d9eb599b085d7e5"></a>

### [`00694d28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00694/00694d28.md) → [`00694d80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00694/00694d80.md) FUN_00694d80

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`006924c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00692/006924c4.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0069251c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00692/0069251c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.65% / 新版 95.65%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00694da0",
      "incomplete_value": false,
      "site": "00694da8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00694d48",
      "incomplete_value": false,
      "site": "00694d50",
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
            "const:f50:8"
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
      "00694da8",
      "DATA",
      [
        "storage",
        "00c74f50",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00694da8",
      "DATA",
      [
        "storage",
        "00c75020",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00694d40 ["INT_ADD", "register:40f0:8", ["const:694d40:8", "const:4:8"]]
- 00694d40 ["CALL", null, ["callee:00c57f60:8"]]
+ 00694d98 ["INT_ADD", "register:40f0:8", ["const:694d98:8", "const:4:8"]]
+ 00694d98 ["CALL", null, ["callee:00c57f60:8"]]
- 00694d44 ["COPY", "register:4040:8", ["const:c74000:8"]]
+ 00694d9c ["COPY", "register:4040:8", ["const:c75000:8"]]
- 00694d48 ["COPY", "tmp:0:8", ["const:f50:8"]]
- 00694d48 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00694d48 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00694d48 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00694da0 ["COPY", "tmp:0:8", ["const:20:8"]]
+ 00694da0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00694da0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00694da0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-92b4fb0ff8f3bb6e0efe6097ee0c3041"></a>

### [`00694de0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00694/00694de0.md) → [`00694e38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00694/00694e38.md) FUN_00694e38

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`006924c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00692/006924c4.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0069251c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00692/0069251c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_value, unresolved_return_alignment

命令の説明率　旧版 92.50% / 新版 92.50%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00694e4c",
      "incomplete_value": false,
      "site": "00694e54",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00694df4",
      "incomplete_value": false,
      "site": "00694dfc",
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
            "const:f50:8"
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
      "definition_site": "00694e78",
      "incomplete_value": true,
      "site": "00694e7c",
      "value": [
        "live",
        "register:40a0:8"
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
      "00694e54",
      "DATA",
      [
        "storage",
        "00c74f50",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00694e54",
      "DATA",
      [
        "storage",
        "00c75020",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00694e54 ["COPY", "register:0:8", ["register:40f0:8"]]
- 00694e54 ["RETURN", null, ["register:0:8"]]
- 00694e7c ["INT_ADD", "register:40f0:8", ["const:694e7c:8", "const:4:8"]]
- 00694e7c ["CALL", null, ["callee:00c53ffc:8"]]
+ 00694ed4 ["INT_ADD", "register:40f0:8", ["const:694ed4:8", "const:4:8"]]
+ 00694ed4 ["CALL", null, ["callee:00c53ffc:8"]]
- 00694df0 ["COPY", "register:4040:8", ["const:c74000:8"]]
+ 00694e48 ["COPY", "register:4040:8", ["const:c75000:8"]]
~~~


<a id="compare-2aa27b02844a43176d7f49a872b9dc9f"></a>

### [`00694e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00694/00694e80.md) → [`00694ed8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00694/00694ed8.md) FUN_00694ed8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_condition` 1件

アドレスに依存する影響 `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00694e88"
      ],
      [
        "FALL_THROUGH",
        "00694ee0"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00694ee0",
      "incomplete_value": true,
      "site": "00694ee4",
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
    "old": {
      "definition_site": "00694e88",
      "incomplete_value": true,
      "site": "00694e8c",
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
      "unmatched:00694e88",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00694eec"
      ]
    ]
  ],
  "added": [
    [
      "00694ee0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00694eec"
      ]
    ]
  ]
}
~~~


~~~diff
- 00694e80 ["COPY", "register:4040:8", ["register:4000:8"]]
- 00694e84 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:18:8"]]
- 00694e84 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
- 00694e88 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00694e88 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
~~~


<a id="compare-48f16dc6440b60147b9c9af8d5519567"></a>

### [`00694ecc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00694/00694ecc.md) → [`00694f24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00694/00694f24.md) FUN_00694f24

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 13件 [`00684fb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00684/00684fb0.md) [`00685374`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00685/00685374.md) [`00691e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00691/00691e2c.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b9290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9290.md)
- 新版 呼出元 0件  · 呼出先 13件 [`00684ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00684/00684ff0.md) [`006853b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00685/006853b4.md) [`00691e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00691/00691e84.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b92e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b92e8.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 96.48% / 新版 96.48%

優先判定に残った影響 `call_argument_candidate` 7件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00694fd0",
      "incomplete_value": true,
      "site": "00694fe0",
      "value": [
        "TRUNC",
        "4",
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
                "register:4040:8"
              ]
            ]
          ]
        ]
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
      "definition_site": "00694fd4",
      "incomplete_value": true,
      "site": "00694fe0",
      "value": [
        "TRUNC",
        "4",
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
    "ordinal": 2,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00694fd8",
      "incomplete_value": true,
      "site": "00694fe0",
      "value": [
        "TRUNC",
        "4",
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
      "00694f80",
      "DATA",
      [
        "storage",
        "00436bcc",
        null,
        "byte[59]"
      ]
    ],
    [
      "unmatched:00694f58",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00694ffc"
      ]
    ],
    [
      "00694ff4",
      "DATA",
      [
        "storage",
        "00436bcc",
        null,
        "byte[59]"
      ]
    ]
  ],
  "added": [
    [
      "00694f80",
      "DATA",
      [
        "storage",
        "00436bcc",
        null,
        "byte[47]"
      ]
    ],
    [
      "00694fb0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00694ffc"
      ]
    ],
    [
      "00694ff4",
      "DATA",
      [
        "storage",
        "00436bcc",
        null,
        "byte[47]"
      ]
    ]
  ]
}
~~~


~~~diff
- 00694f88 ["INT_ADD", "register:40f0:8", ["const:694f88:8", "const:4:8"]]
- 00694f88 ["CALL", null, ["callee:009dce94:8"]]
+ 00694fe0 ["INT_ADD", "register:40f0:8", ["const:694fe0:8", "const:4:8"]]
+ 00694fe0 ["CALL", null, ["callee:009dce94:8"]]
- 00694fb0 ["CBRANCH", null, ["local:b24:8", "register:101:1"]]
+ 00695008 ["CBRANCH", null, ["local:b25:8", "register:101:1"]]
- 00695008 ["INT_ADD", "register:40f0:8", ["const:695008:8", "const:4:8"]]
- 00695008 ["CALL", null, ["callee:00c58030:8"]]
+ 00695060 ["INT_ADD", "register:40f0:8", ["const:695060:8", "const:4:8"]]
+ 00695060 ["CALL", null, ["callee:00c58030:8"]]
~~~


<a id="compare-4947c78b57f2baa759737f741b5deabe"></a>

### [`006952f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00695/006952f4.md) → [`0069534c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00695/0069534c.md) FUN_0069534c

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
      "definition_site": "00695358",
      "incomplete_value": false,
      "site": "0069535c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00695300",
      "incomplete_value": false,
      "site": "00695304",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:0:8"
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
      "0069535c",
      "DATA",
      [
        "storage",
        "00c75000",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0069535c",
      "DATA",
      [
        "storage",
        "00c750d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00695300 ["COPY", "tmp:0:8", ["const:0:8"]]
- 00695300 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00695300 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00695300 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00695358 ["COPY", "tmp:0:8", ["const:d0:8"]]
+ 00695358 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00695358 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00695358 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-06eea2c89e8fb2c73c4dfbb5335867f7"></a>

### [`00695318`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00695/00695318.md) → [`00695370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00695/00695370.md) FUN_00695370

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
      "definition_site": "00695378",
      "incomplete_value": false,
      "site": "0069537c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00695320",
      "incomplete_value": false,
      "site": "00695324",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:0:8"
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
      "0069537c",
      "DATA",
      [
        "storage",
        "00c75000",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0069537c",
      "DATA",
      [
        "storage",
        "00c750d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00695320 ["COPY", "tmp:0:8", ["const:0:8"]]
- 00695320 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00695320 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00695320 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00695378 ["COPY", "tmp:0:8", ["const:d0:8"]]
+ 00695378 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00695378 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00695378 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00695344 ["INT_ADD", "register:40f0:8", ["const:695344:8", "const:4:8"]]
- 00695344 ["CALL", null, ["callee:00c57f80:8"]]
+ 0069539c ["INT_ADD", "register:40f0:8", ["const:69539c:8", "const:4:8"]]
+ 0069539c ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-fb902f7787bd2d9e279f7788f5485c60"></a>

### [`00695358`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00695/00695358.md) → [`006953b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00695/006953b0.md) FUN_006953b0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`006924c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00692/006924c4.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0069251c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00692/0069251c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.83% / 新版 95.83%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006953d0",
      "incomplete_value": false,
      "site": "006953d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00695378",
      "incomplete_value": false,
      "site": "00695380",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:0:8"
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
      "006953d8",
      "DATA",
      [
        "storage",
        "00c75000",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006953d8",
      "DATA",
      [
        "storage",
        "00c750d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00695370 ["INT_ADD", "register:40f0:8", ["const:695370:8", "const:4:8"]]
- 00695370 ["CALL", null, ["callee:00c57f60:8"]]
+ 006953c8 ["INT_ADD", "register:40f0:8", ["const:6953c8:8", "const:4:8"]]
+ 006953c8 ["CALL", null, ["callee:00c57f60:8"]]
- 00695378 ["COPY", "tmp:0:8", ["const:0:8"]]
- 00695378 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00695378 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00695378 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006953d0 ["COPY", "tmp:0:8", ["const:d0:8"]]
+ 006953d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006953d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006953d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 006953b4 ["INT_ADD", "register:40f0:8", ["const:6953b4:8", "const:4:8"]]
- 006953b4 ["CALL", null, ["callee:00c57f60:8"]]
+ 0069540c ["INT_ADD", "register:40f0:8", ["const:69540c:8", "const:4:8"]]
+ 0069540c ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-9984cc8c760303bfd58fa5c4db16cb52"></a>

### [`00695418`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00695/00695418.md) → [`00695470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00695/00695470.md) FUN_00695470

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`006924c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00692/006924c4.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0069251c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00692/0069251c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.24% / 新版 95.24%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00695484",
      "incomplete_value": false,
      "site": "0069548c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0069542c",
      "incomplete_value": false,
      "site": "00695434",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:0:8"
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
      "0069548c",
      "DATA",
      [
        "storage",
        "00c75000",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0069548c",
      "DATA",
      [
        "storage",
        "00c750d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0069542c ["COPY", "tmp:0:8", ["const:0:8"]]
- 0069542c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0069542c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0069542c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00695484 ["COPY", "tmp:0:8", ["const:d0:8"]]
+ 00695484 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00695484 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00695484 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00695468 ["INT_ADD", "register:40f0:8", ["const:695468:8", "const:4:8"]]
- 00695468 ["CALL", null, ["callee:00c57f60:8"]]
+ 006954c0 ["INT_ADD", "register:40f0:8", ["const:6954c0:8", "const:4:8"]]
+ 006954c0 ["CALL", null, ["callee:00c57f60:8"]]
- 00695480 ["INT_ADD", "register:40f0:8", ["const:695480:8", "const:4:8"]]
- 00695480 ["CALL", null, ["callee:00c580d0:8"]]
+ 006954d8 ["INT_ADD", "register:40f0:8", ["const:6954d8:8", "const:4:8"]]
+ 006954d8 ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-703bb4ccba6f89f18c9a511916c6fc5e"></a>

### [`0069550c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00695/0069550c.md) → [`00695564`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00695/00695564.md) FUN_00695564

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 24件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`00467b60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b60.md) [`00467f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467f54.md) [`00469c04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00469/00469c04.md)
- 新版 呼出元 0件  · 呼出先 24件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md)

変更の種類 call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 93.52% / 新版 93.52%

優先判定に残った影響 `call_argument_candidate` 8件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006955f8",
      "incomplete_value": false,
      "site": "0069560c",
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
      "definition_site": "006955a0",
      "incomplete_value": false,
      "site": "006955b4",
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
    "ordinal": 4,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00695620",
      "incomplete_value": true,
      "site": "00695638",
      "value": [
        "live",
        "register:40c0:8"
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
      "definition_site": "0069562c",
      "incomplete_value": true,
      "site": "00695638",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "INT_SUB",
            "4",
            [
              [
                "live",
                "register:4098:4"
              ],
              [
                "leaf",
                "const:a4:4"
              ]
            ]
          ]
        ]
      ]
    },
    "old": null,
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
      "unmatched:0069557c",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "unmatched:00695580",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00695588",
      "PARAM",
      [
        "storage",
        "00c74fd8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "006955d4",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006955d8",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "006955e0",
      "PARAM",
      [
        "storage",
        "00c750a8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 006955b4 ["INT_ADD", "register:40f0:8", ["const:6955b4:8", "const:4:8"]]
- 006955b4 ["CALL", null, ["callee:00695c04:8"]]
+ 0069560c ["INT_ADD", "register:40f0:8", ["const:69560c:8", "const:4:8"]]
+ 0069560c ["CALL", null, ["callee:00695c04:8"]]
- 006955e0 ["INT_ADD", "register:40f0:8", ["const:6955e0:8", "const:4:8"]]
- 006955e0 ["CALL", null, ["callee:0046a928:8"]]
+ 00695638 ["INT_ADD", "register:40f0:8", ["const:695638:8", "const:4:8"]]
+ 00695638 ["CALL", null, ["callee:0046a928:8"]]
- 0069560c ["INT_ADD", "register:40f0:8", ["const:69560c:8", "const:4:8"]]
- 0069560c ["CALL", null, ["callee:00851550:8"]]
+ 00695664 ["INT_ADD", "register:40f0:8", ["const:695664:8", "const:4:8"]]
+ 00695664 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-48a4a7e88be6add1c914fc3ec577acd0"></a>

### [`006959f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00695/006959f0.md) → [`00695a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00695/00695a48.md) FUN_00695a48

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`0069550c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00695/0069550c.md) [`00696710`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00696/00696710.md) [`00697fd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00697/00697fd4.md) [`0069927c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00699/0069927c.md) · 呼出先 3件 [`005d8a6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d8/005d8a6c.md) [`00695f50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00695/00695f50.md) [`00c5a820`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a820.md)
- 新版 呼出元 4件 [`00695564`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00695/00695564.md) [`00696768`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00696/00696768.md) [`0069802c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/0069802c.md) [`006992d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00699/006992d4.md) · 呼出先 3件 [`005d8aac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8aac.md) [`00695fa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00695/00695fa8.md) [`00c5a8f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8f0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 94.20% / 新版 94.20%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00695b34",
      "incomplete_value": true,
      "site": "00695b40",
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
            "const:10:8"
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
      "unmatched:00695ac4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00695b2c"
      ]
    ]
  ],
  "added": [
    [
      "00695b1c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00695b2c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00695ae8 ["INT_ADD", "register:40f0:8", ["const:695ae8:8", "const:4:8"]]
- 00695ae8 ["CALL", null, ["callee:00695fa8:8"]]
+ 00695b40 ["INT_ADD", "register:40f0:8", ["const:695b40:8", "const:4:8"]]
+ 00695b40 ["CALL", null, ["callee:00695fa8:8"]]
- 00695a28 ["BRANCH", null, ["local:b13:8"]]
+ 00695a80 ["BRANCH", null, ["local:b14:8"]]
- 00695a40 ["BRANCH", null, ["local:b13:8"]]
+ 00695a98 ["BRANCH", null, ["local:b14:8"]]
~~~


<a id="compare-84a6736e64fdcc732e50a6ea86baf2bb"></a>

### [`00695b1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00695/00695b1c.md) → [`00695b74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00695/00695b74.md) FUN_00695b74

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00695bcc",
      "incomplete_value": false,
      "site": "00695bd0",
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
      "definition_site": "00695bc8",
      "incomplete_value": true,
      "site": "00695bd0",
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


~~~diff
- 00695b78 ["INT_ADD", "register:40f0:8", ["const:695b78:8", "const:4:8"]]
- 00695b78 ["CALL", null, ["callee:00c53da0:8"]]
+ 00695bd0 ["INT_ADD", "register:40f0:8", ["const:695bd0:8", "const:4:8"]]
+ 00695bd0 ["CALL", null, ["callee:00c53da0:8"]]
- 00695b40 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00695b40 ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
+ 00695b98 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 00695b98 ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
- 00695b58 ["INT_ADD", "register:40f0:8", ["const:695b58:8", "const:4:8"]]
- 00695b58 ["CALL", null, ["callee:00c57f80:8"]]
+ 00695bb0 ["INT_ADD", "register:40f0:8", ["const:695bb0:8", "const:4:8"]]
+ 00695bb0 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-6c071e57df3a95a49af76793d2f4d3e6"></a>

### [`00695bac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00695/00695bac.md) → [`00695c04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00695/00695c04.md) FUN_00695c04

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 20件 [`0069550c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00695/0069550c.md) [`00697fd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00697/00697fd4.md) [`00698a78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00698/00698a78.md) [`0090b908`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0090b/0090b908.md) [`0091ab78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0091a/0091ab78.md) · 呼出先 4件 [`005d8a6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d8/005d8a6c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5a820`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a820.md)
- 新版 呼出元 20件 [`00695564`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00695/00695564.md) [`0069802c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/0069802c.md) [`00698ad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/00698ad0.md) [`0090b95c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090b/0090b95c.md) [`0091abcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0091a/0091abcc.md) · 呼出先 4件 [`005d8aac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8aac.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a8f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8f0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 90.96% / 新版 90.96%

優先判定に残った影響 `store_condition` 3件, `unresolved_branch_alignment` 5件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00695dfc"
      ],
      [
        "FALL_THROUGH",
        "00695e54"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00695e54",
      "incomplete_value": true,
      "site": "00695e5c",
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
      "definition_site": "00695dfc",
      "incomplete_value": true,
      "site": "00695e04",
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
    "ordinal": 19,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "00695dfc"
      ],
      [
        "CONDITIONAL_JUMP",
        "00695e54"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00695e54",
      "incomplete_value": true,
      "site": "00695e68",
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
      "definition_site": "00695dfc",
      "incomplete_value": true,
      "site": "00695e10",
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
    "ordinal": 20,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "00695dfc"
      ],
      [
        "CONDITIONAL_JUMP",
        "00695e54"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00695e54",
      "incomplete_value": true,
      "site": "00695e70",
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
      "definition_site": "00695dfc",
      "incomplete_value": true,
      "site": "00695e18",
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
    "ordinal": 22,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00695dd0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00695e34"
      ]
    ],
    [
      "unmatched:00695dfc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00695e64"
      ]
    ],
    [
      "unmatched:00695e74",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00695f14"
      ]
    ]
  ],
  "added": [
    [
      "00695e28",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00695e34"
      ]
    ],
    [
      "00695e54",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00695e64"
      ]
    ],
    [
      "00695ecc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00695f14"
      ]
    ]
  ]
}
~~~


~~~diff
- 00695dac ["BRANCH", null, ["local:b65:8"]]
+ 00695e04 ["BRANCH", null, ["local:b66:8"]]
- 00695dc0 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
- 00695dc0 ["CBRANCH", null, ["local:b40:8", "tmp:0:1"]]
+ 00695e18 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
+ 00695e18 ["CBRANCH", null, ["local:b41:8", "tmp:0:1"]]
- 00695e70 ["INT_LESSEQUAL", "register:105:1", ["register:4048:8", "register:4040:8"]]
- 00695e70 ["INT_SBORROW", "register:106:1", ["register:4040:8", "register:4048:8"]]
- 00695e70 ["INT_SUB", "tmp:0:8", ["register:4040:8", "register:4048:8"]]
- 00695e70 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
~~~


<a id="compare-4cef58d9f82a16fedaf0373dfe878b12"></a>

### [`00695ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00695/00695ec0.md) → [`00695f18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00695/00695f18.md) FUN_00695f18

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 97.22% / 新版 97.22%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00695f6c",
      "incomplete_value": true,
      "site": "00695f74",
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
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00695f34",
      "incomplete_value": true,
      "site": "00695f38",
      "value": [
        "live",
        "register:40a8:8"
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
      "unmatched:00695ee4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00695f98"
      ]
    ]
  ],
  "added": [
    [
      "00695f3c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00695f98"
      ]
    ]
  ]
}
~~~


~~~diff
- 00695f1c ["INT_ADD", "register:40f0:8", ["const:695f1c:8", "const:4:8"]]
- 00695f1c ["CALL", null, ["callee:00c53da0:8"]]
+ 00695f74 ["INT_ADD", "register:40f0:8", ["const:695f74:8", "const:4:8"]]
+ 00695f74 ["CALL", null, ["callee:00c53da0:8"]]
- 00695f38 ["INT_ADD", "register:40f0:8", ["const:695f38:8", "const:4:8"]]
- 00695f38 ["CALL", null, ["callee:00c57f50:8"]]
+ 00695f90 ["INT_ADD", "register:40f0:8", ["const:695f90:8", "const:4:8"]]
+ 00695f90 ["CALL", null, ["callee:00c57f50:8"]]
- 00695ed8 ["INT_NOTEQUAL", "tmp:0:1", ["register:40b0:8", "const:0:8"]]
- 00695ed8 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00695f30 ["INT_NOTEQUAL", "tmp:0:1", ["register:40b0:8", "const:0:8"]]
+ 00695f30 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
~~~


<a id="compare-d0d63cc84c8849292155c00403f3cc6b"></a>

### [`00695f50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00695/00695f50.md) → [`00695fa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00695/00695fa8.md) FUN_00695fa8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`006959f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00695/006959f0.md) · 呼出先 5件 [`005d8a6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d8/005d8a6c.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5a820`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a820.md)
- 新版 呼出元 1件 [`00695a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00695/00695a48.md) · 呼出先 5件 [`005d8aac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8aac.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a8f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8f0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 90.10% / 新版 90.10%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0069602c",
      "incomplete_value": false,
      "site": "00696034",
      "value": [
        "leaf",
        "const:28:8"
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
      "unmatched:00695f54",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00695f58",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00695f5c",
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
      "00695fac",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00695fb0",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00695fb4",
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
- 00696034 ["INT_ADD", "register:40f0:8", ["const:696034:8", "const:4:8"]]
- 00696034 ["CALL", null, ["callee:00c57f60:8"]]
+ 0069608c ["INT_ADD", "register:40f0:8", ["const:69608c:8", "const:4:8"]]
+ 0069608c ["CALL", null, ["callee:00c57f60:8"]]
- 00695f50 ["INT_SUB", "register:8:8", ["register:8:8", "const:70:8"]]
- 00695f54 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00695f54 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00695f54 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00695f54 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-5399102f18edc3e8a4a0651e53276d42"></a>

### [`00696278`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00696/00696278.md) → [`006962d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00696/006962d0.md) FUN_006962d0

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
      "definition_site": "006962f0",
      "incomplete_value": false,
      "site": "006962f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:150:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00696298",
      "incomplete_value": false,
      "site": "0069629c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:80:8"
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
      "006962f4",
      "DATA",
      [
        "storage",
        "00c75080",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006962f4",
      "DATA",
      [
        "storage",
        "00c75150",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0069628c ["INT_ADD", "register:40f0:8", ["const:69628c:8", "const:4:8"]]
- 0069628c ["CALL", null, ["callee:00c57f60:8"]]
+ 006962e4 ["INT_ADD", "register:40f0:8", ["const:6962e4:8", "const:4:8"]]
+ 006962e4 ["CALL", null, ["callee:00c57f60:8"]]
- 00696298 ["COPY", "tmp:0:8", ["const:80:8"]]
- 00696298 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00696298 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00696298 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006962f0 ["COPY", "tmp:0:8", ["const:150:8"]]
+ 006962f0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006962f0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006962f0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9cf9641ccb858aee497d7c5c000273fb"></a>

### [`006962b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00696/006962b0.md) → [`00696308`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00696/00696308.md) FUN_00696308

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
      "definition_site": "0069630c",
      "incomplete_value": false,
      "site": "00696310",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:150:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006962b4",
      "incomplete_value": false,
      "site": "006962b8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:80:8"
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
      "00696310",
      "DATA",
      [
        "storage",
        "00c75080",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00696310",
      "DATA",
      [
        "storage",
        "00c75150",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006962b4 ["COPY", "tmp:0:8", ["const:80:8"]]
- 006962b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006962b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006962b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0069630c ["COPY", "tmp:0:8", ["const:150:8"]]
+ 0069630c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0069630c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0069630c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a3a75b49abbdca2bf4d5d8ebdf0d2163"></a>

### [`006962d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00696/006962d0.md) → [`00696328`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00696/00696328.md) FUN_00696328

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 11件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`00688294`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00688/00688294.md) [`0068974c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00689/0068974c.md) [`0071bed8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071b/0071bed8.md)
- 新版 呼出元 0件  · 呼出先 11件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`006882d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00688/006882d4.md) [`0068978c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00689/0068978c.md) [`0071bf30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071b/0071bf30.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.77% / 新版 96.77%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0069635c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00696304",
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
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006963e0",
      "value": [
        "leaf",
        "ram:71bf30:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00696388",
      "value": [
        "leaf",
        "ram:71bed8:8"
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
      "0069635c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "006963e0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0071bed8"
      ]
    ]
  ],
  "added": [
    [
      "0069635c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006963e0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0071bf30"
      ]
    ]
  ]
}
~~~


~~~diff
- 00696304 ["INT_ADD", "register:40f0:8", ["const:696304:8", "const:4:8"]]
- 00696304 ["CALL", null, ["ram:47acf4:8"]]
+ 0069635c ["INT_ADD", "register:40f0:8", ["const:69635c:8", "const:4:8"]]
+ 0069635c ["CALL", null, ["ram:47ad34:8"]]
- 00696388 ["INT_ADD", "register:40f0:8", ["const:696388:8", "const:4:8"]]
- 00696388 ["CALL", null, ["ram:71bed8:8"]]
+ 006963e0 ["INT_ADD", "register:40f0:8", ["const:6963e0:8", "const:4:8"]]
+ 006963e0 ["CALL", null, ["ram:71bf30:8"]]
- 00696300 ["INT_ADD", "register:40f0:8", ["const:696300:8", "const:4:8"]]
- 00696300 ["CALL", null, ["callee:008b91d0:8"]]
+ 00696358 ["INT_ADD", "register:40f0:8", ["const:696358:8", "const:4:8"]]
+ 00696358 ["CALL", null, ["callee:008b91d0:8"]]
~~~


<a id="compare-6305dd4d78cdb31cc38b814dd94730ac"></a>

### [`006963f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00696/006963f4.md) → [`0069644c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00696/0069644c.md) FUN_0069644c

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
      "definition_site": "00696470",
      "incomplete_value": false,
      "site": "00696470",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:1d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00696418",
      "incomplete_value": false,
      "site": "00696418",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:100:8"
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
      "00696470",
      "DATA",
      [
        "storage",
        "00c75100",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00696470",
      "DATA",
      [
        "storage",
        "00c751d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00696408 ["INT_ADD", "register:40f0:8", ["const:696408:8", "const:4:8"]]
- 00696408 ["CALL", null, ["callee:00c57f60:8"]]
+ 00696460 ["INT_ADD", "register:40f0:8", ["const:696460:8", "const:4:8"]]
+ 00696460 ["CALL", null, ["callee:00c57f60:8"]]
- 00696414 ["COPY", "tmp:0:8", ["const:100:8"]]
- 00696414 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00696414 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00696414 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0069646c ["COPY", "tmp:0:8", ["const:1d0:8"]]
+ 0069646c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0069646c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0069646c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5229c3808514a54538c1a86479b1d03e"></a>

### [`00696428`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00696/00696428.md) → [`00696480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00696/00696480.md) FUN_00696480

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
      "definition_site": "0069648c",
      "incomplete_value": false,
      "site": "0069648c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:1d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00696434",
      "incomplete_value": false,
      "site": "00696434",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:100:8"
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
      "0069648c",
      "DATA",
      [
        "storage",
        "00c75100",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0069648c",
      "DATA",
      [
        "storage",
        "00c751d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00696430 ["COPY", "tmp:0:8", ["const:100:8"]]
- 00696430 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00696430 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00696430 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00696488 ["COPY", "tmp:0:8", ["const:1d0:8"]]
+ 00696488 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00696488 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00696488 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-444a7782d6700a2994c604b7ad394db7"></a>

### [`00696444`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00696/00696444.md) → [`0069649c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00696/0069649c.md) FUN_0069649c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0068f5d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0068f/0068f5d8.md) [`00690ea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00690/00690ea0.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0068f630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068f/0068f630.md) [`00690ef8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00690/00690ef8.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 95.83% / 新版 95.83%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00696500",
      "incomplete_value": true,
      "site": "00696504",
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
            "const:3078:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006964a8",
      "incomplete_value": true,
      "site": "006964ac",
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
            "register:40a8:8"
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
      "unmatched:00696478",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "006964d0",
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
- 006964ac ["INT_ADD", "register:40f0:8", ["const:6964ac:8", "const:4:8"]]
- 006964ac ["CALL", null, ["callee:00a832d0:8"]]
+ 00696504 ["INT_ADD", "register:40f0:8", ["const:696504:8", "const:4:8"]]
+ 00696504 ["CALL", null, ["callee:00a832d0:8"]]
- 00696464 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00696464 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 006964bc ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 006964bc ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 0069646c ["CBRANCH", null, ["local:b3:8", "register:101:1"]]
+ 006964c4 ["CBRANCH", null, ["local:b4:8", "register:101:1"]]
~~~


