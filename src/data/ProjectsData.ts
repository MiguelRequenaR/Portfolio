import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project4 from "../assets/project4.png"
import project5 from "../assets/project5.png"
import project7 from "../assets/project7.png"
import project9 from "../assets/project9.png"
import project10 from "../assets/project10.png"
import project11 from "../assets/project11.png"
import project12 from "../assets/project12.png"
import project13 from "../assets/project13.png"
import project14 from "../assets/project14.png"
import project15 from "../assets/project15.png"

export interface Project {
  id: string;
  image: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  year: number;
  time: string;
  category: string;
}

export const projectsData: Project[] = [
  {
    id: "ordee",
    image: project1,
    title: "Ordee",
    description: "Aplicación móvil para la gestión de ordenes en restaurantes.",
    longDescription: "Ordee es una aplicación móvil innovadora diseñada para revolucionar la gestión de órdenes en restaurantes. La aplicación permite a los meseros controlar las ordenes de los clientes. Con una interfaz moderna y funcionalidades avanzadas, Ordee mejora significativamente la experiencia tanto del cliente como del negocio.",
    technologies: ["React Native", "Node.js", "Supabase", "TypeScript"],
    features: [
      "Gestión de menús en tiempo real",
      "Sistema de notificaciones push",
      "Integración con sistemas de pago",
      "Panel de administración completo",
      "Seguimiento de órdenes en vivo"
    ],
    liveUrl: "https://ordee.framer.website/",
    githubUrl: "https://github.com/Grobles-Inc/ordee",
    year: 2024,
    time: "3 meses",
    category: "Aplicación Móvil"
  },
  {
    id: "monedo",
    image: project2,
    title: "Monedo",
    description: "Aplicación móvil para la gestión de finanzas personales.",
    longDescription: "Monedo es una aplicación móvil completa para la gestión de finanzas personales que ayuda a los usuarios a controlar sus gastos, crear presupuestos y alcanzar sus metas financieras. Con herramientas de análisis avanzadas y una interfaz intuitiva, Monedo hace que la gestión del dinero sea simple y efectiva.",
    technologies: ["React Native", "TypeScript", "Supabase", "Chart.js"],
    features: [
      "Seguimiento de gastos por categorías",
      "Creación de presupuestos personalizados",
      "Gráficos y análisis financieros",
      "Metas de ahorro configurables",
      "Exportación de reportes"
    ],
    liveUrl: "https://monedo.framer.website/",
    githubUrl: "https://github.com/kralion/monedo",
    year: 2024,
    time: "4 meses",
    category: "Aplicación Móvil"
  },
  {
    id: "blue-motors",
    image: project4,
    title: "Blue Motors",
    description: "Página web Ecommerce de venta de motocicletas.",
    longDescription: "Blue Motors es una plataforma ecommerce especializada en la venta de motocicletas y accesorios relacionados. La plataforma ofrece una experiencia de compra completa con catálogo detallado, y sistema de filtros avanzados.",
    technologies: ["React", "TailwindCSS", "WordPress", "CMS"],
    features: [
      "Catálogo completo de motocicletas",
      "Sistema de filtros avanzados",
      "Proceso de compra seguro",
      "Panel de administración",
      "Sistema de reseñas y calificaciones"
    ],
    liveUrl: "https://blue-motors.netlify.app/",
    githubUrl: "https://github.com/MiguelRequenaR/Blue-Motors",
    year: 2024,
    time: "15 días",
    category: "E-commerce"
  },
  {
    id: "vitalight",
    image: project5,
    title: "Vitalight",
    description: "Página web Ecommerce de venta de productos naturales.",
    longDescription: "Vitalight es una tienda online especializada en productos naturales y suplementos para el bienestar. La plataforma ofrece una amplia gama de productos orgánicos con información detallada sobre ingredientes y beneficios para la salud.",
    technologies: ["React", "Node.js", "TailwindCSS", "Supabase", "AOS"],
    features: [
      "Catálogo de productos naturales",
      "Carrito de compras",
      "Sección de Inicio",
      "Sección de Nosotros",
    ],
    liveUrl: "https://vitalightienda.com/",
    githubUrl: "https://github.com/Grobles-Inc/vitalight",
    year: 2025,
    time: "10 días",
    category: "E-commerce"
  },
  {
    id: "nido-perulina",
    image: project7,
    title: "Nido Perulina",
    description: "Plataforma educativa para la gestión de centros de educación inicial.",
    longDescription: "Nido Perulina es una plataforma educativa integral diseñada para la gestión completa de centros de educación inicial. La plataforma facilita la administración de estudiantes, profesores, actividades y comunicación con los padres de familia.",
    technologies: ["Astro", "Node.js", "TailwindCSS", "Netlify", "AOS"],
    features: [
      "Sección de Inicio",
      "Sección de Nosotros",
      "Sección de Servicios",
      "Sección de Ambientes",
      "Sección de Contacto",
    ],
    liveUrl: "https://nidoperulina.edu.pe/",
    githubUrl: "https://github.com/Grobles-Inc/nido",
    year: 2025,
    time: "1 mes",
    category: "Landing Page"
  },
  {
    id: "mlstreaming",
    image: project9,
    title: "MLStreaming",
    description: "MLStreaming es un sistema web que permite gestionar y comercializar cuentas de plataformas de streaming.",
    longDescription: "MLStreaming es una plataforma innovadora que permite a los usuarios gestionar y comercializar cuentas de las principales plataformas de streaming. El sistema incluye herramientas de administración, seguimiento de uso y un marketplace integrado para la venta de cuentas.",
    technologies: ["React", "ShadCN", "Supabase", "TailwindCSS"],
    features: [
      "Sistema de roles de usuarios",
      "Panel de administración",
      "Sistema de creditos",
      "Stock y Pedidos",
      "Monitoreo de billeteras"
    ],
    liveUrl: "https://mlstreaming.com/",
    githubUrl: "https://github.com/Grobles-Inc/streaming",
    year: 2025,
    time: "20 días",
    category: "Sistema Web"
  },
  {
    id: "tu-techo-ahora",
    image: project10,
    title: "Tu Techo Ahora",
    description: "Plataforma web para promocionar propiedades inmobiliarias con panel de administración integrado.",
    longDescription: "Tu Techo Ahora es una plataforma web especializada en la promoción de propiedades inmobiliarias. Incluye un panel de administración completo que permite gestionar propiedades, clientes potenciales y realizar seguimiento de ventas de manera eficiente.",
    technologies: ["Astro", "TailwindCSS", "Vercel", "Cloudinary"],
    features: [
      "Sección de Inicio",
      "Sección de Nosotros",
      "Sección de Propiedades",
      "Panel de administración",
      "CRUD de propiedades",
    ],
    liveUrl: "https://www.tutechoahora.com/",
    githubUrl: "https://github.com/Grobles-Inc/tutechoahora",
    year: 2025,
    time: "12 días",
    category: "Sistema Web"
  },
  {
    id: "wild-horse-carwash",
    image: project11,
    title: "Wild Horse CarWash Mobile",
    description: "Landing Page para promocionar servicios de limpieza de autos y captar clientes.",
    longDescription: "Wild Horse CarWash Mobile es una landing page optimizada para dispositivos móviles que promociona servicios de limpieza de autos. La página está diseñada para maximizar la conversión de visitantes en clientes mediante un diseño atractivo y un proceso de contacto simplificado.",
    technologies: ["Astro", "Tailwind CSS", "Vercel", "AOS"],
    features: [
      "Sección de Inicio",
      "Sección de Nosotros",
      "Sección de Servicios",
      "Sección de Contacto",
    ],
    liveUrl: "https://wildhorsecarwashmobile.com/",
    githubUrl: "https://github.com/Grobles-Inc/mustang",
    year: 2025,
    time: "17 días",
    category: "Landing Page"
  },
  {
    id: "andina-group",
    image: project12,
    title: "Andina Group E.I.R.L.",
    description: "Landing Page de promoción de servicios generales para el hogar y negocios.",
    longDescription: "Andina Group E.I.R.L. es una landing page corporativa que presenta los servicios generales ofrecidos para hogares y negocios. La página incluye información detallada sobre cada servicio, testimonios de clientes y un sistema de contacto directo.",
    technologies: ["Astro", "Tailwind CSS", "Vercel", "AOS", "LucideIcons"],
    features: [
      "Sección de Inicio",
      "Sección de Nosotros",
      "Sección de Servicios",
      "Sección de Contacto",
    ],
    liveUrl: "https://www.andinagroup.org/",
    githubUrl: "https://github.com/kralion/andina",
    year: 2025,
    time: "7 días",
    category: "Landing Page"
  },
  {
    id: "cp-360°",
    image: project13,
    title: "Sistema CP-360°",
    description: "Landing Page para promocionar el sistema CP-360°.",
    longDescription: "Sistema CP-360° es una plataforma web para la gestión de proyectos de construcción. La landing page fue desarrollada con el propósito de promocionar dicho sistema y atraer clientes potenciales. La página está diseñada para ser fácil de navegar y una buena experiencia de usuario.",
    technologies: ["Astro", "Tailwind CSS", "Vercel", "AOS"],
    features: [
      "Sección de Inicio",
      "Sección de Servicios",
      "Sección de Características",
      "Sección de Paquetes",
      "Sección de Aliados",
      "Sección de Contacto",
    ],
    liveUrl: "https://cp360-landing.abccostos.com/",
    githubUrl: "https://github.com/Grobles-Inc/landing-cp360",
    year: 2025,
    time: "5 días",
    category: "Landing Page"
  },
  {
    id: "accessio",
    image: project14,
    title: "Accessio",
    description: "Landing Page para promocionar el sistema Accessio.",
    longDescription: "Accessio es una plataforma web que permite gestionar y comercializar cuentas de las principales plataformas de streaming. El sistema incluye herramientas de administración, seguimiento de uso y un marketplace integrado para la venta de cuentas.",
    technologies: ["Framer", "Framer Motion", "Lenis"],
    features: [
      "Sección de Inicio",
      "Sección de Beneficios",
      "Sección de Características",
      "Sección de Precios",
    ],
    liveUrl: "https://accesio.framer.website",
    githubUrl: "https://github.com/Grobles-Inc/accessio",
    year: 2025,
    time: "20 días",
    category: "Landing Page"
  },
  {
    id: "grobles-store",
    image: project15,
    title: "Grobles Store",
    description: "Landing Page para promocionar el sistema de comercio de Grobles Studio.",
    longDescription: "Grobles Store es una plataforma web para la promoción de venta de sitios web y sistemas. La landing page fue desarrollada con el propósito de promocionar dicho sistema y atraer clientes potenciales. La página está diseñada para ser fácil de navegar y una buena experiencia de usuario.",
    technologies: ["React", "Tailwind CSS", "Lenis", "AOS", "Vercel"],
    features: [
      "Sección de Inicio",
      "Sección de Nosotros",
      "Sección de Templates"
    ],
    liveUrl: "https://grobles-store.vercel.app/",
    githubUrl: "https://github.com/MiguelRequenaR/grobles-store",
    year: 2025,
    time: "3 días",
    category: "Landing Page"
  }
]

export default projectsData;
