# Siev Minh — Portfolio

A premium personal portfolio for an Information Technology Engineering student, built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Deploy

Push this repo to GitHub and import it on [Vercel](https://vercel.com/new) — no extra configuration needed.

## Customize

- Personal info, skills, projects, and education data live in `lib/data.ts`.
- Add your real resume as `public/resume.pdf` (the Download CV button links to it).
- Add an Open Graph preview image at `public/og-image.png` (1200x630).
- Update social links and email in `lib/data.ts` under `personal.social`.
- Colors and fonts are defined as CSS variables in `app/globals.css` (`@theme` block).
