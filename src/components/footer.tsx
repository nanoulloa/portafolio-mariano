import { ArrowUp, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/i18n/language-provider";
import { sections, site } from "@/lib/site";
import Logo from "./logo";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const socials = [
    { name: "GitHub", href: site.github },
    { name: "LinkedIn", href: site.linkedin },
    { name: "WhatsApp", href: `https://wa.me/${site.whatsapp}` },
    { name: "Email", href: `mailto:${site.email}` },
  ];

  return (
    <footer className="border-t border-cream/10 px-5 pt-20 pb-40 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <a href="#inicio" aria-label={t.Nav.home} className="group inline-flex items-center gap-4">
              <Logo className="size-14 transition-transform duration-500 group-hover:rotate-[24deg]" />
              <span className="text-2xl font-bold tracking-tight">Mariano Ulloa</span>
            </a>
            <p className="mt-6 max-w-sm leading-relaxed text-cream/60">{t.Footer.tagline}</p>
          </div>

          <nav aria-label={t.Footer.navTitle} className="md:col-span-3">
            <h2 className="text-xs font-medium tracking-[0.15em] text-cream/50 uppercase">{t.Footer.navTitle}</h2>
            <ul className="mt-5 space-y-2.5">
              {sections.map((id) => (
                <li key={id}>
                  <a href={`#${id}`} className="link-grow pb-0.5">
                    {t.Nav[id]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <h2 className="text-xs font-medium tracking-[0.15em] text-cream/50 uppercase">{t.Footer.socialTitle}</h2>
            <ul className="mt-5 space-y-2.5">
              {socials.map(({ name, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1"
                  >
                    <span className="link-grow pb-0.5">{name}</span>
                    <ArrowUpRight className="size-3.5 opacity-60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-3 border-t border-cream/10 pt-6 text-sm text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.fullName}. {t.Footer.rights}
          </p>
          <a href="#inicio" className="group inline-flex items-center gap-1 transition-colors hover:text-cream">
            {t.ScrollTop.label}
            <ArrowUp className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
