import about from "../assets/about.png";
import { CheckCircle } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Image */}

          <div className="order-1">

            <img
              src={about}
              alt="Srinu Survey Solutions"
              className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500"
            />

          </div>

          {/* Content */}

          <div className="order-2">

            <span className="text-[#FF9800] uppercase tracking-widest font-semibold text-sm sm:text-base">
              About Us
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F4C81] leading-tight">
              Welcome to Srinu Survey Solutions
            </h2>

            <p className="mt-6 text-gray-600 text-base sm:text-lg leading-7 sm:leading-8">
              Srinu Survey Solutions provides professional land surveying
              services with a strong focus on accuracy, honesty, and customer
              satisfaction. We currently perform land surveys using traditional
              surveying methods such as chains, measuring tapes, and field
              observations to ensure reliable measurements.
            </p>

            <p className="mt-5 text-gray-600 text-base sm:text-lg leading-7 sm:leading-8">
              Our goal is to provide affordable and dependable surveying
              services for agricultural lands, residential plots, layouts,
              and boundary measurements. As our company grows, we plan to
              introduce advanced surveying equipment while maintaining the
              same commitment to quality.
            </p>

            {/* Features */}

            <div className="mt-8 space-y-4">

              <div className="flex items-start gap-3">
                <CheckCircle
                  className="text-green-600 mt-1 flex-shrink-0"
                  size={22}
                />
                <span>Accurate Land Measurements</span>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle
                  className="text-green-600 mt-1 flex-shrink-0"
                  size={22}
                />
                <span>Boundary & Property Survey</span>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle
                  className="text-green-600 mt-1 flex-shrink-0"
                  size={22}
                />
                <span>Layout Marking & Plot Measurement</span>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle
                  className="text-green-600 mt-1 flex-shrink-0"
                  size={22}
                />
                <span>Affordable & Honest Service</span>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle
                  className="text-green-600 mt-1 flex-shrink-0"
                  size={22}
                />
                <span>Customer Satisfaction is Our Priority</span>
              </div>

            </div>

            {/* Button */}

            <a
              href="#contact"
              className="inline-block mt-10 bg-[#0F4C81] hover:bg-blue-900 hover:scale-105 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              Contact Us
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}