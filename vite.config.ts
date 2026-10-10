import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/CSMC_New/", // GitHub repo name
  // The filtered release build copies an approved subset after Vite finishes.
  publicDir: process.env.CSMC_FILTER_PUBLIC === "1" ? false : "public",
  server: {
    host: "::",
    port: 8080,
    watch: {
      usePolling: true,
      interval: 300,
    },
    hmr: {
      overlay: true,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
