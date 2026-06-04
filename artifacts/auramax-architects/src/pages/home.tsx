import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";
import Location from "@/components/sections/Location";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Portfolio />
        <Contact />
        <Location />
      </main>
      <Footer />
    </div>
  );
}