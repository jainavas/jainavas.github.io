export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-foreground">About Me</h2>
        <div className="bg-surface rounded-lg p-8 border border-accent-primary/20">
          <p className="text-lg mb-4 text-foreground/90">
            I&apos;m a versatile software engineer who thrives across different programming paradigms
            and languages. My journey spans from low-level systems programming to high-level AI implementations.
          </p>
          <p className="text-lg mb-4 text-foreground/90">
            My expertise includes <span className="text-accent-primary font-semibold">C/C++</span> for
            systems programming, <span className="text-accent-primary font-semibold">Python</span> for
            AI and algorithms, <span className="text-accent-primary font-semibold">Bash</span> for
            scripting and automation, and web technologies when needed.
          </p>
          <p className="text-lg text-foreground/90">
            I&apos;m driven by challenging problems that require creative solutions—whether
            it&apos;s implementing raycasting engines, designing AI game opponents, or building
            efficient system tools.
          </p>
        </div>
      </div>
    </section>
  );
}
