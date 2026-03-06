# dev-portfolio

> Personal portfolio website built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and **i18next**.

## 🚀 About
This project is a responsive, multi-page developer portfolio featuring:

- **Client-side routing** via `react-router-dom`
- **Internationalization (i18n)** with English + Portuguese support
- **Downloadable CV** (language-aware PDF) served from `/public/documents`
- **Tailwind CSS UI components** using Headless UI and Heroicons
- A small set of pages: **Home**, **About**, **Projects**, **Skills**, **Contact**

## 🧰 Tech Stack
- **React 19** + **TypeScript**
- **Vite** (fast dev/build tooling)
- **Tailwind CSS** (utility-first styling)
- **React Router v7** (SPA navigation)
- **i18next + react-i18next** (localization)
- **Headless UI** & **Heroicons** (accessible components/icons)

## Getting Started
### 1) Install dependencies
```bash
npm install
```

### 2) Run in development mode
```bash
npm run dev
```
Open the URL printed in the terminal (usually `http://localhost:5173`).

### 3) Build for production
```bash
npm run build
```

### 4) Preview the production build
```bash
npm run preview
```

### 5) Linting
```bash
npm run lint
```

## 📁 Project Structure
```
src/
  components/         # Reusable UI pieces (Navbar, cards, footer, etc.)
  locales/            # i18n translation JSON files
  pages/              # App routes (Home, About, Projects, Skills, Contact)
  App.tsx             # Root route configuration
  i18n.ts             # i18next initialization
public/
  documents/         # Static assets (CV PDF files, etc.)
  icons/             # Static images/assets
```

## 🌍 Internationalization (i18n)
Translations are stored in:
- `src/locales/en/common.json`
- `src/locales/pt/common.json`

To add or update text:
1. Update the JSON key/value in both locale files.
2. Use `t('namespace.key')` in components to reference translations.

## 🧭 Routing
Routes are defined in `src/App.tsx`:
- `/` → Home
- `/about` → About
- `/projects` → Projects
- `/skills` → Skills
- `/contact` → Contact

Any unknown route redirects to `/`.

## 📄 CV Download
The navbar includes a **Download CV** button that chooses the file based on the current language:
- English → `/documents/Rodrigo_Costa_CV.pdf`
- Portuguese → `/documents/Rodrigo_Costa_Currículo.pdf`

## 💡 Customization Tips
### Add a new page
1. Create a new file in `src/pages/` (e.g., `Blog.tsx`).
2. Add a `<Route path="/blog" element={<Blog />} />` to `src/App.tsx`.
3. Add a nav item in `src/components/Navbar/Navbar.tsx`.

### Add a new translation key
1. Add the key to both `src/locales/en/common.json` and `src/locales/pt/common.json`.
2. Use `t('your.key')` inside components.

## ⚙️ Tooling
### Vite config
Configured in `vite.config.ts` with:
- `@vitejs/plugin-react` (with React Compiler enabled)
- `@tailwindcss/vite`

### ESLint
Use `npm run lint` to check code quality. ESLint is configured via `eslint.config.js`.

## 📦 Deployment
Any static hosting service that supports SPA routing works (Netlify, Vercel, GitHub Pages, etc.).

A typical build + deploy flow:
1. `npm run build`
2. Serve `dist/` (for example with Vercel or Netlify)

---

> Built by Rodrigo Costa
