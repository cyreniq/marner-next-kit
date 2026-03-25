# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Setup Checklist

When cloning this kit for a new project, update the following:

1. **`package.json`** — Change `name` from `"marner-next-kit"` to the project name
2. **`src/app/layout.tsx`** — Update `metadata.title` from `"marner-next-kit"`; add `description` and Open Graph tags as needed
3. **`src/app/page.tsx`** — Replace the placeholder landing page content
4. **`README.md`** — Update title, description, and any project-specific details
5. **Font** — Inter is the default font, loaded in `layout.tsx` via `next/font/google` and applied in `globals.css`. To swap it: update the import and variable in `layout.tsx`, then update the `font-family` references in `globals.css`
6. **Theming** — Update `--background` and `--foreground` CSS variables in `globals.css`
7. **Metadata** — Add favicon, og-image, and other assets to `public/`
8. **Environment** — Create `.env.local` from `.env.example` if needed
9. **`.gitkeep` files** — Remove from any folder once it has actual content

## Commands

- `npm run dev` — Dev server on port 3000
- `npm run build` — Production build
- `npm run lint` — ESLint
- `npm run type-check` — TypeScript type checking
- `npm run format` — Prettier formatting
- `npm run format:check` — Check formatting

## Architecture

- **App Router** — Pages and layouts in `src/app/`
- **Path alias** — `@/*` maps to `src/*`
- **Tailwind CSS 4** — Theme configured inline via `@theme` in `src/app/globals.css`
- **Components** — `src/components/sections/` for page sections, `src/components/common/` for reusable utility components
- **Static assets** — `public/images/`, `public/videos/`, `public/vectors/`
- **Fonts** — Custom font files go in `src/fonts/`
