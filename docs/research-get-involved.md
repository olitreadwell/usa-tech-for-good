# Research: how other sites turn a list into a community

This directory lists organisations well. It is less good at helping a newcomer act. A newcomer may want to join a community, find an event, meet people, or send a first pull request. This doc records what comparable sites do. The roadmap items below rest on real examples.

The research was written on 2026-08-06 for the improvement loop. It answers a newcomer question: "how do I get involved?" The site had no clear answer at the time. It was ported to the US directory on 2026-09-23. US notes are marked below.

## Comparable sites studied

### Civic Tech Field Guide (civictech.guide)

This is the closest match in scale and purpose. It is a curated directory of 12,000+ tech-for-good projects and organisations worldwide. It solves the same problem this repo has.

What it does that this repo does not:

- **Four visible entry points on the homepage.** The page offers the directory, job resources, upcoming events, and open-source projects. Each one is a distinct reason to visit.
- **An "Add a project" button.** The button is prominent, not buried in a `CONTRIBUTING.md` link. It lowers the bar from "read docs, clone repo, write yaml" to "click a button, fill a form."
- **A category for community channels.** Slacks, Discords, and Teams are first-class entries alongside organisations. See [directory.civictech.guide/listing-category/slacks-discords-teams](https://directory.civictech.guide/listing-category/slacks-discords-teams).
- **A blog and a podcast.** "Democracy Innovators" gives people a reason to return besides checking for new entries.
- **Social links to nine platforms.** Every page links GitHub, LinkedIn, Instagram, Mastodon, Threads, WhatsApp, Slack, Pinterest, Bluesky, and YouTube.
- **An interactive map.** "What is near me" becomes a first-class way to browse, not just a domain or region filter.

### Chi Hack Night (chihacknight.org)

Chi Hack Night is a weekly Chicago event for people who build, share, and learn about civic technology. It is a working example of a low-friction path. People can turn up to a free weekly meetup, join a project, or pitch one. There is no membership and no application.

**This is a candidate directory entry in its own right.** It is not currently in `data/entries/`. It is the most direct answer to "where do I find the next US event".

### BetaNYC (beta.nyc)

BetaNYC is a civic organisation in New York. It works on civic design, technology, and data. Its stated aim is an informed public that can hold government to account. It is a place-based example of the "join a community" path.

### Catchafire (catchafire.org)

Catchafire is a skilled-volunteering marketplace. Nonprofits post short-term projects, such as a logo, a website fix, or a budget review. Professionals pick one up and complete it. A typical project is worth $5,000+ of donated consulting time.

It is not a directory like this one. It is still a useful model for "give me a specific, bounded way to help" rather than "here is an org, good luck."

## What this means for this repo

This directory answers "what exists." It does not answer "what do I do next." Every comparable site shows the same pattern. Each one offers a small number of clear, low-commitment next actions.

Some gaps need data. The repo can add real entries, and it already has a working pipeline for that. Other gaps need a design or product decision. A new page or schema change should go through the roadmap and get signed off.

See the new items under "Community and engagement" in `docs/roadmap.md` for the concrete backlog this produced.
