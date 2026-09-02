# Custom Domain (baldur.lat)

## ADDED Requirements

### Requirement: Serve site at custom apex domain
The site MUST be served at the custom apex domain `https://baldur.lat/` rather than only at the default `https://kill4n.github.io/todo_app/` Pages URL.

#### Scenario: Custom domain serves the app
- **WHEN** the user visits `https://baldur.lat/`
- **THEN** the todo app loads and functions normally (all assets load, todos work)

### Requirement: CNAME file ships with the build
The built artifact MUST include a `CNAME` file at the site root containing `baldur.lat` so the custom domain mapping persists across CI deploys.

#### Scenario: Publish artifact contains CNAME
- **WHEN** the workflow uploads the built `dist/` to Pages
- **THEN** the artifact root contains a `CNAME` file whose content is `baldur.lat`

### Requirement: DNS points at GitHub Pages
The domain's DNS records (hosted at Namecheap) MUST resolve `baldur.lat` to GitHub Pages. This change documents the required records as part of setup; the actual DNS modification happens in the Namecheap dashboard and is outside the repo.

#### Scenario: Apex resolves to GitHub Pages
- **WHEN** `baldur.lat` is queried
- **THEN** it resolves (via the four GitHub Pages A records) to GitHub Pages, allowing the Pages custom-domain validation and HTTPS to succeed

#### Scenario: HTTP(S) reachable over the domain
- **WHEN** the user loads `https://baldur.lat/`
- **THEN** the page is served over HTTPS (enforced by Pages after DNS resolves)