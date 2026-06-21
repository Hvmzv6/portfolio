"use client";

import { useState } from "react";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import { LayoutGrid } from "lucide-react";

type FilterType = "All" | "Web App" | "Mobile" | "API";

export default function ProjectsPageClient() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  const filterCategories: FilterType[] = ["All", "Web App", "Mobile", "API"];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">System Deployments</h1>
        <p className="text-lg text-muted-foreground max-w-2xl font-light">
          An ongoing log of engineered systems, custom frameworks, and full-stack digital products.
        </p>
      </div>

      {/* Filter Button Panel */}
      <div className="flex flex-wrap gap-2 border-b border-border pb-6">
        {filterCategories.map((category) => {
          const isSelected = activeFilter === category;
          return (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 text-xs font-mono border transition-all duration-200 rounded-none cursor-pointer ${
                isSelected
                  ? "bg-primary border-primary text-primary-foreground font-semibold"
                  : "bg-background border-border hover:bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border border-dashed border-border flex flex-col items-center justify-center space-y-4">
          <LayoutGrid className="w-10 h-10 text-muted-foreground/40" />
          <p className="text-sm font-mono text-muted-foreground">No matching system architectures found.</p>
        </div>
      )}
    </div>
  );
}
