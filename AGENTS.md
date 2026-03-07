# AGENTS.md

## Project Overview

Personal portfolio website built with Next.js 16 (App Router, Turbopack), React 19, TypeScript 5.9, Tailwind CSS 4, and Sanity CMS v5. React Compiler enabled. Uses pnpm as package manager.

## Build / Lint / Test Commands

```bash
pnpm dev          # Start dev server (Turbopack)
pnpm build        # Production build (Turbopack, includes type checking)
pnpm start        # Start production server
pnpm lint         # Run ESLint (eslint CLI, flat config)
```

There is no test runner configured. If adding tests, prefer Vitest for unit tests and Playwright for E2E.

## Project Structure

```
app/              # Next.js App Router pages, layouts, metadata routes
components/       # React components (PascalCase directories)
lib/              # Utilities (cn, contentModules mapping)
sanity/           # Sanity CMS schemas, client, queries, types
utils/            # Additional utilities (cn, constants)
public/           # Static assets
```

No `src/` directory. Source code lives at the project root. The path alias `@/*` maps to the project root (e.g., `@/components/...`, `@/sanity/lib/client`).

## Code Style

### Formatting

- **Prettier** with all defaults (empty `.prettierrc: {}`).
- **ESLint 9** with flat config (`eslint.config.mjs`), extends `eslint-config-next`.
- Double quotes for strings (Prettier default).
- Semicolons enabled (Prettier default).
- 2-space indentation.

### Imports

Order (loosely followed, not enforced by tooling):

1. `"use client"` directive on line 1 when needed
2. Third-party / framework imports (`next`, `react`, `sanity`, `framer-motion`)
3. Path-aliased local imports (`@/sanity/lib/client`, `@/utils/cn`)
4. Relative imports (`./types`, `../Navigation/NavBar`)
5. Side-effect imports last (`./globals.css`)

```ts
import type { Metadata } from "next";
import { clsx, type ClassValue } from "clsx";
```

Use `@/*` aliases for cross-directory imports. Use relative imports within the same component directory.

### Components

- **Arrow functions** with `const`, then `export default` at the bottom:
  ```ts
  const MyComponent = ({ data }: { data: SomeType }) => {
    return <div>...</div>;
  };
  export default MyComponent;
  ```
- App route pages may use `export default async function PageName()` instead.
- Component files and directories: **PascalCase** (`Header/MainHeader.tsx`).
- Utility/lib files: **camelCase** (`contentModules.ts`, `cn.ts`).
- shadcn/ui primitives are flat in `components/` with lowercase names (`button.tsx`, `card.tsx`).
- Component directories may use `index.ts` barrel files for re-exports when needed.

### Props & Types

- Prefer inline object types for simple props: `({ data }: { data: any })`.
- Extract to a companion `types.ts` file when types are shared across files.
- Suffixes: `Props` for component props, `Type` for Sanity types.
- No `I` or `T` prefixes on interfaces/types.
- `any` is used for Sanity document data — existing pattern, accepted.

### Naming Conventions

| Element             | Convention       | Example                          |
| ------------------- | ---------------- | -------------------------------- |
| Components          | PascalCase       | `MainHeader`, `ExperienceClient` |
| Component files     | PascalCase       | `MainHeader.tsx`                 |
| Component dirs      | PascalCase       | `Header/`, `DescriptiveCta/`     |
| Utility files       | camelCase        | `cn.ts`, `constants.ts`          |
| Variables/functions | camelCase        | `selectedJob`, `urlForImage`     |
| Types/interfaces    | PascalCase       | `HeaderProps`, `LinkType`        |
| GROQ query consts   | UPPER_SNAKE_CASE | `HOMEPAGE_QUERY`, `PAGE_QUERY`   |
| Other constants     | camelCase        | `pageInfo`, `socials`            |
| Sanity schema types | camelCase        | `basicHeroCtaType`, `pageType`   |

### Data Fetching

- **Async Server Components** calling the Sanity client directly — no API routes, no tRPC.
- GROQ queries are centralized in `sanity/lib/queries.ts`.
- Server components fetch data and pass it to client components as props.
- Pattern: `ComponentName.tsx` (server) + `ComponentNameClient.tsx` (client, `"use client"`).

### Styling

- **Tailwind CSS 4** with CSS-first config (`@theme` in `app/globals.css`). No `tailwind.config.ts`.
- PostCSS plugin: `@tailwindcss/postcss` (not `tailwindcss`).
- `cn()` utility (clsx + tailwind-merge v3) for conditional classes.
- **shadcn/ui** components using `class-variance-authority` for variants.
- **tailwind-variants** v3 for complex variant patterns (slots, compound variants).
- **Framer Motion** for animations.
- Custom colors: `primary-dark` (#232125), `primary-light` (#fdfdfb).
- Font: Montserrat (`font-montserrat` class).

### Error Handling

- Null guards with early `return null` for missing data.
- `notFound()` from `next/navigation` for missing pages (returns proper 404).
- Next.js `error.tsx` for route-level error boundaries, `not-found.tsx` for 404s.
- Sanity env vars validated with `assertValue()` helper.

### State Management

- No external state library. React `useState` for local component state only.

## SEO

The site has foundational SEO in place. Key files:

- **`app/layout.tsx`** — Root metadata (title template, OG, Twitter cards, robots directives), JSON-LD structured data (Person + WebSite schema.org).
- **`app/robots.ts`** — Blocks `/studio/`, allows everything else, references sitemap.
- **`app/sitemap.ts`** — Dynamic sitemap generated from Sanity pages.
- **`app/not-found.tsx`** — Custom 404 page with link home.
- **`app/[slug]/page.tsx`** — `generateMetadata` for per-page titles/canonical URLs, `generateStaticParams` for SSG.
- **`utils/constants.ts`** — Central `pageInfo` object (title, description, URL, social handles).

### SEO TODO (future improvements)

- Add SEO fields to Sanity page schema (`metaTitle`, `metaDescription`, `ogImage`, `noIndex`) and wire into `generateMetadata`.
- Add a default OG image (`app/opengraph-image.png` or dynamic `app/opengraph-image.tsx`).
- Add page-level `description` to `generateMetadata` once Sanity schema supports it.
- Consider adding `BreadcrumbList` structured data for subpages.

## Environment Variables

| Variable                         | Required | Notes                                 |
| -------------------------------- | -------- | ------------------------------------- |
| `NEXT_PUBLIC_SANITY_PROJECT_ID`  | Yes      | Sanity project ID                     |
| `NEXT_PUBLIC_SANITY_DATASET`     | Yes      | Sanity dataset name                   |
| `NEXT_PUBLIC_SANITY_API_VERSION` | No       | Defaults to `"2025-03-01"`            |
| `SANITY_API_READ_TOKEN`          | Yes      | Server-only Sanity read token         |
| `NEXT_PUBLIC_URL`                | No       | Site URL (defaults to calebwhite.com) |

## Key Libraries

- **next-sanity** — Sanity + Next.js integration
- **@sanity/image-url** — Sanity image URL builder (named export `createImageUrlBuilder`)
- **framer-motion** — Animations
- **embla-carousel-react** — Carousel
- **class-variance-authority** — Component variants (shadcn/ui)
- **tailwind-merge** + **clsx** — Class merging via `cn()`
- **tailwind-variants** — Complex variant patterns with slots
- **lucide-react** — Icons
- **@icons-pack/react-simple-icons** — Brand icons
- **babel-plugin-react-compiler** — React Compiler (auto-memoization)

## shadcn/ui Configuration

Config in `components.json`. RSC enabled. Uses `@/components` alias for components and `@/lib/utils` for the `cn` utility. Style: `default`. Base color: `neutral`. CSS variables disabled.
