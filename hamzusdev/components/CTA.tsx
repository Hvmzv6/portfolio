import Link from "next/link";
import { Send } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-16 text-center">
      <div className="border border-border bg-foreground text-background p-10 md:p-16 relative overflow-hidden flex flex-col items-center justify-center space-y-6">
        {/* Background visual geometric grid effect */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-2xl relative z-10">
          Let's build something exceptional together.
        </h2>
        
        <p className="text-sm md:text-base text-background/80 max-w-md relative z-10 font-light">
          Whether you need a new web app, a mobile product, or a robust system architecture, I'm ready to turn your goals into realities.
        </p>
        
        <div className="pt-4 relative z-10">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-background text-foreground px-8 py-4 font-semibold hover:bg-background/95 transition-all group"
          >
            Initiate Project Protocol
            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
