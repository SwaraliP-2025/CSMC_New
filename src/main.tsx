import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ensureDevanagariFonts } from "./fonts/devanagari.ts";
import "./styles/devanagari-fonts.css";
import "./index.css";

const rootEl = document.getElementById("root")!;

async function boot() {
  await ensureDevanagariFonts();
  createRoot(rootEl).render(<App />);
}

boot();
