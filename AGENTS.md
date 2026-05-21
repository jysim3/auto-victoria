# Auto Victoria

This repo contains the Auto Victoria static marketing site. It is a Next.js App Router project generated from the luxury automotive website export and uses React components under `app/` and `components/`.

## Local Development

- Use `pnpm` for dependency management. The pinned package manager is `pnpm@10.28.0`.
- Install dependencies with `pnpm install`.
- Run the local dev server with `pnpm dev`.
- Create the production static export with `pnpm build`; Next writes the generated static site to `out/`.

## Deployment

The site is deployed to GitHub Pages at:

https://jysim3.github.io/auto-victoria/

Deployment is handled by `.github/workflows/pages.yml`. On each push to `main`, GitHub Actions:

1. Checks out the repo.
2. Sets up pnpm and Node 22.
3. Runs `pnpm install --frozen-lockfile`.
4. Runs `pnpm build`.
5. Uploads `out/` as the GitHub Pages artifact.
6. Deploys the artifact using `actions/deploy-pages`.

`next.config.mjs` is configured for static hosting with `output: 'export'`. In production it also sets the `/auto-victoria` `basePath` and `assetPrefix` required for project GitHub Pages URLs.

Do not commit generated folders such as `node_modules/`, `.next/`, or `out/`; they are ignored and rebuilt by GitHub Actions.
