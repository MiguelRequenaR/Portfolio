import { Link } from "react-router-dom";
import { Home, Folder, Wrench } from "lucide-react";

export default function NavBar() {

  const links = [
    {
      to: "/",
      label: "Inicio",
      icon: Home,
    },
    {
      to: "/projects",
      label: "Proyectos",
      icon: Folder,
    },
    {
      to: "/technologies",
      label: "Tecnologías",
      icon: Wrench,
    },
  ]

  return (
    <div className="bg-[#1c1a19] flex w-fit mx-auto p-4 m-4 rounded-full text-white gap-5">
      {links.map((link) => (
        <Link to={link.to} className="group relative flex flex-col items-center" key={link.to}>
          <link.icon className="transition-transform group-hover:scale-110" />
          <span className="absolute top-full mt-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap bg-[#2d2b2a] rounded-full text-white px-2 py-1">
            {link.label}
          </span>
        </Link>
      ))}
    </div>
  )
}
