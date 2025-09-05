import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from "lucide-react";
import projectsData, { type Project } from "../data/ProjectsData";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();

  const project: Project | undefined = projectsData.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-0 lg:pl-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Proyecto no encontrado</h1>
          <Link
            to="/projects"
            className="text-primary hover:text-primary/80 transition-colors"
          >
            ← Volver a proyectos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 lg:pl-20 py-8">
      {/* Header */}
      <div className="mb-8">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a proyectos
        </Link>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 text-gray-300">
                <Calendar className="w-4 h-4" />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Tag className="w-4 h-4" />
                <span>{project.category}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Image */}
      <div className="mb-12">
        <img
          src={project.image}
          alt={project.title}
          className="w-full rounded-2xl shadow-2xl"
        />
      </div>
      <div className="flex gap-4 pb-10">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white hover:bg-transparent hover:text-primary border border-transparent hover:border-primary px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Ver proyecto
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white hover:bg-transparent hover:text-primary border border-transparent hover:border-primary px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <Github className="w-4 h-4" />
            Código fuente
          </a>
        )}
      </div>

      {/* Project Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Sobre el proyecto</h2>
            <p className="text-gray-300 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Características principales</h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Tecnologías utilizadas</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-white text-primary px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Información del proyecto</h3>
            <div className="space-y-3">
              <div>
                <span className="text-gray-400">Año:</span>
                <span className="text-white ml-2">{project.year}</span>
              </div>
              <div>
                <span className="text-gray-400">Categoría:</span>
                <span className="text-white ml-2">{project.category}</span>
              </div>
              <div>
                <span className="text-gray-400">Tiempo:</span>
                <span className="text-white ml-2">{project.time}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
