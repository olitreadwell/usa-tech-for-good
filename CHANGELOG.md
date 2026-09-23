# Changelog

All notable changes to this project are documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

Earlier history belongs to the NZ repository this one was derived from:
[nz-tech-for-good](https://github.com/olitreadwell/nz-tech-for-good/commits/main).

---

## [Unreleased]

### Added: 2026-09-23 (US scaffold)

- Seeded the directory with 30 US entries, each verified against its own
  homepage on the day it was added. Regenerated `GUIDE.md` and the JSON and
  CSV exports from them.
- Rewrote the README for the US, including a status section that says plainly
  that the directory has just been seeded.
- Rewrote `docs/how-entries-are-chosen.md`, `docs/known-gaps.md`,
  `docs/research-get-involved.md`, and `docs/roadmap.md` for the US.
- Repointed every hardcoded repository and site URL at
  `olitreadwell/usa-tech-for-good` and `usa-tech-for-good.vercel.app`.

### Changed: 2026-09-23 (US scaffold)

- Replaced the NZ region list in `schema/entry.schema.json` with 10 US
  regions plus `national`.
- Removed the three NZ-specific domains (Māori data sovereignty, iwi and
  Māori tech initiatives, health tech for good and hauora Māori) from the
  schema, `data/domain-descriptions.yaml`, `scripts/build_guide.py`, and the
  add-entry issue form. Every remaining domain has an explainer. No US
  replacement was invented for them; see `docs/known-gaps.md`.
- Renamed the root package from `@olitreadwell/nz-tech-for-good` to
  `@olitreadwell/usa-tech-for-good`.
- Cleared `data/archives.json`, which held Wayback snapshots of NZ entries.

### Removed: 2026-09-23 (US scaffold)

- Removed the NZ directory entries, the NZ `GUIDE.md`, and the NZ exports,
  which the scaffold commit had left in place.

## [0.0.0] - 2026-09-17

### Added

- Scaffolded this repo from nz-tech-for-good, with the NZ data removed.
