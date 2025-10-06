// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    expressiveCode({
      themes: ["nord", "nord"],
      styleOverrides: {
        frames: {
          frameBoxShadowCssValue: "none",
        },
      },
    }),
    mdx(),
  ],
  markdown: {},
  vite: {
    // @ts-ignore
    plugins: [tailwindcss()],
  },
  server: {
    port: 4321,
  },
});
