// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: process.env.GITHUB_BRANCH || process.env.HEAD || "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "images/uploads",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      // ─── ARTICLES / ACTUALITÉS ──────────────────────────────────────────────
      {
        name: "articles",
        label: "\u{1F4F0} Articles & Actualit\xE9s",
        path: "src/content/articles",
        format: "md",
        ui: {
          defaultItem: {
            date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
            publie: true
          }
        },
        fields: [
          {
            type: "string",
            name: "titre",
            label: "Titre de l'article",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "Description courte (pour les aper\xE7us)",
            required: true
          },
          {
            type: "datetime",
            name: "date",
            label: "Date de publication",
            required: true
          },
          {
            type: "image",
            name: "image",
            label: "Image principale"
          },
          {
            type: "string",
            name: "categorie",
            label: "Cat\xE9gorie",
            options: ["Actualit\xE9s", "Conseils optique", "Nouveaut\xE9s", "Promotions", "\xC9v\xE9nements"]
          },
          {
            type: "boolean",
            name: "publie",
            label: "Publi\xE9 (visible sur le site)"
          },
          {
            type: "rich-text",
            name: "body",
            label: "Contenu de l'article",
            isBody: true
          }
        ]
      },
      // ─── PARAMÈTRES CONTACT ─────────────────────────────────────────────────
      {
        name: "contact",
        label: "\u{1F4CD} Contact & Horaires",
        path: "src/data",
        format: "json",
        match: { include: "contact" },
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "nom", label: "Nom du magasin" },
          { type: "string", name: "tagline", label: "Slogan" },
          { type: "string", name: "adresse", label: "Adresse (rue)" },
          { type: "string", name: "ville", label: "Ville & code postal" },
          { type: "string", name: "telephone", label: "T\xE9l\xE9phone" },
          { type: "string", name: "email", label: "Email" },
          {
            type: "object",
            name: "horaires",
            label: "Horaires d'ouverture",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.jour }) },
            fields: [
              { type: "string", name: "jour", label: "Jour" },
              { type: "string", name: "heures", label: "Horaires (ex: 9h00 \u2013 19h00 ou Ferm\xE9)" },
              { type: "boolean", name: "ferme", label: "Ferm\xE9 ce jour" }
            ]
          },
          {
            type: "string",
            name: "avantages",
            label: "Badges d'avantages",
            list: true
          }
        ]
      },
      // ─── PAGE D'ACCUEIL ─────────────────────────────────────────────────────
      {
        name: "home",
        label: "\u{1F3E0} Page d'accueil",
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
            label: "Statistiques cl\xE9s",
            list: true,
            ui: { itemProps: (item) => ({ label: `${item?.valeur} \u2014 ${item?.label}` }) },
            fields: [
              { type: "string", name: "valeur", label: "Valeur (ex: 1000+)" },
              { type: "string", name: "label", label: "Libell\xE9" }
            ]
          },
          { type: "string", name: "histoire_titre", label: "Titre section Histoire" },
          { type: "string", name: "histoire_texte", label: "Texte section Histoire", ui: { component: "textarea" } },
          {
            type: "object",
            name: "timeline",
            label: "Frise chronologique",
            list: true,
            ui: { itemProps: (item) => ({ label: `${item?.annee} \u2014 ${item?.titre}` }) },
            fields: [
              { type: "string", name: "annee", label: "Ann\xE9e" },
              { type: "string", name: "titre", label: "Titre" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
            ]
          }
        ]
      },
      // ─── ÉQUIPE ─────────────────────────────────────────────────────────────
      {
        name: "equipe",
        label: "\u{1F465} L'\xC9quipe",
        path: "src/data",
        format: "json",
        match: { include: "equipe" },
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "object",
            name: "membres",
            label: "Membres de l'\xE9quipe",
            list: true,
            ui: { itemProps: (item) => ({ label: `${item?.nom} \u2014 ${item?.role}` }) },
            fields: [
              { type: "string", name: "nom", label: "Pr\xE9nom" },
              { type: "string", name: "role", label: "R\xF4le / Titre" },
              { type: "string", name: "expertise", label: "Description courte" },
              { type: "image", name: "photo", label: "Photo" }
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
