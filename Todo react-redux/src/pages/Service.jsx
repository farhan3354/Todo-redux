import { portfolioItems } from "./data";
import { Code, Database, Cpu, Smartphone } from "lucide-react";

export default function Service() {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description:
        "Building responsive, accessible websites with React, Next.js, and modern JavaScript frameworks.",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      description:
        "Creating robust server-side applications with Node.js, Express, and MongoDB/Mongoose.",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Full Stack Solutions",
      description:
        "End-to-end development of web applications using MERN stack (MongoDB, Express, React, Node).",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description:
        "Building cross-platform mobile applications with React Native and Expo.",
    },
  ];
  return (
    <>
      {/* Services Section - Updated with your actual services */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Section - Enhanced with tech tags */}
      <section id="portfolio" className="py-20">
        {/* ... existing section structure ... */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div
                className={`${item.image} h-64 rounded-2xl mb-4 relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center p-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <div className="flex flex-wrap justify-center gap-2">
                      {item.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-white/90 text-gray-800 px-2 py-1 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.category}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
