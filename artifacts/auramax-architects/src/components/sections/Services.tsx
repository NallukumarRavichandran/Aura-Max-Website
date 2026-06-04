import { motion } from "framer-motion";
import { ArrowRight, Building, Hammer, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Architectural Design",
    description: "Award-worthy designs combining aesthetics, functionality, and sustainability for residential and commercial spaces.",
    icon: Building,
  },
  {
    title: "Construction",
    description: "Honest, quality-first construction with no subcontractors. Precision building that stands the test of time.",
    icon: Hammer,
  },
  {
    title: "Interior Design",
    description: "Refined interiors with warm material palettes, creating spaces that feel deliberate and aspirational.",
    icon: Ruler,
  }
];

export default function Services() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-secondary text-secondary-foreground relative">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="text-primary uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white">Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors group cursor-default"
              data-testid={`service-card-${i}`}
            >
              <div className="w-12 h-12 rounded-none bg-primary/20 flex items-center justify-center text-primary mb-8">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed mb-8">
                {service.description}
              </p>
              <div className="w-8 h-[1px] bg-white/30 group-hover:w-16 group-hover:bg-primary transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-primary p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-serif text-white mb-6" data-testid="services-cta-text">
            Looking for Stress-Free Residential Construction Solutions?
          </h3>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Our Experts Can Help! Experience professional project management from concept to completion.
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="rounded-none bg-transparent border-white text-white hover:bg-white hover:text-primary h-14 px-8 uppercase tracking-widest text-xs"
            onClick={() => scrollTo("contact")}
            data-testid="services-cta-button"
          >
            Contact Us Today
          </Button>
        </motion.div>

      </div>
    </section>
  );
}