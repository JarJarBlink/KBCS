# v16.0.1 → v16.0.2 · 追加調査 (79)

[一覧の目次](README.md)

<a id="review-481a81c1557da40d3d2c029cdb6ae2b2"></a>

### v16.0.2 [`00c57c58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57c58.md) FUN_00c57c58

`competing_candidates` 

呼出元 1件 [`00c54cc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c54cc4.md) · 呼出先 0件 

- 1. [`00c57bb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57bb8.md) · スコア 80.0 · 採用条件未達 · 順位差 80.0 / 80.0 · insufficient_independent_call_anchors
- 2. [`00c57b88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57b88.md) · スコア 0.0 · 採用条件未達 · 順位差 -60.0 / -80.0 · short_function_requires_other_identity_evidence, instruction_coverage, cfg_coverage, unexplained_entry_return_or_effect_position, insufficient_independent_call_anchors

~~~json
{
  "initial_reason": "candidate_for_unmatched_old_function",
  "order": "score_descending_then_address",
  "ranked_candidates": [
    {
      "eligible": false,
      "evidence": {
        "coverage": [
          1.0,
          1.0
        ],
        "cfg_coverage": [
          1.0,
          1.0
        ],
        "mapped_data": 0,
        "held": [
          "insufficient_independent_call_anchors"
        ],
        "margin": 80.0,
        "reverse_margin": 80.0
      },
      "new": "00c57bb8",
      "score": 80.0
    },
    {
      "eligible": false,
      "evidence": {
        "coverage": [
          0.0,
          0.0
        ],
        "cfg_coverage": [
          0.0,
          1.0
        ],
        "mapped_data": 0,
        "held": [
          "short_function_requires_other_identity_evidence",
          "instruction_coverage",
          "cfg_coverage",
          "unexplained_entry_return_or_effect_position",
          "insufficient_independent_call_anchors"
        ],
        "margin": -60.0,
        "reverse_margin": -80.0
      },
      "new": "00c57b88",
      "score": 0.0
    }
  ],
  "ranking_method": "instruction_blocks"
}
~~~

<a id="review-51c69101ceee45f4f6367aea21c840a7"></a>

### v16.0.2 [`00c57d84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57d84.md) FUN_00c57d84

`competing_candidates` 

呼出元 1件 [`00530fe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00530/00530fe4.md) · 呼出先 1件 [`00531008`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00531/00531008.md)

- 1. [`00c57ce4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ce4.md) · スコア 5.5789 · 採用条件未達 · 順位差 — / — · 

~~~json
{
  "initial_reason": "candidate_for_unmatched_old_function",
  "order": "score_descending_then_address",
  "ranked_candidates": [
    {
      "eligible": "",
      "evidence": {},
      "new": "00c57ce4",
      "score": 5.5789
    }
  ],
  "ranking_method": "initial_matcher"
}
~~~

<a id="review-49a7be131e0895989c946dec28f6a6b8"></a>

### v16.0.2 [`00c57d8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57d8c.md) FUN_00c57d8c

`competing_candidates` 

呼出元 1件 [`00571e58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00571/00571e58.md) · 呼出先 1件 [`00572004`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00572/00572004.md)

- 1. [`00c57cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57cec.md) · スコア 12.3333 · 採用条件未達 · 順位差 0.0 / 6.1111 · 
- 2. [`00c57ce4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ce4.md) · スコア 6.2222 · 採用条件未達 · 順位差 0.0 / 0.0 · 

~~~json
{
  "initial_reason": "candidate_for_unmatched_old_function",
  "order": "score_descending_then_address",
  "ranked_candidates": [
    {
      "eligible": "",
      "evidence": {
        "margin": 0.0,
        "reverse_margin": 6.1111
      },
      "new": "00c57cec",
      "score": 12.3333
    },
    {
      "eligible": "",
      "evidence": {
        "margin": 0.0,
        "reverse_margin": 0.0
      },
      "new": "00c57ce4",
      "score": 6.2222
    }
  ],
  "ranking_method": "initial_matcher"
}
~~~

<a id="review-bfed770d3cd2e3ff017c1c37eeb7a253"></a>

### v16.0.2 [`00c57d94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57d94.md) FUN_00c57d94

`competing_candidates` 

呼出元 1件 [`00589f48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589f48.md) · 呼出先 1件 [`0058a00c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058a/0058a00c.md)

- 1. [`00c57cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57cec.md) · スコア 12.3333 · 採用条件未達 · 順位差 — / — · 
- 2. [`00c57ce4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ce4.md) · スコア 6.2222 · 採用条件未達 · 順位差 — / — · 

~~~json
{
  "initial_reason": "candidate_for_unmatched_old_function",
  "order": "score_descending_then_address",
  "ranked_candidates": [
    {
      "eligible": "",
      "evidence": {},
      "new": "00c57cec",
      "score": 12.3333
    },
    {
      "eligible": "",
      "evidence": {},
      "new": "00c57ce4",
      "score": 6.2222
    }
  ],
  "ranking_method": "initial_matcher"
}
~~~

<a id="review-68b3506305adafec784fc497f6b2ec70"></a>

### v16.0.2 [`00c57d9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57d9c.md) FUN_00c57d9c

`competing_candidates` 

呼出元 1件 [`0068ae88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068a/0068ae88.md) · 呼出先 1件 [`0068b004`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068b/0068b004.md)

- 1. [`00c57cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57cec.md) · スコア 5.875 · 採用条件未達 · 順位差 — / — · 
- 2. [`00c57ce4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ce4.md) · スコア 5.5789 · 採用条件未達 · 順位差 — / — · 

~~~json
{
  "initial_reason": "candidate_for_unmatched_old_function",
  "order": "score_descending_then_address",
  "ranked_candidates": [
    {
      "eligible": "",
      "evidence": {},
      "new": "00c57cec",
      "score": 5.875
    },
    {
      "eligible": "",
      "evidence": {},
      "new": "00c57ce4",
      "score": 5.5789
    }
  ],
  "ranking_method": "initial_matcher"
}
~~~

<a id="review-7c89ab3f3baaef791a0f8fb6eacb885a"></a>

### v16.0.2 [`00c57da4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57da4.md) FUN_00c57da4

`competing_candidates` 

呼出元 1件 [`00750da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00750/00750da0.md) · 呼出先 1件 [`00751008`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00751/00751008.md)

- 1. [`00c57cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57cec.md) · スコア 12.3333 · 採用条件未達 · 順位差 — / — · 
- 2. [`00c57ce4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ce4.md) · スコア 6.2222 · 採用条件未達 · 順位差 — / — · 

~~~json
{
  "initial_reason": "candidate_for_unmatched_old_function",
  "order": "score_descending_then_address",
  "ranked_candidates": [
    {
      "eligible": "",
      "evidence": {},
      "new": "00c57cec",
      "score": 12.3333
    },
    {
      "eligible": "",
      "evidence": {},
      "new": "00c57ce4",
      "score": 6.2222
    }
  ],
  "ranking_method": "initial_matcher"
}
~~~

<a id="review-1718e54e852c1e90dc2fc96f72fb9996"></a>

### v16.0.2 [`00c57dac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57dac.md) FUN_00c57dac

`competing_candidates` 

呼出元 1件 [`0082bec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0082b/0082bec0.md) · 呼出先 1件 [`0082c008`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0082c/0082c008.md)

- 1. [`00c57cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57cec.md) · スコア 5.875 · 採用条件未達 · 順位差 — / — · 

~~~json
{
  "initial_reason": "candidate_for_unmatched_old_function",
  "order": "score_descending_then_address",
  "ranked_candidates": [
    {
      "eligible": "",
      "evidence": {},
      "new": "00c57cec",
      "score": 5.875
    }
  ],
  "ranking_method": "initial_matcher"
}
~~~

<a id="review-30fa86ec4f46e8e3144fde7a2ce4a506"></a>

### v16.0.2 [`00c57db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57db4.md) FUN_00c57db4

`competing_candidates` 

呼出元 1件 [`0089a5b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089a/0089a5b0.md) · 呼出先 1件 [`0089b00c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089b/0089b00c.md)

- 1. [`00c57cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57cec.md) · スコア 7.1034 · 採用条件未達 · 順位差 — / — · 

~~~json
{
  "initial_reason": "candidate_for_unmatched_old_function",
  "order": "score_descending_then_address",
  "ranked_candidates": [
    {
      "eligible": "",
      "evidence": {},
      "new": "00c57cec",
      "score": 7.1034
    }
  ],
  "ranking_method": "initial_matcher"
}
~~~

<a id="review-5d0616bd2375be60372131cf62bb89f3"></a>

### v16.0.2 [`00c57ed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57ed0.md) FUN_00c57ed0

`competing_candidates` 

呼出元 0件  · 呼出先 0件 

- 1. [`00c57e00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e00.md) · スコア 68.0 · 採用条件未達 · 順位差 0.0 / 0.0 · short_function_requires_other_identity_evidence, instruction_coverage, insufficient_independent_call_anchors
- 2. [`00c57fb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fb0.md) · スコア 68.0 · 採用条件未達 · 順位差 68.0 / 0.0 · short_function_requires_other_identity_evidence, instruction_coverage, unexplained_entry_return_or_effect_position, insufficient_independent_call_anchors, already_matched_elsewhere
- 3. [`00c59fb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59fb0.md) · スコア 68.0 · 採用条件未達 · 順位差 68.0 / 0.0 · short_function_requires_other_identity_evidence, instruction_coverage, unexplained_entry_return_or_effect_position, insufficient_independent_call_anchors, already_matched_elsewhere
- 4. [`00c5bfb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bfb0.md) · スコア 68.0 · 採用条件未達 · 順位差 68.0 / 0.0 · short_function_requires_other_identity_evidence, instruction_coverage, unexplained_entry_return_or_effect_position, insufficient_independent_call_anchors, already_matched_elsewhere
- 5. [`00c5dfb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dfb0.md) · スコア 68.0 · 採用条件未達 · 順位差 68.0 / 0.0 · short_function_requires_other_identity_evidence, instruction_coverage, unexplained_entry_return_or_effect_position, insufficient_independent_call_anchors, already_matched_elsewhere
- 6. [`00c57e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e20.md) · スコア 56.0 · 採用条件未達 · 順位差 -24.0 / -12.0 · short_function_requires_other_identity_evidence, instruction_coverage, unexplained_entry_return_or_effect_position, insufficient_independent_call_anchors

~~~json
{
  "initial_reason": "candidate_for_unmatched_old_function",
  "order": "score_descending_then_address",
  "ranked_candidates": [
    {
      "eligible": false,
      "evidence": {
        "coverage": [
          0.8,
          0.8
        ],
        "cfg_coverage": [
          1.0,
          1.0
        ],
        "mapped_data": 0,
        "held": [
          "short_function_requires_other_identity_evidence",
          "instruction_coverage",
          "insufficient_independent_call_anchors"
        ],
        "margin": 0.0,
        "reverse_margin": 0.0
      },
      "new": "00c57e00",
      "score": 68.0
    },
    {
      "eligible": false,
      "evidence": {
        "coverage": [
          1.0,
          0.8
        ],
        "cfg_coverage": [
          1.0,
          1.0
        ],
        "mapped_data": 0,
        "held": [
          "short_function_requires_other_identity_evidence",
          "instruction_coverage",
          "unexplained_entry_return_or_effect_position",
          "insufficient_independent_call_anchors",
          "already_matched_elsewhere"
        ],
        "margin": 68.0,
        "reverse_margin": 0.0
      },
      "new": "00c57fb0",
      "score": 68.0
    },
    {
      "eligible": false,
      "evidence": {
        "coverage": [
          1.0,
          0.8
        ],
        "cfg_coverage": [
          1.0,
          1.0
        ],
        "mapped_data": 0,
        "held": [
          "short_function_requires_other_identity_evidence",
          "instruction_coverage",
          "unexplained_entry_return_or_effect_position",
          "insufficient_independent_call_anchors",
          "already_matched_elsewhere"
        ],
        "margin": 68.0,
        "reverse_margin": 0.0
      },
      "new": "00c59fb0",
      "score": 68.0
    }
  ],
  "ranking_method": "instruction_blocks"
}
~~~

<a id="review-fada761ee6e64d31028ebbd3c357e0e5"></a>

### v16.0.2 [`00c57ef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57ef0.md) &lt;EXTERNAL&gt;::__cxa_finalize

`competing_candidates` 

呼出元 1件 [`0043ae50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043ae50.md) · 呼出先 1件 [`0112a000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0112a/0112a000.md)

- 1. [`00c57fc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fc0.md) · スコア 80.0 · 採用条件未達 · 順位差 80.0 / 0.0 · short_function_requires_other_identity_evidence, insufficient_independent_call_anchors, already_matched_elsewhere
- 2. [`00c59fc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59fc0.md) · スコア 80.0 · 採用条件未達 · 順位差 80.0 / 0.0 · short_function_requires_other_identity_evidence, insufficient_independent_call_anchors, already_matched_elsewhere
- 3. [`00c5bfc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bfc0.md) · スコア 80.0 · 採用条件未達 · 順位差 80.0 / 0.0 · short_function_requires_other_identity_evidence, insufficient_independent_call_anchors, already_matched_elsewhere
- 4. [`00c5dfc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dfc0.md) · スコア 80.0 · 採用条件未達 · 順位差 80.0 / 0.0 · short_function_requires_other_identity_evidence, insufficient_independent_call_anchors, already_matched_elsewhere
- 5. [`00c57e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e20.md) · スコア 65.0 · 採用条件未達 · 順位差 -15.0 / -15.0 · short_function_requires_other_identity_evidence, instruction_coverage, insufficient_independent_call_anchors
- 6. [`00c57e00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e00.md) · スコア 56.0 · 採用条件未達 · 順位差 -12.0 / -24.0 · short_function_requires_other_identity_evidence, instruction_coverage, unexplained_entry_return_or_effect_position, insufficient_independent_call_anchors

~~~json
{
  "initial_reason": "candidate_for_unmatched_old_function",
  "order": "score_descending_then_address",
  "ranked_candidates": [
    {
      "eligible": false,
      "evidence": {
        "coverage": [
          1.0,
          1.0
        ],
        "cfg_coverage": [
          1.0,
          1.0
        ],
        "mapped_data": 0,
        "held": [
          "short_function_requires_other_identity_evidence",
          "insufficient_independent_call_anchors",
          "already_matched_elsewhere"
        ],
        "margin": 80.0,
        "reverse_margin": 0.0
      },
      "new": "00c57fc0",
      "score": 80.0
    },
    {
      "eligible": false,
      "evidence": {
        "coverage": [
          1.0,
          1.0
        ],
        "cfg_coverage": [
          1.0,
          1.0
        ],
        "mapped_data": 0,
        "held": [
          "short_function_requires_other_identity_evidence",
          "insufficient_independent_call_anchors",
          "already_matched_elsewhere"
        ],
        "margin": 80.0,
        "reverse_margin": 0.0
      },
      "new": "00c59fc0",
      "score": 80.0
    },
    {
      "eligible": false,
      "evidence": {
        "coverage": [
          1.0,
          1.0
        ],
        "cfg_coverage": [
          1.0,
          1.0
        ],
        "mapped_data": 0,
        "held": [
          "short_function_requires_other_identity_evidence",
          "insufficient_independent_call_anchors",
          "already_matched_elsewhere"
        ],
        "margin": 80.0,
        "reverse_margin": 0.0
      },
      "new": "00c5bfc0",
      "score": 80.0
    }
  ],
  "ranking_method": "instruction_blocks"
}
~~~

<a id="review-168491475d40ea414a140a24e19e3fc5"></a>

### v16.0.2 [`00c599b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c599b0.md) &lt;EXTERNAL&gt;::siglongjmp

`competing_candidates` 

呼出元 1件 [`004fca58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004fc/004fca58.md) · 呼出先 1件 [`0112a188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0112a/0112a188.md)

- 1. [`00c59a80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59a80.md) · スコア 80.0 · 採用条件未達 · 順位差 80.0 / 0.0 · short_function_requires_other_identity_evidence, insufficient_independent_call_anchors, already_matched_elsewhere
- 2. [`00c5ba80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5ba80.md) · スコア 80.0 · 採用条件未達 · 順位差 80.0 / 0.0 · short_function_requires_other_identity_evidence, insufficient_independent_call_anchors, already_matched_elsewhere
- 3. [`00c5da80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5da80.md) · スコア 80.0 · 採用条件未達 · 順位差 80.0 / 0.0 · short_function_requires_other_identity_evidence, insufficient_independent_call_anchors, already_matched_elsewhere
- 4. [`00c598e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c598e0.md) · スコア 65.0 · 採用条件未達 · 順位差 -15.0 / -15.0 · short_function_requires_other_identity_evidence, instruction_coverage, insufficient_independent_call_anchors

~~~json
{
  "initial_reason": "candidate_for_unmatched_old_function",
  "order": "score_descending_then_address",
  "ranked_candidates": [
    {
      "eligible": false,
      "evidence": {
        "coverage": [
          1.0,
          1.0
        ],
        "cfg_coverage": [
          1.0,
          1.0
        ],
        "mapped_data": 0,
        "held": [
          "short_function_requires_other_identity_evidence",
          "insufficient_independent_call_anchors",
          "already_matched_elsewhere"
        ],
        "margin": 80.0,
        "reverse_margin": 0.0
      },
      "new": "00c59a80",
      "score": 80.0
    },
    {
      "eligible": false,
      "evidence": {
        "coverage": [
          1.0,
          1.0
        ],
        "cfg_coverage": [
          1.0,
          1.0
        ],
        "mapped_data": 0,
        "held": [
          "short_function_requires_other_identity_evidence",
          "insufficient_independent_call_anchors",
          "already_matched_elsewhere"
        ],
        "margin": 80.0,
        "reverse_margin": 0.0
      },
      "new": "00c5ba80",
      "score": 80.0
    },
    {
      "eligible": false,
      "evidence": {
        "coverage": [
          1.0,
          1.0
        ],
        "cfg_coverage": [
          1.0,
          1.0
        ],
        "mapped_data": 0,
        "held": [
          "short_function_requires_other_identity_evidence",
          "insufficient_independent_call_anchors",
          "already_matched_elsewhere"
        ],
        "margin": 80.0,
        "reverse_margin": 0.0
      },
      "new": "00c5da80",
      "score": 80.0
    }
  ],
  "ranking_method": "instruction_blocks"
}
~~~

<a id="review-0ad89c1df35e5930d3ce38c6eb869408"></a>

### v16.0.2 [`00c5a260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a260.md) &lt;EXTERNAL&gt;::AAsset_seek

`competing_candidates` 

呼出元 1件 [`0057d140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0057d/0057d140.md) · 呼出先 1件 [`0112a280`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0112a/0112a280.md)

- 1. [`00c58330`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58330.md) · スコア 80.0 · 採用条件未達 · 順位差 80.0 / 0.0 · short_function_requires_other_identity_evidence, insufficient_independent_call_anchors, already_matched_elsewhere
- 2. [`00c5a330`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a330.md) · スコア 80.0 · 採用条件未達 · 順位差 80.0 / 0.0 · short_function_requires_other_identity_evidence, insufficient_independent_call_anchors, already_matched_elsewhere
- 3. [`00c5c330`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c330.md) · スコア 80.0 · 採用条件未達 · 順位差 80.0 / 0.0 · short_function_requires_other_identity_evidence, insufficient_independent_call_anchors, already_matched_elsewhere
- 4. [`00c5e330`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e330.md) · スコア 80.0 · 採用条件未達 · 順位差 80.0 / 0.0 · short_function_requires_other_identity_evidence, insufficient_independent_call_anchors, already_matched_elsewhere
- 5. [`00c5a190`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a190.md) · スコア 65.0 · 採用条件未達 · 順位差 -15.0 / -15.0 · short_function_requires_other_identity_evidence, instruction_coverage, insufficient_independent_call_anchors
- 6. [`00c5a1a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a1a0.md) · スコア 65.0 · 採用条件未達 · 順位差 -15.0 / -15.0 · short_function_requires_other_identity_evidence, instruction_coverage, insufficient_independent_call_anchors

~~~json
{
  "initial_reason": "candidate_for_unmatched_old_function",
  "order": "score_descending_then_address",
  "ranked_candidates": [
    {
      "eligible": false,
      "evidence": {
        "coverage": [
          1.0,
          1.0
        ],
        "cfg_coverage": [
          1.0,
          1.0
        ],
        "mapped_data": 0,
        "held": [
          "short_function_requires_other_identity_evidence",
          "insufficient_independent_call_anchors",
          "already_matched_elsewhere"
        ],
        "margin": 80.0,
        "reverse_margin": 0.0
      },
      "new": "00c58330",
      "score": 80.0
    },
    {
      "eligible": false,
      "evidence": {
        "coverage": [
          1.0,
          1.0
        ],
        "cfg_coverage": [
          1.0,
          1.0
        ],
        "mapped_data": 0,
        "held": [
          "short_function_requires_other_identity_evidence",
          "insufficient_independent_call_anchors",
          "already_matched_elsewhere"
        ],
        "margin": 80.0,
        "reverse_margin": 0.0
      },
      "new": "00c5a330",
      "score": 80.0
    },
    {
      "eligible": false,
      "evidence": {
        "coverage": [
          1.0,
          1.0
        ],
        "cfg_coverage": [
          1.0,
          1.0
        ],
        "mapped_data": 0,
        "held": [
          "short_function_requires_other_identity_evidence",
          "insufficient_independent_call_anchors",
          "already_matched_elsewhere"
        ],
        "margin": 80.0,
        "reverse_margin": 0.0
      },
      "new": "00c5c330",
      "score": 80.0
    }
  ],
  "ranking_method": "instruction_blocks"
}
~~~

<a id="review-da8ae753c0ce9c43d30a8d8d7e4792d1"></a>

### v16.0.2 [`00c5a270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a270.md) &lt;EXTERNAL&gt;::AAsset_openFileDescriptor64

`competing_candidates` 

呼出元 2件 [`0057d1d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0057d/0057d1d0.md) [`0057d1e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0057d/0057d1e4.md) · 呼出先 1件 [`0112a288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0112a/0112a288.md)

- 1. [`00c58340`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58340.md) · スコア 80.0 · 採用条件未達 · 順位差 80.0 / 0.0 · short_function_requires_other_identity_evidence, insufficient_independent_call_anchors, already_matched_elsewhere
- 2. [`00c5a340`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a340.md) · スコア 80.0 · 採用条件未達 · 順位差 80.0 / 0.0 · short_function_requires_other_identity_evidence, insufficient_independent_call_anchors, already_matched_elsewhere
- 3. [`00c5c340`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c340.md) · スコア 80.0 · 採用条件未達 · 順位差 80.0 / 0.0 · short_function_requires_other_identity_evidence, insufficient_independent_call_anchors, already_matched_elsewhere
- 4. [`00c5e340`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e340.md) · スコア 80.0 · 採用条件未達 · 順位差 80.0 / 0.0 · short_function_requires_other_identity_evidence, insufficient_independent_call_anchors, already_matched_elsewhere
- 5. [`00c5a190`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a190.md) · スコア 65.0 · 採用条件未達 · 順位差 -15.0 / -15.0 · short_function_requires_other_identity_evidence, instruction_coverage, insufficient_independent_call_anchors
- 6. [`00c5a1a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a1a0.md) · スコア 65.0 · 採用条件未達 · 順位差 -15.0 / -15.0 · short_function_requires_other_identity_evidence, instruction_coverage, insufficient_independent_call_anchors

~~~json
{
  "initial_reason": "candidate_for_unmatched_old_function",
  "order": "score_descending_then_address",
  "ranked_candidates": [
    {
      "eligible": false,
      "evidence": {
        "coverage": [
          1.0,
          1.0
        ],
        "cfg_coverage": [
          1.0,
          1.0
        ],
        "mapped_data": 0,
        "held": [
          "short_function_requires_other_identity_evidence",
          "insufficient_independent_call_anchors",
          "already_matched_elsewhere"
        ],
        "margin": 80.0,
        "reverse_margin": 0.0
      },
      "new": "00c58340",
      "score": 80.0
    },
    {
      "eligible": false,
      "evidence": {
        "coverage": [
          1.0,
          1.0
        ],
        "cfg_coverage": [
          1.0,
          1.0
        ],
        "mapped_data": 0,
        "held": [
          "short_function_requires_other_identity_evidence",
          "insufficient_independent_call_anchors",
          "already_matched_elsewhere"
        ],
        "margin": 80.0,
        "reverse_margin": 0.0
      },
      "new": "00c5a340",
      "score": 80.0
    },
    {
      "eligible": false,
      "evidence": {
        "coverage": [
          1.0,
          1.0
        ],
        "cfg_coverage": [
          1.0,
          1.0
        ],
        "mapped_data": 0,
        "held": [
          "short_function_requires_other_identity_evidence",
          "insufficient_independent_call_anchors",
          "already_matched_elsewhere"
        ],
        "margin": 80.0,
        "reverse_margin": 0.0
      },
      "new": "00c5c340",
      "score": 80.0
    }
  ],
  "ranking_method": "instruction_blocks"
}
~~~

<a id="review-6f2590ebef6b56db89a74e18bab15e80"></a>

### v16.0.2 [`00c5a2c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a2c0.md) &lt;EXTERNAL&gt;::feof

`competing_candidates` 

呼出元 1件 [`0057d364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0057d/0057d364.md) · 呼出先 1件 [`0112a2b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0112a/0112a2b0.md)

- 1. [`00c58390`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58390.md) · スコア 80.0 · 採用条件未達 · 順位差 80.0 / 0.0 · short_function_requires_other_identity_evidence, insufficient_independent_call_anchors, already_matched_elsewhere
- 2. [`00c5a390`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a390.md) · スコア 80.0 · 採用条件未達 · 順位差 80.0 / 0.0 · short_function_requires_other_identity_evidence, insufficient_independent_call_anchors, already_matched_elsewhere
- 3. [`00c5c390`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c390.md) · スコア 80.0 · 採用条件未達 · 順位差 80.0 / 0.0 · short_function_requires_other_identity_evidence, insufficient_independent_call_anchors, already_matched_elsewhere
- 4. [`00c5e390`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e390.md) · スコア 80.0 · 採用条件未達 · 順位差 80.0 / 0.0 · short_function_requires_other_identity_evidence, insufficient_independent_call_anchors, already_matched_elsewhere
- 5. [`00c5a1f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a1f0.md) · スコア 65.0 · 採用条件未達 · 順位差 -15.0 / -15.0 · short_function_requires_other_identity_evidence, instruction_coverage, insufficient_independent_call_anchors

~~~json
{
  "initial_reason": "candidate_for_unmatched_old_function",
  "order": "score_descending_then_address",
  "ranked_candidates": [
    {
      "eligible": false,
      "evidence": {
        "coverage": [
          1.0,
          1.0
        ],
        "cfg_coverage": [
          1.0,
          1.0
        ],
        "mapped_data": 0,
        "held": [
          "short_function_requires_other_identity_evidence",
          "insufficient_independent_call_anchors",
          "already_matched_elsewhere"
        ],
        "margin": 80.0,
        "reverse_margin": 0.0
      },
      "new": "00c58390",
      "score": 80.0
    },
    {
      "eligible": false,
      "evidence": {
        "coverage": [
          1.0,
          1.0
        ],
        "cfg_coverage": [
          1.0,
          1.0
        ],
        "mapped_data": 0,
        "held": [
          "short_function_requires_other_identity_evidence",
          "insufficient_independent_call_anchors",
          "already_matched_elsewhere"
        ],
        "margin": 80.0,
        "reverse_margin": 0.0
      },
      "new": "00c5a390",
      "score": 80.0
    },
    {
      "eligible": false,
      "evidence": {
        "coverage": [
          1.0,
          1.0
        ],
        "cfg_coverage": [
          1.0,
          1.0
        ],
        "mapped_data": 0,
        "held": [
          "short_function_requires_other_identity_evidence",
          "insufficient_independent_call_anchors",
          "already_matched_elsewhere"
        ],
        "margin": 80.0,
        "reverse_margin": 0.0
      },
      "new": "00c5c390",
      "score": 80.0
    }
  ],
  "ranking_method": "instruction_blocks"
}
~~~

<a id="review-2e28713ff2ff5f51973d659319c760e9"></a>

### v16.0.2 [`00c5a500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a500.md) &lt;EXTERNAL&gt;::glFrontFace

`competing_candidates` 

呼出元 1件 [`00591840`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00591/00591840.md) · 呼出先 1件 [`0112a3c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0112a/0112a3c0.md)

- 1. [`00c585d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c585d0.md) · スコア 80.0 · 採用条件未達 · 順位差 80.0 / 0.0 · short_function_requires_other_identity_evidence, insufficient_independent_call_anchors, already_matched_elsewhere
- 2. [`00c5a5d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a5d0.md) · スコア 80.0 · 採用条件未達 · 順位差 80.0 / 0.0 · short_function_requires_other_identity_evidence, insufficient_independent_call_anchors, already_matched_elsewhere
- 3. [`00c5c5d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c5d0.md) · スコア 80.0 · 採用条件未達 · 順位差 80.0 / 0.0 · short_function_requires_other_identity_evidence, insufficient_independent_call_anchors, already_matched_elsewhere
- 4. [`00c5e5d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e5d0.md) · スコア 80.0 · 採用条件未達 · 順位差 80.0 / 0.0 · short_function_requires_other_identity_evidence, insufficient_independent_call_anchors, already_matched_elsewhere
- 5. [`00c5a430`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a430.md) · スコア 65.0 · 採用条件未達 · 順位差 -15.0 / -15.0 · short_function_requires_other_identity_evidence, instruction_coverage, insufficient_independent_call_anchors
- 6. [`00c5a440`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a440.md) · スコア 65.0 · 採用条件未達 · 順位差 -15.0 / -15.0 · short_function_requires_other_identity_evidence, instruction_coverage, insufficient_independent_call_anchors

~~~json
{
  "initial_reason": "candidate_for_unmatched_old_function",
  "order": "score_descending_then_address",
  "ranked_candidates": [
    {
      "eligible": false,
      "evidence": {
        "coverage": [
          1.0,
          1.0
        ],
        "cfg_coverage": [
          1.0,
          1.0
        ],
        "mapped_data": 0,
        "held": [
          "short_function_requires_other_identity_evidence",
          "insufficient_independent_call_anchors",
          "already_matched_elsewhere"
        ],
        "margin": 80.0,
        "reverse_margin": 0.0
      },
      "new": "00c585d0",
      "score": 80.0
    },
    {
      "eligible": false,
      "evidence": {
        "coverage": [
          1.0,
          1.0
        ],
        "cfg_coverage": [
          1.0,
          1.0
        ],
        "mapped_data": 0,
        "held": [
          "short_function_requires_other_identity_evidence",
          "insufficient_independent_call_anchors",
          "already_matched_elsewhere"
        ],
        "margin": 80.0,
        "reverse_margin": 0.0
      },
      "new": "00c5a5d0",
      "score": 80.0
    },
    {
      "eligible": false,
      "evidence": {
        "coverage": [
          1.0,
          1.0
        ],
        "cfg_coverage": [
          1.0,
          1.0
        ],
        "mapped_data": 0,
        "held": [
          "short_function_requires_other_identity_evidence",
          "insufficient_independent_call_anchors",
          "already_matched_elsewhere"
        ],
        "margin": 80.0,
        "reverse_margin": 0.0
      },
      "new": "00c5c5d0",
      "score": 80.0
    }
  ],
  "ranking_method": "instruction_blocks"
}
~~~

<a id="review-27f77a5191a67b79d022d188479bfd7f"></a>

### v16.0.2 [`00c5a510`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a510.md) &lt;EXTERNAL&gt;::glLineWidth

`competing_candidates` 

呼出元 1件 [`00591848`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00591/00591848.md) · 呼出先 1件 [`0112a3c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0112a/0112a3c8.md)

- 1. [`00c585e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c585e0.md) · スコア 80.0 · 採用条件未達 · 順位差 80.0 / 0.0 · short_function_requires_other_identity_evidence, insufficient_independent_call_anchors, already_matched_elsewhere
- 2. [`00c5a5e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a5e0.md) · スコア 80.0 · 採用条件未達 · 順位差 80.0 / 0.0 · short_function_requires_other_identity_evidence, insufficient_independent_call_anchors, already_matched_elsewhere
- 3. [`00c5c5e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c5e0.md) · スコア 80.0 · 採用条件未達 · 順位差 80.0 / 0.0 · short_function_requires_other_identity_evidence, insufficient_independent_call_anchors, already_matched_elsewhere
- 4. [`00c5e5e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e5e0.md) · スコア 80.0 · 採用条件未達 · 順位差 80.0 / 0.0 · short_function_requires_other_identity_evidence, insufficient_independent_call_anchors, already_matched_elsewhere
- 5. [`00c5a430`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a430.md) · スコア 65.0 · 採用条件未達 · 順位差 -15.0 / -15.0 · short_function_requires_other_identity_evidence, instruction_coverage, insufficient_independent_call_anchors
- 6. [`00c5a440`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a440.md) · スコア 65.0 · 採用条件未達 · 順位差 -15.0 / -15.0 · short_function_requires_other_identity_evidence, instruction_coverage, insufficient_independent_call_anchors

~~~json
{
  "initial_reason": "candidate_for_unmatched_old_function",
  "order": "score_descending_then_address",
  "ranked_candidates": [
    {
      "eligible": false,
      "evidence": {
        "coverage": [
          1.0,
          1.0
        ],
        "cfg_coverage": [
          1.0,
          1.0
        ],
        "mapped_data": 0,
        "held": [
          "short_function_requires_other_identity_evidence",
          "insufficient_independent_call_anchors",
          "already_matched_elsewhere"
        ],
        "margin": 80.0,
        "reverse_margin": 0.0
      },
      "new": "00c585e0",
      "score": 80.0
    },
    {
      "eligible": false,
      "evidence": {
        "coverage": [
          1.0,
          1.0
        ],
        "cfg_coverage": [
          1.0,
          1.0
        ],
        "mapped_data": 0,
        "held": [
          "short_function_requires_other_identity_evidence",
          "insufficient_independent_call_anchors",
          "already_matched_elsewhere"
        ],
        "margin": 80.0,
        "reverse_margin": 0.0
      },
      "new": "00c5a5e0",
      "score": 80.0
    },
    {
      "eligible": false,
      "evidence": {
        "coverage": [
          1.0,
          1.0
        ],
        "cfg_coverage": [
          1.0,
          1.0
        ],
        "mapped_data": 0,
        "held": [
          "short_function_requires_other_identity_evidence",
          "insufficient_independent_call_anchors",
          "already_matched_elsewhere"
        ],
        "margin": 80.0,
        "reverse_margin": 0.0
      },
      "new": "00c5c5e0",
      "score": 80.0
    }
  ],
  "ranking_method": "instruction_blocks"
}
~~~

<a id="review-cb49b9f0dfff94d9649ad0528d5cd0e3"></a>

### v16.0.2 [`00c5a570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a570.md) &lt;EXTERNAL&gt;::glViewport

`competing_candidates` 

呼出元 1件 [`00591b48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00591/00591b48.md) · 呼出先 1件 [`0112a3f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0112a/0112a3f8.md)

- 1. [`00c58640`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58640.md) · スコア 80.0 · 採用条件未達 · 順位差 80.0 / 0.0 · short_function_requires_other_identity_evidence, insufficient_independent_call_anchors, already_matched_elsewhere
- 2. [`00c5a640`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a640.md) · スコア 80.0 · 採用条件未達 · 順位差 80.0 / 0.0 · short_function_requires_other_identity_evidence, insufficient_independent_call_anchors, already_matched_elsewhere
- 3. [`00c5c640`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c640.md) · スコア 80.0 · 採用条件未達 · 順位差 80.0 / 0.0 · short_function_requires_other_identity_evidence, insufficient_independent_call_anchors, already_matched_elsewhere
- 4. [`00c5e640`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e640.md) · スコア 80.0 · 採用条件未達 · 順位差 80.0 / 0.0 · short_function_requires_other_identity_evidence, insufficient_independent_call_anchors, already_matched_elsewhere
- 5. [`00c5a4a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a4a0.md) · スコア 65.0 · 採用条件未達 · 順位差 -15.0 / -15.0 · short_function_requires_other_identity_evidence, instruction_coverage, insufficient_independent_call_anchors

~~~json
{
  "initial_reason": "candidate_for_unmatched_old_function",
  "order": "score_descending_then_address",
  "ranked_candidates": [
    {
      "eligible": false,
      "evidence": {
        "coverage": [
          1.0,
          1.0
        ],
        "cfg_coverage": [
          1.0,
          1.0
        ],
        "mapped_data": 0,
        "held": [
          "short_function_requires_other_identity_evidence",
          "insufficient_independent_call_anchors",
          "already_matched_elsewhere"
        ],
        "margin": 80.0,
        "reverse_margin": 0.0
      },
      "new": "00c58640",
      "score": 80.0
    },
    {
      "eligible": false,
      "evidence": {
        "coverage": [
          1.0,
          1.0
        ],
        "cfg_coverage": [
          1.0,
          1.0
        ],
        "mapped_data": 0,
        "held": [
          "short_function_requires_other_identity_evidence",
          "insufficient_independent_call_anchors",
          "already_matched_elsewhere"
        ],
        "margin": 80.0,
        "reverse_margin": 0.0
      },
      "new": "00c5a640",
      "score": 80.0
    },
    {
      "eligible": false,
      "evidence": {
        "coverage": [
          1.0,
          1.0
        ],
        "cfg_coverage": [
          1.0,
          1.0
        ],
        "mapped_data": 0,
        "held": [
          "short_function_requires_other_identity_evidence",
          "insufficient_independent_call_anchors",
          "already_matched_elsewhere"
        ],
        "margin": 80.0,
        "reverse_margin": 0.0
      },
      "new": "00c5c640",
      "score": 80.0
    }
  ],
  "ranking_method": "instruction_blocks"
}
~~~

<a id="review-93a67859a3121a8cd7688b1e6835c108"></a>

### v16.0.2 [`00c5a9f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a9f0.md) &lt;EXTERNAL&gt;::cosf

`competing_candidates` 

呼出元 1件 [`007df140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df140.md) · 呼出先 1件 [`0112a558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0112a/0112a558.md)

- 1. [`00c58ac0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58ac0.md) · スコア 80.0 · 採用条件未達 · 順位差 80.0 / 0.0 · short_function_requires_other_identity_evidence, insufficient_independent_call_anchors, already_matched_elsewhere
- 2. [`00c5aac0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aac0.md) · スコア 80.0 · 採用条件未達 · 順位差 80.0 / 0.0 · short_function_requires_other_identity_evidence, insufficient_independent_call_anchors, already_matched_elsewhere
- 3. [`00c5cac0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cac0.md) · スコア 80.0 · 採用条件未達 · 順位差 80.0 / 0.0 · short_function_requires_other_identity_evidence, insufficient_independent_call_anchors, already_matched_elsewhere
- 4. [`00c5eac0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5eac0.md) · スコア 80.0 · 採用条件未達 · 順位差 80.0 / 0.0 · short_function_requires_other_identity_evidence, insufficient_independent_call_anchors, already_matched_elsewhere
- 5. [`00c5a920`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a920.md) · スコア 65.0 · 採用条件未達 · 順位差 -15.0 / -15.0 · short_function_requires_other_identity_evidence, instruction_coverage, insufficient_independent_call_anchors

~~~json
{
  "initial_reason": "candidate_for_unmatched_old_function",
  "order": "score_descending_then_address",
  "ranked_candidates": [
    {
      "eligible": false,
      "evidence": {
        "coverage": [
          1.0,
          1.0
        ],
        "cfg_coverage": [
          1.0,
          1.0
        ],
        "mapped_data": 0,
        "held": [
          "short_function_requires_other_identity_evidence",
          "insufficient_independent_call_anchors",
          "already_matched_elsewhere"
        ],
        "margin": 80.0,
        "reverse_margin": 0.0
      },
      "new": "00c58ac0",
      "score": 80.0
    },
    {
      "eligible": false,
      "evidence": {
        "coverage": [
          1.0,
          1.0
        ],
        "cfg_coverage": [
          1.0,
          1.0
        ],
        "mapped_data": 0,
        "held": [
          "short_function_requires_other_identity_evidence",
          "insufficient_independent_call_anchors",
          "already_matched_elsewhere"
        ],
        "margin": 80.0,
        "reverse_margin": 0.0
      },
      "new": "00c5aac0",
      "score": 80.0
    },
    {
      "eligible": false,
      "evidence": {
        "coverage": [
          1.0,
          1.0
        ],
        "cfg_coverage": [
          1.0,
          1.0
        ],
        "mapped_data": 0,
        "held": [
          "short_function_requires_other_identity_evidence",
          "insufficient_independent_call_anchors",
          "already_matched_elsewhere"
        ],
        "margin": 80.0,
        "reverse_margin": 0.0
      },
      "new": "00c5cac0",
      "score": 80.0
    }
  ],
  "ranking_method": "instruction_blocks"
}
~~~

<a id="review-10e175e78a3a3afe579c5c251aad29b9"></a>

### v16.0.2 [`0112a000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0112a/0112a000.md) &lt;EXTERNAL&gt;::__cxa_finalize

`competing_candidates` 

呼出元 1件 [`00c57ef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57ef0.md) · 呼出先 0件 

- 1. [`0112a000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0112a/0112a000.md) · スコア 79.0 · 採用条件未達 · 順位差 79.0 / 79.0 · 

~~~json
{
  "initial_reason": "candidate_for_unmatched_old_function",
  "order": "score_descending_then_address",
  "ranked_candidates": [
    {
      "eligible": "",
      "evidence": {
        "margin": 79.0,
        "reverse_margin": 79.0
      },
      "new": "0112a000",
      "score": 79.0
    }
  ],
  "ranking_method": "initial_matcher"
}
~~~

<a id="review-1211c010f3afa76cd1b1048a3645170c"></a>

### v16.0.2 [`0112a148`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0112a/0112a148.md) &lt;EXTERNAL&gt;::closedir

`competing_candidates` 

呼出元 1件 [`004fbf3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004fb/004fbf3c.md) · 呼出先 0件 

- 1. [`0112a148`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0112a/0112a148.md) · スコア 84.0 · 採用条件未達 · 順位差 84.0 / 84.0 · 

~~~json
{
  "initial_reason": "candidate_for_unmatched_old_function",
  "order": "score_descending_then_address",
  "ranked_candidates": [
    {
      "eligible": "",
      "evidence": {
        "margin": 84.0,
        "reverse_margin": 84.0
      },
      "new": "0112a148",
      "score": 84.0
    }
  ],
  "ranking_method": "initial_matcher"
}
~~~

<a id="review-a63d7378bbe12513657f74a7a31ca190"></a>

### v16.0.2 [`0112a188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0112a/0112a188.md) &lt;EXTERNAL&gt;::siglongjmp

`competing_candidates` 

呼出元 1件 [`00c599b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c599b0.md) · 呼出先 0件 

- 1. [`0112a188`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0112a/0112a188.md) · スコア 84.0 · 採用条件未達 · 順位差 84.0 / 84.0 · 

~~~json
{
  "initial_reason": "candidate_for_unmatched_old_function",
  "order": "score_descending_then_address",
  "ranked_candidates": [
    {
      "eligible": "",
      "evidence": {
        "margin": 84.0,
        "reverse_margin": 84.0
      },
      "new": "0112a188",
      "score": 84.0
    }
  ],
  "ranking_method": "initial_matcher"
}
~~~

<a id="review-0d498ca43d492f24d1a3b939a4a2c30f"></a>

### v16.0.2 [`0112a280`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0112a/0112a280.md) &lt;EXTERNAL&gt;::AAsset_seek

`competing_candidates` 

呼出元 1件 [`00c5a260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a260.md) · 呼出先 0件 

- 1. [`0112a280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0112a/0112a280.md) · スコア 84.0 · 採用条件未達 · 順位差 15.0 / 15.0 · 
- 2. [`0112a288`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0112a/0112a288.md) · スコア 69.0 · 採用条件未達 · 順位差 — / — · 

~~~json
{
  "initial_reason": "candidate_for_unmatched_old_function",
  "order": "score_descending_then_address",
  "ranked_candidates": [
    {
      "eligible": "",
      "evidence": {
        "margin": 15.0,
        "reverse_margin": 15.0
      },
      "new": "0112a280",
      "score": 84.0
    },
    {
      "eligible": "",
      "evidence": {},
      "new": "0112a288",
      "score": 69.0
    }
  ],
  "ranking_method": "initial_matcher"
}
~~~

<a id="review-09ea08a264504dcd908e870743962c9f"></a>

### v16.0.2 [`0112a288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0112a/0112a288.md) &lt;EXTERNAL&gt;::AAsset_openFileDescriptor64

`competing_candidates` 

呼出元 1件 [`00c5a270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a270.md) · 呼出先 0件 

- 1. [`0112a288`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0112a/0112a288.md) · スコア 84.0 · 採用条件未達 · 順位差 15.0 / 15.0 · 
- 2. [`0112a280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0112a/0112a280.md) · スコア 69.0 · 採用条件未達 · 順位差 — / — · 

~~~json
{
  "initial_reason": "candidate_for_unmatched_old_function",
  "order": "score_descending_then_address",
  "ranked_candidates": [
    {
      "eligible": "",
      "evidence": {
        "margin": 15.0,
        "reverse_margin": 15.0
      },
      "new": "0112a288",
      "score": 84.0
    },
    {
      "eligible": "",
      "evidence": {},
      "new": "0112a280",
      "score": 69.0
    }
  ],
  "ranking_method": "initial_matcher"
}
~~~

<a id="review-d5adcb93ce24bc79096dfbe5f80cdd63"></a>

### v16.0.2 [`0112a2b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0112a/0112a2b0.md) &lt;EXTERNAL&gt;::feof

`competing_candidates` 

呼出元 1件 [`00c5a2c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a2c0.md) · 呼出先 0件 

- 1. [`0112a2b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0112a/0112a2b0.md) · スコア 84.0 · 採用条件未達 · 順位差 84.0 / 84.0 · 

~~~json
{
  "initial_reason": "candidate_for_unmatched_old_function",
  "order": "score_descending_then_address",
  "ranked_candidates": [
    {
      "eligible": "",
      "evidence": {
        "margin": 84.0,
        "reverse_margin": 84.0
      },
      "new": "0112a2b0",
      "score": 84.0
    }
  ],
  "ranking_method": "initial_matcher"
}
~~~

<a id="review-f193f2730d75822ee99b15fe8629b204"></a>

### v16.0.2 [`0112a3c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0112a/0112a3c0.md) &lt;EXTERNAL&gt;::glFrontFace

`competing_candidates` 

呼出元 1件 [`00c5a500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a500.md) · 呼出先 0件 

- 1. [`0112a3c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0112a/0112a3c0.md) · スコア 84.0 · 採用条件未達 · 順位差 15.0 / 15.0 · 
- 2. [`0112a3c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0112a/0112a3c8.md) · スコア 69.0 · 採用条件未達 · 順位差 — / — · 

~~~json
{
  "initial_reason": "candidate_for_unmatched_old_function",
  "order": "score_descending_then_address",
  "ranked_candidates": [
    {
      "eligible": "",
      "evidence": {
        "margin": 15.0,
        "reverse_margin": 15.0
      },
      "new": "0112a3c0",
      "score": 84.0
    },
    {
      "eligible": "",
      "evidence": {},
      "new": "0112a3c8",
      "score": 69.0
    }
  ],
  "ranking_method": "initial_matcher"
}
~~~

<a id="review-579abf0054267294ae724da180fb6291"></a>

### v16.0.2 [`0112a3c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0112a/0112a3c8.md) &lt;EXTERNAL&gt;::glLineWidth

`competing_candidates` 

呼出元 1件 [`00c5a510`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a510.md) · 呼出先 0件 

- 1. [`0112a3c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0112a/0112a3c8.md) · スコア 84.0 · 採用条件未達 · 順位差 15.0 / 15.0 · 
- 2. [`0112a3c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0112a/0112a3c0.md) · スコア 69.0 · 採用条件未達 · 順位差 — / — · 

~~~json
{
  "initial_reason": "candidate_for_unmatched_old_function",
  "order": "score_descending_then_address",
  "ranked_candidates": [
    {
      "eligible": "",
      "evidence": {
        "margin": 15.0,
        "reverse_margin": 15.0
      },
      "new": "0112a3c8",
      "score": 84.0
    },
    {
      "eligible": "",
      "evidence": {},
      "new": "0112a3c0",
      "score": 69.0
    }
  ],
  "ranking_method": "initial_matcher"
}
~~~

<a id="review-b3b6b44ca69eb530187a762714fce557"></a>

### v16.0.2 [`0112a3f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0112a/0112a3f8.md) &lt;EXTERNAL&gt;::glViewport

`competing_candidates` 

呼出元 1件 [`00c5a570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a570.md) · 呼出先 0件 

- 1. [`0112a3f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0112a/0112a3f8.md) · スコア 84.0 · 採用条件未達 · 順位差 84.0 / 84.0 · 

~~~json
{
  "initial_reason": "candidate_for_unmatched_old_function",
  "order": "score_descending_then_address",
  "ranked_candidates": [
    {
      "eligible": "",
      "evidence": {
        "margin": 84.0,
        "reverse_margin": 84.0
      },
      "new": "0112a3f8",
      "score": 84.0
    }
  ],
  "ranking_method": "initial_matcher"
}
~~~

<a id="review-c06296dfe7517d222057b4b52bdacac3"></a>

### v16.0.2 [`0112a558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0112a/0112a558.md) &lt;EXTERNAL&gt;::cosf

`competing_candidates` 

呼出元 1件 [`00c5a9f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a9f0.md) · 呼出先 0件 

- 1. [`0112a558`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0112a/0112a558.md) · スコア 84.0 · 採用条件未達 · 順位差 84.0 / 84.0 · 

~~~json
{
  "initial_reason": "candidate_for_unmatched_old_function",
  "order": "score_descending_then_address",
  "ranked_candidates": [
    {
      "eligible": "",
      "evidence": {
        "margin": 84.0,
        "reverse_margin": 84.0
      },
      "new": "0112a558",
      "score": 84.0
    }
  ],
  "ranking_method": "initial_matcher"
}
~~~

### v16.0.1 [`0043ae10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae10.md) _FINI_1

`unresolved` 

呼出元 0件  · 呼出先 1件 [`00c57e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e20.md)


~~~json
{
  "bounds": [],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

<a id="review-d19720fb43a0799c392e0e41d4dabfe8"></a>

### v16.0.1 [`0043ae20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae20.md) FUN_0043ae20

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [],
  "initial_reason": "no_candidate_with_available_features",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`0043ae30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae30.md) FUN_0043ae30

`unresolved` 

呼出元 1件 [`0043ae44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae44.md) · 呼出先 0件 


~~~json
{
  "bounds": [
    "0043ae28",
    "0043ae44",
    "0043ae68",
    "0043ae84"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`0043bdc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bdc8.md) FUN_0043bdc8

`unresolved` 

呼出元 0件  · 呼出先 1件 [`00b2b8f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2b/00b2b8f0.md)


~~~json
{
  "bounds": [
    "0043bd98",
    "0043bdd0",
    "0043bdd8",
    "0043be10"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`0043c1dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043c/0043c1dc.md) FUN_0043c1dc

`unresolved` 

呼出元 2件 [`0043c180`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043c/0043c180.md) [`0043c1fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043c/0043c1fc.md) · 呼出先 0件 


~~~json
{
  "bounds": [
    "0043c180",
    "0043c1fc",
    "0043c1c0",
    "0043c23c"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`00442d6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442d6c.md) FUN_00442d6c

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "00442b38",
    "00442d70",
    "00442b78",
    "00442db0"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`00442db0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442db0.md) FUN_00442db0

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "00442dac",
    "00442ddc",
    "00442dec",
    "00442e1c"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`00442db4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442db4.md) FUN_00442db4

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "00442dac",
    "00442ddc",
    "00442dec",
    "00442e1c"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`00442dd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442dd0.md) FUN_00442dd0

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "00442dac",
    "00442ddc",
    "00442dec",
    "00442e1c"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`00442eec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442eec.md) FUN_00442eec

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "00442ee8",
    "00442f24",
    "00442f28",
    "00442f64"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`00442efc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442efc.md) FUN_00442efc

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "00442ee8",
    "00442f24",
    "00442f28",
    "00442f64"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`00442f18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442f18.md) FUN_00442f18

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "00442ee8",
    "00442f24",
    "00442f28",
    "00442f64"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`00443044`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/00443044.md) FUN_00443044

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "00442f78",
    "0044306c",
    "00442fb8",
    "004430ac"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`00443060`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/00443060.md) FUN_00443060

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "00442f78",
    "0044306c",
    "00442fb8",
    "004430ac"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`0044313c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/0044313c.md) FUN_0044313c

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "004430c0",
    "00443168",
    "00443100",
    "004431a8"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`00443158`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/00443158.md) FUN_00443158

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "004430c0",
    "00443168",
    "00443100",
    "004431a8"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`00443164`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/00443164.md) FUN_00443164

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "004430c0",
    "00443168",
    "00443100",
    "004431a8"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`004431bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/004431bc.md) FUN_004431bc

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "004431b8",
    "004431f8",
    "004431f8",
    "00443238"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`004431cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/004431cc.md) FUN_004431cc

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "004431b8",
    "004431f8",
    "004431f8",
    "00443238"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`004431e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/004431e8.md) FUN_004431e8

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "004431b8",
    "004431f8",
    "004431f8",
    "00443238"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`004431f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/004431f4.md) FUN_004431f4

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "004431b8",
    "004431f8",
    "004431f8",
    "00443238"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`00443318`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/00443318.md) FUN_00443318

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "0044324c",
    "00443344",
    "0044328c",
    "00443384"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`00443334`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/00443334.md) FUN_00443334

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "0044324c",
    "00443344",
    "0044328c",
    "00443384"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`00443340`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/00443340.md) FUN_00443340

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "0044324c",
    "00443344",
    "0044328c",
    "00443384"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`00443414`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/00443414.md) FUN_00443414

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "00443398",
    "00443440",
    "004433d8",
    "00443480"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`00443430`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/00443430.md) FUN_00443430

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "00443398",
    "00443440",
    "004433d8",
    "00443480"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`0044343c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/0044343c.md) FUN_0044343c

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "00443398",
    "00443440",
    "004433d8",
    "00443480"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`004435f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/004435f8.md) FUN_004435f8

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "00443480",
    "00443620",
    "004434c0",
    "00443660"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`00443614`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/00443614.md) FUN_00443614

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "00443480",
    "00443620",
    "004434c0",
    "00443660"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`00443674`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/00443674.md) FUN_00443674

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "00443660",
    "004436a0",
    "004436a0",
    "004436e0"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`00443690`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/00443690.md) FUN_00443690

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "00443660",
    "004436a0",
    "004436a0",
    "004436e0"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`0044369c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/0044369c.md) FUN_0044369c

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "00443660",
    "004436a0",
    "004436a0",
    "004436e0"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`004436f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/004436f0.md) FUN_004436f0

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "004436e0",
    "00443718",
    "00443720",
    "00443758"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`0044370c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/0044370c.md) FUN_0044370c

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "004436e0",
    "00443718",
    "00443720",
    "00443758"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`00444e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00444/00444e20.md) FUN_00444e20

`unresolved` 

呼出元 2件 [`00872a10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00872/00872a10.md) [`00876f04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00876/00876f04.md) · 呼出先 42件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`004460ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00446/004460ec.md) [`004462d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00446/004462d8.md) [`004463b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00446/004463b8.md) [`00446dc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00446/00446dc0.md)


~~~json
{
  "bounds": [
    "00444bd8",
    "004460ec",
    "00444c18",
    "0044612c"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`004463b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00446/004463b8.md) FUN_004463b8

`unresolved` 

呼出元 2件 [`00444e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00444/00444e20.md) [`0048f460`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048f/0048f460.md) · 呼出先 0件 


~~~json
{
  "bounds": [
    "004462d8",
    "00446530",
    "00446318",
    "00446570"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`0044aacc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044a/0044aacc.md) FUN_0044aacc

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "0044aaa8",
    "0044aae0",
    "0044aae8",
    "0044ab20"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`0044aadc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044a/0044aadc.md) FUN_0044aadc

`unresolved` 

呼出元 1件 [`00444e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00444/00444e20.md) · 呼出先 0件 


~~~json
{
  "bounds": [
    "0044aaa8",
    "0044aae0",
    "0044aae8",
    "0044ab20"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`0044aae4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044a/0044aae4.md) FUN_0044aae4

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "0044aae0",
    "0044ab10",
    "0044ab20",
    "0044ab50"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`0044aae8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044a/0044aae8.md) FUN_0044aae8

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "0044aae0",
    "0044ab10",
    "0044ab20",
    "0044ab50"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`0044ab04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044a/0044ab04.md) FUN_0044ab04

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "0044aae0",
    "0044ab10",
    "0044ab20",
    "0044ab50"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`0044ab38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044a/0044ab38.md) FUN_0044ab38

`unresolved` 

呼出元 1件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) · 呼出先 0件 


~~~json
{
  "bounds": [
    "0044ab14",
    "0044ab4c",
    "0044ab54",
    "0044ab8c"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`0044ab48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044a/0044ab48.md) FUN_0044ab48

`unresolved` 

呼出元 2件 [`00444e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00444/00444e20.md) [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) · 呼出先 0件 


~~~json
{
  "bounds": [
    "0044ab14",
    "0044ab4c",
    "0044ab54",
    "0044ab8c"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`0044ab58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044a/0044ab58.md) FUN_0044ab58

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "0044ab50",
    "0044ab80",
    "0044ab90",
    "0044abc0"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`0044ab74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044a/0044ab74.md) FUN_0044ab74

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "0044ab50",
    "0044ab80",
    "0044ab90",
    "0044abc0"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`0044aba8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044a/0044aba8.md) FUN_0044aba8

`unresolved` 

呼出元 1件 [`006ecd90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ec/006ecd90.md) · 呼出先 0件 


~~~json
{
  "bounds": [
    "0044ab84",
    "0044abbc",
    "0044abc4",
    "0044abfc"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`0044abb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044a/0044abb8.md) FUN_0044abb8

`unresolved` 

呼出元 2件 [`00444e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00444/00444e20.md) [`006ecd90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ec/006ecd90.md) · 呼出先 0件 


~~~json
{
  "bounds": [
    "0044ab84",
    "0044abbc",
    "0044abc4",
    "0044abfc"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`0044ac40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044a/0044ac40.md) FUN_0044ac40

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "0044abc0",
    "0044ac68",
    "0044ac00",
    "0044aca8"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`0044ac5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044a/0044ac5c.md) FUN_0044ac5c

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "0044abc0",
    "0044ac68",
    "0044ac00",
    "0044aca8"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`0044b444`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044b/0044b444.md) FUN_0044b444

`unresolved` 

呼出元 4件 [`004532b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00453/004532b8.md) [`005a141c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005a1/005a141c.md) [`005a2668`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005a2/005a2668.md) [`005a3f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005a3/005a3f10.md) · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)


~~~json
{
  "bounds": [
    "0044b3f4",
    "0044b4e4",
    "0044b434",
    "0044b524"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`0044b494`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044b/0044b494.md) FUN_0044b494

`unresolved` 

呼出元 1件 [`00453cb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00453/00453cb0.md) · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)


~~~json
{
  "bounds": [
    "0044b3f4",
    "0044b4e4",
    "0044b434",
    "0044b524"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`0044b6a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044b/0044b6a8.md) FUN_0044b6a8

`unresolved` 

呼出元 1件 [`00476b50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00476/00476b50.md) · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)


~~~json
{
  "bounds": [
    "0044b584",
    "0044b700",
    "0044b5c4",
    "0044b740"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`0044b7f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044b/0044b7f4.md) FUN_0044b7f4

`unresolved` 

呼出元 3件 [`005a5060`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005a5/005a5060.md) [`005a5a04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005a5/005a5a04.md) [`005a67fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005a6/005a67fc.md) · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)


~~~json
{
  "bounds": [
    "0044b7a4",
    "0044b844",
    "0044b7e4",
    "0044b884"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`0044eaa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044e/0044eaa0.md) FUN_0044eaa0

`unresolved` 

呼出元 1件 [`0075e588`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0075e/0075e588.md) · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)


~~~json
{
  "bounds": [
    "0044e988",
    "0044eaf0",
    "0044e9c8",
    "0044eb30"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`004594a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/004594a8.md) FUN_004594a8

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "0045947c",
    "004594d0",
    "004594bc",
    "00459510"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`004594b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/004594b0.md) FUN_004594b0

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "0045947c",
    "004594d0",
    "004594bc",
    "00459510"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`004594b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/004594b8.md) FUN_004594b8

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "0045947c",
    "004594d0",
    "004594bc",
    "00459510"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`004594c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/004594c0.md) FUN_004594c0

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "0045947c",
    "004594d0",
    "004594bc",
    "00459510"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`004594c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/004594c8.md) FUN_004594c8

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "0045947c",
    "004594d0",
    "004594bc",
    "00459510"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`00459f68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459f68.md) FUN_00459f68

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "00459ef4",
    "00459fa0",
    "00459f34",
    "00459fe0"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`0045a524`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0045a/0045a524.md) FUN_0045a524

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "00459ff0",
    "0045a54c",
    "0045a030",
    "0045a58c"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`0045a540`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0045a/0045a540.md) FUN_0045a540

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "00459ff0",
    "0045a54c",
    "0045a030",
    "0045a58c"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`0045a6c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0045a/0045a6c8.md) FUN_0045a6c8

`unresolved` 

呼出元 5件 [`0045a5a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0045a/0045a5a0.md) [`0045ef14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0045e/0045ef14.md) [`00550a6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00550/00550a6c.md) [`005875e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00587/005875e8.md) [`00bf9cf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf9/00bf9cf8.md) · 呼出先 0件 


~~~json
{
  "bounds": [
    "0045a5a0",
    "0045a6d4",
    "0045a5e0",
    "0045a714"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`0045aa64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0045a/0045aa64.md) FUN_0045aa64

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "0045a770",
    "0045aa8c",
    "0045a7b0",
    "0045aacc"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`0045aa80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0045a/0045aa80.md) FUN_0045aa80

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "0045a770",
    "0045aa8c",
    "0045a7b0",
    "0045aacc"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`0045b2c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0045b/0045b2c8.md) FUN_0045b2c8

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "0045ab6c",
    "0045b2f0",
    "0045abac",
    "0045b330"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`0045b2e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0045b/0045b2e4.md) FUN_0045b2e4

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "0045ab6c",
    "0045b2f0",
    "0045abac",
    "0045b330"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`0045bad4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0045b/0045bad4.md) FUN_0045bad4

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "0045b8d4",
    "0045bafc",
    "0045b914",
    "0045bb3c"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`0045baf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0045b/0045baf0.md) FUN_0045baf0

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "0045b8d4",
    "0045bafc",
    "0045b914",
    "0045bb3c"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`0045c030`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0045c/0045c030.md) FUN_0045c030

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "0045bfbc",
    "0045c068",
    "0045bffc",
    "0045c0a8"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`0045c6bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0045c/0045c6bc.md) FUN_0045c6bc

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "0045c0b8",
    "0045c6e4",
    "0045c0f8",
    "0045c724"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

### v16.0.1 [`0045c6d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0045c/0045c6d8.md) FUN_0045c6d8

`unresolved` 

呼出元 0件  · 呼出先 0件 


~~~json
{
  "bounds": [
    "0045c0b8",
    "0045c6e4",
    "0045c0f8",
    "0045c724"
  ],
  "initial_reason": "insufficient_independent_evidence",
  "reason": "entry_unmatched_not_proof_of_addition_or_deletion"
}
~~~

