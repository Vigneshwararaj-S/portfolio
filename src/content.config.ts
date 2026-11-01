import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    // Short name for the big list on the home page.
    short: z.string(),
    kind: z.string(),
    year: z.string(),
    order: z.number(),
    summary: z.string(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    imageFit: z.enum(['cover', 'contain']).default('cover'),
    // Eye-catching card image for lists. The page keeps `image`, which may be a diagram.
    tile: z.string().optional(),
    tileAlt: z.string().optional(),
    tileCharm: z.boolean().default(false),
    results: z.array(z.object({ figure: z.string(), text: z.string() })).default([]),
    stack: z.array(z.string()).default([]),
    repo: z.string().url().optional(),
  }),
});

const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    // Slug of the project this entry belongs to.
    project: z.string(),
    summary: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, journal };
