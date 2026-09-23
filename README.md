# US Tech-for-Good

A directory of US organisations, projects, networks, and people who use
technology for public good.

[![CI](https://github.com/olitreadwell/usa-tech-for-good/actions/workflows/ci.yml/badge.svg)](https://github.com/olitreadwell/usa-tech-for-good/actions/workflows/ci.yml)
[![Entries](https://img.shields.io/github/directory-file-count/olitreadwell/usa-tech-for-good/data/entries?type=file&extension=yaml&label=entries&color=brightgreen)](GUIDE.md)
[![License: MIT (code) / CC-BY-SA-4.0 (data)](https://img.shields.io/badge/license-MIT%20%2F%20CC--BY--SA--4.0-blue)](#use-the-data)
[![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen)](#add-an-organisation-and-contribute)

## Contents

- [What this is](#what-this-is)
- [Status](#status)
- [Add an organisation and contribute](#add-an-organisation-and-contribute)
- [Use the data](#use-the-data)
- [How it's maintained](#how-its-maintained)
- [Get involved](#get-involved)
- [Related directories and further reading](#related-directories-and-further-reading)
- [For developers](#for-developers)

## What this is

A living, community-maintained directory of US groups working in open data,
civic tech, climate tech, accessibility, digital inclusion, and more. Each
entry is a short, plain-language description with links, verified against a
live source.

It's for people looking for US tech-for-good groups to work with, volunteer
with, or learn from. It's also for anyone mapping out who's doing what in
this space.

"Tech-for-good" here means technology used for a public benefit:
not-for-profit, government, community, or mission-led work, rather than
purely commercial products. US organisations only.

## Status

**Early. 30 entries, added on 2026-09-23 and not yet re-checked.**

Each of those entries was read off the organisation's own homepage on the
day it was added, and the `source` field on each one records which page was
read. Nothing here has been reviewed by a second person yet, and whole
domains are still empty. [docs/known-gaps.md](docs/known-gaps.md) lists what
is missing.

The tooling and site come from
[nz-tech-for-good](https://github.com/olitreadwell/nz-tech-for-good), with
the New Zealand data removed and the NZ-specific parts of the taxonomy
replaced with US ones (see [Regions](#regions)).

**[Browse the live site](https://olitreadwell.github.io/usa-tech-for-good/)**:
searchable, filter by domain, region, or tag, with a page for every entry.

The site is a static export served from GitHub Pages, deployed by
[`.github/workflows/pages.yml`](.github/workflows/pages.yml) on every push to
`main`. See [docs/deploy.md](docs/deploy.md) for why it is Pages and not
Vercel.

### Domains

Entries are grouped by domain, the area of public good an organisation works
in. The list is inherited from the NZ directory and is checked by
`scripts/validate.py`:

- Open Data
- Civic Tech
- Digital Inclusion
- Green and Climate Tech
- Disability and Accessibility Tech
- Makerspaces and Hackerspaces
- GovTech
- Tech Ethics and Responsible AI
- Education Equity Tech
- Mental Health Tech
- Housing and Homelessness Tech
- Legal Aid and Justice Tech
- Human Rights Tech
- Crisis and Humanitarian Tech
- Environmental Citizen Science
- Food Rescue and Food Security Tech
- Financial Inclusion and Fintech for Good
- Volunteering and Giving Platforms
- Worker and Platform Co-ops
- Nonprofit and NGO Tech
- Journalism and Media Tech
- Research and Education Tech
- Refugee and Migrant Support Tech
- Disability Employment Tech

## Add an organisation and contribute

Know a group that should be listed? There are two ways to add one, and
neither needs any coding for the first:

1. **[Suggest an entry](../../issues/new?template=add-entry.yml)**: fill in
   a short issue form with what you know. Someone will verify it and add it.
2. **Open a pull request**: copy `data/entry.template.yaml` to
   `data/entries/<slug>.yaml`, fill it in, and submit. Full steps are in
   [CONTRIBUTING.md](CONTRIBUTING.md).

Every entry must be verified against a live source before it's added.
**Never invent a fact**: leave a field empty rather than guess.

## Use the data

The raw data lives in [`data/entries/`](data/entries/): one YAML file per
entry, shaped by [`schema/entry.schema.json`](schema/entry.schema.json).
[`GUIDE.md`](GUIDE.md) is generated from these files, so if you want the
structured version for your own tooling (a search index, a map, and so on),
read the YAML directly.

- **Code** (scripts, schema, tooling) is [MIT licensed](LICENSE).
- **Data** (the directory entries) is
  [CC-BY-SA-4.0 licensed](LICENSE-DATA.md): reuse and share it, including
  commercially, as long as you credit this project and share alike.

### Machine-readable data

If you'd rather not parse YAML, the whole directory is also exported as
[`data/exports/entries.json`](data/exports/entries.json) (one JSON object
per entry) and [`data/exports/entries.csv`](data/exports/entries.csv) (the
same data flattened to columns), both regenerated from `data/entries/` by
`scripts/export.py` and kept in sync by CI.

### Regions

Each entry records a US region, or `national` if it works across the
country: `new-england`, `mid-atlantic`, `southeast`, `midwest`,
`south-central`, `mountain-west`, `pacific-northwest`, `california`,
`alaska`, `hawaii`. The list lives in
[`schema/entry.schema.json`](schema/entry.schema.json); open an issue if a
region is missing.

## How it's maintained

- Links are checked automatically every week
  ([`.github/workflows/linkcheck.yml`](.github/workflows/linkcheck.yml)); a
  tracking issue opens on genuine dead links and closes when they recover.
- Every entry website is archived to the Wayback Machine every week
  ([`.github/workflows/wayback.yml`](.github/workflows/wayback.yml)); the
  snapshot URLs are recorded in `data/archives.json`.
- `GUIDE.md` is regenerated from the YAML entries, so it stays in sync with
  the underlying data. CI fails a PR if it's out of date.
- Accuracy comes first: every entry is verified against a live source, and
  nothing is invented. See [CONTRIBUTING.md](CONTRIBUTING.md) for the rules.
- This directory lists **public professional information only**. It does not
  list named people yet: see [docs/known-gaps.md](docs/known-gaps.md) for why,
  and how to help close that gap.

## Get involved

This directory answers what exists. These routes answer what to do next,
each one checked on 2026-09-23:

- **[Chi Hack Night](https://chihacknight.org)**: a weekly civic hack night
  in Chicago, in person and online, open to anyone who turns up.
- **[BetaNYC](https://beta.nyc)**: a civic technology community in New York
  running meetups, events, and public-interest data projects.
- **[Civic Tech Field Guide](https://civictech.guide)**: projects,
  organisations, and community channels worldwide, including a directory of
  Slacks, Discords, and Teams with open join links.
- **[Catchafire](https://www.catchafire.org)**: a skilled volunteering
  marketplace where nonprofits post short projects and professionals pick
  one up.

[`docs/research-get-involved.md`](docs/research-get-involved.md) has the
full comparison of how these sites onboard newcomers, and the backlog for
bringing the same routes into this directory.

## Related directories and further reading

Other US places to find open data, civic technology, and public-interest
tech work. Every link below was checked and resolves:

- **[data.gov](https://data.gov)** is the US government's open data
  catalogue: datasets published across federal agencies.
- **[US Census Bureau](https://www.census.gov)** publishes data about the
  country's people and economy.
- **[USA.gov](https://www.usa.gov)** is the public-facing guide to government
  services, benefits, and agencies.
- **[Digital.gov](https://digital.gov)** publishes guidance on building
  better digital services in government.
- **[GSA Technology Transformation Services](https://www.gsa.gov/technology)**
  builds and shares technology across federal agencies.
- **[Civic Tech Field Guide](https://civictech.guide)** is a curated
  directory of projects, tools, and organisations working on technology for
  democracy and the common good.
- **[NIST](https://www.nist.gov)** sets measurement science and technology
  standards, including the AI risk management framework.
- **[Federal Trade Commission](https://www.ftc.gov)** enforces consumer
  protection and competition law, and takes the lead on several technology
  policy areas.

Know a directory, registry, or community hub that belongs here? Please
[open an issue](../../issues/new) or a pull request.

## For developers

Clone the repo and set up the scripts used to validate and regenerate the
directory:

```bash
git clone https://github.com/olitreadwell/usa-tech-for-good.git
cd usa-tech-for-good
pip install -r requirements.txt

python3 scripts/validate.py      # check entries against the schema
python3 scripts/build_guide.py   # regenerate GUIDE.md from data/entries/
python3 scripts/linkcheck.py     # optional: check all links for dead ones
python3 scripts/archive_wayback.py --dry-run  # preview Wayback archives
```

Run both `validate.py` and `build_guide.py` after adding or editing an
entry, and commit the regenerated `GUIDE.md`. CI fails a PR if it's out of
date. Full contribution steps, including commit message style, are in
[CONTRIBUTING.md](CONTRIBUTING.md).

The site is a Next.js app in `apps/web`, built as a static export
(`next.config.ts` sets `output: 'export'`). A push to `main` builds and
publishes it to GitHub Pages; you can reproduce the published files locally
with `npm run build` and then look in `apps/web/out`. See
[docs/deploy.md](docs/deploy.md).

## How it started

The tooling and site were derived from
[nz-tech-for-good](https://github.com/olitreadwell/nz-tech-for-good) by
[Oli Treadwell](https://github.com/olitreadwell), which was itself built with
AI-assisted research and human verification of every entry. This repo is open
for the community to seed, correct, and maintain.

Shared tooling is kept in sync from
[olitreadwell/template](https://github.com/olitreadwell/template) by
`.github/workflows/template-sync.yml`; see
[docs/template-sync.md](docs/template-sync.md) for which files are managed
that way.

## People and privacy

If you're listed here and want your information corrected or removed, please
[open an issue](../../issues/new) and we'll action it. This takes priority
over completeness.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/olitreadwell"><img src="https://github.com/olitreadwell.png?s=100" width="100px;" alt="Oli Treadwell"/><br /><sub><b>Oli Treadwell</b></sub></a><br /><a href="https://github.com/olitreadwell/usa-tech-for-good/commits?author=olitreadwell" title="Code">💻</a> <a href="https://github.com/olitreadwell/usa-tech-for-good/commits?author=olitreadwell" title="Documentation">📖</a> <a href="#data-olitreadwell" title="Data">🔣</a> <a href="#design-olitreadwell" title="Design">🎨</a> <a href="#ideas-olitreadwell" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-olitreadwell" title="Maintenance">🚧</a> <a href="#projectManagement-olitreadwell" title="Project Management">📆</a> <a href="https://github.com/olitreadwell/usa-tech-for-good/pulls?q=is%3Apr+reviewed-by%3Aolitreadwell" title="Reviewed Pull Requests">👀</a></td>
    </tr>
  </tbody>
</table>
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
