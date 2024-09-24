import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  // TODO: Change this in production
  site: "http://harrylang100.github.io",
  integrations: [tailwind(), sitemap(), prefetch({ throttle: 3 })],
});
