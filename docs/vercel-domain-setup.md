# Vercel + domeniu custom (`topdiabet.ro`)

## 1. Adaugă domeniile în Vercel

În proiectul Vercel:

- `topdiabet.ro`
- `www.topdiabet.ro`
- (staging) `staging.topdiabet.ro` — vezi [`vercel-environments.md`](./vercel-environments.md)

Setează unul ca domeniu principal de producție (de regulă `www.topdiabet.ro`) și redirect 301 din celălalt.

## 2. Configurează DNS la providerul domeniului

În panoul DNS al domeniului, folosește valorile afișate de Vercel în `Project → Settings → Domains`.

De regulă (producție):

- `A @ → <IP-ul recomandat de Vercel>`
- `CNAME www → <target-ul recomandat de Vercel>`

Pentru staging (subdomain):

- `CNAME staging → <target-ul recomandat de Vercel>` (ex. `cname.vercel-dns.com`)

> Vercel poate afișa valori noi în timp — folosește întotdeauna valorile din dashboardul curent.

## 3. Evită conflictele DNS / protejează emailul

- Elimină recordurile vechi pentru `@` și `www` care pointează către alt hosting (doar dacă migrezi producția).
- **Nu modifica** recordurile de email: MX, SPF, DKIM, DMARC.
- Adăugarea lui `staging` ca CNAME **nu** ar trebui să afecteze emailul pe `topdiabet.ro`.

## 4. Verificare după propagare

```bash
dig +short A topdiabet.ro
dig +short CNAME www.topdiabet.ro
dig +short CNAME staging.topdiabet.ro
curl -I https://www.topdiabet.ro
curl -I https://staging.topdiabet.ro
```

În Vercel, domeniile trebuie să apară cu status `Valid Configuration`.
