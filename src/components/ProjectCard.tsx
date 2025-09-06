import { Link } from "react-router-dom";
import projectsData from "../data/ProjectsData"
import { MoveUpRight } from "lucide-react";

interface ProjectCardProps {
  limit?: number;
}

export default function ProjectCard({limit}: ProjectCardProps) {

  const projects = limit ? projectsData.slice(-limit) : projectsData;

  return (
    <div className="" data-aos="fade-up">
      {projects.map((project) => (
        <Link
          key={project.id}
          to={`/projects/${project.id}`}
          className="block"
        >
          <div
            className="flex flex-col lg:flex-row items-start lg:items-center p-5 hover:bg-[#1c1a19] rounded-xl transition-all duration-300 ease-in-out cursor-pointer gap-5 group"
          >
            <img src={project.image} alt={project.title} className="w-full lg:w-52 rounded-xl mb-4 lg:mb-0" />
            <div className="space-y-2 text-white flex-1">
              <h3 className="text-xl lg:text-2xl font-bold">{project.title}</h3>
              <p className="text-sm lg:text-base">{project.description}</p>
            </div>
            <div className="ml-auto transform transition-transform duration-300 group-hover:-translate-y-2 group-hover:translate-x-2 hidden lg:block">
              <MoveUpRight className="w-6 h-6 text-primary" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
