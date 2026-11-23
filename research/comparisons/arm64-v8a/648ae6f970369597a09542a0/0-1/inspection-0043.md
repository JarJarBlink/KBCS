# v16.0.1 → v16.0.2 · 要調査の変更候補 (43)

[一覧の目次](README.md)

<a id="compare-2a1a3d4183d7b18d95711174a424294d"></a>

### [`00bf1e28`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf1/00bf1e28.md) → [`00bf1ec4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf1/00bf1ec4.md) _ZNKSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7compareEmmPKcm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`0044291c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/0044291c.md) [`00c58050`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0044295c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/0044295c.md) [`00c58120`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf1e88 ["INT_ADD", "register:40f0:8", ["const:bf1e88:8", "const:4:8"]]
+ 00bf1f24 ["INT_ADD", "register:40f0:8", ["const:bf1f24:8", "const:4:8"]]
- 00bf1ea4 ["INT_ADD", "register:40f0:8", ["const:bf1ea4:8", "const:4:8"]]
+ 00bf1f40 ["INT_ADD", "register:40f0:8", ["const:bf1f40:8", "const:4:8"]]
~~~


<a id="compare-a4bd0af4954880b67ae53d0d3a7d0bc3"></a>

### [`00bf1ea8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf1/00bf1ea8.md) → [`00bf1f44`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf1/00bf1f44.md) _ZNKSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7compareEmmPKc

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`0044291c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/0044291c.md) [`00c57fe0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md) [`00c58050`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0044295c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/0044295c.md) [`00c580b0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c58120`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf1ed0 ["INT_ADD", "register:40f0:8", ["const:bf1ed0:8", "const:4:8"]]
+ 00bf1f6c ["INT_ADD", "register:40f0:8", ["const:bf1f6c:8", "const:4:8"]]
- 00bf1f24 ["INT_ADD", "register:40f0:8", ["const:bf1f24:8", "const:4:8"]]
+ 00bf1fc0 ["INT_ADD", "register:40f0:8", ["const:bf1fc0:8", "const:4:8"]]
- 00bf1f48 ["INT_ADD", "register:40f0:8", ["const:bf1f48:8", "const:4:8"]]
+ 00bf1fe4 ["INT_ADD", "register:40f0:8", ["const:bf1fe4:8", "const:4:8"]]
~~~


<a id="compare-24e035bcdd2d341add7afbc35579aaa7"></a>

### [`00bf1f4c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf1/00bf1f4c.md) → [`00bf1fe8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf1/00bf1fe8.md) _ZNSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE2atEm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`0044291c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/0044291c.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0044295c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/0044295c.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf1f8c ["INT_ADD", "register:40f0:8", ["const:bf1f8c:8", "const:4:8"]]
+ 00bf2028 ["INT_ADD", "register:40f0:8", ["const:bf2028:8", "const:4:8"]]
~~~


<a id="compare-46f0eb568b56f4c4e8860399fb46c144"></a>

### [`00bf1f98`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf1/00bf1f98.md) → [`00bf2034`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2034.md) FUN_00bf2034

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 8件 [`00bf1f90`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf1/00bf1f90.md) [`00c2c228`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2c/00c2c228.md) [`00c2c624`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2c/00c2c624.md) [`00c30a70`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c30/00c30a70.md) [`00c32a84`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c32/00c32a84.md) · 呼出先 2件 [`00bf1400`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf1/00bf1400.md) [`00c57fe0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md)
- 新版 呼出元 8件 [`00bf202c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf202c.md) [`00c2c2c4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2c/00c2c2c4.md) [`00c2c6c0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2c/00c2c6c0.md) [`00c30b0c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c30/00c30b0c.md) [`00c32b20`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c32/00c32b20.md) · 呼出先 2件 [`00bf149c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf1/00bf149c.md) [`00c580b0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf1fb4 ["INT_ADD", "register:40f0:8", ["const:bf1fb4:8", "const:4:8"]]
+ 00bf2050 ["INT_ADD", "register:40f0:8", ["const:bf2050:8", "const:4:8"]]
~~~


<a id="compare-320ba61c1b3485a3f2b07ac33c673583"></a>

### [`00bf1fd4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf1/00bf1fd4.md) → [`00bf2070`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2070.md) _ZNKSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4findEPKcmm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57fd0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fd0.md) [`00c58050`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c580a0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580a0.md) [`00c58120`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf2074 ["INT_ADD", "register:40f0:8", ["const:bf2074:8", "const:4:8"]]
+ 00bf2110 ["INT_ADD", "register:40f0:8", ["const:bf2110:8", "const:4:8"]]
- 00bf2088 ["INT_ADD", "register:40f0:8", ["const:bf2088:8", "const:4:8"]]
+ 00bf2124 ["INT_ADD", "register:40f0:8", ["const:bf2124:8", "const:4:8"]]
~~~


<a id="compare-62726ee039e49168f41c16277be65ef2"></a>

### [`00bf21a8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf2/00bf21a8.md) → [`00bf2244`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2244.md) FUN_00bf2244

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00bf2154`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf2/00bf2154.md) [`00c05180`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05180.md) · 呼出先 4件 [`0043b764`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`00c57e90`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57f40`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md) [`00c58000`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 2件 [`00bf21f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf21f0.md) [`00c0521c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c0521c.md) · 呼出先 4件 [`0043b7a4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00c57f60`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58010`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580d0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf21e8 ["INT_ADD", "register:40f0:8", ["const:bf21e8:8", "const:4:8"]]
+ 00bf2284 ["INT_ADD", "register:40f0:8", ["const:bf2284:8", "const:4:8"]]
- 00bf2214 ["INT_ADD", "register:40f0:8", ["const:bf2214:8", "const:4:8"]]
+ 00bf22b0 ["INT_ADD", "register:40f0:8", ["const:bf22b0:8", "const:4:8"]]
- 00bf2224 ["INT_ADD", "register:40f0:8", ["const:bf2224:8", "const:4:8"]]
+ 00bf22c0 ["INT_ADD", "register:40f0:8", ["const:bf22c0:8", "const:4:8"]]
~~~


<a id="compare-05b21a2904b1bf6392b8ae17f660aac6"></a>

### [`00bf225c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf2/00bf225c.md) → [`00bf22f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf22f8.md) FUN_00bf22f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00bf2154`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf2/00bf2154.md) [`00c05180`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05180.md) · 呼出先 5件 [`0043b764`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`00c57e90`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57f40`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md) [`00c58000`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 2件 [`00bf21f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf21f0.md) [`00c0521c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c0521c.md) · 呼出先 5件 [`0043b7a4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00c57f60`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580d0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf22a0 ["INT_ADD", "register:40f0:8", ["const:bf22a0:8", "const:4:8"]]
+ 00bf233c ["INT_ADD", "register:40f0:8", ["const:bf233c:8", "const:4:8"]]
- 00bf2328 ["INT_ADD", "register:40f0:8", ["const:bf2328:8", "const:4:8"]]
+ 00bf23c4 ["INT_ADD", "register:40f0:8", ["const:bf23c4:8", "const:4:8"]]
- 00bf2340 ["INT_ADD", "register:40f0:8", ["const:bf2340:8", "const:4:8"]]
+ 00bf23dc ["INT_ADD", "register:40f0:8", ["const:bf23dc:8", "const:4:8"]]
~~~


<a id="compare-f1da9c0f462e8a47ad6357773fb2533e"></a>

### [`00bf2380`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf2/00bf2380.md) → [`00bf241c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf241c.md) _ZNSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEPKc

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c57f70`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f70.md) · 呼出先 3件 [`00c57f40`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md) [`00c57fe0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md) [`00c5b0a0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b0a0.md)
- 新版 呼出元 1件 [`00c58040`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58040.md) · 呼出先 3件 [`00c58010`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580b0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c5b170`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b170.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf23a4 ["INT_ADD", "register:40f0:8", ["const:bf23a4:8", "const:4:8"]]
+ 00bf2440 ["INT_ADD", "register:40f0:8", ["const:bf2440:8", "const:4:8"]]
- 00bf2400 ["INT_ADD", "register:40f0:8", ["const:bf2400:8", "const:4:8"]]
+ 00bf249c ["INT_ADD", "register:40f0:8", ["const:bf249c:8", "const:4:8"]]
- 00bf2424 ["INT_ADD", "register:40f0:8", ["const:bf2424:8", "const:4:8"]]
+ 00bf24c0 ["INT_ADD", "register:40f0:8", ["const:bf24c0:8", "const:4:8"]]
~~~


<a id="compare-16cf1b53406559b3fcff11a51ed4ce7b"></a>

### [`00bf2464`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf2/00bf2464.md) → [`00bf2500`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2500.md) _ZNSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7replaceEmmRKS5_mm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`0044291c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/0044291c.md) [`00c58070`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58070.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0044295c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/0044295c.md) [`00c58140`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58140.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf24b0 ["INT_ADD", "register:40f0:8", ["const:bf24b0:8", "const:4:8"]]
+ 00bf254c ["INT_ADD", "register:40f0:8", ["const:bf254c:8", "const:4:8"]]
~~~


<a id="compare-ccc91963e755205b84b87cbcf656add3"></a>

### [`00bf24b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf2/00bf24b4.md) → [`00bf2550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2550.md) _ZNSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6insertENS_11__wrap_iterIPKcEEc

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`0043b764`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`00c57e90`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57f40`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0043b7a4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00c57f60`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf2578 ["INT_ADD", "register:40f0:8", ["const:bf2578:8", "const:4:8"]]
+ 00bf2614 ["INT_ADD", "register:40f0:8", ["const:bf2614:8", "const:4:8"]]
- 00bf25a4 ["INT_ADD", "register:40f0:8", ["const:bf25a4:8", "const:4:8"]]
+ 00bf2640 ["INT_ADD", "register:40f0:8", ["const:bf2640:8", "const:4:8"]]
- 00bf25c4 ["INT_ADD", "register:40f0:8", ["const:bf25c4:8", "const:4:8"]]
+ 00bf2660 ["INT_ADD", "register:40f0:8", ["const:bf2660:8", "const:4:8"]]
~~~


<a id="compare-a6267abf572d2a3ad0754017e0703ab9"></a>

### [`00bf26b0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf2/00bf26b0.md) → [`00bf274c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf274c.md) _ZNSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6insertEmRKS5_mm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`0044291c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/0044291c.md) [`00c58fd0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58fd0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0044295c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/0044295c.md) [`00c590a0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf26fc ["INT_ADD", "register:40f0:8", ["const:bf26fc:8", "const:4:8"]]
+ 00bf2798 ["INT_ADD", "register:40f0:8", ["const:bf2798:8", "const:4:8"]]
~~~


<a id="compare-66a299b8ce3978fb370389d5c0c42968"></a>

### [`00bf2700`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf2/00bf2700.md) → [`00bf279c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf279c.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE7replaceEmmPKwm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5dfe0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dfe0.md) · 呼出先 3件 [`00bf28d8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf2/00bf28d8.md) [`00c57f40`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md) [`00c5dff0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dff0.md)
- 新版 呼出元 1件 [`00c5e0b0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e0b0.md) · 呼出先 3件 [`00bf2974`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2974.md) [`00c58010`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c5e0c0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e0c0.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf27a0 ["INT_ADD", "register:40f0:8", ["const:bf27a0:8", "const:4:8"]]
+ 00bf283c ["INT_ADD", "register:40f0:8", ["const:bf283c:8", "const:4:8"]]
- 00bf27f0 ["INT_ADD", "register:40f0:8", ["const:bf27f0:8", "const:4:8"]]
+ 00bf288c ["INT_ADD", "register:40f0:8", ["const:bf288c:8", "const:4:8"]]
- 00bf2800 ["INT_ADD", "register:40f0:8", ["const:bf2800:8", "const:4:8"]]
+ 00bf289c ["INT_ADD", "register:40f0:8", ["const:bf289c:8", "const:4:8"]]
~~~


<a id="compare-f6934cc32550e589b08dad2a944b034b"></a>

### [`00bf28f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf2/00bf28f0.md) → [`00bf298c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf298c.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE21__grow_by_and_replaceEmmmmmmPKw

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5dff0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dff0.md) · 呼出先 6件 [`00440ec0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`006d76a0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d76a0.md) [`00c57e90`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57f40`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md)
- 新版 呼出元 1件 [`00c5e0c0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e0c0.md) · 呼出先 6件 [`00440f00`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`006d76f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d76f8.md) [`00c57f60`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf29bc ["INT_ADD", "register:40f0:8", ["const:bf29bc:8", "const:4:8"]]
+ 00bf2a58 ["INT_ADD", "register:40f0:8", ["const:bf2a58:8", "const:4:8"]]
- 00bf29d8 ["INT_ADD", "register:40f0:8", ["const:bf29d8:8", "const:4:8"]]
+ 00bf2a74 ["INT_ADD", "register:40f0:8", ["const:bf2a74:8", "const:4:8"]]
- 00bf29ec ["INT_ADD", "register:40f0:8", ["const:bf29ec:8", "const:4:8"]]
+ 00bf2a88 ["INT_ADD", "register:40f0:8", ["const:bf2a88:8", "const:4:8"]]
~~~


<a id="compare-4619ce2cb4e8193db9232a8ee3ce144f"></a>

### [`00bf2b34`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf2/00bf2b34.md) → [`00bf2bd0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2bd0.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6__initEPKwmm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`00440ec0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`006d76a0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d76a0.md) [`00c57e90`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57f40`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00440f00`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`006d76f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d76f8.md) [`00c57f60`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58010`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf2b78 ["INT_ADD", "register:40f0:8", ["const:bf2b78:8", "const:4:8"]]
+ 00bf2c14 ["INT_ADD", "register:40f0:8", ["const:bf2c14:8", "const:4:8"]]
- 00bf2bc0 ["INT_ADD", "register:40f0:8", ["const:bf2bc0:8", "const:4:8"]]
+ 00bf2c5c ["INT_ADD", "register:40f0:8", ["const:bf2c5c:8", "const:4:8"]]
- 00bf2be4 ["INT_ADD", "register:40f0:8", ["const:bf2be4:8", "const:4:8"]]
+ 00bf2c80 ["INT_ADD", "register:40f0:8", ["const:bf2c80:8", "const:4:8"]]
~~~


<a id="compare-7ea47cd52362d05b6995ceff184c008e"></a>

### [`00bf2c18`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf2/00bf2c18.md) → [`00bf2cb4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2cb4.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE7replaceEmmPKw

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5dfe0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dfe0.md) [`00c5e000`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e000.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5e0b0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e0b0.md) [`00c5e0d0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e0d0.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf2c40 ["INT_ADD", "register:40f0:8", ["const:bf2c40:8", "const:4:8"]]
+ 00bf2cdc ["INT_ADD", "register:40f0:8", ["const:bf2cdc:8", "const:4:8"]]
~~~


<a id="compare-0bb04daa9878c1d14f35e96d1243257b"></a>

### [`00bf2c98`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf2/00bf2c98.md) → [`00bf2d34`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2d34.md) _ZNKSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE16find_last_not_ofEPKwmm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c58450`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58450.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58520`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58520.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf2cfc ["INT_ADD", "register:40f0:8", ["const:bf2cfc:8", "const:4:8"]]
+ 00bf2d98 ["INT_ADD", "register:40f0:8", ["const:bf2d98:8", "const:4:8"]]
~~~


<a id="compare-75e17246050cbef281a222ecca341f0f"></a>

### [`00bf2d40`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf2/00bf2d40.md) → [`00bf2ddc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2ddc.md) _ZNKSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE17find_first_not_ofEPKwmm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c58450`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58450.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58520`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58520.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf2da0 ["INT_ADD", "register:40f0:8", ["const:bf2da0:8", "const:4:8"]]
+ 00bf2e3c ["INT_ADD", "register:40f0:8", ["const:bf2e3c:8", "const:4:8"]]
~~~


<a id="compare-edfd897adbfc7e188d4c1f1c3c55819c"></a>

### [`00bf2ddc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf2/00bf2ddc.md) → [`00bf2e78`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2e78.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6insertEmmw

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5e010`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e010.md) · 呼出先 3件 [`00bf28d8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf2/00bf28d8.md) [`00c57f40`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md) [`00c5a8a0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a8a0.md)
- 新版 呼出元 1件 [`00c5e0e0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e0e0.md) · 呼出先 3件 [`00bf2974`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2974.md) [`00c58010`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c5a970`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a970.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf2e60 ["INT_ADD", "register:40f0:8", ["const:bf2e60:8", "const:4:8"]]
+ 00bf2efc ["INT_ADD", "register:40f0:8", ["const:bf2efc:8", "const:4:8"]]
- 00bf2ea0 ["INT_ADD", "register:40f0:8", ["const:bf2ea0:8", "const:4:8"]]
+ 00bf2f3c ["INT_ADD", "register:40f0:8", ["const:bf2f3c:8", "const:4:8"]]
- 00bf2f30 ["INT_ADD", "register:40f0:8", ["const:bf2f30:8", "const:4:8"]]
+ 00bf2fcc ["INT_ADD", "register:40f0:8", ["const:bf2fcc:8", "const:4:8"]]
~~~


<a id="compare-3f19e349dfeaa8b6f68f5ab7abddf633"></a>

### [`00bf2f68`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf2/00bf2f68.md) → [`00bf3004`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf3004.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6__initEPKwm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`00440ec0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`006d76a0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d76a0.md) [`00c57e90`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57f40`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00440f00`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`006d76f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d76f8.md) [`00c57f60`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58010`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf2fd4 ["INT_ADD", "register:40f0:8", ["const:bf2fd4:8", "const:4:8"]]
+ 00bf3070 ["INT_ADD", "register:40f0:8", ["const:bf3070:8", "const:4:8"]]
- 00bf2ff4 ["INT_ADD", "register:40f0:8", ["const:bf2ff4:8", "const:4:8"]]
+ 00bf3090 ["INT_ADD", "register:40f0:8", ["const:bf3090:8", "const:4:8"]]
- 00bf3014 ["INT_ADD", "register:40f0:8", ["const:bf3014:8", "const:4:8"]]
+ 00bf30b0 ["INT_ADD", "register:40f0:8", ["const:bf30b0:8", "const:4:8"]]
~~~


<a id="compare-85024da8d79d93a39289e7fd76c133e9"></a>

### [`00bf301c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf3/00bf301c.md) → [`00bf30b8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf30b8.md) _ZNKSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE2atEm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00bf28d8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf2/00bf28d8.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00bf2974`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2974.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf3060 ["INT_ADD", "register:40f0:8", ["const:bf3060:8", "const:4:8"]]
+ 00bf30fc ["INT_ADD", "register:40f0:8", ["const:bf30fc:8", "const:4:8"]]
~~~


<a id="compare-2be47a5f69a0598de3d20b14032f6dbf"></a>

### [`00bf3064`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf3/00bf3064.md) → [`00bf3100`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf3100.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6insertEmPKwm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5e020`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e020.md) · 呼出先 3件 [`00bf28d8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf2/00bf28d8.md) [`00c57f40`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md) [`00c5dff0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dff0.md)
- 新版 呼出元 1件 [`00c5e0f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e0f0.md) · 呼出先 3件 [`00bf2974`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2974.md) [`00c58010`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c5e0c0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e0c0.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf30e8 ["INT_ADD", "register:40f0:8", ["const:bf30e8:8", "const:4:8"]]
+ 00bf3184 ["INT_ADD", "register:40f0:8", ["const:bf3184:8", "const:4:8"]]
- 00bf3130 ["INT_ADD", "register:40f0:8", ["const:bf3130:8", "const:4:8"]]
+ 00bf31cc ["INT_ADD", "register:40f0:8", ["const:bf31cc:8", "const:4:8"]]
- 00bf3140 ["INT_ADD", "register:40f0:8", ["const:bf3140:8", "const:4:8"]]
+ 00bf31dc ["INT_ADD", "register:40f0:8", ["const:bf31dc:8", "const:4:8"]]
~~~


<a id="compare-5c2a9f58ebf9080bf46c45a31567e39d"></a>

### [`00bf3210`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf3/00bf3210.md) → [`00bf32ac`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf32ac.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE7replaceEmmmw

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00bf28d8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf2/00bf28d8.md) [`00c57f40`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md) [`00c5a8a0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a8a0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00bf2974`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2974.md) [`00c58010`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c5a970`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a970.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf32a4 ["INT_ADD", "register:40f0:8", ["const:bf32a4:8", "const:4:8"]]
+ 00bf3340 ["INT_ADD", "register:40f0:8", ["const:bf3340:8", "const:4:8"]]
- 00bf32f8 ["INT_ADD", "register:40f0:8", ["const:bf32f8:8", "const:4:8"]]
+ 00bf3394 ["INT_ADD", "register:40f0:8", ["const:bf3394:8", "const:4:8"]]
- 00bf3394 ["INT_ADD", "register:40f0:8", ["const:bf3394:8", "const:4:8"]]
+ 00bf3430 ["INT_ADD", "register:40f0:8", ["const:bf3430:8", "const:4:8"]]
~~~


<a id="compare-6d3f78dfac105bbb1cdf8787b447d138"></a>

### [`00bf33a0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf3/00bf33a0.md) → [`00bf343c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf343c.md) FUN_00bf343c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 5件 [`00bf3398`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf3/00bf3398.md) [`00bf3720`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf3/00bf3720.md) [`00bf43f4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf4/00bf43f4.md) [`00c2cf94`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2c/00c2cf94.md) [`00c2da28`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2d/00c2da28.md) · 呼出先 2件 [`00c57f40`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md) [`00c5dff0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dff0.md)
- 新版 呼出元 5件 [`00bf3434`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf3434.md) [`00bf37bc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf37bc.md) [`00bf4490`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf4490.md) [`00c2d030`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2d/00c2d030.md) [`00c2dac4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2d/00c2dac4.md) · 呼出先 2件 [`00c58010`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c5e0c0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e0c0.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf3408 ["INT_ADD", "register:40f0:8", ["const:bf3408:8", "const:4:8"]]
+ 00bf34a4 ["INT_ADD", "register:40f0:8", ["const:bf34a4:8", "const:4:8"]]
- 00bf3430 ["INT_ADD", "register:40f0:8", ["const:bf3430:8", "const:4:8"]]
+ 00bf34cc ["INT_ADD", "register:40f0:8", ["const:bf34cc:8", "const:4:8"]]
~~~


<a id="compare-892dfb7c77ad45fbf04c68b3b274d194"></a>

### [`00bf3468`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf3/00bf3468.md) → [`00bf3504`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf3504.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE7reserveEm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`006d76a0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d76a0.md) [`00bf3504`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf3/00bf3504.md)
- 新版 呼出元 0件  · 呼出先 2件 [`006d76f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d76f8.md) [`00bf35a0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf35a0.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf3500 ["INT_ADD", "register:40f0:8", ["const:bf3500:8", "const:4:8"]]
+ 00bf359c ["INT_ADD", "register:40f0:8", ["const:bf359c:8", "const:4:8"]]
~~~


<a id="compare-96f0ac7c3b53557326dcb576262f3473"></a>

### [`00bf3504`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf3/00bf3504.md) → [`00bf35a0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf35a0.md) FUN_00bf35a0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00bf3468`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf3/00bf3468.md) · 呼出先 4件 [`00440ec0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00c57e90`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57f40`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md)
- 新版 呼出元 1件 [`00bf3504`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf3504.md) · 呼出先 4件 [`00440f00`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00c57f60`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf3574 ["INT_ADD", "register:40f0:8", ["const:bf3574:8", "const:4:8"]]
+ 00bf3610 ["INT_ADD", "register:40f0:8", ["const:bf3610:8", "const:4:8"]]
- 00bf35a0 ["INT_ADD", "register:40f0:8", ["const:bf35a0:8", "const:4:8"]]
+ 00bf363c ["INT_ADD", "register:40f0:8", ["const:bf363c:8", "const:4:8"]]
- 00bf35c4 ["INT_ADD", "register:40f0:8", ["const:bf35c4:8", "const:4:8"]]
+ 00bf3660 ["INT_ADD", "register:40f0:8", ["const:bf3660:8", "const:4:8"]]
~~~


<a id="compare-636888f0ed12aa95789c8d55f004c3ed"></a>

### [`00bf3648`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf3/00bf3648.md) → [`00bf36e4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf36e4.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6appendEPKwm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5a8b0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a8b0.md) · 呼出先 2件 [`00c57f40`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md) [`00c5dff0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dff0.md)
- 新版 呼出元 1件 [`00c5a980`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a980.md) · 呼出先 2件 [`00c58010`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c5e0c0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e0c0.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf36bc ["INT_ADD", "register:40f0:8", ["const:bf36bc:8", "const:4:8"]]
+ 00bf3758 ["INT_ADD", "register:40f0:8", ["const:bf3758:8", "const:4:8"]]
- 00bf36e4 ["INT_ADD", "register:40f0:8", ["const:bf36e4:8", "const:4:8"]]
+ 00bf3780 ["INT_ADD", "register:40f0:8", ["const:bf3780:8", "const:4:8"]]
~~~


<a id="compare-455e6babb208e4d1f54603769e12901e"></a>

### [`00bf3720`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf3/00bf3720.md) → [`00bf37bc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf37bc.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6assignERKS5_mm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00bf28d8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf2/00bf28d8.md) [`00bf33a0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf3/00bf33a0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00bf2974`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2974.md) [`00bf343c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf343c.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf3770 ["INT_ADD", "register:40f0:8", ["const:bf3770:8", "const:4:8"]]
+ 00bf380c ["INT_ADD", "register:40f0:8", ["const:bf380c:8", "const:4:8"]]
~~~


<a id="compare-991b3359de96003759ce081c27b0ee75"></a>

### [`00bf3774`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf3/00bf3774.md) → [`00bf3810`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf3810.md) _ZNKSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE4copyEPwmm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00bf28d8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf2/00bf28d8.md) [`00c57f40`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00bf2974`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2974.md) [`00c58010`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf37cc ["INT_ADD", "register:40f0:8", ["const:bf37cc:8", "const:4:8"]]
+ 00bf3868 ["INT_ADD", "register:40f0:8", ["const:bf3868:8", "const:4:8"]]
- 00bf37e4 ["INT_ADD", "register:40f0:8", ["const:bf37e4:8", "const:4:8"]]
+ 00bf3880 ["INT_ADD", "register:40f0:8", ["const:bf3880:8", "const:4:8"]]
~~~


<a id="compare-7557e8e867691d0c3498eb7782f83bdd"></a>

### [`00bf37e8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf3/00bf37e8.md) → [`00bf3884`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf3884.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEC2ERKS5_mmRKS4_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5a910`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a910.md) · 呼出先 5件 [`00440ec0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`006d76a0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d76a0.md) [`00bf28d8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf2/00bf28d8.md) [`00c57e90`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57f40`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md)
- 新版 呼出元 1件 [`00c5a9e0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a9e0.md) · 呼出先 5件 [`00440f00`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`006d76f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d76f8.md) [`00bf2974`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2974.md) [`00c57f60`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58010`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf3888 ["INT_ADD", "register:40f0:8", ["const:bf3888:8", "const:4:8"]]
+ 00bf3924 ["INT_ADD", "register:40f0:8", ["const:bf3924:8", "const:4:8"]]
- 00bf38a8 ["INT_ADD", "register:40f0:8", ["const:bf38a8:8", "const:4:8"]]
+ 00bf3944 ["INT_ADD", "register:40f0:8", ["const:bf3944:8", "const:4:8"]]
- 00bf38cc ["INT_ADD", "register:40f0:8", ["const:bf38cc:8", "const:4:8"]]
+ 00bf3968 ["INT_ADD", "register:40f0:8", ["const:bf3968:8", "const:4:8"]]
~~~


<a id="compare-589e43a1e4f39c900ae221fb4c05fe3d"></a>

### [`00bf38dc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf3/00bf38dc.md) → [`00bf3978`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf3978.md) _ZNKSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE4findEwm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c58450`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58450.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58520`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58520.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf3924 ["INT_ADD", "register:40f0:8", ["const:bf3924:8", "const:4:8"]]
+ 00bf39c0 ["INT_ADD", "register:40f0:8", ["const:bf39c0:8", "const:4:8"]]
~~~


<a id="compare-4c9921a083b34114fde1be692f69219d"></a>

### [`00bf3950`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf3/00bf3950.md) → [`00bf39ec`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf39ec.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6__initEmw

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00440ec0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`006d76a0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d76a0.md) [`00c57e90`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00440f00`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`006d76f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d76f8.md) [`00c57f60`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf39bc ["INT_ADD", "register:40f0:8", ["const:bf39bc:8", "const:4:8"]]
+ 00bf3a58 ["INT_ADD", "register:40f0:8", ["const:bf3a58:8", "const:4:8"]]
- 00bf3a38 ["INT_ADD", "register:40f0:8", ["const:bf3a38:8", "const:4:8"]]
+ 00bf3ad4 ["INT_ADD", "register:40f0:8", ["const:bf3ad4:8", "const:4:8"]]
- 00bf3a3c ["INT_ADD", "register:40f0:8", ["const:bf3a3c:8", "const:4:8"]]
+ 00bf3ad8 ["INT_ADD", "register:40f0:8", ["const:bf3ad8:8", "const:4:8"]]
~~~


<a id="compare-87936134184b2efe6a81a8b03c91fa47"></a>

### [`00bf3a40`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf3/00bf3a40.md) → [`00bf3adc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf3adc.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6insertEmPKw

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5e000`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e000.md) [`00c5e020`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e020.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5e0d0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e0d0.md) [`00c5e0f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e0f0.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf3a64 ["INT_ADD", "register:40f0:8", ["const:bf3a64:8", "const:4:8"]]
+ 00bf3b00 ["INT_ADD", "register:40f0:8", ["const:bf3b00:8", "const:4:8"]]
~~~


<a id="compare-ff4fdec3be8d0c2cad1afda359c8c90d"></a>

### [`00bf3a8c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf3/00bf3a8c.md) → [`00bf3b28`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf3b28.md) _ZNKSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE12find_last_ofEPKwmm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c58450`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58450.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58520`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58520.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf3af4 ["INT_ADD", "register:40f0:8", ["const:bf3af4:8", "const:4:8"]]
+ 00bf3b90 ["INT_ADD", "register:40f0:8", ["const:bf3b90:8", "const:4:8"]]
~~~


<a id="compare-2e027aa5db3f7d20063b742616f79233"></a>

### [`00bf3b28`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf3/00bf3b28.md) → [`00bf3bc4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf3bc4.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE9__grow_byEmmmmmm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5a8a0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a8a0.md) · 呼出先 5件 [`00440ec0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`006d76a0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d76a0.md) [`00c57e90`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57f40`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md)
- 新版 呼出元 1件 [`00c5a970`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a970.md) · 呼出先 5件 [`00440f00`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`006d76f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d76f8.md) [`00c57f60`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf3bdc ["INT_ADD", "register:40f0:8", ["const:bf3bdc:8", "const:4:8"]]
+ 00bf3c78 ["INT_ADD", "register:40f0:8", ["const:bf3c78:8", "const:4:8"]]
- 00bf3bf8 ["INT_ADD", "register:40f0:8", ["const:bf3bf8:8", "const:4:8"]]
+ 00bf3c94 ["INT_ADD", "register:40f0:8", ["const:bf3c94:8", "const:4:8"]]
- 00bf3c1c ["INT_ADD", "register:40f0:8", ["const:bf3c1c:8", "const:4:8"]]
+ 00bf3cb8 ["INT_ADD", "register:40f0:8", ["const:bf3cb8:8", "const:4:8"]]
~~~


<a id="compare-7456d9a59f6e74f3f3f3fca459d0ed58"></a>

### [`00bf3c68`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf3/00bf3c68.md) → [`00bf3d04`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf3d04.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE9push_backEw

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5e030`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e030.md) · 呼出先 1件 [`00c5a8a0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a8a0.md)
- 新版 呼出元 1件 [`00c5e100`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e100.md) · 呼出先 1件 [`00c5a970`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a970.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf3ccc ["INT_ADD", "register:40f0:8", ["const:bf3ccc:8", "const:4:8"]]
+ 00bf3d68 ["INT_ADD", "register:40f0:8", ["const:bf3d68:8", "const:4:8"]]
~~~


<a id="compare-2b677be4b990d765d7980068f5cbe919"></a>

### [`00bf3d10`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf3/00bf3d10.md) → [`00bf3dac`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf3dac.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6appendEmw

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5a8a0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a8a0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5a970`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a970.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf3d88 ["INT_ADD", "register:40f0:8", ["const:bf3d88:8", "const:4:8"]]
+ 00bf3e24 ["INT_ADD", "register:40f0:8", ["const:bf3e24:8", "const:4:8"]]
~~~


<a id="compare-834af41170384b486ee88a2f20b0c0fd"></a>

### [`00bf3e90`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf3/00bf3e90.md) → [`00bf3f2c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf3f2c.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6assignEmw

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5a8a0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a8a0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5a970`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a970.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf3ef4 ["INT_ADD", "register:40f0:8", ["const:bf3ef4:8", "const:4:8"]]
+ 00bf3f90 ["INT_ADD", "register:40f0:8", ["const:bf3f90:8", "const:4:8"]]
~~~


<a id="compare-823cb64e639a8d2dc1947713c522e644"></a>

### [`00bf3fa8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf3/00bf3fa8.md) → [`00bf4044`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf4044.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE5eraseEmm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00bf28d8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf2/00bf28d8.md) [`00bf4020`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf4/00bf4020.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00bf2974`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2974.md) [`00bf40bc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf40bc.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf3fe0 ["INT_ADD", "register:40f0:8", ["const:bf3fe0:8", "const:4:8"]]
+ 00bf407c ["INT_ADD", "register:40f0:8", ["const:bf407c:8", "const:4:8"]]
- 00bf401c ["INT_ADD", "register:40f0:8", ["const:bf401c:8", "const:4:8"]]
+ 00bf40b8 ["INT_ADD", "register:40f0:8", ["const:bf40b8:8", "const:4:8"]]
~~~


<a id="compare-f9810fd0ab012d7e4753d0b97fb3495f"></a>

### [`00bf4020`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf4/00bf4020.md) → [`00bf40bc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf40bc.md) FUN_00bf40bc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00bf3fa8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf3/00bf3fa8.md) [`00c36110`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c36/00c36110.md) · 呼出先 1件 [`00c57f40`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md)
- 新版 呼出元 2件 [`00bf4044`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf4044.md) [`00c361ac`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c361ac.md) · 呼出先 1件 [`00c58010`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf4080 ["INT_ADD", "register:40f0:8", ["const:bf4080:8", "const:4:8"]]
+ 00bf411c ["INT_ADD", "register:40f0:8", ["const:bf411c:8", "const:4:8"]]
~~~


<a id="compare-7c08dfc0d9f58631edb2d1c1472cadcf"></a>

### [`00bf40bc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf4/00bf40bc.md) → [`00bf4158`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf4158.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6appendERKS5_mm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00bf28d8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf2/00bf28d8.md) [`00c57f40`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md) [`00c5dff0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dff0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00bf2974`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2974.md) [`00c58010`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c5e0c0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e0c0.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf4158 ["INT_ADD", "register:40f0:8", ["const:bf4158:8", "const:4:8"]]
+ 00bf41f4 ["INT_ADD", "register:40f0:8", ["const:bf41f4:8", "const:4:8"]]
- 00bf4184 ["INT_ADD", "register:40f0:8", ["const:bf4184:8", "const:4:8"]]
+ 00bf4220 ["INT_ADD", "register:40f0:8", ["const:bf4220:8", "const:4:8"]]
- 00bf41c4 ["INT_ADD", "register:40f0:8", ["const:bf41c4:8", "const:4:8"]]
+ 00bf4260 ["INT_ADD", "register:40f0:8", ["const:bf4260:8", "const:4:8"]]
~~~


<a id="compare-cf3d6ad6fe2bf2ef3b7e8646de285413"></a>

### [`00bf41c8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf4/00bf41c8.md) → [`00bf4264`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf4264.md) _ZNKSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE7compareEPKw

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00bf28d8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf2/00bf28d8.md) [`00c5e000`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e000.md) [`00c5e040`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e040.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00bf2974`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2974.md) [`00c5e0d0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e0d0.md) [`00c5e110`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e110.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf41e8 ["INT_ADD", "register:40f0:8", ["const:bf41e8:8", "const:4:8"]]
+ 00bf4284 ["INT_ADD", "register:40f0:8", ["const:bf4284:8", "const:4:8"]]
- 00bf422c ["INT_ADD", "register:40f0:8", ["const:bf422c:8", "const:4:8"]]
+ 00bf42c8 ["INT_ADD", "register:40f0:8", ["const:bf42c8:8", "const:4:8"]]
- 00bf4258 ["INT_ADD", "register:40f0:8", ["const:bf4258:8", "const:4:8"]]
+ 00bf42f4 ["INT_ADD", "register:40f0:8", ["const:bf42f4:8", "const:4:8"]]
~~~


<a id="compare-f9315264a5bbe3be50b84d784ec4d488"></a>

### [`00bf4260`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf4/00bf4260.md) → [`00bf42fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf42fc.md) _ZNKSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE7compareEmmPKwm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00bf28d8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf2/00bf28d8.md) [`00c5e040`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e040.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00bf2974`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2974.md) [`00c5e110`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e110.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf42c4 ["INT_ADD", "register:40f0:8", ["const:bf42c4:8", "const:4:8"]]
+ 00bf4360 ["INT_ADD", "register:40f0:8", ["const:bf4360:8", "const:4:8"]]
- 00bf42e8 ["INT_ADD", "register:40f0:8", ["const:bf42e8:8", "const:4:8"]]
+ 00bf4384 ["INT_ADD", "register:40f0:8", ["const:bf4384:8", "const:4:8"]]
~~~


<a id="compare-05ab799e043ed576c38e1ba3aca94ac9"></a>

### [`00bf42ec`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf4/00bf42ec.md) → [`00bf4388`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf4388.md) _ZNKSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE7compareEmmPKw

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00bf28d8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf2/00bf28d8.md) [`00c5e000`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e000.md) [`00c5e040`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e040.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00bf2974`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2974.md) [`00c5e0d0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e0d0.md) [`00c5e110`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e110.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf4318 ["INT_ADD", "register:40f0:8", ["const:bf4318:8", "const:4:8"]]
+ 00bf43b4 ["INT_ADD", "register:40f0:8", ["const:bf43b4:8", "const:4:8"]]
- 00bf4370 ["INT_ADD", "register:40f0:8", ["const:bf4370:8", "const:4:8"]]
+ 00bf440c ["INT_ADD", "register:40f0:8", ["const:bf440c:8", "const:4:8"]]
- 00bf43a0 ["INT_ADD", "register:40f0:8", ["const:bf43a0:8", "const:4:8"]]
+ 00bf443c ["INT_ADD", "register:40f0:8", ["const:bf443c:8", "const:4:8"]]
~~~


<a id="compare-ac71d0e82aab0b261cb74d95014d78e6"></a>

### [`00bf43a4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf4/00bf43a4.md) → [`00bf4440`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf4440.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE2atEm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00bf28d8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf2/00bf28d8.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00bf2974`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2974.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf43e8 ["INT_ADD", "register:40f0:8", ["const:bf43e8:8", "const:4:8"]]
+ 00bf4484 ["INT_ADD", "register:40f0:8", ["const:bf4484:8", "const:4:8"]]
~~~


<a id="compare-264a5c266c79eb338eb954484f56deab"></a>

### [`00bf43f4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf4/00bf43f4.md) → [`00bf4490`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf4490.md) FUN_00bf4490

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00bf43ec`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf4/00bf43ec.md) · 呼出先 2件 [`00bf33a0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf3/00bf33a0.md) [`00c5e000`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e000.md)
- 新版 呼出元 1件 [`00bf4488`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf4488.md) · 呼出先 2件 [`00bf343c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf3/00bf343c.md) [`00c5e0d0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e0d0.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf4410 ["INT_ADD", "register:40f0:8", ["const:bf4410:8", "const:4:8"]]
+ 00bf44ac ["INT_ADD", "register:40f0:8", ["const:bf44ac:8", "const:4:8"]]
~~~


<a id="compare-473d612f815f44239de3b5fe12e52172"></a>

### [`00bf4430`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf4/00bf4430.md) → [`00bf44cc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf44cc.md) _ZNKSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE4findEPKwmm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c58450`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58450.md) [`00c5e040`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e040.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58520`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58520.md) [`00c5e110`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e110.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf44dc ["INT_ADD", "register:40f0:8", ["const:bf44dc:8", "const:4:8"]]
+ 00bf4578 ["INT_ADD", "register:40f0:8", ["const:bf4578:8", "const:4:8"]]
- 00bf44f0 ["INT_ADD", "register:40f0:8", ["const:bf44f0:8", "const:4:8"]]
+ 00bf458c ["INT_ADD", "register:40f0:8", ["const:bf458c:8", "const:4:8"]]
~~~


<a id="compare-40ee624b121cfef6069a19cdfda35c27"></a>

### [`00bf4620`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf4/00bf4620.md) → [`00bf46bc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf46bc.md) FUN_00bf46bc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00bf45c8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf4/00bf45c8.md) · 呼出先 5件 [`00440ec0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`006d76a0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d76a0.md) [`00c57e90`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57f40`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md) [`00c58000`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`00bf4664`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf4664.md) · 呼出先 5件 [`00440f00`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`006d76f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d76f8.md) [`00c57f60`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58010`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580d0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf4660 ["INT_ADD", "register:40f0:8", ["const:bf4660:8", "const:4:8"]]
+ 00bf46fc ["INT_ADD", "register:40f0:8", ["const:bf46fc:8", "const:4:8"]]
- 00bf46a8 ["INT_ADD", "register:40f0:8", ["const:bf46a8:8", "const:4:8"]]
+ 00bf4744 ["INT_ADD", "register:40f0:8", ["const:bf4744:8", "const:4:8"]]
- 00bf46b8 ["INT_ADD", "register:40f0:8", ["const:bf46b8:8", "const:4:8"]]
+ 00bf4754 ["INT_ADD", "register:40f0:8", ["const:bf4754:8", "const:4:8"]]
~~~


<a id="compare-a7731514f9f052687d3f210388427ee5"></a>

### [`00bf46f4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf4/00bf46f4.md) → [`00bf4790`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf4790.md) FUN_00bf4790

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00bf45c8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf4/00bf45c8.md) · 呼出先 2件 [`00c57f40`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md) [`00c5dff0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dff0.md)
- 新版 呼出元 1件 [`00bf4664`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf4664.md) · 呼出先 2件 [`00c58010`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c5e0c0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e0c0.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf473c ["INT_ADD", "register:40f0:8", ["const:bf473c:8", "const:4:8"]]
+ 00bf47d8 ["INT_ADD", "register:40f0:8", ["const:bf47d8:8", "const:4:8"]]
- 00bf4768 ["INT_ADD", "register:40f0:8", ["const:bf4768:8", "const:4:8"]]
+ 00bf4804 ["INT_ADD", "register:40f0:8", ["const:bf4804:8", "const:4:8"]]
~~~


<a id="compare-3b941a46efd43c50a303c4c5886b8ec0"></a>

### [`00bf4784`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf4/00bf4784.md) → [`00bf4820`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf4820.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6appendEPKw

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57f40`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md) [`00c5dff0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dff0.md) [`00c5e000`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e000.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c58010`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c5e0c0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e0c0.md) [`00c5e0d0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e0d0.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf47a8 ["INT_ADD", "register:40f0:8", ["const:bf47a8:8", "const:4:8"]]
+ 00bf4844 ["INT_ADD", "register:40f0:8", ["const:bf4844:8", "const:4:8"]]
- 00bf4804 ["INT_ADD", "register:40f0:8", ["const:bf4804:8", "const:4:8"]]
+ 00bf48a0 ["INT_ADD", "register:40f0:8", ["const:bf48a0:8", "const:4:8"]]
- 00bf482c ["INT_ADD", "register:40f0:8", ["const:bf482c:8", "const:4:8"]]
+ 00bf48c8 ["INT_ADD", "register:40f0:8", ["const:bf48c8:8", "const:4:8"]]
~~~


<a id="compare-ab80fb8f3826df8d2b27f1f27ca76781"></a>

### [`00bf486c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf4/00bf486c.md) → [`00bf4908`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf4908.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE7replaceEmmRKS5_mm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00bf28d8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf2/00bf28d8.md) [`00c5dfe0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dfe0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00bf2974`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2974.md) [`00c5e0b0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e0b0.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf48b8 ["INT_ADD", "register:40f0:8", ["const:bf48b8:8", "const:4:8"]]
+ 00bf4954 ["INT_ADD", "register:40f0:8", ["const:bf4954:8", "const:4:8"]]
~~~


<a id="compare-c117367fd99fd25d6a454324d987e5d7"></a>

### [`00bf48bc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf4/00bf48bc.md) → [`00bf4958`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf4958.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6insertENS_11__wrap_iterIPKwEEw

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f40`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md) [`00c5a8a0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a8a0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58010`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c5a970`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a970.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf493c ["INT_ADD", "register:40f0:8", ["const:bf493c:8", "const:4:8"]]
+ 00bf49d8 ["INT_ADD", "register:40f0:8", ["const:bf49d8:8", "const:4:8"]]
- 00bf496c ["INT_ADD", "register:40f0:8", ["const:bf496c:8", "const:4:8"]]
+ 00bf4a08 ["INT_ADD", "register:40f0:8", ["const:bf4a08:8", "const:4:8"]]
~~~


<a id="compare-c1df8998ae745d8db694b7c6e044d9a5"></a>

### [`00bf49c0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf4/00bf49c0.md) → [`00bf4a5c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf4a5c.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6resizeEmw

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5a890`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a890.md) · 呼出先 1件 [`00c5a8a0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a8a0.md)
- 新版 呼出元 1件 [`00c5a960`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a960.md) · 呼出先 1件 [`00c5a970`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a970.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf4a44 ["INT_ADD", "register:40f0:8", ["const:bf4a44:8", "const:4:8"]]
+ 00bf4ae0 ["INT_ADD", "register:40f0:8", ["const:bf4ae0:8", "const:4:8"]]
~~~


<a id="compare-6a1b55a67e6284cdc9c703e4a95df668"></a>

### [`00bf4b20`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf4/00bf4b20.md) → [`00bf4bbc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf4/00bf4bbc.md) _ZNSt6__ndk112basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6insertEmRKS5_mm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00bf28d8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf2/00bf28d8.md) [`00c5e020`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e020.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00bf2974`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2974.md) [`00c5e0f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e0f0.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf4b6c ["INT_ADD", "register:40f0:8", ["const:bf4b6c:8", "const:4:8"]]
+ 00bf4c08 ["INT_ADD", "register:40f0:8", ["const:bf4c08:8", "const:4:8"]]
~~~


<a id="compare-fb765b3c8d9b4a145a787212fc617a7e"></a>

### [`00bf66c8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf6/00bf66c8.md) → [`00bf6764`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf6/00bf6764.md) _ZNSt6__ndk19to_stringEj

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c58790`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58790.md) · 呼出先 4件 [`0043b764`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`00bf8258`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf8/00bf8258.md) [`00c57e90`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c58000`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`00c58860`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58860.md) · 呼出先 4件 [`0043b7a4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00bf82f4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf82f4.md) [`00c57f60`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580d0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf66f0 ["INT_ADD", "register:40f0:8", ["const:bf66f0:8", "const:4:8"]]
+ 00bf678c ["INT_ADD", "register:40f0:8", ["const:bf678c:8", "const:4:8"]]
- 00bf6734 ["INT_ADD", "register:40f0:8", ["const:bf6734:8", "const:4:8"]]
+ 00bf67d0 ["INT_ADD", "register:40f0:8", ["const:bf67d0:8", "const:4:8"]]
- 00bf6760 ["INT_ADD", "register:40f0:8", ["const:bf6760:8", "const:4:8"]]
+ 00bf67fc ["INT_ADD", "register:40f0:8", ["const:bf67fc:8", "const:4:8"]]
~~~


<a id="compare-715c0c0bc5975058da34ddb260076f81"></a>

### [`00bf903c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf9/00bf903c.md) → [`00bf90d8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf90d8.md) _ZNSt6__ndk112system_errorD0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57eb0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5e180`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e180.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f80`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5e250`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e250.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf9050 ["INT_ADD", "register:40f0:8", ["const:bf9050:8", "const:4:8"]]
+ 00bf90ec ["INT_ADD", "register:40f0:8", ["const:bf90ec:8", "const:4:8"]]
~~~


<a id="compare-5078c49435140930c2172a025c8b89bd"></a>

### [`00bf90f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf9/00bf90f0.md) → [`00bf918c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf918c.md) FUN_00bf918c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57eb0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5def0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5def0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f80`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5dfc0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfc0.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf9104 ["INT_ADD", "register:40f0:8", ["const:bf9104:8", "const:4:8"]]
+ 00bf91a0 ["INT_ADD", "register:40f0:8", ["const:bf91a0:8", "const:4:8"]]
~~~


<a id="compare-2ecb8ac81303ef3edf7e09ccaff1e33b"></a>

### [`00bf911c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf9/00bf911c.md) → [`00bf91b8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf91b8.md) FUN_00bf91b8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57eb0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5def0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5def0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f80`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5dfc0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfc0.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf9130 ["INT_ADD", "register:40f0:8", ["const:bf9130:8", "const:4:8"]]
+ 00bf91cc ["INT_ADD", "register:40f0:8", ["const:bf91cc:8", "const:4:8"]]
~~~


<a id="compare-d1d3aad7e52c2c714507a6561eb17991"></a>

### [`00bf9184`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf9/00bf9184.md) → [`00bf9220`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf9220.md) _ZNKSt6__ndk114error_category10equivalentEiRKNS_15error_conditionE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf91a0 ["INT_ADD", "register:40f0:8", ["const:bf91a0:8", "const:4:8"]]
+ 00bf923c ["INT_ADD", "register:40f0:8", ["const:bf923c:8", "const:4:8"]]
~~~


<a id="compare-9e57fe3854631fa8501bbc4d508716c5"></a>

### [`00bf91e4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf9/00bf91e4.md) → [`00bf9280`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf9280.md) _ZNSt6__ndk118condition_variableD2Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c580d0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580d0.md) · 呼出先 1件 [`00c5d620`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d620.md)
- 新版 呼出元 1件 [`00c581a0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581a0.md) · 呼出先 1件 [`00c5d6f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d6f0.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf91f0 ["INT_ADD", "register:40f0:8", ["const:bf91f0:8", "const:4:8"]]
+ 00bf928c ["INT_ADD", "register:40f0:8", ["const:bf928c:8", "const:4:8"]]
~~~


<a id="compare-53089a9917ffcf5fbaac4fb76f1edc7f"></a>

### [`00bf9204`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf9/00bf9204.md) → [`00bf92a0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf92a0.md) _ZNSt6__ndk118condition_variable10notify_oneEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c59110`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59110.md) · 呼出先 1件 [`00c5d630`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d630.md)
- 新版 呼出元 1件 [`00c591e0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c591e0.md) · 呼出先 1件 [`00c5d700`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d700.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf9210 ["INT_ADD", "register:40f0:8", ["const:bf9210:8", "const:4:8"]]
+ 00bf92ac ["INT_ADD", "register:40f0:8", ["const:bf92ac:8", "const:4:8"]]
~~~


<a id="compare-eb17fc33f86bb97a5482c63463814d9e"></a>

### [`00bf9224`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf9/00bf9224.md) → [`00bf92c0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf92c0.md) _ZNSt6__ndk118condition_variable10notify_allEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c58380`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58380.md) · 呼出先 1件 [`00c5e1c0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e1c0.md)
- 新版 呼出元 1件 [`00c58450`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58450.md) · 呼出先 1件 [`00c5e290`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e290.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf9230 ["INT_ADD", "register:40f0:8", ["const:bf9230:8", "const:4:8"]]
+ 00bf92cc ["INT_ADD", "register:40f0:8", ["const:bf92cc:8", "const:4:8"]]
~~~


<a id="compare-2a9172562b51e8cacd8ac4a04ecd2ef6"></a>

### [`00bf9330`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf9/00bf9330.md) → [`00bf93cc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf93cc.md) _ZNSt6__ndk125notify_all_at_thread_exitERNS_18condition_variableENS_11unique_lockINS_5mutexEEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c57e90`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c58100`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58100.md) [`00c58130`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58130.md) [`00c58140`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58140.md) [`00c5e1f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e1f0.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c57f60`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c581d0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581d0.md) [`00c58200`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58200.md) [`00c58210`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58210.md) [`00c5e2c0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e2c0.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf934c ["INT_ADD", "register:40f0:8", ["const:bf934c:8", "const:4:8"]]
+ 00bf93e8 ["INT_ADD", "register:40f0:8", ["const:bf93e8:8", "const:4:8"]]
- 00bf9358 ["INT_ADD", "register:40f0:8", ["const:bf9358:8", "const:4:8"]]
+ 00bf93f4 ["INT_ADD", "register:40f0:8", ["const:bf93f4:8", "const:4:8"]]
- 00bf9364 ["INT_ADD", "register:40f0:8", ["const:bf9364:8", "const:4:8"]]
+ 00bf9400 ["INT_ADD", "register:40f0:8", ["const:bf9400:8", "const:4:8"]]
~~~


<a id="compare-3ed71c2bf9eee0990225b4642ce25360"></a>

### [`00bf9640`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf9/00bf9640.md) → [`00bf96dc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf96dc.md) _ZNSt6__ndk112future_errorD0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57eb0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58370`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58370.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f80`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58440`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58440.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf9654 ["INT_ADD", "register:40f0:8", ["const:bf9654:8", "const:4:8"]]
+ 00bf96f0 ["INT_ADD", "register:40f0:8", ["const:bf96f0:8", "const:4:8"]]
~~~


<a id="compare-5342cd89a1fa2b884aadbd76c22246c0"></a>

### [`00bf967c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf9/00bf967c.md) → [`00bf9718`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf9718.md) _ZNSt6__ndk117__assoc_sub_state9set_valueEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c58550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58550.md) · 呼出先 5件 [`0045a6d4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0045a/0045a6d4.md) [`00c580e0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580e0.md) [`00c580f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580f0.md) [`00c582f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582f0.md) [`00c58380`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58380.md)
- 新版 呼出元 1件 [`00c58620`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58620.md) · 呼出先 5件 [`0045a714`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0045a/0045a714.md) [`00c581b0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581b0.md) [`00c581c0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581c0.md) [`00c583c0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583c0.md) [`00c58450`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58450.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf9698 ["INT_ADD", "register:40f0:8", ["const:bf9698:8", "const:4:8"]]
+ 00bf9734 ["INT_ADD", "register:40f0:8", ["const:bf9734:8", "const:4:8"]]
- 00bf96b0 ["INT_ADD", "register:40f0:8", ["const:bf96b0:8", "const:4:8"]]
+ 00bf974c ["INT_ADD", "register:40f0:8", ["const:bf974c:8", "const:4:8"]]
- 00bf96cc ["INT_ADD", "register:40f0:8", ["const:bf96cc:8", "const:4:8"]]
+ 00bf9768 ["INT_ADD", "register:40f0:8", ["const:bf9768:8", "const:4:8"]]
~~~


<a id="compare-a58e3cfea5e610efec48189d890683a7"></a>

### [`00bf9708`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf9/00bf9708.md) → [`00bf97a4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf97a4.md) _ZNSt6__ndk117__assoc_sub_state24set_value_at_thread_exitEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5e220`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e220.md) · 呼出先 7件 [`0045a6d4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0045a/0045a6d4.md) [`00c580e0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580e0.md) [`00c580f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580f0.md) [`00c58130`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58130.md) [`00c582f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582f0.md)
- 新版 呼出元 1件 [`00c5e2f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e2f0.md) · 呼出先 7件 [`0045a714`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0045a/0045a714.md) [`00c581b0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581b0.md) [`00c581c0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581c0.md) [`00c58200`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58200.md) [`00c583c0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583c0.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf9724 ["INT_ADD", "register:40f0:8", ["const:bf9724:8", "const:4:8"]]
+ 00bf97c0 ["INT_ADD", "register:40f0:8", ["const:bf97c0:8", "const:4:8"]]
- 00bf973c ["INT_ADD", "register:40f0:8", ["const:bf973c:8", "const:4:8"]]
+ 00bf97d8 ["INT_ADD", "register:40f0:8", ["const:bf97d8:8", "const:4:8"]]
- 00bf9750 ["INT_ADD", "register:40f0:8", ["const:bf9750:8", "const:4:8"]]
+ 00bf97ec ["INT_ADD", "register:40f0:8", ["const:bf97ec:8", "const:4:8"]]
~~~


<a id="compare-5c3a182b4293c3913e1e94181faf8dbb"></a>

### [`00bf979c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf9/00bf979c.md) → [`00bf9838`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf9838.md) _ZNSt6__ndk117__assoc_sub_state13set_exceptionESt13exception_ptr

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c58360`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58360.md) · 呼出先 6件 [`0045a6d4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0045a/0045a6d4.md) [`00c580e0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580e0.md) [`00c580f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580f0.md) [`00c582f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582f0.md) [`00c58380`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58380.md)
- 新版 呼出元 1件 [`00c58430`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58430.md) · 呼出先 6件 [`0045a714`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0045a/0045a714.md) [`00c581b0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581b0.md) [`00c581c0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581c0.md) [`00c583c0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583c0.md) [`00c58450`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58450.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf97c0 ["INT_ADD", "register:40f0:8", ["const:bf97c0:8", "const:4:8"]]
+ 00bf985c ["INT_ADD", "register:40f0:8", ["const:bf985c:8", "const:4:8"]]
- 00bf97dc ["INT_ADD", "register:40f0:8", ["const:bf97dc:8", "const:4:8"]]
+ 00bf9878 ["INT_ADD", "register:40f0:8", ["const:bf9878:8", "const:4:8"]]
- 00bf97ec ["INT_ADD", "register:40f0:8", ["const:bf97ec:8", "const:4:8"]]
+ 00bf9888 ["INT_ADD", "register:40f0:8", ["const:bf9888:8", "const:4:8"]]
~~~


<a id="compare-580b1fa2493b81d6ad6b68eebfaced80"></a>

### [`00bf9840`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf9/00bf9840.md) → [`00bf98dc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf98dc.md) _ZNSt6__ndk117__assoc_sub_state28set_exception_at_thread_exitESt13exception_ptr

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5e240`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e240.md) · 呼出先 8件 [`0045a6d4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0045a/0045a6d4.md) [`00c580e0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580e0.md) [`00c580f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580f0.md) [`00c58130`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58130.md) [`00c582f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582f0.md)
- 新版 呼出元 1件 [`00c5e310`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e310.md) · 呼出先 8件 [`0045a714`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0045a/0045a714.md) [`00c581b0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581b0.md) [`00c581c0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581c0.md) [`00c58200`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58200.md) [`00c583c0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583c0.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf9864 ["INT_ADD", "register:40f0:8", ["const:bf9864:8", "const:4:8"]]
+ 00bf9900 ["INT_ADD", "register:40f0:8", ["const:bf9900:8", "const:4:8"]]
- 00bf9880 ["INT_ADD", "register:40f0:8", ["const:bf9880:8", "const:4:8"]]
+ 00bf991c ["INT_ADD", "register:40f0:8", ["const:bf991c:8", "const:4:8"]]
- 00bf9890 ["INT_ADD", "register:40f0:8", ["const:bf9890:8", "const:4:8"]]
+ 00bf992c ["INT_ADD", "register:40f0:8", ["const:bf992c:8", "const:4:8"]]
~~~


<a id="compare-72a9f08d26e71e16b5f006996aa4ecbf"></a>

### [`00bf98e4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf9/00bf98e4.md) → [`00bf9980`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf9980.md) _ZNSt6__ndk117__assoc_sub_state12__make_readyEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5e250`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e250.md) · 呼出先 3件 [`00c580e0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580e0.md) [`00c580f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580f0.md) [`00c58380`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58380.md)
- 新版 呼出元 1件 [`00c5e320`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e320.md) · 呼出先 3件 [`00c581b0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581b0.md) [`00c581c0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581c0.md) [`00c58450`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58450.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf98fc ["INT_ADD", "register:40f0:8", ["const:bf98fc:8", "const:4:8"]]
+ 00bf9998 ["INT_ADD", "register:40f0:8", ["const:bf9998:8", "const:4:8"]]
- 00bf9910 ["INT_ADD", "register:40f0:8", ["const:bf9910:8", "const:4:8"]]
+ 00bf99ac ["INT_ADD", "register:40f0:8", ["const:bf99ac:8", "const:4:8"]]
~~~


<a id="compare-3b528f41b70bdfa32ca51717170e9647"></a>

### [`00bf9928`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf9/00bf9928.md) → [`00bf99c4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf99c4.md) _ZNSt6__ndk117__assoc_sub_state4copyEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e260`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e260.md) · 呼出先 7件 [`00c53f5c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c580e0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580e0.md) [`00c580f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580f0.md) [`00c582f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582f0.md) [`00c58480`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58480.md)
- 新版 呼出元 1件 [`00c5e330`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e330.md) · 呼出先 7件 [`00c53ffc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c581b0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581b0.md) [`00c581c0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581c0.md) [`00c583c0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583c0.md) [`00c58550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58550.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf9954 ["INT_ADD", "register:40f0:8", ["const:bf9954:8", "const:4:8"]]
+ 00bf99f0 ["INT_ADD", "register:40f0:8", ["const:bf99f0:8", "const:4:8"]]
- 00bf996c ["INT_ADD", "register:40f0:8", ["const:bf996c:8", "const:4:8"]]
+ 00bf9a08 ["INT_ADD", "register:40f0:8", ["const:bf9a08:8", "const:4:8"]]
- 00bf9988 ["INT_ADD", "register:40f0:8", ["const:bf9988:8", "const:4:8"]]
+ 00bf9a24 ["INT_ADD", "register:40f0:8", ["const:bf9a24:8", "const:4:8"]]
~~~


<a id="compare-720e2ee3264c1b80dcb2218c37ef44ce"></a>

### [`00bf9aa0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf9/00bf9aa0.md) → [`00bf9b3c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf9b3c.md) _ZNSt6__ndk117__assoc_sub_state4waitEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c58530`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58530.md) · 呼出先 3件 [`00c580e0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580e0.md) [`00c580f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580f0.md) [`00c58480`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58480.md)
- 新版 呼出元 1件 [`00c58600`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58600.md) · 呼出先 3件 [`00c581b0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581b0.md) [`00c581c0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581c0.md) [`00c58550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58550.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf9acc ["INT_ADD", "register:40f0:8", ["const:bf9acc:8", "const:4:8"]]
+ 00bf9b68 ["INT_ADD", "register:40f0:8", ["const:bf9b68:8", "const:4:8"]]
- 00bf9ae4 ["INT_ADD", "register:40f0:8", ["const:bf9ae4:8", "const:4:8"]]
+ 00bf9b80 ["INT_ADD", "register:40f0:8", ["const:bf9b80:8", "const:4:8"]]
- 00bf9afc ["INT_ADD", "register:40f0:8", ["const:bf9afc:8", "const:4:8"]]
+ 00bf9b98 ["INT_ADD", "register:40f0:8", ["const:bf9b98:8", "const:4:8"]]
~~~


<a id="compare-a69d018f9c8051ab0bf436dc7680b2c2"></a>

### [`00bf9b44`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf9/00bf9b44.md) → [`00bf9be0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf9be0.md) _ZNSt6__ndk117__assoc_sub_state9__executeEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`0045a6d4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0045a/0045a6d4.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0045a714`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0045a/0045a714.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf9b54 ["INT_ADD", "register:40f0:8", ["const:bf9b54:8", "const:4:8"]]
+ 00bf9bf0 ["INT_ADD", "register:40f0:8", ["const:bf9bf0:8", "const:4:8"]]
~~~


<a id="compare-ebc2ac804caba53fdf2742643dcb1d76"></a>

### [`00bf9b58`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf9/00bf9b58.md) → [`00bf9bf4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf9bf4.md) _ZNSt6__ndk16futureIvEC1EPNS_17__assoc_sub_stateE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c58520`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58520.md) · 呼出先 4件 [`0045a6d4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0045a/0045a6d4.md) [`00c53cd0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c580e0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580e0.md) [`00c580f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580f0.md)
- 新版 呼出元 1件 [`00c585f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c585f0.md) · 呼出先 4件 [`0045a714`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0045a/0045a714.md) [`00c53d70`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c581b0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581b0.md) [`00c581c0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581c0.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf9b74 ["INT_ADD", "register:40f0:8", ["const:bf9b74:8", "const:4:8"]]
+ 00bf9c10 ["INT_ADD", "register:40f0:8", ["const:bf9c10:8", "const:4:8"]]
- 00bf9b88 ["INT_ADD", "register:40f0:8", ["const:bf9b88:8", "const:4:8"]]
+ 00bf9c24 ["INT_ADD", "register:40f0:8", ["const:bf9c24:8", "const:4:8"]]
- 00bf9bac ["INT_ADD", "register:40f0:8", ["const:bf9bac:8", "const:4:8"]]
+ 00bf9c48 ["INT_ADD", "register:40f0:8", ["const:bf9c48:8", "const:4:8"]]
~~~


<a id="compare-cc8b3d4fb7ae34bba46348cc196b490e"></a>

### [`00bf9bc4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf9/00bf9bc4.md) → [`00bf9c60`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf9c60.md) _ZNSt6__ndk16futureIvED1Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c584e0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c584e0.md) · 呼出先 1件 [`00c53d00`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 1件 [`00c585b0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c585b0.md) · 呼出先 1件 [`00c53da0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf9be4 ["INT_ADD", "register:40f0:8", ["const:bf9be4:8", "const:4:8"]]
+ 00bf9c80 ["INT_ADD", "register:40f0:8", ["const:bf9c80:8", "const:4:8"]]
~~~


<a id="compare-fa382769a7707b13b4d7b8d388da5e7c"></a>

### [`00bf9c18`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf9/00bf9c18.md) → [`00bf9cb4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf9cb4.md) _ZNSt6__ndk16futureIvE3getEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c5e260`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e260.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c5e330`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e330.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf9c34 ["INT_ADD", "register:40f0:8", ["const:bf9c34:8", "const:4:8"]]
+ 00bf9cd0 ["INT_ADD", "register:40f0:8", ["const:bf9cd0:8", "const:4:8"]]
- 00bf9c40 ["INT_ADD", "register:40f0:8", ["const:bf9c40:8", "const:4:8"]]
+ 00bf9cdc ["INT_ADD", "register:40f0:8", ["const:bf9cdc:8", "const:4:8"]]
~~~


<a id="compare-f9565cc95fccc0d425810ca51da8aac0"></a>

### [`00bf9e8c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf9/00bf9e8c.md) → [`00bf9f28`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf9f28.md) _ZNSt6__ndk17promiseIvE10get_futureEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`0045a6d4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0045a/0045a6d4.md) [`00c58520`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58520.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0045a714`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0045a/0045a714.md) [`00c585f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c585f0.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf9eb0 ["INT_ADD", "register:40f0:8", ["const:bf9eb0:8", "const:4:8"]]
+ 00bf9f4c ["INT_ADD", "register:40f0:8", ["const:bf9f4c:8", "const:4:8"]]
~~~


<a id="compare-42b497aa4d070260fa288ff826126cde"></a>

### [`00bf9eb4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf9/00bf9eb4.md) → [`00bf9f50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf9f50.md) _ZNSt6__ndk17promiseIvE9set_valueEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`0045a6d4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0045a/0045a6d4.md) [`00c58550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58550.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0045a714`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0045a/0045a714.md) [`00c58620`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58620.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf9ed4 ["INT_ADD", "register:40f0:8", ["const:bf9ed4:8", "const:4:8"]]
+ 00bf9f70 ["INT_ADD", "register:40f0:8", ["const:bf9f70:8", "const:4:8"]]
~~~


<a id="compare-68c9211abeca1cdea2501943d00121ae"></a>

### [`00bf9ed8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf9/00bf9ed8.md) → [`00bf9f74`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf9f74.md) _ZNSt6__ndk17promiseIvE13set_exceptionESt13exception_ptr

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`0045a6d4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0045a/0045a6d4.md) [`00c582f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582f0.md) [`00c58360`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58360.md) [`00c584b0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c584b0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0045a714`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0045a/0045a714.md) [`00c583c0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583c0.md) [`00c58430`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58430.md) [`00c58580`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58580.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf9ef4 ["INT_ADD", "register:40f0:8", ["const:bf9ef4:8", "const:4:8"]]
+ 00bf9f90 ["INT_ADD", "register:40f0:8", ["const:bf9f90:8", "const:4:8"]]
- 00bf9f00 ["INT_ADD", "register:40f0:8", ["const:bf9f00:8", "const:4:8"]]
+ 00bf9f9c ["INT_ADD", "register:40f0:8", ["const:bf9f9c:8", "const:4:8"]]
- 00bf9f08 ["INT_ADD", "register:40f0:8", ["const:bf9f08:8", "const:4:8"]]
+ 00bf9fa4 ["INT_ADD", "register:40f0:8", ["const:bf9fa4:8", "const:4:8"]]
~~~


<a id="compare-6c59902444f9ba0cf82d51bab8f9b5b7"></a>

### [`00bf9f38`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf9/00bf9f38.md) → [`00bf9fd4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf9fd4.md) _ZNSt6__ndk17promiseIvE24set_value_at_thread_exitEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`0045a6d4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0045a/0045a6d4.md) [`00c5e220`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e220.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0045a714`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0045a/0045a714.md) [`00c5e2f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e2f0.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf9f58 ["INT_ADD", "register:40f0:8", ["const:bf9f58:8", "const:4:8"]]
+ 00bf9ff4 ["INT_ADD", "register:40f0:8", ["const:bf9ff4:8", "const:4:8"]]
~~~


<a id="compare-82676c1d30432982ea7b0aad206be8dc"></a>

### [`00bf9f5c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf9/00bf9f5c.md) → [`00bf9ff8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf9ff8.md) _ZNSt6__ndk17promiseIvE28set_exception_at_thread_exitESt13exception_ptr

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`0045a6d4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0045a/0045a6d4.md) [`00c582f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582f0.md) [`00c584b0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c584b0.md) [`00c5e240`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e240.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0045a714`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0045a/0045a714.md) [`00c583c0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583c0.md) [`00c58580`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58580.md) [`00c5e310`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e310.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf9f78 ["INT_ADD", "register:40f0:8", ["const:bf9f78:8", "const:4:8"]]
+ 00bfa014 ["INT_ADD", "register:40f0:8", ["const:bfa014:8", "const:4:8"]]
- 00bf9f84 ["INT_ADD", "register:40f0:8", ["const:bf9f84:8", "const:4:8"]]
+ 00bfa020 ["INT_ADD", "register:40f0:8", ["const:bfa020:8", "const:4:8"]]
- 00bf9f8c ["INT_ADD", "register:40f0:8", ["const:bf9f8c:8", "const:4:8"]]
+ 00bfa028 ["INT_ADD", "register:40f0:8", ["const:bfa028:8", "const:4:8"]]
~~~


<a id="compare-476512cc8ae28dbc012005cd71c6bd81"></a>

### [`00bf9fbc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf9/00bf9fbc.md) → [`00bfa058`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa058.md) _ZNSt6__ndk113shared_futureIvED1Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c53d00`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c53da0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bf9fdc ["INT_ADD", "register:40f0:8", ["const:bf9fdc:8", "const:4:8"]]
+ 00bfa078 ["INT_ADD", "register:40f0:8", ["const:bfa078:8", "const:4:8"]]
~~~


<a id="compare-279147a0ae6f7584e859d1a380038e44"></a>

### [`00bfa010`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa010.md) → [`00bfa0ac`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa0ac.md) _ZNSt6__ndk113shared_futureIvEaSERKS1_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53cd0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53d70`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bfa03c ["INT_ADD", "register:40f0:8", ["const:bfa03c:8", "const:4:8"]]
+ 00bfa0d8 ["INT_ADD", "register:40f0:8", ["const:bfa0d8:8", "const:4:8"]]
- 00bfa050 ["INT_ADD", "register:40f0:8", ["const:bfa050:8", "const:4:8"]]
+ 00bfa0ec ["INT_ADD", "register:40f0:8", ["const:bfa0ec:8", "const:4:8"]]
- 00bfa064 ["INT_ADD", "register:40f0:8", ["const:bfa064:8", "const:4:8"]]
+ 00bfa100 ["INT_ADD", "register:40f0:8", ["const:bfa100:8", "const:4:8"]]
~~~


<a id="compare-e6cfcd897e9e400468300c959affc979"></a>

### [`00bfa0e4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa0e4.md) → [`00bfa180`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa180.md) FUN_00bfa180

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57eb0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5def0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5def0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f80`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5dfc0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfc0.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bfa0f8 ["INT_ADD", "register:40f0:8", ["const:bfa0f8:8", "const:4:8"]]
+ 00bfa194 ["INT_ADD", "register:40f0:8", ["const:bfa194:8", "const:4:8"]]
~~~


<a id="compare-971d012776bb25562fedb806da48076d"></a>

### [`00bfa110`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa110.md) → [`00bfa1ac`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa1ac.md) _ZNSt6__ndk15mutexD1Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 6件 [`0043ae78`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae78.md) [`004524e8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00452/004524e8.md) [`00452c54`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00452/00452c54.md) [`0048baf0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048b/0048baf0.md) [`0058f6b0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0058f/0058f6b0.md) · 呼出先 1件 [`00c5b690`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b690.md)
- 新版 呼出元 6件 [`0043aeb8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb8.md) [`00452528`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00452/00452528.md) [`00452c94`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00452/00452c94.md) [`0048bb30`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048b/0048bb30.md) [`0058f6f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058f6f0.md) · 呼出先 1件 [`00c5b760`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b760.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bfa11c ["INT_ADD", "register:40f0:8", ["const:bfa11c:8", "const:4:8"]]
+ 00bfa1b8 ["INT_ADD", "register:40f0:8", ["const:bfa1b8:8", "const:4:8"]]
~~~


<a id="compare-99e59b98b506917e217f4d6246f0c248"></a>

### [`00bfa15c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa15c.md) → [`00bfa1f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa1f8.md) _ZNSt6__ndk15mutex8try_lockEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5e270`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e270.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5e340`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e340.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bfa168 ["INT_ADD", "register:40f0:8", ["const:bfa168:8", "const:4:8"]]
+ 00bfa204 ["INT_ADD", "register:40f0:8", ["const:bfa204:8", "const:4:8"]]
~~~


<a id="compare-5765a5ec5e95538113fc99c523d723f5"></a>

### [`00bfa184`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa184.md) → [`00bfa220`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa220.md) _ZNSt6__ndk15mutex6unlockEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c580f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580f0.md) · 呼出先 1件 [`00c5b6b0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b6b0.md)
- 新版 呼出元 1件 [`00c581c0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581c0.md) · 呼出先 1件 [`00c5b780`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b780.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bfa190 ["INT_ADD", "register:40f0:8", ["const:bfa190:8", "const:4:8"]]
+ 00bfa22c ["INT_ADD", "register:40f0:8", ["const:bfa22c:8", "const:4:8"]]
~~~


<a id="compare-df6b6f28b9a25465a2e2df89e2e1ed0e"></a>

### [`00bfa248`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa248.md) → [`00bfa2e4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa2e4.md) _ZNSt6__ndk115recursive_mutexD1Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5a0d0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0d0.md) · 呼出先 1件 [`00c5b690`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b690.md)
- 新版 呼出元 1件 [`00c5a1a0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a1a0.md) · 呼出先 1件 [`00c5b760`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b760.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bfa254 ["INT_ADD", "register:40f0:8", ["const:bfa254:8", "const:4:8"]]
+ 00bfa2f0 ["INT_ADD", "register:40f0:8", ["const:bfa2f0:8", "const:4:8"]]
~~~


<a id="compare-fb1fa66fca427873d53c7b6b3e4f2e13"></a>

### [`00bfa294`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa294.md) → [`00bfa330`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa330.md) _ZNSt6__ndk115recursive_mutex6unlockEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5a0f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0f0.md) · 呼出先 1件 [`00c5b6b0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b6b0.md)
- 新版 呼出元 1件 [`00c5a1c0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a1c0.md) · 呼出先 1件 [`00c5b780`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b780.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bfa2a0 ["INT_ADD", "register:40f0:8", ["const:bfa2a0:8", "const:4:8"]]
+ 00bfa33c ["INT_ADD", "register:40f0:8", ["const:bfa33c:8", "const:4:8"]]
~~~


<a id="compare-655cc1e771a0e68218b0a2fdc6c6dabb"></a>

### [`00bfa2b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa2b4.md) → [`00bfa350`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa350.md) _ZNSt6__ndk115recursive_mutex8try_lockEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5e270`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e270.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5e340`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e340.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bfa2c0 ["INT_ADD", "register:40f0:8", ["const:bfa2c0:8", "const:4:8"]]
+ 00bfa35c ["INT_ADD", "register:40f0:8", ["const:bfa35c:8", "const:4:8"]]
~~~


<a id="compare-9e0af1983df2d00984fad1b4f06122e6"></a>

### [`00bfa3dc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa3dc.md) → [`00bfa478`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa478.md) _ZNSt6__ndk111timed_mutex8try_lockEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5b6b0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b6b0.md) [`00c5e270`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e270.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5b780`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b780.md) [`00c5e340`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e340.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bfa3f0 ["INT_ADD", "register:40f0:8", ["const:bfa3f0:8", "const:4:8"]]
+ 00bfa48c ["INT_ADD", "register:40f0:8", ["const:bfa48c:8", "const:4:8"]]
- 00bfa41c ["INT_ADD", "register:40f0:8", ["const:bfa41c:8", "const:4:8"]]
+ 00bfa4b8 ["INT_ADD", "register:40f0:8", ["const:bfa4b8:8", "const:4:8"]]
~~~


<a id="compare-c4e87b7c0d471134ad4428fe8580177a"></a>

### [`00bfa5e0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa5e0.md) → [`00bfa67c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa67c.md) _ZNSt6__ndk121recursive_timed_mutex8try_lockEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c58620`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58620.md) [`00c5b6b0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b6b0.md) [`00c5e270`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e270.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c586f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c586f0.md) [`00c5b780`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b780.md) [`00c5e340`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e340.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bfa5f8 ["INT_ADD", "register:40f0:8", ["const:bfa5f8:8", "const:4:8"]]
+ 00bfa694 ["INT_ADD", "register:40f0:8", ["const:bfa694:8", "const:4:8"]]
- 00bfa604 ["INT_ADD", "register:40f0:8", ["const:bfa604:8", "const:4:8"]]
+ 00bfa6a0 ["INT_ADD", "register:40f0:8", ["const:bfa6a0:8", "const:4:8"]]
- 00bfa644 ["INT_ADD", "register:40f0:8", ["const:bfa644:8", "const:4:8"]]
+ 00bfa6e0 ["INT_ADD", "register:40f0:8", ["const:bfa6e0:8", "const:4:8"]]
~~~


<a id="compare-d62bfdb7680f34b204e7b1b079096977"></a>

### [`00bfa6e4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa6e4.md) → [`00bfa780`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa780.md) _ZNSt6__ndk16threadD2Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c58180`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58180.md) · 呼出先 1件 [`00c58020`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58020.md)
- 新版 呼出元 1件 [`00c58250`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58250.md) · 呼出先 1件 [`00c580f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580f0.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bfa700 ["INT_ADD", "register:40f0:8", ["const:bfa700:8", "const:4:8"]]
+ 00bfa79c ["INT_ADD", "register:40f0:8", ["const:bfa79c:8", "const:4:8"]]
~~~


<a id="compare-1a1562e522172e3fb705f4a7be975544"></a>

### [`00bfa798`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa798.md) → [`00bfa834`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa834.md) _ZNSt6__ndk16thread20hardware_concurrencyEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5e290`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e290.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5e360`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e360.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bfa7a8 ["INT_ADD", "register:40f0:8", ["const:bfa7a8:8", "const:4:8"]]
+ 00bfa844 ["INT_ADD", "register:40f0:8", ["const:bfa844:8", "const:4:8"]]
~~~


<a id="compare-9899330386c01a683abecf572704b8bc"></a>

### [`00bfa7c4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa7c4.md) → [`00bfa860`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa860.md) _ZNSt6__ndk111this_thread9sleep_forERKNS_6chrono8durationIxNS_5ratioILl1ELl1000000000EEEEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c58490`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58490.md) · 呼出先 2件 [`00c580c0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580c0.md) [`00c5e2a0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e2a0.md)
- 新版 呼出元 1件 [`00c58560`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58560.md) · 呼出先 2件 [`00c58190`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c5e370`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e370.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bfa818 ["INT_ADD", "register:40f0:8", ["const:bfa818:8", "const:4:8"]]
+ 00bfa8b4 ["INT_ADD", "register:40f0:8", ["const:bfa8b4:8", "const:4:8"]]
- 00bfa824 ["INT_ADD", "register:40f0:8", ["const:bfa824:8", "const:4:8"]]
+ 00bfa8c0 ["INT_ADD", "register:40f0:8", ["const:bfa8c0:8", "const:4:8"]]
~~~


<a id="compare-e708b96c8cd2d57ad54927d4af4f1b9f"></a>

### [`00bfa8fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa8fc.md) → [`00bfa998`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa998.md) FUN_00bfa998

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00bfabf0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfabf0.md) · 呼出先 5件 [`00c53d00`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57eb0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c580f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580f0.md) [`00c58380`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58380.md) [`00c5e250`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e250.md)
- 新版 呼出元 1件 [`00bfac8c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfac8c.md) · 呼出先 5件 [`00c53da0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f80`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c581c0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581c0.md) [`00c58450`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58450.md) [`00c5e320`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e320.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bfa924 ["INT_ADD", "register:40f0:8", ["const:bfa924:8", "const:4:8"]]
+ 00bfa9c0 ["INT_ADD", "register:40f0:8", ["const:bfa9c0:8", "const:4:8"]]
- 00bfa92c ["INT_ADD", "register:40f0:8", ["const:bfa92c:8", "const:4:8"]]
+ 00bfa9c8 ["INT_ADD", "register:40f0:8", ["const:bfa9c8:8", "const:4:8"]]
- 00bfa954 ["INT_ADD", "register:40f0:8", ["const:bfa954:8", "const:4:8"]]
+ 00bfa9f0 ["INT_ADD", "register:40f0:8", ["const:bfa9f0:8", "const:4:8"]]
~~~


<a id="compare-831eb5e6e80ed6bfe908f53c1271c3bf"></a>

### [`00bfa9c8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa9c8.md) → [`00bfaa64`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfaa64.md) FUN_00bfaa64

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00bfac34`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfac34.md) · 呼出先 4件 [`00bfac4c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfac4c.md) [`00c57e90`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`00bfacd0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfacd0.md) · 呼出先 4件 [`00bface8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bface8.md) [`00c57f60`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bfaa44 ["INT_ADD", "register:40f0:8", ["const:bfaa44:8", "const:4:8"]]
+ 00bfaae0 ["INT_ADD", "register:40f0:8", ["const:bfaae0:8", "const:4:8"]]
- 00bfaa88 ["INT_ADD", "register:40f0:8", ["const:bfaa88:8", "const:4:8"]]
+ 00bfab24 ["INT_ADD", "register:40f0:8", ["const:bfab24:8", "const:4:8"]]
- 00bfaa9c ["INT_ADD", "register:40f0:8", ["const:bfaa9c:8", "const:4:8"]]
+ 00bfab38 ["INT_ADD", "register:40f0:8", ["const:bfab38:8", "const:4:8"]]
~~~


<a id="compare-26522fa960208ee8d4f2c74c2738d3d0"></a>

### [`00bfaac4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfaac4.md) → [`00bfab60`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfab60.md) FUN_00bfab60

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00bfac40`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfac40.md) · 呼出先 5件 [`00bfac64`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfac64.md) [`00c53cd0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c57e90`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`00bfacdc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfacdc.md) · 呼出先 5件 [`00bfad00`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfad00.md) [`00c53d70`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bfab38 ["INT_ADD", "register:40f0:8", ["const:bfab38:8", "const:4:8"]]
+ 00bfabd4 ["INT_ADD", "register:40f0:8", ["const:bfabd4:8", "const:4:8"]]
- 00bfab6c ["INT_ADD", "register:40f0:8", ["const:bfab6c:8", "const:4:8"]]
+ 00bfac08 ["INT_ADD", "register:40f0:8", ["const:bfac08:8", "const:4:8"]]
- 00bfab80 ["INT_ADD", "register:40f0:8", ["const:bfab80:8", "const:4:8"]]
+ 00bfac1c ["INT_ADD", "register:40f0:8", ["const:bfac1c:8", "const:4:8"]]
~~~


<a id="compare-25e7e555e6be83cf896ef208a5435dda"></a>

### [`00bfabb4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfabb4.md) → [`00bfac50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfac50.md) _ZNSt6__ndk115__thread_structC1Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c58100`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58100.md) · 呼出先 1件 [`00c57e90`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`00c581d0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581d0.md) · 呼出先 1件 [`00c57f60`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bfabcc ["INT_ADD", "register:40f0:8", ["const:bfabcc:8", "const:4:8"]]
+ 00bfac68 ["INT_ADD", "register:40f0:8", ["const:bfac68:8", "const:4:8"]]
~~~


<a id="compare-2bbb432faa287affe7cc9baa43ed28ed"></a>

### [`00bfabf0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfabf0.md) → [`00bfac8c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfac8c.md) _ZNSt6__ndk115__thread_structD1Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c58150`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58150.md) · 呼出先 2件 [`00bfa8fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa8fc.md) [`00c57eb0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00c58220`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58220.md) · 呼出先 2件 [`00bfa998`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa998.md) [`00c57f80`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bfac0c ["INT_ADD", "register:40f0:8", ["const:bfac0c:8", "const:4:8"]]
+ 00bfaca8 ["INT_ADD", "register:40f0:8", ["const:bfaca8:8", "const:4:8"]]
~~~


<a id="compare-4d3e5eb3e8839b77c8553f759854bd82"></a>

### [`00bfac7c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfac7c.md) → [`00bfad18`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfad18.md) FUN_00bfad18

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00bfa8c8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa8c8.md) · 呼出先 2件 [`00c57eb0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58150`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58150.md)
- 新版 呼出元 1件 [`00bfa964`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa964.md) · 呼出先 2件 [`00c57f80`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58220`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58220.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bfac98 ["INT_ADD", "register:40f0:8", ["const:bfac98:8", "const:4:8"]]
+ 00bfad34 ["INT_ADD", "register:40f0:8", ["const:bfad34:8", "const:4:8"]]
~~~


<a id="compare-20003a1c7729fa1dcfeba1f37098c86c"></a>

### [`00bfad58`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfad58.md) → [`00bfadf4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfadf4.md) _ZNSt6__ndk113random_deviceD1Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0056078c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00560/0056078c.md) [`00c583d0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c583d0.md) · 呼出先 1件 [`00c597d0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c597d0.md)
- 新版 呼出元 2件 [`005607cc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00560/005607cc.md) [`00c584a0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c584a0.md) · 呼出先 1件 [`00c598a0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c598a0.md)

変更の種類 constant, operands_and_dependencies

~~~diff
- 00bfad68 ["INT_ADD", "register:40f0:8", ["const:bfad68:8", "const:4:8"]]
+ 00bfae04 ["INT_ADD", "register:40f0:8", ["const:bfae04:8", "const:4:8"]]
~~~


