# GitLab WAF and PAT issues

## The user's setup

User provided a GitLab Personal Access Token for redundant backup to GitLab (in addition to GitHub). The PAT format was non-standard: `glpat-XXX.YYY.ZZZ` (longer than typical 20-char `glpat-XXX` PATs).

User warned: "gitlab WAF has exact 1/3 chance of blocking your HK-based ip resulting in 403. it is probabilistic so just retry and let it run in background."

## Distinguishing failure modes

### WAF 403 (retry)

- HTTP 403 with `Server: cloudflare` or generic WAF response
- Body may say "Request Rejected" or similar
- **Retry up to 3 times** with 2-3 second delays — probabilistic, will succeed eventually

### Token revoked (DO NOT retry)

- HTTP 401 with body `{"error":"invalid_token","error_description":"Token was revoked. You have to re-authorize from the user."}`
- This is NOT a WAF issue; it's an auth issue
- **Stop retrying, ask user for a fresh PAT**

### Token expired

- HTTP 401 with body `{"error":"invalid_token","error_description":"Token is expired."}`
- Same response — ask user for a fresh PAT

### Token invalid format

- HTTP 401 with body `{"error":"invalid_token","error_description":"Token was malformed"}`
- Constructed URL is wrong — verify the username + token format

## Verifying the PAT before adding remote

```bash
curl -s --header "PRIVATE-TOKEN: <PAT>" "https://gitlab.com/api/v4/user" | head -20
```

If the response is a valid JSON user object with `username`, `id`, `name` — the PAT works. If it's an error JSON, see failure modes above.

## Constructing the GitLab remote URL

GitLab uses `oauth2` as the username for HTTPS auth with a PAT:

```
https://oauth2:<PAT>@gitlab.com/<username>/<repo>.git
```

Note: the username is `oauth2`, NOT the user's GitLab username. The user's username appears in the path.

## Adding the second remote

```bash
git remote add gitlab "https://oauth2:<PAT>@gitlab.com/<username>/story-engine-mockup.git"
git push -u gitlab main
```

If the repo doesn't exist on GitLab, create it first via API:

```bash
curl -s --header "PRIVATE-TOKEN: <PAT>" -X POST "https://gitlab.com/api/v4/projects" \
  --data "name=story-engine-mockup" \
  --data "description=..." \
  --data "visibility=public"
```

## Current state (2026-10-22)

The PAT `glpat-<GITLAB_PAT_REVOKED_2026-10-22>` returns:

```json
{"error":"invalid_token","error_description":"Token was revoked. You have to re-authorize from the user."}
```

This is **not** a WAF 403 — it's a revoked-token 401. **Cannot add GitLab remote.** GitHub (`chiamakakenaniah/story-engine-mockup`) is the sole backup until user provides a fresh PAT.

Documented in `HANDOFF.md` "GitLab backup" section.

## See also

- `HANDOFF.md` — current state of backups
- `.agents/SKILL.md` "Process rules" section — never force push + always push on micro-step
