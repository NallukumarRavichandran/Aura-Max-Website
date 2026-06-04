import { motion } from "framer-motion";
import { CheckCircle2, Users, PenTool, ShieldCheck, Clock, DollarSign, Star, Eye, Award, Headphones, Smile } from "lucide-react";

const valueProps = [
  { label: "No Subcontractors", icon: ShieldCheck, desc: "Every aspect handled in-house for consistent quality." },
  { label: "Professional Project Management", icon: Users, desc: "Dedicated managers keep your project on time and on scope." },
  { label: "Unique & Modern Designs", icon: PenTool, desc: "Distinctive, contemporary designs blending form with function." },
  { label: "Quality Process", icon: CheckCircle2, desc: "Rigorous quality checks at every single stage of construction." },
  { label: "Adherence to Timelines", icon: Clock, desc: "Disciplined scheduling ensures on-time delivery — always." },
  { label: "Competitive Pricing", icon: DollarSign, desc: "Premium quality at fair prices. No hidden costs, ever." },
  { label: "High-Quality Design", icon: Star, desc: "Award-calibre designs balancing beauty, durability, and practicality." },
  { label: "Transparency", icon: Eye, desc: "Open communication with regular updates and clear documentation." },
  { label: "Brand Trustworthiness", icon: Award, desc: "Built on integrity — we honour every commitment we make." },
  { label: "Professional Customer Service", icon: Headphones, desc: "Responsive, knowledgeable support available whenever you need us." },
  { label: "Hassle-Free Service", icon: Smile, desc: "From planning to handover, we manage everything seamlessly." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-[0.25em] text-xs font-bold mb-3 block">The Auramax Difference</span>
          <h2 className="text-4xl md:text-5xl text-foreground mb-4" data-testid="why-title">Why Choose Auramax?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-normal text-sm leading-relaxed">
            We don't just build structures — we build trust. Here's what sets us apart from the rest.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {valueProps.map((prop, i) => (
            <motion.div
              key={prop.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.06, 0.4) }}
              whileHover={{ y: -6, boxShadow: "0 20px 40px -12px rgba(249,115,22,0.18)" }}
              className="group bg-card border border-border p-6 cursor-default transition-all duration-300 hover:border-primary"
              data-testid={`value-prop-${i}`}
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-muted group-hover:bg-primary flex items-center justify-center mb-4 transition-all duration-300">
                <prop.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Label */}
              <h3 className="text-base text-foreground font-bold uppercase mb-2 group-hover:text-primary transition-colors duration-200 leading-snug">
                {prop.label}
              </h3>

              {/* Desc */}
              <p className="text-muted-foreground text-xs font-normal leading-relaxed">
                {prop.desc}
              </p>

              {/* Bottom accent bar */}
              <div className="h-[2px] bg-border mt-4 group-hover:bg-primary transition-all duration-300 w-8 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* Bottom tag */}
        <p className="text-center text-xs text-muted-foreground uppercase tracking-widest mt-12 font-semibold">
          Every promise above isn't just a statement — it's our standard.
        </p>
      </div>
    </section>
  );
}
