# Personal Portfolio Website

A modern, editorial-style personal portfolio built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Lucide React. Designed for an Information Technology student and aspiring software developer.

## Project Structure

```text
├── public/
│   ├── certificates/      # Store certificate images here
│   ├── images/            # Store custom portrait/project images here
│   └── resume.pdf         # Replace with your actual CV/resume PDF
├── src/
│   ├── assets/images/     # Generated default editorial visual assets
│   ├── components/        # Reusable UI components (Navbar, Modals, SafeImage, etc.)
│   ├── data/
│   │   └── portfolio.ts   # Single source of truth for all editable content
│   ├── hooks/             # Custom hooks (theme switcher, active section observer)
│   ├── sections/          # Individual page sections (Hero, About, Skills, Projects, etc.)
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## How to Customize Content

1. **Personal Details, About, Skills, Projects, Education, Certificates, & Contact**:
   Open `src/data/portfolio.ts` and replace the bracketed placeholders (e.g., `[YOUR FULL NAME]`, email, GitHub/LinkedIn URLs, coursework, certificate titles, and project slots 02–06) with your own verified information.
2. **Profile Photo & Project Thumbnails**:
   Place your images inside `public/images/` and update the `imageSrc` path in `src/data/portfolio.ts` (for example, `'/images/profile.jpg'`).
3. **Certificates**:
   Place certificate images inside `public/certificates/` and set each certificate's `imageSrc` in `src/data/portfolio.ts`.
4. **Downloadable CV (`resume.pdf`)**:
   Replace `public/resume.pdf` with your actual exported resume PDF file (keeping the filename `resume.pdf`).
5. **Contact Form**:
   The contact form validates entries and provides direct `Open in Email App` (`mailto:`) and `Copy Message` actions without pretending to submit to an unconfigured backend. To wire a real form backend later, connect the submit handler in `src/sections/Contact.tsx` to your preferred endpoint (e.g. Formspree, Resend, or a custom API route).

## Scripts

- `npm run dev` — Start local development server
- `npm run build` — Build production bundle into `dist/`
- `npm run lint` — Type-check with TypeScript (`tsc --noEmit`)
