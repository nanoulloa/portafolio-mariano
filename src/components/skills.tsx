import { useState } from "react";
import { useLanguage } from "@/i18n/language-provider";
import { learnedAtUniversity, skillCategories, skills, type SkillCategory } from "@/lib/skills";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";
import Tabs from "./tabs";

export default function Skills() {
  const { t } = useLanguage();
  const [category, setCategory] = useState<SkillCategory>("frontend");

  return (
    <section id="habilidades" aria-labelledby="habilidades-title" className="border-t border-espresso/15 bg-sand px-5 py-24 text-espresso sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="habilidades-title" title={t.Skills.title} subtitle={t.Skills.subtitle} />

        <Reveal delay={100} className="mt-12">
          <Tabs
            label={t.Skills.tabsLabel}
            idPrefix="skills"
            value={category}
            onChange={setCategory}
            items={skillCategories.map((id) => ({ id, label: t.Skills.tabs[id] }))}
          />
        </Reveal>

        <ul
          key={category}
          id="skills-panel"
          role="tabpanel"
          aria-labelledby={`skills-tab-${category}`}
          className="mt-6 flex flex-wrap items-baseline gap-x-10 gap-y-4 border-t border-espresso/20 pt-12"
        >
          {skills[category].map((skill, index) => (
            <li
              key={skill}
              className="fade-in text-3xl leading-tight font-semibold tracking-tight transition-colors duration-300 hover:text-brown sm:text-5xl"
              style={{ "--delay": `${index * 50}ms` } as React.CSSProperties}
            >
              {skill}
              {learnedAtUniversity(skill) && (
                <sup className="ml-1 font-sans text-2xl text-brown">
                  <span aria-hidden="true">*</span>
                  <span className="sr-only">{t.Skills.university}</span>
                </sup>
              )}
            </li>
          ))}
        </ul>

        <p className="mt-12 text-sm text-espresso/70">
          <span className="text-brown" aria-hidden="true">
            *{" "}
          </span>
          {t.Skills.university}
        </p>
      </div>
    </section>
  );
}
