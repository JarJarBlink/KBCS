# v16.0.2 → v16.0.3 · 追加調査 (9)

[一覧の目次](README.md)

<a id="review-a7adcf98dd6dad88db799e835f31aaf2"></a>

### v16.0.2 [`005fb97c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fb/005fb97c.md) FUN_005fb97c

`competing_candidates` [`005f7d30`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005f7/005f7d30.md) [`005fbd2c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fb/005fbd2c.md) [`006ab78c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ab/006ab78c.md) [`007082e8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00708/007082e8.md) [`009d1320`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009d1/009d1320.md) [`009da92c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009da/009da92c.md) [`00a8b47c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a8b/00a8b47c.md) [`00ac4ce4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ac4/00ac4ce4.md)

呼出元 1件 [`005fb480`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fb/005fb480.md) · 呼出先 52件 [`0043bbe4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0043de18`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`0046d7f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`0046dafc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046dafc.md) [`0049f430`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f430.md)

~~~json
{
  "bounds": [
    "005fb480",
    "005fc314",
    "005fb830",
    "005fc6c4"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-a6217753245b81bfeab6b14d3de17e65"></a>

### v16.0.2 [`005fe6ac`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) FUN_005fe6ac

`competing_candidates` [`005fea5c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) [`007082e8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00708/007082e8.md) [`0075ef88`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075e/0075ef88.md) [`0076a1b8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0076a/0076a1b8.md) [`00773cc8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00773/00773cc8.md) [`0094826c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00948/0094826c.md) [`00a1b750`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a1b/00a1b750.md) [`00a48f48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a48/00a48f48.md)

呼出元 2件 [`00700b50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`007efd00`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ef/007efd00.md) · 呼出先 188件 [`0043bb60`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00447f34`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046ca04`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046d4d0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md)

~~~json
{
  "bounds": [
    "005fe31c",
    "00604d08",
    "005fe6cc",
    "006050b8"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-40ac5a385801914052b10824a919e1dd"></a>

### v16.0.2 [`0060502c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00605/0060502c.md) FUN_0060502c

`competing_candidates` [`005fea5c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) [`006053dc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00605/006053dc.md) [`007bea00`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007be/007bea00.md) [`0089f880`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089f/0089f880.md) [`009d1320`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009d1/009d1320.md) [`009d6cf8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009d6/009d6cf8.md) [`00a48f48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a48/00a48f48.md) [`00ad19bc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ad1/00ad19bc.md)

呼出元 6件 [`005fe6ac`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`00605294`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00605/00605294.md) [`006103fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00610/006103fc.md) [`0061456c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00614/0061456c.md) [`006bbcf0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bb/006bbcf0.md) · 呼出先 10件 [`00440f00`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00615950`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00615/00615950.md) [`00802bb0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802bb0.md) [`00802d00`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802d00.md)

~~~json
{
  "bounds": [
    "00604fe4",
    "006051e4",
    "00605394",
    "00605594"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-f20d46a627a3ba8770aa321995394756"></a>

### v16.0.2 [`0060e104`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0060e/0060e104.md) FUN_0060e104

`competing_candidates` [`005fea5c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) [`0060e4b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0060e/0060e4b4.md) [`007082e8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00708/007082e8.md) [`0075ef88`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075e/0075ef88.md) [`00773cc8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00773/00773cc8.md) [`007bea00`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007be/007bea00.md) [`0094826c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00948/0094826c.md) [`00a48f48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a48/00a48f48.md)

呼出元 4件 [`00606b24`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/00606b24.md) [`006103fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00610/006103fc.md) [`006170ec`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00617/006170ec.md) [`00934658`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00934/00934658.md) · 呼出先 37件 [`00442970`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00447f34`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046d4d0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0046dafc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046dafc.md) [`0048ce94`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)

~~~json
{
  "bounds": [
    "0060df44",
    "0060eb90",
    "0060e2f4",
    "0060ef40"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-ac9e622782fd5167059bedee04a74d45"></a>

### v16.0.2 [`00612324`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00612/00612324.md) FUN_00612324

`competing_candidates` [`006126d4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00612/006126d4.md) [`00677e30`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00677/00677e30.md) [`00678cd0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00678/00678cd0.md) [`00679bf0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00679/00679bf0.md) [`006b580c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b5/006b580c.md) [`008f8e78`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f8/008f8e78.md) [`009269d0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00926/009269d0.md) [`00ab77a4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ab7/00ab77a4.md)

呼出元 1件 [`00707f38`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) · 呼出先 22件 [`00467b30`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b30.md) [`00467b6c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467f5c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f5c.md) [`00467f94`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md) [`00468844`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468844.md)

~~~json
{
  "bounds": [
    "00611ea0",
    "0061308c",
    "00612250",
    "0061343c"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-8c885f684bc14fbf6fb573a21a360882"></a>

### v16.0.2 [`00615950`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00615/00615950.md) FUN_00615950

`competing_candidates` [`00615d00`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00615/00615d00.md) [`006cbe7c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006cb/006cbe7c.md) [`006ccf80`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006cc/006ccf80.md) [`0080d868`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080d/0080d868.md) [`00825680`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00825/00825680.md) [`0089f880`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089f/0089f880.md) [`009d1320`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009d1/009d1320.md) [`00a48f48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a48/00a48f48.md)

呼出元 4件 [`0060502c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00605/0060502c.md) [`007cb638`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cb/007cb638.md) [`0089e8d4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) [`00ad6af8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ad6/00ad6af8.md) · 呼出先 12件 [`00440f00`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`008003d0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/008003d0.md) [`00800684`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/00800684.md) [`00802688`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802688.md)

~~~json
{
  "bounds": [
    "00615788",
    "00615bc4",
    "00615b38",
    "00615f74"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-bdde0636674c4e20058727914d43c5cd"></a>

### v16.0.2 [`00616264`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00616/00616264.md) FUN_00616264

`competing_candidates` [`00616614`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00616/00616614.md) [`0061662c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00616/0061662c.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061622c",
    "00616280",
    "006165dc",
    "00616630"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-0b2dd25be89d76d6c6a9223bc1750acb"></a>

### v16.0.2 [`0061627c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00616/0061627c.md) FUN_0061627c

`competing_candidates` [`00616614`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00616/00616614.md) [`0061662c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00616/0061662c.md)

呼出元 1件 [`005fe6ac`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061622c",
    "00616280",
    "006165dc",
    "00616630"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-5543e61580b7b26d6e8e42aec57aca4b"></a>

### v16.0.2 [`006166c8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00616/006166c8.md) FUN_006166c8

`competing_candidates` [`00616a78`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00616/00616a78.md) [`00616a94`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00616/00616a94.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "00616284",
    "006166f0",
    "00616634",
    "00616aa0"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-a32e1b4b01cb247682d427ef2dc9b1d3"></a>

### v16.0.2 [`006166e4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00616/006166e4.md) FUN_006166e4

`competing_candidates` [`00616a78`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00616/00616a78.md) [`00616a94`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00616/00616a94.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "00616284",
    "006166f0",
    "00616634",
    "00616aa0"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-0335359d25909c94d1b04d0df9b46744"></a>

### v16.0.2 [`006168fc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00616/006168fc.md) FUN_006168fc

`competing_candidates` [`00616cac`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00616/00616cac.md) [`00616cc8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00616/00616cc8.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061675c",
    "00616924",
    "00616b0c",
    "00616cd4"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-8784300d6397e44a76543f115df1e91c"></a>

### v16.0.2 [`00616918`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00616/00616918.md) FUN_00616918

`competing_candidates` [`00616cac`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00616/00616cac.md) [`00616cc8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00616/00616cc8.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061675c",
    "00616924",
    "00616b0c",
    "00616cd4"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-d95ba323fd4af9ba4545c02875ce8d05"></a>

### v16.0.2 [`00616e60`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00616/00616e60.md) FUN_00616e60

`competing_candidates` [`00617210`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00617/00617210.md) [`0061722c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00617/0061722c.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "00616990",
    "00616e88",
    "00616d40",
    "00617238"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-11062ec2cf22bd7f6f059a777c3f0579"></a>

### v16.0.2 [`00616e7c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00616/00616e7c.md) FUN_00616e7c

`competing_candidates` [`00617210`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00617/00617210.md) [`0061722c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00617/0061722c.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "00616990",
    "00616e88",
    "00616d40",
    "00617238"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-f2156cfa9659007f7fee365a98425f41"></a>

### v16.0.2 [`00616f18`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00616/00616f18.md) FUN_00616f18

`competing_candidates` [`006172c8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00617/006172c8.md) [`006172e4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00617/006172e4.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "00616ee4",
    "00616f40",
    "00617294",
    "006172f0"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-0ef47f6dda34b2fd0927d3996b574c24"></a>

### v16.0.2 [`00616f34`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00616/00616f34.md) FUN_00616f34

`competing_candidates` [`006172c8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00617/006172c8.md) [`006172e4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00617/006172e4.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "00616ee4",
    "00616f40",
    "00617294",
    "006172f0"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-b6536d77eaf504c5b7b2a22490c3f294"></a>

### v16.0.2 [`00617004`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00617/00617004.md) FUN_00617004

`competing_candidates` [`006173b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00617/006173b4.md) [`006173d0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00617/006173d0.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "00616f9c",
    "0061702c",
    "0061734c",
    "006173dc"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-3ee014d8255eb32213e7cb8769b301b3"></a>

### v16.0.2 [`00617020`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00617/00617020.md) FUN_00617020

`competing_candidates` [`006173b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00617/006173b4.md) [`006173d0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00617/006173d0.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "00616f9c",
    "0061702c",
    "0061734c",
    "006173dc"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-279e5d37c5b357d71a50240e2112aa11"></a>

### v16.0.2 [`00617054`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00617/00617054.md) FUN_00617054

`competing_candidates` [`00617404`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00617/00617404.md) [`00617414`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00617/00617414.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "00617030",
    "00617068",
    "006173e0",
    "00617418"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-dbe11d3b8c4bce7911476764a1a9bfdd"></a>

### v16.0.2 [`00617064`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00617/00617064.md) FUN_00617064

`competing_candidates` [`00617404`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00617/00617404.md) [`00617414`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00617/00617414.md)

呼出元 1件 [`005fe6ac`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) · 呼出先 0件 

~~~json
{
  "bounds": [
    "00617030",
    "00617068",
    "006173e0",
    "00617418"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-4bb30309f0d14157d68b07032f1ca6bf"></a>

### v16.0.2 [`0061706c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00617/0061706c.md) FUN_0061706c

`competing_candidates` [`0061741c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00617/0061741c.md) [`00617420`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00617/00617420.md) [`0061743c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00617/0061743c.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "00617068",
    "00617098",
    "00617418",
    "00617448"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-00756dc4b425701f30de6c6c18c84ee1"></a>

### v16.0.2 [`00617070`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00617/00617070.md) FUN_00617070

`competing_candidates` [`0061741c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00617/0061741c.md) [`00617420`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00617/00617420.md) [`0061743c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00617/0061743c.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "00617068",
    "00617098",
    "00617418",
    "00617448"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-ee44d24097e986eb617ad5a800e99b51"></a>

### v16.0.2 [`0061708c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00617/0061708c.md) FUN_0061708c

`competing_candidates` [`0061741c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00617/0061741c.md) [`00617420`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00617/00617420.md) [`0061743c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00617/0061743c.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "00617068",
    "00617098",
    "00617418",
    "00617448"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-a08d3de6896740fdb88341fe4ccb42da"></a>

### v16.0.2 [`006171c4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00617/006171c4.md) FUN_006171c4

`competing_candidates` [`00617574`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00617/00617574.md) [`00617590`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00617/00617590.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "006170ec",
    "006171ec",
    "0061749c",
    "0061759c"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-9edb2f63a42f1c25fa9e8ae36d88ffad"></a>

### v16.0.2 [`006171e0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00617/006171e0.md) FUN_006171e0

`competing_candidates` [`00617574`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00617/00617574.md) [`00617590`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00617/00617590.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "006170ec",
    "006171ec",
    "0061749c",
    "0061759c"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-684961c3848745f75f631bc4cb9ef691"></a>

### v16.0.2 [`0061817c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00618/0061817c.md) FUN_0061817c

`competing_candidates` [`0061852c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00618/0061852c.md) [`00618548`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00618/00618548.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "00617fd4",
    "006181a4",
    "00618384",
    "00618554"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-894d1d61a20a732d52f4dad33249049b"></a>

### v16.0.2 [`00618198`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00618/00618198.md) FUN_00618198

`competing_candidates` [`0061852c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00618/0061852c.md) [`00618548`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00618/00618548.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "00617fd4",
    "006181a4",
    "00618384",
    "00618554"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-112b1cbf045815cb87e146cd85d4bcd0"></a>

### v16.0.2 [`00618218`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00618/00618218.md) FUN_00618218

`competing_candidates` [`006185c8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00618/006185c8.md) [`006185e4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00618/006185e4.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "00618210",
    "00618240",
    "006185c0",
    "006185f0"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-107fbd16a51e87a467a7473b436e2d29"></a>

### v16.0.2 [`00618234`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00618/00618234.md) FUN_00618234

`competing_candidates` [`006185c8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00618/006185c8.md) [`006185e4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00618/006185e4.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "00618210",
    "00618240",
    "006185c0",
    "006185f0"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-87f928f8f47b43e2fd7bd4d915b4cf2c"></a>

### v16.0.2 [`0061a160`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061a/0061a160.md) FUN_0061a160

`competing_candidates` [`0061a510`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061a/0061a510.md) [`0061a52c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061a/0061a52c.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061a10c",
    "0061a188",
    "0061a4bc",
    "0061a538"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-7c3f0cc8e83c4dc57cc4c33df55b97e2"></a>

### v16.0.2 [`0061a17c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061a/0061a17c.md) FUN_0061a17c

`competing_candidates` [`0061a510`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061a/0061a510.md) [`0061a52c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061a/0061a52c.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061a10c",
    "0061a188",
    "0061a4bc",
    "0061a538"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-e2130bb44a239f0492c20f20c1f1c59f"></a>

### v16.0.2 [`0061caa0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061c/0061caa0.md) FUN_0061caa0

`competing_candidates` [`0061ce50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061c/0061ce50.md) [`0061ce6c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061c/0061ce6c.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061ca58",
    "0061cac8",
    "0061ce08",
    "0061ce78"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-0735b912b4b3e13e66ebb04df2c098a1"></a>

### v16.0.2 [`0061cabc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061c/0061cabc.md) FUN_0061cabc

`competing_candidates` [`0061ce50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061c/0061ce50.md) [`0061ce6c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061c/0061ce6c.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061ca58",
    "0061cac8",
    "0061ce08",
    "0061ce78"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-7a6355c64ddbb052fa7322eabf467fb1"></a>

### v16.0.2 [`0061cb34`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061c/0061cb34.md) FUN_0061cb34

`competing_candidates` [`0061cee4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061c/0061cee4.md) [`0061cf00`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061c/0061cf00.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061cb1c",
    "0061cb5c",
    "0061cecc",
    "0061cf0c"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-041de85d11c8e13234d404ae31e784ab"></a>

### v16.0.2 [`0061cb50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061c/0061cb50.md) FUN_0061cb50

`competing_candidates` [`0061cee4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061c/0061cee4.md) [`0061cf00`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061c/0061cf00.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061cb1c",
    "0061cb5c",
    "0061cecc",
    "0061cf0c"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-8c41a222a773cdc39a7d0d5736ff0888"></a>

### v16.0.2 [`0061cccc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061c/0061cccc.md) FUN_0061cccc

`competing_candidates` [`0061d07c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061d07c.md) [`0061d098`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061d098.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061cb9c",
    "0061ccf4",
    "0061cf4c",
    "0061d0a4"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-e50f4a8b3cb380ea5f03c170e684b79f"></a>

### v16.0.2 [`0061cce8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061c/0061cce8.md) FUN_0061cce8

`competing_candidates` [`0061d07c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061d07c.md) [`0061d098`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061d098.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061cb9c",
    "0061ccf4",
    "0061cf4c",
    "0061d0a4"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-06c16a68933eca461c4199e74599e849"></a>

### v16.0.2 [`0061ce64`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061c/0061ce64.md) FUN_0061ce64

`competing_candidates` [`0061d214`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061d214.md) [`0061d230`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061d230.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061cd34",
    "0061ce8c",
    "0061d0e4",
    "0061d23c"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-fd33c29be1956f13ffe3c8fd92d1d0a8"></a>

### v16.0.2 [`0061ce80`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061c/0061ce80.md) FUN_0061ce80

`competing_candidates` [`0061d214`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061d214.md) [`0061d230`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061d230.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061cd34",
    "0061ce8c",
    "0061d0e4",
    "0061d23c"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-7a1297f59aca9c1e7abd35a72280920a"></a>

### v16.0.2 [`0061cffc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061c/0061cffc.md) FUN_0061cffc

`competing_candidates` [`0061d3ac`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061d3ac.md) [`0061d3c8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061d3c8.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061cecc",
    "0061d024",
    "0061d27c",
    "0061d3d4"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-82f2ad37d0901a9fdd282d4ec216da34"></a>

### v16.0.2 [`0061d018`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061d/0061d018.md) FUN_0061d018

`competing_candidates` [`0061d3ac`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061d3ac.md) [`0061d3c8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061d3c8.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061cecc",
    "0061d024",
    "0061d27c",
    "0061d3d4"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-6794aa42d3c2d88255ac8ccbc735fd30"></a>

### v16.0.2 [`0061d194`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061d/0061d194.md) FUN_0061d194

`competing_candidates` [`0061d544`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061d544.md) [`0061d560`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061d560.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061d064",
    "0061d1bc",
    "0061d414",
    "0061d56c"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-cfa9421e1650e1c6e2edcc88f5cc9dc4"></a>

### v16.0.2 [`0061d1b0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061d/0061d1b0.md) FUN_0061d1b0

`competing_candidates` [`0061d544`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061d544.md) [`0061d560`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061d560.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061d064",
    "0061d1bc",
    "0061d414",
    "0061d56c"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-0006f9450c45d0932c31a1b66a515641"></a>

### v16.0.2 [`0061d32c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061d/0061d32c.md) FUN_0061d32c

`competing_candidates` [`0061d6dc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061d6dc.md) [`0061d6f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061d6f8.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061d1fc",
    "0061d354",
    "0061d5ac",
    "0061d704"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-4ef5aff4641619a07c37557daacab1aa"></a>

### v16.0.2 [`0061d348`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061d/0061d348.md) FUN_0061d348

`competing_candidates` [`0061d6dc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061d6dc.md) [`0061d6f8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061d6f8.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061d1fc",
    "0061d354",
    "0061d5ac",
    "0061d704"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-a4fb56d99374d0ccd1b4a5fdddf9df52"></a>

### v16.0.2 [`0061d5c4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061d/0061d5c4.md) FUN_0061d5c4

`competing_candidates` [`0061d974`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061d974.md) [`0061d990`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061d990.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061d394",
    "0061d5ec",
    "0061d744",
    "0061d99c"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-e123c55dc98a95c956cc9b23dfbd2504"></a>

### v16.0.2 [`0061d5e0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061d/0061d5e0.md) FUN_0061d5e0

`competing_candidates` [`0061d974`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061d974.md) [`0061d990`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061d990.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061d394",
    "0061d5ec",
    "0061d744",
    "0061d99c"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-8f2b8d29cbf00e86de690426e0b1e6df"></a>

### v16.0.2 [`0061d75c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061d/0061d75c.md) FUN_0061d75c

`competing_candidates` [`0061db0c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061db0c.md) [`0061db28`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061db28.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061d62c",
    "0061d784",
    "0061d9dc",
    "0061db34"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-dda2e8acfedc02a6210964ddf3d76d64"></a>

### v16.0.2 [`0061d778`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061d/0061d778.md) FUN_0061d778

`competing_candidates` [`0061db0c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061db0c.md) [`0061db28`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061db28.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061d62c",
    "0061d784",
    "0061d9dc",
    "0061db34"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-dcc659a0b8b96e09a22d14bca66c6e6f"></a>

### v16.0.2 [`0061d8f4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061d/0061d8f4.md) FUN_0061d8f4

`competing_candidates` [`0061dca4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061dca4.md) [`0061dcc0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061dcc0.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061d7c4",
    "0061d91c",
    "0061db74",
    "0061dccc"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-48b251a882b0779aefe9e03149ea46c5"></a>

### v16.0.2 [`0061d910`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061d/0061d910.md) FUN_0061d910

`competing_candidates` [`0061dca4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061dca4.md) [`0061dcc0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061dcc0.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061d7c4",
    "0061d91c",
    "0061db74",
    "0061dccc"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-2db3db44557db756566ac804e90ea729"></a>

### v16.0.2 [`0061da8c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061d/0061da8c.md) FUN_0061da8c

`competing_candidates` [`0061de3c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061de3c.md) [`0061de58`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061de58.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061d95c",
    "0061dab4",
    "0061dd0c",
    "0061de64"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-0e0ff1ac29fd9e6bc7fd30fc685db804"></a>

### v16.0.2 [`0061daa8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061d/0061daa8.md) FUN_0061daa8

`competing_candidates` [`0061de3c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061de3c.md) [`0061de58`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061de58.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061d95c",
    "0061dab4",
    "0061dd0c",
    "0061de64"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-b8e17fd37fb33d787e4817138eb5bead"></a>

### v16.0.2 [`0061dc24`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061d/0061dc24.md) FUN_0061dc24

`competing_candidates` [`0061dfd4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061dfd4.md) [`0061dff0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061dff0.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061daf4",
    "0061dc4c",
    "0061dea4",
    "0061dffc"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-57dbedaf882bc9d48332ddb38cbc2756"></a>

### v16.0.2 [`0061dc40`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061d/0061dc40.md) FUN_0061dc40

`competing_candidates` [`0061dfd4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061dfd4.md) [`0061dff0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061d/0061dff0.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061daf4",
    "0061dc4c",
    "0061dea4",
    "0061dffc"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-6b452509a6280e686f6d16240cc49eb4"></a>

### v16.0.2 [`0061ddc4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061d/0061ddc4.md) FUN_0061ddc4

`competing_candidates` [`0061e174`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061e174.md) [`0061e190`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061e190.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061dc8c",
    "0061ddec",
    "0061e03c",
    "0061e19c"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-767bb1aae12e71a95b0c84fd9b97df8d"></a>

### v16.0.2 [`0061dde0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061d/0061dde0.md) FUN_0061dde0

`competing_candidates` [`0061e174`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061e174.md) [`0061e190`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061e190.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061dc8c",
    "0061ddec",
    "0061e03c",
    "0061e19c"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-4e19df8d9c48f5e51f9631dc572d3d0b"></a>

### v16.0.2 [`0061df5c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061d/0061df5c.md) FUN_0061df5c

`competing_candidates` [`0061e30c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061e30c.md) [`0061e328`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061e328.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061de2c",
    "0061df84",
    "0061e1dc",
    "0061e334"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-1958b59409c2d58213bac9cb2d7cbe2d"></a>

### v16.0.2 [`0061df78`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061d/0061df78.md) FUN_0061df78

`competing_candidates` [`0061e30c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061e30c.md) [`0061e328`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061e328.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061de2c",
    "0061df84",
    "0061e1dc",
    "0061e334"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-84619d80e5e0cc961ceaf502c0413c5b"></a>

### v16.0.2 [`0061e0f4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061e/0061e0f4.md) FUN_0061e0f4

`competing_candidates` [`0061e4a4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061e4a4.md) [`0061e4c0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061e4c0.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061dfc4",
    "0061e11c",
    "0061e374",
    "0061e4cc"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-014d9f3afa416ac3607129250b1ab6aa"></a>

### v16.0.2 [`0061e110`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061e/0061e110.md) FUN_0061e110

`competing_candidates` [`0061e4a4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061e4a4.md) [`0061e4c0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061e4c0.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061dfc4",
    "0061e11c",
    "0061e374",
    "0061e4cc"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-deb479240faf0bd85aa9c115143d3162"></a>

### v16.0.2 [`0061e28c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061e/0061e28c.md) FUN_0061e28c

`competing_candidates` [`0061e63c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061e63c.md) [`0061e658`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061e658.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061e15c",
    "0061e2b4",
    "0061e50c",
    "0061e664"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-fd1395176ec4bdfe2eac30b526d5643f"></a>

### v16.0.2 [`0061e2a8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061e/0061e2a8.md) FUN_0061e2a8

`competing_candidates` [`0061e63c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061e63c.md) [`0061e658`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061e658.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061e15c",
    "0061e2b4",
    "0061e50c",
    "0061e664"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-00726d1fc756a70a21f361c73f6373e6"></a>

### v16.0.2 [`0061e440`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061e/0061e440.md) FUN_0061e440

`competing_candidates` [`0061e7f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061e7f0.md) [`0061e80c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061e80c.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061e2f4",
    "0061e468",
    "0061e6a4",
    "0061e818"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-8e26c6f55f58314bdf6879f9fc190864"></a>

### v16.0.2 [`0061e45c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061e/0061e45c.md) FUN_0061e45c

`competing_candidates` [`0061e7f0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061e7f0.md) [`0061e80c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061e80c.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061e2f4",
    "0061e468",
    "0061e6a4",
    "0061e818"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-e87017f91f6c42f873085768e8468982"></a>

### v16.0.2 [`0061e4a8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061e/0061e4a8.md) FUN_0061e4a8

`competing_candidates` [`0061e858`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061e858.md) [`0062709c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00627/0062709c.md) [`00627c24`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00627/00627c24.md) [`00678cd0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00678/00678cd0.md) [`00679bf0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00679/00679bf0.md) [`007082e8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00708/007082e8.md) [`0076a1b8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0076a/0076a1b8.md) [`00915e30`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00915/00915e30.md)

呼出元 0件  · 呼出先 5件 [`0047ad34`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0082010c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00820/0082010c.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

~~~json
{
  "bounds": [
    "0061e4a4",
    "0061e584",
    "0061e854",
    "0061e934"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-caf4389a58827c07a2e1e08efeef7000"></a>

### v16.0.2 [`0061e55c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061e/0061e55c.md) FUN_0061e55c

`competing_candidates` [`0061e858`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061e858.md) [`0061e90c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061e90c.md) [`0061e928`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061e928.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061e4a4",
    "0061e584",
    "0061e854",
    "0061e934"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-6c70ab561f66586eb73b87bd65efd872"></a>

### v16.0.2 [`0061e578`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061e/0061e578.md) FUN_0061e578

`competing_candidates` [`0061e858`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061e858.md) [`0061e90c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061e90c.md) [`0061e928`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061e928.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061e4a4",
    "0061e584",
    "0061e854",
    "0061e934"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-a177c620002c3d02bbd04ffad06460b6"></a>

### v16.0.2 [`0061e67c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061e/0061e67c.md) FUN_0061e67c

`competing_candidates` [`0061ea2c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061ea2c.md) [`0061ea48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061ea48.md) [`0061ea54`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061ea54.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061e5d8",
    "0061e6a8",
    "0061e988",
    "0061ea58"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-c11483de0f065a89300fc1512fbf4da6"></a>

### v16.0.2 [`0061e698`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061e/0061e698.md) FUN_0061e698

`competing_candidates` [`0061ea2c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061ea2c.md) [`0061ea48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061ea48.md) [`0061ea54`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061ea54.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061e5d8",
    "0061e6a8",
    "0061e988",
    "0061ea58"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-8175e6be03b4a54f60b72713e56a5235"></a>

### v16.0.2 [`0061e6a4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061e/0061e6a4.md) FUN_0061e6a4

`competing_candidates` [`0061ea2c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061ea2c.md) [`0061ea48`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061ea48.md) [`0061ea54`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061ea54.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061e5d8",
    "0061e6a8",
    "0061e988",
    "0061ea58"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-155c4afd9b0d4eb9862d9bccb062bd3f"></a>

### v16.0.2 [`0061eafc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061e/0061eafc.md) FUN_0061eafc

`competing_candidates` [`0061eeac`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061eeac.md) [`0061eec8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061eec8.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061e6e8",
    "0061eb24",
    "0061ea98",
    "0061eed4"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-19b4fd849ca3f90dfa81cae794e6bad4"></a>

### v16.0.2 [`0061eb18`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061e/0061eb18.md) FUN_0061eb18

`competing_candidates` [`0061eeac`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061eeac.md) [`0061eec8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061eec8.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061e6e8",
    "0061eb24",
    "0061ea98",
    "0061eed4"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-09413f0ee9bd3892412cf6d21bb00f1b"></a>

### v16.0.2 [`0061ebbc`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061e/0061ebbc.md) FUN_0061ebbc

`competing_candidates` [`0061ef6c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061ef6c.md) [`0061ef88`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061ef88.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061eb64",
    "0061ebe4",
    "0061ef14",
    "0061ef94"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-3386d37495336dcd647fd297c110451e"></a>

### v16.0.2 [`0061ebd8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061e/0061ebd8.md) FUN_0061ebd8

`competing_candidates` [`0061ef6c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061ef6c.md) [`0061ef88`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061ef88.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061eb64",
    "0061ebe4",
    "0061ef14",
    "0061ef94"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-7fe3504f62d665468e4d5e0dd324cfe5"></a>

### v16.0.2 [`0061ec24`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061e/0061ec24.md) FUN_0061ec24

`competing_candidates` [`0061efd4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061efd4.md) [`0061efd8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061efd8.md) [`0061eff4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061eff4.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061ec20",
    "0061ec50",
    "0061efd0",
    "0061f000"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-9dbc96e5dbace0c0f79153c092dcb162"></a>

### v16.0.2 [`0061ec28`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061e/0061ec28.md) FUN_0061ec28

`competing_candidates` [`0061efd4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061efd4.md) [`0061efd8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061efd8.md) [`0061eff4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061eff4.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061ec20",
    "0061ec50",
    "0061efd0",
    "0061f000"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-29019523bc9b1545229380359047345c"></a>

### v16.0.2 [`0061ec44`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061e/0061ec44.md) FUN_0061ec44

`competing_candidates` [`0061efd4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061efd4.md) [`0061efd8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061efd8.md) [`0061eff4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061eff4.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0061ec20",
    "0061ec50",
    "0061efd0",
    "0061f000"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-8c09f64f972f10cebf72b54f46274267"></a>

### v16.0.2 [`006247e8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00624/006247e8.md) FUN_006247e8

`competing_candidates` [`005fac14`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fa/005fac14.md) [`00624b98`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00624/00624b98.md) [`00645684`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00645/00645684.md) [`00677e30`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00677/00677e30.md) [`006ab78c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ab/006ab78c.md) [`006ee1ec`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ee/006ee1ec.md) [`0074fc8c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0074f/0074fc8c.md) [`007533ac`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00753/007533ac.md)

呼出元 0件  · 呼出先 13件 [`0047e91c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0072bd10`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0072b/0072bd10.md) [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

~~~json
{
  "bounds": [
    "006247e4",
    "00624bac",
    "00624b94",
    "00624f5c"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-c95d0c50853292bb67a2fc93210ba50d"></a>

### v16.0.2 [`00624b84`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00624/00624b84.md) FUN_00624b84

`competing_candidates` [`00624b98`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00624/00624b98.md) [`00624f34`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00624/00624f34.md) [`00624f50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00624/00624f50.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "006247e4",
    "00624bac",
    "00624b94",
    "00624f5c"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-c4f0f426feaf28ab48cccc64128b8c86"></a>

### v16.0.2 [`00624ba0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00624/00624ba0.md) FUN_00624ba0

`competing_candidates` [`00624b98`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00624/00624b98.md) [`00624f34`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00624/00624f34.md) [`00624f50`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00624/00624f50.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "006247e4",
    "00624bac",
    "00624b94",
    "00624f5c"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-3a0008c219c8ae7a62154dbfd8e1a19e"></a>

### v16.0.2 [`00626488`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00626/00626488.md) FUN_00626488

`competing_candidates` [`00626838`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00626/00626838.md) [`00626854`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00626/00626854.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "006262ac",
    "006264b0",
    "0062665c",
    "00626860"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-cac4902355600e55c73c6aebd54877dc"></a>

### v16.0.2 [`006264a4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00626/006264a4.md) FUN_006264a4

`competing_candidates` [`00626838`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00626/00626838.md) [`00626854`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00626/00626854.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "006262ac",
    "006264b0",
    "0062665c",
    "00626860"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-622cab5c672351c6fbdb895bcf3960ce"></a>

### v16.0.2 [`00626780`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00626/00626780.md) FUN_00626780

`competing_candidates` [`00626b30`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00626/00626b30.md) [`00626b4c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00626/00626b4c.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "00626504",
    "006267a8",
    "006268b4",
    "00626b58"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-bac7eaff64870e1e7ccd0b12deb851b6"></a>

### v16.0.2 [`0062679c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00626/0062679c.md) FUN_0062679c

`competing_candidates` [`00626b30`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00626/00626b30.md) [`00626b4c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00626/00626b4c.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "00626504",
    "006267a8",
    "006268b4",
    "00626b58"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-c109c7a58c11ca17759a488724264267"></a>

### v16.0.2 [`00626870`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00626/00626870.md) FUN_00626870

`competing_candidates` [`00626c20`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00626/00626c20.md) [`00626c3c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00626/00626c3c.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "006267fc",
    "00626898",
    "00626bac",
    "00626c48"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-9a641f0516f4f1b083150646616a5b21"></a>

### v16.0.2 [`0062688c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00626/0062688c.md) FUN_0062688c

`competing_candidates` [`00626c20`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00626/00626c20.md) [`00626c3c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00626/00626c3c.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "006267fc",
    "00626898",
    "00626bac",
    "00626c48"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-dc7b8c03329b52088db167d9fd8194ad"></a>

### v16.0.2 [`00626920`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00626/00626920.md) FUN_00626920

`competing_candidates` [`00626cd0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00626/00626cd0.md) [`00626cec`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00626/00626cec.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "006268d8",
    "00626948",
    "00626c88",
    "00626cf8"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-e3fded4cff91a485f6fc002aded3c854"></a>

### v16.0.2 [`0062693c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00626/0062693c.md) FUN_0062693c

`competing_candidates` [`00626cd0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00626/00626cd0.md) [`00626cec`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00626/00626cec.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "006268d8",
    "00626948",
    "00626c88",
    "00626cf8"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-d6642a6d0a1dce3ffcddfcc28f104231"></a>

### v16.0.2 [`00626a08`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00626/00626a08.md) FUN_00626a08

`competing_candidates` [`00626db8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00626/00626db8.md) [`00626dd4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00626/00626dd4.md) [`00626de0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00626/00626de0.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0062699c",
    "00626a34",
    "00626d4c",
    "00626de4"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-d6381eae2522435c3cd08d84cdbeed5a"></a>

### v16.0.2 [`00626a24`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00626/00626a24.md) FUN_00626a24

`competing_candidates` [`00626db8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00626/00626db8.md) [`00626dd4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00626/00626dd4.md) [`00626de0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00626/00626de0.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0062699c",
    "00626a34",
    "00626d4c",
    "00626de4"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-e4ee45d5c948cb4fa50a93d168e90942"></a>

### v16.0.2 [`00626a30`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00626/00626a30.md) FUN_00626a30

`competing_candidates` [`00626db8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00626/00626db8.md) [`00626dd4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00626/00626dd4.md) [`00626de0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00626/00626de0.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "0062699c",
    "00626a34",
    "00626d4c",
    "00626de4"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-4afc51b12bca856dc8615585eee24f29"></a>

### v16.0.2 [`00626c84`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00626/00626c84.md) FUN_00626c84

`competing_candidates` [`00627034`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00627/00627034.md) [`00627050`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00627/00627050.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "00626a74",
    "00626cac",
    "00626e24",
    "0062705c"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-b98c9db22ace0caa17f471bc036be416"></a>

### v16.0.2 [`00626ca0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00626/00626ca0.md) FUN_00626ca0

`competing_candidates` [`00627034`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00627/00627034.md) [`00627050`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00627/00627050.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "00626a74",
    "00626cac",
    "00626e24",
    "0062705c"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-a7ff58852ef4d3bb6e164a23539a7bd6"></a>

### v16.0.2 [`00626cec`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00626/00626cec.md) FUN_00626cec

`competing_candidates` [`0060e4b4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0060e/0060e4b4.md) [`0061e858`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061e858.md) [`0062709c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00627/0062709c.md) [`00627c24`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00627/00627c24.md) [`006554e4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00655/006554e4.md) [`00679bf0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00679/00679bf0.md) [`007082e8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00708/007082e8.md) [`0076a1b8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0076a/0076a1b8.md)

呼出元 0件  · 呼出先 2件 [`00851550`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

~~~json
{
  "bounds": [
    "00626ce8",
    "00626d6c",
    "00627098",
    "0062711c"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-f7ae7ad6c9188a601edc31da8a899eb7"></a>

### v16.0.2 [`00626d44`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00626/00626d44.md) FUN_00626d44

`competing_candidates` [`0062709c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00627/0062709c.md) [`006270f4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00627/006270f4.md) [`00627110`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00627/00627110.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "00626ce8",
    "00626d6c",
    "00627098",
    "0062711c"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-846c9c1878ad47e51f76dcbfebe4a3df"></a>

### v16.0.2 [`00626d60`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00626/00626d60.md) FUN_00626d60

`competing_candidates` [`0062709c`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00627/0062709c.md) [`006270f4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00627/006270f4.md) [`00627110`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00627/00627110.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "00626ce8",
    "00626d6c",
    "00627098",
    "0062711c"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-bdaef3a450ba896db45cd9841cad87eb"></a>

### v16.0.2 [`00626dd8`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00626/00626dd8.md) FUN_00626dd8

`competing_candidates` [`00627188`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00627/00627188.md) [`006271a4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00627/006271a4.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "00626dac",
    "00626e00",
    "0062715c",
    "006271b0"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-4e1da9ae02eefa630e4b9540b45a9895"></a>

### v16.0.2 [`00626df4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00626/00626df4.md) FUN_00626df4

`competing_candidates` [`00627188`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00627/00627188.md) [`006271a4`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00627/006271a4.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "00626dac",
    "00626e00",
    "0062715c",
    "006271b0"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

<a id="review-cbe718bf972a8e93cb87db44fa418413"></a>

### v16.0.2 [`00626e88`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00626/00626e88.md) FUN_00626e88

`competing_candidates` [`00627238`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00627/00627238.md) [`00627254`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00627/00627254.md) [`00627260`](https://github.com/sinsuirakv0/KBCS/blob/4d5f925cdd81bdbab2a06a7413e3df40b2865f7d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00627/00627260.md)

呼出元 0件  · 呼出先 0件 

~~~json
{
  "bounds": [
    "00626e40",
    "00626eb4",
    "006271f0",
    "00627264"
  ],
  "initial_reason": "insufficient_independent_evidence"
}
~~~

