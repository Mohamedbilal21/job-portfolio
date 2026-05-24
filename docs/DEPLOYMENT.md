# Deployment: GitHub Pages & Azure Static Web Apps

## Build

```bash
npm run build
```

Output is in `dist/`. Use this for any static host.

---

## Option 1: GitHub Pages

**Pros:** Free, simple, good for open-source presence.

### Using `gh-pages` package

1. Install: `npm install gh-pages --save-dev`
2. In `package.json` add:
   - `"homepage": "https://<username>.github.io/<repo-name>"`
   - Script: `"deploy": "vite build && gh-pages -d dist"`
3. In `vite.config.js` set `base: '/<repo-name>/'` (e.g. `base: '/animated-portfolio/'`)
4. Run: `npm run deploy`
5. In repo **Settings → Pages**: source = **Deploy from a branch**, branch = `gh-pages`, folder = `/ (root)`.

### Using GitHub Actions

1. Create `.github/workflows/deploy.yml`:
   - Trigger: push to `main`
   - Steps: checkout → setup Node → `npm ci` → `npm run build` → deploy to `gh-pages` (e.g. with `peaceiris/actions-gh-pages`)
2. Set `base` in `vite.config.js` as above.

---

## Option 2: Azure Static Web Apps

**Pros:** Fits Azure-focused narrative, free tier, custom domain, GitHub integration.

1. **Azure Portal:** Create resource → **Static Web App**.
2. **Connect repo:** GitHub → choose org/repo, branch (e.g. `main`).
3. **Build configuration:**
   - Build preset: **Custom**
   - App location: `/`
   - Output location: `dist`
   - Build command: `npm run build`
4. **Deploy:** Save; Azure runs the build and deploys.
5. **Custom domain:** In the Static Web App → Custom domains → add your domain.

For root-level deployment (e.g. `yourname.azurestaticapps.net`), keep Vite `base: '/'`. No need for a repo-name path.

---

## Resume file

- Place your PDF in `public/resume.pdf` so it is served at `/resume.pdf`.
- Or set the resume link in the app to an external URL (e.g. Google Drive or LinkedIn PDF).

---

## Checklist

- [ ] Replace `Your Name`, email, GitHub, LinkedIn in the site and `index.html`.
- [ ] Add real resume PDF and/or link.
- [ ] Replace placeholder metrics with real numbers.
- [ ] Choose deployment (GitHub Pages or Azure Static Web Apps) and set `base` in Vite accordingly.
- [ ] Test `npm run build` and preview with `npm run preview`.
