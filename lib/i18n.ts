export type Locale = "es" | "en";

export const translations = {
  es: {
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      projects: "Proyectos",
      stack: "Tecnologías",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      name: "Rubén Borrajo",
      role: "Desarrollador Full Stack",
      description:
        "Especializado en desarrollo de ERP, aplicaciones web y soluciones empresariales con más de 9 años de experiencia.",
      cta: "Contáctame",
      downloadCV: "Descargar CV",
    },
    about: {
      title: "Sobre mí",
      description1:
        "Soy un desarrollador full stack con 9 años de experiencia, comenzando como freelance durante 2 años y los últimos 7 años en Edisa, donde desarrollo el ERP corporativo y las páginas web de nuestros clientes.",
      description2:
        "Me especializo en el desarrollo de portales de gestión, ecommerce, sistemas de nóminas, producción y realizo integraciones entre el ERP y sistemas externos. Trabajo directamente con Oracle Forms y PL/SQL, además de tecnologías web modernas.",
      skills: {
        title: "Soft Skills",
        client: "Trato con clientes",
        clientDesc:
          "Comunicación directa con clientes y usuarios finales del producto",
        independent: "Independencia",
        independentDesc:
          "Capacidad de buscar la mejor solución de forma autónoma",
        leadership: "Liderazgo",
        leadershipDesc: "Experiencia dirigiendo equipos de desarrollo",
      },
    },
    experience: {
      title: "Experiencia",
      present: "Presente",
      positions: {
        edisa: {
          company: "Edisa",
          role: "Desarrollador Full Stack Senior",
          period: "2018 - Presente",
          description:
            "Desarrollo del ERP corporativo con Oracle Forms y PL/SQL. Creación de portales web para clientes: ecommerce, gestión de empleados, nóminas y producción. Integraciones entre el ERP y sistemas externos.",
          achievements: [
            "Desarrollo y mantenimiento del ERP corporativo",
            "Creación de portales de ecommerce y gestión",
            "Integraciones bidireccionales con sistemas externos",
            "Liderazgo de equipos de desarrollo",
          ],
        },
        freelance: {
          company: "Freelance",
          role: "Desarrollador Web",
          period: "2016 - 2018",
          description:
            "Desarrollo de sitios web y aplicaciones personalizadas para diversos clientes. Especialización en soluciones a medida.",
          achievements: [
            "Desarrollo de sitios web corporativos",
            "Aplicaciones web personalizadas",
            "Gestión completa de proyectos",
          ],
        },
      },
    },
    projects: {
      title: "Proyectos Destacados",
      viewProject: "Ver proyecto",
      viewCode: "Ver código",
      items: {
        erp: {
          title: "Sistema ERP Corporativo",
          description:
            "Desarrollo y mantenimiento del ERP empresarial con Oracle Forms y PL/SQL, incluyendo módulos de gestión integral.",
          tags: ["Oracle Forms", "PL/SQL", "Java"],
        },
        ecommerce: {
          title: "Portal E-commerce",
          description:
            "Plataforma de comercio electrónico completa con gestión de inventario, pedidos y pagos integrados.",
          tags: ["React", "Next.js", "Node.js"],
        },
        hrPortal: {
          title: "Portal de Recursos Humanos",
          description:
            "Sistema de gestión de empleados, nóminas y control de producción para empresas medianas.",
          tags: ["Django", "Python", "PostgreSQL"],
        },
        integrations: {
          title: "Integraciones Empresariales",
          description:
            "Desarrollo de APIs y conectores para sincronización bidireccional entre el ERP y sistemas externos.",
          tags: ["REST API", "SOAP", "Oracle"],
        },
      },
    },
    stack: {
      title: "Stack Tecnológico",
      categories: {
        backend: "Backend",
        frontend: "Frontend",
        database: "Bases de Datos",
        tools: "Herramientas",
      },
    },
    contact: {
      title: "Contacto",
      subtitle: "¿Tienes un proyecto en mente? Hablemos",
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      send: "Enviar mensaje",
      success: "Mensaje enviado correctamente",
      error: "Error al enviar el mensaje",
    },
    footer: {
      rights: "Todos los derechos reservados",
      madeWith: "Hecho con",
    },
  },
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      stack: "Tech Stack",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Your Name",
      role: "Full Stack Developer",
      description:
        "Specialized in ERP development, web applications and enterprise solutions with over 9 years of experience.",
      cta: "Contact me",
      downloadCV: "Download CV",
    },
    about: {
      title: "About me",
      description1:
        "I'm a full stack developer with 9 years of experience, starting as a freelancer for 2 years and the last 7 years at Edisa, where I develop the corporate ERP and client websites.",
      description2:
        "I specialize in developing management portals, e-commerce, payroll systems, production and integrations between the ERP and external systems. I work directly with Oracle Forms and PL/SQL, as well as modern web technologies.",
      skills: {
        title: "Soft Skills",
        client: "Client Relations",
        clientDesc: "Direct communication with clients and end users",
        independent: "Independence",
        independentDesc: "Ability to find the best solution autonomously",
        leadership: "Leadership",
        leadershipDesc: "Experience leading development teams",
      },
    },
    experience: {
      title: "Experience",
      present: "Present",
      positions: {
        edisa: {
          company: "Edisa",
          role: "Senior Full Stack Developer",
          period: "2018 - Present",
          description:
            "Corporate ERP development with Oracle Forms and PL/SQL. Creation of client web portals: e-commerce, employee management, payroll and production. Integrations between ERP and external systems.",
          achievements: [
            "Development and maintenance of corporate ERP",
            "Creation of e-commerce and management portals",
            "Bidirectional integrations with external systems",
            "Development team leadership",
          ],
        },
        freelance: {
          company: "Freelance",
          role: "Web Developer",
          period: "2016 - 2018",
          description:
            "Development of websites and custom applications for various clients. Specialization in tailored solutions.",
          achievements: [
            "Corporate website development",
            "Custom web applications",
            "Complete project management",
          ],
        },
      },
    },
    projects: {
      title: "Featured Projects",
      viewProject: "View project",
      viewCode: "View code",
      items: {
        erp: {
          title: "Corporate ERP System",
          description:
            "Development and maintenance of enterprise ERP with Oracle Forms and PL/SQL, including comprehensive management modules.",
          tags: ["Oracle Forms", "PL/SQL", "Java"],
        },
        ecommerce: {
          title: "E-commerce Portal",
          description:
            "Complete e-commerce platform with inventory management, orders and integrated payments.",
          tags: ["React", "Next.js", "Node.js"],
        },
        hrPortal: {
          title: "HR Portal",
          description:
            "Employee management system, payroll and production control for medium-sized companies.",
          tags: ["Django", "Python", "PostgreSQL"],
        },
        integrations: {
          title: "Enterprise Integrations",
          description:
            "Development of APIs and connectors for bidirectional synchronization between ERP and external systems.",
          tags: ["REST API", "SOAP", "Oracle"],
        },
      },
    },
    stack: {
      title: "Tech Stack",
      categories: {
        backend: "Backend",
        frontend: "Frontend",
        database: "Databases",
        tools: "Tools",
      },
    },
    contact: {
      title: "Contact",
      subtitle: "Have a project in mind? Let's talk",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send message",
      success: "Message sent successfully",
      error: "Error sending message",
    },
    footer: {
      rights: "All rights reserved",
      madeWith: "Made with",
    },
  },
};

export function getTranslations(locale: Locale) {
  return translations[locale];
}
