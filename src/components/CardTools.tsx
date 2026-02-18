
const herramientas = [
  {
    nombre: "React",
    descripcion: "UI basada en componentes y estado reactivo",
    imagen: "https://img.icons8.com/?size=80&id=asWSSTBrDlTW&format=png",
    alt: "React"
  },
  {
    nombre: "Angular",
    descripcion: "Framework completo para aplicaciones empresariales",
    imagen: "https://img.icons8.com/?size=80&id=l9a5tcSnBwcf&format=png",
    alt: "Angular"
  },
  {
    nombre: "Vue.js",
    descripcion: "Framework progresivo y fácil de integrar",
    imagen: "https://img.icons8.com/?size=48&id=BUnExfsRs3CW&format=png",
    alt: "Vue.js"
  },
  {
    nombre: "Java",
    descripcion: "Backend robusto y multiplataforma",
    imagen: "https://img.icons8.com/?size=48&id=13679&format=png",
    alt: "Java"
  },
  {
    nombre: "JavaScript",
    descripcion: "Lenguaje del navegador y del ecosistema fullstack",
    imagen: "https://img.icons8.com/?size=48&id=108784&format=png",
    alt: "JavaScript"
  },
  {
    nombre: "Python",
    descripcion: "Backend, scripts y análisis de datos",
    imagen: "https://img.icons8.com/?size=48&id=13441&format=png",
    alt: "Python"
  },
  {
    nombre: "TypeScript",
    descripcion: "Lenguaje tipado para JavaScript y desarrollo fullstack",
    imagen: "https://img.icons8.com/?size=80&id=uJM6fQYqDaZK&format=png",
    alt: "TypeScript"
  },
  {
    nombre: "Tailwind CSS",
    descripcion: "Estilos con clases utilitarias",
    imagen: "https://img.icons8.com/?size=48&id=CIAZz2CYc6Kc&format=png",
    alt: "Tailwind CSS"
  },
  {
    nombre: "React Native",
    descripcion: "Apps móviles iOS y Android con React",
    imagen: "https://img.icons8.com/?size=80&id=asWSSTBrDlTW&format=png",
    alt: "React"
  },
  {
    nombre: "Node.js",
    descripcion: "JavaScript en el servidor y APIs",
    imagen: "https://img.icons8.com/?size=80&id=54087&format=png",
    alt: "Node.js"
  },
  {
    nombre: "Supabase",
    descripcion: "Backend y base de datos en tiempo real (BaaS)",
    imagen: "https://img.icons8.com/color/512/supabase.png",
    alt: "Supabase"
  },
  {
    nombre: "PostgreSQL",
    descripcion: "Base de datos relacional y escalable",
    imagen: "https://img.icons8.com/?size=80&id=Pv4IGT0TSpt8&format=png",
    alt: "PostgreSQL"
  },
  {
    nombre: "Git",
    descripcion: "Control de versiones y trabajo en equipo",
    imagen: "https://img.icons8.com/?size=80&id=20906&format=png",
    alt: "Git"
  },
  {
    nombre: "Framer",
    descripcion: "Animaciones e interfaces interactivas",
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
