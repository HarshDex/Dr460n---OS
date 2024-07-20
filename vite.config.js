import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { minify } from "terser";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "custom-terser",
      transformIndexHtml(html) {
        return html.replace(
          /<script type="module" crossorigin src="\/@vite\/app"><\/script>/,
          `<script type="module" crossorigin src="/@vite/app" defer></script>`
        );
      },
      async writeBundle(options, bundle) {
        for (const fileName in bundle) {
          if (bundle[fileName].isEntry && bundle[fileName].type === "chunk") {
            const code = bundle[fileName].code;
            const result = await minify(code, {
              compress: true,
              mangle: true,
              ecma: 2020,
            });
            if (result.code) {
              bundle[fileName].code = result.code;
            }
          }
        }
      },
    },
  ],
});
