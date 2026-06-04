import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden bg-secondary">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent" />
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-primary uppercase tracking-[0.3em] text-sm md:text-xs font-semibold mb-6 block" data-testid="hero-subtitle">
            p.aravinthan — Founder of Auramax Architects
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-[1.1]" data-testid="hero-title">
            Welcome to <span className="italic text-primary">Auramax</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed" data-testid="hero-desc">
            It is my privilege to welcome you to Auramax. For over 9 years, we have been transforming visions into architectural masterpieces.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              size="lg" 
              className="h-14 px-8 text-sm uppercase tracking-widest rounded-none w-full sm:w-auto"
              onClick={() => scrollTo("portfolio")}
              data-testid="hero-cta-explore"
            >
              Explore Our Story
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="h-14 px-8 text-sm uppercase tracking-widest rounded-none bg-transparent text-white border-white/30 hover:bg-white hover:text-secondary w-full sm:w-auto"
              onClick={() => scrollTo("contact")}
              data-testid="hero-cta-talk"
            >
              Let's Talk
            </Button>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <div>
            <div className="text-3xl font-serif text-white mb-2" data-testid="stat-years">9+ Years</div>
            <div className="text-xs uppercase tracking-widest text-gray-400">Experience</div>
          </div>
          <div>
            <div className="text-3xl font-serif text-white mb-2" data-testid="stat-projects">120+ Projects</div>
            <div className="text-xs uppercase tracking-widest text-gray-400">Completed</div>
          </div>
          <div>
            <div className="text-3xl font-serif text-white mb-2" data-testid="stat-satisfaction">95%</div>
            <div className="text-xs uppercase tracking-widest text-gray-400">Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}