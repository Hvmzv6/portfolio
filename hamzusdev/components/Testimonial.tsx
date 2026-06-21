import { Quote } from "lucide-react";

export default function Testimonial() {
  return (
    <section className="py-16">
      <div className="border border-border bg-background/50 backdrop-blur-sm p-8 md:p-12 relative overflow-hidden">
        {/* Subtle decorative glowing background */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-3xl mx-auto space-y-6 text-center md:text-left">
          <Quote className="w-10 h-10 text-accent mx-auto md:mx-0 opacity-40" />
          
          <blockquote className="text-lg md:text-2xl font-light leading-relaxed text-foreground italic">
            "Hamza is a rare talent in full-stack engineering. He took our complex legacy architecture and transformed it into a clean, modern web application. His grasp of backend performance alongside intuitive client layouts is outstanding."
          </blockquote>
          
          <div className="pt-4 flex flex-col md:flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center font-mono text-sm font-bold border border-border">
              JD
            </div>
            <div className="text-center md:text-left">
              <cite className="not-italic font-semibold text-foreground block">John Doe</cite>
              <span className="text-xs text-muted-foreground font-mono">Chief Technology Officer // TechLabs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
