# v16.0.2 → v16.0.3 · 要調査の変更候補 (38)

[一覧の目次](README.md)

<a id="compare-061bf50951cef9affeb28700fbfb4273"></a>

### [`00bf0588`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf0588.md) → [`00bf157c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf1/00bf157c.md) _ZNSt6__ndk119__shared_weak_count16__release_sharedEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf05a4 ["INT_ADD", "register:40f0:8", ["const:bf05a4:8", "const:4:8"]]
- 00bf05a4 ["CALL", null, ["callee:00c54d90:8"]]
+ 00bf1598 ["INT_ADD", "register:40f0:8", ["const:bf1598:8", "const:4:8"]]
+ 00bf1598 ["CALL", null, ["callee:00c54d90:8"]]
- 00bf05cc ["COPY", "register:0:8", ["register:4040:8"]]
- 00bf05cc ["INT_ADD", "register:40f0:8", ["const:bf05cc:8", "const:4:8"]]
- 00bf05cc ["CALLIND", null, ["register:0:8"]]
+ 00bf15c0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bf15c0 ["INT_ADD", "register:40f0:8", ["const:bf15c0:8", "const:4:8"]]
+ 00bf15c0 ["CALLIND", null, ["register:0:8"]]
- 00bf05e0 ["INT_ADD", "register:40f0:8", ["const:bf05e0:8", "const:4:8"]]
- 00bf05e0 ["CALL", null, ["callee:00c54d90:8"]]
+ 00bf15d4 ["INT_ADD", "register:40f0:8", ["const:bf15d4:8", "const:4:8"]]
+ 00bf15d4 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-7098ffcd8f8f720a0150c40795d3ff26"></a>

### [`00bf0604`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf0604.md) → [`00bf15f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf1/00bf15f8.md) _ZNSt6__ndk119__shared_weak_count14__release_weakEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) · 呼出先 1件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 1件 [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) · 呼出先 1件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf0628 ["INT_ADD", "register:40f0:8", ["const:bf0628:8", "const:4:8"]]
- 00bf0628 ["CALL", null, ["callee:00c54d90:8"]]
+ 00bf161c ["INT_ADD", "register:40f0:8", ["const:bf161c:8", "const:4:8"]]
+ 00bf161c ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-a5065050cb3ac33fd44e74afe5847874"></a>

### [`00bf065c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf065c.md) → [`00bf1650`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf1/00bf1650.md) _ZNSt6__ndk119__shared_weak_count4lockEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c585c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c585c0.md) · 呼出先 1件 [`00c53ca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ca0.md)
- 新版 呼出元 1件 [`00c59590`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59590.md) · 呼出先 1件 [`00c54c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54c90.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf068c ["INT_ADD", "register:40f0:8", ["const:bf068c:8", "const:4:8"]]
- 00bf068c ["CALL", null, ["callee:00c54c90:8"]]
+ 00bf1680 ["INT_ADD", "register:40f0:8", ["const:bf1680:8", "const:4:8"]]
+ 00bf1680 ["CALL", null, ["callee:00c54c90:8"]]
~~~


<a id="compare-963ec5dddd13162970b67bbe804190ae"></a>

### [`00bf06c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf06c8.md) → [`00bf16bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf1/00bf16bc.md) _ZNSt6__ndk18__sp_mut4lockEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b770.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c740`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c740.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf06d8 ["INT_ADD", "register:40f0:8", ["const:bf06d8:8", "const:4:8"]]
- 00bf06d8 ["CALL", null, ["callee:00c5c740:8"]]
+ 00bf16cc ["INT_ADD", "register:40f0:8", ["const:bf16cc:8", "const:4:8"]]
+ 00bf16cc ["CALL", null, ["callee:00c5c740:8"]]
~~~


<a id="compare-40d60c7728f02728915aa39a0e6fc127"></a>

### [`00bf06ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf06ec.md) → [`00bf16e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf1/00bf16e0.md) _ZNSt6__ndk18__sp_mut6unlockEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b780.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c750.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf06fc ["INT_ADD", "register:40f0:8", ["const:bf06fc:8", "const:4:8"]]
- 00bf06fc ["CALL", null, ["callee:00c5c750:8"]]
+ 00bf16f0 ["INT_ADD", "register:40f0:8", ["const:bf16f0:8", "const:4:8"]]
+ 00bf16f0 ["CALL", null, ["callee:00c5c750:8"]]
~~~


<a id="compare-f19bc52e5d6f74268964174c1880c27d"></a>

### [`00bf0710`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf0710.md) → [`00bf1704`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf1/00bf1704.md) _ZNSt6__ndk112__get_sp_mutEPKv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 100.00% / 新版 100.00%

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00bf1750",
      "incomplete_value": true,
      "site": "00bf1754",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca5788:8"
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_AND",
              [
                "leaf",
                "const:3:4"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bf075c",
      "incomplete_value": true,
      "site": "00bf0760",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca47b8:8"
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_AND",
              [
                "leaf",
                "const:3:4"
              ]
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
- 00bf0750 ["COPY", "register:4048:8", ["const:ca47b8:8"]]
+ 00bf1744 ["COPY", "register:4048:8", ["const:ca5788:8"]]
~~~


<a id="compare-8648b885c53fb4841470ce4bfb81d113"></a>

### [`00bf0940`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf0940.md) → [`00bf1934`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf1/00bf1934.md) _ZNSt11logic_erroraSERKS_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d40.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf0968 ["INT_ADD", "register:40f0:8", ["const:bf0968:8", "const:4:8"]]
- 00bf0968 ["CALL", null, ["callee:00c54d30:8"]]
+ 00bf195c ["INT_ADD", "register:40f0:8", ["const:bf195c:8", "const:4:8"]]
+ 00bf195c ["CALL", null, ["callee:00c54d30:8"]]
- 00bf0974 ["INT_ADD", "register:40f0:8", ["const:bf0974:8", "const:4:8"]]
- 00bf0974 ["CALL", null, ["callee:00c54d30:8"]]
+ 00bf1968 ["INT_ADD", "register:40f0:8", ["const:bf1968:8", "const:4:8"]]
+ 00bf1968 ["CALL", null, ["callee:00c54d30:8"]]
- 00bf0984 ["INT_ADD", "register:40f0:8", ["const:bf0984:8", "const:4:8"]]
- 00bf0984 ["CALL", null, ["callee:00c58f50:8"]]
+ 00bf1978 ["INT_ADD", "register:40f0:8", ["const:bf1978:8", "const:4:8"]]
+ 00bf1978 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-49a0ba938519176f095a4ee194ebda37"></a>

### [`00bf0af0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf0af0.md) → [`00bf1ae4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf1/00bf1ae4.md) _ZNSt13runtime_erroraSERKS_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d40.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf0b18 ["INT_ADD", "register:40f0:8", ["const:bf0b18:8", "const:4:8"]]
- 00bf0b18 ["CALL", null, ["callee:00c54d30:8"]]
+ 00bf1b0c ["INT_ADD", "register:40f0:8", ["const:bf1b0c:8", "const:4:8"]]
+ 00bf1b0c ["CALL", null, ["callee:00c54d30:8"]]
- 00bf0b24 ["INT_ADD", "register:40f0:8", ["const:bf0b24:8", "const:4:8"]]
- 00bf0b24 ["CALL", null, ["callee:00c54d30:8"]]
+ 00bf1b18 ["INT_ADD", "register:40f0:8", ["const:bf1b18:8", "const:4:8"]]
+ 00bf1b18 ["CALL", null, ["callee:00c54d30:8"]]
- 00bf0b34 ["INT_ADD", "register:40f0:8", ["const:bf0b34:8", "const:4:8"]]
- 00bf0b34 ["CALL", null, ["callee:00c58f50:8"]]
+ 00bf1b28 ["INT_ADD", "register:40f0:8", ["const:bf1b28:8", "const:4:8"]]
+ 00bf1b28 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-9fc69e90964c03ba29e865d6dafdcc13"></a>

### [`00bf0ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf0ba0.md) → [`00bf1b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf1/00bf1b94.md) _ZNSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7replaceEmmPKcm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c58140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58140.md) · 呼出先 3件 [`0044295c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/0044295c.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c5b170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b170.md)
- 新版 呼出元 1件 [`00c59110`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59110.md) · 呼出先 3件 [`00442c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c7c.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c5c140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c140.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf0c40 ["INT_ADD", "register:40f0:8", ["const:bf0c40:8", "const:4:8"]]
- 00bf0c40 ["CALL", null, ["callee:00c5c140:8"]]
+ 00bf1c34 ["INT_ADD", "register:40f0:8", ["const:bf1c34:8", "const:4:8"]]
+ 00bf1c34 ["CALL", null, ["callee:00c5c140:8"]]
- 00bf0c8c ["INT_ADD", "register:40f0:8", ["const:bf0c8c:8", "const:4:8"]]
- 00bf0c8c ["CALL", null, ["callee:00c58fe0:8"]]
+ 00bf1c80 ["INT_ADD", "register:40f0:8", ["const:bf1c80:8", "const:4:8"]]
+ 00bf1c80 ["CALL", null, ["callee:00c58fe0:8"]]
- 00bf0c9c ["INT_ADD", "register:40f0:8", ["const:bf0c9c:8", "const:4:8"]]
- 00bf0c9c ["CALL", null, ["callee:00c58fe0:8"]]
+ 00bf1c90 ["INT_ADD", "register:40f0:8", ["const:bf1c90:8", "const:4:8"]]
+ 00bf1c90 ["CALL", null, ["callee:00c58fe0:8"]]
~~~


<a id="compare-446d3a4d07459897fc2d2c4e6f1b9d3a"></a>

### [`00bf0e2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf0e2c.md) → [`00bf1e20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf1/00bf1e20.md) _ZNSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcmm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf0e88 ["INT_ADD", "register:40f0:8", ["const:bf0e88:8", "const:4:8"]]
- 00bf0e88 ["CALL", null, ["callee:00c58f30:8"]]
+ 00bf1e7c ["INT_ADD", "register:40f0:8", ["const:bf1e7c:8", "const:4:8"]]
+ 00bf1e7c ["CALL", null, ["callee:00c58f30:8"]]
- 00bf0eac ["INT_ADD", "register:40f0:8", ["const:bf0eac:8", "const:4:8"]]
- 00bf0eac ["CALL", null, ["callee:00c58fe0:8"]]
+ 00bf1ea0 ["INT_ADD", "register:40f0:8", ["const:bf1ea0:8", "const:4:8"]]
+ 00bf1ea0 ["CALL", null, ["callee:00c58fe0:8"]]
- 00bf0ecc ["INT_ADD", "register:40f0:8", ["const:bf0ecc:8", "const:4:8"]]
- 00bf0ecc ["CALL", null, ["callee:0043bac4:8"]]
+ 00bf1ec0 ["INT_ADD", "register:40f0:8", ["const:bf1ec0:8", "const:4:8"]]
+ 00bf1ec0 ["CALL", null, ["callee:0043bac4:8"]]
~~~


<a id="compare-b7c607aeae73245a385bef0048bb970e"></a>

### [`00bf0efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf0efc.md) → [`00bf1ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf1/00bf1ef0.md) _ZNSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7replaceEmmPKc

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c58150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58150.md) · 呼出先 2件 [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c58140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58140.md)
- 新版 呼出元 1件 [`00c59120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59120.md) · 呼出先 2件 [`00c59080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59080.md) [`00c59110`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59110.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf0f24 ["INT_ADD", "register:40f0:8", ["const:bf0f24:8", "const:4:8"]]
- 00bf0f24 ["CALL", null, ["callee:00c59080:8"]]
+ 00bf1f18 ["INT_ADD", "register:40f0:8", ["const:bf1f18:8", "const:4:8"]]
+ 00bf1f18 ["CALL", null, ["callee:00c59080:8"]]
~~~


<a id="compare-4fa8abe2ee1f35d40e228f80df8a6571"></a>

### [`00bf0f7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf0f7c.md) → [`00bf1f70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf1/00bf1f70.md) _ZNKSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE16find_last_not_ofEPKcmm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c580a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580a0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c59070`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59070.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf0fd8 ["INT_ADD", "register:40f0:8", ["const:bf0fd8:8", "const:4:8"]]
- 00bf0fd8 ["CALL", null, ["callee:00c59070:8"]]
+ 00bf1fcc ["INT_ADD", "register:40f0:8", ["const:bf1fcc:8", "const:4:8"]]
+ 00bf1fcc ["CALL", null, ["callee:00c59070:8"]]
~~~


<a id="compare-50ea269ea701eb1271eaf9982773423a"></a>

### [`00bf1014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf1/00bf1014.md) → [`00bf2008`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf2/00bf2008.md) _ZNKSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE17find_first_not_ofEPKcmm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c580a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580a0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c59070`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59070.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf1068 ["INT_ADD", "register:40f0:8", ["const:bf1068:8", "const:4:8"]]
- 00bf1068 ["CALL", null, ["callee:00c59070:8"]]
+ 00bf205c ["INT_ADD", "register:40f0:8", ["const:bf205c:8", "const:4:8"]]
+ 00bf205c ["CALL", null, ["callee:00c59070:8"]]
~~~


<a id="compare-34afef08a127788e5787f11bd8ef6e94"></a>

### [`00bf10a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf1/00bf10a0.md) → [`00bf2094`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf2/00bf2094.md) FUN_00bf2094

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00bf1368`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf1/00bf1368.md) · 呼出先 4件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 1件 [`00bf235c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf2/00bf235c.md) · 呼出先 4件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf114c ["INT_ADD", "register:40f0:8", ["const:bf114c:8", "const:4:8"]]
- 00bf114c ["CALL", null, ["callee:00c58f30:8"]]
+ 00bf2140 ["INT_ADD", "register:40f0:8", ["const:bf2140:8", "const:4:8"]]
+ 00bf2140 ["CALL", null, ["callee:00c58f30:8"]]
- 00bf1164 ["INT_ADD", "register:40f0:8", ["const:bf1164:8", "const:4:8"]]
- 00bf1164 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00bf2158 ["INT_ADD", "register:40f0:8", ["const:bf2158:8", "const:4:8"]]
+ 00bf2158 ["CALL", null, ["callee:00c58fe0:8"]]
- 00bf1184 ["INT_ADD", "register:40f0:8", ["const:bf1184:8", "const:4:8"]]
- 00bf1184 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00bf2178 ["INT_ADD", "register:40f0:8", ["const:bf2178:8", "const:4:8"]]
+ 00bf2178 ["CALL", null, ["callee:00c58fe0:8"]]
~~~


<a id="compare-6ba30393ce296e0852b671491d416216"></a>

### [`00bf1208`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf1/00bf1208.md) → [`00bf21fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf2/00bf21fc.md) _ZNSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf1264 ["INT_ADD", "register:40f0:8", ["const:bf1264:8", "const:4:8"]]
- 00bf1264 ["CALL", null, ["callee:00c58f30:8"]]
+ 00bf2258 ["INT_ADD", "register:40f0:8", ["const:bf2258:8", "const:4:8"]]
+ 00bf2258 ["CALL", null, ["callee:00c58f30:8"]]
- 00bf1284 ["INT_ADD", "register:40f0:8", ["const:bf1284:8", "const:4:8"]]
- 00bf1284 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00bf2278 ["INT_ADD", "register:40f0:8", ["const:bf2278:8", "const:4:8"]]
+ 00bf2278 ["CALL", null, ["callee:00c58fe0:8"]]
- 00bf12a4 ["INT_ADD", "register:40f0:8", ["const:bf12a4:8", "const:4:8"]]
- 00bf12a4 ["CALL", null, ["callee:0043bac4:8"]]
+ 00bf2298 ["INT_ADD", "register:40f0:8", ["const:bf2298:8", "const:4:8"]]
+ 00bf2298 ["CALL", null, ["callee:0043bac4:8"]]
~~~


<a id="compare-d1fb126f4f3f6be2084f4778cf8508c2"></a>

### [`00bf12a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf1/00bf12a8.md) → [`00bf229c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf2/00bf229c.md) _ZNKSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE2atEm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`0044295c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/0044295c.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00442c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c7c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf12e8 ["INT_ADD", "register:40f0:8", ["const:bf12e8:8", "const:4:8"]]
- 00bf12e8 ["CALL", null, ["callee:00442c7c:8"]]
+ 00bf22dc ["INT_ADD", "register:40f0:8", ["const:bf22dc:8", "const:4:8"]]
+ 00bf22dc ["CALL", null, ["callee:00442c7c:8"]]
~~~


<a id="compare-3df4206014d677e97f6c7ca6195714e6"></a>

### [`00bf1368`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf1/00bf1368.md) → [`00bf235c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf2/00bf235c.md) _ZNSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7replaceEmmmc

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`0044295c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/0044295c.md) [`00bf10a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf1/00bf10a0.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00442c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c7c.md) [`00bf2094`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf2/00bf2094.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c59130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59130.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf1400 ["INT_ADD", "register:40f0:8", ["const:bf1400:8", "const:4:8"]]
- 00bf1400 ["CALL", null, ["callee:00bf2094:8"]]
+ 00bf23f4 ["INT_ADD", "register:40f0:8", ["const:bf23f4:8", "const:4:8"]]
+ 00bf23f4 ["CALL", null, ["callee:00bf2094:8"]]
- 00bf1438 ["INT_ADD", "register:40f0:8", ["const:bf1438:8", "const:4:8"]]
- 00bf1438 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00bf242c ["INT_ADD", "register:40f0:8", ["const:bf242c:8", "const:4:8"]]
+ 00bf242c ["CALL", null, ["callee:00c58fe0:8"]]
- 00bf144c ["INT_ADD", "register:40f0:8", ["const:bf144c:8", "const:4:8"]]
- 00bf144c ["CALL", null, ["callee:00c59130:8"]]
+ 00bf2440 ["INT_ADD", "register:40f0:8", ["const:bf2440:8", "const:4:8"]]
+ 00bf2440 ["CALL", null, ["callee:00c59130:8"]]
~~~


<a id="compare-b6de23b40708b7210893a6272aefdbfe"></a>

### [`00bf149c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf1/00bf149c.md) → [`00bf2490`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf2/00bf2490.md) FUN_00bf2490

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00bf15e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf1/00bf15e8.md) [`00bf2034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2034.md) · 呼出先 5件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 2件 [`00bf25dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf2/00bf25dc.md) [`00bf3028`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf3/00bf3028.md) · 呼出先 5件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf154c ["INT_ADD", "register:40f0:8", ["const:bf154c:8", "const:4:8"]]
- 00bf154c ["CALL", null, ["callee:00c58fe0:8"]]
+ 00bf2540 ["INT_ADD", "register:40f0:8", ["const:bf2540:8", "const:4:8"]]
+ 00bf2540 ["CALL", null, ["callee:00c58fe0:8"]]
- 00bf158c ["INT_ADD", "register:40f0:8", ["const:bf158c:8", "const:4:8"]]
- 00bf158c ["CALL", null, ["callee:00c58f30:8"]]
+ 00bf2580 ["INT_ADD", "register:40f0:8", ["const:bf2580:8", "const:4:8"]]
+ 00bf2580 ["CALL", null, ["callee:00c58f30:8"]]
- 00bf159c ["INT_ADD", "register:40f0:8", ["const:bf159c:8", "const:4:8"]]
- 00bf159c ["CALL", null, ["callee:00c590a0:8"]]
+ 00bf2590 ["INT_ADD", "register:40f0:8", ["const:bf2590:8", "const:4:8"]]
+ 00bf2590 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-f8285f011e110a8e00f8e4ffb465d147"></a>

### [`00bf15e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf1/00bf15e8.md) → [`00bf25dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf2/00bf25dc.md) _ZNSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignERKS5_mm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`0044295c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/0044295c.md) [`00bf149c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf1/00bf149c.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00442c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c7c.md) [`00bf2490`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf2/00bf2490.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf1634 ["INT_ADD", "register:40f0:8", ["const:bf1634:8", "const:4:8"]]
- 00bf1634 ["CALL", null, ["callee:00442c7c:8"]]
+ 00bf2628 ["INT_ADD", "register:40f0:8", ["const:bf2628:8", "const:4:8"]]
+ 00bf2628 ["CALL", null, ["callee:00442c7c:8"]]
~~~


<a id="compare-92197c01c4299e0b2f6f374d0f537fb8"></a>

### [`00bf1638`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf1/00bf1638.md) → [`00bf262c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf2/00bf262c.md) _ZNKSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4copyEPcmm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`0044295c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/0044295c.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00442c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c7c.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf168c ["INT_ADD", "register:40f0:8", ["const:bf168c:8", "const:4:8"]]
- 00bf168c ["CALL", null, ["callee:00c58fe0:8"]]
+ 00bf2680 ["INT_ADD", "register:40f0:8", ["const:bf2680:8", "const:4:8"]]
+ 00bf2680 ["CALL", null, ["callee:00c58fe0:8"]]
- 00bf16a4 ["INT_ADD", "register:40f0:8", ["const:bf16a4:8", "const:4:8"]]
- 00bf16a4 ["CALL", null, ["callee:00442c7c:8"]]
+ 00bf2698 ["INT_ADD", "register:40f0:8", ["const:bf2698:8", "const:4:8"]]
+ 00bf2698 ["CALL", null, ["callee:00442c7c:8"]]
~~~


<a id="compare-804a980e960d6c223bee7b44405878d5"></a>

### [`00bf16a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf1/00bf16a8.md) → [`00bf269c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf2/00bf269c.md) _ZNSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC1ERKS5_mmRKS4_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0044295c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/0044295c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`00442c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c7c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf1734 ["INT_ADD", "register:40f0:8", ["const:bf1734:8", "const:4:8"]]
- 00bf1734 ["CALL", null, ["callee:00c58f30:8"]]
+ 00bf2728 ["INT_ADD", "register:40f0:8", ["const:bf2728:8", "const:4:8"]]
+ 00bf2728 ["CALL", null, ["callee:00c58f30:8"]]
- 00bf1754 ["INT_ADD", "register:40f0:8", ["const:bf1754:8", "const:4:8"]]
- 00bf1754 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00bf2748 ["INT_ADD", "register:40f0:8", ["const:bf2748:8", "const:4:8"]]
+ 00bf2748 ["CALL", null, ["callee:00c58fe0:8"]]
- 00bf1778 ["INT_ADD", "register:40f0:8", ["const:bf1778:8", "const:4:8"]]
- 00bf1778 ["CALL", null, ["callee:00442c7c:8"]]
+ 00bf276c ["INT_ADD", "register:40f0:8", ["const:bf276c:8", "const:4:8"]]
+ 00bf276c ["CALL", null, ["callee:00442c7c:8"]]
~~~


<a id="compare-c8270486bc959cb7beb85eb0ddab4d1d"></a>

### [`00bf1784`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf1/00bf1784.md) → [`00bf2778`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf2/00bf2778.md) _ZNKSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4findEcm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c586a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c586a0.md) · 呼出先 1件 [`00c580a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580a0.md)
- 新版 呼出元 1件 [`00c59670`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59670.md) · 呼出先 1件 [`00c59070`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59070.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf17cc ["INT_ADD", "register:40f0:8", ["const:bf17cc:8", "const:4:8"]]
- 00bf17cc ["CALL", null, ["callee:00c59070:8"]]
+ 00bf27c0 ["INT_ADD", "register:40f0:8", ["const:bf27c0:8", "const:4:8"]]
+ 00bf27c0 ["CALL", null, ["callee:00c59070:8"]]
~~~


<a id="compare-37c10347aa5a771b48c8d5070bf4a43e"></a>

### [`00bf17f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf1/00bf17f4.md) → [`00bf27e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf2/00bf27e8.md) _ZNSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEmc

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c59130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59130.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf1850 ["INT_ADD", "register:40f0:8", ["const:bf1850:8", "const:4:8"]]
- 00bf1850 ["CALL", null, ["callee:00c58f30:8"]]
+ 00bf2844 ["INT_ADD", "register:40f0:8", ["const:bf2844:8", "const:4:8"]]
+ 00bf2844 ["CALL", null, ["callee:00c58f30:8"]]
- 00bf1870 ["INT_ADD", "register:40f0:8", ["const:bf1870:8", "const:4:8"]]
- 00bf1870 ["CALL", null, ["callee:00c59130:8"]]
+ 00bf2864 ["INT_ADD", "register:40f0:8", ["const:bf2864:8", "const:4:8"]]
+ 00bf2864 ["CALL", null, ["callee:00c59130:8"]]
- 00bf1890 ["INT_ADD", "register:40f0:8", ["const:bf1890:8", "const:4:8"]]
- 00bf1890 ["CALL", null, ["callee:0043bac4:8"]]
+ 00bf2884 ["INT_ADD", "register:40f0:8", ["const:bf2884:8", "const:4:8"]]
+ 00bf2884 ["CALL", null, ["callee:0043bac4:8"]]
~~~


<a id="compare-a9843ffb12df9da783571cf56477fa5c"></a>

### [`00bf1894`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf1/00bf1894.md) → [`00bf2888`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf2/00bf2888.md) _ZNSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6insertEmPKc

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c58030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58030.md) · 呼出先 2件 [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c590a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c590a0.md)
- 新版 呼出元 1件 [`00c59000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59000.md) · 呼出先 2件 [`00c59080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59080.md) [`00c5a070`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a070.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf18b8 ["INT_ADD", "register:40f0:8", ["const:bf18b8:8", "const:4:8"]]
- 00bf18b8 ["CALL", null, ["callee:00c59080:8"]]
+ 00bf28ac ["INT_ADD", "register:40f0:8", ["const:bf28ac:8", "const:4:8"]]
+ 00bf28ac ["CALL", null, ["callee:00c59080:8"]]
~~~


<a id="compare-5db13771ce52e0b98b06690873d7c900"></a>

### [`00bf18e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf1/00bf18e0.md) → [`00bf28d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf2/00bf28d4.md) _ZNKSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE12find_last_ofEPKcmm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c580a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580a0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c59070`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59070.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf193c ["INT_ADD", "register:40f0:8", ["const:bf193c:8", "const:4:8"]]
- 00bf193c ["CALL", null, ["callee:00c59070:8"]]
+ 00bf2930 ["INT_ADD", "register:40f0:8", ["const:bf2930:8", "const:4:8"]]
+ 00bf2930 ["CALL", null, ["callee:00c59070:8"]]
~~~


<a id="compare-629caff57bcafd2e7515bf84e41a28dc"></a>

### [`00bf1968`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf1/00bf1968.md) → [`00bf295c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf2/00bf295c.md) _ZNSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9push_backEc

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c586d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c586d0.md) · 呼出先 4件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 1件 [`00c596a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c596a0.md) · 呼出先 4件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf1a34 ["INT_ADD", "register:40f0:8", ["const:bf1a34:8", "const:4:8"]]
- 00bf1a34 ["CALL", null, ["callee:00c58f30:8"]]
+ 00bf2a28 ["INT_ADD", "register:40f0:8", ["const:bf2a28:8", "const:4:8"]]
+ 00bf2a28 ["CALL", null, ["callee:00c58f30:8"]]
- 00bf1a44 ["INT_ADD", "register:40f0:8", ["const:bf1a44:8", "const:4:8"]]
- 00bf1a44 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00bf2a38 ["INT_ADD", "register:40f0:8", ["const:bf2a38:8", "const:4:8"]]
+ 00bf2a38 ["CALL", null, ["callee:00c58fe0:8"]]
- 00bf1a54 ["INT_ADD", "register:40f0:8", ["const:bf1a54:8", "const:4:8"]]
- 00bf1a54 ["CALL", null, ["callee:00c58f50:8"]]
+ 00bf2a48 ["INT_ADD", "register:40f0:8", ["const:bf2a48:8", "const:4:8"]]
+ 00bf2a48 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-5ec908784888bdf777793ec6479c7ff7"></a>

### [`00bf1aec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf1/00bf1aec.md) → [`00bf2ae0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf2/00bf2ae0.md) _ZNSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEmc

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5a7b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a7b0.md) · 呼出先 4件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md)
- 新版 呼出元 1件 [`00c5b780`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b780.md) · 呼出先 4件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c59130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59130.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf1bc8 ["INT_ADD", "register:40f0:8", ["const:bf1bc8:8", "const:4:8"]]
- 00bf1bc8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00bf2bbc ["INT_ADD", "register:40f0:8", ["const:bf2bbc:8", "const:4:8"]]
+ 00bf2bbc ["CALL", null, ["callee:00c58f30:8"]]
- 00bf1bd8 ["INT_ADD", "register:40f0:8", ["const:bf1bd8:8", "const:4:8"]]
- 00bf1bd8 ["CALL", null, ["callee:00c58f50:8"]]
+ 00bf2bcc ["INT_ADD", "register:40f0:8", ["const:bf2bcc:8", "const:4:8"]]
+ 00bf2bcc ["CALL", null, ["callee:00c58f50:8"]]
- 00bf1bf4 ["INT_ADD", "register:40f0:8", ["const:bf1bf4:8", "const:4:8"]]
- 00bf1bf4 ["CALL", null, ["callee:00c59130:8"]]
+ 00bf2be8 ["INT_ADD", "register:40f0:8", ["const:bf2be8:8", "const:4:8"]]
+ 00bf2be8 ["CALL", null, ["callee:00c59130:8"]]
~~~


<a id="compare-51802c0fe6dfe25e6bd30fa8838546ee"></a>

### [`00bf1c30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf1/00bf1c30.md) → [`00bf2c24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf2/00bf2c24.md) _ZNSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE5eraseEmm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c59a00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59a00.md) · 呼出先 2件 [`0044295c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/0044295c.md) [`00bf1ca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf1/00bf1ca8.md)
- 新版 呼出元 1件 [`00c5a9d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a9d0.md) · 呼出先 2件 [`00442c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c7c.md) [`00bf2c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf2/00bf2c9c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf1c68 ["INT_ADD", "register:40f0:8", ["const:bf1c68:8", "const:4:8"]]
- 00bf1c68 ["CALL", null, ["callee:00bf2c9c:8"]]
+ 00bf2c5c ["INT_ADD", "register:40f0:8", ["const:bf2c5c:8", "const:4:8"]]
+ 00bf2c5c ["CALL", null, ["callee:00bf2c9c:8"]]
- 00bf1ca4 ["INT_ADD", "register:40f0:8", ["const:bf1ca4:8", "const:4:8"]]
- 00bf1ca4 ["CALL", null, ["callee:00442c7c:8"]]
+ 00bf2c98 ["INT_ADD", "register:40f0:8", ["const:bf2c98:8", "const:4:8"]]
+ 00bf2c98 ["CALL", null, ["callee:00442c7c:8"]]
~~~


<a id="compare-7a7460b55d94c0026a481f2c26555ea5"></a>

### [`00bf1ca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf1/00bf1ca8.md) → [`00bf2c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf2/00bf2c9c.md) FUN_00bf2c9c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00bf1c30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf1/00bf1c30.md) [`00c36154`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36154.md) · 呼出先 1件 [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 2件 [`00bf2c24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf2/00bf2c24.md) [`00c37148`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37148.md) · 呼出先 1件 [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf1d00 ["INT_ADD", "register:40f0:8", ["const:bf1d00:8", "const:4:8"]]
- 00bf1d00 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00bf2cf4 ["INT_ADD", "register:40f0:8", ["const:bf2cf4:8", "const:4:8"]]
+ 00bf2cf4 ["CALL", null, ["callee:00c58fe0:8"]]
~~~


<a id="compare-d6976149438835d5277e99818ee3a0eb"></a>

### [`00bf1d3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf1/00bf1d3c.md) → [`00bf2d30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf2/00bf2d30.md) _ZNSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendERKS5_mm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`0044295c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/0044295c.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c5b170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b170.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00442c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c7c.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c5c140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c140.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf1dd8 ["INT_ADD", "register:40f0:8", ["const:bf1dd8:8", "const:4:8"]]
- 00bf1dd8 ["CALL", null, ["callee:00c5c140:8"]]
+ 00bf2dcc ["INT_ADD", "register:40f0:8", ["const:bf2dcc:8", "const:4:8"]]
+ 00bf2dcc ["CALL", null, ["callee:00c5c140:8"]]
- 00bf1e00 ["INT_ADD", "register:40f0:8", ["const:bf1e00:8", "const:4:8"]]
- 00bf1e00 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00bf2df4 ["INT_ADD", "register:40f0:8", ["const:bf2df4:8", "const:4:8"]]
+ 00bf2df4 ["CALL", null, ["callee:00c58fe0:8"]]
- 00bf1e40 ["INT_ADD", "register:40f0:8", ["const:bf1e40:8", "const:4:8"]]
- 00bf1e40 ["CALL", null, ["callee:00442c7c:8"]]
+ 00bf2e34 ["INT_ADD", "register:40f0:8", ["const:bf2e34:8", "const:4:8"]]
+ 00bf2e34 ["CALL", null, ["callee:00442c7c:8"]]
~~~


<a id="compare-4d7fc577ab79b80d3d5c4d928409026c"></a>

### [`00bf1e44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf1/00bf1e44.md) → [`00bf2e38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf2/00bf2e38.md) _ZNKSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7compareEPKc

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`0044295c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/0044295c.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00442c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c7c.md) [`00c59080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59080.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf1e60 ["INT_ADD", "register:40f0:8", ["const:bf1e60:8", "const:4:8"]]
- 00bf1e60 ["CALL", null, ["callee:00c59080:8"]]
+ 00bf2e54 ["INT_ADD", "register:40f0:8", ["const:bf2e54:8", "const:4:8"]]
+ 00bf2e54 ["CALL", null, ["callee:00c59080:8"]]
- 00bf1e9c ["INT_ADD", "register:40f0:8", ["const:bf1e9c:8", "const:4:8"]]
- 00bf1e9c ["CALL", null, ["callee:00c590f0:8"]]
+ 00bf2e90 ["INT_ADD", "register:40f0:8", ["const:bf2e90:8", "const:4:8"]]
+ 00bf2e90 ["CALL", null, ["callee:00c590f0:8"]]
- 00bf1ebc ["INT_ADD", "register:40f0:8", ["const:bf1ebc:8", "const:4:8"]]
- 00bf1ebc ["CALL", null, ["callee:00442c7c:8"]]
+ 00bf2eb0 ["INT_ADD", "register:40f0:8", ["const:bf2eb0:8", "const:4:8"]]
+ 00bf2eb0 ["CALL", null, ["callee:00442c7c:8"]]
~~~


<a id="compare-ee0eddcd9311761ea784d57eb05c7f86"></a>

### [`00bf1ec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf1/00bf1ec4.md) → [`00bf2eb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf2/00bf2eb8.md) _ZNKSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7compareEmmPKcm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`0044295c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/0044295c.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00442c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c7c.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf1f24 ["INT_ADD", "register:40f0:8", ["const:bf1f24:8", "const:4:8"]]
- 00bf1f24 ["CALL", null, ["callee:00c590f0:8"]]
+ 00bf2f18 ["INT_ADD", "register:40f0:8", ["const:bf2f18:8", "const:4:8"]]
+ 00bf2f18 ["CALL", null, ["callee:00c590f0:8"]]
- 00bf1f40 ["INT_ADD", "register:40f0:8", ["const:bf1f40:8", "const:4:8"]]
- 00bf1f40 ["CALL", null, ["callee:00442c7c:8"]]
+ 00bf2f34 ["INT_ADD", "register:40f0:8", ["const:bf2f34:8", "const:4:8"]]
+ 00bf2f34 ["CALL", null, ["callee:00442c7c:8"]]
~~~


<a id="compare-3f220492a95b447e18510e09f6b1064c"></a>

### [`00bf1f44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf1/00bf1f44.md) → [`00bf2f38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf2/00bf2f38.md) _ZNKSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7compareEmmPKc

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`0044295c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/0044295c.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00442c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c7c.md) [`00c59080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59080.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf1f6c ["INT_ADD", "register:40f0:8", ["const:bf1f6c:8", "const:4:8"]]
- 00bf1f6c ["CALL", null, ["callee:00c59080:8"]]
+ 00bf2f60 ["INT_ADD", "register:40f0:8", ["const:bf2f60:8", "const:4:8"]]
+ 00bf2f60 ["CALL", null, ["callee:00c59080:8"]]
- 00bf1fc0 ["INT_ADD", "register:40f0:8", ["const:bf1fc0:8", "const:4:8"]]
- 00bf1fc0 ["CALL", null, ["callee:00c590f0:8"]]
+ 00bf2fb4 ["INT_ADD", "register:40f0:8", ["const:bf2fb4:8", "const:4:8"]]
+ 00bf2fb4 ["CALL", null, ["callee:00c590f0:8"]]
- 00bf1fe4 ["INT_ADD", "register:40f0:8", ["const:bf1fe4:8", "const:4:8"]]
- 00bf1fe4 ["CALL", null, ["callee:00442c7c:8"]]
+ 00bf2fd8 ["INT_ADD", "register:40f0:8", ["const:bf2fd8:8", "const:4:8"]]
+ 00bf2fd8 ["CALL", null, ["callee:00442c7c:8"]]
~~~


<a id="compare-c0e3a5bc9d5d5a6bb863ec1c638b116c"></a>

### [`00bf1fe8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf1/00bf1fe8.md) → [`00bf2fdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf2/00bf2fdc.md) _ZNSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE2atEm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`0044295c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/0044295c.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00442c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c7c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf2028 ["INT_ADD", "register:40f0:8", ["const:bf2028:8", "const:4:8"]]
- 00bf2028 ["CALL", null, ["callee:00442c7c:8"]]
+ 00bf301c ["INT_ADD", "register:40f0:8", ["const:bf301c:8", "const:4:8"]]
+ 00bf301c ["CALL", null, ["callee:00442c7c:8"]]
~~~


<a id="compare-bfad01a9ea09cef37307417eb1e591e0"></a>

### [`00bf2034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2034.md) → [`00bf3028`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf3/00bf3028.md) FUN_00bf3028

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 8件 [`00bf202c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf202c.md) [`00c2c2c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2c/00c2c2c4.md) [`00c2c6c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2c/00c2c6c0.md) [`00c30b0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c30/00c30b0c.md) [`00c32b20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c32/00c32b20.md) · 呼出先 2件 [`00bf149c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf1/00bf149c.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md)
- 新版 呼出元 8件 [`00bf3020`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf3/00bf3020.md) [`00c2d2b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2d/00c2d2b8.md) [`00c2d6b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2d/00c2d6b4.md) [`00c31b00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c31/00c31b00.md) [`00c33b14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c33/00c33b14.md) · 呼出先 2件 [`00bf2490`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf2/00bf2490.md) [`00c59080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59080.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf2050 ["INT_ADD", "register:40f0:8", ["const:bf2050:8", "const:4:8"]]
- 00bf2050 ["CALL", null, ["callee:00c59080:8"]]
+ 00bf3044 ["INT_ADD", "register:40f0:8", ["const:bf3044:8", "const:4:8"]]
+ 00bf3044 ["CALL", null, ["callee:00c59080:8"]]
~~~


<a id="compare-29ba4360fa1e400a512dbfd7b600cf0c"></a>

### [`00bf2070`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2070.md) → [`00bf3064`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf3/00bf3064.md) _ZNKSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4findEPKcmm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c580a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580a0.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c59070`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59070.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf2110 ["INT_ADD", "register:40f0:8", ["const:bf2110:8", "const:4:8"]]
- 00bf2110 ["CALL", null, ["callee:00c59070:8"]]
+ 00bf3104 ["INT_ADD", "register:40f0:8", ["const:bf3104:8", "const:4:8"]]
+ 00bf3104 ["CALL", null, ["callee:00c59070:8"]]
- 00bf2124 ["INT_ADD", "register:40f0:8", ["const:bf2124:8", "const:4:8"]]
- 00bf2124 ["CALL", null, ["callee:00c590f0:8"]]
+ 00bf3118 ["INT_ADD", "register:40f0:8", ["const:bf3118:8", "const:4:8"]]
+ 00bf3118 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-f136fae65089ec3ab190ef3998230ca0"></a>

### [`00bf2244`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2244.md) → [`00bf3238`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf3/00bf3238.md) FUN_00bf3238

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00bf21f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf21f0.md) [`00c0521c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c0521c.md) · 呼出先 4件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 2件 [`00bf31e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf3/00bf31e4.md) [`00c06210`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06210.md) · 呼出先 4件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf2284 ["INT_ADD", "register:40f0:8", ["const:bf2284:8", "const:4:8"]]
- 00bf2284 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00bf3278 ["INT_ADD", "register:40f0:8", ["const:bf3278:8", "const:4:8"]]
+ 00bf3278 ["CALL", null, ["callee:00c58fe0:8"]]
- 00bf22b0 ["INT_ADD", "register:40f0:8", ["const:bf22b0:8", "const:4:8"]]
- 00bf22b0 ["CALL", null, ["callee:00c58f30:8"]]
+ 00bf32a4 ["INT_ADD", "register:40f0:8", ["const:bf32a4:8", "const:4:8"]]
+ 00bf32a4 ["CALL", null, ["callee:00c58f30:8"]]
- 00bf22c0 ["INT_ADD", "register:40f0:8", ["const:bf22c0:8", "const:4:8"]]
- 00bf22c0 ["CALL", null, ["callee:00c590a0:8"]]
+ 00bf32b4 ["INT_ADD", "register:40f0:8", ["const:bf32b4:8", "const:4:8"]]
+ 00bf32b4 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-b6590e1ff75d9c0548888f9e0534c88e"></a>

### [`00bf22f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf22f8.md) → [`00bf32ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf3/00bf32ec.md) FUN_00bf32ec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00bf21f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf21f0.md) [`00c0521c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c0521c.md) · 呼出先 5件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 2件 [`00bf31e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf3/00bf31e4.md) [`00c06210`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06210.md) · 呼出先 5件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf233c ["INT_ADD", "register:40f0:8", ["const:bf233c:8", "const:4:8"]]
- 00bf233c ["CALL", null, ["callee:00c58fe0:8"]]
+ 00bf3330 ["INT_ADD", "register:40f0:8", ["const:bf3330:8", "const:4:8"]]
+ 00bf3330 ["CALL", null, ["callee:00c58fe0:8"]]
- 00bf23c4 ["INT_ADD", "register:40f0:8", ["const:bf23c4:8", "const:4:8"]]
- 00bf23c4 ["CALL", null, ["callee:00c58f30:8"]]
+ 00bf33b8 ["INT_ADD", "register:40f0:8", ["const:bf33b8:8", "const:4:8"]]
+ 00bf33b8 ["CALL", null, ["callee:00c58f30:8"]]
- 00bf23dc ["INT_ADD", "register:40f0:8", ["const:bf23dc:8", "const:4:8"]]
- 00bf23dc ["CALL", null, ["callee:00c590a0:8"]]
+ 00bf33d0 ["INT_ADD", "register:40f0:8", ["const:bf33d0:8", "const:4:8"]]
+ 00bf33d0 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-fa4a2deadeae5a4999d728d0b19dbe9e"></a>

### [`00bf241c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf241c.md) → [`00bf3410`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf3/00bf3410.md) _ZNSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEPKc

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c58040`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58040.md) · 呼出先 3件 [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c5b170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b170.md)
- 新版 呼出元 1件 [`00c59010`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59010.md) · 呼出先 3件 [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c59080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59080.md) [`00c5c140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c140.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf2440 ["INT_ADD", "register:40f0:8", ["const:bf2440:8", "const:4:8"]]
- 00bf2440 ["CALL", null, ["callee:00c59080:8"]]
+ 00bf3434 ["INT_ADD", "register:40f0:8", ["const:bf3434:8", "const:4:8"]]
+ 00bf3434 ["CALL", null, ["callee:00c59080:8"]]
- 00bf249c ["INT_ADD", "register:40f0:8", ["const:bf249c:8", "const:4:8"]]
- 00bf249c ["CALL", null, ["callee:00c5c140:8"]]
+ 00bf3490 ["INT_ADD", "register:40f0:8", ["const:bf3490:8", "const:4:8"]]
+ 00bf3490 ["CALL", null, ["callee:00c5c140:8"]]
- 00bf24c0 ["INT_ADD", "register:40f0:8", ["const:bf24c0:8", "const:4:8"]]
- 00bf24c0 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00bf34b4 ["INT_ADD", "register:40f0:8", ["const:bf34b4:8", "const:4:8"]]
+ 00bf34b4 ["CALL", null, ["callee:00c58fe0:8"]]
~~~


<a id="compare-970b4846e2de57cee07565a482b960c2"></a>

### [`00bf2500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2500.md) → [`00bf34f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf3/00bf34f4.md) _ZNSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7replaceEmmRKS5_mm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`0044295c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/0044295c.md) [`00c58140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58140.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00442c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c7c.md) [`00c59110`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59110.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf254c ["INT_ADD", "register:40f0:8", ["const:bf254c:8", "const:4:8"]]
- 00bf254c ["CALL", null, ["callee:00442c7c:8"]]
+ 00bf3540 ["INT_ADD", "register:40f0:8", ["const:bf3540:8", "const:4:8"]]
+ 00bf3540 ["CALL", null, ["callee:00442c7c:8"]]
~~~


<a id="compare-49181bfed1b5f7d2796e52c559f8ee89"></a>

### [`00bf2550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2550.md) → [`00bf3544`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf3/00bf3544.md) _ZNSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6insertENS_11__wrap_iterIPKcEEc

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf2614 ["INT_ADD", "register:40f0:8", ["const:bf2614:8", "const:4:8"]]
- 00bf2614 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00bf3608 ["INT_ADD", "register:40f0:8", ["const:bf3608:8", "const:4:8"]]
+ 00bf3608 ["CALL", null, ["callee:00c58fe0:8"]]
- 00bf2640 ["INT_ADD", "register:40f0:8", ["const:bf2640:8", "const:4:8"]]
- 00bf2640 ["CALL", null, ["callee:00c58f30:8"]]
+ 00bf3634 ["INT_ADD", "register:40f0:8", ["const:bf3634:8", "const:4:8"]]
+ 00bf3634 ["CALL", null, ["callee:00c58f30:8"]]
- 00bf2660 ["INT_ADD", "register:40f0:8", ["const:bf2660:8", "const:4:8"]]
- 00bf2660 ["CALL", null, ["callee:00c58f50:8"]]
+ 00bf3654 ["INT_ADD", "register:40f0:8", ["const:bf3654:8", "const:4:8"]]
+ 00bf3654 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-232bd5c5fe036fd75897dc4eaba810f6"></a>

### [`00bf274c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf274c.md) → [`00bf3740`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf3/00bf3740.md) _ZNSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6insertEmRKS5_mm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`0044295c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/0044295c.md) [`00c590a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c590a0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00442c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c7c.md) [`00c5a070`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a070.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf2798 ["INT_ADD", "register:40f0:8", ["const:bf2798:8", "const:4:8"]]
- 00bf2798 ["CALL", null, ["callee:00442c7c:8"]]
+ 00bf378c ["INT_ADD", "register:40f0:8", ["const:bf378c:8", "const:4:8"]]
+ 00bf378c ["CALL", null, ["callee:00442c7c:8"]]
~~~


<a id="compare-0983dc3334ecb02fc73990cc23e08094"></a>

### [`00bf279c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf279c.md) → [`00bf3790`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf3/00bf3790.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE7replaceEmmPKwm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5e0b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e0b0.md) · 呼出先 3件 [`00bf2974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2974.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c5e0c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e0c0.md)
- 新版 呼出元 1件 [`00c5f080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f080.md) · 呼出先 3件 [`00bf3968`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf3/00bf3968.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c5f090`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f090.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf283c ["INT_ADD", "register:40f0:8", ["const:bf283c:8", "const:4:8"]]
- 00bf283c ["CALL", null, ["callee:00c5f090:8"]]
+ 00bf3830 ["INT_ADD", "register:40f0:8", ["const:bf3830:8", "const:4:8"]]
+ 00bf3830 ["CALL", null, ["callee:00c5f090:8"]]
- 00bf288c ["INT_ADD", "register:40f0:8", ["const:bf288c:8", "const:4:8"]]
- 00bf288c ["CALL", null, ["callee:00c58fe0:8"]]
+ 00bf3880 ["INT_ADD", "register:40f0:8", ["const:bf3880:8", "const:4:8"]]
+ 00bf3880 ["CALL", null, ["callee:00c58fe0:8"]]
- 00bf289c ["INT_ADD", "register:40f0:8", ["const:bf289c:8", "const:4:8"]]
- 00bf289c ["CALL", null, ["callee:00c58fe0:8"]]
+ 00bf3890 ["INT_ADD", "register:40f0:8", ["const:bf3890:8", "const:4:8"]]
+ 00bf3890 ["CALL", null, ["callee:00c58fe0:8"]]
~~~


<a id="compare-dede6faf794d8953dbb659cdefda44ca"></a>

### [`00bf298c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf298c.md) → [`00bf3980`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf3/00bf3980.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE21__grow_by_and_replaceEmmmmmmPKw

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5e0c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e0c0.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`006d76f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d76f8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 1件 [`00c5f090`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f090.md) · 呼出先 6件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`006d7aa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d7/006d7aa8.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf2a58 ["INT_ADD", "register:40f0:8", ["const:bf2a58:8", "const:4:8"]]
- 00bf2a58 ["CALL", null, ["callee:00c58f30:8"]]
+ 00bf3a4c ["INT_ADD", "register:40f0:8", ["const:bf3a4c:8", "const:4:8"]]
+ 00bf3a4c ["CALL", null, ["callee:00c58f30:8"]]
- 00bf2a74 ["INT_ADD", "register:40f0:8", ["const:bf2a74:8", "const:4:8"]]
- 00bf2a74 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00bf3a68 ["INT_ADD", "register:40f0:8", ["const:bf3a68:8", "const:4:8"]]
+ 00bf3a68 ["CALL", null, ["callee:00c58fe0:8"]]
- 00bf2a88 ["INT_ADD", "register:40f0:8", ["const:bf2a88:8", "const:4:8"]]
- 00bf2a88 ["CALL", null, ["callee:00c590a0:8"]]
+ 00bf3a7c ["INT_ADD", "register:40f0:8", ["const:bf3a7c:8", "const:4:8"]]
+ 00bf3a7c ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-3626314392159419993663516fe29acc"></a>

### [`00bf2bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2bd0.md) → [`00bf3bc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf3/00bf3bc4.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6__initEPKwmm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`006d76f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d76f8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`006d7aa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d7/006d7aa8.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf2c14 ["INT_ADD", "register:40f0:8", ["const:bf2c14:8", "const:4:8"]]
- 00bf2c14 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00bf3c08 ["INT_ADD", "register:40f0:8", ["const:bf3c08:8", "const:4:8"]]
+ 00bf3c08 ["CALL", null, ["callee:00c58fe0:8"]]
- 00bf2c5c ["INT_ADD", "register:40f0:8", ["const:bf2c5c:8", "const:4:8"]]
- 00bf2c5c ["CALL", null, ["callee:00c58f30:8"]]
+ 00bf3c50 ["INT_ADD", "register:40f0:8", ["const:bf3c50:8", "const:4:8"]]
+ 00bf3c50 ["CALL", null, ["callee:00c58f30:8"]]
- 00bf2c80 ["INT_ADD", "register:40f0:8", ["const:bf2c80:8", "const:4:8"]]
- 00bf2c80 ["CALL", null, ["callee:006d7aa8:8"]]
+ 00bf3c74 ["INT_ADD", "register:40f0:8", ["const:bf3c74:8", "const:4:8"]]
+ 00bf3c74 ["CALL", null, ["callee:006d7aa8:8"]]
~~~


<a id="compare-9c76d1a4c033cf55b744c008b482dd9d"></a>

### [`00bf2cb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2cb4.md) → [`00bf3ca8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf3/00bf3ca8.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE7replaceEmmPKw

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5e0b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e0b0.md) [`00c5e0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e0d0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5f080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f080.md) [`00c5f0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f0a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf2cdc ["INT_ADD", "register:40f0:8", ["const:bf2cdc:8", "const:4:8"]]
- 00bf2cdc ["CALL", null, ["callee:00c5f0a0:8"]]
+ 00bf3cd0 ["INT_ADD", "register:40f0:8", ["const:bf3cd0:8", "const:4:8"]]
+ 00bf3cd0 ["CALL", null, ["callee:00c5f0a0:8"]]
~~~


<a id="compare-f2f967fcb0cf606064fc989afa60c34f"></a>

### [`00bf2d34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2d34.md) → [`00bf3d28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf3/00bf3d28.md) _ZNKSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE16find_last_not_ofEPKwmm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c58520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58520.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c594f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c594f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf2d98 ["INT_ADD", "register:40f0:8", ["const:bf2d98:8", "const:4:8"]]
- 00bf2d98 ["CALL", null, ["callee:00c594f0:8"]]
+ 00bf3d8c ["INT_ADD", "register:40f0:8", ["const:bf3d8c:8", "const:4:8"]]
+ 00bf3d8c ["CALL", null, ["callee:00c594f0:8"]]
~~~


<a id="compare-b29dbbc3048d2eaf98169fc1179adb5e"></a>

### [`00bf2ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2ddc.md) → [`00bf3dd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf3/00bf3dd0.md) _ZNKSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE17find_first_not_ofEPKwmm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c58520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58520.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c594f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c594f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf2e3c ["INT_ADD", "register:40f0:8", ["const:bf2e3c:8", "const:4:8"]]
- 00bf2e3c ["CALL", null, ["callee:00c594f0:8"]]
+ 00bf3e30 ["INT_ADD", "register:40f0:8", ["const:bf3e30:8", "const:4:8"]]
+ 00bf3e30 ["CALL", null, ["callee:00c594f0:8"]]
~~~


<a id="compare-f32a8c3806eb3dc5f5e46e900318f438"></a>

### [`00bf2e78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2e78.md) → [`00bf3e6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf3/00bf3e6c.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6insertEmmw

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5e0e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e0e0.md) · 呼出先 3件 [`00bf2974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2974.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c5a970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a970.md)
- 新版 呼出元 1件 [`00c5f0b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f0b0.md) · 呼出先 3件 [`00bf3968`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf3/00bf3968.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c5b940`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b940.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf2efc ["INT_ADD", "register:40f0:8", ["const:bf2efc:8", "const:4:8"]]
- 00bf2efc ["CALL", null, ["callee:00c5b940:8"]]
+ 00bf3ef0 ["INT_ADD", "register:40f0:8", ["const:bf3ef0:8", "const:4:8"]]
+ 00bf3ef0 ["CALL", null, ["callee:00c5b940:8"]]
- 00bf2f3c ["INT_ADD", "register:40f0:8", ["const:bf2f3c:8", "const:4:8"]]
- 00bf2f3c ["CALL", null, ["callee:00c58fe0:8"]]
+ 00bf3f30 ["INT_ADD", "register:40f0:8", ["const:bf3f30:8", "const:4:8"]]
+ 00bf3f30 ["CALL", null, ["callee:00c58fe0:8"]]
- 00bf2fcc ["INT_ADD", "register:40f0:8", ["const:bf2fcc:8", "const:4:8"]]
- 00bf2fcc ["CALL", null, ["callee:00bf3968:8"]]
+ 00bf3fc0 ["INT_ADD", "register:40f0:8", ["const:bf3fc0:8", "const:4:8"]]
+ 00bf3fc0 ["CALL", null, ["callee:00bf3968:8"]]
~~~


<a id="compare-b676ac2fee83d803d43b174b6a2d9668"></a>

### [`00bf3004`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf3004.md) → [`00bf3ff8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf3/00bf3ff8.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6__initEPKwm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`006d76f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d76f8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`006d7aa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d7/006d7aa8.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf3070 ["INT_ADD", "register:40f0:8", ["const:bf3070:8", "const:4:8"]]
- 00bf3070 ["CALL", null, ["callee:00c58f30:8"]]
+ 00bf4064 ["INT_ADD", "register:40f0:8", ["const:bf4064:8", "const:4:8"]]
+ 00bf4064 ["CALL", null, ["callee:00c58f30:8"]]
- 00bf3090 ["INT_ADD", "register:40f0:8", ["const:bf3090:8", "const:4:8"]]
- 00bf3090 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00bf4084 ["INT_ADD", "register:40f0:8", ["const:bf4084:8", "const:4:8"]]
+ 00bf4084 ["CALL", null, ["callee:00c58fe0:8"]]
- 00bf30b0 ["INT_ADD", "register:40f0:8", ["const:bf30b0:8", "const:4:8"]]
- 00bf30b0 ["CALL", null, ["callee:006d7aa8:8"]]
+ 00bf40a4 ["INT_ADD", "register:40f0:8", ["const:bf40a4:8", "const:4:8"]]
+ 00bf40a4 ["CALL", null, ["callee:006d7aa8:8"]]
~~~


<a id="compare-63f68b80f19a6595dca5335aef370d31"></a>

### [`00bf30b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf30b8.md) → [`00bf40ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf4/00bf40ac.md) _ZNKSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE2atEm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00bf2974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2974.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00bf3968`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf3/00bf3968.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf30fc ["INT_ADD", "register:40f0:8", ["const:bf30fc:8", "const:4:8"]]
- 00bf30fc ["CALL", null, ["callee:00bf3968:8"]]
+ 00bf40f0 ["INT_ADD", "register:40f0:8", ["const:bf40f0:8", "const:4:8"]]
+ 00bf40f0 ["CALL", null, ["callee:00bf3968:8"]]
~~~


<a id="compare-a90fcda3c10914bd6435c277071af142"></a>

### [`00bf3100`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf3100.md) → [`00bf40f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf4/00bf40f4.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6insertEmPKwm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5e0f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e0f0.md) · 呼出先 3件 [`00bf2974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2974.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c5e0c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e0c0.md)
- 新版 呼出元 1件 [`00c5f0c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f0c0.md) · 呼出先 3件 [`00bf3968`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf3/00bf3968.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c5f090`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f090.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf3184 ["INT_ADD", "register:40f0:8", ["const:bf3184:8", "const:4:8"]]
- 00bf3184 ["CALL", null, ["callee:00c5f090:8"]]
+ 00bf4178 ["INT_ADD", "register:40f0:8", ["const:bf4178:8", "const:4:8"]]
+ 00bf4178 ["CALL", null, ["callee:00c5f090:8"]]
- 00bf31cc ["INT_ADD", "register:40f0:8", ["const:bf31cc:8", "const:4:8"]]
- 00bf31cc ["CALL", null, ["callee:00c58fe0:8"]]
+ 00bf41c0 ["INT_ADD", "register:40f0:8", ["const:bf41c0:8", "const:4:8"]]
+ 00bf41c0 ["CALL", null, ["callee:00c58fe0:8"]]
- 00bf31dc ["INT_ADD", "register:40f0:8", ["const:bf31dc:8", "const:4:8"]]
- 00bf31dc ["CALL", null, ["callee:00c58fe0:8"]]
+ 00bf41d0 ["INT_ADD", "register:40f0:8", ["const:bf41d0:8", "const:4:8"]]
+ 00bf41d0 ["CALL", null, ["callee:00c58fe0:8"]]
~~~


<a id="compare-7c83c85c02f019379fd2ef1fa1cd883f"></a>

### [`00bf32ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf32ac.md) → [`00bf42a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf4/00bf42a0.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE7replaceEmmmw

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00bf2974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2974.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c5a970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a970.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00bf3968`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf3/00bf3968.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c5b940`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b940.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf3340 ["INT_ADD", "register:40f0:8", ["const:bf3340:8", "const:4:8"]]
- 00bf3340 ["CALL", null, ["callee:00c5b940:8"]]
+ 00bf4334 ["INT_ADD", "register:40f0:8", ["const:bf4334:8", "const:4:8"]]
+ 00bf4334 ["CALL", null, ["callee:00c5b940:8"]]
- 00bf3394 ["INT_ADD", "register:40f0:8", ["const:bf3394:8", "const:4:8"]]
- 00bf3394 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00bf4388 ["INT_ADD", "register:40f0:8", ["const:bf4388:8", "const:4:8"]]
+ 00bf4388 ["CALL", null, ["callee:00c58fe0:8"]]
- 00bf3430 ["INT_ADD", "register:40f0:8", ["const:bf3430:8", "const:4:8"]]
- 00bf3430 ["CALL", null, ["callee:00bf3968:8"]]
+ 00bf4424 ["INT_ADD", "register:40f0:8", ["const:bf4424:8", "const:4:8"]]
+ 00bf4424 ["CALL", null, ["callee:00bf3968:8"]]
~~~


<a id="compare-742544e7325762beacdf5eccd3e636df"></a>

### [`00bf343c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf343c.md) → [`00bf4430`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf4/00bf4430.md) FUN_00bf4430

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 5件 [`00bf3434`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf3434.md) [`00bf37bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf37bc.md) [`00bf4490`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf4490.md) [`00c2d030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2d/00c2d030.md) [`00c2dac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2d/00c2dac4.md) · 呼出先 2件 [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c5e0c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e0c0.md)
- 新版 呼出元 5件 [`00bf4428`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf4/00bf4428.md) [`00bf47b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf4/00bf47b0.md) [`00bf5484`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf5/00bf5484.md) [`00c2e024`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2e/00c2e024.md) [`00c2eab8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2e/00c2eab8.md) · 呼出先 2件 [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c5f090`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f090.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf34a4 ["INT_ADD", "register:40f0:8", ["const:bf34a4:8", "const:4:8"]]
- 00bf34a4 ["CALL", null, ["callee:00c5f090:8"]]
+ 00bf4498 ["INT_ADD", "register:40f0:8", ["const:bf4498:8", "const:4:8"]]
+ 00bf4498 ["CALL", null, ["callee:00c5f090:8"]]
- 00bf34cc ["INT_ADD", "register:40f0:8", ["const:bf34cc:8", "const:4:8"]]
- 00bf34cc ["CALL", null, ["callee:00c58fe0:8"]]
+ 00bf44c0 ["INT_ADD", "register:40f0:8", ["const:bf44c0:8", "const:4:8"]]
+ 00bf44c0 ["CALL", null, ["callee:00c58fe0:8"]]
~~~


<a id="compare-2a5498554abbd0354d8189a75da049ef"></a>

### [`00bf3504`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf3504.md) → [`00bf44f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf4/00bf44f8.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE7reserveEm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`006d76f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d76f8.md) [`00bf35a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf35a0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`006d7aa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d7/006d7aa8.md) [`00bf4594`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf4/00bf4594.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf359c ["INT_ADD", "register:40f0:8", ["const:bf359c:8", "const:4:8"]]
- 00bf359c ["CALL", null, ["callee:006d7aa8:8"]]
+ 00bf4590 ["INT_ADD", "register:40f0:8", ["const:bf4590:8", "const:4:8"]]
+ 00bf4590 ["CALL", null, ["callee:006d7aa8:8"]]
~~~


<a id="compare-1c668797390911a464a27a68493eabf0"></a>

### [`00bf35a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf35a0.md) → [`00bf4594`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf4/00bf4594.md) FUN_00bf4594

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00bf3504`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf3504.md) · 呼出先 4件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 1件 [`00bf44f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf4/00bf44f8.md) · 呼出先 4件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf3610 ["INT_ADD", "register:40f0:8", ["const:bf3610:8", "const:4:8"]]
- 00bf3610 ["CALL", null, ["callee:00c58f30:8"]]
+ 00bf4604 ["INT_ADD", "register:40f0:8", ["const:bf4604:8", "const:4:8"]]
+ 00bf4604 ["CALL", null, ["callee:00c58f30:8"]]
- 00bf363c ["INT_ADD", "register:40f0:8", ["const:bf363c:8", "const:4:8"]]
- 00bf363c ["CALL", null, ["callee:00c58fe0:8"]]
+ 00bf4630 ["INT_ADD", "register:40f0:8", ["const:bf4630:8", "const:4:8"]]
+ 00bf4630 ["CALL", null, ["callee:00c58fe0:8"]]
- 00bf3660 ["INT_ADD", "register:40f0:8", ["const:bf3660:8", "const:4:8"]]
- 00bf3660 ["CALL", null, ["callee:00c58f50:8"]]
+ 00bf4654 ["INT_ADD", "register:40f0:8", ["const:bf4654:8", "const:4:8"]]
+ 00bf4654 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-e1976fb6d578216d5f88f7cefb3a5457"></a>

### [`00bf36e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf36e4.md) → [`00bf46d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf4/00bf46d8.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6appendEPKwm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5a980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a980.md) · 呼出先 2件 [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c5e0c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e0c0.md)
- 新版 呼出元 1件 [`00c5b950`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b950.md) · 呼出先 2件 [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c5f090`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f090.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf3758 ["INT_ADD", "register:40f0:8", ["const:bf3758:8", "const:4:8"]]
- 00bf3758 ["CALL", null, ["callee:00c5f090:8"]]
+ 00bf474c ["INT_ADD", "register:40f0:8", ["const:bf474c:8", "const:4:8"]]
+ 00bf474c ["CALL", null, ["callee:00c5f090:8"]]
- 00bf3780 ["INT_ADD", "register:40f0:8", ["const:bf3780:8", "const:4:8"]]
- 00bf3780 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00bf4774 ["INT_ADD", "register:40f0:8", ["const:bf4774:8", "const:4:8"]]
+ 00bf4774 ["CALL", null, ["callee:00c58fe0:8"]]
~~~


<a id="compare-aa4b9dcb9bd38c8a63fce7eced2dab5b"></a>

### [`00bf37bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf37bc.md) → [`00bf47b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf4/00bf47b0.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6assignERKS5_mm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00bf2974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2974.md) [`00bf343c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf343c.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00bf3968`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf3/00bf3968.md) [`00bf4430`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf4/00bf4430.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf380c ["INT_ADD", "register:40f0:8", ["const:bf380c:8", "const:4:8"]]
- 00bf380c ["CALL", null, ["callee:00bf3968:8"]]
+ 00bf4800 ["INT_ADD", "register:40f0:8", ["const:bf4800:8", "const:4:8"]]
+ 00bf4800 ["CALL", null, ["callee:00bf3968:8"]]
~~~


<a id="compare-dcdc968cbc0b47610d2bd3ac478f2437"></a>

### [`00bf3810`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf3810.md) → [`00bf4804`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf4/00bf4804.md) _ZNKSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE4copyEPwmm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00bf2974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2974.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00bf3968`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf3/00bf3968.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf3868 ["INT_ADD", "register:40f0:8", ["const:bf3868:8", "const:4:8"]]
- 00bf3868 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00bf485c ["INT_ADD", "register:40f0:8", ["const:bf485c:8", "const:4:8"]]
+ 00bf485c ["CALL", null, ["callee:00c58fe0:8"]]
- 00bf3880 ["INT_ADD", "register:40f0:8", ["const:bf3880:8", "const:4:8"]]
- 00bf3880 ["CALL", null, ["callee:00bf3968:8"]]
+ 00bf4874 ["INT_ADD", "register:40f0:8", ["const:bf4874:8", "const:4:8"]]
+ 00bf4874 ["CALL", null, ["callee:00bf3968:8"]]
~~~


<a id="compare-e496eff8052191a8223a9a290089b177"></a>

### [`00bf3884`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf3884.md) → [`00bf4878`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf4/00bf4878.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEC2ERKS5_mmRKS4_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5a9e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a9e0.md) · 呼出先 5件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`006d76f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d76f8.md) [`00bf2974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2974.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 1件 [`00c5b9b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b9b0.md) · 呼出先 5件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`006d7aa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d7/006d7aa8.md) [`00bf3968`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf3/00bf3968.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf3924 ["INT_ADD", "register:40f0:8", ["const:bf3924:8", "const:4:8"]]
- 00bf3924 ["CALL", null, ["callee:00c58f30:8"]]
+ 00bf4918 ["INT_ADD", "register:40f0:8", ["const:bf4918:8", "const:4:8"]]
+ 00bf4918 ["CALL", null, ["callee:00c58f30:8"]]
- 00bf3944 ["INT_ADD", "register:40f0:8", ["const:bf3944:8", "const:4:8"]]
- 00bf3944 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00bf4938 ["INT_ADD", "register:40f0:8", ["const:bf4938:8", "const:4:8"]]
+ 00bf4938 ["CALL", null, ["callee:00c58fe0:8"]]
- 00bf3968 ["INT_ADD", "register:40f0:8", ["const:bf3968:8", "const:4:8"]]
- 00bf3968 ["CALL", null, ["callee:00bf3968:8"]]
+ 00bf495c ["INT_ADD", "register:40f0:8", ["const:bf495c:8", "const:4:8"]]
+ 00bf495c ["CALL", null, ["callee:00bf3968:8"]]
~~~


<a id="compare-f2b9903f92933cf8599e4873376a8e8a"></a>

### [`00bf3978`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf3978.md) → [`00bf496c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf4/00bf496c.md) _ZNKSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE4findEwm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c58520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58520.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c594f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c594f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf39c0 ["INT_ADD", "register:40f0:8", ["const:bf39c0:8", "const:4:8"]]
- 00bf39c0 ["CALL", null, ["callee:00c594f0:8"]]
+ 00bf49b4 ["INT_ADD", "register:40f0:8", ["const:bf49b4:8", "const:4:8"]]
+ 00bf49b4 ["CALL", null, ["callee:00c594f0:8"]]
~~~


<a id="compare-85b421028e1db5b71de23fa3a4fcb37b"></a>

### [`00bf39ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf39ec.md) → [`00bf49e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf4/00bf49e0.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6__initEmw

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`006d76f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d76f8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`006d7aa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d7/006d7aa8.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf3a58 ["INT_ADD", "register:40f0:8", ["const:bf3a58:8", "const:4:8"]]
- 00bf3a58 ["CALL", null, ["callee:00c58f30:8"]]
+ 00bf4a4c ["INT_ADD", "register:40f0:8", ["const:bf4a4c:8", "const:4:8"]]
+ 00bf4a4c ["CALL", null, ["callee:00c58f30:8"]]
- 00bf3ad4 ["INT_ADD", "register:40f0:8", ["const:bf3ad4:8", "const:4:8"]]
- 00bf3ad4 ["CALL", null, ["callee:006d7aa8:8"]]
+ 00bf4ac8 ["INT_ADD", "register:40f0:8", ["const:bf4ac8:8", "const:4:8"]]
+ 00bf4ac8 ["CALL", null, ["callee:006d7aa8:8"]]
- 00bf3ad8 ["INT_ADD", "register:40f0:8", ["const:bf3ad8:8", "const:4:8"]]
- 00bf3ad8 ["CALL", null, ["callee:00441220:8"]]
+ 00bf4acc ["INT_ADD", "register:40f0:8", ["const:bf4acc:8", "const:4:8"]]
+ 00bf4acc ["CALL", null, ["callee:00441220:8"]]
~~~


<a id="compare-d65c488b5bb2255de96b95407c251c02"></a>

### [`00bf3adc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf3adc.md) → [`00bf4ad0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf4/00bf4ad0.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6insertEmPKw

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5e0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e0d0.md) [`00c5e0f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e0f0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5f0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f0a0.md) [`00c5f0c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f0c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf3b00 ["INT_ADD", "register:40f0:8", ["const:bf3b00:8", "const:4:8"]]
- 00bf3b00 ["CALL", null, ["callee:00c5f0a0:8"]]
+ 00bf4af4 ["INT_ADD", "register:40f0:8", ["const:bf4af4:8", "const:4:8"]]
+ 00bf4af4 ["CALL", null, ["callee:00c5f0a0:8"]]
~~~


<a id="compare-775168c268db9e1622fe3a1dc496ec84"></a>

### [`00bf3b28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf3b28.md) → [`00bf4b1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf4/00bf4b1c.md) _ZNKSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE12find_last_ofEPKwmm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c58520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58520.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c594f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c594f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf3b90 ["INT_ADD", "register:40f0:8", ["const:bf3b90:8", "const:4:8"]]
- 00bf3b90 ["CALL", null, ["callee:00c594f0:8"]]
+ 00bf4b84 ["INT_ADD", "register:40f0:8", ["const:bf4b84:8", "const:4:8"]]
+ 00bf4b84 ["CALL", null, ["callee:00c594f0:8"]]
~~~


<a id="compare-3d860223bbab05e7a0a8a23c848db02c"></a>

### [`00bf3bc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf3bc4.md) → [`00bf4bb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf4/00bf4bb8.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE9__grow_byEmmmmmm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5a970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a970.md) · 呼出先 5件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`006d76f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d76f8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 1件 [`00c5b940`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b940.md) · 呼出先 5件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`006d7aa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d7/006d7aa8.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf3c78 ["INT_ADD", "register:40f0:8", ["const:bf3c78:8", "const:4:8"]]
- 00bf3c78 ["CALL", null, ["callee:00c58f30:8"]]
+ 00bf4c6c ["INT_ADD", "register:40f0:8", ["const:bf4c6c:8", "const:4:8"]]
+ 00bf4c6c ["CALL", null, ["callee:00c58f30:8"]]
- 00bf3c94 ["INT_ADD", "register:40f0:8", ["const:bf3c94:8", "const:4:8"]]
- 00bf3c94 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00bf4c88 ["INT_ADD", "register:40f0:8", ["const:bf4c88:8", "const:4:8"]]
+ 00bf4c88 ["CALL", null, ["callee:00c58fe0:8"]]
- 00bf3cb8 ["INT_ADD", "register:40f0:8", ["const:bf3cb8:8", "const:4:8"]]
- 00bf3cb8 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00bf4cac ["INT_ADD", "register:40f0:8", ["const:bf4cac:8", "const:4:8"]]
+ 00bf4cac ["CALL", null, ["callee:00c58fe0:8"]]
~~~


<a id="compare-01bfa88fce8492d72e4217075c6be5ba"></a>

### [`00bf3d04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf3d04.md) → [`00bf4cf8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf4/00bf4cf8.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE9push_backEw

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5e100`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e100.md) · 呼出先 1件 [`00c5a970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a970.md)
- 新版 呼出元 1件 [`00c5f0d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f0d0.md) · 呼出先 1件 [`00c5b940`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b940.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf3d68 ["INT_ADD", "register:40f0:8", ["const:bf3d68:8", "const:4:8"]]
- 00bf3d68 ["CALL", null, ["callee:00c5b940:8"]]
+ 00bf4d5c ["INT_ADD", "register:40f0:8", ["const:bf4d5c:8", "const:4:8"]]
+ 00bf4d5c ["CALL", null, ["callee:00c5b940:8"]]
~~~


<a id="compare-0eb224c774bbc9175ab57c7c06355e18"></a>

### [`00bf3dac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf3dac.md) → [`00bf4da0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf4/00bf4da0.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6appendEmw

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5a970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a970.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b940`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b940.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf3e24 ["INT_ADD", "register:40f0:8", ["const:bf3e24:8", "const:4:8"]]
- 00bf3e24 ["CALL", null, ["callee:00c5b940:8"]]
+ 00bf4e18 ["INT_ADD", "register:40f0:8", ["const:bf4e18:8", "const:4:8"]]
+ 00bf4e18 ["CALL", null, ["callee:00c5b940:8"]]
~~~


<a id="compare-b2361f5ffc68f9a83dd7403df01a2ea4"></a>

### [`00bf3f2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf3f2c.md) → [`00bf4f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf4/00bf4f20.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6assignEmw

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5a970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a970.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b940`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b940.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf3f90 ["INT_ADD", "register:40f0:8", ["const:bf3f90:8", "const:4:8"]]
- 00bf3f90 ["CALL", null, ["callee:00c5b940:8"]]
+ 00bf4f84 ["INT_ADD", "register:40f0:8", ["const:bf4f84:8", "const:4:8"]]
+ 00bf4f84 ["CALL", null, ["callee:00c5b940:8"]]
~~~


<a id="compare-e36d43507ff48a8c88626ad4455d0344"></a>

### [`00bf4044`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf4044.md) → [`00bf5038`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf5/00bf5038.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE5eraseEmm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00bf2974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2974.md) [`00bf40bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf40bc.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00bf3968`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf3/00bf3968.md) [`00bf50b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf5/00bf50b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf407c ["INT_ADD", "register:40f0:8", ["const:bf407c:8", "const:4:8"]]
- 00bf407c ["CALL", null, ["callee:00bf50b0:8"]]
+ 00bf5070 ["INT_ADD", "register:40f0:8", ["const:bf5070:8", "const:4:8"]]
+ 00bf5070 ["CALL", null, ["callee:00bf50b0:8"]]
- 00bf40b8 ["INT_ADD", "register:40f0:8", ["const:bf40b8:8", "const:4:8"]]
- 00bf40b8 ["CALL", null, ["callee:00bf3968:8"]]
+ 00bf50ac ["INT_ADD", "register:40f0:8", ["const:bf50ac:8", "const:4:8"]]
+ 00bf50ac ["CALL", null, ["callee:00bf3968:8"]]
~~~


<a id="compare-9685a4d5b1a700333170776874293f22"></a>

### [`00bf40bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf40bc.md) → [`00bf50b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf5/00bf50b0.md) FUN_00bf50b0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00bf4044`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf4044.md) [`00c361ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c361ac.md) · 呼出先 1件 [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 2件 [`00bf5038`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf5/00bf5038.md) [`00c371a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c371a0.md) · 呼出先 1件 [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf411c ["INT_ADD", "register:40f0:8", ["const:bf411c:8", "const:4:8"]]
- 00bf411c ["CALL", null, ["callee:00c58fe0:8"]]
+ 00bf5110 ["INT_ADD", "register:40f0:8", ["const:bf5110:8", "const:4:8"]]
+ 00bf5110 ["CALL", null, ["callee:00c58fe0:8"]]
~~~


<a id="compare-df752b1f6977fcc8a74dbe88e45c5120"></a>

### [`00bf4158`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf4158.md) → [`00bf514c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf5/00bf514c.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6appendERKS5_mm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00bf2974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2974.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c5e0c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e0c0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00bf3968`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf3/00bf3968.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c5f090`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f090.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf41f4 ["INT_ADD", "register:40f0:8", ["const:bf41f4:8", "const:4:8"]]
- 00bf41f4 ["CALL", null, ["callee:00c5f090:8"]]
+ 00bf51e8 ["INT_ADD", "register:40f0:8", ["const:bf51e8:8", "const:4:8"]]
+ 00bf51e8 ["CALL", null, ["callee:00c5f090:8"]]
- 00bf4220 ["INT_ADD", "register:40f0:8", ["const:bf4220:8", "const:4:8"]]
- 00bf4220 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00bf5214 ["INT_ADD", "register:40f0:8", ["const:bf5214:8", "const:4:8"]]
+ 00bf5214 ["CALL", null, ["callee:00c58fe0:8"]]
- 00bf4260 ["INT_ADD", "register:40f0:8", ["const:bf4260:8", "const:4:8"]]
- 00bf4260 ["CALL", null, ["callee:00bf3968:8"]]
+ 00bf5254 ["INT_ADD", "register:40f0:8", ["const:bf5254:8", "const:4:8"]]
+ 00bf5254 ["CALL", null, ["callee:00bf3968:8"]]
~~~


<a id="compare-308fd45fbec32c6677dac32a74902997"></a>

### [`00bf4264`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf4264.md) → [`00bf5258`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf5/00bf5258.md) _ZNKSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE7compareEPKw

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00bf2974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2974.md) [`00c5e0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e0d0.md) [`00c5e110`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e110.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00bf3968`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf3/00bf3968.md) [`00c5f0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f0a0.md) [`00c5f0e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f0e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf4284 ["INT_ADD", "register:40f0:8", ["const:bf4284:8", "const:4:8"]]
- 00bf4284 ["CALL", null, ["callee:00c5f0a0:8"]]
+ 00bf5278 ["INT_ADD", "register:40f0:8", ["const:bf5278:8", "const:4:8"]]
+ 00bf5278 ["CALL", null, ["callee:00c5f0a0:8"]]
- 00bf42c8 ["INT_ADD", "register:40f0:8", ["const:bf42c8:8", "const:4:8"]]
- 00bf42c8 ["CALL", null, ["callee:00c5f0e0:8"]]
+ 00bf52bc ["INT_ADD", "register:40f0:8", ["const:bf52bc:8", "const:4:8"]]
+ 00bf52bc ["CALL", null, ["callee:00c5f0e0:8"]]
- 00bf42f4 ["INT_ADD", "register:40f0:8", ["const:bf42f4:8", "const:4:8"]]
- 00bf42f4 ["CALL", null, ["callee:00bf3968:8"]]
+ 00bf52e8 ["INT_ADD", "register:40f0:8", ["const:bf52e8:8", "const:4:8"]]
+ 00bf52e8 ["CALL", null, ["callee:00bf3968:8"]]
~~~


<a id="compare-2412ba02f3a68d615a513d6a7d190b41"></a>

### [`00bf42fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf42fc.md) → [`00bf52f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf5/00bf52f0.md) _ZNKSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE7compareEmmPKwm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00bf2974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2974.md) [`00c5e110`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e110.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00bf3968`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf3/00bf3968.md) [`00c5f0e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f0e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf4360 ["INT_ADD", "register:40f0:8", ["const:bf4360:8", "const:4:8"]]
- 00bf4360 ["CALL", null, ["callee:00c5f0e0:8"]]
+ 00bf5354 ["INT_ADD", "register:40f0:8", ["const:bf5354:8", "const:4:8"]]
+ 00bf5354 ["CALL", null, ["callee:00c5f0e0:8"]]
- 00bf4384 ["INT_ADD", "register:40f0:8", ["const:bf4384:8", "const:4:8"]]
- 00bf4384 ["CALL", null, ["callee:00bf3968:8"]]
+ 00bf5378 ["INT_ADD", "register:40f0:8", ["const:bf5378:8", "const:4:8"]]
+ 00bf5378 ["CALL", null, ["callee:00bf3968:8"]]
~~~


<a id="compare-5f0419b7cdf1db37b06302c57166f2fd"></a>

### [`00bf4388`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf4388.md) → [`00bf537c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf5/00bf537c.md) _ZNKSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE7compareEmmPKw

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00bf2974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2974.md) [`00c5e0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e0d0.md) [`00c5e110`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e110.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00bf3968`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf3/00bf3968.md) [`00c5f0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f0a0.md) [`00c5f0e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f0e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf43b4 ["INT_ADD", "register:40f0:8", ["const:bf43b4:8", "const:4:8"]]
- 00bf43b4 ["CALL", null, ["callee:00c5f0a0:8"]]
+ 00bf53a8 ["INT_ADD", "register:40f0:8", ["const:bf53a8:8", "const:4:8"]]
+ 00bf53a8 ["CALL", null, ["callee:00c5f0a0:8"]]
- 00bf440c ["INT_ADD", "register:40f0:8", ["const:bf440c:8", "const:4:8"]]
- 00bf440c ["CALL", null, ["callee:00c5f0e0:8"]]
+ 00bf5400 ["INT_ADD", "register:40f0:8", ["const:bf5400:8", "const:4:8"]]
+ 00bf5400 ["CALL", null, ["callee:00c5f0e0:8"]]
- 00bf443c ["INT_ADD", "register:40f0:8", ["const:bf443c:8", "const:4:8"]]
- 00bf443c ["CALL", null, ["callee:00bf3968:8"]]
+ 00bf5430 ["INT_ADD", "register:40f0:8", ["const:bf5430:8", "const:4:8"]]
+ 00bf5430 ["CALL", null, ["callee:00bf3968:8"]]
~~~


<a id="compare-23733def064ce0382770962796e71029"></a>

### [`00bf4440`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf4440.md) → [`00bf5434`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf5/00bf5434.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE2atEm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00bf2974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2974.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00bf3968`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf3/00bf3968.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf4484 ["INT_ADD", "register:40f0:8", ["const:bf4484:8", "const:4:8"]]
- 00bf4484 ["CALL", null, ["callee:00bf3968:8"]]
+ 00bf5478 ["INT_ADD", "register:40f0:8", ["const:bf5478:8", "const:4:8"]]
+ 00bf5478 ["CALL", null, ["callee:00bf3968:8"]]
~~~


<a id="compare-afb896861341d2c864f10672a3f34f45"></a>

### [`00bf4490`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf4490.md) → [`00bf5484`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf5/00bf5484.md) FUN_00bf5484

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00bf4488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf4488.md) · 呼出先 2件 [`00bf343c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf343c.md) [`00c5e0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e0d0.md)
- 新版 呼出元 1件 [`00bf547c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf5/00bf547c.md) · 呼出先 2件 [`00bf4430`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf4/00bf4430.md) [`00c5f0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f0a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf44ac ["INT_ADD", "register:40f0:8", ["const:bf44ac:8", "const:4:8"]]
- 00bf44ac ["CALL", null, ["callee:00c5f0a0:8"]]
+ 00bf54a0 ["INT_ADD", "register:40f0:8", ["const:bf54a0:8", "const:4:8"]]
+ 00bf54a0 ["CALL", null, ["callee:00c5f0a0:8"]]
~~~


<a id="compare-a70483241d79022d9ac03c21d545e19c"></a>

### [`00bf44cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf44cc.md) → [`00bf54c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf5/00bf54c0.md) _ZNKSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE4findEPKwmm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c58520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58520.md) [`00c5e110`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e110.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c594f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c594f0.md) [`00c5f0e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f0e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf4578 ["INT_ADD", "register:40f0:8", ["const:bf4578:8", "const:4:8"]]
- 00bf4578 ["CALL", null, ["callee:00c594f0:8"]]
+ 00bf556c ["INT_ADD", "register:40f0:8", ["const:bf556c:8", "const:4:8"]]
+ 00bf556c ["CALL", null, ["callee:00c594f0:8"]]
- 00bf458c ["INT_ADD", "register:40f0:8", ["const:bf458c:8", "const:4:8"]]
- 00bf458c ["CALL", null, ["callee:00c5f0e0:8"]]
+ 00bf5580 ["INT_ADD", "register:40f0:8", ["const:bf5580:8", "const:4:8"]]
+ 00bf5580 ["CALL", null, ["callee:00c5f0e0:8"]]
~~~


<a id="compare-a6236be77e8a5bf58dc1ce935d775a8f"></a>

### [`00bf46bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf46bc.md) → [`00bf56b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf5/00bf56b0.md) FUN_00bf56b0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00bf4664`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf4664.md) · 呼出先 5件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`006d76f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d76f8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`00bf5658`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf5/00bf5658.md) · 呼出先 5件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`006d7aa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d7/006d7aa8.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf46fc ["INT_ADD", "register:40f0:8", ["const:bf46fc:8", "const:4:8"]]
- 00bf46fc ["CALL", null, ["callee:00c58fe0:8"]]
+ 00bf56f0 ["INT_ADD", "register:40f0:8", ["const:bf56f0:8", "const:4:8"]]
+ 00bf56f0 ["CALL", null, ["callee:00c58fe0:8"]]
- 00bf4744 ["INT_ADD", "register:40f0:8", ["const:bf4744:8", "const:4:8"]]
- 00bf4744 ["CALL", null, ["callee:00c58f30:8"]]
+ 00bf5738 ["INT_ADD", "register:40f0:8", ["const:bf5738:8", "const:4:8"]]
+ 00bf5738 ["CALL", null, ["callee:00c58f30:8"]]
- 00bf4754 ["INT_ADD", "register:40f0:8", ["const:bf4754:8", "const:4:8"]]
- 00bf4754 ["CALL", null, ["callee:00c590a0:8"]]
+ 00bf5748 ["INT_ADD", "register:40f0:8", ["const:bf5748:8", "const:4:8"]]
+ 00bf5748 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-9b740dbc9df4574ea13e0d05ce106bf2"></a>

### [`00bf4790`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf4790.md) → [`00bf5784`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf5/00bf5784.md) FUN_00bf5784

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00bf4664`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf4664.md) · 呼出先 2件 [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c5e0c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e0c0.md)
- 新版 呼出元 1件 [`00bf5658`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf5/00bf5658.md) · 呼出先 2件 [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c5f090`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f090.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf47d8 ["INT_ADD", "register:40f0:8", ["const:bf47d8:8", "const:4:8"]]
- 00bf47d8 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00bf57cc ["INT_ADD", "register:40f0:8", ["const:bf57cc:8", "const:4:8"]]
+ 00bf57cc ["CALL", null, ["callee:00c58fe0:8"]]
- 00bf4804 ["INT_ADD", "register:40f0:8", ["const:bf4804:8", "const:4:8"]]
- 00bf4804 ["CALL", null, ["callee:00c5f090:8"]]
+ 00bf57f8 ["INT_ADD", "register:40f0:8", ["const:bf57f8:8", "const:4:8"]]
+ 00bf57f8 ["CALL", null, ["callee:00c5f090:8"]]
~~~


<a id="compare-f57b43674bbd83fb7766e124884c2ded"></a>

### [`00bf4820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf4820.md) → [`00bf5814`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf5/00bf5814.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6appendEPKw

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c5e0c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e0c0.md) [`00c5e0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e0d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c5f090`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f090.md) [`00c5f0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f0a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf4844 ["INT_ADD", "register:40f0:8", ["const:bf4844:8", "const:4:8"]]
- 00bf4844 ["CALL", null, ["callee:00c5f0a0:8"]]
+ 00bf5838 ["INT_ADD", "register:40f0:8", ["const:bf5838:8", "const:4:8"]]
+ 00bf5838 ["CALL", null, ["callee:00c5f0a0:8"]]
- 00bf48a0 ["INT_ADD", "register:40f0:8", ["const:bf48a0:8", "const:4:8"]]
- 00bf48a0 ["CALL", null, ["callee:00c5f090:8"]]
+ 00bf5894 ["INT_ADD", "register:40f0:8", ["const:bf5894:8", "const:4:8"]]
+ 00bf5894 ["CALL", null, ["callee:00c5f090:8"]]
- 00bf48c8 ["INT_ADD", "register:40f0:8", ["const:bf48c8:8", "const:4:8"]]
- 00bf48c8 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00bf58bc ["INT_ADD", "register:40f0:8", ["const:bf58bc:8", "const:4:8"]]
+ 00bf58bc ["CALL", null, ["callee:00c58fe0:8"]]
~~~


<a id="compare-6e3a43e8f020a7a117478ac8c1f36090"></a>

### [`00bf4908`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf4908.md) → [`00bf58fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf5/00bf58fc.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE7replaceEmmRKS5_mm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00bf2974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2974.md) [`00c5e0b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e0b0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00bf3968`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf3/00bf3968.md) [`00c5f080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f080.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf4954 ["INT_ADD", "register:40f0:8", ["const:bf4954:8", "const:4:8"]]
- 00bf4954 ["CALL", null, ["callee:00bf3968:8"]]
+ 00bf5948 ["INT_ADD", "register:40f0:8", ["const:bf5948:8", "const:4:8"]]
+ 00bf5948 ["CALL", null, ["callee:00bf3968:8"]]
~~~


<a id="compare-502cfad98905f4a2ab8e5e5a8d895428"></a>

### [`00bf4958`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf4958.md) → [`00bf594c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf5/00bf594c.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6insertENS_11__wrap_iterIPKwEEw

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c5a970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a970.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c5b940`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b940.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf49d8 ["INT_ADD", "register:40f0:8", ["const:bf49d8:8", "const:4:8"]]
- 00bf49d8 ["CALL", null, ["callee:00c5b940:8"]]
+ 00bf59cc ["INT_ADD", "register:40f0:8", ["const:bf59cc:8", "const:4:8"]]
+ 00bf59cc ["CALL", null, ["callee:00c5b940:8"]]
- 00bf4a08 ["INT_ADD", "register:40f0:8", ["const:bf4a08:8", "const:4:8"]]
- 00bf4a08 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00bf59fc ["INT_ADD", "register:40f0:8", ["const:bf59fc:8", "const:4:8"]]
+ 00bf59fc ["CALL", null, ["callee:00c58fe0:8"]]
~~~


<a id="compare-d3909f11bb1a9776126128021f1025f4"></a>

### [`00bf4a5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf4a5c.md) → [`00bf5a50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf5/00bf5a50.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6resizeEmw

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5a960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a960.md) · 呼出先 1件 [`00c5a970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a970.md)
- 新版 呼出元 1件 [`00c5b930`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b930.md) · 呼出先 1件 [`00c5b940`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b940.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf4ae0 ["INT_ADD", "register:40f0:8", ["const:bf4ae0:8", "const:4:8"]]
- 00bf4ae0 ["CALL", null, ["callee:00c5b940:8"]]
+ 00bf5ad4 ["INT_ADD", "register:40f0:8", ["const:bf5ad4:8", "const:4:8"]]
+ 00bf5ad4 ["CALL", null, ["callee:00c5b940:8"]]
~~~


<a id="compare-72a09f9e4a48604d7e71c8b4cc1161fa"></a>

### [`00bf4bbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf4bbc.md) → [`00bf5bb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf5/00bf5bb0.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6insertEmRKS5_mm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00bf2974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2974.md) [`00c5e0f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e0f0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00bf3968`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf3/00bf3968.md) [`00c5f0c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f0c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf4c08 ["INT_ADD", "register:40f0:8", ["const:bf4c08:8", "const:4:8"]]
- 00bf4c08 ["CALL", null, ["callee:00bf3968:8"]]
+ 00bf5bfc ["INT_ADD", "register:40f0:8", ["const:bf5bfc:8", "const:4:8"]]
+ 00bf5bfc ["CALL", null, ["callee:00bf3968:8"]]
~~~


<a id="compare-07bbd1cd9b83ae9f7c7887807de49bf0"></a>

### [`00bf6764`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf6/00bf6764.md) → [`00bf7758`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf7/00bf7758.md) _ZNSt6__ndk19to_stringEj

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c58860`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58860.md) · 呼出先 4件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00bf82f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf82f4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`00c59830`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59830.md) · 呼出先 4件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`00bf92e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf9/00bf92e8.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf678c ["INT_ADD", "register:40f0:8", ["const:bf678c:8", "const:4:8"]]
- 00bf678c ["CALL", null, ["callee:00bf92e8:8"]]
+ 00bf7780 ["INT_ADD", "register:40f0:8", ["const:bf7780:8", "const:4:8"]]
+ 00bf7780 ["CALL", null, ["callee:00bf92e8:8"]]
- 00bf67d0 ["INT_ADD", "register:40f0:8", ["const:bf67d0:8", "const:4:8"]]
- 00bf67d0 ["CALL", null, ["callee:00c58f30:8"]]
+ 00bf77c4 ["INT_ADD", "register:40f0:8", ["const:bf77c4:8", "const:4:8"]]
+ 00bf77c4 ["CALL", null, ["callee:00c58f30:8"]]
- 00bf67fc ["INT_ADD", "register:40f0:8", ["const:bf67fc:8", "const:4:8"]]
- 00bf67fc ["CALL", null, ["callee:00c590a0:8"]]
+ 00bf77f0 ["INT_ADD", "register:40f0:8", ["const:bf77f0:8", "const:4:8"]]
+ 00bf77f0 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-a931de955192f680bfa2cc75231349f9"></a>

### [`00bf90d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf90d8.md) → [`00bfa0cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfa/00bfa0cc.md) _ZNSt6__ndk112system_errorD0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5e250`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e250.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5f220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f220.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf90ec ["INT_ADD", "register:40f0:8", ["const:bf90ec:8", "const:4:8"]]
- 00bf90ec ["CALL", null, ["callee:00c5f220:8"]]
+ 00bfa0e0 ["INT_ADD", "register:40f0:8", ["const:bfa0e0:8", "const:4:8"]]
+ 00bfa0e0 ["CALL", null, ["callee:00c5f220:8"]]
~~~


<a id="compare-2bd359d6b836cf454d043113d30bd4c3"></a>

### [`00bf918c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf918c.md) → [`00bfa180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfa/00bfa180.md) FUN_00bfa180

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5dfc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfc0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5ef90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ef90.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf91a0 ["INT_ADD", "register:40f0:8", ["const:bf91a0:8", "const:4:8"]]
- 00bf91a0 ["CALL", null, ["callee:00c5ef90:8"]]
+ 00bfa194 ["INT_ADD", "register:40f0:8", ["const:bfa194:8", "const:4:8"]]
+ 00bfa194 ["CALL", null, ["callee:00c5ef90:8"]]
~~~


<a id="compare-8d126f2d044026da73adfc0af7083348"></a>

### [`00bf91b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf91b8.md) → [`00bfa1ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfa/00bfa1ac.md) FUN_00bfa1ac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5dfc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfc0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5ef90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ef90.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf91cc ["INT_ADD", "register:40f0:8", ["const:bf91cc:8", "const:4:8"]]
- 00bf91cc ["CALL", null, ["callee:00c5ef90:8"]]
+ 00bfa1c0 ["INT_ADD", "register:40f0:8", ["const:bfa1c0:8", "const:4:8"]]
+ 00bfa1c0 ["CALL", null, ["callee:00c5ef90:8"]]
~~~


<a id="compare-0aca42ecf7eba8cd03af6ae7c682ecdb"></a>

### [`00bf9220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf9220.md) → [`00bfa214`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfa/00bfa214.md) _ZNKSt6__ndk114error_category10equivalentEiRKNS_15error_conditionE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf923c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bf923c ["INT_ADD", "register:40f0:8", ["const:bf923c:8", "const:4:8"]]
- 00bf923c ["CALLIND", null, ["register:0:8"]]
+ 00bfa230 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bfa230 ["INT_ADD", "register:40f0:8", ["const:bfa230:8", "const:4:8"]]
+ 00bfa230 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-5c0208d5b434a02eb7e0394d2f65bce9"></a>

### [`00bf9280`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf9280.md) → [`00bfa274`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfa/00bfa274.md) _ZNSt6__ndk118condition_variableD2Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c581a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581a0.md) · 呼出先 1件 [`00c5d6f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d6f0.md)
- 新版 呼出元 1件 [`00c59170`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59170.md) · 呼出先 1件 [`00c5e6c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e6c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf928c ["INT_ADD", "register:40f0:8", ["const:bf928c:8", "const:4:8"]]
- 00bf928c ["CALL", null, ["callee:00c5e6c0:8"]]
+ 00bfa280 ["INT_ADD", "register:40f0:8", ["const:bfa280:8", "const:4:8"]]
+ 00bfa280 ["CALL", null, ["callee:00c5e6c0:8"]]
~~~


<a id="compare-b9b3e7655ffcd341d864f84529384042"></a>

### [`00bf92a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf92a0.md) → [`00bfa294`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfa/00bfa294.md) _ZNSt6__ndk118condition_variable10notify_oneEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c591e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c591e0.md) · 呼出先 1件 [`00c5d700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d700.md)
- 新版 呼出元 1件 [`00c5a1b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a1b0.md) · 呼出先 1件 [`00c5e6d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e6d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf92ac ["INT_ADD", "register:40f0:8", ["const:bf92ac:8", "const:4:8"]]
- 00bf92ac ["CALL", null, ["callee:00c5e6d0:8"]]
+ 00bfa2a0 ["INT_ADD", "register:40f0:8", ["const:bfa2a0:8", "const:4:8"]]
+ 00bfa2a0 ["CALL", null, ["callee:00c5e6d0:8"]]
~~~


<a id="compare-9ccae2f491af57d7398b37374974d957"></a>

### [`00bf92c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf92c0.md) → [`00bfa2b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfa/00bfa2b4.md) _ZNSt6__ndk118condition_variable10notify_allEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c58450`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58450.md) · 呼出先 1件 [`00c5e290`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e290.md)
- 新版 呼出元 1件 [`00c59420`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59420.md) · 呼出先 1件 [`00c5f260`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f260.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf92cc ["INT_ADD", "register:40f0:8", ["const:bf92cc:8", "const:4:8"]]
- 00bf92cc ["CALL", null, ["callee:00c5f260:8"]]
+ 00bfa2c0 ["INT_ADD", "register:40f0:8", ["const:bfa2c0:8", "const:4:8"]]
+ 00bfa2c0 ["CALL", null, ["callee:00c5f260:8"]]
~~~


<a id="compare-43abcc3029e8faf8348c057a0d146579"></a>

### [`00bf93cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf93cc.md) → [`00bfa3c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfa/00bfa3c0.md) _ZNSt6__ndk125notify_all_at_thread_exitERNS_18condition_variableENS_11unique_lockINS_5mutexEEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c581d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581d0.md) [`00c58200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58200.md) [`00c58210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58210.md) [`00c5e2c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e2c0.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c591a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c591a0.md) [`00c591d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c591d0.md) [`00c591e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c591e0.md) [`00c5f290`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f290.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf93e8 ["INT_ADD", "register:40f0:8", ["const:bf93e8:8", "const:4:8"]]
- 00bf93e8 ["CALL", null, ["callee:00c591d0:8"]]
+ 00bfa3dc ["INT_ADD", "register:40f0:8", ["const:bfa3dc:8", "const:4:8"]]
+ 00bfa3dc ["CALL", null, ["callee:00c591d0:8"]]
- 00bf93f4 ["INT_ADD", "register:40f0:8", ["const:bf93f4:8", "const:4:8"]]
- 00bf93f4 ["CALL", null, ["callee:00c5f290:8"]]
+ 00bfa3e8 ["INT_ADD", "register:40f0:8", ["const:bfa3e8:8", "const:4:8"]]
+ 00bfa3e8 ["CALL", null, ["callee:00c5f290:8"]]
- 00bf9400 ["INT_ADD", "register:40f0:8", ["const:bf9400:8", "const:4:8"]]
- 00bf9400 ["CALL", null, ["callee:00c58f30:8"]]
+ 00bfa3f4 ["INT_ADD", "register:40f0:8", ["const:bfa3f4:8", "const:4:8"]]
+ 00bfa3f4 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-9d19ab387fb64c5e2703f0eb51d5a233"></a>

### [`00bf96dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf96dc.md) → [`00bfa6d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfa/00bfa6d0.md) _ZNSt6__ndk112future_errorD0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58440`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58440.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c59410`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59410.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf96f0 ["INT_ADD", "register:40f0:8", ["const:bf96f0:8", "const:4:8"]]
- 00bf96f0 ["CALL", null, ["callee:00c59410:8"]]
+ 00bfa6e4 ["INT_ADD", "register:40f0:8", ["const:bfa6e4:8", "const:4:8"]]
+ 00bfa6e4 ["CALL", null, ["callee:00c59410:8"]]
~~~


<a id="compare-45a7e629dc537394faf3c37ce5cccc01"></a>

### [`00bf9718`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf9718.md) → [`00bfa70c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfa/00bfa70c.md) _ZNSt6__ndk117__assoc_sub_state9set_valueEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c58620`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58620.md) · 呼出先 5件 [`0045a714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0045a/0045a714.md) [`00c581b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581b0.md) [`00c581c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581c0.md) [`00c583c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583c0.md) [`00c58450`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58450.md)
- 新版 呼出元 1件 [`00c595f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c595f0.md) · 呼出先 5件 [`0045aa34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045aa34.md) [`00c59180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59180.md) [`00c59190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59190.md) [`00c59390`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59390.md) [`00c59420`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59420.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf9734 ["INT_ADD", "register:40f0:8", ["const:bf9734:8", "const:4:8"]]
- 00bf9734 ["CALL", null, ["callee:00c59180:8"]]
+ 00bfa728 ["INT_ADD", "register:40f0:8", ["const:bfa728:8", "const:4:8"]]
+ 00bfa728 ["CALL", null, ["callee:00c59180:8"]]
- 00bf974c ["INT_ADD", "register:40f0:8", ["const:bf974c:8", "const:4:8"]]
- 00bf974c ["CALL", null, ["callee:00c59390:8"]]
+ 00bfa740 ["INT_ADD", "register:40f0:8", ["const:bfa740:8", "const:4:8"]]
+ 00bfa740 ["CALL", null, ["callee:00c59390:8"]]
- 00bf9768 ["INT_ADD", "register:40f0:8", ["const:bf9768:8", "const:4:8"]]
- 00bf9768 ["CALL", null, ["callee:00c59420:8"]]
+ 00bfa75c ["INT_ADD", "register:40f0:8", ["const:bfa75c:8", "const:4:8"]]
+ 00bfa75c ["CALL", null, ["callee:00c59420:8"]]
~~~


<a id="compare-5ed5f5ca03f6299a33ed09989682de60"></a>

### [`00bf97a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf97a4.md) → [`00bfa798`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfa/00bfa798.md) _ZNSt6__ndk117__assoc_sub_state24set_value_at_thread_exitEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5e2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e2f0.md) · 呼出先 7件 [`0045a714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0045a/0045a714.md) [`00c581b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581b0.md) [`00c581c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581c0.md) [`00c58200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58200.md) [`00c583c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583c0.md)
- 新版 呼出元 1件 [`00c5f2c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f2c0.md) · 呼出先 7件 [`0045aa34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045aa34.md) [`00c59180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59180.md) [`00c59190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59190.md) [`00c591d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c591d0.md) [`00c59390`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59390.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf97c0 ["INT_ADD", "register:40f0:8", ["const:bf97c0:8", "const:4:8"]]
- 00bf97c0 ["CALL", null, ["callee:00c59180:8"]]
+ 00bfa7b4 ["INT_ADD", "register:40f0:8", ["const:bfa7b4:8", "const:4:8"]]
+ 00bfa7b4 ["CALL", null, ["callee:00c59180:8"]]
- 00bf97d8 ["INT_ADD", "register:40f0:8", ["const:bf97d8:8", "const:4:8"]]
- 00bf97d8 ["CALL", null, ["callee:00c59390:8"]]
+ 00bfa7cc ["INT_ADD", "register:40f0:8", ["const:bfa7cc:8", "const:4:8"]]
+ 00bfa7cc ["CALL", null, ["callee:00c59390:8"]]
- 00bf97ec ["INT_ADD", "register:40f0:8", ["const:bf97ec:8", "const:4:8"]]
- 00bf97ec ["CALL", null, ["callee:00c591d0:8"]]
+ 00bfa7e0 ["INT_ADD", "register:40f0:8", ["const:bfa7e0:8", "const:4:8"]]
+ 00bfa7e0 ["CALL", null, ["callee:00c591d0:8"]]
~~~


<a id="compare-a00ba29b107a5aa80d5ab4a63afd53f2"></a>

### [`00bf9838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf9838.md) → [`00bfa82c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfa/00bfa82c.md) _ZNSt6__ndk117__assoc_sub_state13set_exceptionESt13exception_ptr

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c58430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58430.md) · 呼出先 6件 [`0045a714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0045a/0045a714.md) [`00c581b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581b0.md) [`00c581c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581c0.md) [`00c583c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583c0.md) [`00c58450`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58450.md)
- 新版 呼出元 1件 [`00c59400`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59400.md) · 呼出先 6件 [`0045aa34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045aa34.md) [`00c59180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59180.md) [`00c59190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59190.md) [`00c59390`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59390.md) [`00c59420`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59420.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf985c ["INT_ADD", "register:40f0:8", ["const:bf985c:8", "const:4:8"]]
- 00bf985c ["CALL", null, ["callee:00c59180:8"]]
+ 00bfa850 ["INT_ADD", "register:40f0:8", ["const:bfa850:8", "const:4:8"]]
+ 00bfa850 ["CALL", null, ["callee:00c59180:8"]]
- 00bf9878 ["INT_ADD", "register:40f0:8", ["const:bf9878:8", "const:4:8"]]
- 00bf9878 ["CALL", null, ["callee:00c59390:8"]]
+ 00bfa86c ["INT_ADD", "register:40f0:8", ["const:bfa86c:8", "const:4:8"]]
+ 00bfa86c ["CALL", null, ["callee:00c59390:8"]]
- 00bf9888 ["INT_ADD", "register:40f0:8", ["const:bf9888:8", "const:4:8"]]
- 00bf9888 ["CALL", null, ["callee:00c5efd0:8"]]
+ 00bfa87c ["INT_ADD", "register:40f0:8", ["const:bfa87c:8", "const:4:8"]]
+ 00bfa87c ["CALL", null, ["callee:00c5efd0:8"]]
~~~


<a id="compare-023e0c12eaee0a2060d0a095cc87127e"></a>

### [`00bf98dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf98dc.md) → [`00bfa8d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfa/00bfa8d0.md) _ZNSt6__ndk117__assoc_sub_state28set_exception_at_thread_exitESt13exception_ptr

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5e310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e310.md) · 呼出先 8件 [`0045a714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0045a/0045a714.md) [`00c581b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581b0.md) [`00c581c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581c0.md) [`00c58200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58200.md) [`00c583c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583c0.md)
- 新版 呼出元 1件 [`00c5f2e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f2e0.md) · 呼出先 8件 [`0045aa34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045aa34.md) [`00c59180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59180.md) [`00c59190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59190.md) [`00c591d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c591d0.md) [`00c59390`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59390.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf9900 ["INT_ADD", "register:40f0:8", ["const:bf9900:8", "const:4:8"]]
- 00bf9900 ["CALL", null, ["callee:00c59180:8"]]
+ 00bfa8f4 ["INT_ADD", "register:40f0:8", ["const:bfa8f4:8", "const:4:8"]]
+ 00bfa8f4 ["CALL", null, ["callee:00c59180:8"]]
- 00bf991c ["INT_ADD", "register:40f0:8", ["const:bf991c:8", "const:4:8"]]
- 00bf991c ["CALL", null, ["callee:00c59390:8"]]
+ 00bfa910 ["INT_ADD", "register:40f0:8", ["const:bfa910:8", "const:4:8"]]
+ 00bfa910 ["CALL", null, ["callee:00c59390:8"]]
- 00bf992c ["INT_ADD", "register:40f0:8", ["const:bf992c:8", "const:4:8"]]
- 00bf992c ["CALL", null, ["callee:00c5efd0:8"]]
+ 00bfa920 ["INT_ADD", "register:40f0:8", ["const:bfa920:8", "const:4:8"]]
+ 00bfa920 ["CALL", null, ["callee:00c5efd0:8"]]
~~~


<a id="compare-438f3d9d3b051580f21ad4867ab0e160"></a>

### [`00bf9980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf9980.md) → [`00bfa974`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfa/00bfa974.md) _ZNSt6__ndk117__assoc_sub_state12__make_readyEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5e320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e320.md) · 呼出先 3件 [`00c581b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581b0.md) [`00c581c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581c0.md) [`00c58450`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58450.md)
- 新版 呼出元 1件 [`00c5f2f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f2f0.md) · 呼出先 3件 [`00c59180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59180.md) [`00c59190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59190.md) [`00c59420`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59420.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf9998 ["INT_ADD", "register:40f0:8", ["const:bf9998:8", "const:4:8"]]
- 00bf9998 ["CALL", null, ["callee:00c59180:8"]]
+ 00bfa98c ["INT_ADD", "register:40f0:8", ["const:bfa98c:8", "const:4:8"]]
+ 00bfa98c ["CALL", null, ["callee:00c59180:8"]]
- 00bf99ac ["INT_ADD", "register:40f0:8", ["const:bf99ac:8", "const:4:8"]]
- 00bf99ac ["CALL", null, ["callee:00c59420:8"]]
+ 00bfa9a0 ["INT_ADD", "register:40f0:8", ["const:bfa9a0:8", "const:4:8"]]
+ 00bfa9a0 ["CALL", null, ["callee:00c59420:8"]]
~~~


<a id="compare-b04398cfd3a32d034d45417004b4f940"></a>

### [`00bf99c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf99c4.md) → [`00bfa9b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfa/00bfa9b8.md) _ZNSt6__ndk117__assoc_sub_state4copyEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e330.md) · 呼出先 7件 [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c581b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581b0.md) [`00c581c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581c0.md) [`00c583c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583c0.md) [`00c58550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58550.md)
- 新版 呼出元 1件 [`00c5f300`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f300.md) · 呼出先 7件 [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c59180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59180.md) [`00c59190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59190.md) [`00c59390`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59390.md) [`00c59520`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59520.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf99f0 ["INT_ADD", "register:40f0:8", ["const:bf99f0:8", "const:4:8"]]
- 00bf99f0 ["CALL", null, ["callee:00c59180:8"]]
+ 00bfa9e4 ["INT_ADD", "register:40f0:8", ["const:bfa9e4:8", "const:4:8"]]
+ 00bfa9e4 ["CALL", null, ["callee:00c59180:8"]]
- 00bf9a08 ["INT_ADD", "register:40f0:8", ["const:bf9a08:8", "const:4:8"]]
- 00bf9a08 ["CALL", null, ["callee:00c59520:8"]]
+ 00bfa9fc ["INT_ADD", "register:40f0:8", ["const:bfa9fc:8", "const:4:8"]]
+ 00bfa9fc ["CALL", null, ["callee:00c59520:8"]]
- 00bf9a24 ["INT_ADD", "register:40f0:8", ["const:bf9a24:8", "const:4:8"]]
- 00bf9a24 ["CALL", null, ["callee:00c59190:8"]]
+ 00bfaa18 ["INT_ADD", "register:40f0:8", ["const:bfaa18:8", "const:4:8"]]
+ 00bfaa18 ["CALL", null, ["callee:00c59190:8"]]
~~~


