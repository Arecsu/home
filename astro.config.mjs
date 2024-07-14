import { defineConfig } from 'astro/config';
// import alpinejs from "@astrojs/alpinejs";

import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://astro.build/config
export default defineConfig({

  // integrations: [alpinejs()],
  site: 'https://arecsu.github.io',
  base: import.meta.env.DEV ? "." : "/www/",

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },

  vite: {
    resolve: {
      alias: {
        '@/': `${path.resolve(__dirname, 'src')}/`
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/styles/vars.scss";`
        }
      }
    }
  }
})
