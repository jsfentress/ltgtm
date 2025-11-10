import { defineCollection, z } from 'astro:content';

const sections = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    order: z.number(),
    animation: z.enum(['fade', 'slide-up', 'parallax', 'none']).default('fade'),
    cta: z.object({
      text: z.string(),
      type: z.enum(['form', 'external', 'scroll']),
      href: z.string().optional(),
    }).optional(),
    media: z.object({
      src: z.string(),
      alt: z.string(),
      position: z.enum(['top', 'side', 'bg']).default('side'),
    }).optional(),
  }),
});

export const collections = { sections };

