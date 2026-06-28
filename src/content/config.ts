import { defineCollection, z } from 'astro:content';

// Categories used across the blog. Keep this list in sync with
// public/admin/config.yml (the visual editor) and the Sidebar nav.
export const CATEGORIES = [
  'Finance',
  'Economy',
  'Technology',
  'Energy',
  'Sports',
  'Literature',
] as const;

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(CATEGORIES),
    pubDate: z.coerce.date(),
    // Cover is stored as a public path (e.g. /images/uploads/foo.jpg) or a full
    // URL. Stored as a string so CMS-uploaded images "just work".
    cover: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    stack: z.array(z.string()).default([]),
    link: z.string().url().optional(),
    cover: z.string().optional(),
    pubDate: z.coerce.date(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, projects };
