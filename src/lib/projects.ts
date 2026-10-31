import dojo from "@/assets/projects/dojo.jpg";
import freedom from "@/assets/projects/freedom.jpg";
import hikari from "@/assets/projects/hikari.jpg";
import numo from "@/assets/projects/numo.jpg";
import vinova from "@/assets/projects/vinova.jpg";

export type ProjectId =
  | "numo"
  | "dojo"
  | "municipal"
  | "freedom"
  | "cenfocinemas"
  | "vinova"
  | "finanzas"
  | "hikari"
  | "apiProductos"
  | "pisa"
  | "frontProductos";

export type Team = "individual" | "grupal";
export type Origin = "universidad" | "profesional";

export type Project = {
  id: ProjectId;
  team: Team;
  origin: Origin;
  tags: string[];
  image?: string;
  href?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    id: "numo",
    team: "grupal",
    origin: "profesional",
    image: numo,
    tags: ["Bitcoin", "Starknet", "DeFi"],
    href: "https://numo-nu.vercel.app/",
  },
  {
    id: "dojo",
    team: "grupal",
    origin: "profesional",
    image: dojo,
    tags: ["React", "TypeScript", "Supabase", "Stripe"],
    href: "https://trydojo.io/",
  },
  {
    id: "municipal",
    team: "grupal",
    origin: "universidad",
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB"],
    repo: "https://github.com/nanoulloa/proyecto_software1",
  },
  {
    id: "freedom",
    team: "individual",
    origin: "profesional",
    image: freedom,
    tags: ["Moodle", "PHP", "LMS", "i18n"],
    href: "https://freedomacademies.org/",
  },
  {
    id: "cenfocinemas",
    team: "individual",
    origin: "universidad",
    tags: ["C#", "ASP.NET Core", "SQL Server"],
  },
  {
    id: "vinova",
    team: "individual",
    origin: "profesional",
    image: vinova,
    tags: ["Next.js", "Supabase", "Stripe", "i18n"],
    href: "https://vinova-phi.vercel.app/",
  },
  {
    id: "finanzas",
    team: "grupal",
    origin: "universidad",
    tags: ["Java", "Maven", "Swing", "MVC"],
  },
  {
    id: "hikari",
    team: "individual",
    origin: "profesional",
    image: hikari,
    tags: ["React", "TypeScript", "Supabase", "PostgreSQL"],
    href: "https://app.hikari-intelligence.com/login",
  },
  {
    id: "apiProductos",
    team: "individual",
    origin: "universidad",
    tags: ["Java", "Spring Boot", "JWT", "PostgreSQL", "Docker"],
    repo: "https://github.com/nanoulloa/TareaTecnica1",
  },
  {
    id: "pisa",
    team: "individual",
    origin: "profesional",
    tags: ["Python", "TypeScript", "OpenCV", "Supabase"],
    href: "https://pisa-theta.vercel.app",
    repo: "https://github.com/nanoulloa/pisa",
  },
  {
    id: "frontProductos",
    team: "individual",
    origin: "universidad",
    tags: ["Angular", "TypeScript", "HTML", "CSS"],
    repo: "https://github.com/nanoulloa/TareaTecnica2",
  },
];
