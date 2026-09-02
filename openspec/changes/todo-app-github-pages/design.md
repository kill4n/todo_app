## Context

Empty git repo at `todo_app/`. Goal is a working React + Vite todo list (TypeScript) deployed to GitHub Pages as a test exercise. Static hosting only — no backend, no server-side code.

## Goals / Non-Goals

**Goals:**
- React + Vite + TypeScript scaffold in repo root
- Minimal todo list: add, toggle complete, delete
- Persistence across reloads via localStorage
- Correct GitHub Pages deployment under the `/todo_app/` sub-path
- Hand-off deploy via GitHub Actions on push to `main`

**Non-Goals:**
- No routing / React Router (single view)
- No backend, auth, or external services
- No drag-and-drop, due dates, categories, or multi-user sync
- No custom theming beyond clean baseline styles

## Decisions

- **Scaffold: `npm create vite@latest . -- --template react-ts`** — standard template, matches TypeScript choice. Vite + React tooling is the documented path to Pages.
- **Persistence: localStorage** — simplest fit for a static host. A small custom hook (`useTodos`) wraps the read/write and syncs on mutation. Alternative rejected: IndexedDB/supabase (overkill for a test).
- **Base path: `base: '/todo_app/'` in `vite.config.ts`** — required because Pages serves the repo under a sub-path. Without it, built `index.html` references `/assets/...` which 404s.
- **Deployment: GitHub Actions `actions/deploy-pages`** workflow triggered on `push` to `main`. Official Pages starter: build job → upload `dist/` → `deploy-pages`. Alternative rejected: `gh-pages` npm package (works, but Actions is hands-off and the "real" CI path).
- **Data shape:** `Todo { id: string; text: string; completed: boolean }`, stored as a JSON array under one localStorage key. id via `crypto.randomUUID()`.

## Risks / Trade-offs

- [Site 404s on assets] → correct `base` path + Actions workflow set once; verify via deployed URL after first push.
- [localStorage is per-browser] → acceptable; a test app, loss on wipe is a documented non-goal.
- [First Pages deploy shows 404 until workflow runs] → expected; Pages enables on first successful deploy.
- [No custom 404 / SPA fallback] → not needed since there's no router.