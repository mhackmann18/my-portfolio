/// <reference types="vitest" />
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    rollupOptions: {
      input: [
        "index.html",
        "projects.html",
        "src/assets/Matthew_Hackmann_Resume.pdf",
        "src/header.ts",
      ],
    },
  },
  plugins: [dts()],
});
