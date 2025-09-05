import projectsData from "../data/ProjectsData"
import { MoveUpRight } from "lucide-react";

interface ProjectCardProps {
  limit?: number;
}

export default function ProjectCard({limit}: ProjectCardProps) {

  const projects = limit ? projectsData.slice(-limit) : projectsData;

  return (
    <div className="">
      {projects.map((project) => (
        <div
          key={project.title}
          className="flex items-center p-5 hover:bg-[#1c1a19] rounded-xl transition-all duration-300 ease-in-out cursor-pointer gap-5 group"
        >
          <img src={project.image} alt={project.title} className="w-40 lg:w-52 rounded-xl" />
          <div className="space-y-2 text-white flex-1">
            <h3 className="text-xl lg:text-2xl font-bold">{project.title}</h3>
            <p className="text-sm lg:text-base">{project.description}</p>
          </div>
          <div className="ml-auto transform transition-transform duration-300 group-hover:-translate-y-2 group-hover:translate-x-2 hidden lg:block">
            <MoveUpRight className="w-6 h-6 text-primary" />
          </div>
        </div>
      ))}
    </div>
  )
}
