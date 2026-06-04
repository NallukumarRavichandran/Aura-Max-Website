import { Link } from "wouter";

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-secondary text-secondary-foreground pt-20 pb-8 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <div className="font-serif text-2xl font-bold tracking-tight mb-6 text-white">
              Auramax <span className="text-primary italic">Architects</span>
            </div>
            <p className="text-gray-400 font-light leading-relaxed mb-6">
              Design & Build excellence. Creating innovative and durable structures since 2017.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => scrollTo(item.toLowerCase() === 'projects' ? 'portfolio' : item.toLowerCase())}
                    className="text-gray-400 hover:text-primary transition-colors cursor-pointer"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white mb-6">Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Architectural Design</li>
              <li>Construction</li>
              <li>Interior Design</li>
              <li>Consultation</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white mb-6">Support</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors">Careers</Link></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <div>&copy; 2026 Auramax Architects | Design & Build.</div>
          <div>Powered by Auramax Architects</div>
        </div>
      </div>
    </footer>
  );
}