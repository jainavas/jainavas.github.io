"use client";

import { useEffect } from "react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    longDescription?: string;
    tech: string[];
    features?: string[];
    images?: string[];
    githubLink?: string;
    liveLink?: string;
  };
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-surface rounded-lg border border-accent-primary/30 shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="sticky top-4 float-right mr-4 mt-4 p-2 text-foreground/60 hover:text-accent-primary transition z-10"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8">
          {/* Header */}
          <h2 className="text-4xl font-bold mb-4 text-foreground">{project.title}</h2>
          <p className="text-xl text-foreground/80 mb-6">{project.description}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-accent-secondary/20 text-accent-secondary rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Long Description */}
          {project.longDescription && (
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-accent-primary">About This Project</h3>
              <p className="text-foreground/80 text-lg leading-relaxed whitespace-pre-line">
                {project.longDescription}
              </p>
            </div>
          )}

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-accent-primary">Key Features</h3>
              <ul className="space-y-3">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground/80 text-lg">
                    <span className="text-accent-secondary mt-1">▸</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Images */}
          {project.images && project.images.length > 0 && (
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-accent-primary">Screenshots</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {project.images.map((image, i) => (
                  <img
                    key={i}
                    src={image}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="rounded-lg border border-accent-primary/20 w-full"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4 flex-wrap mt-8 pt-8 border-t border-accent-primary/20">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-accent-primary text-background rounded-lg hover:bg-accent-primary/90 transition font-semibold inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View on GitHub
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-accent-secondary text-accent-secondary rounded-lg hover:bg-accent-secondary hover:text-background transition font-semibold"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
