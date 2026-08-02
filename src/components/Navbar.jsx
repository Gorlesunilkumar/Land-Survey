import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  MapPin,
  Compass,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "Services", link: "#services" },
    { name: "About", link: "#about" },
    { name: "Why Us", link: "#why-us" },
    { name: "FAQ", link: "#faq" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <>
      {/* Top Bar */}

      <div className="bg-[#0F4C81] text-white text-sm">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col sm:flex-row justify-between items-center gap-2">

          <div className="flex items-center gap-2 text-center sm:text-left">

            <MapPin size={16} />

            <span className="text-xs sm:text-sm">
              S. Kota, Vizianagaram District, Andhra Pradesh
            </span>

          </div>

          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 text-xs sm:text-sm hover:text-orange-300 transition"
          >
            <Phone size={16} />
            +91 XXXXXXXXXX
          </a>

        </div>

      </div>

      {/* Main Navbar */}

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-lg shadow-lg"
            : "bg-white"
        }`}
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">

          {/* Logo */}

          <a
            href="#home"
            className="flex items-center gap-3"
          >

            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0F4C81] flex items-center justify-center text-white">

              <Compass size={24} />

            </div>

            <div>

              <h2 className="font-bold text-lg sm:text-xl text-[#0F4C81]">
                Srinu Survey Solutions
              </h2>

              <p className="hidden sm:block text-xs text-gray-500">
                Accurate Land Surveying
              </p>

            </div>

          </a>

          {/* Desktop Navigation */}

          <nav className="hidden md:flex items-center gap-8">

            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="font-medium hover:text-[#FF9800] transition duration-300"
              >
                {item.name}
              </a>
            ))}

          </nav>

          {/* Desktop Quote Button */}

          <a
            href="#contact"
            className="hidden md:block bg-[#FF9800] hover:bg-orange-600 hover:scale-105 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
          >
            Get Quote
          </a>

          {/* Mobile Menu Button */}

          <button
            className="md:hidden text-[#0F4C81]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* Mobile Navigation */}

        {isOpen && (

          <div className="md:hidden bg-white border-t shadow-lg">

            <nav className="flex flex-col">

              {navLinks.map((item) => (

                <a
                  key={item.name}
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-4 border-b hover:bg-blue-50 font-medium transition"
                >
                  {item.name}
                </a>

              ))}

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="m-5 bg-[#FF9800] hover:bg-orange-600 text-center text-white py-3 rounded-xl font-semibold transition"
              >
                Get Quote
              </a>

            </nav>

          </div>

        )}

      </header>
    </>
  );
}