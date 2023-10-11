import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://qerope.dev',
  integrations: [tailwind()],
  integrations: [tailwind(), sitemap({ filter: (page) => !page.includes('/drafts/') })],
});
