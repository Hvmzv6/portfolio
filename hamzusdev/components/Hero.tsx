import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center relative overflow-hidden">
      {/* Decorative Background Accent */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 animate-pulse" />

      <div className="space-y-6 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary border border-border rounded-none text-xs font-mono text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          System Status: Online & Accepting Projects
        </div>

        <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-none">
          Hamza Safsai
        </h1>

        <h2 className="text-2xl md:text-4xl font-mono text-muted-foreground font-light">
          &lt;Full-Stack Developer /&gt;
        </h2>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-light">
          {"I'm Hamza, a full-stack developer who builds web apps and digital products that are fast, accessible, and delight users."}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-8">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-none font-semibold hover:bg-opacity-90 transition-all group"
          >
            Start a Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 border border-border bg-background px-8 py-4 rounded-none font-semibold hover:bg-secondary transition-colors"
          >
            Browse Architecture
            <Terminal className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
