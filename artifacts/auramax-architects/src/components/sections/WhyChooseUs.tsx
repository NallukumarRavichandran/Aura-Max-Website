import { motion } from "framer-motion";
import { Check } from "lucide-react";

const valueProps = [
  "No Subcontractors",
  "Professional Project Management",
  "Unique & Modern Designs",
  "Quality Process",
  "Adherence to Timelines",
  "Competitive Pricing",
  "High-Quality Design",
  "Transparency",
  "Brand Trustworthiness",
  "Professional Customer Service",
  "Hassle-Free Service",
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <span className="text-primary uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">The Auramax Difference</span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6" data-testid="why-title">Why Choose Auramax</h2>
            <p className="text-muted-foreground leading-relaxed">
              We believe in honest construction and refined design. Our approach ensures every project is executed with precision, transparency, and a commitment to absolute quality.
            </p>
          </div>
          
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {valueProps.map((prop, i) => (
                <motion.div
                  key={prop}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-start gap-4"
                  data-testid={`value-prop-${i}`}
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{prop}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}