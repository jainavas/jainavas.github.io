export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Get In Touch</h2>
          <p className="text-lg text-foreground/80 mb-2">
            I&apos;m always open to new opportunities and collaborations.
          </p>
          <p className="text-foreground/60">
            Feel free to reach out if you&apos;d like to work together!
          </p>
        </div>

        {/* Primary Contact */}
        <div className="bg-surface rounded-lg p-8 border border-accent-primary/20 mb-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">✉️</span>
            <h3 className="text-2xl font-semibold text-foreground">Email</h3>
          </div>
          <a
            href="mailto:jaimeipod99@gmail.com"
            className="text-xl text-accent-primary hover:text-accent-primary/80 transition-colors font-medium"
          >
            jaimeipod99@gmail.com
          </a>
        </div>

        {/* Social Links Grid */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <a
            href="https://github.com/jainavas"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-surface rounded-lg p-6 border border-accent-primary/20 hover:border-accent-primary/40 transition-all hover:scale-105 group text-center"
          >
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🐙</div>
            <h4 className="text-lg font-semibold text-foreground mb-1">GitHub</h4>
            <p className="text-sm text-foreground/60">@jainavas</p>
          </a>

          <a
            href="https://linkedin.com/in/jaimenavascues-p"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-surface rounded-lg p-6 border border-accent-secondary/20 hover:border-accent-secondary/40 transition-all hover:scale-105 group text-center"
          >
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">💼</div>
            <h4 className="text-lg font-semibold text-foreground mb-1">LinkedIn</h4>
            <p className="text-sm text-foreground/60">Jaime Navascués</p>
          </a>

          <a
            href="mailto:jaimeipod99@gmail.com"
            className="bg-surface rounded-lg p-6 border border-accent-primary/20 hover:border-accent-primary/40 transition-all hover:scale-105 group text-center"
          >
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">📧</div>
            <h4 className="text-lg font-semibold text-foreground mb-1">Email</h4>
            <p className="text-sm text-foreground/60">Direct Contact</p>
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="mailto:jaimeipod99@gmail.com"
            className="px-8 py-3 bg-accent-primary text-background rounded-lg hover:bg-accent-primary/90 transition-all hover:scale-105 font-semibold shadow-lg shadow-accent-primary/20"
          >
            Send Email
          </a>
          <a
            href="https://github.com/jainavas"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-accent-secondary text-accent-secondary rounded-lg hover:bg-accent-secondary hover:text-background transition-all hover:scale-105 font-semibold"
          >
            View GitHub
          </a>
          <a
            href="https://linkedin.com/in/jaimenavascues-p"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-accent-primary text-accent-primary rounded-lg hover:bg-accent-primary hover:text-background transition-all hover:scale-105 font-semibold"
          >
            Connect on LinkedIn
          </a>
        </div>

        {/* Availability Status */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent-primary/10 border border-accent-primary/30 rounded-full">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-primary"></span>
            </span>
            <span className="text-sm font-medium text-foreground">Available for opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
}
