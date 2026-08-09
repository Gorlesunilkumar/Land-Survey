import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    setResult("Sending...");

    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      "60a22dde-2923-41f0-97d9-ed8f4b2ed34e"
    );

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    if (data.success) {
      setResult("✅ Enquiry sent successfully!");
      event.target.reset();
    } else {
      setResult("❌ Failed to send enquiry. Please try again.");
    }
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mt-14">

          {/* Left */}

          <div className="space-y-8">

            <div className="flex items-start gap-4">

              <div className="bg-[#0F4C81] p-4 rounded-2xl">
                <Phone className="text-white" />
              </div>

              <div>

                <h3 className="font-bold text-lg">
                  Phone
                </h3>

                <a
                  href="tel:+917702077239"
                  className="text-gray-600 hover:text-[#FF9800]"
                >
                  +91 77020 77239
                </a>

              </div>

            </div>

            <div className="flex items-start gap-4">

              <div className="bg-[#0F4C81] p-4 rounded-2xl">
                <Mail className="text-white" />
              </div>

              <div>

                <h3 className="font-bold text-lg">
                  Email
                </h3>

                <p className="text-gray-600 break-all">
                  gsreenu2015@gmail.com
                </p>

              </div>

            </div>

            <div className="flex items-start gap-4">

              <div className="bg-[#0F4C81] p-4 rounded-2xl">
                <MapPin className="text-white" />
              </div>

              <div>

                <h3 className="font-bold text-lg">
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

            <a
              href="https://wa.me/917702077239"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition"
            >
              <MessageCircle size={22} />
              Chat on WhatsApp
            </a>

          </div>

          {/* Right */}

          <form
            onSubmit={onSubmit}
            className="bg-[#F8FAFC] rounded-3xl shadow-xl p-6 sm:p-8 space-y-5"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full bg-white border border-gray-300 rounded-xl p-4 text-gray-900 placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-[#0F4C81]"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              className="w-full bg-white border border-gray-300 rounded-xl p-4 text-gray-900 placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-[#0F4C81]"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full bg-white border border-gray-300 rounded-xl p-4 text-gray-900 placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-[#0F4C81]"
            />

            <select
              name="survey"
              required
              defaultValue=""
              className="w-full bg-white border border-gray-300 rounded-xl p-4 text-gray-700 outline-none focus:ring-2 focus:ring-[#0F4C81]"
            >
              <option value="" disabled>
                Select Survey Type
              </option>

              <option>Boundary Survey</option>
              <option>Land Measurement</option>
              <option>Plot Layout</option>
              <option>Agricultural Survey</option>
              <option>Other</option>

            </select>

            <textarea
              rows="5"
              name="message"
              placeholder="Your Message"
              required
              className="w-full bg-white border border-gray-300 rounded-xl p-4 text-gray-900 placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-[#0F4C81]"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#FF9800] hover:bg-orange-600 text-white py-4 rounded-xl font-semibold transition"
            >
              Send Enquiry
            </button>

            <p className="text-center font-medium text-green-600">
              {result}
            </p>

          </form>

        </div>

      </div>
    </section>
  );
}