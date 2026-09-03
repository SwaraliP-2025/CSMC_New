import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from "react";

const STORAGE_KEY = "csmc-colorblind";

type Ctx = {
  enabled: boolean;
  setEnabled: (on: boolean) => void;
  toggle: () => void;
};

const ColorBlindContext = createContext<Ctx | undefined>(undefined);

function applyDom(enabled: boolean) {
  document.documentElement.classList.toggle("colorblind-friendly", enabled);
  document.documentElement.setAttribute("data-colorblind", enabled ? "on" : "off");
}

export const ColorBlindProvider = ({ children }: { children: ReactNode }) => {
  const [enabled, setEnabledState] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem(STORAGE_KEY) === "1";
  });

  const setEnabled = useCallback((on: boolean) => {
    setEnabledState(on);
    localStorage.setItem(STORAGE_KEY, on ? "1" : "0");
    applyDom(on);
  }, []);

  const toggle = useCallback(() => {
    setEnabled(!enabled);
  }, [enabled, setEnabled]);

  useEffect(() => {
    applyDom(enabled);
  }, [enabled]);

  return (
    <ColorBlindContext.Provider value={{ enabled, setEnabled, toggle }}>
      {children}
    </ColorBlindContext.Provider>
  );
};

export const useColorBlind = () => {
  const ctx = useContext(ColorBlindContext);
  if (!ctx) throw new Error("useColorBlind must be used inside ColorBlindProvider");
  return ctx;
};
