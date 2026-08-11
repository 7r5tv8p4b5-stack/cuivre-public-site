import { defineConfig } from "astro/config";

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || "https://cuivre-public-site.pages.dev",
  output: "static",
});
