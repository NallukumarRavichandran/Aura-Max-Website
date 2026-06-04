import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export default function Location() {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4" data-testid="location-title">Our Location</h2>
          <p className="text-muted-foreground" data-testid="location-subtitle">Visit our office in Chellampatty, Tamil Nadu</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 bg-muted/30 p-8 flex flex-col justify-center space-y-8"
          >
            <div>
              <h3 className="font-serif text-xl mb-6 text-foreground border-b border-border pb-4">Office Details</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <div>
                    <span className="block font-medium text-foreground mb-1">Address</span>
                    <span className="text-muted-foreground">Chellampatty, Tamil Nadu 625514, India</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <div>
                    <span className="block font-medium text-foreground mb-1">Phone</span>
                    <span className="text-muted-foreground">+91 98765 43210</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <div>
                    <span className="block font-medium text-foreground mb-1">Email</span>
                    <span className="text-muted-foreground">info@auramaxarchitects.com</span>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-xl mb-6 text-foreground border-b border-border pb-4">Working Hours</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div className="w-full flex justify-between text-muted-foreground">
                    <span>Mon–Fri</span>
                    <span>9AM–6PM</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-5 h-5 shrink-0" />
                  <div className="w-full flex justify-between text-muted-foreground">
                    <span>Saturday</span>
                    <span>9AM–6PM</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-5 h-5 shrink-0" />
                  <div className="w-full flex justify-between text-muted-foreground">
                    <span>Sunday</span>
                    <span className="text-destructive font-medium">Closed</span>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8 h-[400px] lg:h-auto rounded-none overflow-hidden border border-border"
          >
            <iframe
              src="https://maps.google.com/maps?ll=9.927825,77.889393&z=12&t=m&hl=en-US&gl=US&mapclient=embed&q=Chellampatty%20Tamil%20Nadu%20625514&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Auramax Architects Office Location"
              data-testid="map-location"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}