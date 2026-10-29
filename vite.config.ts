import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { execFileSync } from "child_process";
import path from "path";
import { componentTagger } from "lovable-tagger";

const lastSiteUpdate = execFileSync(
  "git",
  ["log", "-1", "--format=%cs", "HEAD", "--", "src", "public", "index.html"],
  { cwd: __dirname, encoding: "utf8" },
).trim();

if (!/^\d{4}-\d{2}-\d{2}$/.test(lastSiteUpdate)) {
  throw new Error("Could not determine the last site update date from Git history.");
}

const [year, month, day] = lastSiteUpdate.split("-");
const lastSiteUpdateDisplay = `${day}-${month}-${year}`;

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/CSMC_New/", // GitHub repo name
  define: {
    "import.meta.env.VITE_LAST_SITE_UPDATE": JSON.stringify(lastSiteUpdateDisplay),
  },
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
