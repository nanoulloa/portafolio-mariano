import { useState } from "react";
import { useLanguage } from "@/i18n/language-provider";
import { certifications } from "@/lib/certifications";
import { projects } from "@/lib/projects";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";
import Tabs from "./tabs";

type Tab = "profile" | "experience" | "certs";

const rowClass = "grid gap-1 border-b border-espresso/20 py-5 sm:grid-cols-[14rem_1fr] sm:gap-8";

export default function About() {
  const { lang, t } = useLanguage();
  const [tab, setTab] = useState<Tab>("profile");

  const stats = [
    { value: String(projects.length), label: t.About.stats.projects },
    { value: "$25K", label: t.About.stats.raised },
    { value: String(certifications.length), label: t.About.stats.certs },
    { value: `1${t.About.stats.hackathonSuffix}`, label: t.About.stats.hackathon },
  ];

  const issued = (iso: string) => {
    const [year, month] = iso.split("-").map(Number);
    return new Date(year, month - 1, 1).toLocaleDateString(lang, { month: "long", year: "numeric" });
  };

  return (
    <section id="sobre-mi" aria-labelledby="sobre-mi-title" className="bg-sand px-5 py-24 text-espresso sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionHeading id="sobre-mi-title" title={t.About.title} />
            <Reveal delay={100}>
              <blockquote className="mt-10 border-l-2 border-brown pl-6 text-xl leading-snug font-medium tracking-tight sm:text-2xl">
                {t.About.quote}
              </blockquote>
            </Reveal>
          </div>

          <Reveal delay={150} className="space-y-5 text-lg leading-relaxed text-espresso/80 md:col-span-6 md:col-start-7">
            <p>{t.About.p1}</p>
            <p>{t.About.p2}</p>
            <p>{t.About.p3}</p>
          </Reveal>
        </div>

        <ul className="mt-20 grid grid-cols-2 border-t border-espresso/20 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <li key={stat.label} className="border-b border-espresso/20 py-7 pr-6 lg:border-b-0">
              <Reveal delay={index * 100}>
                <p className="text-4xl leading-none font-bold tracking-tight text-brown sm:text-5xl">{stat.value}</p>
                <p className="mt-3 max-w-[12rem] text-sm leading-snug text-espresso/70">{stat.label}</p>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-20">
          <Tabs
            label={t.About.tabsLabel}
            idPrefix="about"
            value={tab}
            onChange={setTab}
            items={[
              { id: "profile", label: t.About.tabs.profile },
              { id: "experience", label: t.About.tabs.experience },
              { id: "certs", label: t.About.tabs.certs },
            ]}
          />
        </Reveal>

        <div
          key={tab}
          id="about-panel"
          role="tabpanel"
          aria-labelledby={`about-tab-${tab}`}
          className="fade-in mt-6 border-t border-espresso/20"
        >
          {tab === "profile" && (
            <dl>
              {(["base", "studies", "languages", "focus"] as const).map((key) => (
                <div key={key} className={rowClass}>
                  <dt className="text-sm text-espresso/60">{t.About.facts[key].label}</dt>
                  <dd className="text-lg">{t.About.facts[key].value}</dd>
                </div>
              ))}
            </dl>
          )}

          {tab === "experience" && (
            <ol>
              {t.About.experience.map((item) => (
                <li key={item.org} className={rowClass}>
                  <p className="text-2xl leading-none font-semibold tracking-tight">{item.org}</p>
                  <div>
                    <h3 className="text-lg font-medium">{item.role}</h3>
                    <p className="mt-1 leading-relaxed text-espresso/75">{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          )}

          {tab === "certs" && (
            <ul>
              {certifications.map((cert) => (
                <li key={cert.id} className={rowClass}>
                  <p className="text-2xl leading-none font-semibold tracking-tight">{cert.name}</p>
                  <div>
                    <h3 className="text-lg font-medium">{t.About.certs[cert.id]}</h3>
                    <p className="mt-1 text-espresso/75">
                      {cert.issuer} · {issued(cert.issued)}
                    </p>
                    <p className="mt-1 text-sm text-espresso/60">
                      {t.About.credential} {cert.credentialId}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
