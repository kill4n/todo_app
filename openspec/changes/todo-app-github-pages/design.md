## Context

Empty git repo at `todo_app/`. Goal is a working React + Vite todo list (TypeScript) deployed to GitHub Pages as a test exercise. Static hosting only — no backend, no server-side code.

## Goals / Non-Goals

**Goals:**
- React + Vite + TypeScript scaffold in repo root
- Minimal todo list: add, toggle complete, delete
- Persistence across reloads via localStorage
- Correct GitHub Pages deployment served from the custom apex domain `baldur.lat`
- Hand-off deploy via GitHub Actions on push to `main`

**Non-Goals:**
- No routing / React Router (single view)
- No backend, auth, or external services
- No drag-and-drop, due dates, categories, or multi-user sync
- No custom theming beyond clean baseline styles
- No managing of the DNS provider itself — DNS rows are documented, applied in the Namecheap dashboard

## Decisions

- **Scaffold: `npm create vite@latest . -- --template react-ts`** — standard template, matches TypeScript choice. Vite + React tooling is the documented path to Pages.
- **Persistence: localStorage** — simplest fit for a static host. A small custom hook (`useTodos`) wraps the read/write and syncs on mutation. Alternative rejected: IndexedDB/supabase (overkill for a test).
- **Base path: `base: '/'` in `vite.config.ts`** — the site is served at the apex root via custom domain, not under the `/todo_app/` sub-path. A `/todo_app/` prefix would 404 at the apex. Default Pages URL is superseded by the domain redirect.
- **Custom domain:** apex `baldur.lat` configured in **Settings → Pages → Custom domain**, backed by a checked-in `public/CNAME` containing `baldur.lat` so the mapping survives CI deploys (public/ is copied verbatim into `dist/` by Vite).
- **DNS (Namecheap):** apex needs the four GitHub Pages A records (`185.199.108.153`, `.109.153`, `.110.153`, `.111.153`) at host `@`, replacing any parking record. HTTPS is enforced by Pages once DNS resolves.
- **Deployment: GitHub Actions `actions/deploy-pages`** workflow triggered on `push` to `main`. Official Pages starter: build job → upload `dist/` → `deploy-pages`. Alternative rejected: `gh-pages` npm package (works, but Actions is hands-off and the "real" CI path).
- **Data shape:** `Todo { id: string; text: string; completed: boolean }`, stored as a JSON array under one localStorage key. id via `crypto.randomUUID()`.

## Risks / Trade-offs

- [Site 404s on assets] → root-relative `base` + `CNAME` in artifact; verified against `dist/index.html` and the live domain.
- [Default `kill4n.github.io/todo_app/` URL stops working] → expected when a custom domain is set; canonical URL becomes `https://baldur.lat/`. Applies only *after* DNS + Pages custom domain are configured.
- [Parked domain during DNS propagation] → visitors hitting `baldur.lat` before DNS switches will still see Namecheap's parking page; expected transient state.
- [HTTPS provisioning delay] → Pages issues certs after DNS resolves; Enforce HTTPS enabled once reachable.
- [localStorage is per-browser] → acceptable; a test app, loss on wipe is a documented non-goal.
- [First Pages deploy shows 404 until workflow runs] → expected; Pages enables on first successful deploy.
- [No custom 404 / SPA fallback] → not needed since there's no router.