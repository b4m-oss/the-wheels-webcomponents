import { defineConfig } from "vite";
import vituum from "vituum";
import nunjucks from "@vituum/vite-plugin-nunjucks";

export default defineConfig({
  plugins: [
    vituum({
      imports: {
        filenamePattern: {
          "+.css": [],
          "+.scss": "src/styles",
        },
      },
    }),
    nunjucks({
      root: "./src",
    }),
  ],
  build: {
    rollupOptions: {
      input: ["./src/pages/**/*.njk"],
    },
  },
});
