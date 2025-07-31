import { ArrowRight, Briefcase, Star, Award, Code } from "lucide-react";
import { skils } from "./data";
export default function Hero() {
  const stats = [
    { number: "20+", label: "Projects Completed", icon: <Briefcase /> },
    { number: "100%", label: "Client Satisfaction", icon: <Star /> },
    { number: "3+", label: "Years Experience", icon: <Award /> },
    { number: "15+", label: "Technologies Used", icon: <Code /> },
  ];

  return (
    <>
      {/* Hero Section - Updated with your info */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Hello, I'm
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Farhan Bashir
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Full Stack Developer specializing in building responsive web
                applications with modern technologies like React, Node.js, and
                MongoDB.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                >
                  Contact Me <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#portfolio"
                  className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                >
                  View My Work
                </a>
              </div>
            </div>

            <div className="relative">
              {/* ... existing decorative elements ... */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 backdrop-blur-sm">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold text-white"></div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Full Stack Developer
                  </h3>
                  <p className="text-gray-600 mb-6">
                    JavaScript | React | Node.js | MongoDB
                  </p>
                  <div className="flex justify-center space-x-4">
                    {stats.slice(0, 2).map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-blue-600">
                          {stat.number}
                        </div>
                        <div className="text-sm text-gray-500">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white text-center px-4 py-16">
        <div className="w-full max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">My Skills</h2>
          <p className="text-base sm:text-lg mb-10 max-w-2xl mx-auto">
            I specialize in full-stack development with the MERN stack. I love
            building responsive, accessible, and high-performance applications.
            Here's what I'm good at:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 text-sm">
            {skils.map((item, index) => (
              <div
                className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition duration-300"
                key={index}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Updated with your stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="flex justify-center mb-3 text-blue-600">
                  {stat.icon}
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
