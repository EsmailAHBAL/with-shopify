import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";

import svelte from "@astrojs/svelte";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), svelte(), react()]
});