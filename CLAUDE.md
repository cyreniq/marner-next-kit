# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Kit Detection

If the root directory name is **not** `marner-next-kit`, this repo has been cloned for a new project. Before doing anything else, walk the user through the **Project Setup Checklist** at the bottom of this file, prompting for each value (project name, metadata, font choice, theme colors, etc.) and applying the changes. Skip any items the user has already completed.

## Overview

Minimal Next.js starter kit for building landing pages. This is a template repo — see the setup checklist below when cloning for a new project.

**Stack:** Next.js 16 (App Router), React 19, TypeScript 5 (strict), Tailwind CSS 4 (PostCSS plugin, inline `@theme`), ESLint 9 (flat config with `defineConfig`), Prettier (with Tailwind class sorting)

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
- **Font** — Inter Variable loaded locally via `next/font/local` in `layout.tsx` from `src/fonts/`, exposed as `--font-inter` CSS variable, applied in both `@theme` and `body` in `globals.css`. The `body` `font-family` intentionally duplicates `--font-sans` from `@theme` — some mobile browsers need the explicit declaration.
- **Components** — `src/components/sections/` for page sections, `src/components/common/` for reusable utility components
- **Static assets** — `public/images/`, `public/videos/`, `public/vectors/`
- **Custom font files** — `src/fonts/`
- **ESLint** — Flat config in `eslint.config.mjs` using `defineConfig` from `eslint/config` with `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`

## Security

- **No indexing** — Crawling/indexing blocked via `robots.txt`, `robots` metadata in `layout.tsx`, and `X-Robots-Tag` header in `next.config.ts` (remove before launch)
- **Security headers** — Comprehensive HTTP security headers in `next.config.ts`: HSTS, CSP, COOP, CORP, COEP, X-Content-Type-Options, X-Frame-Options, X-DNS-Prefetch-Control, X-Permitted-Cross-Domain-Policies, Referrer-Policy, Permissions-Policy
- **CSP** — The Content Security Policy in `next.config.ts` is strict (`default-src 'self'`). When adding external resources (analytics, fonts, images, APIs), update the CSP directives accordingly or they will be blocked. `'unsafe-inline'` is required in `script-src` because Next.js App Router injects inline scripts for RSC payloads — removing it breaks hydration. Dev mode additionally includes `'unsafe-eval'`. For stricter CSP, implement nonce-based CSP via middleware (requires dynamic rendering).
- **`poweredByHeader: false`** — Next.js framework identification disabled
- **`security.txt`** — Vulnerability reporting contact at `public/.well-known/security.txt`

## Dependency Notes

- **`overrides`** — `package.json` includes an `overrides` field to pin `minimatch@^10` for security fixes in transitive ESLint dependencies. Keep this until `eslint-config-next` updates its dependency tree.

## Project Setup Checklist

When cloning this kit for a new project, update the following:

1. **`package.json`** — Change `name` from `"marner-next-kit"` to the project name
2. **`src/app/layout.tsx`** — Update `metadata.title` from `"marner-next-kit"`; add `description` and Open Graph tags as needed
3. **`src/app/page.tsx`** — Replace the placeholder landing page content
4. **`README.md`** — Update title, description, and any project-specific details
5. **Font** — To swap Inter: replace the font files in `src/fonts/`, update the `src` paths and variable in `layout.tsx`, then update `font-family` references in `globals.css`
6. **Theming** — Update `--background` and `--foreground` CSS variables in `globals.css`
7. **Metadata** — Add favicon, og-image, and other assets to `public/`
8. **Security** — Update `security.txt` contact and expiry; adjust CSP in `next.config.ts` if needed; remove `X-Robots-Tag` header, `robots.txt` disallow, and `robots` metadata when ready to launch
9. **Environment** — Create `.env.local` from `.env.example` if needed
10. **`.gitkeep` files** — Remove from any folder once it has actual content
