import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import netlify from "@astrojs/netlify/functions";

export default defineConfig({
  output: "server",
  integrations: [preact()],
  adapter: netlify(),
});
