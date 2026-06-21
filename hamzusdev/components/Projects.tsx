import { Github, ExternalLink, Code } from "lucide-react";

export default function Projects() {
  const featuredProjects = [
    {
      title: "Core Platform API",
      description: "High-throughput modular API gateway powering e-commerce transactions. Built using NestJS, PostgreSQL, and Redis cache clusters.",
      tech: ["NestJS", "PostgreSQL", "Redis", "TypeScript"],
      github: "https://github.com/hamzusdev",
      demo: "https://demo.hamzus.dev",
    },
    {
      title: "Distributed Telemetry App",
      description: "Cross-platform mobile application displaying real-time database cluster statistics, server health, and transaction counts.",
      tech: ["React Native", "Flutter", "MongoDB", "Cloud"],
      github: "https://github.com/hamzusdev",
      demo: "https://demo.hamzus.dev",
    },
    {
      title: "Serverless CDN Proxy",
      description: "Edge-caching serverless proxy deployment handling media optimization, route rewriting, and request logs.",
      tech: ["React", "TypeScript", "CI/CD", "Cloud"],
      github: "https://github.com/hamzusdev",
      demo: "https://demo.hamzus.dev",
    },
  ];

  return (
    <section className="space-y-12 py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
          <p className="text-muted-foreground font-mono text-sm flex items-center gap-2">
            <Code className="w-4 h-4 text-accent" />
            Selected system architectures & digital products.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredProjects.map((project, idx) => (
          <div
            key={idx}
            className="border border-border bg-background p-8 flex flex-col justify-between hover:border-accent hover:shadow-[0_0_15px_rgba(var(--accent-rgb),0.05)] transition-all duration-300 group"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold tracking-tight group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-border hover:bg-secondary text-muted-foreground hover:text-foreground transition-all"
                    aria-label="Source code"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-border hover:bg-secondary bg-primary text-primary-foreground hover:opacity-90 transition-all"
                    aria-label="Live demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-border flex flex-wrap gap-2">
              {project.tech.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 bg-secondary text-[10px] font-mono border border-border text-muted-foreground uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
