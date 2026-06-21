import type { Metadata } from "next";
import { FileText, Award, Layers, Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "Origin Profile | About Hamza Safsai",
  description: "Learn about Hamza Safsai's background, full-stack history, development principles, and specs of engineered digital architectures.",
  openGraph: {
    title: "Origin Profile | About Hamza Safsai",
    description: "Learn about Hamza Safsai's background, full-stack history, development principles, and specs of engineered digital architectures.",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "Hamza Safsai - Origin Profile",
      },
    ],
  },
};

export default function AboutPage() {

  return (
    <div className="max-w-6xl mx-auto px-6 py-20 space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Portrait / Call to Action */}
        <div className="lg:col-span-4 space-y-6">
          <div className="relative aspect-3/4 w-full border border-border bg-secondary flex items-center justify-center group overflow-hidden">
            {/* Geometric background visual */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#808080_1px,transparent_1px)] [background-size[16px_16px]" />
            <Terminal className="w-12 h-12 text-muted-foreground/30 group-hover:scale-110 transition-transform duration-300" />
            <span className="absolute bottom-4 font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
              [ Portrait Placeholder ]
            </span>
          </div>

          <a
            href="/resume.pdf"
            download
            className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 font-semibold hover:opacity-90 transition-opacity rounded-none text-sm cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            Download Resume (PDF)
          </a>
        </div>

        {/* Narrative Biography */}
        <div className="lg:col-span-8 space-y-8">
          <div className="space-y-4">
            <span className="text-xs font-mono text-accent uppercase tracking-widest">
              Origin // System Profile
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hamza Safsai
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-light font-mono">
              &lt;Engineering digital products & web architectures /&gt;
            </h2>
          </div>

          <div className="text-muted-foreground space-y-6 leading-relaxed text-base font-light">
            <p>
              I am a full-stack developer dedicated to building fast, scalable web applications and digital products. My journey started from a fascination with translating complex systems into minimal, highly responsive interfaces that users enjoy interacting with.
            </p>
            <p>
              Whether structuring robust backend architectures in NestJS, crafting cross-platform mobile views using Flutter, or designing sleek frontend grids with React, my focus remains constant: maintainability, type safety, and sub-second loading performance.
            </p>
          </div>

          {/* Beliefs Panel */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-border">
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-semibold text-foreground">
                <Layers className="w-4 h-4 text-accent" />
                <span>What I Build</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                Headless e-commerce platforms, database API layers, transaction logs, and cross-platform native-feeling applications.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 font-semibold text-foreground">
                <Award className="w-4 h-4 text-accent" />
                <span>What I Believe In</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                Writing predictable type-safe code, prioritizing accessibility, and building simple system designs over overengineered complexities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
