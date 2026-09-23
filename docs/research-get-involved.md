# Research: how other sites turn a list into a community

This directory is good at listing organisations. It is not yet good at
helping a newcomer do something: join a community, find an event, meet the
people behind an entry, or send their first pull request. This doc records
what comparable sites do about that, so the roadmap items below are backed
by real examples, not guesses.

Written 2026-08-06 as part of the improvement loop, at the user's request,
after a newcomer asked "how do I get involved" and found no clear answer on
this site. Ported to the US directory on 2026-09-23; the US sections are
marked in the network notes below.

## Comparable sites studied

### Civic Tech Field Guide (civictech.guide)

The closest match to this repo in scale and purpose: a curated directory of
12,000+ tech-for-good projects and organisations worldwide. Worth close
study because it solves the exact problem this repo has.

What it does that this repo doesn't:

- **Four visible entry points on the homepage**, not just "browse the
  list": explore the directory, browse job resources, see upcoming events,
  browse open-source projects you can contribute to. Each is a distinct
  reason to visit, not just "look up an org."
- **An "Add a project" button**, prominent, not buried in a CONTRIBUTING.md
  link. Lowers the bar to contribute from "read docs, clone repo, write
  YAML" to "click a button, fill a form."
- **A dedicated directory category for community channels**: Slacks,
  Discords, and Teams are listed as first-class entries alongside
  organisations, not left implicit. See
  [directory.civictech.guide/listing-category/slacks-discords-teams](https://directory.civictech.guide/listing-category/slacks-discords-teams).
- **A blog and a podcast** ("Democracy Innovators"), so there's a reason to
  come back besides checking for new entries.
- **Social links to nine different platforms** on every page (GitHub,
  LinkedIn, Instagram, Mastodon, Threads, WhatsApp, Slack, Pinterest,
  Bluesky, YouTube), so people can follow in whatever channel they already
  use.
- **An interactive map**, so "what's near me" is a first-class way to
  browse, not just domain/region dropdowns.

### Chi Hack Night (chihacknight.org)

Chicago's weekly event for people who build, share, and learn about civic
technology. Relevant because it is a working example of the low-friction
path: turn up to a free weekly meetup, join a project, or pitch one. No
membership, no application.

**This is a candidate directory entry in its own right** (it is not
currently in `data/entries/`), and it is the most direct answer to "where do
I find the next US event".

### BetaNYC (beta.nyc)

A civic organisation working on civic design, technology, and data in New
York, with the stated aim of an informed public that can hold government to
account. It is a place-based example of the "join a community" path rather
than a national directory.

### Catchafire (catchafire.org)

A skilled-volunteering marketplace: nonprofits post short-term projects
(design a logo, fix a website, review a budget), professionals pick one up
and complete it, typically worth $5,000+ of donated consulting time. Not a
directory like this one, but relevant as a model for "give me a specific,
bounded way to help," rather than "here's an org, good luck."

## What this means for this repo

This directory answers "what exists." It doesn't answer "what do I do next."
The pattern across every comparable site above is the same: a small number
of clear, low-commitment next actions, not a wall of information.

Concretely, the gap the user named breaks down into things this repo can
solve with data (add real entries, we already have a working pipeline for
that) and things that need a design/product decision (a new page, a schema
change) that should go through the roadmap and get signed off, not get
silently built by a loop iteration.

See the new items under "Community & engagement" in `docs/roadmap.md` for
the concrete backlog this produced.
