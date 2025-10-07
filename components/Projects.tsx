const projects = [
  {
    title: "Project One",
    description: "A full-stack web application built with Next.js and Node.js",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Project Two",
    description: "An e-commerce platform with real-time inventory management",
    tech: ["React", "Express", "MongoDB"],
    link: "#",
  },
  {
    title: "Project Three",
    description: "A mobile-first progressive web app for task management",
    tech: ["React", "Firebase", "PWA"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-blue-500 hover:text-blue-600 font-semibold"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
