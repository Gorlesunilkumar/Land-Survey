import {
  Ruler,
  Map,
  Home,
  Trees,
  MapPinned,
  FileText,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: <Ruler size={40} />,
    title: "Boundary Survey",
    description:
      "Accurate property boundary measurement and boundary marking.",
  },
  {
    icon: <Map size={40} />,
    title: "Land Measurement",
    description:
      "Precise measurement of residential, commercial and agricultural lands.",
  },
  {
    icon: <Home size={40} />,
    title: "Plot Layout",
    description:
      "Residential plot layout marking and site measurements.",
  },
  {
    icon: <Trees size={40} />,
    title: "Agricultural Survey",
    description:
      "Land measurement for farms and agricultural properties.",
  },
  {
    icon: <MapPinned size={40} />,
    title: "Site Marking",
    description:
      "Marking corners, boundaries and construction layouts accurately.",
  },
  {
    icon: <FileText size={40} />,
    title: "Survey Consultation",
    description:
      "Professional guidance for land measurements and survey planning.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-[#F8FAFC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center">

          <span className="text-[#FF9800] uppercase tracking-widest font-semibold text-sm sm:text-base">
            Our Services
          </span>

          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F4C81]">
            Professional Surveying Services
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-gray-600 text-base sm:text-lg leading-7 sm:leading-8">
            We provide reliable and affordable land surveying services
            using traditional surveying methods with a strong commitment
            to accuracy and customer satisfaction.
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 lg:mt-16">

          {services.map((service, index) => (

            <div
              key={index}
              className="group bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#0F4C81] text-white flex items-center justify-center group-hover:bg-[#FF9800] transition-colors duration-300">
                {service.icon}
              </div>

              <h3 className="mt-6 text-xl sm:text-2xl font-bold text-[#0F4C81]">
                {service.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {service.description}
              </p>

              <button
                className="mt-6 flex items-center gap-2 text-[#FF9800] font-semibold hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight size={18} />
              </button>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}