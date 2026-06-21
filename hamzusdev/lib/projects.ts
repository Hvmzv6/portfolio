export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: "Web App" | "Mobile" | "API";
  liveUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    title: "Nova E-Commerce Shop",
    description: "A fast, headless digital commerce web application featuring smooth cart additions, Stripe payment endpoints, and product filter configurations.",
    image: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?w=800&auto=format&fit=crop&q=60",
    tags: ["Next.js", "React", "PostgreSQL", "Stripe"],
    category: "Web App",
    liveUrl: "https://shop.hamzus.dev",
    githubUrl: "https://github.com/hamzusdev/nova-shop",
  },
  {
    title: "Pulse Mobile Telemetry",
    description: "A responsive cross-platform mobile tracker built to synchronize device status telemetry and health charts using local offline SQLite caches.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=60",
    tags: ["Flutter", "Dart", "SQLite", "Cloud"],
    category: "Mobile",
    liveUrl: "https://pulse.hamzus.dev",
    githubUrl: "https://github.com/hamzusdev/pulse-app",
  },
  {
    title: "Quantum Ledger Engine",
    description: "High-frequency serverless REST/GraphQL API gateway designed to aggregate transaction logs with sub-millisecond cache hits via Redis.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60",
    tags: ["NestJS", "TypeScript", "Redis", "Docker"],
    category: "API",
    liveUrl: "https://api.hamzus.dev",
    githubUrl: "https://github.com/hamzusdev/quantum-ledger",
  },
];
