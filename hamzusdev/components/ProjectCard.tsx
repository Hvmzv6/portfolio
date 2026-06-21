import { Project } from "@/lib/projects";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border border-border bg-background flex flex-col hover:border-accent hover:shadow-[0_0_20px_rgba(var(--accent-rgb),0.05)] transition-all duration-300 group overflow-hidden">
      {/* Visual Frame */}
      <div className="relative aspect-video w-full overflow-hidden border-b border-border bg-secondary">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Details Container */}
      <div className="p-6 flex flex-col justify-between grow space-y-4">
        <div className="space-y-2">
          <span className="text-[10px] font-mono text-accent uppercase tracking-wider">
            {project.category}
          </span>
          <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="space-y-4 pt-2">
          {/* Tech Badge List */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-secondary text-[10px] font-mono border border-border text-muted-foreground uppercase"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Core Action Links */}
          <div className="flex gap-3 pt-2 border-t border-border/50">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 border border-border hover:bg-secondary py-2.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-all"
            >
              <Github className="w-4 h-4" />
              Source Code
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2.5 text-xs font-semibold hover:opacity-90 transition-opacity"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
