export const site = {
  name: "Mariano",
  fullName: "Mariano Ulloa Jiménez",
  email: "marianoulloa3@gmail.com",
  github: "https://github.com/nanoulloa",
  linkedin: "https://www.linkedin.com/in/mariano-ulloa-132a2b352/",
  whatsapp: "50672221610",
  phone: "+506 7222 1610",
  cv: "MarianoUlloaJimenez_Resume.pdf",
  formKey: "1d6cb7a5-7cb9-4b0a-b747-81583ea7c8db",
} as const;

export const sections = ["inicio", "sobre-mi", "habilidades", "proyectos", "contacto"] as const;

export type SectionId = (typeof sections)[number];
