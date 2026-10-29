// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";

// WuppyCMS "With AI" starter — Astro + Tailwind 4 only.
// No custom component CSS: the page is built with utilities and @theme tokens.
export default defineConfig({
	site: "https://wuppy-fuatcangnc-motosiklet-projesi-15tol.pages.dev",
	integrations: [mdx()],
	vite: { plugins: [tailwindcss()] },
});
