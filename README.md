# Nikosnotes

A personal blog & portfolio — essays on finance, economy, technology, energy, sports, and literature, plus a projects showcase and an about page. Built with **Astro + Tailwind**, edited through a **visual editor** (Decap CMS), and deployed on **Netlify**.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Add posts with the visual editor (no code)

You never have to touch the code editor to publish. Two ways:

### Try it locally (no login)
Open two terminals:

```bash
npx decap-server   # terminal 1 — local CMS backend
npm run dev        # terminal 2 — the site
```

Then open **http://localhost:3000/admin/index.html**, write a post, and hit **Publish**. A new Markdown file appears in `src/content/blog/` (or `projects/`) and shows up on the site.

> Local dev quirk: use the full `/admin/index.html` path locally (Astro's dev server doesn't serve the bare `/admin/` directory). In production on Netlify, `/admin/` works directly.

### Add posts by hand (alternative)
Drop a `.md` file in `src/content/blog/` with this header:

```md
---
title: My Post
description: One-line summary for the card.
category: Technology   # Finance | Economy | Technology | Energy | Sports | Literature
pubDate: 2024-06-26
cover: https://placehold.co/1200x600   # optional
tags: [tag1, tag2]
featured: false
draft: false
---

Your markdown body here.
```

## Customize

- **Profile / name / email / tagline:** `src/site.ts`
- **Experience & skills:** `src/pages/about.astro`
- **Brand colors & fonts:** `tailwind.config.mjs`
- **Avatar / hero images:** drop files in `public/` and reference them (e.g. `/me.jpg`), or upload via `/admin`.

## Deploy to Netlify

1. Push this folder to a new **GitHub** repo.
2. On Netlify → *Add new site → Import from GitHub* → pick the repo.
   Build settings are auto-detected from `netlify.toml` (`npm run build`, publish `dist`).
3. Set `site` in `astro.config.mjs` to your Netlify URL.

## Going live with the editor (production auth)

Netlify Identity is deprecated for new sites, so the live `/admin` uses Decap's **GitHub backend** with an OAuth handler:

1. In `public/admin/config.yml`, set `repo: your-username/nikosnotes`.
2. Create a **GitHub OAuth App** (Settings → Developer settings → OAuth Apps).
   Authorization callback URL → your OAuth handler.
3. Deploy a small OAuth handler — easiest options:
   - The community **Netlify function** `netlify-cms-oauth` / `decap-oauth` (one-click templates exist), or
   - Switch the editor to **Sveltia CMS** (a drop-in that uses the same `config.yml` and has simpler GitHub login) by swapping the script in `public/admin/index.html`.

Until then, the **local** editor (above) works fully.

## Design QA

```bash
node screenshot.mjs http://localhost:3000          # saves to ./temporary screenshots/
node screenshot.mjs http://localhost:3000 about    # labelled
```
