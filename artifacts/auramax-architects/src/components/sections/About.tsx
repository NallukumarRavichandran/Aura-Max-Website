import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-block border border-border px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">
              9+ Years of Experience
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif leading-tight text-foreground" data-testid="about-title">
              "Quality construction is not an option — it is our responsibility."
            </h2>
            
            <div className="pt-6 border-t border-border flex items-center gap-4">
              <div className="w-16 h-16 bg-muted rounded-full overflow-hidden">
                {/* Fallback abstract avatar or shape if no image is available */}
                <div className="w-full h-full bg-secondary opacity-20"></div>
              </div>
              <div>
                <p className="font-serif text-lg font-medium text-foreground" data-testid="founder-name">p.aravinthan</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Founder & Lead Architect</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-xl font-serif mb-4 flex items-center gap-4 text-foreground">
                <span className="w-8 h-[1px] bg-primary"></span>
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed pl-12" data-testid="about-mission">
                To design and build high-quality spaces that enhance lifestyles, support businesses, and stand the test of time.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif mb-4 flex items-center gap-4 text-foreground">
                <span className="w-8 h-[1px] bg-primary"></span>
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed pl-12" data-testid="about-vision">
                To become a trusted leader in architecture and construction by delivering innovative, sustainable, and client-focused solutions.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}