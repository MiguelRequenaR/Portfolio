import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <div className="space-y-4 px-0 lg:pl-20">
      <h1 className="text-5xl text-center lg:text-left lg:text-[90px] font-bold text-white">
        PROYECTOS <span className="text-primary">RECIENTES</span>
      </h1>
      <p className="text-white text-center lg:text-left py-10">
        En esta sección puedes ver algunos de los proyectos que he realizado. Cada proyecto refleja mi compromiso con la calidad, la innovación y la satisfacción del cliente. Si deseas conocer más detalles sobre algún proyecto en particular, no dudes en contactarme.
      </p>
      <ProjectCard />
    </div>
  )
}
