"use client";

import { useState } from "react";
import ProjectModal from "./ProjectModal";

interface Project {
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  features?: string[];
  images?: string[];
  githubLink?: string;
  liveLink?: string;
}

const projectCategories = [
  {
    category: "Systems & Graphics",
    color: "accent-primary",
    projects: [
      {
        title: "Raycasting Engine",
        description: "A 3D graphics engine built from scratch using raycasting algorithms",
        tech: ["C", "Graphics", "Mathematics"],
      },
      {
        title: "Bash Shell Reimplementation",
        description: "Custom shell implementation with command parsing and execution",
        tech: ["C", "Unix", "System Calls"],
      },
    ],
  },
  {
    category: "AI & Algorithms",
    color: "accent-secondary",
    projects: [
      {
        title: "Gomoku AI",
        description: "Five-in-a-row game with intelligent AI opponent using minimax algorithm with alpha-beta pruning for optimal decision-making",
        longDescription: `This project implements a fully functional Gomoku (Five-in-a-Row) game with an intelligent AI opponent built in C++.

The AI uses the minimax algorithm enhanced with alpha-beta pruning to evaluate potential moves and make optimal decisions. The game features a graphical interface and allows players to compete against an AI that can think several moves ahead.

The implementation demonstrates advanced game theory concepts, efficient tree search algorithms, and optimization techniques to make the AI both smart and responsive.`,
        tech: ["C++", "AI", "Minimax", "Game Theory"],
        features: [
          "Minimax algorithm with alpha-beta pruning for optimal move selection",
          "Graphical user interface for intuitive gameplay",
          "Configurable AI difficulty levels",
          "Efficient board state evaluation",
          "Win condition detection and pattern recognition",
        ],
        githubLink: "https://github.com/jainavas/gomoku",
      },
      {
        title: "Algorithm Visualizer",
        description: "Interactive visualization of sorting and pathfinding algorithms",
        tech: ["Python", "Algorithms", "Visualization"],
      },
    ],
  },
  {
    category: "Web & Tools",
    color: "accent-primary",
    projects: [
      {
        title: "Portfolio Website",
        description: "Personal portfolio built with Next.js and custom design",
        tech: ["Next.js", "TypeScript", "Tailwind"],
      },
      {
        title: "CLI Automation Suite",
        description: "Collection of bash scripts for development workflow automation",
        tech: ["Bash", "Shell Scripting", "DevOps"],
      },
    ],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <>
      <section id="projects" className="py-20 px-4 bg-surface">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">My Projects</h2>
          <div className="space-y-16">
            {projectCategories.map((category, catIndex) => (
              <div key={catIndex}>
                <h3 className={`text-2xl font-bold mb-6 text-${category.color} flex items-center gap-3`}>
                  <span className={`w-12 h-1 bg-${category.color} rounded`}></span>
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {category.projects.map((project, projIndex) => (
                    <div
                      key={projIndex}
                      className="bg-background rounded-lg p-6 border border-accent-primary/20 hover:border-accent-primary/40 transition group"
                    >
                      <h4 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent-primary transition">
                        {project.title}
                      </h4>
                      <p className="text-foreground/70 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-accent-secondary/20 text-accent-secondary rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <button
                        onClick={() => openModal(project)}
                        className="text-accent-primary hover:text-accent-primary/80 font-semibold inline-flex items-center gap-2"
                      >
                        View Project →
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={closeModal}
          project={selectedProject}
        />
      )}
    </>
  );
}
