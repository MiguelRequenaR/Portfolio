import CardSkills from "../components/CardSkills";

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
      <div className="space-y-4 px-20">
        <h1 className="text-[110px] font-bold text-white">
          SOFTWARE <span className="text-primary">ENGINEER</span>
        </h1>
        <p 
          className="text-lg text-white"
        >
          Hola, soy Miguel, soy una persona apacionada por la tecnología y el desarrollo de software.
        </p>
        <div className="flex gap-10 mt-15 mx-auto">
          {experience.map((item) => (
            <div className="flex flex-col items-center" key={item.label}>
              <span className="text-[70px] font-bold text-primary">{item.number}</span>
              <span className="text-lg text-white">{item.label}</span>
            </div>
          ))}
        </div>
        {/* Cards Skills */}
        <CardSkills />
        <div>
        <h1 className="text-[90px] font-bold text-white">
          PROYECTOS <span className="text-primary">RECIENTES</span>
        </h1>
        </div>
      </div>
    </>
  )
}
