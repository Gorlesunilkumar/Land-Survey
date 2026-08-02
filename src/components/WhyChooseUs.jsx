import {
  ShieldCheck,
  Clock3,
  Award,
  Users,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <ShieldCheck size={40} className="text-green-600" />,
      title: "Accurate Measurements",
      description:
        "We carefully measure land using chains and measuring tapes to ensure reliable and accurate results.",
    },
    {
      icon: <Clock3 size={40} className="text-orange-500" />,
      title: "On-Time Service",
      description:
        "We complete survey work within the promised time while maintaining quality standards.",
    },
    {
      icon: <Award size={40} className="text-blue-700" />,
      title: "Trusted Professionals",
      description:
        "We provide honest, transparent, and customer-friendly surveying services.",
    },
    {
      icon: <Users size={40} className="text-purple-600" />,
      title: "Growing Every Day",
      description:
        "Using traditional surveying methods today while planning to introduce advanced equipment in the future.",
    },
  ];

  return (
    <section
      id="why-us"
      className="py-16 sm:py-20 lg:py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-[#FF9800] uppercase tracking-widest font-semibold text-sm sm:text-base">
            Why Choose Us
          </span>

          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F4C81]">
            Why Customers Trust Us
          </h2>

          <p className="mt-5 text-gray-600 text-base sm:text-lg leading-7 sm:leading-8">
            We provide reliable land surveying services with precision,
            honesty, and dedication to every project.
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-12 lg:mt-16">

          {features.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >

              <div className="flex justify-center mb-6">
                {item.icon}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#0F4C81] mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}