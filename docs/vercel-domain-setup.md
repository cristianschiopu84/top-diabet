# Vercel + domeniu custom (`topdiabet.ro`)

## 1. Adaugă domeniile în Vercel

În proiectul Vercel:

- `topdiabet.ro`
- `www.topdiabet.ro`

Setează unul ca domeniu principal (de regulă `www.topdiabet.ro`) și redirect 301 din celălalt.

## 2. Configurează DNS la providerul domeniului

În panoul DNS al domeniului, folosește valorile afișate de Vercel în `Project -> Settings -> Domains`.

De regulă:

- `A @ -> <IP-ul recomandat de Vercel>`
- `CNAME www -> <target-ul recomandat de Vercel>`

> Vercel poate afișa valori noi în timp (migrare de infrastructură), deci folosește întotdeauna valorile din dashboardul curent.

## 3. Evită conflictele DNS

- Elimină recordurile vechi pentru `@` și `www` care pointează către alt hosting.
- Nu modifica recordurile de email (MX, SPF, DKIM, DMARC).

## 4. Verificare după propagare

```bash
dig +short A topdiabet.ro
dig +short CNAME www.topdiabet.ro
curl -I https://www.topdiabet.ro
```

În Vercel, domeniile trebuie să apară cu status `Valid Configuration`.
