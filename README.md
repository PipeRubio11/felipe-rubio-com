# felipe-rubio-com

Personal site of **Felipe Rubio** — *Head of Paid Media + AI builder*.

Built with Next.js 16, React 19, Tailwind CSS 4, shadcn/ui, and next-intl. Bilingual (ES default · EN at `/en`). Deploys on Vercel.

## Stack

- **Framework**: Next.js 16 (App Router · Turbopack)
- **UI**: React 19 · Tailwind CSS 4 · shadcn/ui (Base UI primitives) · Lucide icons
- **i18n**: next-intl 4 (Spanish default, English at `/en`)
- **Animation**: Framer Motion
- **Type-safety**: TypeScript 5

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Project structure

```
messages/             ES + EN translation bundles
src/
  app/[locale]/       Routed pages (single-page scroll for now)
  components/         Header · Hero · About · Work · Stack · Certifications · Contact · Footer
  data/
    cv.ts             Career timeline · skills · certifications (single source of truth)
    projects.ts       5 portfolio projects with stack, APIs, metrics
  i18n/               next-intl routing + request config
  lib/                utilities (cn helper)
  proxy.ts            next-intl middleware (renamed in Next 16)
```
