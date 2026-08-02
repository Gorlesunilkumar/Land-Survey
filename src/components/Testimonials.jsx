import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Heading */}

        <span className="text-[#FF9800] uppercase tracking-widest font-semibold text-sm sm:text-base">
          Our Promise
        </span>

        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F4C81]">
          Our Commitment to Every Customer
        </h2>

        <p className="mt-5 text-gray-600 text-base sm:text-lg leading-7 sm:leading-8 max-w-3xl mx-auto">
          As a growing surveying company, these are the values we promise
          every customer.
        </p>

        {/* Promise Card */}

        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 lg:p-14 mt-12 hover:shadow-2xl transition-all duration-300">

          <Quote
            size={50}
            className="mx-auto text-[#FF9800]"
          />

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-700 leading-8 sm:leading-9 italic">
            "At Srinu Survey Solutions, we believe every measurement
            matters. We are committed to providing accurate land surveys,
            honest service, affordable pricing, and complete customer
            satisfaction. As we grow, we will continue investing in better
            technology while maintaining the trust of every client."
          </p>

          <div className="mt-10">

            <h3 className="text-xl sm:text-2xl font-bold text-[#0F4C81]">
              Srinu Survey Solutions
            </h3>

            <p className="text-gray-500 mt-2">
              Accurate • Honest • Reliable
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}