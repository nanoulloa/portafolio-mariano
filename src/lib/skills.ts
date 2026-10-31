import { projects } from "./projects";

export type SkillCategory = "frontend" | "backend" | "data" | "tools";

export const skillCategories: SkillCategory[] = ["frontend", "backend", "data", "tools"];

export const skills: Record<SkillCategory, string[]> = {
  frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Angular", "Next.js", "Tailwind CSS"],
  backend: ["Node.js", "Express", "Java", "Spring Boot", "C#", "ASP.NET Core", "Python", "PHP"],
  data: ["PostgreSQL", "MongoDB", "SQL Server", "Supabase"],
  tools: ["Git", "Docker", "Maven", "Moodle", "Vercel", "Stripe", "Starknet"],
};

export function learnedAtUniversity(skill: string) {
  return projects.some((project) => project.origin === "universidad" && project.tags.includes(skill));
}
