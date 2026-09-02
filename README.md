# Todo App

A todo list app built with **React + Vite + TypeScript**, deployed to GitHub Pages as a test exercise.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build   # output goes to dist/
npm run preview # preview the production build locally
```

## Code Quality

```bash
npm run lint    # oxlint
```

## Deployment

Pushing to `main` triggers the GitHub Actions workflow in `.github/workflows/deploy.yml`, which builds the app and deploys it to GitHub Pages.

The app will be live at (replace `<your-username>`):

```text
https://<your-username>.github.io/todo_app/
```

To enable: **Repo Settings → Pages → Source: "GitHub Actions"** — or it gets set up automatically the first time the workflow succeeds.

> Note: tasks are persisted using `localStorage` (browser-local only).
