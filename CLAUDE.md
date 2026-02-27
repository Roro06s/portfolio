# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A French-language developer portfolio/agency site for "Devko Studio" (based in Cannes, France), built with React + Vite. It showcases web services (sites web, applications web, branding) and generates client inquiries via a contact form.

## Commands

```bash
npm run dev       # Start dev server with HMR
npm run build     # Production build
npm run lint      # ESLint check
npm run preview   # Preview production build locally
```

No test runner is configured.

## Architecture

**Routing**: `App.jsx` defines 4 routes via React Router:
- `/` → `HomePage` (full landing page with all sections stacked)
- `/services/sites-web`, `/services/applications-web`, `/services/branding` → dedicated service detail pages

**Landing page composition** (`HomePage.jsx`): Navbar → Hero (sticky) → About → Skills → Services → Projects → Contact → Footer, rendered as a vertical stack.

**Service pages** (`src/pages/services/`) share a consistent template: hero intro → 4-feature grid → 5-step process timeline → 3-tier pricing → CTA → Footer.

## Key Libraries & Patterns

- **Animations**: Framer Motion (primary — scroll-driven with `useScroll`/`useTransform`/`useInView`, staggered entrances, `AnimatePresence` for mount/unmount). GSAP is also installed but Framer Motion dominates.
- **Styling**: Tailwind CSS with a custom theme (see `tailwind.config.js`):
  - Accent colors: Violet `#8B5CF6`, Cyan `#06B6D4`
  - Fonts: "Inter" (body), "Permanent Marker" (cursive accent — used in Services section chalkboard theme)
- **3D**: React Three Fiber + Drei + Three.js (assets in `src/assets/models/`)
- **Contact form**: EmailJS browser client — credentials are hardcoded in `Contact.jsx` (service ID, template ID, user ID)
- **i18n**: i18next is installed but usage may be partial

## Hero Section

The Hero uses a sticky-background effect: the section stays fixed while subsequent sections scroll over it. Three layered PNG images create a parallax phone mockup with different scroll velocities. Background scales from 1× to 4.2× as the user scrolls.

## ESLint Config

Flat config (`eslint.config.js`, ESLint v9). Custom rule: `no-unused-vars` ignores variables starting with an uppercase letter or `_`.

## Content Language

All UI text is in French. Component and variable names are in English.
