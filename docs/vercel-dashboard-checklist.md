# Vercel Dashboard checklist — Top Diabet

Bifează pe măsură ce configurezi în [Vercel](https://vercel.com).  
Agentul **nu** poate face aceste click-uri (fără token Vercel în acest mediu).

## Pregătire

- [ ] Proiectul Top Diabet e conectat la repo-ul GitHub `cristianschiopu84/top-diabet`
- [ ] Branch-ul Git `staging` există pe GitHub (creat din setup)
- [ ] Știi planul Vercel: **Hobby** → doar B (+C) · **Pro/Enterprise** → A și/sau B (+C)

---

## A) Custom Environment `staging` (doar Pro / Enterprise)

- [ ] Settings → Environments → Create Environment → nume `staging`
- [ ] Branch Tracking → match `staging`
- [ ] Env vars pe `staging` (import Preview/Production + ajustare; **fără** commit în git)
- [ ] Domain `staging.topdiabet.ro` asignat la environment `staging`
- [ ] DNS: CNAME `staging` → target Vercel
- [ ] Test: push pe `staging` sau `vercel deploy --environment=staging`
- [ ] Confirmă că `https://staging.topdiabet.ro` răspunde

> Dacă ești pe Hobby: **sari peste A** și continuă cu B.

---

## B) Preview branch staging (toate planurile)

- [ ] Settings → Domains → Add `staging.topdiabet.ro`
- [ ] Assign to **Preview**
- [ ] Git Branch = `staging`
- [ ] (Opțional) Preview / branch env vars, ex. `NEXT_PUBLIC_SITE_URL=https://staging.topdiabet.ro`
- [ ] DNS: CNAME `staging` → target Vercel (dacă nu e deja din A)
- [ ] Test: `git push origin staging` → Preview deployment nou
- [ ] Confirmă că domeniul urmărește ultimul deploy de pe `staging`

---

## C) Staged production — promote manual (toate planurile)

- [ ] Settings → Environments → Production
- [ ] Production branch = `master`
- [ ] **Disable** Auto-assign Custom Production Domains
- [ ] Merge / push pe `master` → deschide URL-ul generat Vercel (nu domeniul public încă)
- [ ] Verifică site-ul pe URL-ul generat
- [ ] Promote manual când e OK
- [ ] Confirmă că `www.topdiabet.ro` / `topdiabet.ro` arată versiunea promovată

### Atenție

- [ ] Înțeleg că C folosește **Production env vars** și poate atinge date de producție

---

## DNS / email safety

- [ ] Am adăugat doar CNAME pentru `staging` (subdomain)
- [ ] Nu am modificat MX / SPF / DKIM / DMARC pentru `topdiabet.ro`
- [ ] Producție `@` / `www` rămân configurate cum trebuie (vezi `vercel-domain-setup.md`)

---

## Done

- [ ] Staging vizibil pe `https://staging.topdiabet.ro`
- [ ] Producție controlată (auto sau Promote manual) pe `https://www.topdiabet.ro`
