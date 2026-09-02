# Todo App on GitHub Pages

## Why

The repo is an empty git repository. The purpose of this change is to stand up a working React + Vite todo list app as a test/demo exercise, deployed to GitHub Pages so the result is publicly reachable. It verifies the full path from scaffolding, to build, to CI deployment.

## What Changes

- Scaffold a `create-vite` React + TypeScript project in the repo root
- Implement a minimal todo list: add, toggle complete, delete, persisted in localStorage
- Configure Vite with a root relative `base` so assets resolve when the site is served from a custom apex domain (`https://baldur.lat/`)
- Add a GitHub Actions workflow that builds on push and deploys the `dist/` output to GitHub Pages
- Serve the site at the custom apex domain `baldur.lat` via a Pages custom domain + `public/CNAME`
- No routing library, no backend, no external API

## Capabilities

### New Capabilities

- `todo-app`: A browser-only todo list (add, toggle, delete) persisted in localStorage
- `pages-deployment`: Build + deploy pipeline for GitHub Pages via GitHub Actions, including correct base-path handling
- `custom-domain`: Serve the site at the custom apex domain `baldur.lat` via Pages custom domain config + `public/CNAME`

### Modified Capabilities

<!-- None — no existing specs modified beyond the base-path change in pages-deployment -->

## Impact

- Repo root becomes a React/Vite project
- New dev dependency on Vite + React toolchain
- Adds `.github/workflows/deploy.yml`
- Adds `public/CNAME` with `baldur.lat`
- Vite `base` changes from `/todo_app/` to `/` (root-relative)
- Deployment target: `https://baldur.lat/`
- DNS at Namecheap must be configured (A records / HTTPS) — this change does not own that infra, only documents it