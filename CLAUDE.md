# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Minimal Next.js starter kit for building landing pages. This is a template repo — see the setup checklist below when cloning for a new project.

**Stack:** Next.js 16 (App Router), React 19, TypeScript 5 (strict), Tailwind CSS 4 (PostCSS plugin, inline `@theme`), ESLint 9 (flat config), Prettier (with Tailwind class sorting)

## Commands

- `npm run dev` — Dev server on port 3000
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — ESLint
- `npm run type-check` — TypeScript type checking (`tsc --noEmit`)
- `npm run format` — Prettier formatting
- `npm run format:check` — Check formatting

## Architecture

- **App Router** — Pages and layouts in `src/app/`
- **Path alias** — `@/*` maps to `src/*`
- **Tailwind CSS 4** — Theme configured inline via `@theme` in `src/app/globals.css`; colors use CSS custom properties (`--background`, `--foreground`) defined in `:root`
- **Font** — Inter loaded via `next/font/google` in `layout.tsx`, exposed as `--font-inter` CSS variable, applied in both `@theme` and `body` in `globals.css`
- **Components** — `src/components/sections/` for page sections, `src/components/common/` for reusable utility components
- **Static assets** — `public/images/`, `public/videos/`, `public/vectors/`
- **Custom font files** — `src/fonts/`
- **ESLint** — Flat config in `eslint.config.mjs` using `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`

## Project Setup Checklist

When cloning this kit for a new project, update the following:

1. **`package.json`** — Change `name` from `"marner-next-kit"` to the project name
2. **`src/app/layout.tsx`** — Update `metadata.title` from `"marner-next-kit"`; add `description` and Open Graph tags as needed
3. **`src/app/page.tsx`** — Replace the placeholder landing page content
4. **`README.md`** — Update title, description, and any project-specific details
5. **Font** — To swap Inter: update the import and variable in `layout.tsx`, then update `font-family` references in `globals.css`
6. **Theming** — Update `--background` and `--foreground` CSS variables in `globals.css`
7. **Metadata** — Add favicon, og-image, and other assets to `public/`
8. **Environment** — Create `.env.local` from `.env.example` if needed
9. **`.gitkeep` files** — Remove from any folder once it has actual content
