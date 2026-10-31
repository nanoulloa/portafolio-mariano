import { createContext, useContext, useEffect, useMemo, useState } from "react";
import en from "./en";
import es, { type Messages } from "./es";

export type Lang = "es" | "en";

const dictionaries: Record<Lang, Messages> = { es, en };
const STORAGE_KEY = "lang";

type LanguageContextValue = {
  lang: Lang;
  t: Messages;
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "en" ? "en" : "es";
  } catch {
    return "es";
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang);
  const t = dictionaries[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.Meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.Meta.description);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      return;
    }
  }, [lang, t]);

  const value = useMemo(
    () => ({ lang, t, toggleLang: () => setLang((current) => (current === "es" ? "en" : "es")) }),
    [lang, t],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return context;
}
