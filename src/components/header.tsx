import { useEffect, useState } from "react";
import { useActiveSection } from "@/hooks/use-active-section";
import { useLanguage } from "@/i18n/language-provider";
import { cn } from "@/lib/cn";
import { sections } from "@/lib/site";
import LanguageSwitch from "./language-switch";
import Logo from "./logo";

export default function Header() {
  const { t } = useLanguage();
  const active = useActiveSection(sections);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b bg-espresso text-cream transition-colors duration-300",
        scrolled || open ? "border-cream/10" : "border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <a href="#inicio" aria-label={t.Nav.home} className="group flex items-center gap-3">
          <Logo className="size-9 transition-transform duration-500 group-hover:rotate-[24deg]" />
          <span className="hidden text-lg font-bold tracking-tight whitespace-nowrap min-[360px]:inline">Mariano Ulloa</span>
        </a>

        <nav aria-label={t.Nav.label} className="hidden md:block">
          <ul className="flex items-center gap-7">
            {sections.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? "location" : undefined}
                  className={cn(
                    "link-grow py-1 text-sm transition-opacity duration-300",
                    active === id ? "opacity-100" : "opacity-65 hover:opacity-100",
                  )}
                >
                  {t.Nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-5">
          <LanguageSwitch />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.Nav.closeMenu : t.Nav.openMenu}
            className="link-grow py-1 text-sm font-medium md:hidden"
          >
            {open ? t.Projects.close : t.Nav.menu}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        inert={!open}
        className={cn(
          "fixed inset-x-0 top-16 bottom-0 bg-espresso px-5 transition-opacity duration-300 md:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        {open && (
          <nav aria-label={t.Nav.label}>
            <ul className="mt-10 space-y-3">
              {sections.map((id, index) => (
                <li key={id} className="fade-in" style={{ "--delay": `${index * 60}ms` } as React.CSSProperties}>
                  <a
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    aria-current={active === id ? "location" : undefined}
                    className={cn("block text-4xl font-bold tracking-tight", active === id ? "text-sand" : "text-cream")}
                  >
                    {t.Nav[id]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
