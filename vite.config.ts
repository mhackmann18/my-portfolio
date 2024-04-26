/// <reference types="vitest" />
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    rollupOptions: {
      input: ["index.html", "projects.html"],
    },
  },
  plugins: [dts()],
});
