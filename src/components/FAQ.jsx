import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "What services do you provide?",
      answer:
        "We provide land measurement, boundary surveys, agricultural land surveys, plot layout marking, and property survey services.",
    },
    {
      question: "Which areas do you serve?",
      answer:
        "We serve S. Kota, Vizianagaram District, Visakhapatnam, and nearby areas in Andhra Pradesh.",
    },
    {
      question: "How can I request a survey?",
      answer:
        "You can contact us by phone, WhatsApp, or by filling out the enquiry form on this website.",
    },
    {
      question: "Do you provide agricultural land surveys?",
      answer:
        "Yes. We provide accurate agricultural land measurement and boundary marking services.",
    },
    {
      question: "Will you introduce modern surveying equipment in the future?",
      answer:
        "Yes. As our business grows, we plan to introduce advanced surveying equipment while continuing our commitment to accuracy and customer satisfaction.",
    },
  ];

  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center">

          <span className="text-[#FF9800] uppercase tracking-widest font-semibold text-sm sm:text-base">
            FAQ
          </span>

          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F4C81]">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-gray-600 text-base sm:text-lg leading-7 sm:leading-8 max-w-3xl mx-auto">
            Find answers to common questions about our surveying services.
          </p>

        </div>

        {/* FAQ Items */}

        <div className="mt-12 space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >

              <button
                onClick={() => setOpen(open === index ? -1 : index)}
                className="w-full flex justify-between items-center p-5 sm:p-6 text-left"
              >

                <h3 className="font-semibold text-base sm:text-lg pr-4">
                  {faq.question}
                </h3>

                {open === index ? (
                  <ChevronUp
                    className="text-[#0F4C81] flex-shrink-0"
                    size={22}
                  />
                ) : (
                  <ChevronDown
                    className="text-[#0F4C81] flex-shrink-0"
                    size={22}
                  />
                )}

              </button>

              {open === index && (

                <div className="px-5 sm:px-6 pb-6 text-gray-600 leading-7 sm:leading-8 text-sm sm:text-base">
                  {faq.answer}
                </div>

              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}