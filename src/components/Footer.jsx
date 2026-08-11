import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0F4C81] text-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company */}

          <div>

            <h2 className="text-2xl sm:text-3xl font-bold">
              Srinu Survey Solutions
            </h2>

            <p className="mt-5 text-gray-300 leading-7">
              Professional land surveying services with
              accuracy, honesty and customer satisfaction.
              Serving S. Kota, Vizianagaram District and
              nearby areas.
            </p>

          </div>


          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <a
                  href="#home"
                  className="hover:text-[#FF9800] transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="hover:text-[#FF9800] transition"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="hover:text-[#FF9800] transition"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-[#FF9800] transition"
                >
                  Contact
                </a>
              </li>

            </ul>

          </div>


          {/* Services */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Services
            </h3>

            <ul className="space-y-3 text-gray-300">

              <li>Boundary Survey</li>

              <li>Land Measurement</li>

              <li>Plot Layout</li>

              <li>Agricultural Survey</li>

            </ul>

          </div>


          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-4">

              {/* Phone */}

              <div className="flex items-start gap-3">

                <Phone
                  size={18}
                  className="mt-1 flex-shrink-0"
                />

                <a
                  href="tel:+919951901218"
                  className="hover:text-[#FF9800] transition"
                >
                  +91 99519 01218
                </a>

              </div>


              {/* Email */}

              <div className="flex items-start gap-3">

                <Mail
                  size={18}
                  className="mt-1 flex-shrink-0"
                />

                <span className="break-all">
                  gsreenu2015@gmail.com
                </span>

              </div>


              {/* Address */}

              <div className="flex items-start gap-3">

                <MapPin
                  size={18}
                  className="mt-1 flex-shrink-0"
                />

                <span>
                  S. Kota,
                  <br />
                  Vizianagaram District,
                  <br />
                  Andhra Pradesh
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* Bottom */}

      <div className="border-t border-white/20">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-center text-sm text-gray-300">

          © {year} Srinu Survey Solutions. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}