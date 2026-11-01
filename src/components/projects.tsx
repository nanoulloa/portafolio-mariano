import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/i18n/language-provider";
import { cn } from "@/lib/cn";
import { projects, type Origin, type Project, type Team } from "@/lib/projects";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";

type Filter = "all" | Team | Extract<Origin, "universidad">;

const filters: Filter[] = ["all", "individual", "grupal", "universidad"];

function matches(project: Project, filter: Filter) {
  if (filter === "all") return true;
  if (filter === "universidad") return project.origin === "universidad";
  return project.team === filter;
}

function Cover({ project, alt, large = false }: { project: Project; alt: string; large?: boolean }) {
  const { t } = useLanguage();

  if (project.image) {
    return (
      <img
        src={project.image}
        alt={alt}
        loading="lazy"
        className="size-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        "flex size-full flex-col justify-between bg-sand text-espresso transition-transform duration-700 ease-out group-hover:scale-[1.04]",
        large ? "p-6 sm:p-10" : "p-6",
      )}
    >
      <span className="text-[11px] tracking-[0.2em] text-brown uppercase">{t.Projects.items[project.id].context}</span>
      <span className={cn("font-semibold leading-[1.1] tracking-tight", large ? "text-3xl" : "text-2xl sm:text-3xl")}>
        {project.tags.slice(0, 3).map((tag) => (
          <span key={tag} className={large ? "mr-4 inline-block" : "block"}>
            {tag}
          </span>
        ))}
      </span>
    </div>
  );
}

export default function Projects() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<Project | null>(null);

  const visible = projects.filter((project) => matches(project, filter));
  const count = (value: Filter) => projects.filter((project) => matches(project, value)).length;
  const meta = (project: Project) => `${t.Projects.team[project.team]} · ${t.Projects.origin[project.origin]}`;

  return (
    <section id="proyectos" aria-labelledby="proyectos-title" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="proyectos-title" title={t.Projects.title} subtitle={t.Projects.subtitle} />

        <Reveal delay={100} className="mt-12">
          <div role="group" aria-label={t.Projects.filtersLabel} className="flex flex-wrap gap-x-7 gap-y-3 max-sm:grid max-sm:grid-cols-2 max-sm:justify-items-start">
            {filters.map((value) => (
              <button
                key={value}
                type="button"
                aria-pressed={filter === value}
                onClick={() => setFilter(value)}
                className={cn(
                  "link-grow pb-1 text-sm font-medium transition-opacity duration-300",
                  filter === value ? "opacity-100" : "opacity-55 hover:opacity-100",
                )}
              >
                {t.Projects.filters[value]}
                <sup className="ml-1 text-[11px] text-sand">{count(value)}</sup>
              </button>
            ))}
          </div>
        </Reveal>

        <ul key={filter} className="mt-12 grid gap-x-8 gap-y-16 border-t border-cream/15 pt-12 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, index) => {
            const item = t.Projects.items[project.id];
            return (
              <li key={project.id} className="fade-in" style={{ "--delay": `${index * 60}ms` } as React.CSSProperties}>
                <article className="group relative has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-8 has-[:focus-visible]:outline-cream">
                  <div className="aspect-[16/10] overflow-hidden bg-sand">
                    <Cover project={project} alt={item.title} />
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <h3 className="text-2xl leading-tight font-semibold tracking-tight">
                      <button
                        type="button"
                        onClick={() => setSelected(project)}
                        aria-label={`${t.Projects.details} ${item.title}`}
                        className="text-left after:absolute after:inset-0 focus-visible:outline-none"
                      >
                        {item.title}
                      </button>
                    </h3>
                    <ArrowUpRight className="mt-0.5 size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <p className="mt-3 text-[11px] font-medium tracking-[0.18em] text-sand uppercase">{meta(project)}</p>
                  <p className="mt-3 leading-relaxed text-cream/70">{item.summary}</p>
                </article>
              </li>
            );
          })}
        </ul>
      </div>

      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

function ProjectDialog({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const { t } = useLanguage();
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (project && !dialog.open) dialog.showModal();
    if (!project && dialog.open) dialog.close();
  }, [project]);

  const item = project ? t.Projects.items[project.id] : null;

  return (
    <dialog
      ref={ref}
      aria-labelledby="project-dialog-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className="project-dialog"
    >
      {project && item && (
        <div className="bg-espresso text-cream">
          <div className={cn("relative overflow-hidden", project.image ? "aspect-[16/10]" : "h-56")}>
            <Cover project={project} alt={item.title} large />
            <button
              type="button"
              onClick={onClose}
              autoFocus
              className="absolute top-4 right-4 inline-flex items-center gap-2 rounded-full bg-espresso px-4 py-2 text-sm text-cream transition-colors hover:bg-cream hover:text-espresso"
            >
              {t.Projects.close}
              <X className="size-4" />
            </button>
          </div>

          <div className="p-6 sm:p-10">
            <p className="text-[11px] tracking-[0.2em] text-sand uppercase">
              {t.Projects.team[project.team]} · {item.context}
            </p>
            <h3 id="project-dialog-title" className="mt-4 text-4xl leading-none font-bold tracking-tight sm:text-5xl">
              {item.title}
            </h3>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/80">{item.description}</p>
            <p className="mt-6 text-sm text-cream/60">
              {t.Projects.stack}: {project.tags.join(" · ")}
            </p>

            {(project.href || project.repo) && (
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-brown px-6 py-3 text-sm font-medium transition-colors duration-300 hover:bg-sand hover:text-espresso"
                  >
                    {t.Projects.visit}
                    <ArrowUpRight className="size-4" />
                  </a>
                )}
                {project.repo && (
                  <a href={project.repo} target="_blank" rel="noreferrer" className="link inline-flex items-center gap-1 text-sm font-medium">
                    {t.Projects.repo}
                    <ArrowUpRight className="size-4" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </dialog>
  );
}
