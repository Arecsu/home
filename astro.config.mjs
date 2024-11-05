import { defineConfig } from 'astro/config';

import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import mdx from "@astrojs/mdx";
import Icons from 'unplugin-icons/vite'
import svelte from '@astrojs/svelte';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// https://astro.build/config
export default defineConfig({
  // integrations: [alpinejs()],
  site: 'https://malejandro.com',
  // base: import.meta.env.DEV ? "" : "/www/",
  base: import.meta.env.DEV ? "" : "",
  trailingSlash: 'ignore',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'load'
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
          api: 'modern-compiler', // or "modern"
          // additionalData: `@import "@/styles/vars.scss";` // deprecated
          additionalData: `@use "@styles/vars" as *;`
        }
      }
    },
    plugins: [
      Icons({
        compiler: 'astro',
        autoInstall: true, // experimental
      }),
    ],
  },
  // integrations: [mdx(), svelte()]
  integrations: [mdx()]
});