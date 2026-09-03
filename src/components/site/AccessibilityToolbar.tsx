import { useState, useEffect } from "react";
import { Accessibility, ZoomIn, ZoomOut, RotateCcw, Contrast } from "lucide-react";
import { useColorBlind } from "@/i18n/ColorBlindContext";
import { useLang } from "@/i18n/LanguageContext";

export const AccessibilityToolbar = () => {
  const [open, setOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const { enabled: colorBlind, toggle: toggleColorBlind, setEnabled } = useColorBlind();
  const { lang } = useLang();
  const en = lang === "en";

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  const reset = () => {
    setFontSize(100);
    setEnabled(false);
  };

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end">
      <button
        onClick={() => setOpen((o) => !o)}
        className="bg-civic-blue text-white px-2 py-3 rounded-l-xl shadow-lg flex flex-col items-center gap-1 hover:bg-civic-blue/90 transition-colors sm:block"
        aria-label="Accessibility options"
        title="Accessibility"
      >
        <Accessibility className="h-4 w-4" />
        <span className="text-[9px] font-bold uppercase tracking-wide [writing-mode:vertical-rl] rotate-180">
          A11Y
        </span>
      </button>

      {open && (
        <div className="absolute right-10 bottom-0 sm:bottom-auto bg-white border border-border rounded-2xl shadow-2xl p-4 w-52 flex flex-col gap-3">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            {en ? "Accessibility" : "सुलभता"}
          </p>

          <div>
            <p className="text-xs font-semibold text-civic-ink mb-2">
              {en ? `Text Size (${fontSize}%)` : `अक्षर आकार (${fontSize}%)`}
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setFontSize((f) => Math.max(80, f - 10))}
                className="flex-1 flex items-center justify-center gap-1 border border-border rounded-lg py-1.5 text-xs font-bold hover:bg-muted transition-colors"
              >
                <ZoomOut className="h-3.5 w-3.5" /> A-
              </button>
              <button
                onClick={() => setFontSize((f) => Math.min(150, f + 10))}
                className="flex-1 flex items-center justify-center gap-1 border border-border rounded-lg py-1.5 text-xs font-bold hover:bg-muted transition-colors"
              >
                <ZoomIn className="h-3.5 w-3.5" /> A+
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={toggleColorBlind}
            aria-pressed={colorBlind}
            className={`w-full flex items-center justify-center gap-2 rounded-lg py-1.5 text-xs font-bold border transition-colors ${
              colorBlind
                ? "bg-civic-blue text-white border-civic-blue"
                : "border-border hover:bg-muted text-civic-ink"
            }`}
          >
            <Contrast className="h-3.5 w-3.5" />
            {en
              ? colorBlind
                ? "Color-blind mode: ON"
                : "Color-blind friendly"
              : colorBlind
                ? "रंगांधळे मोड: सुरू"
                : "रंगांधळेपणा-अनुकूल"}
          </button>

          <button
            onClick={reset}
            className="w-full flex items-center justify-center gap-2 border border-dashed border-border rounded-lg py-1.5 text-xs font-bold text-muted-foreground hover:text-civic-red hover:border-civic-red transition-colors"
          >
            <RotateCcw className="h-3.5 w-3.5" /> {en ? "Reset All" : "सर्व रीसेट"}
          </button>
        </div>
      )}
    </div>
  );
};
