### zachalbert.com_v7 — Local Development

This site uses Blendid 4 (Gulp 3 + Webpack 3 era). To run it reliably on a modern mac, use Node 10 via nvm just for this project. No need to change your global Node.

### Prerequisites

- nvm installed (see `https://github.com/nvm-sh/nvm`)
- Yarn 1.x or npm (examples below use Yarn)

### Setup

```bash
cd /Users/zac/Projects/zachalbert.com_v7
# Use the project-local Node version from .nvmrc (Node 10)
nvm install 10
nvm use

# Install dependencies (ignore legacy engine constraints)
yarn install --ignore-engines
```

### Run the dev server

```bash
yarn dev
```

- Starts BrowserSync and watches files.
- Serves `public/` (default at http://localhost:3000; Blendid may choose a different port if 3000 is busy).

### Build for production

```bash
yarn build
```

- Outputs compiled assets to `public/` with revving enabled per Blendid config.

### Project structure (relevant bits)

- `src/html/` → Nunjucks templates compiled to HTML
- `src/stylesheets/app.scss` → compiled to `public/stylesheets/app.css`
- `src/javascripts/app.js` → bundled to `public/javascripts/app.js`
- `src/images/`, `src/fonts/`, `src/icons/`, `src/static/` → copied into `public/`
- Blendid config lives in `config/path-config.json` and `config/task-config.js`

### Notes and troubleshooting

- Engines warning/error during install: Blendid 4 declares a Node engine range < 10; we intentionally run with Node 10. Use `--ignore-engines` during install as shown above.
- node-sass binary errors (rare under Node 10):
  - Fix by removing `node_modules` and reinstalling:
    ```bash
    rm -rf node_modules yarn.lock
    yarn install --ignore-engines
    ```
- Watcher errors (e.g., a Gulp watch error) may appear on some systems but the site can still build and serve. If live reload doesn’t trigger, refresh manually or stop and re-run `yarn dev`.
- If a port is already in use, BrowserSync will select another; check terminal output for the URL.

### One-time environment pinning

This repo includes an `.nvmrc` set to Node 10 so `nvm use` works per-project without affecting your global Node. `package.json` also pins a modern `graceful-fs` via Yarn resolutions to improve compatibility.

### Clean rebuild

```bash
rm -rf node_modules yarn.lock public
nvm use
yarn install --ignore-engines
yarn build
```
