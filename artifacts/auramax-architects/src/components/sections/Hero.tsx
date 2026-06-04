import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import ownerPhoto from "@assets/owner-auramax_1780595644787.png";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center overflow-hidden bg-secondary"
    >
      {/* Background — Indian family / new home */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=2000&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-secondary/82" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/98 via-secondary/75 to-secondary/30" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-24 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-end min-h-[88vh]">

          {/* LEFT — Founder personal welcome */}
          <motion.div
            className="flex flex-col justify-center space-y-7 py-12"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-[3px] bg-primary" />
              <span className="text-primary uppercase tracking-[0.25em] text-xs font-bold" data-testid="hero-subtitle">
                Personal Welcome from the Founder
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.05]" data-testid="hero-title">
                Welcome to{" "}
                <span className="text-primary block mt-1">Auramax</span>
              </h1>
              <blockquote className="border-l-4 border-primary pl-5 mt-4">
                <p className="text-base md:text-lg text-white/80 font-normal leading-relaxed" data-testid="hero-desc">
                  "It is my privilege to welcome you to Auramax. For over 9 years, we have been transforming visions into architectural masterpieces. Every project is a testament to our commitment to quality, innovation, and the trust you place in us."
                </p>
              </blockquote>
            </div>

            {/* Founder identity inline */}
            <div className="flex items-center gap-4 pt-1" data-testid="founder-identity">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary shrink-0">
                <img src={ownerPhoto} alt="p.aravinthan" className="w-full h-full object-cover object-top" />
              </div>
              <div>
                <p className="font-serif text-white font-bold text-lg leading-tight uppercase">p.aravinthan</p>
                <p className="text-xs uppercase tracking-widest text-white/50 mt-0.5 font-sans">Founder & Lead Architect — Auramax Architects</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-1">
              <Button
                size="lg"
                className="h-14 px-8 text-sm uppercase tracking-widest rounded-none w-full sm:w-auto font-bold"
                onClick={() => scrollTo("portfolio")}
                data-testid="hero-cta-explore"
              >
                Explore Our Work
              </Button>
              <a
                href="tel:8220447294"
                className="inline-flex items-center gap-2 h-14 px-8 text-sm uppercase tracking-widest rounded-none bg-transparent text-white border-2 border-white/40 hover:bg-white hover:text-secondary transition-colors w-full sm:w-auto justify-center font-bold"
                data-testid="hero-cta-call"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 border-t-2 border-white/10 pt-7 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              <div>
                <div className="text-4xl font-serif text-white font-bold" data-testid="stat-years">9+</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40 font-sans mt-1">Years</div>
              </div>
              <div>
                <div className="text-4xl font-serif text-white font-bold" data-testid="stat-projects">120+</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40 font-sans mt-1">Projects</div>
              </div>
              <div>
                <div className="text-4xl font-serif text-white font-bold" data-testid="stat-satisfaction">95%</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40 font-sans mt-1">Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — Owner photo with bold name board */}
          <motion.div
            className="hidden lg:flex items-end justify-center lg:justify-end relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
          >
            {/* Glow behind photo */}
            <div className="absolute bottom-0 right-8 w-[380px] h-[380px] rounded-full bg-primary/15 blur-3xl" />

            <div className="relative flex flex-col items-center" data-testid="owner-photo-wrapper">
              {/* Photo */}
              <img
                src={ownerPhoto}
                alt="p.aravinthan — Founder of Auramax Architects"
                className="relative z-10 w-auto object-contain object-bottom select-none"
                style={{ maxHeight: "72vh", maxWidth: "400px" }}
                data-testid="owner-photo"
              />

              {/* BOLD NAME BOARD — below photo like a signboard */}
              <motion.div
                className="relative z-20 w-full bg-primary px-6 py-4 text-center shadow-2xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                data-testid="owner-nameboard"
              >
                <p className="text-white text-2xl font-serif font-bold uppercase tracking-widest leading-none">
                  P. ARAVINTHAN
                </p>
                <p className="text-white/80 text-xs uppercase tracking-[0.2em] mt-1 font-sans font-semibold">
                  Founder & Lead Architect
                </p>
              </motion.div>

              {/* Floating experience badge */}
              <motion.div
                className="absolute top-8 right-0 bg-secondary/90 backdrop-blur-sm border border-primary/30 px-4 py-3 text-center shadow-xl z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, duration: 0.4 }}
                data-testid="experience-badge"
              >
                <p className="text-white font-serif text-4xl font-bold leading-none">9+</p>
                <p className="text-primary text-[10px] uppercase tracking-widest mt-1 font-sans">Years</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
