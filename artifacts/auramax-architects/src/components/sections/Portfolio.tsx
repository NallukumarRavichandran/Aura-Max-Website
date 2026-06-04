import { motion } from "framer-motion";

const projects = [
  {
    title: "Modern Twin Residence",
    type: "Residential",
    location: "Chennai, India",
    area: "4,200 sq ft",
    status: "Completed",
    image: "/images/portfolio-1.png",
  },
  {
    title: "Sunset Pool Villa",
    type: "Luxury Villa",
    location: "Coimbatore, India",
    area: "6,800 sq ft",
    status: "Completed",
    image: "/images/portfolio-2.png",
  },
  {
    title: "Horizon Office Complex",
    type: "Commercial",
    location: "Bangalore, India",
    area: "25,000 sq ft",
    status: "In Progress",
    image: "/images/portfolio-3.png",
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div>
            <span className="text-primary uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">Selected Works</span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">Portfolio</h2>
          </div>
          <p className="text-muted-foreground max-w-md font-light">
            A curated selection of our most distinctive projects, showcasing our commitment to architectural excellence and precise execution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group cursor-pointer"
              data-testid={`portfolio-card-${i}`}
            >
              <div className="relative overflow-hidden mb-6 aspect-[4/5] bg-muted">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 text-xs font-medium uppercase tracking-widest">
                  {project.status}
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-xs uppercase tracking-widest text-primary font-semibold">{project.type}</div>
                <h3 className="text-2xl font-serif text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{project.location}</span>
                  <span className="w-1 h-1 rounded-full bg-border"></span>
                  <span>{project.area}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-border py-12">
          {[
            { value: "9+", label: "Years Experience" },
            { value: "120+", label: "Projects Completed" },
            { value: "95%", label: "Client Satisfaction" },
            { value: "35+", label: "Expert Team Members" },
          ].map((stat, i) => (
            <div key={i} className="text-center space-y-2" data-testid={`portfolio-stat-${i}`}>
              <div className="text-4xl font-serif text-foreground">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}