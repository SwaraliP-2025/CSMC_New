import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/devanagari-fonts.css";
import "./index.css";

const rootEl = document.getElementById("root")!;

async function boot() {
  const loads = ["400", "500", "600", "700"].map((w) =>
    document.fonts.load(`${w} 16px "Noto Sans Devanagari"`).catch(() => undefined),
  );
  await Promise.all([...loads, document.fonts.ready]);
  createRoot(rootEl).render(<App />);
}

boot();
