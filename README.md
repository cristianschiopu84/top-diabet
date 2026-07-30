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
- `npm run dev:preview` — rulează local cu variabile din `.env.preview`
- `npm run build` — production build
- `npm run build:preview` — build pentru mediul preview
- `npm start` — pornește build-ul de producție
- `npm run start:preview` — pornește build-ul preview
- `npm run lint` — ESLint

## Medii de rulare (production + preview)

Proiectul suportă două medii publice:

- **production** (`NEXT_PUBLIC_APP_ENV=production`)
- **preview** (`NEXT_PUBLIC_APP_ENV=preview`)

### Setup rapid

1. Creează fișierele locale de mediu:

```bash
cp .env.production.example .env.production
cp .env.preview.example .env.preview
```

2. Completează valorile reale (URL, tracking IDs).

3. Rulează preview local:

```bash
npm run dev:preview
```

În mediul **preview**, aplicația setează automat noindex/disallow pentru crawlere și nu expune sitemap/JSON-LD.

## Structură

- `src/components/layout` — Navbar, Footer
- `src/components/sections` — secțiuni homepage
- `src/components/ui` — componente reutilizabile
- `src/lib` — date, constante, animații
