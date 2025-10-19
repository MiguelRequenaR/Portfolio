import CardTools from "../components/CardTools";

export default function Technology() {
  return (
    <div className="space-y-4 px-0 lg:pl-20 ">
      <h1 className="text-5xl text-center lg:text-left lg:text-[90px] font-black text-white" data-aos="fade-down">
        TECNOLOGIAS <span className="text-primary">PRINCIPALES</span>
      </h1>
      <p className="text-white text-lg text-center lg:text-left py-10" data-aos="fade-up">
        En esta sección puedes ver algunas de las tecnologías que he utilizado en mis proyectos. Cada tecnología refleja mi compromiso con la calidad, la innovación y la satisfacción del cliente. Si deseas conocer más detalles sobre alguna tecnología en particular, no dudes en contactarme.
      </p>
      <CardTools />
    </div>
  )
}
