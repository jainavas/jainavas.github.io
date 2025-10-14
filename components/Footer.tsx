export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-4 border-t border-accent-primary/20 bg-surface">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              <span className="text-accent-primary">Jaime Navascués</span>
            </h3>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Software engineer passionate about systems programming, AI, and data engineering.
              Building efficient solutions to complex problems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "About", href: "#about" },
                { label: "Projects", href: "#projects" },
                { label: "Skills", href: "#skills" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-foreground/60 hover:text-accent-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/jainavas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background border border-accent-primary/20 hover:border-accent-primary/60 flex items-center justify-center transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <span className="text-xl">🐙</span>
              </a>
              <a
                href="https://linkedin.com/in/jaimenavascues-p"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background border border-accent-secondary/20 hover:border-accent-secondary/60 flex items-center justify-center transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <span className="text-xl">💼</span>
              </a>
              <a
                href="mailto:jaimeipod99@gmail.com"
                className="w-10 h-10 rounded-lg bg-background border border-accent-primary/20 hover:border-accent-primary/60 flex items-center justify-center transition-all hover:scale-110"
                aria-label="Email"
              >
                <span className="text-xl">📧</span>
              </a>
            </div>
            <p className="text-foreground/60 text-sm mt-4">
              📍 Madrid, Spain
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-accent-primary/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/50 text-sm">
            © {currentYear} Jaime Navascués. All rights reserved.
          </p>
          <p className="text-foreground/40 text-xs">
            Built with Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
