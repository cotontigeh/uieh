// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

import expressiveCode from "astro-expressive-code";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    expressiveCode({
      themes: ["nord", "nord"],
      plugins: [pluginLineNumbers()],
      defaultProps: {
        showLineNumbers: false,
        preserveIndent: true,
      },
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
    // @ts-ignore can`t get correct type
    plugins: [tailwindcss()],
  },
  server: {
    port: 4321,
  },
});
