// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import markdownIntegration from "@astropub/md";

// https://astro.build/config
export default defineConfig({
  integrations: [markdownIntegration()],
  vite: {
    plugins: [tailwindcss(), mdx()],
  },
});
