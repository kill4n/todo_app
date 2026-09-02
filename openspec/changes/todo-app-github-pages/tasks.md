# Tasks

## 1. Scaffold

- [x] 1.1 Scaffold React + TypeScript project in repo root (`npm create vite@latest . -- --template react-ts`)
- [x] 1.2 Install dependencies (`npm install`) and verify dev server / build runs

## 2. Todo App

- [x] 2.1 Implement todo data model and `useTodos` hook with localStorage persistence (load on init, save on change, `crypto.randomUUID()` ids)
- [x] 2.2 Build UI: add form, todo list with toggle-complete and delete actions
- [x] 2.3 Add baseline styles for the todo UI

## 3. Build Config

- [x] 3.1 Set `base: '/todo_app/'` in `vite.config.ts`
- [x] 3.2 Verify production build succeeds (`npm run build`) and inspect asset paths in `dist/index.html`

## 4. GitHub Pages Deployment

- [x] 4.1 Add `.github/workflows/deploy.yml` — Actions workflow building on push to `main` and deploying `dist/` via `actions/deploy-pages`
- [x] 4.2 Add notebook-style README documenting local dev, build, and deploy steps

## 5. Verify

- [x] 5.1 Run typecheck/lint and production build locally; confirm clean output
- [ ] 5.2 Confirm the pushed site loads correctly at the Pages URL (assets not 404ing, todos functional)