
const herramientas = [
  {
    nombre: "React",
    descripcion: "Herramienta de desarrollo web",
    imagen: "https://img.icons8.com/?size=80&id=asWSSTBrDlTW&format=png",
    alt: "React"
  },
  {
    nombre: "TypeScript",
    descripcion: "Lenguaje tipado para JavaScript",
    imagen: "https://img.icons8.com/?size=80&id=uJM6fQYqDaZK&format=png",
    alt: "TypeScript"
  },
  {
    nombre: "Tailwind CSS",
    descripcion: "Framework de estilos utilitario",
    imagen: "https://img.icons8.com/?size=1200&id=WoopfRcDj3RF&format=jpg",
    alt: "Tailwind CSS"
  },
  {
    nombre: "React Native",
    descripcion: "Herramienta de desarrollo móvil",
    imagen: "https://img.icons8.com/?size=80&id=asWSSTBrDlTW&format=png",
    alt: "React"
  },
  {
    nombre: "Node.js",
    descripcion: "Entorno de ejecución para JavaScript",
    imagen: "https://img.icons8.com/?size=80&id=54087&format=png",
    alt: "Node.js"
  },
  {
    nombre: "Supabase",
    descripcion: "Base de datos",
    imagen: "https://img.icons8.com/color/512/supabase.png",
    alt: "Supabase"
  },
  {
    nombre: "Git",
    descripcion: "Control de versiones",
    imagen: "https://img.icons8.com/?size=80&id=20906&format=png",
    alt: "Git"
  },
  {
    nombre: "Framer",
    descripcion: "Herramienta de diseño de interfaces",
    imagen: "https://framerusercontent.com/images/TvJ9grdPgk3sRz6T6XwkpBrFr4k.png?scale-down-to=512&width=1024&height=1024",
    alt: "Framer"
  }
];

export default function CardTools() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10" data-aos="fade-up">
      {herramientas.map((herramienta) => (
        <div
          key={herramienta.nombre}
          className="flex items-center hover:bg-[#1c1a19] rounded-xl p-5 transition-all duration-300 ease-in-out cursor-pointer gap-5 group"
        >
          <img src={herramienta.imagen} alt={herramienta.alt} className="w-16 h-16 rounded-xl" />
          <div>
            <h4 className="text-white text-2xl font-bold">{herramienta.nombre}</h4>
            <span className="text-gray-500 text-lg">{herramienta.descripcion}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
