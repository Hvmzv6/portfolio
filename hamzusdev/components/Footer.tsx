import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="space-y-3 max-w-md">
          <Link
            href="/"
            className="font-mono text-sm font-bold tracking-tighter hover:text-accent transition-colors"
          >
            &lt;Hamza Safsafi /&gt;
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Building premium, high-performance web & mobile experiences. Translating complex software problems into elegant, functional user interfaces.
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end gap-2 font-mono text-xs text-muted-foreground">
          <div className="flex gap-4 mb-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <span></span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <span>{/* Separator */}</span>
            <a
              href="mailto:hello@example.com"
              className="hover:text-foreground transition-colors"
            >
              Email
            </a>
          </div>
          <span>&copy; {currentYear} hamzus. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
