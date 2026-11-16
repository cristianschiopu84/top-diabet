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
cp .env.example .env.local
npm run dev
```

Deschide [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — development
- `npm run build` — production build
- `npm start` — pornește build-ul de producție
- `npm run lint` — ESLint

## Structură

- `src/components/layout` — Navbar, Footer
- `src/components/sections` — secțiuni homepage
- `src/components/ui` — componente reutilizabile
- `src/lib` — date, constante, animații

## Flux: Dev → Staging → Production

### 1) Development (local)

1. Copiază variabilele: `cp .env.example .env.local`
2. Rulează: `npm run dev`
3. Lucrează pe un feature branch (ex. `cursor/...`), deschide PR către `master` sau către `staging`.

### 2) Staging

Există **trei** variante Vercel (detalii în [`docs/vercel-environments.md`](docs/vercel-environments.md)):

| Workflow | Unde | Plan Vercel |
| --- | --- | --- |
| **A) Custom Environment `staging`** | Environment dedicat + domain + env vars | **Pro / Enterprise only** |
| **B) Preview branch `staging`** | Branch Git `staging` + domain pe Preview | **Toate planurile (incl. Hobby)** |
| **C) Staged production** | Deploy pe `master`, promote manual | **Toate planurile** |

**Recomandare Hobby / fără upgrade:** folosește **B** pentru staging pe `staging.topdiabet.ro`, plus **C** dacă vrei verificare înainte ca domeniul de producție să se actualizeze.

- Branch-ul long-lived `staging` există în repo (tracking Preview / Custom Environment).
- Push pe `staging` → deployment de staging.
- Variabilele de mediu: Preview / Custom Environment `staging` (nu pune secrete în git).

### 3) Production

- Branch de producție: `master`.
- Merge în `master` → deployment Production în Vercel.
- Cu workflow **C** (staged production): după deploy, verifică URL-ul generat, apoi **Promote** manual în dashboard.
- Domenii producție: `www.topdiabet.ro`, `topdiabet.ro` (vezi și [`docs/vercel-domain-setup.md`](docs/vercel-domain-setup.md)).

### Pași rămase în Vercel Dashboard

Nu putem configura Vercel din acest mediu (fără token/CLI). Urmează checklist-ul:

- Runbook complet: [`docs/vercel-environments.md`](docs/vercel-environments.md)
- Checklist click-uri: [`docs/vercel-dashboard-checklist.md`](docs/vercel-dashboard-checklist.md)
