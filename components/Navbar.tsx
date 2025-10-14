"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = ["hero", "about", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-accent-primary/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold text-foreground hover:text-accent-primary transition-colors"
          >
            <span className="text-accent-primary">JN</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? "text-accent-primary bg-accent-primary/10"
                    : "text-foreground/80 hover:text-foreground hover:bg-surface/50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/jainavas"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-accent-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="px-4 py-2 bg-accent-primary text-background rounded-lg text-sm font-semibold hover:bg-accent-primary/90 transition-all"
            >
              Let&apos;s Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-surface/50 transition-colors"
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              menu?.classList.toggle("hidden");
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className="hidden md:hidden bg-background/98 backdrop-blur-md border-t border-accent-primary/20"
      >
        <div className="px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                document.getElementById("mobile-menu")?.classList.add("hidden");
              }}
              className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all ${
                activeSection === item.id
                  ? "text-accent-primary bg-accent-primary/10"
                  : "text-foreground/80 hover:text-foreground hover:bg-surface/50"
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 space-y-2">
            <a
              href="https://github.com/jainavas"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3 text-center border-2 border-accent-secondary text-accent-secondary rounded-lg font-medium hover:bg-accent-secondary hover:text-background transition-all"
            >
              GitHub
            </a>
            <button
              onClick={() => {
                scrollToSection("contact");
                document.getElementById("mobile-menu")?.classList.add("hidden");
              }}
              className="block w-full px-4 py-3 bg-accent-primary text-background rounded-lg font-semibold hover:bg-accent-primary/90 transition-all"
            >
              Let&apos;s Talk
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
