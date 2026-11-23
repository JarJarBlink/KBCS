import json
import os
import re
import subprocess

from indexer.ci import REPO, git_remote
from indexer.network import gh, gh_json
from indexer.tracking_migration import migration, resume
from indexer.upstream import ABI, LIBRARY


def checked_plan(work, base, branch):
    if not re.fullmatch('[0-9a-f]{40}', base) or base != os.environ.get('GITHUB_SHA'):
        raise ValueError('The workflow must run at the pinned migration base')
    plan = migration(work, ABI, LIBRARY, base=base)
    if plan['branch'] != branch:
        raise ValueError('The published source inventory differs from the migration plan')
    return plan


def check_step(work, base, branch, tag, expected):
    plan = checked_plan(work, base, branch)
    for step in plan['steps']:
        inputs = step['inputs']
        if inputs['checkpoint'] == tag:
            if inputs['expected_window'] != expected:
                raise ValueError('Requested source hashes differ from the migration plan')
            return step['complete']
        if not step['complete']:
            raise ValueError(f'Complete the earlier migration step for {step["version"]} first')
    raise ValueError('Checkpoint is outside the pinned migration inventory')


def advance(work, base, branch):
    plan = resume(work, checked_plan(work, base, branch))
    if gh_json(f'repos/{REPO}/git/ref/heads/main')['object']['sha'] != base:
        raise ValueError('Main advanced during migration; retain staging and plan again from the new base')
    next_step = next((step for step in plan['steps'] if not step['complete']), None)
    if next_step is not None:
        inputs = next_step['inputs'] | {'migration_base': base}
        endpoint = f'repos/{REPO}/actions/workflows/native-analysis.yml/dispatches'
        payload = json.dumps({'ref': 'main', 'inputs': inputs})
        subprocess.run(['gh', 'api', '--method', 'POST', endpoint, '--input', '-'],
                       input=payload, text=True, check=True, capture_output=True, timeout=90)
        print(f'Staged migration dispatched the next version: {next_step["version"]}', flush=True)
        return

    # 全版の検証済みツリーを一つのコミットとして公開する。公開資料以外の差分は拒否する。
    git = ['git', '-C', str(work)]
    subprocess.run([*git, 'diff', '--quiet', base, 'HEAD', '--', '.',
                    ':(exclude)research/reference/**', ':(exclude)research/comparisons/**'], check=True)
    tree = subprocess.check_output([*git, 'rev-parse', 'HEAD^{tree}'], text=True).strip()
    commit = subprocess.check_output([*git, '-c', 'user.name=github-actions[bot]', '-c',
                                      'user.email=41898282+github-actions[bot]@users.noreply.github.com',
                                      'commit-tree', tree, '-p', base, '-m', 'Publish v3 native references for all saved versions [skip ci]'],
                                     text=True).strip()
    gh('auth', 'setup-git')
    git_remote([*git, '-c', 'pack.threads=1', 'push', 'origin', f'{commit}:refs/heads/main'])
    print(f'Published all {len(plan["steps"])} verified versions in {commit}', flush=True)
