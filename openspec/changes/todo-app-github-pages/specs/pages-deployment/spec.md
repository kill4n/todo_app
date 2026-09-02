## ADDED Requirements

### Requirement: Build with root-relative asset paths
The build MUST reference bundled assets with root-relative paths (no `/todo_app/` prefix) so the site resolves correctly when served from the custom apex domain `https://baldur.lat/`.

#### Scenario: Assets load at custom domain root
- **WHEN** the built site is served at `https://baldur.lat/`
- **THEN** CSS and JavaScript assets referenced by `index.html` resolve to existing files at `/assets/...` (no repo-name sub-path)

#### Scenario: Default Pages URL is not the target
- **WHEN** the user visits after the custom domain is configured
- **THEN** the canonical site is `https://baldur.lat/` (the default `https://kill4n.github.io/todo_app/` URL is superseded by the domain redirect)

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