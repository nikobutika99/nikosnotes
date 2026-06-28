// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Update `site` to your Netlify URL (or custom domain) before deploying.
  site: 'https://velvety-tartufo-c82085.netlify.app',
  integrations: [tailwind({ applyBaseStyles: false })],
  devToolbar: { enabled: false },
  server: {
    // CLAUDE.md screenshot workflow expects localhost:3000
    port: 3000,
    host: true,
  },
});
