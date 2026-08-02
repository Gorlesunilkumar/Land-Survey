import {
  Users,
  MapPinned,
  BadgeCheck,
  Clock3,
} from "lucide-react";

export default function Stats() {
  const stats = [
    {
      icon: <Users size={40} className="text-white" />,
      number: "100+",
      title: "Happy Clients",
    },
    {
      icon: <MapPinned size={40} className="text-white" />,
      number: "500+",
      title: "Acres Surveyed",
    },
    {
      icon: <BadgeCheck size={40} className="text-white" />,
      number: "100%",
      title: "Accurate Measurements",
    },
    {
      icon: <Clock3 size={40} className="text-white" />,
      number: "24/7",
      title: "Customer Support",
    },
  ];

  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-[#0F4C81]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="text-center bg-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-sm hover:bg-white/20 hover:-translate-y-2 transition-all duration-300"
            >

              <div className="flex justify-center mb-5">
                {item.icon}
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                {item.number}
              </h2>

              <p className="text-gray-200 mt-3 text-base sm:text-lg">
                {item.title}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}