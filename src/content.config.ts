/**
 * Content collections (Astro 7).
 *
 * Posts are real Markdown files under `src/content/blog/`, loaded with the
 * `glob` loader so the file name becomes the entry id — which is also the
 * URL slug used by `src/pages/blog/[slug].astro`.
 */
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.string(),
    author: z.string(),
    /** Path under `public/` — e.g. `/images/post-1.jpg`. */
    image: z.string(),
    imageAlt: z.string().optional(),
    tags: z.array(z.string()).default([]),
    /** Optional author card details shown at the foot of a post. */
    authorImage: z.string().optional(),
    authorRole: z.string().optional(),
    authorBio: z.string().optional(),
    readingTime: z.string().optional(),
  }),
});

export const collections = { blog };
