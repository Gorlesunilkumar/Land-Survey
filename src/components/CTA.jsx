import { Phone, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#0F4C81]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10 lg:p-16">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left Content */}

            <div>

              <span className="text-[#FF9800] font-semibold uppercase tracking-widest text-sm sm:text-base">
                Need a Survey?
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F4C81] leading-tight">
                Let's Measure Your Land with Accuracy
              </h2>

              <p className="mt-6 text-gray-600 text-base sm:text-lg leading-7 sm:leading-8">
                Whether it's agricultural land, residential plots,
                boundary marking, or layout measurement,
                <strong> Srinu Survey Solutions </strong>
                is ready to help you with reliable and accurate
                surveying services.
              </p>

            </div>

            {/* Right Buttons */}

            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 justify-center lg:justify-end">

              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-3 bg-[#0F4C81] hover:bg-blue-900 hover:scale-105 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                <Phone size={20} />
                Call Now
              </a>

              <a
                href="#contact"
                className="flex items-center justify-center gap-3 bg-[#FF9800] hover:bg-orange-600 hover:scale-105 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                Get Free Quote
                <ArrowRight size={20} />
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}