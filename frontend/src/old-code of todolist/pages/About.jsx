import { techStack } from "./data";
import { GitBranch } from "lucide-react";
export default function About() {
  return (
    <>
      {/* About Section - Updated with your bio */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate developer with expertise in modern web technologies
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                I build digital experiences that matter
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With 1 year of experience in web development, I
                specialize in creating efficient, scalable, and user-friendly
                applications. My journey in tech began with a fascination for
                problem-solving and has evolved into a passion for building
                solutions that make an impact.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                When I'm not coding, you can find me contributing to open-source
                projects, learning new technologies, or helping others in the
                developer community.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {techStack.slice(0, 4).map((tech, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div
                      className={`w-3 h-3 ${
                        index % 4 === 0
                          ? "bg-blue-600"
                          : index % 4 === 1
                          ? "bg-purple-600"
                          : index % 4 === 2
                          ? "bg-pink-600"
                          : "bg-green-600"
                      } rounded-full`}
                    ></div>
                    <span className="text-gray-700">
                      {tech.name}{" "}
                      <span className="text-gray-400 text-sm">
                        ({tech.level})
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <GitBranch className="w-12 h-12 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">
                    My Tech Stack
                  </h4>
                  <div className="flex flex-wrap justify-center gap-2 max-w-xs mx-auto">
                    {techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-white px-3 py-1 rounded-full text-sm shadow-sm"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
