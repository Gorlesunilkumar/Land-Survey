import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Stats from "./components/Stats";
import CTA from "./components/CTA";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Map from "./components/Map";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="overflow-x-hidden">

        <Hero />

        <Services />

        <About />

        <WhyChooseUs />

        <Stats />

        <CTA />

        <Testimonials />

        <FAQ />

        <Contact />

        <Map />

      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Buttons */}
      <ScrollToTop />
      <WhatsAppButton />
    </>
  );
}

export default App;