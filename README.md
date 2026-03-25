# marner-next-kit

A minimal Next.js starter kit for building landing pages.

## Stack

- **Next.js 16** — App Router
- **React 19**
- **TypeScript 5** — Strict mode
- **Tailwind CSS 4** — Via PostCSS plugin, inline `@theme` configuration
- **ESLint** — Next.js Core Web Vitals + TypeScript rules (flat config)
- **Prettier** — With Tailwind CSS class sorting

## Getting Started

```bash
npm install
npm run dev
```

Dev server runs on [http://localhost:3000](http://localhost:3000).

## Scripts

| Command                | Description                   |
| ---------------------- | ----------------------------- |
| `npm run dev`          | Start dev server on port 3000 |
| `npm run build`        | Production build              |
| `npm run start`        | Start production server       |
| `npm run lint`         | Run ESLint                    |
| `npm run type-check`   | TypeScript type checking      |
| `npm run format`       | Format with Prettier          |
| `npm run format:check` | Check formatting              |

## Project Structure

```
src/
  app/                  # Pages and layouts (App Router)
  components/
    sections/           # Full-width landing page sections
    common/             # Reusable utility components
  fonts/                # Custom font files
public/
  images/
  videos/
  vectors/
```

## Path Alias

`@/*` maps to `src/*` — use `@/components/...` for imports.

## Security

Pre-configured with hardened HTTP security headers (`next.config.ts`), a strict Content Security Policy, `robots.txt`, and a `security.txt` disclosure contact. Indexing is blocked by default (remove before launch).

## Theming

Colors and fonts are configured via CSS variables in `src/app/globals.css` using Tailwind 4's `@theme inline` directive.

## Setting Up a New Project

See `CLAUDE.md` for a step-by-step checklist of what to update when starting a new project from this kit.
