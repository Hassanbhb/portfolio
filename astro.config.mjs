// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  site: "https://www.hassanbhb.com",
  integrations: [alpinejs({ entrypoint: '/src/entrypoint' })],

  vite: {
    plugins: [tailwindcss()]
  },

  experimental: {
    fonts: [{
      provider: fontProviders.google(),
      name: "Noto Sans",
      cssVariable: '--font-sora'
    }]
  }
});