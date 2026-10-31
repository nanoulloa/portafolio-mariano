import { ArrowRight, ArrowUpRight } from "lucide-react";
import portrait from "@/assets/mariano.jpg";
import { useLanguage } from "@/i18n/language-provider";
import { site } from "@/lib/site";
import Reveal from "./reveal";

const socials = [
  { name: "GitHub", href: site.github },
  { name: "LinkedIn", href: site.linkedin },
  { name: "Email", href: `mailto:${site.email}` },
];

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="inicio"
      aria-labelledby="inicio-title"
      className="px-5 pt-32 pb-24 sm:px-8 sm:pt-40 lg:flex lg:min-h-svh lg:items-center lg:pb-20"
    >
      <div className="mx-auto grid w-full max-w-6xl items-end gap-16 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-7">
          <p className="fade-in text-xs font-medium tracking-[0.2em] text-sand uppercase">{t.Hero.tag}</p>

          <h1 id="inicio-title" className="mt-7 text-[clamp(3rem,8vw,6rem)] leading-[0.95] font-bold tracking-[-0.04em]">
            <span className="line">
              <span style={{ "--delay": "100ms" } as React.CSSProperties}>{t.Hero.greeting}</span>
            </span>
            <span className="line">
              <span style={{ "--delay": "250ms" } as React.CSSProperties}>
                Mariano <span className="text-sand">Ulloa</span>
              </span>
            </span>
          </h1>

          <Reveal delay={450}>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-cream/75">{t.Hero.intro}</p>
          </Reveal>

          <Reveal delay={600} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href="#contacto"
              className="group inline-flex items-center gap-3 rounded-full bg-brown px-7 py-3.5 text-sm font-medium text-cream transition-colors duration-300 hover:bg-sand hover:text-espresso"
            >
              {t.Hero.primary}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#proyectos" className="link text-sm font-medium">
              {t.Hero.secondary}
            </a>
          </Reveal>

          <Reveal delay={750} className="mt-16">
            <ul className="flex flex-wrap gap-x-7 gap-y-2 text-sm text-cream/70">
              {socials.map(({ name, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1 transition-colors hover:text-cream"
                  >
                    {name}
                    <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={300} className="mx-auto w-full max-w-sm md:col-span-5 md:mr-0">
          <figure>
            <div className="relative">
              <div aria-hidden="true" className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-full border border-sand/40" />
              <div className="relative overflow-hidden rounded-t-full">
                <img
                  src={portrait}
                  alt={t.Hero.photoAlt}
                  width={959}
                  height={1280}
                  fetchPriority="high"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-105"
                />
              </div>
            </div>
            <figcaption className="mt-8 text-sm text-cream/60">{t.Hero.caption}</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
