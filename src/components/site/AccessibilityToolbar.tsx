import { useState, useEffect } from "react";
import { Accessibility, ZoomIn, ZoomOut, Sun, Moon, RotateCcw } from "lucide-react";

export const AccessibilityToolbar = () => {
  const [open, setOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add("high-contrast");
    } else {
      document.documentElement.classList.remove("high-contrast");
    }
  }, [highContrast]);

  const reset = () => { setFontSize(100); setHighContrast(false); };

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end">
      {/* Toggle tab */}
      <button
        onClick={() => setOpen(o => !o)}
        className="bg-civic-blue text-white px-2 py-3 rounded-l-xl shadow-lg flex flex-col items-center gap-1 hover:bg-civic-blue/90 transition-colors sm:block"
        aria-label="Accessibility options"
        title="Accessibility"
      >
        <Accessibility className="h-4 w-4" />
        <span className="text-[9px] font-bold uppercase tracking-wide [writing-mode:vertical-rl] rotate-180">A11Y</span>
      </button>

      {/* Panel */}
      {open && (
        <div className="absolute right-10 bottom-0 sm:bottom-auto bg-white border border-border rounded-2xl shadow-2xl p-4 w-52 flex flex-col gap-3">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Accessibility</p>

          {/* Font size */}
          <div>
            <p className="text-xs font-semibold text-civic-ink mb-2">Text Size ({fontSize}%)</p>
            <div className="flex items-center gap-2">
              <button onClick={() => setFontSize(f => Math.max(80, f - 10))}
                className="flex-1 flex items-center justify-center gap-1 border border-border rounded-lg py-1.5 text-xs font-bold hover:bg-muted transition-colors">
                <ZoomOut className="h-3.5 w-3.5" /> A-
              </button>
              <button onClick={() => setFontSize(f => Math.min(150, f + 10))}
                className="flex-1 flex items-center justify-center gap-1 border border-border rounded-lg py-1.5 text-xs font-bold hover:bg-muted transition-colors">
                <ZoomIn className="h-3.5 w-3.5" /> A+
              </button>
            </div>
          </div>

          {/* High contrast */}
          <div>
            <p className="text-xs font-semibold text-civic-ink mb-2">Contrast</p>
            <button onClick={() => setHighContrast(h => !h)}
              className={`w-full flex items-center justify-center gap-2 border rounded-lg py-1.5 text-xs font-bold transition-colors ${highContrast ? "bg-civic-ink text-white border-civic-ink" : "border-border hover:bg-muted"}`}>
              {highContrast ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
              {highContrast ? "Normal Contrast" : "High Contrast"}
            </button>
          </div>

          {/* Reset */}
          <button onClick={reset}
            className="w-full flex items-center justify-center gap-2 border border-dashed border-border rounded-lg py-1.5 text-xs font-bold text-muted-foreground hover:text-civic-red hover:border-civic-red transition-colors">
            <RotateCcw className="h-3.5 w-3.5" /> Reset All
          </button>
        </div>
      )}
    </div>
  );
};
