const es = {
  Meta: {
    title: "Mariano Ulloa · Portafolio",
    description:
      "Portafolio de Mariano Ulloa: AI Engineer y desarrollador full stack, estudiante de Ingeniería en Software en la Universidad Cenfotec.",
  },
  Nav: {
    label: "Navegación principal",
    skip: "Saltar al contenido",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    home: "Ir al inicio",
    menu: "Menú",
    inicio: "Inicio",
    "sobre-mi": "Sobre mí",
    habilidades: "Habilidades",
    proyectos: "Proyectos",
    contacto: "Contacto",
  },
  Language: {
    label: "Idioma: español. Cambiar a inglés",
  },
  Hero: {
    tag: "AI Engineer · Desarrollador full stack",
    greeting: "Hola, soy",
    intro:
      "Construyo productos web e IA en Dojo Coding y soy CEO de Numo, mi startup de finanzas en Bitcoin. Me gusta tomar una idea y convertirla en algo que la gente use de verdad.",
    primary: "Contáctame",
    secondary: "Ver proyectos",
    photoAlt: "Mariano presentando Numo en la final regional de la Startup World Cup",
    caption: "Presentando Numo en la final regional de la Startup World Cup.",
  },
  About: {
    title: "Sobre mí",
    p1: "Tengo 20 años, soy de Costa Rica y estudio Ingeniería en Software en la Universidad Cenfotec, donde ya casi termino la carrera. Empecé a programar en 2024 y desde el principio supe aprovechar las herramientas que me daba la inteligencia artificial.",
    p2: "En Dojo Coding soy desarrollador full stack: construyo la plataforma junto al equipo y desarrollo de principio a fin las plataformas de los clientes que llegan al estudio.",
    p3: "También soy CEO de Numo, una startup de finanzas en Bitcoin que nació en una hackathon de Starknet. Ganamos el primer lugar, y eso nos abrió la puerta a una inversión y a tres startup houses en Ciudad de México, Nosara y Buenos Aires.",
    quote: "El arte de no estar listo y hacerlo de todos modos, te llevará más lejos de lo que pensás.",
    cv: { label: "Descargar CV", note: "PDF · en inglés" },
    stats: {
      projects: "proyectos en la galería",
      raised: "de inversión levantada con Numo",
      certs: "certificaciones en computación cuántica",
      hackathon: "lugar en la hackathon de Starknet",
      hackathonSuffix: ".º",
    },
    tabsLabel: "Más sobre mí",
    tabs: {
      profile: "Perfil",
      experience: "Experiencia",
      certs: "Certificaciones",
    },
    facts: {
      base: { label: "Base", value: "Costa Rica" },
      studies: { label: "Estudios", value: "Ingeniería en Software, Universidad Cenfotec" },
      languages: { label: "Idiomas", value: "Español e inglés" },
      focus: { label: "Enfoque", value: "Productos web, IA y Web3" },
    },
    experience: [
      {
        role: "Desarrollador Full Stack",
        org: "Dojo Coding",
        body: "Construyo la plataforma de Dojo y desarrollo de principio a fin los proyectos de los clientes del estudio.",
      },
      {
        role: "CEO y cofundador",
        org: "Numo",
        body: "Startup de finanzas en Bitcoin sobre Starknet. Primer lugar en una hackathon de Starknet, 25 mil dólares de inversión y pitch en la final regional de la Startup World Cup.",
      },
      {
        role: "Estudiante de Ingeniería en Software",
        org: "Universidad Cenfotec",
        body: "Ya casi termino la carrera. Ahí trabajé con Java, C#, Angular, Node.js y bases de datos SQL y NoSQL, como se ve en la galería.",
      },
    ],
    certs: {
      qcobalt: "Optimización cuántica y combinatoria",
      qbronze: "Computación cuántica con Qiskit",
    },
    credential: "ID de credencial",
  },
  Skills: {
    title: "Habilidades",
    subtitle:
      "Las tecnologías con las que trabajo, entre lo que aprendí en la U y lo que uso todos los días en proyectos reales.",
    tabsLabel: "Categorías de habilidades",
    tabs: {
      frontend: "Frontend",
      backend: "Backend",
      data: "Bases de datos",
      tools: "Herramientas",
    },
    university: "La vi en la universidad",
  },
  Projects: {
    title: "Proyectos",
    subtitle:
      "Galería de trabajos individuales y grupales: proyectos de la universidad en distintas tecnologías y productos reales que he construido.",
    filtersLabel: "Filtrar proyectos",
    filters: {
      all: "Todos",
      individual: "Individuales",
      grupal: "Grupales",
      universidad: "De la U",
    },
    team: {
      individual: "Individual",
      grupal: "Grupal",
    },
    origin: {
      universidad: "Universidad",
      profesional: "Profesional",
    },
    details: "Ver detalles de",
    visit: "Ver sitio",
    repo: "Ver código",
    close: "Cerrar",
    stack: "Tecnologías",
    items: {
      municipal: {
        title: "Portal Municipal",
        context: "Universidad Cenfotec",
        summary: "Sitio para una municipalidad con noticias, avisos, iniciativas y denuncias ciudadanas.",
        description:
          "Portal web para una municipalidad, hecho en equipo. Los vecinos pueden registrarse, iniciar sesión y recuperar su contraseña, leer noticias locales y avisos, proponer iniciativas y enviar denuncias con fotos. Incluye un panel de administración para publicar contenido y gestionar usuarios. El backend es una API en Node.js con Express y MongoDB.",
      },
      cenfocinemas: {
        title: "CenfoCinemas",
        context: "Universidad Cenfotec",
        summary: "Sistema de gestión para un cine con arquitectura en capas.",
        description:
          "Sistema para administrar las películas y los usuarios de un cine, construido en capas: entidades y DTOs, acceso a datos con procedimientos almacenados en SQL Server, lógica de negocio, una Web API en ASP.NET Core y una aplicación web con Razor Pages que la consume.",
      },
      finanzas: {
        title: "Finanzas por componentes",
        context: "Universidad Cenfotec",
        summary: "App de finanzas personales armada con módulos Maven independientes.",
        description:
          "Aplicación de escritorio para llevar las finanzas personales, hecha en equipo. Está dividida en componentes Maven reutilizables: inicio de sesión, el núcleo de movimientos, una calculadora de presupuesto y la app principal, con vistas en Swing para registrar movimientos y ver el historial y el balance. Sigue el patrón MVC y guarda los datos con Spring JDBC.",
      },
      apiProductos: {
        title: "API de Productos",
        context: "Universidad Cenfotec",
        summary: "API REST con Spring Boot, autenticación JWT y roles.",
        description:
          "API REST para administrar productos y categorías. Usa Spring Security con tokens JWT y dos roles: cualquier usuario autenticado puede consultar, pero solo el SUPER_ADMIN puede crear, editar o borrar. Los datos viven en PostgreSQL, que se levanta con Docker Compose.",
      },
      frontProductos: {
        title: "Panel de Productos",
        context: "Universidad Cenfotec",
        summary: "Front-end en Angular que consume la API de productos.",
        description:
          "Aplicación web en Angular 17 que consume la API de productos. Tiene inicio de sesión y registro, administración de productos y categorías, y un listado de usuarios protegido por un guard: las opciones del menú cambian según el rol de quien entra.",
      },
      numo: {
        title: "Numo",
        context: "Startup",
        summary: "Plataforma DeFi para hacer crecer Bitcoin en Starknet.",
        description:
          "Plataforma DeFi para hacer crecer Bitcoin en Starknet: bóvedas con rebalanceo automático, bonos a plazo fijo, un mercado de estrategias y herramientas de pronóstico. Es mi startup, con la que levantamos 25 mil dólares de inversión.",
      },
      dojo: {
        title: "Dojo",
        context: "Dojo Coding",
        summary: "Plataforma para aprender, tomar bounties y lanzar proyectos con ayuda de IA.",
        description:
          "La plataforma detrás de Dojo Coding, donde la gente aprende con cursos guiados, toma bounties pagados y lanza sus proyectos con ayuda de Doji, un agente de IA dentro del producto. Se usa en ocho países de Latinoamérica.",
      },
      freedom: {
        title: "Freedom Academies",
        context: "Proyecto para cliente",
        summary: "Plataforma de educación cívica con más de 3.000 participantes.",
        description:
          "Plataforma de educación cívica con cursos en línea sobre libertad, democracia y liderazgo, con más de 3.000 participantes. Quienes terminan el Curso de Libertad reciben un certificado validado por el Centro para la Democracia de Cornell University y entran a una red de Embajadores de Libertad. Construida sobre Moodle, en español e inglés.",
      },
      vinova: {
        title: "Vinova",
        context: "Proyecto para cliente",
        summary: "Membresías para una clínica de longevidad en Escazú.",
        description:
          "Plataforma de membresías para una clínica de longevidad en Escazú, Costa Rica: un cuestionario para encontrar tu nivel, reserva de laboratorios, protocolos escritos por médicos y beneficios para miembros, bilingüe desde el inicio. Lo construí para un cliente en Dojo Coding; el proyecto se pausó antes del lanzamiento.",
      },
      hikari: {
        title: "Hikari",
        context: "Proyecto para cliente",
        summary: "Portal de inversión para un fondo por unidades.",
        description:
          "Portal de inversión para un fondo por unidades: los clientes ven sus unidades y el valor de su cuenta al último NAV publicado y solicitan suscripciones y retiros, mientras ocho roles internos operan con separación de funciones aplicada desde la base de datos.",
      },
      pisa: {
        title: "Pisa",
        context: "Hackathon de Meta",
        summary: "Revisa si un video viral es físicamente posible.",
        description:
          "Verificador de videos virales: le mandas un clip por WhatsApp o lo subes en la web y en un minuto responde si lo que se ve es físicamente posible. Rastrea el objeto, mide cómo cae y lo compara con la gravedad real; el veredicto siempre sale de las mediciones. Lo construí para la Meta Global AI Developer Hackathon, en la categoría de desarrollador independiente.",
      },
    },
  },
  Contact: {
    title: "Contacto",
    subtitle:
      "¿Tienes un proyecto, una idea o una oportunidad? Escríbeme por el formulario y el mensaje me llega directo al correo.",
    direct: "También me encuentras en",
    links: { email: "Correo", whatsapp: "WhatsApp", linkedin: "LinkedIn", github: "GitHub", cv: "CV" },
    cvValue: "Descargar PDF",
    form: {
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      email: "Correo electrónico",
      emailPlaceholder: "tu@correo.com",
      subject: "Asunto",
      subjectPlaceholder: "¿Sobre qué quieres hablar?",
      message: "Mensaje",
      messagePlaceholder: "Cuéntame un poco más…",
      required: "obligatorio",
      send: "Enviar mensaje",
      sending: "Enviando…",
      successTitle: "Mensaje enviado",
      success: "Gracias por escribir. Te respondo pronto a tu correo.",
      errorTitle: "No se pudo enviar",
      error: "Inténtalo de nuevo en un momento o escríbeme directo a",
      fixErrors: "Revisa los campos marcados antes de enviar.",
      count: "caracteres",
      errors: {
        nameRequired: "Escribe tu nombre.",
        nameShort: "El nombre debe tener al menos 2 letras.",
        emailRequired: "Escribe tu correo.",
        emailInvalid: "Ese correo no parece válido. Ejemplo: nombre@correo.com",
        subjectRequired: "Escribe un asunto.",
        subjectShort: "El asunto debe tener al menos 3 caracteres.",
        messageRequired: "Escribe tu mensaje.",
        messageShort: "El mensaje debe tener al menos 10 caracteres.",
        messageLong: "El mensaje no puede pasar de 1000 caracteres.",
      },
      mailSubject: "Nuevo mensaje desde el portafolio",
    },
  },
  WhatsApp: {
    open: "Abrir chat de WhatsApp",
    close: "Cerrar chat",
    status: "Normalmente responde en unas horas",
    greeting: "Hola, ¿en qué te puedo ayudar?",
    label: "Tu mensaje",
    placeholder: "Escribe tu mensaje…",
    send: "Continuar en WhatsApp",
    defaultMessage: "Hola Mariano, vi tu portafolio y me gustaría hablar contigo.",
  },
  ScrollTop: {
    label: "Volver al inicio",
  },
  Footer: {
    tagline: "AI Engineer y desarrollador full stack desde Costa Rica.",
    navTitle: "Secciones",
    socialTitle: "Redes",
    rights: "Todos los derechos reservados.",
    built: "Hecho con React y Vite",
  },
};

export type Messages = typeof es;

export default es;
