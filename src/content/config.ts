import { defineCollection, z } from 'astro:content';

const sections = defineCollection({
  schema: z.object({
    title: z.string().optional(),
    subtitle: z.string().optional(),
    label: z.string().optional(),
    order: z.number(),
    inverted: z.boolean().optional(),
    maxWidth: z.string().optional(),
    border: z.boolean().optional(),
    animation: z.enum(['fade', 'slide-up', 'parallax', 'none']).optional(),
    checkmarks: z.array(z.object({
      icon: z.enum(['check', 'clock', 'chat']),
      text: z.string(),
    })).optional(),
    cta: z.object({
      text: z.string(),
      type: z.enum(['form', 'external', 'scroll']),
      href: z.string().optional(),
    }).optional(),
    media: z.object({
      src: z.string(),
      alt: z.string(),
      position: z.enum(['top', 'side', 'bg']),
    }).optional(),
  }),
});

export const collections = {
  sections,
};
