import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
        <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-slate-900">
          My <span className="text-blue-600">Projects</span>
        </h1>
        <p className="mb-10 max-w-2xl text-base text-slate-600">
          Web applications and side projects built with the MERN stack and modern frontend tools.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tech={project.tech}
              github={project.github}
              demo={project.demo}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
