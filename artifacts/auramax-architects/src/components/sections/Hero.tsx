import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
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
      {/* Background architectural image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2000&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-secondary/80" />
        {/* Gradient fade from right so owner photo blends in */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/70 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-end min-h-[80vh]">

          {/* LEFT — Founder's personal welcome */}
          <motion.div
            className="flex flex-col justify-center space-y-8 py-12"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            {/* Eyebrow label */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-primary" />
              <span
                className="text-primary uppercase tracking-[0.25em] text-xs font-semibold"
                data-testid="hero-subtitle"
              >
                Personal Welcome from the Founder
              </span>
            </div>

            <div className="space-y-4">
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.05]"
                data-testid="hero-title"
              >
                Welcome to{" "}
                <span className="italic text-primary block mt-1">Auramax</span>
              </h1>

              {/* Founder quote */}
              <blockquote className="border-l-2 border-primary pl-5 mt-6">
                <p
                  className="text-lg md:text-xl text-white/85 font-light leading-relaxed italic"
                  data-testid="hero-desc"
                >
                  "It is my privilege to welcome you to Auramax. For over 9
                  years, we have been transforming visions into architectural
                  masterpieces. Every project is a testament to our commitment
                  to quality, innovation, and the trust you place in us."
                </p>
              </blockquote>
            </div>

            {/* Founder identity */}
            <div className="flex items-center gap-4 pt-2" data-testid="founder-identity">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/50 shrink-0">
                <img
                  src={ownerPhoto}
                  alt="p.aravinthan"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <p className="font-serif text-white font-semibold text-lg leading-tight">
                  p.aravinthan
                </p>
                <p className="text-xs uppercase tracking-widest text-white/50 mt-0.5">
                  Founder & Lead Architect — Auramax Architects
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-2">
              <Button
                size="lg"
                className="h-14 px-8 text-sm uppercase tracking-widest rounded-none w-full sm:w-auto"
                onClick={() => scrollTo("portfolio")}
                data-testid="hero-cta-explore"
              >
                Explore Our Work
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

            {/* Stats row */}
            <motion.div
              className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              <div>
                <div
                  className="text-3xl font-serif text-white mb-1"
                  data-testid="stat-years"
                >
                  9+
                </div>
                <div className="text-[10px] uppercase tracking-widest text-white/40">
                  Years
                </div>
              </div>
              <div>
                <div
                  className="text-3xl font-serif text-white mb-1"
                  data-testid="stat-projects"
                >
                  120+
                </div>
                <div className="text-[10px] uppercase tracking-widest text-white/40">
                  Projects
                </div>
              </div>
              <div>
                <div
                  className="text-3xl font-serif text-white mb-1"
                  data-testid="stat-satisfaction"
                >
                  95%
                </div>
                <div className="text-[10px] uppercase tracking-widest text-white/40">
                  Satisfaction
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — Owner photo, prominent cutout */}
          <motion.div
            className="hidden lg:flex items-end justify-center lg:justify-end relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
          >
            {/* Decorative orange accent ring behind photo */}
            <div className="absolute bottom-0 right-8 w-[360px] h-[360px] rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute bottom-0 right-16 w-[2px] h-[60%] bg-gradient-to-t from-primary/40 to-transparent" />

            {/* Photo — positioned so feet rest at section bottom */}
            <div className="relative" data-testid="owner-photo-wrapper">
              <img
                src={ownerPhoto}
                alt="p.aravinthan — Founder of Auramax Architects"
                className="relative z-10 w-auto max-h-[78vh] object-contain object-bottom select-none drop-shadow-2xl"
                style={{ maxWidth: "420px" }}
                data-testid="owner-photo"
              />

              {/* Floating name badge */}
              <motion.div
                className="absolute top-8 left-0 bg-secondary/80 backdrop-blur-sm border border-white/10 px-4 py-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                data-testid="owner-badge"
              >
                <p className="text-white font-serif text-sm font-semibold">
                  p.aravinthan
                </p>
                <p className="text-primary text-[10px] uppercase tracking-widest mt-0.5">
                  Founder & Lead Architect
                </p>
              </motion.div>

              {/* Floating experience badge */}
              <motion.div
                className="absolute bottom-12 right-0 bg-primary px-5 py-3 text-center shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                data-testid="experience-badge"
              >
                <p className="text-white font-serif text-3xl font-bold leading-none">
                  9+
                </p>
                <p className="text-white/80 text-[10px] uppercase tracking-widest mt-1">
                  Years of Excellence
                </p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
