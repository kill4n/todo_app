## ADDED Requirements

### Requirement: Build for GitHub Pages sub-path
The build MUST target the GitHub Pages sub-path for the repository (`/todo_app/`) so that bundled assets resolve correctly when served under that path.

#### Scenario: Assets load under sub-path
- **WHEN** the built site is served at `https://<user>.github.io/todo_app/`
- **THEN** CSS and JavaScript assets referenced by `index.html` resolve to existing files under `/todo_app/assets/`

### Requirement: Deploy on push to main
A push to the `main` branch MUST trigger a workflow that builds the app and deploys the `dist/` output to GitHub Pages.

#### Scenario: Push to main deploys
- **WHEN** a commit is pushed to `main`
- **THEN** the workflow builds the app and publishes `dist/` to GitHub Pages, making the app available at the Pages URL

### Requirement: Production build passes
The production build MUST complete successfully (TypeScript compiles, bundle is produced) before deployment is attempted.

#### Scenario: Build failure blocks deploy
- **WHEN** the production build fails (e.g., TypeScript error)
- **THEN** the deployment step does not run and the workflow reports failure