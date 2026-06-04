import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div 
          className="font-serif text-2xl font-bold tracking-tight cursor-pointer" 
          onClick={() => scrollTo("hero")}
          data-testid="nav-logo"
        >
          Auramax <span className="text-primary italic">Architects</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Projects", id: "portfolio" },
            { name: "Contact", id: "contact" },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => scrollTo(item.id)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest"
              data-testid={`nav-link-${item.id}`}
            >
              {item.name}
            </button>
          ))}
        </nav>

        <Button 
          onClick={() => scrollTo("contact")}
          className="hidden md:inline-flex rounded-none px-6 uppercase tracking-widest text-xs h-12"
          data-testid="nav-cta"
        >
          Get in Touch
        </Button>
      </div>
    </header>
  );
}