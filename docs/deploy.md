# Deployment

The site is a static Next.js export. Vercel builds it from the repository root
and serves `apps/web/out`.

- Live site: <https://usa-tech-for-good.vercel.app/>
- Vercel project: `usa-tech-for-good`

## Deploy

Push to `main`. Vercel builds with:

```sh
npm install
npm run build
```

The output directory is `apps/web/out`. The settings live in `vercel.json`.

## Vercel project settings

```sh
vercel project update usa-tech-for-good \
  --framework other \
  --install-command "npm install" \
  --build-command "npm run build" \
  --output-directory "apps/web/out"
```

## GitHub Pages

`https://olitreadwell.github.io/usa-tech-for-good/` is now a redirect to the
Vercel site. The workflow in `.github/workflows/pages.yml` publishes only that
redirect, so old links keep working.
