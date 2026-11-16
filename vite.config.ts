import { sentryVitePlugin } from "@sentry/bundler-plugins/vite";
import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "aldmiropassagem",
    project: "aldmiro-website"
  })],

  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },

  build: {
    sourcemap: true
  }
});
