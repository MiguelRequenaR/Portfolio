import CardSkills from "../components/CardSkills";
import ExperienceCard from "../components/ExperienceCard";
import CardTools from "../components/CardTools";
import ProjectCard from "../components/ProjectCard";
import GraphicGH from "../components/GraphicGH";

export default function Home() {

  const experience = [
    {
      number: "+4",
      label: "años de experiencia"
    },
    {
      number: "+12",
      label: "proyectos completados"
    },
    {
      number: "+12",
      label: "clientes satisfechos"
    }
  ]

  return (
    <>
      <div className="space-y-4 px-0 lg:pl-20">
        <div data-aos="fade-up">
          <h1 className="text-5xl text-center lg:text-left lg:text-[110px] font-bold text-white">
            SOFTWARE <span className="text-primary">ENGINEER</span>
          </h1>
          <p
            className="text-lg text-white text-center lg:text-left mt-10"
          >
            Soy un programador con una sólida formación y experiencia, en el ámbito del Desarrollo Web y Mobile.
          </p>
          <div className="flex gap-10 mt-15 mx-auto flex-col lg:flex-row">
            {experience.map((item) => (
              <div className="flex flex-col items-center" key={item.label}>
                <span className="text-5xl lg:text-[70px] font-bold text-primary">{item.number}</span>
                <span className="text-lg text-white">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Cards Skills */}
        <CardSkills />
        {/* Proyectos Recientes */}
        <div className="py-10">
          <h1 className="text-5xl text-center lg:text-left lg:text-[90px] font-bold text-white" data-aos="fade-down">
            PROYECTOS <span className="text-primary">RECIENTES</span>
          </h1>
          <ProjectCard limit={3} />
        </div>
        {/* Experiencia */}
        <div className="py-10">
          <h1 className="text-5xl text-center lg:text-left lg:text-[90px] font-bold text-white" data-aos="fade-down">
            +4 AÑOS DE <span className="text-primary">EXPERIENCIA</span>
          </h1>
          <ExperienceCard />
        </div>
        {/* Herramientas */}
        <div className="py-10">
          <h1 className="text-5xl text-center lg:text-left lg:text-[90px] font-bold text-white" data-aos="fade-down">
            TECNOLOGIAS <span className="text-primary">PRINCIPALES</span>
          </h1>
          <CardTools />
        </div>
        {/* Gráfico de Contribuciones de Github */}
        <div className="py-10">
          <h1 className="text-5xl text-center lg:text-left lg:text-[90px] font-bold text-white pb-10" data-aos="fade-down">
            GRÁFICO DE <span className="text-primary">GITHUB</span>
          </h1>
          <GraphicGH />
        </div>
      </div>
    </>
  )
}
