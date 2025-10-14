"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide scroll indicator after scrolling down 100px
      setShowScroll(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 bg-background relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-accent-secondary/5 animate-gradient"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface/50 backdrop-blur-sm border border-accent-primary/20 rounded-full mb-8">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-primary"></span>
          </span>
          <span className="text-sm text-foreground/80">Available for opportunities</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
          Hi, I&apos;m <span className="text-accent-primary bg-clip-text">Jaime Navascués</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/80 mb-4">
          Software Developer & Problem Solver
        </p>
        
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent-primary"></div>
          <p className="text-base text-accent-secondary font-medium">
            Systems Programming • AI • Data Engineering
          </p>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent-primary"></div>
        </div>
        
        <p className="text-lg text-foreground/60 max-w-2xl mx-auto mb-12 leading-relaxed">
          Student at <span className="text-accent-primary font-semibold">42 Madrid</span> with strong expertise in C/C++ systems programming.
          Currently expanding into data science and data engineering to build scalable data-driven solutions.
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap mb-8">
          <a
            href="#projects"
            className="px-8 py-3 bg-accent-primary text-background rounded-lg hover:bg-accent-primary/90 transition-all hover:scale-105 font-semibold shadow-lg shadow-accent-primary/20"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-accent-secondary text-accent-secondary rounded-lg hover:bg-accent-secondary hover:text-background transition-all hover:scale-105 font-semibold"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        {showScroll && (
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
            <a href="#about" className="flex flex-col items-center gap-2 text-foreground/40 hover:text-foreground/60 transition-colors">
              <span className="text-xs uppercase tracking-wider">Scroll Down</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
