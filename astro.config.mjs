// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://leadtimetgtm.com', // Update with your actual domain
  integrations: [sitemap(), mdx()],
  vite: {
    plugins: [tailwindcss()]
  }
});