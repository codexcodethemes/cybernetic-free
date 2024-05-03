import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import CompressionPlugin from "vite-plugin-compression";
// https://astro.build/config
export default defineConfig({
    integrations: [react()],
    renderers: ["@astrojs/renderer-react"],
    prerender: true,
    vite: {
        plugins: [CompressionPlugin()],
    },
    buildOptions: {
        minify: true,
    },
});
