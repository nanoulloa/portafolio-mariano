import type { Messages } from "./es";

const en: Messages = {
  Meta: {
    title: "Mariano Ulloa · Portfolio",
    description:
      "Portfolio of Mariano Ulloa: AI engineer and full stack developer, studying Software Engineering at Universidad Cenfotec.",
  },
  Nav: {
    label: "Main navigation",
    skip: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    home: "Go to home",
    menu: "Menu",
    inicio: "Home",
    "sobre-mi": "About",
    habilidades: "Skills",
    proyectos: "Projects",
    contacto: "Contact",
  },
  Language: {
    label: "Language: English. Switch to Spanish",
  },
  Hero: {
    tag: "AI Engineer · Full stack developer",
    greeting: "Hi, I'm",
    intro:
      "I build web and AI products at Dojo Coding and I'm the CEO of Numo, my Bitcoin finance startup. I like taking an idea and turning it into something people actually use.",
    primary: "Get in touch",
    secondary: "See projects",
    photoAlt: "Mariano pitching Numo at the Startup World Cup regional final",
    caption: "Pitching Numo at the Startup World Cup regional final.",
  },
  About: {
    title: "About me",
    p1: "I'm 20, from Costa Rica, and I'm studying Software Engineering at Universidad Cenfotec, where I'm close to finishing the degree. I started programming in 2024 and from the beginning I knew how to make the most of the tools AI put in my hands.",
    p2: "At Dojo Coding I'm a full stack developer: I build the platform with the team and develop the platforms of the clients who come to the studio, from start to finish.",
    p3: "I'm also the CEO of Numo, a Bitcoin finance startup that was born at a Starknet hackathon. We won first place, and that opened the door to investment and to three startup houses in Mexico City, Nosara and Buenos Aires.",
    quote: "The art of not being ready and doing it anyway will take you further than you think.",
    cv: { label: "Download CV", note: "PDF" },
    stats: {
      projects: "projects in the gallery",
      raised: "raised in investment with Numo",
      certs: "certifications in quantum computing",
      hackathon: "place at the Starknet hackathon",
      hackathonSuffix: "st",
    },
    tabsLabel: "More about me",
    tabs: {
      profile: "Profile",
      experience: "Experience",
      certs: "Certifications",
    },
    facts: {
      base: { label: "Based in", value: "Costa Rica" },
      studies: { label: "Studying", value: "Software Engineering, Universidad Cenfotec" },
      languages: { label: "Languages", value: "Spanish and English" },
      focus: { label: "Focus", value: "Web products, AI and Web3" },
    },
    experience: [
      {
        role: "Full Stack Developer",
        org: "Dojo Coding",
        body: "I build the Dojo platform and develop the studio's client projects from start to finish.",
      },
      {
        role: "CEO and co-founder",
        org: "Numo",
        body: "Bitcoin finance startup on Starknet. First place at a Starknet hackathon, 25,000 dollars in investment and a pitch at the Startup World Cup regional final.",
      },
      {
        role: "Software Engineering student",
        org: "Universidad Cenfotec",
        body: "Close to finishing the degree. There I worked with Java, C#, Angular, Node.js and SQL and NoSQL databases, as you can see in the gallery.",
      },
    ],
    certs: {
      qcobalt: "Quantum optimization and combinatorics",
      qbronze: "Quantum computing with Qiskit",
    },
    credential: "Credential ID",
  },
  Skills: {
    title: "Skills",
    subtitle:
      "The technologies I work with, between what I learned at university and what I use every day on real projects.",
    tabsLabel: "Skill categories",
    tabs: {
      frontend: "Frontend",
      backend: "Backend",
      data: "Databases",
      tools: "Tools",
    },
    university: "Learned at university",
  },
  Projects: {
    title: "Projects",
    subtitle:
      "A gallery of individual and team work: university projects across different technologies and real products I have built.",
    filtersLabel: "Filter projects",
    filters: {
      all: "All",
      individual: "Individual",
      grupal: "Team",
      universidad: "University",
    },
    team: {
      individual: "Individual",
      grupal: "Team",
    },
    origin: {
      universidad: "University",
      profesional: "Professional",
    },
    details: "See details of",
    visit: "Visit site",
    repo: "View code",
    close: "Close",
    stack: "Technologies",
    items: {
      municipal: {
        title: "Municipal Portal",
        context: "Universidad Cenfotec",
        summary: "A website for a local government with news, notices, initiatives and citizen reports.",
        description:
          "A web portal for a local government, built as a team. Residents can sign up, log in and recover their password, read local news and notices, propose initiatives and send reports with photos. It includes an admin panel to publish content and manage users. The backend is a Node.js API with Express and MongoDB.",
      },
      cenfocinemas: {
        title: "CenfoCinemas",
        context: "Universidad Cenfotec",
        summary: "A management system for a movie theater with a layered architecture.",
        description:
          "A system to manage a movie theater's films and users, built in layers: entities and DTOs, data access with SQL Server stored procedures, business logic, an ASP.NET Core Web API and a Razor Pages web app that consumes it.",
      },
      finanzas: {
        title: "Component-based finances",
        context: "Universidad Cenfotec",
        summary: "A personal finance app assembled from independent Maven modules.",
        description:
          "A desktop app to keep track of personal finances, built as a team. It is split into reusable Maven components: login, the transactions core, a budget calculator and the main app, with Swing views to record transactions and see the history and balance. It follows the MVC pattern and stores data with Spring JDBC.",
      },
      apiProductos: {
        title: "Products API",
        context: "Universidad Cenfotec",
        summary: "A Spring Boot REST API with JWT authentication and roles.",
        description:
          "A REST API to manage products and categories. It uses Spring Security with JWT tokens and two roles: any authenticated user can read, but only SUPER_ADMIN can create, edit or delete. Data lives in PostgreSQL, started with Docker Compose.",
      },
      frontProductos: {
        title: "Products Dashboard",
        context: "Universidad Cenfotec",
        summary: "An Angular front end that consumes the products API.",
        description:
          "An Angular 17 web app that consumes the products API. It has login and sign-up, product and category management, and a user list protected by a guard: the menu options change depending on the role of whoever logs in.",
      },
      numo: {
        title: "Numo",
        context: "Startup",
        summary: "A DeFi platform to grow Bitcoin on Starknet.",
        description:
          "DeFi platform to grow Bitcoin on Starknet: auto-rebalancing vaults, fixed-term bonds, a strategy marketplace and forecasting tools. It's my startup, which raised 25,000 dollars in investment.",
      },
      dojo: {
        title: "Dojo",
        context: "Dojo Coding",
        summary: "A platform to learn, take bounties and launch projects with help from AI.",
        description:
          "The platform behind Dojo Coding, where builders learn with guided courses, take paid bounties and launch ventures with help from Doji, an AI agent inside the product. Used in eight countries across Latin America.",
      },
      freedom: {
        title: "Freedom Academies",
        context: "Client project",
        summary: "A civic education platform with more than 3,000 participants.",
        description:
          "Civic education platform with online courses on freedom, democracy and leadership, with more than 3,000 participants. Those who finish the Freedom Course get a certificate validated by Cornell University's Center on Democracy and join a network of Freedom Ambassadors. Built on Moodle, in Spanish and English.",
      },
      vinova: {
        title: "Vinova",
        context: "Client project",
        summary: "Memberships for a longevity clinic in Escazú.",
        description:
          "Membership platform for a longevity clinic in Escazú, Costa Rica: a quiz to find your tier, lab bookings, clinician-written protocols and member benefits, bilingual from day one. Built for a client at Dojo Coding; the project was paused before launch.",
      },
      hikari: {
        title: "Hikari",
        context: "Client project",
        summary: "An investment portal for a unit-based fund.",
        description:
          "Investment portal for a unit-based fund: clients see their units and account value at the latest published NAV and request subscriptions and redemptions, while eight internal roles run operations with separation of duties enforced in the database.",
      },
      pisa: {
        title: "Pisa",
        context: "Meta hackathon",
        summary: "Checks whether a viral video is physically possible.",
        description:
          "A reality check for viral videos: forward a clip on WhatsApp or upload it on the web and within a minute it tells you whether what you see is physically possible. It tracks the object, measures how it falls and compares it with real gravity; the verdict always comes from the measurements. I built it for the Meta Global AI Developer Hackathon, in the indie developer track.",
      },
    },
  },
  Contact: {
    title: "Contact",
    subtitle:
      "Have a project, an idea or an opportunity? Write to me through the form and the message goes straight to my inbox.",
    direct: "You can also find me on",
    links: { email: "Email", whatsapp: "WhatsApp", linkedin: "LinkedIn", github: "GitHub", cv: "CV" },
    cvValue: "Download PDF",
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@email.com",
      subject: "Subject",
      subjectPlaceholder: "What do you want to talk about?",
      message: "Message",
      messagePlaceholder: "Tell me a bit more…",
      required: "required",
      send: "Send message",
      sending: "Sending…",
      successTitle: "Message sent",
      success: "Thanks for writing. I'll get back to you soon by email.",
      errorTitle: "Couldn't send the message",
      error: "Try again in a moment or write to me directly at",
      fixErrors: "Check the highlighted fields before sending.",
      count: "characters",
      errors: {
        nameRequired: "Enter your name.",
        nameShort: "Your name must have at least 2 letters.",
        emailRequired: "Enter your email.",
        emailInvalid: "That email doesn't look valid. Example: name@email.com",
        subjectRequired: "Enter a subject.",
        subjectShort: "The subject must have at least 3 characters.",
        messageRequired: "Enter your message.",
        messageShort: "The message must have at least 10 characters.",
        messageLong: "The message can't be longer than 1000 characters.",
      },
      mailSubject: "New message from the portfolio",
    },
  },
  WhatsApp: {
    open: "Open WhatsApp chat",
    close: "Close chat",
    status: "Usually replies within a few hours",
    greeting: "Hi, how can I help you?",
    label: "Your message",
    placeholder: "Type your message…",
    send: "Continue on WhatsApp",
    defaultMessage: "Hi Mariano, I saw your portfolio and I'd like to talk with you.",
  },
  ScrollTop: {
    label: "Back to top",
  },
  Footer: {
    tagline: "AI engineer and full stack developer from Costa Rica.",
    navTitle: "Sections",
    socialTitle: "Social",
    rights: "All rights reserved.",
    built: "Built with React and Vite",
  },
};

export default en;
