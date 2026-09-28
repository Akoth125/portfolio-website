# Violet Ongonge — Portfolio

My personal portfolio website, built with **React, TypeScript, CSS, and Vite**.

The site showcases my projects, skills, experience, and ongoing journey as a Computer Science graduate and developer.

## 🚀 Getting Started

Clone the repository and install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL printed in your terminal (usually `http://localhost:5173`).

## 📦 Build for Production

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The production files are generated in the `dist/` folder and can be deployed to platforms such as Vercel, Netlify, or GitHub Pages.

## 📁 Project Structure

```text
src/
├── data/
│   └── profile.ts          # Portfolio content and personal information
├── components/             # Reusable UI components
│   ├── Nav.tsx
│   ├── Footer.tsx
│   ├── ProjectCard.tsx
│   └── Timeline.tsx
├── pages/                  # Individual portfolio pages
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Resume.tsx
│   ├── Blog.tsx
│   └── Contact.tsx
└── index.css               # Global styles and design tokens
```

## ✏️ Editing Content

Most of the content displayed throughout the portfolio is stored in:

```text
src/data/profile.ts
```

This includes information such as my:

* Bio
* Skills
* Projects
* Experience
* Education

Updating the content in this file makes it easier to maintain the portfolio without having to modify individual page components.

## 📄 Adding a Resume

To add a downloadable resume:

1. Place your PDF inside the `public/` folder.
2. Name it `resume.pdf`.

The Resume page is already configured to link to:

```text
/resume.pdf
```

## ✍🏽 Blog

The Blog page currently displays an empty state.

When I'm ready to publish, posts can be added to the `posts` array in:

```text
src/pages/Blog.tsx
```

Each post includes:

* `slug`
* `title`
* `date`
* `excerpt`

## 🎨 Design

The portfolio uses a simple, structured visual system:

* **Typography:** Space Grotesk, Inter, and IBM Plex Mono
* **Primary color:** Dark ink `#12141d`
* **Accent:** Amber `#e8a23a`
* **Detail:** Teal `#1f6f63`
* **Background:** Cool paper `#eef0f2`

The design is intentionally structured around the kind of work I enjoy building — practical interfaces, systems, and projects rather than a purely template-driven portfolio.

## 🛠️ Tech Stack

* React
* TypeScript
* Vite
* CSS
* Git & GitHub

---

Built by **Violet Ongonge** while learning, experimenting, and building my way forward in tech. 💻

