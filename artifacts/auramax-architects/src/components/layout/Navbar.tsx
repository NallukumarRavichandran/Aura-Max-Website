import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
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

  const isLight = theme === "light";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo — always white over hero, switches to foreground when scrolled */}
        <div
          className={`font-serif text-2xl font-bold tracking-tight cursor-pointer transition-colors duration-300 ${
            isScrolled ? "text-foreground" : "text-white"
          }`}
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
              className={`text-sm font-medium transition-colors uppercase tracking-widest hover:text-primary ${
                isScrolled ? "text-muted-foreground" : "text-white/80"
              }`}
              data-testid={`nav-link-${item.id}`}
            >
              {item.name}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Dark / Light toggle pill */}
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            data-testid="theme-toggle"
            className={`relative inline-flex h-9 w-[68px] shrink-0 items-center rounded-full border-2 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
              isLight
                ? "bg-zinc-100 border-zinc-300"
                : "bg-zinc-900 border-zinc-700"
            }`}
          >
            {/* Background track icons */}
            <span className="absolute left-1.5 flex items-center justify-center w-5 h-5 pointer-events-none">
              <Sun className="w-3.5 h-3.5 text-amber-400" />
            </span>
            <span className="absolute right-1.5 flex items-center justify-center w-5 h-5 pointer-events-none">
              <Moon className="w-3.5 h-3.5 text-slate-400" />
            </span>
            {/* Sliding knob */}
            <span
              className={`absolute top-0.5 h-7 w-7 rounded-full shadow-md transition-all duration-300 flex items-center justify-center ${
                isLight
                  ? "translate-x-0.5 bg-white"
                  : "translate-x-[36px] bg-zinc-800"
              }`}
            >
              {isLight ? (
                <Sun className="w-3.5 h-3.5 text-amber-500" />
              ) : (
                <Moon className="w-3.5 h-3.5 text-white" />
              )}
            </span>
          </button>

          <Button
            onClick={() => scrollTo("contact")}
            className="hidden md:inline-flex rounded-none px-6 uppercase tracking-widest text-xs h-10 font-bold"
            data-testid="nav-cta"
          >
            Talk to Expert
          </Button>
        </div>
      </div>
    </header>
  );
}
