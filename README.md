# Top Diabet

Website premium pentru clinica de diabet **Top Diabet** (România).

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons

## Pornire

```bash
npm install
npm run dev
```

Deschide [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — development
- `npm run build` — production build
- `npm start` — pornește build-ul de producție
- `npm run lint` — ESLint
- `npm run typecheck` — TypeScript checks
- `npm run check` — lint + typecheck + build

## Structură

- `src/components/layout` — Navbar, Footer
- `src/components/sections` — secțiuni homepage
- `src/components/ui` — componente reutilizabile
- `src/lib` — date, constante, animații

## Flux recomandat: Dev -> Preview -> Production

### 1) Development (local)

1. Copiază variabilele:
   ```bash
   cp .env.example .env.local
   ```
2. Rulează local:
   ```bash
   npm run dev
   ```

### 2) Preview (staging pentru fiecare PR)

- Vercel creează automat un deployment Preview pentru fiecare branch/PR.
- Folosește mediul `Preview` în Vercel pentru variabile diferite față de producție.
- Workflow-ul GitHub Actions (`.github/workflows/ci.yml`) verifică automat lint, typecheck și build pe PR-uri către `master`.

### 3) Production

- Merge în `master` declanșează:
  - CI (lint, typecheck, build) în GitHub Actions;
  - deployment Production în Vercel (dacă proiectul este conectat la repo).
- Domeniile finale trebuie adăugate în Vercel la proiect:
  - `topdiabet.ro`
  - `www.topdiabet.ro`
