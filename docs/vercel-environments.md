# Vercel environments — Top Diabet (RO / EN)

Runbook pentru cele **3** workflow-uri de staging / producție.  
Acest repo **nu** poate configura Vercel automat (fără token / CLI auth). Pașii de mai jos se fac în **Vercel Dashboard**.

**Branch-uri Git:**

| Branch | Rol |
| --- | --- |
| `master` | Production |
| `staging` | Staging (deja creat în repo; push pe acest branch = deploy staging) |

**Domenii tipice:**

| Host | Mediu |
| --- | --- |
| `www.topdiabet.ro` / `topdiabet.ro` | Production |
| `staging.topdiabet.ro` | Staging |

---

## Alegere rapidă / Quick pick

| Dacă… | Folosește |
| --- | --- |
| Ai plan **Pro / Enterprise** și vrei Environment dedicat + env vars separate | **A** (+ opțional **C**) |
| Ești pe **Hobby** (sau nu vrei upgrade) | **B** (+ opțional **C**); **sari peste A** |
| Vrei ca push pe `master` să **nu** actualizeze imediat domeniul public | **C** (cu A sau B pentru staging) |

> **Custom Environment (A) nu poate fi finalizat pe Hobby** — necesită Pro/Enterprise. Pe Hobby folosește doar **B**.

---

## A) Custom Environment `staging` (Pro / Enterprise)

**EN:** Create a named Custom Environment with its own domain and env vars.  
**RO:** Environment Vercel dedicat, cu domain și variabile proprii.

### Pași Dashboard

1. Deschide proiectul Top Diabet pe [vercel.com](https://vercel.com).
2. **Project → Settings → Environments → Create Environment**.
3. Nume: exact `staging`.
4. **Branch Tracking** → potrivește / match branch-ul Git `staging`.
5. **Environment Variables**
   - Importă din Preview sau Production dacă e util, apoi ajustează valorile pentru staging.
   - Exemple de chei (valori reale doar în Dashboard, nu în git):
     - `NEXT_PUBLIC_SITE_URL=https://staging.topdiabet.ro`
     - `NEXT_PUBLIC_SITE_NAME=Top Diabet (Staging)`
6. **Domains** → adaugă `staging.topdiabet.ro` și asociază-l environment-ului `staging`.
7. Configurează DNS (vezi secțiunea [DNS](#dns-staging-subdomain) de mai jos).

### Deploy

- Push pe branch-ul `staging`, sau
- CLI (dacă ești autentificat local): `vercel deploy --environment=staging`

### Limitare plan

- **Necesită Pro / Enterprise.**
- Dacă ești pe **Hobby**: **nu** poți finaliza A — treci la **B**.

---

## B) Preview branch pentru staging (toate planurile, incl. Hobby)

**EN:** Long-lived Git branch `staging` + custom domain assigned to Preview for that branch.  
**RO:** Branch `staging` + domeniu legat de Preview pentru acel branch.

### Ce e deja făcut în Git

- Branch-ul long-lived `staging` există pe GitHub (bazat pe tip-ul `master` la momentul setup-ului).
- Actualizează-l când vrei staging fresh: merge / cherry-pick din `master` sau feature branches, apoi `git push origin staging`.

### Pași Dashboard

1. **Project → Settings → Domains** (sau Domains din project overview).
2. Adaugă domeniul: `staging.topdiabet.ro`.
3. Asignează-l la **Preview**.
4. Setează **Git Branch** = `staging` (domain-ul urmărește ultimul deployment Preview de pe acel branch).
5. (Opțional) **Settings → Environment Variables**
   - Adaugă variabile pe scope **Preview**, sau branch-specific Preview dacă UI-ul o permite.
   - Exemplu: `NEXT_PUBLIC_SITE_URL=https://staging.topdiabet.ro`
6. DNS: vezi [DNS](#dns-staging-subdomain).

### Deploy

- Orice `git push` pe `staging` creează un Preview deployment.
- `staging.topdiabet.ro` pointează la cel mai recent deployment valid de pe branch-ul `staging`.

### Note

- Funcționează pe **Hobby**, Pro și Enterprise.
- Env vars sunt din mediul **Preview** (nu un Custom Environment separat).
- Nu confunda cu Production: nu asigna `staging.topdiabet.ro` la Production.

---

## C) Staged production — promote manual (toate planurile)

**EN:** Production deploys from `master`, but custom production domains are assigned only after manual Promote.  
**RO:** Deploy din `master` fără a actualiza automat domeniul public; promovezi manual după verificare.

### Pași Dashboard

1. **Project → Settings → Environments → Production**.
2. **Branch Tracking**
   - Production branch rămâne: `master`.
   - **Disable / dezactivează** opțiunea de tip **Auto-assign Custom Production Domains** (denumirea exactă poate varia ușor în UI).
3. După un push / merge pe `master`:
   - Vercel creează un deployment Production.
   - Verifică pe **URL-ul generat** de Vercel (nu pe `www.topdiabet.ro` până promovezi).
4. Dacă totul e OK → **Promote** (manual) deployment-ul către domeniile de producție.

### Avertisment / Warning

- Deployment-ul folosește totuși **Environment Variables de Production**.
- Poate atinge **date / API-uri de producție** dacă aplicația e conectată la backend-uri reale.
- Staging-ul real (date de test) rămâne pe **A** sau **B**, nu pe C.

---

## DNS: staging subdomain

Adaugi **doar** un subdomeniu — **nu** schimba MX / email pentru `topdiabet.ro`.

### Record recomandat

În DNS-ul providerului pentru `topdiabet.ro`:

| Type | Name / Host | Value / Target |
| --- | --- | --- |
| `CNAME` | `staging` | valoarea afișată de Vercel (de regulă `cname.vercel-dns.com` sau target-ul din Domains) |

### Ce să **nu** atingi

- **MX** (email)
- **TXT** SPF / DKIM / DMARC
- Recordurile pentru `@` / `www` de producție (decât dacă le configurezi intenționat — vezi [`vercel-domain-setup.md`](./vercel-domain-setup.md))

### Verificare

```bash
dig +short CNAME staging.topdiabet.ro
curl -I https://staging.topdiabet.ro
```

În Vercel, domeniul trebuie să apară cu **Valid Configuration**.

---

## Flux Git recomandat

```text
feature branch ──PR──▶ staging ──(test pe staging.topdiabet.ro)──▶ master (production)
                         ▲
                         └── sau: feature ──PR──▶ master (cu C: verify + Promote)
```

1. Dezvoltare locală pe feature branch.
2. Merge / push pe `staging` → teste pe `staging.topdiabet.ro` (A sau B).
3. Merge pe `master` → production (cu sau fără Promote manual din C).

---

## Referințe

- Checklist click-uri: [`vercel-dashboard-checklist.md`](./vercel-dashboard-checklist.md)
- Domenii producție: [`vercel-domain-setup.md`](./vercel-domain-setup.md)
- Placeholders env: [`.env.example`](../.env.example) (fără secrete reale)
