import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-foreground">About Me</h2>
        
        {/* Profile Section - Picture and Stats Side by Side */}
        <div className="flex justify-center mb-8">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl w-full">
            {/* Profile Picture */}
            <div className="flex justify-center md:justify-end">
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border-4 border-accent-primary/30 shadow-2xl group">
                <Image
                  src="/solocara.jpg"
                  alt="Jaime Navascués"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 256px, 288px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="flex flex-col justify-center space-y-3 md:max-w-sm">
              <div className="bg-surface rounded-lg p-4 border border-accent-primary/20 hover:border-accent-primary/40 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <div className="text-accent-primary font-semibold">Location</div>
                    <div className="text-foreground/90">Madrid, Spain</div>
                  </div>
                </div>
              </div>
              <div className="bg-surface rounded-lg p-4 border border-accent-secondary/20 hover:border-accent-secondary/40 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎓</span>
                  <div>
                    <div className="text-accent-secondary font-semibold">Education</div>
                    <div className="text-foreground/90">42 Madrid</div>
                  </div>
                </div>
              </div>
              <div className="bg-surface rounded-lg p-4 border border-accent-primary/20 hover:border-accent-primary/40 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <div className="text-accent-primary font-semibold">Focus Areas</div>
                    <div className="text-foreground/90">
                      Systems Programming<br/>Data Engineering
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Cards */}
        <div className="space-y-6">
          <div className="bg-surface rounded-lg p-6 border border-accent-primary/20 hover:border-accent-primary/40 transition-colors">
            <h3 className="text-2xl font-semibold mb-4 text-accent-primary flex items-center gap-2">
              <span className="text-3xl">👨‍💻</span>
              Software Engineer & Problem Solver
            </h3>
            <p className="text-lg mb-4 text-foreground/90 leading-relaxed">
              I&apos;m a versatile software engineer who thrives across different programming paradigms
              and languages. My journey spans from low-level systems programming to high-level AI implementations,
              with a growing passion for building scalable data-driven solutions.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Currently a student at <span className="text-accent-primary font-semibold">42 Madrid</span>, 
              I&apos;m expanding my expertise into <span className="text-accent-secondary font-semibold">data science</span> and 
              <span className="text-accent-secondary font-semibold"> data engineering</span> to complement my 
              strong foundation in systems programming.
            </p>
          </div>

          <div className="bg-surface rounded-lg p-6 border border-accent-secondary/20 hover:border-accent-secondary/40 transition-colors">
            <h3 className="text-2xl font-semibold mb-4 text-accent-secondary flex items-center gap-2">
              <span className="text-3xl">🚀</span>
              Technical Expertise
            </h3>
            <p className="text-lg mb-4 text-foreground/90 leading-relaxed">
              My expertise includes <span className="text-accent-primary font-semibold">C/C++</span> for
              systems programming and performance-critical applications, 
              <span className="text-accent-primary font-semibold"> Python</span> for
              AI, algorithms, and data analysis, <span className="text-accent-primary font-semibold">Bash</span> for
              scripting and automation, and modern web technologies for full-stack development.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              I&apos;m driven by challenging problems that require creative solutions—whether
              it&apos;s implementing raycasting engines, designing AI game opponents, optimizing graph algorithms,
              or building efficient distributed systems.
            </p>
          </div>

          <div className="bg-surface rounded-lg p-6 border border-accent-primary/20 hover:border-accent-primary/40 transition-colors">
            <h3 className="text-2xl font-semibold mb-4 text-accent-primary flex items-center gap-2">
              <span className="text-3xl">🎯</span>
              What Drives Me
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <div className="font-semibold text-foreground/90">Performance</div>
                  <div className="text-sm text-foreground/70">Optimizing algorithms and systems for maximum efficiency</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🧩</span>
                <div>
                  <div className="font-semibold text-foreground/90">Problem Solving</div>
                  <div className="text-sm text-foreground/70">Tackling complex challenges with elegant solutions</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📊</span>
                <div>
                  <div className="font-semibold text-foreground/90">Data-Driven</div>
                  <div className="text-sm text-foreground/70">Building scalable pipelines and analytical systems</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔧</span>
                <div>
                  <div className="font-semibold text-foreground/90">Systems Design</div>
                  <div className="text-sm text-foreground/70">Creating robust, maintainable architectures</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
