import type { Metadata } from "next";
import ProjectsPageClient from "@/components/ProjectsPageClient";

export const metadata: Metadata = {
  title: "System Deployments | Hamza Safsai",
  description: "Explore portfolio projects, backend service APIs, headless e-commerce setups, and mobile system deployments engineered by Hamza Safsai.",
  openGraph: {
    title: "System Deployments | Hamza Safsai",
    description: "Explore portfolio projects, backend service APIs, headless e-commerce setups, and mobile system deployments engineered by Hamza Safsai.",
    images: [
      {
        url: "/og-projects.jpg",
        width: 1200,
        height: 630,
        alt: "Hamza Safsai - Featured Projects",
      },
    ],
  },
};

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
