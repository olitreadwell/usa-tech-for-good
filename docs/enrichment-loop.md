# Verified enrichment loop

This is the repeatable way to add organisations and fill fields without inventing facts. It runs locally. It does not use GitHub Actions.

## Inputs

- Discovery: Civic Tech Field Guide API at `https://civictech.guide/api/v1/projects/search`. Filter by `country`, `projectType=Organization`, `status=Active`, and paginate with `limit` and `offset`. The data is CC BY 4.0.
- Identity check: the relevant official register, such as the Charity Commission for England and Wales or Companies House. A register confirms legal status, not current operations.
- Facts: the organisation's own live pages. The homepage supports name and mission. The about page usually supports founding year. The careers, volunteer, events and contact pages support links and participation fields.

## Batch shape

Screen five candidates at a time. Accept no more than three. One accepted set is one commit. Keep one branch and one pull request per country so review stays manageable.

## Steps

1. Harvest candidates into a queue file. Remove any candidate whose normalised name or website already exists in `data/entries/`.
2. Fetch the homepage and a small set of high-signal pages: about, contact, careers, volunteer, events. Cache the title, meta description, visible text and links under `.cache/enrichment/`.
3. Give the batch to a local agent with the cache. The agent may use only facts in the cache and must reject commercial vendors, dead sites, duplicate listings, and organisations where technology is incidental.
4. Require a dated claim in `source` for every non-empty field. Use the grammar in `docs/research-verified-enrichment-sources.md`.
5. Run the deterministic audit. It checks that the website host matches the cached page, that every link field appears in the cached links, and that any founding year appears near founded, established, formed, began, started or since.
6. Run `python3 scripts/validate.py`, `python3 scripts/stylecheck.py` and `python3 scripts/dataquality.py`.
7. Run `python3 scripts/build_guide.py`, `python3 scripts/export.py` and `python3 scripts/build_readme.py`.
8. Run `make check`. Commit only when the local gate passes.

## Stop conditions

- The country target is reached.
- Three consecutive candidates fail to fetch or fail validation.
- The candidate queue is empty.
- A fact cannot be supported by a live first-party page. Leave the field empty instead of guessing.

## Re-verification

- Check external links on every run.
- Re-check events, careers and community links every 30 days.
- Re-check contributor and social links every 90 days.
- Re-check identity, website and mission every 180 days.
- Do a full entry pass every 365 days.

`last_verified` is the oldest claim date in the entry, not the date of the latest edit.

## Candidate fields

Use the current schema. `linkedin_people` stays empty unless a public professional page provides the person's name, role and URL. Do not scrape LinkedIn.
