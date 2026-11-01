// @ts-check
import { defineConfig } from 'astro/config';

// Published by GitHub Pages at this custom domain, so the site lives at the root with no base path.
export default defineConfig({
  site: 'https://vigneshwararaj.raidder.xyz',
  trailingSlash: 'ignore',
});
