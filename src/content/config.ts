import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    titre: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    image: z.string().optional(),
    categorie: z.string().optional(),
    publie: z.boolean().default(true),
  }),
});

export const collections = { articles };
