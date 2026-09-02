# Tasks

## 1. Scaffold

- [x] 1.1 Scaffold React + TypeScript project in repo root (`npm create vite@latest . -- --template react-ts`)
- [x] 1.2 Install dependencies (`npm install`) and verify dev server / build runs

## 2. Todo App

- [x] 2.1 Implement todo data model and `useTodos` hook with localStorage persistence (load on init, save on change, `crypto.randomUUID()` ids)
- [x] 2.2 Build UI: add form, todo list with toggle-complete and delete actions
- [x] 2.3 Add baseline styles for the todo UI

## 3. Build Config

- [x] 3.1 Set `base: '/'` in `vite.config.ts` (root-relative; supersedes the earlier `/todo_app/` plan for the custom apex domain)
- [x] 3.2 Verify production build succeeds (`npm run build`) and inspect asset paths in `dist/index.html`

## 4. GitHub Pages Deployment

- [x] 4.1 Add `.github/workflows/deploy.yml` — Actions workflow building on push to `main` and deploying `dist/` via `actions/deploy-pages`
- [x] 4.2 Add notebook-style README documenting local dev, build, and deploy steps

## 5. Verify

- [x] 5.1 Run typecheck/lint and production build locally; confirm clean output
- [ ] 5.2 Confirm the pushed site loads correctly at the custom domain URL (assets not 404ing, todos functional)

## 6. Custom Domain

- [x] 6.1 Change Vite `base` to `'/'` in `vite.config.ts`
- [x] 6.2 Add `public/CNAME` containing `baldur.lat`
- [x] 6.3 Rebuild and verify `dist/index.html` references `/assets/...` (no `/todo_app/` prefix) and `dist/CNAME` is present
- [ ] 6.4 Namecheap DNS: add four A records for `@` → GitHub Pages IPs (185.199.108.153 / .109 / .110 / .111), remove parking record
- [ ] 6.5 GitHub Pages UI: set Custom domain `baldur.lat`, Enforce HTTPS
- [ ] 6.6 Push commit and confirm workflow deploys cleanly
- [ ] 6.7 Verify `https://baldur.lat/` loads the app over HTTPS