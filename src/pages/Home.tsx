import CardSkills from "../components/CardSkills";
import ExperienceCard from "../components/ExperienceCard";
import CardTools from "../components/CardTools";
import ProjectCard from "../components/ProjectCard";
import FormContact from "../components/FormContact";

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
      <div className="space-y-4 px-0 lg:px-20">
        <div className="">
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
        <div className="py-10">
          <h1 className="text-5xl text-center lg:text-left lg:text-[90px] font-bold text-white">
            PROYECTOS <span className="text-primary">RECIENTES</span>
          </h1>
          <ProjectCard limit={3} />
        </div>
        {/* Experiencia */}
        <div className="py-10">
          <h1 className="text-5xl text-center lg:text-left lg:text-[90px] font-bold text-white">
            +4 AÑOS DE <span className="text-primary">EXPERIENCIA</span>
          </h1>
          <ExperienceCard />
        </div>
        {/* Herramientas */}
        <div className="py-10">
          <h1 className="text-5xl text-center lg:text-left lg:text-[90px] font-bold text-white">
            HERRAMIENTAS <span className="text-primary">PRINCIPALES</span>
          </h1>
          <CardTools />
        </div>
        {/* Contacto */}
        <div className="py-10">
          <h1 className="text-5xl text-center lg:text-left lg:text-[90px] font-bold text-white">
            TRABAJEMOS <span className="text-primary">JUNTOS</span>
          </h1>
          <FormContact />
        </div>
      </div>
    </>
  )
}
