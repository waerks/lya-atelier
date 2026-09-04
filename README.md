# LYA ATELIER

Site Next.js 14 / App Router / TypeScript / Tailwind CSS pour un studio d’architecture intérieure fictif basé à Paris.

## Lancement

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:3000. Le projet est prêt pour Vercel.

## Sanity

Les données de démonstration sont dans `lib/projects.ts` et suivent exactement la structure du schéma `sanity/schemas/project.ts`. Créer un projet sur sanity.io, installer `next-sanity` et `sanity`, renseigner `NEXT_PUBLIC_SANITY_PROJECT_ID` / `NEXT_PUBLIC_SANITY_DATASET`, puis remplacer `getProjects` et `getProject` par des fetch GROQ sur les champs du schéma. Le site peut donc être maquetté et parcouru sans compte cloud.

## Contact

`POST /api/contact` valide nom/email/message et journalise la demande en mode local. Pour un vrai envoi, connecter Resend ou Nodemailer et renseigner les variables de `.env.example`.

## Structure

- `app/` : un seul dossier plat, sans route group
- `components/` : Header, Footer, titres, listes et cartes
- `lib/projects.ts` : source locale typée
- `sanity/schemas/project.ts` : schéma CMS documenté
