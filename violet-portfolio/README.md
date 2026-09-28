# Violet Ongonge — Portfolio

React + TypeScript + CSS portfolio site, built with Vite.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # test the production build locally
```

The build output lands in `dist/` — deploy that folder to Netlify, Vercel,
GitHub Pages, or any static host.

## Project structure

```
src/
  data/profile.ts     ← all content (name, bio, projects, skills, experience...)
  components/         ← Nav, Footer, ProjectCard, Timeline
  pages/               ← one file per route (Home, About, Projects, Skills, Resume, Blog, Contact)
  index.css            ← design tokens (colors, type, spacing) + global resets
```

## Editing content

Almost everything on the site is pulled from **`src/data/profile.ts`**.
To update your bio, add a project, or change a skill, edit that file —
you generally won't need to touch the page components at all.

## Adding your resume PDF

Drop a file named `resume.pdf` into the `public/` folder. The "Download PDF"
button on the Resume page already links to `/resume.pdf`.

## Adding blog posts

The Blog page (`src/pages/Blog.tsx`) currently shows an empty state. Add
entries to the `posts` array at the top of that file once you're ready to
publish — each post just needs a `slug`, `title`, `date`, and `excerpt`.

## Design notes

- **Type:** Space Grotesk (display), Inter (body), IBM Plex Mono (labels/tags/meta)
- **Color:** dark ink (`#12141d`) + amber accent (`#e8a23a`) + teal detail (`#1f6f63`) on a cool paper background (`#eef0f2`)
- Project cards and the resume timeline are styled to echo the structured,
  systems-minded work in the projects themselves (auth flows, audit logs,
  API integrations) rather than a generic template look.
