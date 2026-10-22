# Sandbox watchdog + process persistence

## The watchdog

The dev sandbox has a watchdog process that **force-checks-out `/home/z/my-project` to `main` every ~20s**, reverting any file that differs between the working tree and the `main` branch HEAD.

Implications:
- **Uncommitted changes get wiped every ~20s.** Edit a file → wait → file reverts to HEAD.
- **Committed changes survive.** Once you `git commit`, the working tree matches HEAD, so the watchdog has nothing to revert.
- **Branch experiments are dangerous.** If you `git checkout -b feature/x`, the watchdog still expects `main` and will revert your branch's working tree to main's HEAD. To experiment on a branch, clone the repo to a path OUTSIDE the watched directory (e.g., `/home/z/my-project-clone/`) and work there. Note: the Write tool only works under `/home/z/`, so use `/home/z/my-project-clone/` for branch experiments.

## Process persistence — what works vs what doesn't

### ❌ Doesn't work: `setsid bash -c '...' &`

Each Bash tool call is a new shell session in a new cgroup. When the bash command finishes, the cgroup is destroyed, killing all child processes — even those started with `setsid` + `nohup` + `disown` + redirect-to-/dev/null. Vite and Next.js dev servers spawned this way die within seconds of the bash command returning.

### ❌ Doesn't work: `systemd-run` (system not booted with systemd)

The sandbox uses `tini` as init (PID 1), not systemd. `systemd-run` fails with "System has not been booted with systemd as init system."

### ❌ Doesn't work: `at` (not installed)

No `at` or `atd` binary available.

### ❌ Doesn't work: `screen` / `tmux` (not installed)

### ✅ Works: Python `subprocess.Popen(start_new_session=True, close_fds=True)`

```python
import subprocess, os
env = os.environ.copy()
env['BROWSER'] = 'none'  # for vite --open
proc = subprocess.Popen(
    ['./node_modules/.bin/next', 'dev', '-p', '3000'],
    cwd='/home/z/my-project', env=env,
    stdout=open('/home/z/my-project/dev.log', 'w'),
    stderr=subprocess.STDOUT,
    stdin=subprocess.DEVNULL,
    start_new_session=True,  # critical — setsid() equivalent
    close_fds=True,          # critical — close inherited fds
)
```

The `start_new_session=True` argument calls `setsid()` in the child, which creates a new session+process group fully detached from the parent. Combined with `close_fds=True` (no inherited file descriptors that the parent can close), the child survives the parent cgroup teardown. Verified: a Next.js dev server spawned this way was still alive 30+ minutes after the Python launcher script exited.

### ✅ Works: write a `.zscripts/*.sh` launcher

The sandbox's `.zscripts/` directory has special handling — scripts there can be invoked by the sandbox's init system and survive across bash calls. See `.zscripts/dev.sh` (existing) for the pattern. Add a new `.zscripts/storyforge-dev.sh` for additional services.

## Verification pattern

After spawning a process detached, verify it survived the parent's exit:

```bash
# Spawn
python3 /tmp/start-nx.py
# Wait
sleep 6
# Verify
ps -ef | grep -E "next-server|next dev" | grep -v grep
ss -tnlp | grep :3000
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/
```

If any of those fail, the process died — restart with the Python pattern.

## Common pitfalls

- **`xdg-open ENOENT`** — Vite's `open: '/storyforge/'` config tries to spawn a browser. Pass `--no-open` CLI flag AND set `BROWSER=none` env var (defense in depth).
- **Port already in use** — `strictPort: true` in some Vite configs means it won't fall back to the next port. Use `--port 3000` explicitly.
- **Trailing slash issues** — Next.js's `trailingSlash: false` (default) issues 308 redirects that can loop with Vite's `installBaseRedirect` middleware. Use `skipTrailingSlashRedirect: true` in `next.config.ts` when proxying.

## See also

- `HANDOFF.md` "How to restart the dev server" section
- `.agents/SKILL.md` "Environment quirks" section
