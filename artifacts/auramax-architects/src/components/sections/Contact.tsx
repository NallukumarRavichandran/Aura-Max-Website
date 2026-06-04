import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent",
        description: "Thank you for reaching out. We will get back to you shortly.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">Let's Discuss Your Project</h2>
            <p className="text-gray-400 font-light leading-relaxed mb-12 max-w-md">
              Whether you have a clear vision or need guidance on where to start, we are here to help turn your ideas into reality.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/5 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">Phone</div>
                  <div className="text-lg font-medium text-white">+91 98765 43210</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/5 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">Email</div>
                  <div className="text-lg font-medium text-white">info@auramaxarchitects.com</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/5 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">Location</div>
                  <div className="text-lg font-medium text-white">Chennai, Tamil Nadu, India</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 border border-white/10 p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-widest text-gray-400">Name</label>
                  <Input 
                    id="name" 
                    required 
                    className="bg-transparent border-white/20 text-white rounded-none h-12 focus-visible:ring-primary"
                    placeholder="John Doe"
                    data-testid="input-name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-gray-400">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    required 
                    className="bg-transparent border-white/20 text-white rounded-none h-12 focus-visible:ring-primary"
                    placeholder="john@example.com"
                    data-testid="input-email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs uppercase tracking-widest text-gray-400">Phone</label>
                  <Input 
                    id="phone" 
                    required 
                    className="bg-transparent border-white/20 text-white rounded-none h-12 focus-visible:ring-primary"
                    placeholder="+91 98765 43210"
                    data-testid="input-phone"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="service" className="text-xs uppercase tracking-widest text-gray-400">Service</label>
                  <select 
                    id="service"
                    className="flex h-12 w-full border border-white/20 bg-transparent px-3 py-2 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50 [&>option]:bg-secondary [&>option]:text-white"
                    required
                    data-testid="input-service"
                  >
                    <option value="" disabled selected>Select a service</option>
                    <option value="architectural">Architectural Design</option>
                    <option value="construction">Construction</option>
                    <option value="interior">Interior Design</option>
                    <option value="consultation">Consultation</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs uppercase tracking-widest text-gray-400">Message</label>
                <Textarea 
                  id="message" 
                  required 
                  className="bg-transparent border-white/20 text-white rounded-none min-h-[120px] focus-visible:ring-primary"
                  placeholder="Tell us about your project..."
                  data-testid="input-message"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full h-14 rounded-none uppercase tracking-widest text-xs"
                disabled={isSubmitting}
                data-testid="submit-contact"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}