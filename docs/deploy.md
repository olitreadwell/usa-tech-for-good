# Deployment

The site is published to GitHub Pages at
<https://olitreadwell.github.io/usa-tech-for-good/>.

`.github/workflows/pages.yml` builds on every push to `main`, uploads the
static export, and deploys it. `actions/configure-pages` sets the Pages
settings, so the only manual setup was enabling Pages with "GitHub Actions"
as the source.

## Reproduce the published files locally

```bash
npm run build        # writes apps/web/out
npx serve apps/web/out   # at the repo root, not under a subpath
```

The export uses a `basePath` of `/usa-tech-for-good` so that asset and page
URLs match the project path that Pages serves from. `next.config.ts` sets it
alongside `output: 'export'`.

## Why not Vercel

This repo was scaffolded from a project that deployed to Vercel with
`vercel --prod`, and that path no longer works.

Production builds complete and pass their tests, and then the deploy step
fails with:

```
Cannot patch preview comments when immutable static file upload is enabled.
Upgrade to next@v16.3.0-canary.32 or newer to resolve this.
```

That was reproduced with both the current Vercel CLI and the older version
pinned in the sibling data-lab repo, under three different project
configurations (repo root, `apps/web` as root directory with the build
command `cd apps/web && npm run build`, and auto-detected output). The
sibling repo `nz-tech-for-good-web` has failed the same way on every deploy
for over two weeks; its live site is an older build.

GitHub Pages needs no external service, no account settings, and no token,
so it is the default here. If the Vercel failure is diagnosed later,
`output: 'export'` does not prevent a Vercel deploy; it only removes the
server-rendered routes, of which this site has none.

## Git-triggered Vercel deploys

`vercel.json` still sets `git.deploymentEnabled` to false for every branch,
so if a Vercel project is reconnected it will not build on push.
