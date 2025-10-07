export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
          Hi, I&apos;m <span className="text-accent-primary">Jaime Navascués</span>
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 mb-8">
          Software Developer & Problem Solver
        </p>
        <p className="text-lg text-foreground/60 max-w-2xl mx-auto mb-12">
          Student at 42 Madrid with strong expertise in C/C++ systems programming.
          Currently expanding into data science and data engineering to build scalable data-driven solutions.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="px-8 py-3 bg-accent-primary text-background rounded-lg hover:bg-accent-primary/90 transition font-semibold"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-accent-secondary text-accent-secondary rounded-lg hover:bg-accent-secondary hover:text-background transition font-semibold"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
