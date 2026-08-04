import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-[#FF9800] uppercase tracking-widest font-semibold text-sm sm:text-base">
            Contact Us
          </span>

          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F4C81]">
            Let's Discuss Your Survey Requirements
          </h2>

          <p className="mt-5 text-gray-600 text-base sm:text-lg leading-7 sm:leading-8">
            We'd love to help with your land surveying requirements.
            Contact us today for accurate and reliable survey services.
          </p>

        </div>

        {/* Contact Section */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mt-14">

          {/* Left Side */}

          <div className="space-y-8">

            {/* Phone */}

            <div className="flex items-start gap-4">

              <div className="bg-[#0F4C81] p-4 rounded-2xl flex-shrink-0">
                <Phone className="text-white" />
              </div>

              <div>

                <h3 className="font-bold text-lg sm:text-xl">
                  Phone
                </h3>

                <a
                  href="tel:+917702077239"
                  className="text-gray-600 hover:text-[#FF9800] transition"
                >
                  +91 7702077239
                </a>

              </div>

            </div>

            {/* Email */}

            <div className="flex items-start gap-4">

              <div className="bg-[#0F4C81] p-4 rounded-2xl flex-shrink-0">
                <Mail className="text-white" />
              </div>

              <div>

                <h3 className="font-bold text-lg sm:text-xl">
                  Email
                </h3>

                <p className="text-gray-600 break-all">
                  gsreenu2015@gmail.com
                </p>

              </div>

            </div>

            {/* Address */}

            <div className="flex items-start gap-4">

              <div className="bg-[#0F4C81] p-4 rounded-2xl flex-shrink-0">
                <MapPin className="text-white" />
              </div>

              <div>

                <h3 className="font-bold text-lg sm:text-xl">
                  Office
                </h3>

                <p className="text-gray-600">
                  S. Kota,
                  <br />
                  Vizianagaram District,
                  <br />
                  Andhra Pradesh
                </p>

              </div>

            </div>

            {/* WhatsApp */}

            <a
              href="https://wa.me/917702077239"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 hover:scale-105 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              <MessageCircle size={22} />
              Chat on WhatsApp
            </a>

          </div>

          {/* Contact Form */}

          <form className="bg-[#F8FAFC] rounded-3xl shadow-xl p-6 sm:p-8 space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-[#0F4C81]"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-[#0F4C81]"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-[#0F4C81]"
            />

            <select
              className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-[#0F4C81]"
            >
              <option>Select Survey Type</option>
              <option>Boundary Survey</option>
              <option>Land Measurement</option>
              <option>Plot Layout</option>
              <option>Agricultural Survey</option>
              <option>Other</option>
            </select>

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-[#0F4C81]"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#FF9800] hover:bg-orange-600 hover:scale-[1.02] text-white py-4 rounded-xl font-semibold transition-all duration-300"
            >
              Send Enquiry
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}