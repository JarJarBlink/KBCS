# v16.0.2 → v16.0.3 · 最優先の変更候補 (79)

[一覧の目次](README.md)

<a id="compare-030565b2822433d223f170c163676202"></a>

### [`00af652c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af6/00af652c.md) → [`00af7520`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af7/00af7520.md) FUN_00af7520

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00710128`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710128.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`007104d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00710/007104d8.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af652c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af6530",
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
      "00af7520",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00af7524",
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
- 00af652c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00af652c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00af652c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00af652c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00af6530 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00af6530 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00af6530 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00af6530 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00af6534 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-b30375b5bece060dc948db42c665fa9e"></a>

### [`00af659c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af6/00af659c.md) → [`00af7590`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af7/00af7590.md) FUN_00af7590

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 4件 [`0070eab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00710128`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710128.md) [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) [`00716de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 4件 [`0070ee64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) [`007104d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00710/007104d8.md) [`00711df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) [`00717198`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00717/00717198.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 96.43% / 新版 96.43%

~~~diff
- 00af65b0 ["INT_ADD", "register:40f0:8", ["const:af65b0:8", "const:4:8"]]
- 00af65b0 ["CALL", null, ["callee:008524fc:8"]]
+ 00af75a4 ["INT_ADD", "register:40f0:8", ["const:af75a4:8", "const:4:8"]]
+ 00af75a4 ["CALL", null, ["callee:008524fc:8"]]
- 00af65c4 ["INT_ADD", "register:40f0:8", ["const:af65c4:8", "const:4:8"]]
- 00af65c4 ["CALL", null, ["callee:005e7810:8"]]
+ 00af75b8 ["INT_ADD", "register:40f0:8", ["const:af75b8:8", "const:4:8"]]
+ 00af75b8 ["CALL", null, ["callee:005e7810:8"]]
- 00af65c8 ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
- 00af65c8 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00af65c8 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00af65c8 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 00af75bc ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
+ 00af75bc ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00af75bc ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00af75bc ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
~~~


<a id="compare-c1bb791d47531de71a7a58f4e2c4f95c"></a>

### [`00af660c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af6/00af660c.md) → [`00af7600`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af7/00af7600.md) FUN_00af7600

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00710128`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710128.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`007104d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00710/007104d8.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00af6620 ["INT_ADD", "register:40f0:8", ["const:af6620:8", "const:4:8"]]
- 00af6620 ["CALL", null, ["callee:008524fc:8"]]
+ 00af7614 ["INT_ADD", "register:40f0:8", ["const:af7614:8", "const:4:8"]]
+ 00af7614 ["CALL", null, ["callee:008524fc:8"]]
- 00af6634 ["INT_ADD", "register:40f0:8", ["const:af6634:8", "const:4:8"]]
- 00af6634 ["CALL", null, ["callee:005e7810:8"]]
+ 00af7628 ["INT_ADD", "register:40f0:8", ["const:af7628:8", "const:4:8"]]
+ 00af7628 ["CALL", null, ["callee:005e7810:8"]]
- 00af6638 ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
- 00af6638 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00af6638 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00af6638 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 00af762c ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
+ 00af762c ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00af762c ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00af762c ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
~~~


<a id="compare-20b1c6da687f6347d70274811459fc63"></a>

### [`00af667c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af6/00af667c.md) → [`00af7670`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af7/00af7670.md) FUN_00af7670

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`0070eab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00710128`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710128.md) [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) [`00716de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 4件 [`0070ee64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) [`007104d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00710/007104d8.md) [`00711df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) [`00717198`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00717/00717198.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 89.29% / 新版 89.29%

アドレスに依存する影響 `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af667c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af6680",
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
      "00af7670",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00af7674",
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
- 00af667c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00af667c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00af667c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00af667c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00af6680 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00af6680 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00af6680 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00af6680 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00af6684 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-3341bba5458504d1ebcce3255d1da06c"></a>

### [`00af66ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af6/00af66ec.md) → [`00af76e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af7/00af76e0.md) FUN_00af76e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00710128`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710128.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`007104d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00710/007104d8.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00af6700 ["INT_ADD", "register:40f0:8", ["const:af6700:8", "const:4:8"]]
- 00af6700 ["CALL", null, ["callee:008524fc:8"]]
+ 00af76f4 ["INT_ADD", "register:40f0:8", ["const:af76f4:8", "const:4:8"]]
+ 00af76f4 ["CALL", null, ["callee:008524fc:8"]]
- 00af6714 ["INT_ADD", "register:40f0:8", ["const:af6714:8", "const:4:8"]]
- 00af6714 ["CALL", null, ["callee:005e7810:8"]]
+ 00af7708 ["INT_ADD", "register:40f0:8", ["const:af7708:8", "const:4:8"]]
+ 00af7708 ["CALL", null, ["callee:005e7810:8"]]
- 00af6718 ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
- 00af6718 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00af6718 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00af6718 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 00af770c ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
+ 00af770c ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00af770c ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00af770c ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
~~~


<a id="compare-c018a33215badb934e4644775347ac77"></a>

### [`00af675c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af6/00af675c.md) → [`00af7750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af7/00af7750.md) FUN_00af7750

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 6件 [`005f3ab0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f3/005f3ab0.md) [`005fb97c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fb/005fb97c.md) [`0070eab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00710128`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710128.md) [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 6件 [`005f3e60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005f3/005f3e60.md) [`005fbd2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fb/005fbd2c.md) [`0070ee64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) [`007104d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00710/007104d8.md) [`00711df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_branch_alignment

命令の説明率　旧版 78.12% / 新版 78.12%

アドレスに依存する影響 `call_argument_candidate` 1件, `return_value_candidate` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00af6784",
      "incomplete_value": true,
      "site": "00af6788",
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
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00af77bc",
      "incomplete_value": true,
      "site": "00af77cc",
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
- 00af6788 ["INT_ADD", "register:40f0:8", ["const:af6788:8", "const:4:8"]]
- 00af6788 ["CALL", null, ["callee:005e7810:8"]]
+ 00af777c ["INT_ADD", "register:40f0:8", ["const:af777c:8", "const:4:8"]]
+ 00af777c ["CALL", null, ["callee:005e7810:8"]]
- 00af6768 ["COPY", "register:40e8:8", ["register:8:8"]]
- 00af6770 ["INT_ZEXT", "register:40a0:8", ["register:4000:4"]]
~~~


<a id="compare-321480db39af2897f6543330518d6e98"></a>

### [`00af67dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af6/00af67dc.md) → [`00af77d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af7/00af77d0.md) FUN_00af77d0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`0070eab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`0070ee64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) [`00711df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 92.86% / 新版 92.86%

優先判定に残った影響 `unresolved_return_alignment` 1件

~~~diff
- 00af67f0 ["INT_ADD", "register:40f0:8", ["const:af67f0:8", "const:4:8"]]
- 00af67f0 ["CALL", null, ["callee:008524fc:8"]]
+ 00af77e4 ["INT_ADD", "register:40f0:8", ["const:af77e4:8", "const:4:8"]]
+ 00af77e4 ["CALL", null, ["callee:008524fc:8"]]
- 00af6804 ["INT_ADD", "register:40f0:8", ["const:af6804:8", "const:4:8"]]
- 00af6804 ["CALL", null, ["callee:005e7810:8"]]
+ 00af77f8 ["INT_ADD", "register:40f0:8", ["const:af77f8:8", "const:4:8"]]
+ 00af77f8 ["CALL", null, ["callee:005e7810:8"]]
- 00af6808 ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
- 00af6808 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00af6808 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00af6808 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 00af77fc ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
+ 00af77fc ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00af77fc ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00af77fc ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
~~~


<a id="compare-08ad74c08529e3fb8c6fe0a727a63758"></a>

### [`00af684c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af6/00af684c.md) → [`00af7840`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af7/00af7840.md) FUN_00af7840

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00710128`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710128.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`007104d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00710/007104d8.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00af7874",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00af68b0"
      ]
    ],
    [
      "unmatched:00af68b0",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af68b4",
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
      "00af7874",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00af78a4"
      ]
    ],
    [
      "00af78a4",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00af78a8",
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
- 00af6860 ["INT_ADD", "register:40f0:8", ["const:af6860:8", "const:4:8"]]
- 00af6860 ["CALL", null, ["callee:008524fc:8"]]
+ 00af7854 ["INT_ADD", "register:40f0:8", ["const:af7854:8", "const:4:8"]]
+ 00af7854 ["CALL", null, ["callee:008524fc:8"]]
- 00af6870 ["COPY", "tmp:0:8", ["register:4048:8"]]
- 00af6870 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00af6870 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00af6870 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00af6874 ["INT_ADD", "register:40f0:8", ["const:af6874:8", "const:4:8"]]
- 00af6874 ["CALL", null, ["callee:005e7810:8"]]
+ 00af7868 ["INT_ADD", "register:40f0:8", ["const:af7868:8", "const:4:8"]]
+ 00af7868 ["CALL", null, ["callee:005e7810:8"]]
~~~


<a id="compare-21aa2d2819636c68c6a854abb4682580"></a>

### [`00af68bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af6/00af68bc.md) → [`00af78b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af7/00af78b0.md) FUN_00af78b0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`0070eab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00710128`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710128.md) [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) [`00716de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 4件 [`0070ee64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) [`007104d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00710/007104d8.md) [`00711df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) [`00717198`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00717/00717198.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 89.29% / 新版 89.29%

優先判定に残った影響 `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af68bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af68c0",
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
      "00af78b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00af78b4",
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
- 00af68bc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00af68bc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00af68bc ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00af68bc ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00af68c0 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00af68c0 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00af68c0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00af68c0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00af68c4 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-78dde2652b859f6287f056594c5c478b"></a>

### [`00af6bcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af6/00af6bcc.md) → [`00af7bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af7/00af7bc0.md) FUN_00af7bc0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`0070eab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) [`00af5d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af5/00af5d2c.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 3件 [`0070ee64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) [`00711df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) [`00af6d20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af6/00af6d20.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00af6be0 ["INT_ADD", "register:40f0:8", ["const:af6be0:8", "const:4:8"]]
- 00af6be0 ["CALL", null, ["callee:008524fc:8"]]
+ 00af7bd4 ["INT_ADD", "register:40f0:8", ["const:af7bd4:8", "const:4:8"]]
+ 00af7bd4 ["CALL", null, ["callee:008524fc:8"]]
- 00af6bf4 ["INT_ADD", "register:40f0:8", ["const:af6bf4:8", "const:4:8"]]
- 00af6bf4 ["CALL", null, ["callee:005e7810:8"]]
+ 00af7be8 ["INT_ADD", "register:40f0:8", ["const:af7be8:8", "const:4:8"]]
+ 00af7be8 ["CALL", null, ["callee:005e7810:8"]]
- 00af6bf8 ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
- 00af6bf8 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00af6bf8 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00af6bf8 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 00af7bec ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
+ 00af7bec ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00af7bec ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00af7bec ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
~~~


<a id="compare-79298576d00a19b661808d98c92b5110"></a>

### [`00af6c3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af6/00af6c3c.md) → [`00af7c30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af7/00af7c30.md) FUN_00af7c30

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`0070eab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) [`00af5d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af5/00af5d2c.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 3件 [`0070ee64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) [`00711df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) [`00af6d20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af6/00af6d20.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00af6c50 ["INT_ADD", "register:40f0:8", ["const:af6c50:8", "const:4:8"]]
- 00af6c50 ["CALL", null, ["callee:008524fc:8"]]
+ 00af7c44 ["INT_ADD", "register:40f0:8", ["const:af7c44:8", "const:4:8"]]
+ 00af7c44 ["CALL", null, ["callee:008524fc:8"]]
- 00af6c64 ["INT_ADD", "register:40f0:8", ["const:af6c64:8", "const:4:8"]]
- 00af6c64 ["CALL", null, ["callee:005e7810:8"]]
+ 00af7c58 ["INT_ADD", "register:40f0:8", ["const:af7c58:8", "const:4:8"]]
+ 00af7c58 ["CALL", null, ["callee:005e7810:8"]]
- 00af6c68 ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
- 00af6c68 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00af6c68 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00af6c68 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 00af7c5c ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
+ 00af7c5c ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00af7c5c ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00af7c5c ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
~~~


<a id="compare-d78a47e964d5c3899c6e2abc199cd432"></a>

### [`00af6d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af6/00af6d2c.md) → [`00af7d20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af7/00af7d20.md) FUN_00af7d20

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 94.74% / 新版 94.74%

アドレスに依存する影響 `unresolved_store_alignment` 1件

~~~diff
- 00af6d48 ["INT_ADD", "register:40f0:8", ["const:af6d48:8", "const:4:8"]]
- 00af6d48 ["CALL", null, ["callee:008524fc:8"]]
+ 00af7d3c ["INT_ADD", "register:40f0:8", ["const:af7d3c:8", "const:4:8"]]
+ 00af7d3c ["CALL", null, ["callee:008524fc:8"]]
- 00af6d64 ["COPY", "tmp:0:4", ["register:40a8:4"]]
- 00af6d64 ["COPY", "tmp:1:8", ["register:4048:8"]]
- 00af6d64 ["COPY", "tmp:2:8", ["tmp:1:8"]]
- 00af6d64 ["INT_LEFT", "tmp:2:8", ["tmp:2:8", "const:0:8"]]
+ 00af7d58 ["COPY", "tmp:0:4", ["register:40a8:4"]]
+ 00af7d58 ["COPY", "tmp:1:8", ["register:4048:8"]]
+ 00af7d58 ["COPY", "tmp:2:8", ["tmp:1:8"]]
+ 00af7d58 ["INT_LEFT", "tmp:2:8", ["tmp:2:8", "const:0:8"]]
~~~


<a id="compare-d272a7733260f31a006e424356bb7d7e"></a>

### [`00af6d78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af6/00af6d78.md) → [`00af7d6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af7/00af7d6c.md) FUN_00af7d6c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 78.95% / 新版 78.95%

アドレスに依存する影響 `unresolved_store_alignment` 1件

~~~diff
- 00af6d94 ["INT_ADD", "register:40f0:8", ["const:af6d94:8", "const:4:8"]]
- 00af6d94 ["CALL", null, ["callee:008524fc:8"]]
+ 00af7d88 ["INT_ADD", "register:40f0:8", ["const:af7d88:8", "const:4:8"]]
+ 00af7d88 ["CALL", null, ["callee:008524fc:8"]]
- 00af6da4 ["INT_SEXT", "tmp:0:8", ["register:4098:4"]]
- 00af6da4 ["INT_SEXT", "tmp:1:8", ["register:4048:4"]]
- 00af6da4 ["INT_MULT", "tmp:2:8", ["tmp:0:8", "tmp:1:8"]]
- 00af6da4 ["INT_ADD", "register:4040:8", ["register:4040:8", "tmp:2:8"]]
- 00af6da8 ["COPY", "register:4048:8", ["const:4970:8"]]
~~~


<a id="compare-a9dcf67fa9e03745c668c20df27fdfa8"></a>

### [`00af6e10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af6/00af6e10.md) → [`00af7e04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af7/00af7e04.md) FUN_00af7e04

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 96.88% / 新版 96.88%

アドレスに依存する影響 `unresolved_store_alignment` 1件

~~~diff
- 00af6e2c ["INT_ADD", "register:40f0:8", ["const:af6e2c:8", "const:4:8"]]
- 00af6e2c ["CALL", null, ["callee:008524fc:8"]]
+ 00af7e20 ["INT_ADD", "register:40f0:8", ["const:af7e20:8", "const:4:8"]]
+ 00af7e20 ["CALL", null, ["callee:008524fc:8"]]
- 00af6e40 ["INT_ADD", "register:40f0:8", ["const:af6e40:8", "const:4:8"]]
- 00af6e40 ["CALL", null, ["callee:005e7810:8"]]
+ 00af7e34 ["INT_ADD", "register:40f0:8", ["const:af7e34:8", "const:4:8"]]
+ 00af7e34 ["CALL", null, ["callee:005e7810:8"]]
- 00af6e4c ["INT_ADD", "register:40f0:8", ["const:af6e4c:8", "const:4:8"]]
- 00af6e4c ["CALL", null, ["callee:008524fc:8"]]
+ 00af7e40 ["INT_ADD", "register:40f0:8", ["const:af7e40:8", "const:4:8"]]
+ 00af7e40 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-30f2b5a43a27cc1cde9fd44c2bee6f6d"></a>

### [`00af6e90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af6/00af6e90.md) → [`00af7e84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af7/00af7e84.md) FUN_00af7e84

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 78.95% / 新版 78.95%

アドレスに依存する影響 `unresolved_store_alignment` 1件

~~~diff
- 00af6eac ["INT_ADD", "register:40f0:8", ["const:af6eac:8", "const:4:8"]]
- 00af6eac ["CALL", null, ["callee:008524fc:8"]]
+ 00af7ea0 ["INT_ADD", "register:40f0:8", ["const:af7ea0:8", "const:4:8"]]
+ 00af7ea0 ["CALL", null, ["callee:008524fc:8"]]
- 00af6ebc ["INT_SEXT", "tmp:0:8", ["register:4098:4"]]
- 00af6ebc ["INT_SEXT", "tmp:1:8", ["register:4048:4"]]
- 00af6ebc ["INT_MULT", "tmp:2:8", ["tmp:0:8", "tmp:1:8"]]
- 00af6ebc ["INT_ADD", "register:4040:8", ["register:4040:8", "tmp:2:8"]]
- 00af6ec0 ["COPY", "register:4048:8", ["const:4978:8"]]
~~~


<a id="compare-8495adcccd1c79a58274f9b1f9a52a86"></a>

### [`00af6f28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af6/00af6f28.md) → [`00af7f1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af7/00af7f1c.md) FUN_00af7f1c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 78.95% / 新版 78.95%

アドレスに依存する影響 `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af6f28",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af6f2c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af6f30",
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
      "00af7f1c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00af7f20",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00af7f24",
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
- 00af6f28 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00af6f28 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00af6f28 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00af6f28 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00af6f2c ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00af6f2c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 00af6f30 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00af6f30 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00af6f30 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00af6f30 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-a99e847bdd95bb69a820662950ce3798"></a>

### [`00af6f74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af6/00af6f74.md) → [`00af7f68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af7/00af7f68.md) FUN_00af7f68

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 78.95% / 新版 78.95%

アドレスに依存する影響 `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af6f74",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af6f78",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af6f7c",
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
      "00af7f68",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00af7f6c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00af7f70",
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
- 00af6f74 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00af6f74 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00af6f74 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00af6f74 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00af6f78 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00af6f78 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 00af6f7c ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00af6f7c ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00af6f7c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00af6f7c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-b2d68c29b378e000e077cb829fc8337a"></a>

### [`00af6fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af6/00af6fc0.md) → [`00af7fb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af7/00af7fb4.md) FUN_00af7fb4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00af6fdc ["INT_ADD", "register:40f0:8", ["const:af6fdc:8", "const:4:8"]]
- 00af6fdc ["CALL", null, ["callee:008524fc:8"]]
+ 00af7fd0 ["INT_ADD", "register:40f0:8", ["const:af7fd0:8", "const:4:8"]]
+ 00af7fd0 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-63b87a3bd50c1c8d3905236a14ab6b0c"></a>

### [`00af700c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af700c.md) → [`00af8000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af8/00af8000.md) FUN_00af8000

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00af7028 ["INT_ADD", "register:40f0:8", ["const:af7028:8", "const:4:8"]]
- 00af7028 ["CALL", null, ["callee:008524fc:8"]]
+ 00af801c ["INT_ADD", "register:40f0:8", ["const:af801c:8", "const:4:8"]]
+ 00af801c ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-6f256bc6a9f6b6059df2276a4b893717"></a>

### [`00af7058`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af7058.md) → [`00af804c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af8/00af804c.md) FUN_00af804c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 78.95% / 新版 78.95%

アドレスに依存する影響 `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af7058",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af705c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af7060",
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
      "00af804c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00af8050",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00af8054",
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
- 00af7058 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00af7058 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00af7058 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00af7058 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00af705c ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00af705c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 00af7060 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00af7060 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00af7060 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00af7060 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-f9afaf1cdd7267fbbcbaf2c74559071a"></a>

### [`00af70a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af70a4.md) → [`00af8098`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af8/00af8098.md) FUN_00af8098

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_destination, unresolved_store_alignment

命令の説明率　旧版 84.21% / 新版 84.21%

アドレスに依存する影響 `store_destination` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00af80d0",
      "incomplete_value": true,
      "site": "00af80d0",
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
      "definition_site": "00af70dc",
      "incomplete_value": true,
      "site": "00af70dc",
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


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af70ac",
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
      "00af80a0",
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
- 00af70ac ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00af70ac ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00af70ac ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00af70ac ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00af70b0 ["COPY", "register:40e8:8", ["register:8:8"]]
- 00af70c0 ["INT_ADD", "register:40f0:8", ["const:af70c0:8", "const:4:8"]]
- 00af70c0 ["CALL", null, ["callee:008524fc:8"]]
+ 00af80b4 ["INT_ADD", "register:40f0:8", ["const:af80b4:8", "const:4:8"]]
+ 00af80b4 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-113d2c2f586822cbfba9d889b33d61ef"></a>

### [`00af70f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af70f0.md) → [`00af80e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af8/00af80e4.md) FUN_00af80e4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 78.95% / 新版 78.95%

アドレスに依存する影響 `unresolved_store_alignment` 1件

~~~diff
- 00af710c ["INT_ADD", "register:40f0:8", ["const:af710c:8", "const:4:8"]]
- 00af710c ["CALL", null, ["callee:008524fc:8"]]
+ 00af8100 ["INT_ADD", "register:40f0:8", ["const:af8100:8", "const:4:8"]]
+ 00af8100 ["CALL", null, ["callee:008524fc:8"]]
- 00af711c ["INT_SEXT", "tmp:0:8", ["register:4098:4"]]
- 00af711c ["INT_SEXT", "tmp:1:8", ["register:4048:4"]]
- 00af711c ["INT_MULT", "tmp:2:8", ["tmp:0:8", "tmp:1:8"]]
- 00af711c ["INT_ADD", "register:4040:8", ["register:4040:8", "tmp:2:8"]]
- 00af7120 ["COPY", "register:4048:8", ["const:4bd0:8"]]
~~~


<a id="compare-53b0a264927f2390e573ec2671cfec86"></a>

### [`00af713c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af713c.md) → [`00af8130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af8/00af8130.md) FUN_00af8130

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`0070eab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`0070ee64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) [`00711df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00af7160",
      "incomplete_value": true,
      "site": "00af7164",
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
- 00af7164 ["INT_ADD", "register:40f0:8", ["const:af7164:8", "const:4:8"]]
- 00af7164 ["CALL", null, ["callee:005e7810:8"]]
+ 00af8158 ["INT_ADD", "register:40f0:8", ["const:af8158:8", "const:4:8"]]
+ 00af8158 ["CALL", null, ["callee:005e7810:8"]]
- 00af7150 ["INT_ADD", "register:40f0:8", ["const:af7150:8", "const:4:8"]]
- 00af7150 ["CALL", null, ["callee:008524fc:8"]]
+ 00af8144 ["INT_ADD", "register:40f0:8", ["const:af8144:8", "const:4:8"]]
+ 00af8144 ["CALL", null, ["callee:008524fc:8"]]
- 00af7168 ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
- 00af7168 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00af7168 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00af7168 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 00af815c ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
+ 00af815c ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00af815c ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00af815c ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
~~~


<a id="compare-254f9086a35b0b480f129c8da7167411"></a>

### [`00af71ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af71ac.md) → [`00af81a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af8/00af81a0.md) FUN_00af81a0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00af71c8 ["INT_ADD", "register:40f0:8", ["const:af71c8:8", "const:4:8"]]
- 00af71c8 ["CALL", null, ["callee:008524fc:8"]]
+ 00af81bc ["INT_ADD", "register:40f0:8", ["const:af81bc:8", "const:4:8"]]
+ 00af81bc ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-6f7aa17cadfc0ec8e9419a8e4a223bff"></a>

### [`00af71f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af71f8.md) → [`00af81ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af8/00af81ec.md) FUN_00af81ec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`0070eab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`0070ee64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) [`00711df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, operands_and_dependencies, operation_sequence

命令の説明率　旧版 96.43% / 新版 96.43%

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00af8210",
      "incomplete_value": true,
      "site": "00af8214",
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
      "definition_site": "00af721c",
      "incomplete_value": true,
      "site": "00af7220",
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
- 00af7220 ["INT_ADD", "register:40f0:8", ["const:af7220:8", "const:4:8"]]
- 00af7220 ["CALL", null, ["callee:005e7810:8"]]
+ 00af8214 ["INT_ADD", "register:40f0:8", ["const:af8214:8", "const:4:8"]]
+ 00af8214 ["CALL", null, ["callee:005e7810:8"]]
- 00af720c ["INT_ADD", "register:40f0:8", ["const:af720c:8", "const:4:8"]]
- 00af720c ["CALL", null, ["callee:008524fc:8"]]
+ 00af8200 ["INT_ADD", "register:40f0:8", ["const:af8200:8", "const:4:8"]]
+ 00af8200 ["CALL", null, ["callee:008524fc:8"]]
- 00af721c ["COPY", "tmp:0:8", ["register:4048:8"]]
- 00af721c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00af721c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00af721c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-19131e0291e5204d5eb16e45d012ffd0"></a>

### [`00af7324`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af7324.md) → [`00af8318`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af8/00af8318.md) FUN_00af8318

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 78.95% / 新版 78.95%

アドレスに依存する影響 `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af7324",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af7328",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af732c",
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
      "00af8318",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00af831c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00af8320",
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
- 00af7324 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00af7324 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00af7324 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00af7324 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00af7328 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00af7328 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 00af732c ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00af732c ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00af732c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00af732c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-5d76a54d0b9c3f0a9254dd3970334c1d"></a>

### [`00af7370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af7370.md) → [`00af8364`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af8/00af8364.md) FUN_00af8364

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0070eab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`0070ee64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) [`00711df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 83.33% / 新版 83.33%

アドレスに依存する影響 `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af7370",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af7374",
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
      "00af8364",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00af8368",
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
- 00af7370 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00af7370 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00af7370 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00af7370 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00af7374 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00af7374 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00af7374 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00af7374 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00af7378 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-d97c7197e7f767d6aa3c09eeff42822e"></a>

### [`00af7404`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af7404.md) → [`00af83f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af8/00af83f8.md) FUN_00af83f8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 55.56% / 新版 55.56%

アドレスに依存する影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af7404",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af7408",
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
      "00af83f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00af83fc",
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
- 00af7404 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00af7404 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00af7404 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00af7404 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00af7408 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00af7408 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00af7408 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00af7408 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00af740c ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-907814f0ddd4629c3c184e85653d5a99"></a>

### [`00af744c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af744c.md) → [`00af8440`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af8/00af8440.md) FUN_00af8440

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 63.16% / 新版 63.16%

アドレスに依存する影響 `unresolved_store_alignment` 6件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af744c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af7450",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af7454",
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
      "00af8440",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00af8444",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00af8448",
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
- 00af744c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00af744c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00af744c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00af744c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00af7450 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00af7450 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 00af7454 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00af7454 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00af7454 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00af7454 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-073ae9d67a283f198f0323f2e245b7a1"></a>

### [`00af7498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af7498.md) → [`00af848c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af8/00af848c.md) FUN_00af848c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`007133b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/007133b0.md) [`007142b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/007142b4.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`00713760`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00713/00713760.md) [`00714664`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00714/00714664.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_store_alignment

命令の説明率　旧版 81.25% / 新版 81.25%

アドレスに依存する影響 `return_value_candidate` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00af84bc",
      "incomplete_value": true,
      "site": "00af84c8",
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


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af7498",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af749c",
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
      "00af848c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00af8490",
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
- 00af7498 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00af7498 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00af7498 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00af7498 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00af749c ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00af749c ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00af749c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00af749c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00af74a0 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-2064301541267af1cc1eb94cfd3b9325"></a>

### [`00af763c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af763c.md) → [`00af8630`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af8/00af8630.md) FUN_00af8630

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00713d7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/00713d7c.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`0071412c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00714/0071412c.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 77.78% / 新版 77.78%

アドレスに依存する影響 `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af7678",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af767c",
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
      "00af866c",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00af8670",
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
- 00af7650 ["INT_ADD", "register:40f0:8", ["const:af7650:8", "const:4:8"]]
- 00af7650 ["CALL", null, ["callee:008524fc:8"]]
+ 00af8644 ["INT_ADD", "register:40f0:8", ["const:af8644:8", "const:4:8"]]
+ 00af8644 ["CALL", null, ["callee:008524fc:8"]]
- 00af7674 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00af7674 ["INT_ZEXT", "register:4000:8", ["tmp:0:1"]]
- 00af7678 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00af7678 ["LOAD", "tmp:1:8", ["const:1b1:8", "tmp:0:8"]]
- 00af7678 ["INT_ADD", "tmp:2:8", ["tmp:0:8", "const:8:8"]]
- 00af7678 ["LOAD", "tmp:3:8", ["const:1b1:8", "tmp:2:8"]]
~~~


<a id="compare-8cff25dae64444375c3a419f4f017a92"></a>

### [`00af76c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af76c4.md) → [`00af86b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af8/00af86b8.md) FUN_00af86b8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00af76e0 ["INT_ADD", "register:40f0:8", ["const:af76e0:8", "const:4:8"]]
- 00af76e0 ["CALL", null, ["callee:008524fc:8"]]
+ 00af86d4 ["INT_ADD", "register:40f0:8", ["const:af86d4:8", "const:4:8"]]
+ 00af86d4 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-7c32bd56901df8df915aba1fc154122d"></a>

### [`00af77f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af77f0.md) → [`00af87e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af8/00af87e4.md) FUN_00af87e4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`0070eab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`0070ee64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 92.86% / 新版 92.86%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00af8808",
      "incomplete_value": true,
      "site": "00af880c",
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
      "definition_site": "00af7814",
      "incomplete_value": true,
      "site": "00af7818",
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
- 00af7818 ["INT_ADD", "register:40f0:8", ["const:af7818:8", "const:4:8"]]
- 00af7818 ["CALL", null, ["callee:005e7810:8"]]
+ 00af880c ["INT_ADD", "register:40f0:8", ["const:af880c:8", "const:4:8"]]
+ 00af880c ["CALL", null, ["callee:005e7810:8"]]
- 00af7804 ["INT_ADD", "register:40f0:8", ["const:af7804:8", "const:4:8"]]
- 00af7804 ["CALL", null, ["callee:008524fc:8"]]
+ 00af87f8 ["INT_ADD", "register:40f0:8", ["const:af87f8:8", "const:4:8"]]
+ 00af87f8 ["CALL", null, ["callee:008524fc:8"]]
- 00af7814 ["COPY", "tmp:0:8", ["register:4048:8"]]
- 00af7814 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00af7814 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00af7814 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-49db349be6bc1458ffb81605efac8e6a"></a>

### [`00af7860`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af7860.md) → [`00af8854`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af8/00af8854.md) FUN_00af8854

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00af787c ["INT_ADD", "register:40f0:8", ["const:af787c:8", "const:4:8"]]
- 00af787c ["CALL", null, ["callee:008524fc:8"]]
+ 00af8870 ["INT_ADD", "register:40f0:8", ["const:af8870:8", "const:4:8"]]
+ 00af8870 ["CALL", null, ["callee:008524fc:8"]]
- 00af7890 ["INT_ADD", "register:40f0:8", ["const:af7890:8", "const:4:8"]]
- 00af7890 ["CALL", null, ["callee:005e7810:8"]]
+ 00af8884 ["INT_ADD", "register:40f0:8", ["const:af8884:8", "const:4:8"]]
+ 00af8884 ["CALL", null, ["callee:005e7810:8"]]
- 00af7894 ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
- 00af7894 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00af7894 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00af7894 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 00af8888 ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
+ 00af8888 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00af8888 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00af8888 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
~~~


<a id="compare-51090197480136c3cd569d54b7c6a6b4"></a>

### [`00af7938`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af7938.md) → [`00af892c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af8/00af892c.md) FUN_00af892c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 66.67% / 新版 66.67%

アドレスに依存する影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 6件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af7938",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af793c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af7940",
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
      "00af892c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00af8930",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00af8934",
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
- 00af7938 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00af7938 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00af7938 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00af7938 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00af793c ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00af793c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 00af7940 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00af7940 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00af7940 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00af7940 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-5309a425e8092d8f7a0a0e47d808821a"></a>

### [`00af79a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af79a4.md) → [`00af8998`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af8/00af8998.md) FUN_00af8998

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00af79c0 ["INT_ADD", "register:40f0:8", ["const:af79c0:8", "const:4:8"]]
- 00af79c0 ["CALL", null, ["callee:008524fc:8"]]
+ 00af89b4 ["INT_ADD", "register:40f0:8", ["const:af89b4:8", "const:4:8"]]
+ 00af89b4 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-b40421f7fd724dbfc3fcf70bd98a9d19"></a>

### [`00af79f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af79f0.md) → [`00af89e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af8/00af89e4.md) FUN_00af89e4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`00707984`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707984.md) [`007133b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/007133b0.md) [`007142b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/007142b4.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 3件 [`00707d34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00707/00707d34.md) [`00713760`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00713/00713760.md) [`00714664`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00714/00714664.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 73.68% / 新版 73.68%

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af7a34",
      "DATA",
      [
        "storage",
        "0030a3cc",
        null,
        null
      ]
    ],
    [
      "unmatched:00af7a6c",
      "DATA",
      [
        "storage",
        "0030a3d8",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "00af8a28",
      "DATA",
      [
        "storage",
        "0030a40c",
        null,
        null
      ]
    ],
    [
      "00af8a60",
      "DATA",
      [
        "storage",
        "0030a418",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00af7a14 ["INT_ADD", "register:40f0:8", ["const:af7a14:8", "const:4:8"]]
- 00af7a14 ["CALL", null, ["callee:008524fc:8"]]
+ 00af8a08 ["INT_ADD", "register:40f0:8", ["const:af8a08:8", "const:4:8"]]
+ 00af8a08 ["CALL", null, ["callee:008524fc:8"]]
- 00af7a28 ["INT_SEXT", "tmp:0:8", ["register:40a0:4"]]
- 00af7a28 ["INT_SEXT", "tmp:1:8", ["register:4048:4"]]
- 00af7a28 ["INT_MULT", "tmp:2:8", ["tmp:0:8", "tmp:1:8"]]
- 00af7a28 ["INT_ADD", "register:4040:8", ["register:4040:8", "tmp:2:8"]]
- 00af7a2c ["COPY", "register:4048:8", ["const:30a000:8"]]
~~~


<a id="compare-de0892a1c21eb72654c3384baebb9844"></a>

### [`00af7ad4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af7ad4.md) → [`00af8ac8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af8/00af8ac8.md) FUN_00af8ac8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 57.69% / 新版 57.69%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af7b18",
      "DATA",
      [
        "storage",
        "002c3f4c",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00af8b0c",
      "DATA",
      [
        "storage",
        "002c3f9c",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00af7ad4 ["INT_EQUAL", "tmp:0:1", ["register:4010:4", "const:0:4"]]
- 00af7ad4 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00af8ac8 ["INT_EQUAL", "tmp:0:1", ["register:4010:4", "const:0:4"]]
+ 00af8ac8 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 00af7ae4 ["COPY", "register:40e8:8", ["register:8:8"]]
- 00af7af8 ["INT_ADD", "register:40f0:8", ["const:af7af8:8", "const:4:8"]]
- 00af7af8 ["CALL", null, ["callee:008524fc:8"]]
+ 00af8aec ["INT_ADD", "register:40f0:8", ["const:af8aec:8", "const:4:8"]]
+ 00af8aec ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-0c703aaa46acf1ab77c7659505b75852"></a>

### [`00af7c48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af7c48.md) → [`00af8c3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af8/00af8c3c.md) FUN_00af8c3c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00af8c88",
      "incomplete_value": true,
      "site": "00af8c88",
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
      "00af8c78",
      "DATA",
      [
        "storage",
        "0030a3d8",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "00af8c78",
      "DATA",
      [
        "storage",
        "0030a418",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00af7c68 ["INT_ADD", "register:40f0:8", ["const:af7c68:8", "const:4:8"]]
- 00af7c68 ["CALL", null, ["callee:008524fc:8"]]
+ 00af8c5c ["INT_ADD", "register:40f0:8", ["const:af8c5c:8", "const:4:8"]]
+ 00af8c5c ["CALL", null, ["callee:008524fc:8"]]
- 00af7c80 ["COPY", "tmp:0:8", ["const:3d8:8"]]
- 00af7c80 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00af7c80 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00af7c80 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00af8c74 ["COPY", "tmp:0:8", ["const:418:8"]]
+ 00af8c74 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00af8c74 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00af8c74 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-b131fc09af3c9c9d4a89d50f2663de47"></a>

### [`00af7ca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af7ca8.md) → [`00af8c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af8/00af8c9c.md) FUN_00af8c9c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00707984`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707984.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00707d34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00707/00707d34.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 82.61% / 新版 82.61%

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00af8d9c",
      "incomplete_value": true,
      "site": "00af8dac",
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
      "00af8ce0",
      "DATA",
      [
        "storage",
        "0030a3cc",
        null,
        null
      ]
    ],
    [
      "00af8d18",
      "DATA",
      [
        "storage",
        "0030a3d8",
        null,
        "undefined4"
      ]
    ],
    [
      "00af8d8c",
      "READ",
      [
        "storage",
        "0030a3e4",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "00af8ce0",
      "DATA",
      [
        "storage",
        "0030a40c",
        null,
        null
      ]
    ],
    [
      "00af8d18",
      "DATA",
      [
        "storage",
        "0030a418",
        null,
        "undefined4"
      ]
    ],
    [
      "00af8d8c",
      "READ",
      [
        "storage",
        "0030a424",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00af7ccc ["INT_ADD", "register:40f0:8", ["const:af7ccc:8", "const:4:8"]]
- 00af7ccc ["CALL", null, ["callee:008524fc:8"]]
+ 00af8cc0 ["INT_ADD", "register:40f0:8", ["const:af8cc0:8", "const:4:8"]]
+ 00af8cc0 ["CALL", null, ["callee:008524fc:8"]]
- 00af7ce8 ["COPY", "tmp:0:8", ["const:3cc:8"]]
- 00af7ce8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00af7ce8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00af7ce8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00af8cdc ["COPY", "tmp:0:8", ["const:40c:8"]]
+ 00af8cdc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00af8cdc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00af8cdc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00af7d08 ["INT_ADD", "register:40f0:8", ["const:af7d08:8", "const:4:8"]]
- 00af7d08 ["CALL", null, ["callee:008524fc:8"]]
+ 00af8cfc ["INT_ADD", "register:40f0:8", ["const:af8cfc:8", "const:4:8"]]
+ 00af8cfc ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-a9f68434ade9d17ea418988cc35b94b3"></a>

### [`00af7dbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af7dbc.md) → [`00af8db0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af8/00af8db0.md) FUN_00af8db0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af7df8",
      "DATA",
      [
        "storage",
        "0030a3e4",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "00af8dec",
      "DATA",
      [
        "storage",
        "0030a424",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00af7ddc ["INT_ADD", "register:40f0:8", ["const:af7ddc:8", "const:4:8"]]
- 00af7ddc ["CALL", null, ["callee:008524fc:8"]]
+ 00af8dd0 ["INT_ADD", "register:40f0:8", ["const:af8dd0:8", "const:4:8"]]
+ 00af8dd0 ["CALL", null, ["callee:008524fc:8"]]
- 00af7dec ["INT_SEXT", "tmp:0:8", ["register:40a8:4"]]
- 00af7dec ["INT_SEXT", "tmp:1:8", ["register:4048:4"]]
- 00af7dec ["INT_MULT", "tmp:2:8", ["tmp:0:8", "tmp:1:8"]]
- 00af7dec ["INT_ADD", "register:4040:8", ["register:4040:8", "tmp:2:8"]]
- 00af7df0 ["COPY", "register:4048:8", ["const:30a000:8"]]
~~~


<a id="compare-5ec5942b269e6e669d42a4ba454fc924"></a>

### [`00af7e1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af7e1c.md) → [`00af8e10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af8/00af8e10.md) FUN_00af8e10

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00713d7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/00713d7c.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`0071412c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00714/0071412c.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00af7e30 ["INT_ADD", "register:40f0:8", ["const:af7e30:8", "const:4:8"]]
- 00af7e30 ["CALL", null, ["callee:008524fc:8"]]
+ 00af8e24 ["INT_ADD", "register:40f0:8", ["const:af8e24:8", "const:4:8"]]
+ 00af8e24 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-06c05265853c669765b836ee40432f51"></a>

### [`00af7ea4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af7ea4.md) → [`00af8e98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af8/00af8e98.md) FUN_00af8e98

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 94.74% / 新版 94.74%

アドレスに依存する影響 `unresolved_store_alignment` 1件

~~~diff
- 00af7ec0 ["INT_ADD", "register:40f0:8", ["const:af7ec0:8", "const:4:8"]]
- 00af7ec0 ["CALL", null, ["callee:008524fc:8"]]
+ 00af8eb4 ["INT_ADD", "register:40f0:8", ["const:af8eb4:8", "const:4:8"]]
+ 00af8eb4 ["CALL", null, ["callee:008524fc:8"]]
- 00af7edc ["COPY", "tmp:0:4", ["register:4098:4"]]
- 00af7edc ["COPY", "tmp:1:8", ["register:4048:8"]]
- 00af7edc ["COPY", "tmp:2:8", ["tmp:1:8"]]
- 00af7edc ["INT_LEFT", "tmp:2:8", ["tmp:2:8", "const:0:8"]]
+ 00af8ed0 ["COPY", "tmp:0:4", ["register:4098:4"]]
+ 00af8ed0 ["COPY", "tmp:1:8", ["register:4048:8"]]
+ 00af8ed0 ["COPY", "tmp:2:8", ["tmp:1:8"]]
+ 00af8ed0 ["INT_LEFT", "tmp:2:8", ["tmp:2:8", "const:0:8"]]
~~~


<a id="compare-397022ebb681f9ce68c885c69838e336"></a>

### [`00af7ef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af7ef0.md) → [`00af8ee4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af8/00af8ee4.md) FUN_00af8ee4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00710330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`007106e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00710/007106e0.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

アドレスに依存する影響 `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af7f24",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af7f28",
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
      "00af8f18",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00af8f1c",
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
- 00af7f04 ["INT_ADD", "register:40f0:8", ["const:af7f04:8", "const:4:8"]]
- 00af7f04 ["CALL", null, ["callee:008524fc:8"]]
+ 00af8ef8 ["INT_ADD", "register:40f0:8", ["const:af8ef8:8", "const:4:8"]]
+ 00af8ef8 ["CALL", null, ["callee:008524fc:8"]]
- 00af7f20 ["COPY", "tmp:0:8", ["register:4048:8"]]
- 00af7f20 ["COPY", "tmp:1:8", ["tmp:0:8"]]
- 00af7f20 ["INT_LEFT", "tmp:1:8", ["tmp:1:8", "const:0:8"]]
- 00af7f20 ["INT_ADD", "tmp:2:8", ["register:4040:8", "tmp:1:8"]]
- 00af7f24 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00af7f24 ["LOAD", "tmp:1:8", ["const:1b1:8", "tmp:0:8"]]
- 00af7f24 ["INT_ADD", "tmp:2:8", ["tmp:0:8", "const:8:8"]]
- 00af7f24 ["LOAD", "tmp:3:8", ["const:1b1:8", "tmp:2:8"]]
~~~


<a id="compare-639d401679cd26e0ed634c4523b8b4db"></a>

### [`00af7f30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af7f30.md) → [`00af8f24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af8/00af8f24.md) FUN_00af8f24

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 73.68% / 新版 73.68%

アドレスに依存する影響 `unresolved_store_alignment` 6件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af7f30",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af7f34",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af7f38",
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
      "00af8f24",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00af8f28",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00af8f2c",
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
- 00af7f30 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00af7f30 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00af7f30 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00af7f30 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00af7f34 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00af7f34 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 00af7f38 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00af7f38 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00af7f38 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00af7f38 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-6114b1c3e5caac5953fab5bb494e84ac"></a>

### [`00af7fbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af7/00af7fbc.md) → [`00af8fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af8/00af8fb0.md) FUN_00af8fb0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 94.74% / 新版 94.74%

アドレスに依存する影響 `unresolved_store_alignment` 1件

~~~diff
- 00af7fd8 ["INT_ADD", "register:40f0:8", ["const:af7fd8:8", "const:4:8"]]
- 00af7fd8 ["CALL", null, ["callee:008524fc:8"]]
+ 00af8fcc ["INT_ADD", "register:40f0:8", ["const:af8fcc:8", "const:4:8"]]
+ 00af8fcc ["CALL", null, ["callee:008524fc:8"]]
- 00af7ff4 ["COPY", "tmp:0:4", ["register:4098:4"]]
- 00af7ff4 ["COPY", "tmp:1:8", ["register:4048:8"]]
- 00af7ff4 ["COPY", "tmp:2:8", ["tmp:1:8"]]
- 00af7ff4 ["INT_LEFT", "tmp:2:8", ["tmp:2:8", "const:0:8"]]
+ 00af8fe8 ["COPY", "tmp:0:4", ["register:4098:4"]]
+ 00af8fe8 ["COPY", "tmp:1:8", ["register:4048:8"]]
+ 00af8fe8 ["COPY", "tmp:2:8", ["tmp:1:8"]]
+ 00af8fe8 ["INT_LEFT", "tmp:2:8", ["tmp:2:8", "const:0:8"]]
~~~


<a id="compare-d0119451b3e0dbb7fda4209c70a2de6b"></a>

### [`00af8008`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8008.md) → [`00af8ffc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af8/00af8ffc.md) FUN_00af8ffc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00710330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`007106e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00710/007106e0.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

アドレスに依存する影響 `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af803c",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af8040",
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
      "00af9030",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00af9034",
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
- 00af801c ["INT_ADD", "register:40f0:8", ["const:af801c:8", "const:4:8"]]
- 00af801c ["CALL", null, ["callee:008524fc:8"]]
+ 00af9010 ["INT_ADD", "register:40f0:8", ["const:af9010:8", "const:4:8"]]
+ 00af9010 ["CALL", null, ["callee:008524fc:8"]]
- 00af8038 ["COPY", "tmp:0:8", ["register:4048:8"]]
- 00af8038 ["COPY", "tmp:1:8", ["tmp:0:8"]]
- 00af8038 ["INT_LEFT", "tmp:1:8", ["tmp:1:8", "const:0:8"]]
- 00af8038 ["INT_ADD", "tmp:2:8", ["register:4040:8", "tmp:1:8"]]
- 00af803c ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00af803c ["LOAD", "tmp:1:8", ["const:1b1:8", "tmp:0:8"]]
- 00af803c ["INT_ADD", "tmp:2:8", ["tmp:0:8", "const:8:8"]]
- 00af803c ["LOAD", "tmp:3:8", ["const:1b1:8", "tmp:2:8"]]
~~~


<a id="compare-321d514bdb26967a3665ecc059aa0388"></a>

### [`00af8048`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8048.md) → [`00af903c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af903c.md) FUN_00af903c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 94.74% / 新版 94.74%

アドレスに依存する影響 `unresolved_return_alignment` 1件

~~~diff
- 00af8064 ["INT_ADD", "register:40f0:8", ["const:af8064:8", "const:4:8"]]
- 00af8064 ["CALL", null, ["callee:008524fc:8"]]
+ 00af9058 ["INT_ADD", "register:40f0:8", ["const:af9058:8", "const:4:8"]]
+ 00af9058 ["CALL", null, ["callee:008524fc:8"]]
- 00af8090 ["COPY", "register:0:8", ["register:40f0:8"]]
- 00af8090 ["RETURN", null, ["register:0:8"]]
+ 00af9084 ["COPY", "register:0:8", ["register:40f0:8"]]
+ 00af9084 ["RETURN", null, ["register:0:8"]]
~~~


<a id="compare-f8f6e747730dad1bf514d02b68e75d6d"></a>

### [`00af8094`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8094.md) → [`00af9088`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af9088.md) FUN_00af9088

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00713d7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/00713d7c.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`0071412c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00714/0071412c.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 66.67% / 新版 66.67%

アドレスに依存する影響 `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af80d0",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af80d4",
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
      "00af90c4",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00af90c8",
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
- 00af80a8 ["INT_ADD", "register:40f0:8", ["const:af80a8:8", "const:4:8"]]
- 00af80a8 ["CALL", null, ["callee:008524fc:8"]]
+ 00af909c ["INT_ADD", "register:40f0:8", ["const:af909c:8", "const:4:8"]]
+ 00af909c ["CALL", null, ["callee:008524fc:8"]]
- 00af80c4 ["COPY", "tmp:0:8", ["register:4048:8"]]
- 00af80c4 ["COPY", "tmp:1:8", ["tmp:0:8"]]
- 00af80c4 ["INT_LEFT", "tmp:1:8", ["tmp:1:8", "const:0:8"]]
- 00af80c4 ["INT_ADD", "tmp:2:8", ["register:4040:8", "tmp:1:8"]]
- 00af80c8 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00af80c8 ["INT_LESSEQUAL", "register:105:1", ["const:0:4", "register:4040:4"]]
- 00af80c8 ["INT_SBORROW", "register:106:1", ["register:4040:4", "const:0:4"]]
- 00af80c8 ["INT_SUB", "tmp:1:4", ["register:4040:4", "tmp:0:4"]]
~~~


<a id="compare-5a8ebec03ebe29880810ca1a3dae204c"></a>

### [`00af811c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af811c.md) → [`00af9110`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af9110.md) FUN_00af9110

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00713d7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/00713d7c.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`0071412c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00714/0071412c.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00af8130 ["INT_ADD", "register:40f0:8", ["const:af8130:8", "const:4:8"]]
- 00af8130 ["CALL", null, ["callee:008524fc:8"]]
+ 00af9124 ["INT_ADD", "register:40f0:8", ["const:af9124:8", "const:4:8"]]
+ 00af9124 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-a621be9557e23e9df26104c291ba01bb"></a>

### [`00af8164`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8164.md) → [`00af9158`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af9158.md) FUN_00af9158

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00713d7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/00713d7c.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`0071412c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00714/0071412c.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 100.00% / 新版 100.00%

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
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
    "ordinal": 0,
    "slot": 0
  }
]
~~~


~~~diff
- 00af8178 ["INT_ADD", "register:40f0:8", ["const:af8178:8", "const:4:8"]]
- 00af8178 ["CALL", null, ["callee:008524fc:8"]]
+ 00af916c ["INT_ADD", "register:40f0:8", ["const:af916c:8", "const:4:8"]]
+ 00af916c ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-25c7c3615edcaf2a4444b46fb0a40e83"></a>

### [`00af81a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af81a4.md) → [`00af9198`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af9198.md) FUN_00af9198

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00af81c0 ["INT_ADD", "register:40f0:8", ["const:af81c0:8", "const:4:8"]]
- 00af81c0 ["CALL", null, ["callee:008524fc:8"]]
+ 00af91b4 ["INT_ADD", "register:40f0:8", ["const:af91b4:8", "const:4:8"]]
+ 00af91b4 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-d9cefb8265fe59067e37d144d280a044"></a>

### [`00af81f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af81f0.md) → [`00af91e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af91e4.md) FUN_00af91e4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00711df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 93.75% / 新版 93.75%

アドレスに依存する影響 `unresolved_return_alignment` 1件

~~~diff
- 00af8204 ["INT_ADD", "register:40f0:8", ["const:af8204:8", "const:4:8"]]
- 00af8204 ["CALL", null, ["callee:008524fc:8"]]
+ 00af91f8 ["INT_ADD", "register:40f0:8", ["const:af91f8:8", "const:4:8"]]
+ 00af91f8 ["CALL", null, ["callee:008524fc:8"]]
- 00af822c ["COPY", "register:0:8", ["register:40f0:8"]]
- 00af822c ["RETURN", null, ["register:0:8"]]
+ 00af9220 ["COPY", "register:0:8", ["register:40f0:8"]]
+ 00af9220 ["RETURN", null, ["register:0:8"]]
~~~


<a id="compare-152d438b6f4b90a6312db60cbd1c41c5"></a>

### [`00af82bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af82bc.md) → [`00af92b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af92b0.md) FUN_00af92b0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`007133b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/007133b0.md) [`007142b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/007142b4.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`00713760`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00713/00713760.md) [`00714664`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00714/00714664.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 81.25% / 新版 81.25%

アドレスに依存する影響 `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af82bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af82c0",
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
      "00af92b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00af92b4",
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
- 00af82bc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00af82bc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00af82bc ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00af82bc ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00af82c0 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00af82c0 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00af82c0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00af82c0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00af82c4 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-14417258a1c9d8890c4f4b4663127ae5"></a>

### [`00af82fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af82fc.md) → [`00af92f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af92f0.md) FUN_00af92f0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 94.74% / 新版 94.74%

アドレスに依存する影響 `unresolved_return_alignment` 1件

~~~diff
- 00af8318 ["INT_ADD", "register:40f0:8", ["const:af8318:8", "const:4:8"]]
- 00af8318 ["CALL", null, ["callee:008524fc:8"]]
+ 00af930c ["INT_ADD", "register:40f0:8", ["const:af930c:8", "const:4:8"]]
+ 00af930c ["CALL", null, ["callee:008524fc:8"]]
- 00af8344 ["COPY", "register:0:8", ["register:40f0:8"]]
- 00af8344 ["RETURN", null, ["register:0:8"]]
+ 00af9338 ["COPY", "register:0:8", ["register:40f0:8"]]
+ 00af9338 ["RETURN", null, ["register:0:8"]]
~~~


<a id="compare-746e7e5ff9d8a3ec2c9507e0e8fd5ac9"></a>

### [`00af8348`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8348.md) → [`00af933c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af933c.md) FUN_00af933c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`007133b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/007133b0.md) [`007142b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/007142b4.md) [`00714fe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/00714fe4.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 3件 [`00713760`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00713/00713760.md) [`00714664`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00714/00714664.md) [`00715394`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00715/00715394.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 56.25% / 新版 56.25%

アドレスに依存する影響 `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af837c",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af8380",
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
      "00af9370",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00af9374",
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
- 00af835c ["INT_ADD", "register:40f0:8", ["const:af835c:8", "const:4:8"]]
- 00af835c ["CALL", null, ["callee:008524fc:8"]]
+ 00af9350 ["INT_ADD", "register:40f0:8", ["const:af9350:8", "const:4:8"]]
+ 00af9350 ["CALL", null, ["callee:008524fc:8"]]
- 00af836c ["INT_SEXT", "tmp:0:8", ["register:4098:4"]]
- 00af836c ["INT_SEXT", "tmp:1:8", ["register:4048:4"]]
- 00af836c ["INT_MULT", "tmp:2:8", ["tmp:0:8", "tmp:1:8"]]
- 00af836c ["INT_ADD", "register:4040:8", ["register:4040:8", "tmp:2:8"]]
- 00af8370 ["COPY", "register:4048:8", ["const:4b84:8"]]
~~~


<a id="compare-4b68029231b36a98bde73bb8c2125848"></a>

### [`00af8388`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8388.md) → [`00af937c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af937c.md) FUN_00af937c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00af83a4 ["INT_ADD", "register:40f0:8", ["const:af83a4:8", "const:4:8"]]
- 00af83a4 ["CALL", null, ["callee:008524fc:8"]]
+ 00af9398 ["INT_ADD", "register:40f0:8", ["const:af9398:8", "const:4:8"]]
+ 00af9398 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-f85f173235ddaa63d9f64ec3ed1f6d1b"></a>

### [`00af8414`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8414.md) → [`00af9408`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af9408.md) FUN_00af9408

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00af8430 ["INT_ADD", "register:40f0:8", ["const:af8430:8", "const:4:8"]]
- 00af8430 ["CALL", null, ["callee:008524fc:8"]]
+ 00af9424 ["INT_ADD", "register:40f0:8", ["const:af9424:8", "const:4:8"]]
+ 00af9424 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-cdc0210333465adcaf9bb59846101e79"></a>

### [`00af84a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af84a0.md) → [`00af9494`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af9494.md) FUN_00af9494

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 78.95% / 新版 78.95%

アドレスに依存する影響 `unresolved_store_alignment` 1件

~~~diff
- 00af84bc ["INT_ADD", "register:40f0:8", ["const:af84bc:8", "const:4:8"]]
- 00af84bc ["CALL", null, ["callee:008524fc:8"]]
+ 00af94b0 ["INT_ADD", "register:40f0:8", ["const:af94b0:8", "const:4:8"]]
+ 00af94b0 ["CALL", null, ["callee:008524fc:8"]]
- 00af84cc ["INT_SEXT", "tmp:0:8", ["register:40a0:4"]]
- 00af84cc ["INT_SEXT", "tmp:1:8", ["register:4048:4"]]
- 00af84cc ["INT_MULT", "tmp:2:8", ["tmp:0:8", "tmp:1:8"]]
- 00af84cc ["INT_ADD", "register:4040:8", ["register:4040:8", "tmp:2:8"]]
- 00af84d0 ["COPY", "register:4048:8", ["const:4b8c:8"]]
~~~


<a id="compare-fce615386754b45e73a7157317846d2f"></a>

### [`00af84ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af84ec.md) → [`00af94e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af94e0.md) FUN_00af94e0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 78.95% / 新版 78.95%

アドレスに依存する影響 `unresolved_store_alignment` 1件

~~~diff
- 00af8508 ["INT_ADD", "register:40f0:8", ["const:af8508:8", "const:4:8"]]
- 00af8508 ["CALL", null, ["callee:008524fc:8"]]
+ 00af94fc ["INT_ADD", "register:40f0:8", ["const:af94fc:8", "const:4:8"]]
+ 00af94fc ["CALL", null, ["callee:008524fc:8"]]
- 00af8518 ["INT_SEXT", "tmp:0:8", ["register:40a0:4"]]
- 00af8518 ["INT_SEXT", "tmp:1:8", ["register:4048:4"]]
- 00af8518 ["INT_MULT", "tmp:2:8", ["tmp:0:8", "tmp:1:8"]]
- 00af8518 ["INT_ADD", "register:4040:8", ["register:4040:8", "tmp:2:8"]]
- 00af851c ["COPY", "register:4048:8", ["const:4c14:8"]]
~~~


<a id="compare-40b9f314f6fb09352eeeb25ec6f25bfa"></a>

### [`00af8538`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8538.md) → [`00af952c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af952c.md) FUN_00af952c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 84.21% / 新版 84.21%

アドレスに依存する影響 `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af8538",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af853c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af8540",
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
      "00af952c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00af9530",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00af9534",
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
- 00af8538 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00af8538 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00af8538 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00af8538 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00af853c ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00af853c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 00af8540 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00af8540 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00af8540 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00af8540 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-ec80b039e6669ffc8a94f45b9845683e"></a>

### [`00af8584`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8584.md) → [`00af9578`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af9578.md) FUN_00af9578

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`00714fe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/00714fe4.md) [`00715558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00715/00715558.md) [`00716de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 3件 [`00715394`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00715/00715394.md) [`00715908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00715/00715908.md) [`00717198`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00717/00717198.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 37.50% / 新版 37.50%

アドレスに依存する影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af8584",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af8588",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af85b8",
      "READ",
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
      "00af9578",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00af957c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00af95ac",
      "READ",
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
- 00af8584 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00af8584 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00af8584 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00af8584 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00af8588 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00af8588 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00af8588 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00af8588 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00af858c ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-61e31abc87f4d4084c89d602e7eb60bc"></a>

### [`00af85c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af85c4.md) → [`00af95b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af95b8.md) FUN_00af95b8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00af85e0 ["INT_ADD", "register:40f0:8", ["const:af85e0:8", "const:4:8"]]
- 00af85e0 ["CALL", null, ["callee:008524fc:8"]]
+ 00af95d4 ["INT_ADD", "register:40f0:8", ["const:af95d4:8", "const:4:8"]]
+ 00af95d4 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-52e26260af2b1f2401f1a3dbddd3c080"></a>

### [`00af8650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8650.md) → [`00af9644`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af9644.md) FUN_00af9644

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00af866c ["INT_ADD", "register:40f0:8", ["const:af866c:8", "const:4:8"]]
- 00af866c ["CALL", null, ["callee:008524fc:8"]]
+ 00af9660 ["INT_ADD", "register:40f0:8", ["const:af9660:8", "const:4:8"]]
+ 00af9660 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-1531e53e2b64262689b9aeab4384c0ef"></a>

### [`00af869c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af869c.md) → [`00af9690`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af9690.md) FUN_00af9690

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`00714fe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/00714fe4.md) [`00715558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00715/00715558.md) [`00716de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 3件 [`00715394`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00715/00715394.md) [`00715908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00715/00715908.md) [`00717198`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00717/00717198.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 93.75% / 新版 93.75%

アドレスに依存する影響 `unresolved_return_alignment` 1件

~~~diff
- 00af86b0 ["INT_ADD", "register:40f0:8", ["const:af86b0:8", "const:4:8"]]
- 00af86b0 ["CALL", null, ["callee:008524fc:8"]]
+ 00af96a4 ["INT_ADD", "register:40f0:8", ["const:af96a4:8", "const:4:8"]]
+ 00af96a4 ["CALL", null, ["callee:008524fc:8"]]
- 00af86d8 ["COPY", "register:0:8", ["register:40f0:8"]]
- 00af86d8 ["RETURN", null, ["register:0:8"]]
+ 00af96cc ["COPY", "register:0:8", ["register:40f0:8"]]
+ 00af96cc ["RETURN", null, ["register:0:8"]]
~~~


<a id="compare-f021c9a7582387b916c7cbb6cda6593b"></a>

### [`00af86dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af86dc.md) → [`00af96d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af96d0.md) FUN_00af96d0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00af86f8 ["INT_ADD", "register:40f0:8", ["const:af86f8:8", "const:4:8"]]
- 00af86f8 ["CALL", null, ["callee:008524fc:8"]]
+ 00af96ec ["INT_ADD", "register:40f0:8", ["const:af96ec:8", "const:4:8"]]
+ 00af96ec ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-429d0f23200a990ad87f088d1d3ede5e"></a>

### [`00af8728`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8728.md) → [`00af971c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af971c.md) FUN_00af971c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00714fe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/00714fe4.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00715394`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00715/00715394.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00af873c ["INT_ADD", "register:40f0:8", ["const:af873c:8", "const:4:8"]]
- 00af873c ["CALL", null, ["callee:008524fc:8"]]
+ 00af9730 ["INT_ADD", "register:40f0:8", ["const:af9730:8", "const:4:8"]]
+ 00af9730 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-809ef680c2935fb182b1746cd2e56aef"></a>

### [`00af8768`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8768.md) → [`00af975c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af975c.md) FUN_00af975c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 73.68% / 新版 73.68%

アドレスに依存する影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af8768",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af876c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af8770",
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
      "00af975c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00af9760",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00af9764",
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
- 00af8768 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00af8768 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00af8768 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00af8768 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00af876c ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00af876c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 00af8770 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00af8770 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00af8770 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00af8770 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-d8c237f5dbc6a70bdcacb31df000cf19"></a>

### [`00af87b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af87b4.md) → [`00af97a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af97a8.md) FUN_00af97a8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`00714fe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/00714fe4.md) [`00715558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00715/00715558.md) [`00716de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 3件 [`00715394`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00715/00715394.md) [`00715908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00715/00715908.md) [`00717198`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00717/00717198.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_store_alignment

命令の説明率　旧版 81.25% / 新版 81.25%

アドレスに依存する影響 `return_value_candidate` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00af97d8",
      "incomplete_value": true,
      "site": "00af97e4",
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


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af87b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af87b8",
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
      "00af97a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00af97ac",
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
- 00af87b4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00af87b4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00af87b4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00af87b4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00af87b8 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00af87b8 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00af87b8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00af87b8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00af87bc ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-761f2217f0bf9de7e9e367f6f154da53"></a>

### [`00af87f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af87f4.md) → [`00af97e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af97e8.md) FUN_00af97e8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00af8810 ["INT_ADD", "register:40f0:8", ["const:af8810:8", "const:4:8"]]
- 00af8810 ["CALL", null, ["callee:008524fc:8"]]
+ 00af9804 ["INT_ADD", "register:40f0:8", ["const:af9804:8", "const:4:8"]]
+ 00af9804 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-18072bd6b75816952b7d573c57f27adf"></a>

### [`00af8840`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8840.md) → [`00af9834`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af9834.md) FUN_00af9834

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`00714fe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/00714fe4.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`00715394`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00715/00715394.md) [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00af8854 ["INT_ADD", "register:40f0:8", ["const:af8854:8", "const:4:8"]]
- 00af8854 ["CALL", null, ["callee:008524fc:8"]]
+ 00af9848 ["INT_ADD", "register:40f0:8", ["const:af9848:8", "const:4:8"]]
+ 00af9848 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-53504961c90dcac4e5e02c99509a5d2b"></a>

### [`00af8888`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8888.md) → [`00af987c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af987c.md) FUN_00af987c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00714fe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/00714fe4.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`00715394`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00715/00715394.md) [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 73.68% / 新版 73.68%

アドレスに依存する影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af8888",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af888c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af8890",
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
      "00af987c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00af9880",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00af9884",
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
- 00af8888 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00af8888 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00af8888 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00af8888 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00af888c ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00af888c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 00af8890 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00af8890 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00af8890 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00af8890 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-8b1417228edd66597503da10c4aa590f"></a>

### [`00af88d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af88d4.md) → [`00af98c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af98c8.md) FUN_00af98c8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed`

- 旧版 呼出元 1件 [`00714fe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/00714fe4.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00715394`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00715/00715394.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 87.50% / 新版 87.50%

アドレスに依存する影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af88d8",
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
      "00af98cc",
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
- 00af88d8 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00af88d8 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00af88d8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00af88d8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00af88e8 ["INT_ADD", "register:40f0:8", ["const:af88e8:8", "const:4:8"]]
- 00af88e8 ["CALL", null, ["callee:008524fc:8"]]
+ 00af98dc ["INT_ADD", "register:40f0:8", ["const:af98dc:8", "const:4:8"]]
+ 00af98dc ["CALL", null, ["callee:008524fc:8"]]
- 00af8910 ["COPY", "register:0:8", ["register:40f0:8"]]
- 00af8910 ["RETURN", null, ["register:0:8"]]
~~~


<a id="compare-8924887677e144ff118d889211c3b46d"></a>

### [`00af8914`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8914.md) → [`00af9908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af9908.md) FUN_00af9908

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00af8930 ["INT_ADD", "register:40f0:8", ["const:af8930:8", "const:4:8"]]
- 00af8930 ["CALL", null, ["callee:008524fc:8"]]
+ 00af9924 ["INT_ADD", "register:40f0:8", ["const:af9924:8", "const:4:8"]]
+ 00af9924 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-38f616c79e1168781302edcd535053d9"></a>

### [`00af8960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8960.md) → [`00af9954`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af9954.md) FUN_00af9954

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00714fe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/00714fe4.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00715394`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00715/00715394.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 83.33% / 新版 83.33%

アドレスに依存する影響 `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af8960",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af8964",
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
      "00af9954",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00af9958",
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
- 00af8960 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00af8960 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00af8960 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00af8960 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00af8964 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00af8964 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00af8964 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00af8964 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00af8968 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-531b2b972375abab4e8bab456d343eff"></a>

### [`00af89a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af89a8.md) → [`00af999c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af999c.md) FUN_00af999c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00714fe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/00714fe4.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`00715394`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00715/00715394.md) [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 78.95% / 新版 78.95%

アドレスに依存する影響 `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af89a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af89ac",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af89b0",
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
      "00af999c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00af99a0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00af99a4",
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
- 00af89a8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00af89a8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00af89a8 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00af89a8 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00af89ac ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00af89ac ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 00af89b0 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00af89b0 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00af89b0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00af89b0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-0bbf11b493ef75be86c90520eb0f11c1"></a>

### [`00af89f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af89f4.md) → [`00af99e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af99e8.md) FUN_00af99e8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`007133b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/007133b0.md) [`007142b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/007142b4.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`00713760`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00713/00713760.md) [`00714664`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00714/00714664.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00af8a08 ["INT_ADD", "register:40f0:8", ["const:af8a08:8", "const:4:8"]]
- 00af8a08 ["CALL", null, ["callee:008524fc:8"]]
+ 00af99fc ["INT_ADD", "register:40f0:8", ["const:af99fc:8", "const:4:8"]]
+ 00af99fc ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-074d2f461aae87a2a6b2625c51209ab7"></a>

### [`00af8a34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8a34.md) → [`00af9a28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af9a28.md) FUN_00af9a28

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 78.95% / 新版 78.95%

アドレスに依存する影響 `unresolved_store_alignment` 1件

~~~diff
- 00af8a50 ["INT_ADD", "register:40f0:8", ["const:af8a50:8", "const:4:8"]]
- 00af8a50 ["CALL", null, ["callee:008524fc:8"]]
+ 00af9a44 ["INT_ADD", "register:40f0:8", ["const:af9a44:8", "const:4:8"]]
+ 00af9a44 ["CALL", null, ["callee:008524fc:8"]]
- 00af8a60 ["INT_SEXT", "tmp:0:8", ["register:40a0:4"]]
- 00af8a60 ["INT_SEXT", "tmp:1:8", ["register:4048:4"]]
- 00af8a60 ["INT_MULT", "tmp:2:8", ["tmp:0:8", "tmp:1:8"]]
- 00af8a60 ["INT_ADD", "register:4040:8", ["register:4040:8", "tmp:2:8"]]
- 00af8a64 ["COPY", "register:4048:8", ["const:4c48:8"]]
~~~


<a id="compare-bfe9bd39cbeeb43bdc900ce800af27d0"></a>

### [`00af8a80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8a80.md) → [`00af9a74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af9a74.md) FUN_00af9a74

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`007133b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/007133b0.md) [`007142b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/007142b4.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`00713760`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00713/00713760.md) [`00714664`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00714/00714664.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

アドレスに依存する影響 `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af8ab4",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af8ab8",
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
      "00af9aa8",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00af9aac",
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
- 00af8a94 ["INT_ADD", "register:40f0:8", ["const:af8a94:8", "const:4:8"]]
- 00af8a94 ["CALL", null, ["callee:008524fc:8"]]
+ 00af9a88 ["INT_ADD", "register:40f0:8", ["const:af9a88:8", "const:4:8"]]
+ 00af9a88 ["CALL", null, ["callee:008524fc:8"]]
- 00af8ab0 ["COPY", "tmp:0:8", ["register:4048:8"]]
- 00af8ab0 ["COPY", "tmp:1:8", ["tmp:0:8"]]
- 00af8ab0 ["INT_LEFT", "tmp:1:8", ["tmp:1:8", "const:0:8"]]
- 00af8ab0 ["INT_ADD", "tmp:2:8", ["register:4040:8", "tmp:1:8"]]
- 00af8ab4 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00af8ab4 ["LOAD", "tmp:1:8", ["const:1b1:8", "tmp:0:8"]]
- 00af8ab4 ["INT_ADD", "tmp:2:8", ["tmp:0:8", "const:8:8"]]
- 00af8ab4 ["LOAD", "tmp:3:8", ["const:1b1:8", "tmp:2:8"]]
~~~


<a id="compare-a96a06e274fb65170184eb8c7283afbc"></a>

### [`00af8b4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8b4c.md) → [`00af9b40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af9b40.md) FUN_00af9b40

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00af8b68 ["INT_ADD", "register:40f0:8", ["const:af8b68:8", "const:4:8"]]
- 00af8b68 ["CALL", null, ["callee:008524fc:8"]]
+ 00af9b5c ["INT_ADD", "register:40f0:8", ["const:af9b5c:8", "const:4:8"]]
+ 00af9b5c ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-84153833daf8c6dc86dc25873939049e"></a>

### [`00af8b98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8b98.md) → [`00af9b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af9b8c.md) FUN_00af9b8c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00715558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00715/00715558.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00715908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00715/00715908.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 93.75% / 新版 93.75%

アドレスに依存する影響 `unresolved_return_alignment` 1件

~~~diff
- 00af8bac ["INT_ADD", "register:40f0:8", ["const:af8bac:8", "const:4:8"]]
- 00af8bac ["CALL", null, ["callee:008524fc:8"]]
+ 00af9ba0 ["INT_ADD", "register:40f0:8", ["const:af9ba0:8", "const:4:8"]]
+ 00af9ba0 ["CALL", null, ["callee:008524fc:8"]]
- 00af8bd4 ["COPY", "register:0:8", ["register:40f0:8"]]
- 00af8bd4 ["RETURN", null, ["register:0:8"]]
+ 00af9bc8 ["COPY", "register:0:8", ["register:40f0:8"]]
+ 00af9bc8 ["RETURN", null, ["register:0:8"]]
~~~


<a id="compare-23e1f8626e33e5d9e59f3ec95a400453"></a>

### [`00af8bd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8bd8.md) → [`00af9bcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af9bcc.md) FUN_00af9bcc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 94.74% / 新版 94.74%

アドレスに依存する影響 `unresolved_store_alignment` 1件

~~~diff
- 00af8bf4 ["INT_ADD", "register:40f0:8", ["const:af8bf4:8", "const:4:8"]]
- 00af8bf4 ["CALL", null, ["callee:008524fc:8"]]
+ 00af9be8 ["INT_ADD", "register:40f0:8", ["const:af9be8:8", "const:4:8"]]
+ 00af9be8 ["CALL", null, ["callee:008524fc:8"]]
- 00af8c10 ["COPY", "tmp:0:4", ["register:4098:4"]]
- 00af8c10 ["COPY", "tmp:1:8", ["register:4048:8"]]
- 00af8c10 ["COPY", "tmp:2:8", ["tmp:1:8"]]
- 00af8c10 ["INT_LEFT", "tmp:2:8", ["tmp:2:8", "const:0:8"]]
+ 00af9c04 ["COPY", "tmp:0:4", ["register:4098:4"]]
+ 00af9c04 ["COPY", "tmp:1:8", ["register:4048:8"]]
+ 00af9c04 ["COPY", "tmp:2:8", ["tmp:1:8"]]
+ 00af9c04 ["INT_LEFT", "tmp:2:8", ["tmp:2:8", "const:0:8"]]
~~~


<a id="compare-2bf118b969384810fec3f2c40643a372"></a>

### [`00af8c24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8c24.md) → [`00af9c18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af9c18.md) FUN_00af9c18

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00a52034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a52/00a52034.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) [`00a53028`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a53/00a53028.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 94.74% / 新版 94.74%

アドレスに依存する影響 `unresolved_store_alignment` 1件

~~~diff
- 00af8c40 ["INT_ADD", "register:40f0:8", ["const:af8c40:8", "const:4:8"]]
- 00af8c40 ["CALL", null, ["callee:008524fc:8"]]
+ 00af9c34 ["INT_ADD", "register:40f0:8", ["const:af9c34:8", "const:4:8"]]
+ 00af9c34 ["CALL", null, ["callee:008524fc:8"]]
- 00af8c5c ["COPY", "tmp:0:4", ["register:4098:4"]]
- 00af8c5c ["COPY", "tmp:1:8", ["register:4048:8"]]
- 00af8c5c ["COPY", "tmp:2:8", ["tmp:1:8"]]
- 00af8c5c ["INT_LEFT", "tmp:2:8", ["tmp:2:8", "const:0:8"]]
+ 00af9c50 ["COPY", "tmp:0:4", ["register:4098:4"]]
+ 00af9c50 ["COPY", "tmp:1:8", ["register:4048:8"]]
+ 00af9c50 ["COPY", "tmp:2:8", ["tmp:1:8"]]
+ 00af9c50 ["INT_LEFT", "tmp:2:8", ["tmp:2:8", "const:0:8"]]
~~~


<a id="compare-f58389e44fd014691ec3093518e444dc"></a>

### [`00af8c70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8c70.md) → [`00af9c64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af9c64.md) FUN_00af9c64

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00711df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 100.00% / 新版 100.00%

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00af9c9c",
      "incomplete_value": true,
      "site": "00af9ca8",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "INT_RIGHT",
            "4",
            [
              [
                "live",
                "register:4040:4"
              ],
              [
                "leaf",
                "const:1f:4"
              ]
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
- 00af8c84 ["INT_ADD", "register:40f0:8", ["const:af8c84:8", "const:4:8"]]
- 00af8c84 ["CALL", null, ["callee:008524fc:8"]]
+ 00af9c78 ["INT_ADD", "register:40f0:8", ["const:af9c78:8", "const:4:8"]]
+ 00af9c78 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-2ccaddf30bb70854c4d1b51bfbfbabce"></a>

### [`00af8cf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8cf8.md) → [`00af9cec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af9cec.md) FUN_00af9cec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 78.95% / 新版 78.95%

アドレスに依存する影響 `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af8cf8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af8cfc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af8d00",
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
      "00af9cec",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00af9cf0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00af9cf4",
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
- 00af8cf8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00af8cf8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00af8cf8 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00af8cf8 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00af8cfc ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00af8cfc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 00af8d00 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00af8d00 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00af8d00 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00af8d00 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-0b528935857eb157b5dbfa3bb298d0ad"></a>

### [`00af8d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8d44.md) → [`00af9d38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af9d38.md) FUN_00af9d38

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00713d7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/00713d7c.md) [`00af3588`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af3/00af3588.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`0071412c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00714/0071412c.md) [`00af457c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af4/00af457c.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 83.33% / 新版 83.33%

アドレスに依存する影響 `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af8d44",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af8d48",
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
      "00af9d38",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00af9d3c",
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
- 00af8d44 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00af8d44 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00af8d44 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00af8d44 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00af8d48 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00af8d48 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00af8d48 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00af8d48 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00af8d4c ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-ef50bcd84d478ff0355029e487e612ee"></a>

### [`00af8d8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8d8c.md) → [`00af9d80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af9d80.md) FUN_00af9d80

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed`

- 旧版 呼出元 1件 [`00713d7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/00713d7c.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`0071412c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00714/0071412c.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_store_alignment

命令の説明率　旧版 81.25% / 新版 81.25%

アドレスに依存する影響 `return_value_candidate` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00af9db0",
      "incomplete_value": true,
      "site": "00af9dbc",
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
      "definition_site": "00af8dbc",
      "incomplete_value": true,
      "site": "00af8dc8",
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
      "unmatched:00af8d90",
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
      "00af9d84",
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
- 00af8d90 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00af8d90 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00af8d90 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00af8d90 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00af8d94 ["COPY", "register:40e8:8", ["register:8:8"]]
- 00af8da0 ["INT_ADD", "register:40f0:8", ["const:af8da0:8", "const:4:8"]]
- 00af8da0 ["CALL", null, ["callee:008524fc:8"]]
+ 00af9d94 ["INT_ADD", "register:40f0:8", ["const:af9d94:8", "const:4:8"]]
+ 00af9d94 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-4903b19651bb39da14046a89d737166e"></a>

### [`00af8dcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8dcc.md) → [`00af9dc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af9dc0.md) FUN_00af9dc0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00af3590`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af3/00af3590.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) [`00af4584`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af4/00af4584.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 94.74% / 新版 94.74%

アドレスに依存する影響 `unresolved_store_alignment` 1件

~~~diff
- 00af8de8 ["INT_ADD", "register:40f0:8", ["const:af8de8:8", "const:4:8"]]
- 00af8de8 ["CALL", null, ["callee:008524fc:8"]]
+ 00af9ddc ["INT_ADD", "register:40f0:8", ["const:af9ddc:8", "const:4:8"]]
+ 00af9ddc ["CALL", null, ["callee:008524fc:8"]]
- 00af8e04 ["COPY", "tmp:0:4", ["register:4098:4"]]
- 00af8e04 ["COPY", "tmp:1:8", ["register:4048:8"]]
- 00af8e04 ["COPY", "tmp:2:8", ["tmp:1:8"]]
- 00af8e04 ["INT_LEFT", "tmp:2:8", ["tmp:2:8", "const:0:8"]]
+ 00af9df8 ["COPY", "tmp:0:4", ["register:4098:4"]]
+ 00af9df8 ["COPY", "tmp:1:8", ["register:4048:8"]]
+ 00af9df8 ["COPY", "tmp:2:8", ["tmp:1:8"]]
+ 00af9df8 ["INT_LEFT", "tmp:2:8", ["tmp:2:8", "const:0:8"]]
~~~


<a id="compare-735db576a52ce01fdfeeee549a5efde7"></a>

### [`00af8e18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8e18.md) → [`00af9e0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af9e0c.md) FUN_00af9e0c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00710330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`007106e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00710/007106e0.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 56.25% / 新版 56.25%

アドレスに依存する影響 `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af8e4c",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af8e50",
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
      "00af9e40",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00af9e44",
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
- 00af8e2c ["INT_ADD", "register:40f0:8", ["const:af8e2c:8", "const:4:8"]]
- 00af8e2c ["CALL", null, ["callee:008524fc:8"]]
+ 00af9e20 ["INT_ADD", "register:40f0:8", ["const:af9e20:8", "const:4:8"]]
+ 00af9e20 ["CALL", null, ["callee:008524fc:8"]]
- 00af8e3c ["INT_SEXT", "tmp:0:8", ["register:4098:4"]]
- 00af8e3c ["INT_SEXT", "tmp:1:8", ["register:4048:4"]]
- 00af8e3c ["INT_MULT", "tmp:2:8", ["tmp:0:8", "tmp:1:8"]]
- 00af8e3c ["INT_ADD", "register:4040:8", ["register:4040:8", "tmp:2:8"]]
- 00af8e40 ["COPY", "register:4048:8", ["const:4994:8"]]
~~~


<a id="compare-1560c564f54dcfe220a4ff0b52c5c3f3"></a>

### [`00af8e58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8e58.md) → [`00af9e4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af9e4c.md) FUN_00af9e4c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00af359c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af3/00af359c.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) [`00af4590`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af4/00af4590.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 78.95% / 新版 78.95%

アドレスに依存する影響 `unresolved_store_alignment` 1件

~~~diff
- 00af8e74 ["INT_ADD", "register:40f0:8", ["const:af8e74:8", "const:4:8"]]
- 00af8e74 ["CALL", null, ["callee:008524fc:8"]]
+ 00af9e68 ["INT_ADD", "register:40f0:8", ["const:af9e68:8", "const:4:8"]]
+ 00af9e68 ["CALL", null, ["callee:008524fc:8"]]
- 00af8e84 ["INT_SEXT", "tmp:0:8", ["register:40a0:4"]]
- 00af8e84 ["INT_SEXT", "tmp:1:8", ["register:4048:4"]]
- 00af8e84 ["INT_MULT", "tmp:2:8", ["tmp:0:8", "tmp:1:8"]]
- 00af8e84 ["INT_ADD", "register:4040:8", ["register:4040:8", "tmp:2:8"]]
- 00af8e88 ["COPY", "register:4048:8", ["const:4994:8"]]
~~~


<a id="compare-247075d847ac17688d8f57c15b47740f"></a>

### [`00af8ea4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8ea4.md) → [`00af9e98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af9e98.md) FUN_00af9e98

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`00713d7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/00713d7c.md) [`00af35a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af3/00af35a8.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`0071412c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00714/0071412c.md) [`00af459c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af4/00af459c.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00af8eb8 ["INT_ADD", "register:40f0:8", ["const:af8eb8:8", "const:4:8"]]
- 00af8eb8 ["CALL", null, ["callee:008524fc:8"]]
+ 00af9eac ["INT_ADD", "register:40f0:8", ["const:af9eac:8", "const:4:8"]]
+ 00af9eac ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-310707da23333c008c864d14b1707b4e"></a>

### [`00af8eec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8eec.md) → [`00af9ee0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af9ee0.md) FUN_00af9ee0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00713d7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/00713d7c.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`0071412c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00714/0071412c.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

アドレスに依存する影響 `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af8f20",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af8f24",
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
      "00af9f14",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00af9f18",
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
- 00af8f00 ["INT_ADD", "register:40f0:8", ["const:af8f00:8", "const:4:8"]]
- 00af8f00 ["CALL", null, ["callee:008524fc:8"]]
+ 00af9ef4 ["INT_ADD", "register:40f0:8", ["const:af9ef4:8", "const:4:8"]]
+ 00af9ef4 ["CALL", null, ["callee:008524fc:8"]]
- 00af8f1c ["COPY", "tmp:0:8", ["register:4048:8"]]
- 00af8f1c ["COPY", "tmp:1:8", ["tmp:0:8"]]
- 00af8f1c ["INT_LEFT", "tmp:1:8", ["tmp:1:8", "const:0:8"]]
- 00af8f1c ["INT_ADD", "tmp:2:8", ["register:4040:8", "tmp:1:8"]]
- 00af8f20 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00af8f20 ["LOAD", "tmp:1:8", ["const:1b1:8", "tmp:0:8"]]
- 00af8f20 ["INT_ADD", "tmp:2:8", ["tmp:0:8", "const:8:8"]]
- 00af8f20 ["LOAD", "tmp:3:8", ["const:1b1:8", "tmp:2:8"]]
~~~


<a id="compare-4b97e99cd3f970f3f27abf19d45efd5b"></a>

### [`00af8f2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8f2c.md) → [`00af9f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af9f20.md) FUN_00af9f20

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00af35b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af3/00af35b0.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) [`00af45a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af4/00af45a4.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 73.68% / 新版 73.68%

アドレスに依存する影響 `unresolved_store_alignment` 1件

~~~diff
- 00af8f48 ["INT_ADD", "register:40f0:8", ["const:af8f48:8", "const:4:8"]]
- 00af8f48 ["CALL", null, ["callee:008524fc:8"]]
+ 00af9f3c ["INT_ADD", "register:40f0:8", ["const:af9f3c:8", "const:4:8"]]
+ 00af9f3c ["CALL", null, ["callee:008524fc:8"]]
- 00af8f50 ["COPY", "register:4048:8", ["const:3ec:8"]]
- 00af8f58 ["INT_SEXT", "tmp:0:8", ["register:40a0:4"]]
- 00af8f58 ["INT_SEXT", "tmp:1:8", ["register:4048:4"]]
- 00af8f58 ["INT_MULT", "tmp:2:8", ["tmp:0:8", "tmp:1:8"]]
- 00af8f58 ["INT_ADD", "register:4040:8", ["register:4040:8", "tmp:2:8"]]
~~~


<a id="compare-f3a68070421e575ff16039f625e143ff"></a>

### [`00af8f78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8f78.md) → [`00af9f6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af9f6c.md) FUN_00af9f6c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00710330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`007106e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00710/007106e0.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

アドレスに依存する影響 `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af8fac",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af8fb0",
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
      "00af9fa0",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00af9fa4",
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
- 00af8f8c ["INT_ADD", "register:40f0:8", ["const:af8f8c:8", "const:4:8"]]
- 00af8f8c ["CALL", null, ["callee:008524fc:8"]]
+ 00af9f80 ["INT_ADD", "register:40f0:8", ["const:af9f80:8", "const:4:8"]]
+ 00af9f80 ["CALL", null, ["callee:008524fc:8"]]
- 00af8fa8 ["COPY", "tmp:0:8", ["register:4048:8"]]
- 00af8fa8 ["COPY", "tmp:1:8", ["tmp:0:8"]]
- 00af8fa8 ["INT_LEFT", "tmp:1:8", ["tmp:1:8", "const:0:8"]]
- 00af8fa8 ["INT_ADD", "tmp:2:8", ["register:4040:8", "tmp:1:8"]]
- 00af8fac ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00af8fac ["LOAD", "tmp:1:8", ["const:1b1:8", "tmp:0:8"]]
- 00af8fac ["INT_ADD", "tmp:2:8", ["tmp:0:8", "const:8:8"]]
- 00af8fac ["LOAD", "tmp:3:8", ["const:1b1:8", "tmp:2:8"]]
~~~


<a id="compare-7afe914f24e38edcd4d2fabb0fbe7d50"></a>

### [`00af8fb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af8/00af8fb8.md) → [`00af9fac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af9/00af9fac.md) FUN_00af9fac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00af35bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af3/00af35bc.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) [`00af45b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af4/00af45b0.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 78.95% / 新版 78.95%

アドレスに依存する影響 `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af8fb8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af8fbc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af8fc0",
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
      "00af9fac",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00af9fb0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00af9fb4",
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
- 00af8fb8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00af8fb8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00af8fb8 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00af8fb8 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00af8fbc ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00af8fbc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 00af8fc0 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00af8fc0 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00af8fc0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00af8fc0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-d383063372f19540f884a4409c517cf7"></a>

### [`00af904c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af904c.md) → [`00afa040`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afa/00afa040.md) FUN_00afa040

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00713d7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/00713d7c.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`0071412c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00714/0071412c.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 100.00% / 新版 100.00%

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00afa070",
      "incomplete_value": true,
      "site": "00afa07c",
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
- 00af9060 ["INT_ADD", "register:40f0:8", ["const:af9060:8", "const:4:8"]]
- 00af9060 ["CALL", null, ["callee:008524fc:8"]]
+ 00afa054 ["INT_ADD", "register:40f0:8", ["const:afa054:8", "const:4:8"]]
+ 00afa054 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-514b44cf3044c950fdbea6e2ae87b614"></a>

### [`00af9164`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9164.md) → [`00afa158`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afa/00afa158.md) FUN_00afa158

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00710330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`007106e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00710/007106e0.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

アドレスに依存する影響 `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af9198",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af919c",
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
      "00afa18c",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00afa190",
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
- 00af9178 ["INT_ADD", "register:40f0:8", ["const:af9178:8", "const:4:8"]]
- 00af9178 ["CALL", null, ["callee:008524fc:8"]]
+ 00afa16c ["INT_ADD", "register:40f0:8", ["const:afa16c:8", "const:4:8"]]
+ 00afa16c ["CALL", null, ["callee:008524fc:8"]]
- 00af9194 ["COPY", "tmp:0:8", ["register:4048:8"]]
- 00af9194 ["COPY", "tmp:1:8", ["tmp:0:8"]]
- 00af9194 ["INT_LEFT", "tmp:1:8", ["tmp:1:8", "const:0:8"]]
- 00af9194 ["INT_ADD", "tmp:2:8", ["register:4040:8", "tmp:1:8"]]
- 00af9198 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00af9198 ["LOAD", "tmp:1:8", ["const:1b1:8", "tmp:0:8"]]
- 00af9198 ["INT_ADD", "tmp:2:8", ["tmp:0:8", "const:8:8"]]
- 00af9198 ["LOAD", "tmp:3:8", ["const:1b1:8", "tmp:2:8"]]
~~~


<a id="compare-ab8620d08ba8a67c332e83c4943d383c"></a>

### [`00af91a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af91a4.md) → [`00afa198`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afa/00afa198.md) FUN_00afa198

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 78.95% / 新版 78.95%

アドレスに依存する影響 `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af91a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af91a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af91ac",
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
      "00afa198",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00afa19c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00afa1a0",
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
- 00af91a4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00af91a4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00af91a4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00af91a4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00af91a8 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00af91a8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 00af91ac ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00af91ac ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00af91ac ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00af91ac ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-d08091ca89e158f593497e96e866d51a"></a>

### [`00af91f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af91f0.md) → [`00afa1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afa/00afa1e4.md) FUN_00afa1e4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00713d7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/00713d7c.md) [`00af35c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af3/00af35c8.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`0071412c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00714/0071412c.md) [`00af45bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af4/00af45bc.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 38.89% / 新版 38.89%

アドレスに依存する影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af91f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af91f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af922c",
      "READ",
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
      "00afa1e4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00afa1e8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00afa220",
      "READ",
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
- 00af91f0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00af91f0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00af91f0 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00af91f0 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00af91f4 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00af91f4 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00af91f4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00af91f4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00af9204 ["INT_ADD", "register:40f0:8", ["const:af9204:8", "const:4:8"]]
- 00af9204 ["CALL", null, ["callee:008524fc:8"]]
+ 00afa1f8 ["INT_ADD", "register:40f0:8", ["const:afa1f8:8", "const:4:8"]]
+ 00afa1f8 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-2ffaa31d0aa992bf396142e9bdc7cda0"></a>

### [`00af9238`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af9/00af9238.md) → [`00afa22c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00afa/00afa22c.md) FUN_00afa22c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00713d7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/00713d7c.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`0071412c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00714/0071412c.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 81.25% / 新版 81.25%

アドレスに依存する影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af9238",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af923c",
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
      "00afa22c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00afa230",
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
- 00af9238 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00af9238 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00af9238 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00af9238 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00af923c ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00af923c ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00af923c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00af923c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00af924c ["INT_ADD", "register:40f0:8", ["const:af924c:8", "const:4:8"]]
- 00af924c ["CALL", null, ["callee:008524fc:8"]]
+ 00afa240 ["INT_ADD", "register:40f0:8", ["const:afa240:8", "const:4:8"]]
+ 00afa240 ["CALL", null, ["callee:008524fc:8"]]
~~~


