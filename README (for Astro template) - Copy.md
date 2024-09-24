# Harry Lang

## Config for prod

For the sitemap to work, define your URL in `astro.config.mjs`

```js
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // ...
  site: "https://stargazers.club",
  integrations: [sitemap()],
});
```

# Adding blog posts

Add markdown files similar to the ones in [blog/\*.md](src/pages/blog/), they need to have the following format:

```yaml
---
layout: ../../layout/MarkdownLayout.astro
title: My markdown capabilities
description: "This is everything I know about markdown"
pubDate: 2022-07-15
tags: ["astro", "learning in public", "setbacks", "community"]
---
```

