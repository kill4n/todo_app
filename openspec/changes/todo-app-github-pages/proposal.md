# Todo App on GitHub Pages

## Why

The repo is an empty git repository. The purpose of this change is to stand up a working React + Vite todo list app as a test/demo exercise, deployed to GitHub Pages so the result is publicly reachable. It verifies the full path from scaffolding, to build, to CI deployment.

## What Changes

- Scaffold a `create-vite` React + TypeScript project in the repo root
- Implement a minimal todo list: add, toggle complete, delete, persisted in localStorage
- Configure Vite with `base: '/todo_app/'` so assets resolve under the Pages sub-path
- Add a GitHub Actions workflow that builds on push and deploys the `dist/` output to GitHub Pages
- No routing library, no backend, no external API

## Capabilities

### New Capabilities

- `todo-app`: A browser-only todo list (add, toggle, delete) persisted in localStorage
- `pages-deployment`: Build + deploy pipeline for GitHub Pages via GitHub Actions, including correct base-path handling

### Modified Capabilities

<!-- None — no existing specs -->

## Impact

- Repo root becomes a React/Vite project
- New dev dependency on Vite + React toolchain
- Adds `.github/workflows/deploy.yml`
- Deployment target: `https://<user>.github.io/todo_app/`