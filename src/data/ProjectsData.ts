import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"
import project4 from "../assets/project4.png"
import project5 from "../assets/project5.png"
import project6 from "../assets/project6.png"
import project7 from "../assets/project7.png"
import project8 from "../assets/project8.png"
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
    title: "Proyecto 1",
    description: "Descripción del proyecto 1",
  },
  {
    image: project2,
    title: "Proyecto 2",
    description: "Descripción del proyecto 2",
  },
  {
    image: project3,
    title: "Proyecto 3",
    description: "Descripción del proyecto 3",
  },
  {
    image: project4,
    title: "Proyecto 4",
    description: "Descripción del proyecto 4",
  },
  {
    image: project5,
    title: "Proyecto 5",
    description: "Descripción del proyecto 5",
  },
  {
    image: project6,
    title: "Proyecto 6",
    description: "Descripción del proyecto 6",
  },
  {
    image: project7,
    title: "Proyecto 7",
    description: "Descripción del proyecto 7",
  },
  {
    image: project8,
    title: "Proyecto 8",
    description: "Descripción del proyecto 8",
  },
  {
    image: project9,
    title: "Proyecto 9",
    description: "Descripción del proyecto 9",
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
