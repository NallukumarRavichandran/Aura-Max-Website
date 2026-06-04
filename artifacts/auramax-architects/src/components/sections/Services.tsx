import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Building, Hammer, Ruler, Wrench, Home, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Architectural Design",
    description: "Award-worthy designs combining aesthetics, functionality, and sustainability for residential and commercial spaces across Tamil Nadu.",
    icon: Building,
    tag: "Design",
  },
  {
    title: "Construction",
    description: "Honest, quality-first construction with no subcontractors. Precision building from foundation to finishing that stands the test of time.",
    icon: Hammer,
    tag: "Build",
  },
  {
    title: "Interior Design",
    description: "Refined interiors with warm material palettes, creating spaces that feel deliberate, comfortable, and aspirational.",
    icon: Ruler,
    tag: "Interior",
  },
  {
    title: "Renovation & Remodelling",
    description: "Transform your existing space with expert renovation services. We breathe new life into old structures with modern craftsmanship.",
    icon: Wrench,
    tag: "Renovate",
  },
  {
    title: "Residential Projects",
    description: "From compact homes to sprawling villas, we deliver residential excellence tailored to every family's vision and budget.",
    icon: Home,
    tag: "Residential",
  },
  {
    title: "Consultation",
    description: "Expert guidance at every stage — from plot selection to material finishes. Book a free consultation with our lead architect.",
    icon: PenTool,
    tag: "Consult",
  },
];

export default function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "repeating-linear-gradient(0deg, white 0, white 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, white 0, white 1px, transparent 1px, transparent 60px)" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div>
            <span className="text-primary uppercase tracking-[0.25em] text-xs font-bold mb-3 block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl text-white">What We Offer</h2>
            <p className="text-gray-400 mt-3 max-w-md font-normal text-sm leading-relaxed">
              Comprehensive solutions for every stage of your project — from concept to completion.
            </p>
          </div>

          {/* Carousel arrows */}
          <div className="flex gap-3 shrink-0">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 border-2 border-white/20 hover:border-primary hover:bg-primary text-white hover:text-white flex items-center justify-center transition-all duration-200"
              data-testid="services-prev"
              aria-label="Previous service"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 border-2 border-white/20 hover:border-primary hover:bg-primary text-white hover:text-white flex items-center justify-center transition-all duration-200"
              data-testid="services-next"
              aria-label="Next service"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef} data-testid="services-carousel">
          <div className="flex gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                className="flex-none w-[85vw] sm:w-[55vw] md:w-[38vw] lg:w-[30%] bg-white/5 border border-white/10 p-8 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 group cursor-default"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: Math.min(i * 0.08, 0.3) }}
                data-testid={`service-card-${i}`}
              >
                {/* Tag */}
                <span className="inline-block bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-6">
                  {service.tag}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <service.icon className="w-6 h-6" />
                </div>

                <h3 className="text-2xl text-white mb-3 group-hover:text-primary transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-gray-400 font-normal leading-relaxed text-sm mb-8">
                  {service.description}
                </p>

                <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 bg-primary p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <h3 className="text-2xl md:text-3xl text-white mb-2" data-testid="services-cta-text">
              Looking for Stress-Free Residential Construction?
            </h3>
            <p className="text-white/70 text-sm font-normal">Our experts are ready to help you build your dream home.</p>
          </div>
          <Button
            variant="outline"
            size="lg"
            className="rounded-none bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary h-14 px-10 uppercase tracking-widest text-xs font-bold shrink-0"
            onClick={() => scrollTo("contact")}
            data-testid="services-cta-button"
          >
            Talk to Expert
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
