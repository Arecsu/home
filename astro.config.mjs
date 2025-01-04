import { defineConfig } from "astro/config";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import mdx from "@astrojs/mdx";
import Icons from "unplugin-icons/vite";
import svelte from "@astrojs/svelte";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const findSubsetFonts = () => {
  const subsetDir = path.resolve(__dirname, "public/inter-4.0/subset");
  const files = fs.readdirSync(subsetDir);

  // Find normal variant (doesn't contain "Italic" in name)
  const normalFont = files.find((file) =>
    file.match(/InterVariable-[^Italic].*-subset\.woff2$/)
  );

  // Find italic variant
  const italicFont = files.find((file) =>
    file.match(/InterVariable-Italic-.*-subset\.woff2$/)
  );

  return {
    normal: normalFont ? `/inter-4.0/subset/${normalFont}` : null,
    italic: italicFont ? `/inter-4.0/subset/${italicFont}` : null,
  };
};

const fonts = findSubsetFonts();

export default defineConfig({
  site: "https://malejandro.com",
  base: import.meta.env.DEV ? "" : "",
  trailingSlash: "ignore",
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "load",
  },
  vite: {
    resolve: {
      alias: {
        "@/": `${path.resolve(__dirname, "src")}/`,
        "@InterVariable-Subset": fonts.normal,
        "@InterVariable-Italic-Subset": fonts.italic,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
          additionalData: `@use "@styles/vars" as *;`,
        },
      },
    },
    plugins: [
      Icons({
        compiler: "astro",
        autoInstall: true,
      }),
    ],
  },
  integrations: [mdx(), svelte()],
});
