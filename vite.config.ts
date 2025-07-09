import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { crx } from "@crxjs/vite-plugin";
import manifest from "./manifest.json";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), crx({ manifest })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
