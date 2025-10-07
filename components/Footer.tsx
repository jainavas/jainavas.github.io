export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-accent-primary/20 bg-surface">
      <div className="max-w-6xl mx-auto text-center text-foreground/60">
        <p>© {new Date().getFullYear()} Jaime Navascués. All rights reserved.</p>
      </div>
    </footer>
  );
}
