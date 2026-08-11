import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  CheckCircle,
  MapPin,
} from "lucide-react";

import hero from "../assets/hero.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/40"></div>

      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20 md:py-28">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >

          {/* Badge */}

          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-xs sm:text-sm mb-6">

            <MapPin size={16} />

            <span>
              Serving S. Kota, Vizianagaram & Nearby Areas
            </span>

          </div>


          {/* Heading */}

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">

            Accurate Land

            <br />

            Surveying

            <span className="text-[#FF9800]">
              {" "}You Can Trust
            </span>

          </h1>


          {/* Description */}

          <p className="mt-6 text-base sm:text-lg text-gray-200 leading-7 sm:leading-8 max-w-2xl">

            Srinu Survey Solutions provides reliable land measurement,
            boundary surveys, agricultural land surveys and layout
            marking with honesty, precision and customer satisfaction.

          </p>


          {/* Buttons */}

          <div className="flex flex-col sm:flex-row gap-4 mt-10">

            {/* Call */}

            <a
              href="tel:+919951901218"
              className="bg-[#FF9800] hover:bg-orange-600 text-white px-6 py-4 rounded-xl flex items-center justify-center gap-3 font-semibold transition-all duration-300 hover:scale-105"
            >
              <Phone size={20} />
              Call Now
            </a>


            {/* WhatsApp */}

            <a
              href="https://wa.me/919951901218"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-xl flex items-center justify-center gap-3 font-semibold transition-all duration-300 hover:scale-105"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>

          </div>


          {/* Features */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">

            <div className="flex items-center gap-3 text-white">
              <CheckCircle className="text-green-400" size={20} />
              <span>Accurate Measurements</span>
            </div>

            <div className="flex items-center gap-3 text-white">
              <CheckCircle className="text-green-400" size={20} />
              <span>Affordable Pricing</span>
            </div>

            <div className="flex items-center gap-3 text-white">
              <CheckCircle className="text-green-400" size={20} />
              <span>Honest Service</span>
            </div>

            <div className="flex items-center gap-3 text-white">
              <CheckCircle className="text-green-400" size={20} />
              <span>Customer Satisfaction</span>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}