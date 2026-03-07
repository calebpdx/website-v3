# AGENTS.md

## Project Overview

Personal portfolio website built with Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, and Sanity CMS v3. Uses pnpm as package manager.

## Build / Lint / Test Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Production build (includes type checking)
pnpm start        # Start production server
pnpm lint         # Run ESLint (next lint)
```

There is no test runner configured. No Jest, Vitest, or Playwright. No test files exist. If adding tests, prefer Vitest for unit tests and Playwright for E2E.

## Project Structure

```
app/              # Next.js App Router pages and layouts
components/       # React components (PascalCase directories)
lib/              # Utilities (cn, getImageUrl, contentModules mapping)
sanity/           # Sanity CMS schemas, client, queries, types
utils/            # Additional utilities (cn, constants)
public/           # Static assets
```

No `src/` directory. Source code lives at the project root. The path alias `@/*` maps to the project root (e.g., `@/components/...`, `@/sanity/lib/client`).

## Code Style

### Formatting

- **Prettier** with all defaults (empty `.prettierrc: {}`).
- **ESLint** extends `next/core-web-vitals` only (`.eslintrc.json`).
- Double quotes for strings (Prettier default).
- Semicolons enabled (Prettier default).
- 2-space indentation in most files.

### Imports

Order (loosely followed, not enforced by tooling):

1. `"use client"` directive on line 1 when needed
2. Third-party / framework imports (`next`, `react`, `sanity`, `framer-motion`)
3. Path-aliased local imports (`@/sanity/lib/client`, `@/utils/cn`)
4. Relative imports (`./types`, `../Navigation/NavBar`)
5. Side-effect imports last (`./globals.css`)

```ts
// Type-only imports — both forms are used:
import type { Metadata } from "next";
import { clsx, type ClassValue } from "clsx";
```

Use `@/*` aliases for cross-directory imports. Use relative imports for files within the same component directory.

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

### Barrel Exports

Component directories use `index.ts` barrel files:

```ts
export * from "./BasicHeroCta";
export { default as Footer } from "./Footer";
```

### Props & Types

- Prefer inline object types for simple props: `({ data }: { data: any })`.
- Extract to a companion `types.ts` file when types are shared across files in a directory.
- Use `Props` suffix for component prop types: `HeaderProps`, `ButtonProps`.
- Use `Type` suffix for Sanity-related types: `LinkType`, `navigationType`.
- No `I` or `T` prefixes on interfaces/types.
- Both `type` and `interface` are used. Prefer `interface` when extending other types.
- `any` is used frequently for Sanity document data — this is an existing pattern, not ideal but accepted.

### Naming Conventions

| Element             | Convention       | Example                          |
| ------------------- | ---------------- | -------------------------------- |
| Components          | PascalCase       | `MainHeader`, `ExperienceClient` |
| Component files     | PascalCase       | `MainHeader.tsx`                 |
| Component dirs      | PascalCase       | `Header/`, `DescriptiveCta/`     |
| Utility files       | camelCase        | `cn.ts`, `constants.ts`          |
| Variables/functions | camelCase        | `selectedJob`, `getImageUrl`     |
| Types/interfaces    | PascalCase       | `HeaderProps`, `LinkType`        |
| GROQ query consts   | UPPER_SNAKE_CASE | `HOMEPAGE_QUERY`, `PAGE_QUERY`   |
| Other constants     | camelCase        | `pageInfo`, `socials`            |
| Sanity schema types | camelCase        | `basicHeroCtaType`, `pageType`   |

### Data Fetching

- **Async Server Components** calling the Sanity client directly — no API routes, no tRPC, no SWR/React Query.
- GROQ queries are centralized in `sanity/lib/queries.ts`.
- Server components fetch data and pass it to client components as props.
- Pattern: `ComponentName.tsx` (server, fetches data) + `ComponentNameClient.tsx` (client, handles interactivity).

```ts
// Server component
const ExperienceSection = async ({ data }: { data: any }) => {
  const experienceData = await client.fetch(EXPERIENCE_QUERY, { id: data._id });
  return <Experience data={experienceData} />;
};

// Client component ("use client")
const Experience = ({ data }: { data: any }) => { ... };
```

### Styling

- **Tailwind CSS** with `cn()` utility (clsx + tailwind-merge) for conditional classes.
- **shadcn/ui** components using `class-variance-authority` for variants.
- **tailwind-variants** available for more complex variant patterns.
- **Framer Motion** for animations (motion components, `useInView`, animation variants).
- Custom colors: `primary-dark` (#232125), `primary-light` (#fdfdfb).
- Font: Montserrat (`font-montserrat` class).

### Error Handling

- Minimal. No try/catch blocks in the codebase.
- Null guards with early `return null` for missing data.
- `throw new Error(...)` for critical missing data (pages, env vars).
- Next.js `error.tsx` convention for route-level error boundaries.
- Sanity env vars validated with an `assertValue()` helper that throws on `undefined`.

### State Management

- No external state library. Minimal client-side state.
- React `useState` for local component state only.
- React Context used only in the carousel component (shadcn/ui).

## Environment Variables

| Variable                         | Required | Notes                         |
| -------------------------------- | -------- | ----------------------------- |
| `NEXT_PUBLIC_SANITY_PROJECT_ID`  | Yes      | Sanity project ID             |
| `NEXT_PUBLIC_SANITY_DATASET`     | Yes      | Sanity dataset name           |
| `NEXT_PUBLIC_SANITY_API_VERSION` | No       | Defaults to `"2024-05-26"`    |
| `SANITY_API_READ_TOKEN`          | Yes      | Server-only Sanity read token |
| `NEXT_PUBLIC_URL`                | No       | Site URL for link resolution  |

## Key Libraries

- **next-sanity** — Sanity + Next.js integration
- **@sanity/image-url** — Sanity image URL builder
- **framer-motion** — Animations
- **embla-carousel-react** — Carousel
- **class-variance-authority** — Component variants (shadcn/ui)
- **tailwind-merge** + **clsx** — Class merging via `cn()`
- **lucide-react** — Icons
- **@icons-pack/react-simple-icons** — Brand icons
- **date-fns** — Date formatting

## shadcn/ui Configuration

Config in `components.json`. RSC enabled. Uses `@/components` alias for components and `@/lib/utils` for the `cn` utility. Style: `default`. Base color: `neutral`. CSS variables disabled.
