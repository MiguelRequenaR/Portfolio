
export default function ExperienceCard() {

  const experiences = [
    {
      title: "Desarrollador Web Freelance",
      description: "He trabajado como freelance en más de 10 proyectos para pequeñas empresas y clientes independientes, desarrollando desde sitios web corporativos hasta aplicaciones web de mayor complejidad. Mi prioridad ha sido siempre entregar soluciones eficientes, escalables y fáciles de mantener, asegurando además una comunicación fluida y profesional durante cada etapa del proyecto.",
      date: "Enero 2023 - Actualidad"
    },
    {
      title: "Desarrollador Frontend - Grobles",
      description: "Actualmente formo parte de la startup Grobles como desarrollador frontend, donde participo en el diseño y desarrollo de diversas soluciones digitales. Mi labor se centra en implementar interfaces intuitivas y dinámicas, optimizando la experiencia del usuario y aplicando metodologías ágiles para lograr productos de alta calidad.",
      date: "Enero 2024 - Actualidad"
    },
    {
      title: "Desarrollador de Aplicaciones Móviles - Grobles",
      description: "Desarrollé aplicaciones móviles publicadas en Play Store, incluyendo soluciones para gestión de pedidos en restaurantes y control de gastos personales. Mi enfoque se ha orientado en crear productos intuitivos, con un diseño atractivo y un rendimiento estable, utilizando tecnologías como React Native y Expo. Estas aplicaciones han pasado por fases de pruebas con usuarios reales, lo que me permitió optimizarlas según sus necesidades.",
      date: "Marzo 2024 - Enero 2025"
    }
  ]
  return (
    <>
      {experiences.map((experience) => (
        <div className="hover:bg-[#1c1a19] rounded-xl p-5 transition-all duration-300 ease-in-out cursor-pointer gap-5 group my-10 space-y-3" data-aos="fade-up" key={experience.title}>
          <h3 className="text-white text-2xl font-bold">{experience.title}</h3>
          <p className="text-gray-500">{experience.description}</p>
          <span className="text-white font-bold">{experience.date}</span>
        </div>
      ))}
    </>
  )
}
