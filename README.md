# Vigneshwararaj Sathianarayanan: portfolio and build journal

Built with [Astro](https://astro.build). Published to GitHub Pages by `.github/workflows/deploy.yml` every time `main` is pushed.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:4321, reloads as you edit
npm run build      # production build in dist/
npm run preview    # serve the production build
```

## Add a journal entry

Create a Markdown file in `src/content/journal/`. Start the name with the date so the files sort:

```markdown
---
title: Short title, under about 32 characters
date: 2026-11-05
project: local-assistant      # file name of a project in src/content/projects/
summary: One or two sentences shown in lists and link previews.
draft: false                  # true keeps it off the site
---

Write the entry here. Use ## for section headings.
```

Commit and push. The site updates in about a minute.

## Add a project

Create a Markdown file in `src/content/projects/`. Copy an existing one for the fields. Put its picture in `public/images/`, and add the picture's credit to `src/components/Footer.astro` if it is not your own.

## Contact links

Email, GitHub and LinkedIn are set in `src/site.ts`.

## Name font

The hero name uses Rovelink from `public/fonts/`. That folder is gitignored because the local copy is a personal-use demo. Without it the name falls back to Passion One. After buying a licence, remove the folder from `.gitignore` and commit the font.
