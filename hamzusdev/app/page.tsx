import CTA from "@/components/CTA";
import FadeIn from "@/components/FadeIn";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Testimonial from "@/components/Testimonial";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hamza Safsafi | Full-Stack Developer Portfolio",
  description: "Explore Hamza Safsai's portfolio showcasing modular systems, backend APIs, headless setups, and interactive web/mobile products.",
  openGraph: {
    title: "Hamza Safsai | Full-Stack Developer Portfolio",
    description: "Explore Hamza Safsai's portfolio showcasing modular systems, backend APIs, headless setups, and interactive web/mobile products.",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Hamza Safsai Portfolio Showcase",
      },
    ],
  },
};

export default function Home() {

  return (
    <div className="selection:bg-foreground selection:text-background min-h-screen">
      <div className="max-w-6xl mx-auto px-6 space-y-16 pb-20">
        <FadeIn>
          <Hero />
        </FadeIn>
        <FadeIn delay={0.2}>
          <Skills />
        </FadeIn>
        <FadeIn delay={0.4}>
          <Projects />
        </FadeIn>
        <FadeIn delay={0.6}>
          <Testimonial />
        </FadeIn>
        <FadeIn delay={0.8}>
          <CTA />
        </FadeIn>
      </div>
    </div>
  );
}


