import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project4 from "../assets/project4.png"
import project5 from "../assets/project5.png"
import project7 from "../assets/project7.png"
import project9 from "../assets/project9.png"
import project10 from "../assets/project10.png"
import project11 from "../assets/project11.png"
import project12 from "../assets/project12.png"


export interface Project {
  image: string;
  title: string;
  description: string;
}

export const projectsData: Project[] = [
  {
    image: project1,
    title: "Ordee",
    description: "Aplicación móvil para la gestión de ordenes en restaurantes.",
  },
  {
    image: project2,
    title: "Monedo",
    description: "Aplicación móvil para la gestión de finanzas personales.",
  },
  {
    image: project4,
    title: "Blue Motors",
    description: "Página web Ecommerce de venta de motocicletas.",
  },
  {
    image: project5,
    title: "Vitalight",
    description: "Página web Ecommerce de venta de productos naturales.",
  },
  {
    image: project7,
    title: "Nido Perulina",
    description: "Plataforma educativa para la gestión de centros de educación inicial.",
  },
  {
    image: project9,
    title: "MLStreaming",
    description: "MLStreaming es un sistema web que permite gestionar y comercializar cuentas de plataformas de streaming.",
  },
  {
    image: project10,
    title: "Tu Techo Ahora",
    description: "Plataforma web para promocionar propiedades inmobiliarias con panel de administración integrado.",
  },
  {
    image: project11,
    title: "Wild Horse CarWash Mobile",
    description: "Landing Page para promocionar servicios de limpieza de autos y captar clientes.",
  },
  {
    image: project12,
    title: "Andina Group E.I.R.L.",
    description: "Landing Page de promoción de servicios generales para el hogar y negocios.",
  }
]

export default projectsData;
