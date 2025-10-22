import React from "react";
import { MapPin, Cloud, Info } from "lucide-react";

const features = [
  {
    icon: <MapPin size={32} className="text-white" />,
    title: "Interactive Maps",
    description:
      "Explore cities with high-quality interactive maps powered by Mapbox.",
    bgColor: "bg-sky-600",
  },
  {
    icon: <Cloud size={32} className="text-white" />,
    title: "Real-time Weather",
    description:
      "Get current weather conditions and forecasts for any location.",
    bgColor: "bg-orange-400",
  },
  {
    icon: <Info size={32} className="text-white" />,
    title: "City Details",
    description:
      "Access comprehensive information including population, timezone, and more.",
    bgColor: "bg-teal-500",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-12 bg-[rgb(245,247,247)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Everything You Need to Know
        </h2>
        <p className="mt-2 text-lg text-[rgb(98,112,133)]">
          Access comprehensive city information in one place
        </p>
      </div>

      <div className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl shadow p-6 flex flex-col transition-transform duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]"
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-lg ${feature.bgColor}`}
              >
                {feature.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-[rgb(98,112,133)] flex-grow">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
