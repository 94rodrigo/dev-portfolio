# dev-portfolio

> A responsive, modern developer portfolio website built with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS**, and **i18next**. Features bilingual support (EN/PT) and optimized for GitHub Pages deployment.

## 🚀 Overview

This is a professional portfolio site showcasing development skills and projects. The site is fully responsive, supports English and Portuguese, and includes multiple sections to highlight your work and experience.

**Live Demo:** [https://94rodrigo.github.io/dev-portfolio](https://94rodrigo.github.io/dev-portfolio)

### Key Features
- 🌐 **Bilingual Support** — English + Portuguese translations
- 📱 **Fully Responsive** — Mobile-first design with Tailwind CSS
- ⚡ **Fast Performance** — Built with Vite and React 19
- 🧭 **Smooth Navigation** — Client-side routing via React Router v7
- 📄 **CV Downloads** — Language-aware PDF downloads
- ♿ **Accessible** — Headless UI components with semantic HTML
- 🎨 **Modern UI** — Heroicons + Tailwind CSS components

## 🧰 Tech Stack

| Layer | Technologies |
|-------|--------------|
| **Frontend Framework** | React 19 + TypeScript |
| **Build Tool** | Vite 7 |
| **Styling** | Tailwind CSS 4 + @tailwindcss/vite |
| **Routing** | React Router v7 |
| **i18n** | i18next + react-i18next |
| **Components** | Headless UI, Heroicons |
| **Dev Tools** | ESLint, TypeScript compiler |
| **Hosting** | GitHub Pages |

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/pnpm

### Installation & Setup

1. **Clone and install**
```bash
npm install
```

2. **Start development server**
```bash
npm run dev
```
The site will open at `http://localhost:5173` (check terminal for exact URL).

3. **Build for production**
```bash
npm run build
```
This runs TypeScript type-checking and builds to the `dist/` folder.

4. **Preview production build locally**
```bash
npm run preview
```

5. **Check code quality**
```bash
npm run lint
```

### Deployment

The project is configured for **GitHub Pages** deployment:

```bash
npm run deploy
```

This command:
1. Builds the project (`npm run build`) and copies `index.html` to `404.html`, so deep links like `/dev-portfolio/projects` work on GitHub Pages
2. Deploys the `dist/` folder to the `gh-pages` branch

Configure the `homepage` field in `package.json` to match your GitHub Pages URL.

## 📁 Project Structure

```
.
├── src/
│   ├── components/          # Navbar, Footer and the page sections (Hero, About, Projects, Skills, Contact)
│   ├── hooks/               # useActiveSection, useCvLink, useReveal (scroll fade-in), useTheme
│   ├── pages/               # Home (composes the sections) and NotFound
│   ├── constants.ts         # Section ids and contact links
│   ├── index.css            # Design tokens (colors, fonts) and base styles
│   ├── locales/             # i18n translation files
│   │   ├── en/
│   │   │   └── common.json
│   │   └── pt/
│   │       └── common.json
│   ├── App.tsx              # Layout (skip link, navbar, main, footer)
│   ├── i18n.ts              # i18next setup
│   └── main.tsx             # React entry point
├── public/
│   ├── documents/           # CV PDF files
│   └── favicon.svg
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript settings
├── eslint.config.js         # Linting rules
└── package.json             # Dependencies & scripts
```

## 🧭 Navigation

The portfolio is a single page with anchored sections, in this order: `#projects`, `#skills`, `#about` and `#contact`.
The old multi-page URLs (`/about`, `/projects`, `/skills`, `/contact`) still work and scroll to the matching section; any other path shows a 404 page.

Visitors can switch between light and dark themes in the navbar; the choice is saved in `localStorage` and defaults to the system preference.

## 🌍 Internationalization

### Translation Files
Translations are stored in JSON files:
- `src/locales/en/common.json` (English)
- `src/locales/pt/common.json` (Portuguese)

### Using Translations
In any component, import and use the `useTranslation` hook:

```tsx
import { useTranslation } from 'react-i18next';

export function MyComponent() {
  const { t } = useTranslation();
  return <h1>{t('nav.about')}</h1>;
}
```

### Adding a New Translation Key
1. Add the key to both `src/locales/en/common.json` and `src/locales/pt/common.json`
2. Use `t('section.key')` in components
3. Language switching happens automatically when users change the language

The language detector automatically detects the browser language or defaults to English.

## 📄 CV Downloads

The **Download CV** buttons (navbar and hero) serve language-specific PDF files:

| Language | File |
|----------|------|
| English | `public/documents/Rodrigo_Costa_CV.pdf` |
| Portuguese | `public/documents/Rodrigo_Costa_Currículo.pdf` |

Both files are served from `/public/documents/`.

## 💡 Customization Guide

### Add a New Section
1. Add its id to `SECTIONS` in `src/constants.ts` (the navbar link comes from this list)
2. Create the component in `src/components/<Name>/<Name>.tsx`, wrapping the content in `<Section>`
3. Render it in `src/pages/Home.tsx`
4. Add `nav.<id>` and the section texts to both locale files

### Modify Styling
- Global styles use Tailwind CSS v4
- Colors (light and dark) and fonts are tokens in `src/index.css` (`:root` + `@theme`); use them as `bg-paper`, `text-ink`, `text-accent`, `font-display`, etc.
- Update Tailwind classes directly in components

### Add Components
Place reusable components in `src/components/`:
- Use TypeScript for type safety
- Use Headless UI for accessible interactive components
- Use Heroicons for icons

## ⚙️ Configuration

### Vite
Configured in `vite.config.ts`:
- React plugin with React Compiler enabled
- Tailwind CSS Vite plugin for optimized builds

### TypeScript
- Type checking via `tsc -b` before builds
- Strict mode enabled for type safety

### ESLint
```bash
npm run lint
```
Checks code quality via rules in `eslint.config.js`

## 📦 Deployment Options

This is a static SPA (Single Page Application) and can be deployed to any static hosting service.

### GitHub Pages (Current Setup)
```bash
npm run deploy
```
Automatically builds and deploys to GitHub Pages. Update the `homepage` field in `package.json` if your repo name changes.

### Vercel
1. Push to GitHub
2. Connect repo to Vercel
3. Vercel auto-detects Vite and deploys

### Netlify
1. Connect repo to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Manual Deployment
1. Run `npm run build` to generate `dist/` folder
2. Deploy the `dist/` folder to your hosting service

## 🤝 Contributing

Contributions welcome! Please:
1. Create a feature branch (`git checkout -b feature/your-feature`)
2. Commit changes with clear messages
3. Push to your branch
4. Create a pull request

## 📝 License

This project is personal work. Feel free to use it as inspiration for your own portfolio.

---

**Built by:** Rodrigo Costa  
**Email:** rodrigoc94@hotmail.com  
**GitHub:** [@94rodrigo](https://github.com/94rodrigo)
