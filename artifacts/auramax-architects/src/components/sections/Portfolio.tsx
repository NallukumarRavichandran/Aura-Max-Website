import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const projects = [
  {
    title: "Shanmugam Family Villa",
    type: "Residential",
    location: "Madurai, Tamil Nadu",
    area: "2,800 sq ft",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop",
    year: "2024",
  },
  {
    title: "Krishnamurthy Duplex",
    type: "Duplex Home",
    location: "Coimbatore, Tamil Nadu",
    area: "3,600 sq ft",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    year: "2024",
  },
  {
    title: "Murugan Office Complex",
    type: "Commercial",
    location: "Chennai, Tamil Nadu",
    area: "14,000 sq ft",
    status: "In Progress",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=800&auto=format&fit=crop",
    year: "2025",
  },
  {
    title: "Rajan Luxury Villa",
    type: "Luxury Villa",
    location: "Tiruppur, Tamil Nadu",
    area: "5,200 sq ft",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop",
    year: "2023",
  },
  {
    title: "Selvam Residence",
    type: "Residential",
    location: "Salem, Tamil Nadu",
    area: "1,950 sq ft",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=800&auto=format&fit=crop",
    year: "2023",
  },
  {
    title: "Karthikeyan IT Park",
    type: "Commercial",
    location: "Tiruchirappalli, Tamil Nadu",
    area: "22,000 sq ft",
    status: "In Progress",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    year: "2025",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-8">
          <div>
            <span className="text-primary uppercase tracking-[0.25em] text-xs font-bold mb-3 block">Selected Works</span>
            <h2 className="text-4xl md:text-5xl text-foreground">Our Projects</h2>
          </div>
          <p className="text-muted-foreground max-w-md font-normal text-sm leading-relaxed">
            A curated showcase of our finest work across Tamil Nadu — homes and commercial spaces built with precision and pride.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.08, 0.32) }}
              whileHover={{ y: -4 }}
              className="group cursor-pointer bg-card border border-border overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-xl"
              data-testid={`portfolio-card-${i}`}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[16/10] bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Status badge */}
                <div className={`absolute top-3 left-3 px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${
                  project.status === "Completed"
                    ? "bg-green-600 text-white"
                    : "bg-primary text-white"
                }`}>
                  {project.status}
                </div>
                {/* Year badge */}
                <div className="absolute top-3 right-3 bg-secondary/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                  {project.year}
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-bold uppercase tracking-widest text-sm border-2 border-white px-6 py-2">
                    View Project
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 space-y-2">
                <div className="text-[10px] uppercase tracking-widest text-primary font-bold">{project.type}</div>
                <h3 className="text-xl text-foreground group-hover:text-primary transition-colors duration-200">{project.title}</h3>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="w-3 h-3 text-primary shrink-0" />
                  <span>{project.location}</span>
                  <span className="text-border">•</span>
                  <span>{project.area}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-border">
          {[
            { value: "9+", label: "Years Experience" },
            { value: "120+", label: "Projects Completed" },
            { value: "95%", label: "Client Satisfaction" },
            { value: "35+", label: "Expert Team Members" },
          ].map((stat, i) => (
            <div
              key={i}
              className={`text-center py-10 px-4 space-y-2 ${i < 3 ? "border-r border-border" : ""}`}
              data-testid={`portfolio-stat-${i}`}
            >
              <div className="text-4xl md:text-5xl text-primary font-bold font-serif">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
