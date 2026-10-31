import { useLanguage } from "@/i18n/language-provider";
import { cn } from "@/lib/cn";

export default function LanguageSwitch() {
  const { lang, t, toggleLang } = useLanguage();
  const isEnglish = lang === "en";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isEnglish}
      aria-label={t.Language.label}
      onClick={toggleLang}
      className="relative flex shrink-0 items-center rounded-full border border-cream/25 p-0.5 text-xs font-medium tracking-wide transition-colors hover:border-cream/50"
    >
      <span
        aria-hidden="true"
        className={cn(
          "absolute inset-y-0.5 left-0.5 w-9 rounded-full bg-cream transition-transform duration-300 ease-out",
          isEnglish && "translate-x-9",
        )}
      />
      <span
        aria-hidden="true"
        className={cn("relative w-9 py-1 text-center transition-colors duration-300", isEnglish ? "text-cream/60" : "text-espresso")}
      >
        ES
      </span>
      <span
        aria-hidden="true"
        className={cn("relative w-9 py-1 text-center transition-colors duration-300", isEnglish ? "text-espresso" : "text-cream/60")}
      >
        EN
      </span>
    </button>
  );
}
