import type React from "react";
import {
  FaUniversity,
  FaChartLine,
  FaMapMarkerAlt,
  FaBook,
  FaLaptop,
  FaGlobe,
  FaTrophy,
} from "react-icons/fa";
import { Service } from "./ServiceItem";
import { getService } from "services";
import { LandingButton } from "./LandingButton";

const iconMap: Record<string, React.ReactNode> = {
  "strategic-planning": <FaChartLine size={48} />,
  "recruiting-marketing": <FaMapMarkerAlt size={48} />,
  "academic-curricula": <FaBook size={48} />,
  "online-learning": <FaLaptop size={48} />,
  "international-exchange": <FaGlobe size={48} />,
  "reputation-ranking": <FaTrophy size={48} />,
};

export default async function UniversityServices() {
  const { data } = await getService();

  const serviceMapIon = data.map((service) => {
    return {
      ...service,
      icon: iconMap[service.slug!],
    };
  });

  return (
    <section className=" w-full bg-white pt-20 pb-20 px-6">
      <div className="flex flex-col items-center mb-12">
        <div className="text-slate-600 mb-4">
          <FaUniversity size={64} />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-700 text-center mb-6">
          Cải thiện và phát triển các trường đại học
        </h2>
        <div className="w-24 h-0.5 bg-slate-300 mb-6"></div>
        <p className="text-slate-600 text-center max-w-2xl">
          Hỗ trợ các trường đại học đạt được các mục tiêu nguyện vọng về tăng trưởng, chất lượng và danh tiếng.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {serviceMapIon.map((service, index) => (
          <Service
            key={index}
            name={service.name}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <LandingButton text="Learn more" />
      </div>
    </section>
  );
}
