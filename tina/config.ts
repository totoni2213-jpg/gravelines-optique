import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.GITHUB_BRANCH || process.env.HEAD || "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "images/uploads",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [

      // ─── ARTICLES / ACTUALITÉS ──────────────────────────────────────────────
      {
        name: "articles",
        label: "📰 Articles & Actualités",
        path: "src/content/articles",
        format: "md",
        ui: {
          defaultItem: {
            date: new Date().toISOString().split("T")[0],
            publie: true,
          },
        },
        fields: [
          {
            type: "string",
            name: "titre",
            label: "Titre de l'article",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description courte (pour les aperçus)",
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date de publication",
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Image principale",
          },
          {
            type: "string",
            name: "categorie",
            label: "Catégorie",
            options: ["Actualités", "Conseils optique", "Nouveautés", "Promotions", "Événements"],
          },
          {
            type: "boolean",
            name: "publie",
            label: "Publié (visible sur le site)",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Contenu de l'article",
            isBody: true,
          },
        ],
      },

      // ─── PARAMÈTRES CONTACT ─────────────────────────────────────────────────
      {
        name: "contact",
        label: "📍 Contact & Horaires",
        path: "src/data",
        format: "json",
        match: { include: "contact" },
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "nom", label: "Nom du magasin" },
          { type: "string", name: "tagline", label: "Slogan" },
          { type: "string", name: "adresse", label: "Adresse (rue)" },
          { type: "string", name: "ville", label: "Ville & code postal" },
          { type: "string", name: "telephone", label: "Téléphone" },
          { type: "string", name: "email", label: "Email" },
          {
            type: "object",
            name: "horaires",
            label: "Horaires d'ouverture",
            list: true,
            ui: { itemProps: (item: any) => ({ label: item?.jour }) },
            fields: [
              { type: "string", name: "jour", label: "Jour" },
              { type: "string", name: "heures", label: "Horaires (ex: 9h00 – 19h00 ou Fermé)" },
              { type: "boolean", name: "ferme", label: "Fermé ce jour" },
            ],
          },
          {
            type: "string",
            name: "avantages",
            label: "Badges d'avantages",
            list: true,
          },
        ],
      },

      // ─── PAGE D'ACCUEIL ─────────────────────────────────────────────────────
      {
        name: "home",
        label: "🏠 Page d'accueil",
        path: "src/data",
        format: "json",
        match: { include: "home" },
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "hero_titre", label: "Titre principal" },
          { type: "string", name: "hero_sous_titre", label: "Sous-titre", ui: { component: "textarea" } },
          { type: "string", name: "hero_badge", label: "Badge d'accroche" },
          {
            type: "object",
            name: "stats",
            label: "Statistiques clés",
            list: true,
            ui: { itemProps: (item: any) => ({ label: `${item?.valeur} — ${item?.label}` }) },
            fields: [
              { type: "string", name: "valeur", label: "Valeur (ex: 1000+)" },
              { type: "string", name: "label", label: "Libellé" },
            ],
          },
          { type: "string", name: "histoire_titre", label: "Titre section Histoire" },
          { type: "string", name: "histoire_texte", label: "Texte section Histoire", ui: { component: "textarea" } },
          {
            type: "object",
            name: "timeline",
            label: "Frise chronologique",
            list: true,
            ui: { itemProps: (item: any) => ({ label: `${item?.annee} — ${item?.titre}` }) },
            fields: [
              { type: "string", name: "annee", label: "Année" },
              { type: "string", name: "titre", label: "Titre" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
            ],
          },
        ],
      },

      // ─── ÉQUIPE ─────────────────────────────────────────────────────────────
      {
        name: "equipe",
        label: "👥 L'Équipe",
        path: "src/data",
        format: "json",
        match: { include: "equipe" },
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "object",
            name: "membres",
            label: "Membres de l'équipe",
            list: true,
            ui: { itemProps: (item: any) => ({ label: `${item?.nom} — ${item?.role}` }) },
            fields: [
              { type: "string", name: "nom", label: "Prénom" },
              { type: "string", name: "role", label: "Rôle / Titre" },
              { type: "string", name: "expertise", label: "Description courte" },
              { type: "image", name: "photo", label: "Photo" },
            ],
          },
        ],
      },

    ],
  },
});
