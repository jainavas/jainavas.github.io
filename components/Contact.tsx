export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-foreground">Get In Touch</h2>
        <p className="text-lg text-foreground/80 mb-8">
          I&apos;m always open to new opportunities and collaborations.
          Feel free to reach out if you&apos;d like to work together!
        </p>
        <div className="flex gap-6 justify-center flex-wrap">
          <a
            href="mailto:jaimeipod99@gmail.com"
            className="px-8 py-3 bg-accent-primary text-background rounded-lg hover:bg-accent-primary/90 transition font-semibold"
          >
            Email Me
          </a>
          <a
            href="https://github.com/jainavas"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-accent-secondary text-accent-secondary rounded-lg hover:bg-accent-secondary hover:text-background transition font-semibold"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/jaime-navascues"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-accent-primary text-accent-primary rounded-lg hover:bg-accent-primary hover:text-background transition font-semibold"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
