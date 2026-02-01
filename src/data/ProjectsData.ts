import ordee from "../assets/ordee.webp"
import vitalight from "../assets/vitalight.webp"
import nidoPerulina from "../assets/nidoperulina.webp"
import mlStreaming from "../assets/mlstreaming.webp"
import tuTechoAhora from "../assets/tutechoahora.webp"
import wildHorse from "../assets/wildhorse.webp"
import andinaGroup from "../assets/andinagroup.webp"
import landing360 from "../assets/landing360.webp"
import industriaRlc from "../assets/industriarlc.webp"
import rlcacademy from "../assets/rlcacademy.webp"
import rlcacademyAula from "../assets/rlcacademyaula.webp"

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
    image: ordee,
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
    id: "vitalight",
    image: vitalight,
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
    image: nidoPerulina,
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
    image: mlStreaming,
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
    image: tuTechoAhora,
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
    image: wildHorse,
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
    image: andinaGroup,
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
    image: landing360,
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
    id: "industria-rlc",
    image: industriaRlc,
    title: "Industria RLC",
    description: "Landing Page para promocionar los servicios de la empresa Industria RLC.",
    longDescription: "Industria RLC es una empresa que ofrece servicios de electricidad, construcción y acabados, sistemas de automatización, e ingeniería.",
    technologies: ["NextJS", "React", "TailwindCSS", "Vercel", "AOS"],
    features: [
      "Sección de Inicio",
      "Sección de Nosotros",
      "Sección de Servicios",
      "Sección de Experiencia",
      "Sección de Productos"
    ],
    liveUrl: "https://www.industriarlc.com/",
    githubUrl: "https://github.com/MiguelRequenaR/industria-rlc",
    year: 2026,
    time: "25 días",
    category: "Landing Page"
  },
  {
    id: "rlc-academy",
    image: rlcacademy,
    title: "RLC Academy",
    description: "Landing Page para promocionar los cursos y capacitaciones de la empresa RLC Academy.",
    longDescription: "RLC Academy es una plataforma web para la gestión de cursos y capacitaciones. La landing page fue desarrollada con el propósito de promocionar dichos cursos y atraer estudiantes potenciales. La página está diseñada para ser fácil de navegar y una buena experiencia de usuario.",
    technologies: ["NextJS", "React", "TailwindCSS", "Vercel", "AOS"],
    features: [
      "Sección de Inicio",
      "Sección de Cursos",
      "Sección de Nosotros",
      "Sección de Blog",
      "Sección de Certificados"
    ],
    liveUrl: "https://academia.industriarlc.com/",
    githubUrl: "https://github.com/MiguelRequenaR/industria-rlc",
    year: 2026,
    time: "25 días",
    category: "Landing Page"
  },
  {
    id: "rlc-academy-aula",
    image: rlcacademyAula,
    title: "RLC Academy Aula Virtual",
    description: "Sistema Web para la gestión de cursos y capacitaciones.",
    longDescription: "RLC Academy Aula Virtual es un sistema web para la gestión de cursos y capacitaciones. El sistema web fue desarrollado con el propósito de gestionar los cursos y capacitaciones de la empresa. La página está diseñada para ser fácil de navegar y una buena experiencia de usuario.",
    technologies: ["NextJS", "React", "TailwindCSS", "Vercel", "AOS"],
    features: [
      "Inicio de Sesión",
      "Registro de Usuarios",
      "Gestión por Roles",
      "Gestión de Usuarios",
      "Gestión de Cursos",
      "Gestión de Invitaciones",
      "Generación de Certificados",
      "Gestión de Calificaciones"
    ],
    liveUrl: "https://aula.industriarlc.com/login",
    githubUrl: "https://github.com/MiguelRequenaR/industria-rlc",
    year: 2026,
    time: "25 días",
    category: "Landing Page"
  },
]

export default projectsData;
