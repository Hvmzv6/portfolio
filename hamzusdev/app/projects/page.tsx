import ProjectsPageClient from "@/components/ProjectsPageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "System Deployments | Hamza Safsafi",
  description: "Explore portfolio projects, backend service APIs, headless e-commerce setups, and mobile system deployments engineered by Hamza Safsafi.",
  openGraph: {
    title: "System Deployments | Hamza Safsafi",
    description: "Explore portfolio projects, backend service APIs, headless e-commerce setups, and mobile system deployments engineered by Hamza Safsafi.",
    images: [
      {
        url: "/og-projects.jpg",
        width: 1200,
        height: 630,
        alt: "Hamza Safsafi - Featured Projects",
      },
    ],
  },
};

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
