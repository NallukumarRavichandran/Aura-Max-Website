import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, ChevronDown } from "lucide-react";

const indianCities = [
  "Bengaluru", "Chennai", "Mumbai", "Pune", "Hyderabad", "Delhi",
  "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Erode",
  "Tiruppur", "Vellore", "Thanjavur", "Dindigul", "Kanyakumari",
  "Tirunelveli", "Nagercoil", "Pollachi", "Karur", "Other",
];

const CALL_NUMBER = "8220447294";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [city, setCity] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Consultation Booked!",
        description: "Our expert will call you within 24 hours. Thank you!",
      });
      (e.target as HTMLFormElement).reset();
      setCity("");
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* LEFT — Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary uppercase tracking-[0.25em] text-xs font-bold mb-4 block">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl text-white mb-6">Let's Discuss Your Project</h2>
            <p className="text-gray-400 font-normal leading-relaxed mb-12 max-w-md text-sm">
              Whether you have a clear vision or need guidance on where to start, our experts are here to help turn your ideas into reality.
            </p>

            {/* Contact details */}
            <div className="space-y-7 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-1 font-semibold">Phone</div>
                  <a href={`tel:${CALL_NUMBER}`} className="text-lg font-bold text-white hover:text-primary transition-colors">
                    +91 {CALL_NUMBER}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-1 font-semibold">Email</div>
                  <div className="text-lg font-bold text-white">info@auramaxarchitects.com</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-1 font-semibold">Location</div>
                  <div className="text-lg font-bold text-white">Chellampatty, Tamil Nadu 625514</div>
                </div>
              </div>
            </div>

            {/* Call CTA button */}
            <a
              href={`tel:${CALL_NUMBER}`}
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-widest text-sm px-8 py-4 transition-colors"
              data-testid="call-button"
            >
              <Phone className="w-5 h-5" />
              Call +91 {CALL_NUMBER}
            </a>
          </motion.div>

          {/* RIGHT — "Talk to Our Expert" form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 border border-white/10 p-8 md:p-10"
          >
            <h3 className="text-2xl text-white mb-8 font-bold uppercase tracking-wide">
              Talk to Our Expert
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5" data-testid="contact-form">
              {/* Name */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Name</label>
                <Input
                  id="name"
                  required
                  className="bg-white/5 border-white/20 text-white rounded-none h-12 placeholder:text-gray-600 focus-visible:ring-primary focus-visible:border-primary"
                  placeholder="Your full name"
                  data-testid="input-name"
                />
              </div>

              {/* Phone with +91 prefix */}
              <div className="space-y-1.5">
                <label htmlFor="phone" className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Phone Number</label>
                <div className="flex">
                  <div className="flex items-center bg-white/10 border border-white/20 border-r-0 px-4 text-white font-bold text-sm shrink-0 h-12">
                    +91
                  </div>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    maxLength={10}
                    pattern="[0-9]{10}"
                    className="bg-white/5 border-white/20 text-white rounded-none h-12 placeholder:text-gray-600 focus-visible:ring-primary focus-visible:border-primary flex-1"
                    placeholder="Phone Number"
                    data-testid="input-phone"
                  />
                </div>
              </div>

              {/* City dropdown */}
              <div className="space-y-1.5">
                <label htmlFor="city" className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                  Location of your Plot — City
                </label>
                <div className="relative">
                  <select
                    id="city"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="appearance-none flex h-12 w-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary [&>option]:bg-zinc-900 [&>option]:text-white cursor-pointer"
                    data-testid="input-city"
                  >
                    <option value="" disabled>Select your city...</option>
                    {indianCities.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full h-14 rounded-none uppercase tracking-widest text-sm font-bold mt-2"
                disabled={isSubmitting}
                data-testid="submit-contact"
              >
                {isSubmitting ? "Booking..." : "Book Free Consultation"}
              </Button>

              {/* Privacy note */}
              <p className="text-[11px] text-gray-500 leading-relaxed font-normal text-center">
                By submitting, you agree to our{" "}
                <span className="text-primary underline cursor-pointer">privacy policy</span>
                , allowing us to use your information as outlined.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
