# Roadmap

A prioritised backlog of improvements for this directory. Grouped by theme,
best value first within each group. Each item is a concrete task, small
enough to do in one change. Tick items off as they ship.

This is a living file. If you pick up an item, link the PR next to it. If an
item stops making sense, strike it out with a one-line note.

Legend: `[ ]` not started · `[x]` done · items marked **(needs Oli)** are
account-level settings only the repo owner can change.

## Where this repo came from

The tooling, scripts, site, and CI were derived from
[nz-tech-for-good](https://github.com/olitreadwell/nz-tech-for-good). The New
Zealand data and the NZ-specific parts of the taxonomy were removed on
2026-09-17, and the first US entries were added on 2026-09-23. Anything in
this file that is not ticked is work on top of that starting point.

---

## Content

- [x] Seed the directory with its first entries, each verified against a
  live homepage. (30 entries across 14 domains, 2026-09-23)
- [ ] Fill the empty domains listed in [docs/known-gaps.md](known-gaps.md).
  Crisis and humanitarian tech, disability employment tech, environmental
  citizen science, and makerspaces and hackerspaces have no entries.
- [ ] Decide whether to add a domain for indigenous and tribal data
  sovereignty, and populate it with verified entries. See
  [docs/known-gaps.md](known-gaps.md) for why this needs a real decision
  rather than a rename.
- [ ] Close the people/LinkedIn enrichment gap described in
  [docs/known-gaps.md](known-gaps.md): add `linkedin_people` to entries, one
  verified person at a time, following the people-and-privacy rules in
  [CONTRIBUTING.md](../CONTRIBUTING.md#people-and-privacy).
- [ ] Backfill `github` and `linkedin_org` where the organisation has a real
  public one. All 30 seeded entries have both fields empty.
- [ ] Backfill `founding_year` where it can be read off an about page or
  another official source. 29 of 30 entries currently have it null.
- [ ] Backfill `takes_contributors` where the organisation publishes a
  volunteering or open-source contribution page. All 30 entries are null.
- [ ] Backfill `careers_url` where the organisation has a careers, jobs, or
  volunteering page. All 30 entries are empty.
- [ ] Cross-link entries via `related_to` where real, verifiable connections
  exist (same network, data dependency, shared founder). Two entries have
  links today.
- [ ] Add US community channels and event series as entries once each is
  confirmed active. Chi Hack Night and BetaNYC are candidates. See
  [docs/research-get-involved.md](research-get-involved.md).

## Data quality

- [x] Validate every entry against the schema, and flag duplicate names and
  duplicate website URLs. (`scripts/validate.py`)
- [x] Add a `last_verified` freshness check. (`scripts/dataquality.py`)
- [x] Add a coverage report counting entries per domain and per region, and
  flagging thin domains. (`scripts/coverage.py`)
- [x] Normalise region values against a fixed list in the schema `enum` so
  filtering and mapping stay reliable. (10 US regions plus `national`,
  2026-09-23)
- [ ] Re-check every seeded entry when its `last_verified` date passes six
  months. The weekly data-quality workflow opens a tracking issue when that
  happens.

## Automation

- [x] Weekly link check that opens and updates a single tracking issue on
  genuine dead links, closing it when they recover.
  (`.github/workflows/linkcheck.yml`)
- [x] Wayback Machine archiving of entry websites
  (`scripts/archive_wayback.py` plus the weekly `wayback.yml` workflow).
- [x] Weekly data-quality freshness sweep (`dataquality.yml`).
- [x] Dependabot for the `github-actions`, `pip`, and `npm` ecosystems
  (`.github/dependabot.yml`).
- [x] Auto-merge low-risk Dependabot updates via `pull_request_target` plus a
  daily release-age sweep (`scripts/dependabot-auto-merge.mjs`).
- [x] Disable git-triggered Vercel deploys; deploy only with `vercel --prod`
  (`docs/deploy.md`, `apps/web/vercel.json`).

## CI and quality gates

- [x] Pin all GitHub Actions to commit SHAs, and let Dependabot bump them.
- [x] Add a `yamllint` pass for the YAML entries (non-blocking).
- [x] Add a `codespell` pass for docs and prose (non-blocking).
- [x] Cache pip dependencies in CI (`actions/setup-python` keyed on
  `requirements.txt`).
- [x] Run the link check inside the main CI as advisory only, with a summary
  in the job step summary.
- [ ] Get the Vercel production build working. The build and tests pass, and
  the upload step then fails with "Cannot patch preview comments when
  immutable static file upload is enabled". The NZ repos fail the same way,
  so this is a shared problem with the Next.js monorepo setup rather than
  anything specific to this repo.
- [ ] Wire `scripts/stylecheck.py` into CI. It runs locally today and fails
  on `docs/STYLE.md` violations, but no workflow calls it.
- [ ] Fix the em dashes in the template-managed docs (`docs/a11y.md`,
  `docs/api.md`, `docs/audits.md`, `docs/ci-optimization.md`,
  `docs/contact.md`, `docs/template-sync.md`). The fix belongs in
  [olitreadwell/template](https://github.com/olitreadwell/template), because
  `template-sync.yml` overwrites those files here.

## Community and discoverability

- [x] Set repo topics for discoverability.
- [x] Add a contact page on the site (`apps/web/src/app/contact`).
- [x] Add a "spot a mistake / update this entry" feedback link on entry pages
  that opens a pre-filled GitHub issue.
- [x] Add a `CODEOWNERS` file so review requests route automatically.
- [x] Add an all-contributors setup to credit everyone who adds or verifies
  entries (`.all-contributorsrc` plus the README section).
- [x] Add an "entry count" badge to the README, generated from the data.
- [ ] **(needs Oli)** Enable GitHub Discussions for questions and suggestions
  that are not yet concrete issues.
- [ ] **(needs Oli)** Turn on branch protection for `main` (require the CI
  check to pass, require a PR) once there is more than one maintainer.
- [ ] **(needs Oli)** Add a social-preview image so shared links look good.
- [ ] **(needs Oli)** Decide whether this project should have its own social
  presence. That means creating and owning an account, so it is not something
  to invent here.
- [ ] Add a "good first issue" set (verify N entries, add one resource) to
  lower the barrier for new contributors.

## Get involved

This directory answers "what exists" and answers "what do I do next" less
well. See [docs/research-get-involved.md](research-get-involved.md) for the
comparative research behind this section, drawn from Civic Tech Field Guide,
the Tech for Good Organisers Network, and Catchafire.

- [x] Add a "Get involved" page to the site with a small number of clear,
  low-commitment next actions (`apps/web/src/app/get-involved`).
- [x] Write a short explainer for each domain, shown on the domain pages
  (`data/domain-descriptions.yaml`, all 24 domains covered).
- [ ] Research US tech-for-good meetups, Slack or Discord communities, and
  event series that are genuinely active, and add them as entries.

---

## Recently shipped

- Scaffolded the repo from nz-tech-for-good: removed the NZ data, replaced
  the NZ region and domain taxonomy with US equivalents, and repointed every
  hardcoded repo and site URL. (2026-09-23)
- First 30 US entries, each checked against a live homepage on the day it was
  added, with `GUIDE.md` and the JSON and CSV exports regenerated from them.
  (2026-09-23)
- Rewrote the README, `docs/how-entries-are-chosen.md`,
  `docs/known-gaps.md`, `docs/research-get-involved.md`, and the add-entry
  issue form for the US. (2026-09-23)
