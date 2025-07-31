import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Star,
  Users,
  Award,
  Briefcase,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  Code,
  Database,
  Cpu,
  Smartphone,
  Globe,
  Server,
  GitBranch,
} from "lucide-react";
import BouncingBall from "./BouncingBall";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Services", "Portfolio", "Contact"];

  // Updated services with your actual skills
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

  // Updated portfolio with your actual projects
  const portfolioItems = [
    {
      title: "E-Commerce Platform",
      category: "Full Stack",
      image: "bg-gradient-to-br from-purple-500 to-pink-500",
      tech: ["React", "Node.js", "MongoDB", "Stripe API"],
    },
    {
      title: "Task Management App",
      category: "Frontend",
      image: "bg-gradient-to-br from-blue-500 to-cyan-500",
      tech: ["React", "Tailwind CSS", "Firebase"],
    },
    {
      title: "API Integration",
      category: "Backend",
      image: "bg-gradient-to-br from-green-500 to-emerald-500",
      tech: ["Node.js", "Express", "RESTful APIs"],
    },
    {
      title: "Portfolio Website",
      category: "Frontend",
      image: "bg-gradient-to-br from-orange-500 to-red-500",
      tech: ["React", "Framer Motion", "Tailwind CSS"],
    },
    {
      title: "Real-time Chat",
      category: "Full Stack",
      image: "bg-gradient-to-br from-indigo-500 to-purple-500",
      tech: ["Socket.io", "React", "MongoDB"],
    },
    {
      title: "Mobile Fitness App",
      category: "Mobile",
      image: "bg-gradient-to-br from-pink-500 to-rose-500",
      tech: ["React Native", "Expo", "Firebase"],
    },
  ];

  // Updated stats with your actual achievements
  const stats = [
    { number: "20+", label: "Projects Completed", icon: <Briefcase /> },
    { number: "100%", label: "Client Satisfaction", icon: <Star /> },
    { number: "3+", label: "Years Experience", icon: <Award /> },
    { number: "15+", label: "Technologies Used", icon: <Code /> },
  ];

  // Your tech stack
  const techStack = [
    { name: "JavaScript", level: "Advanced" },
    { name: "React", level: "Advanced" },
    { name: "Node.js", level: "Intermediate" },
    { name: "MongoDB", level: "Intermediate" },
    { name: "Express", level: "Intermediate" },
    { name: "Tailwind CSS", level: "Advanced" },
    { name: "Git", level: "Intermediate" },
    { name: "React Native", level: "Beginner" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrollY > 50
            ? "bg-white/90 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-900">Clark</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

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
                With {stats[2].number} of experience in web development, I
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

      {/* Services Section - Updated with your actual services */}
      <section id="services" className="py-20 bg-gray-50">
        {/* ... existing section structure ... */}
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-blue-400" />
                  <span>Ali town Lahore Pakistan</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-blue-400" />
                  <span>+923141637204</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <span>farhanbashir3354@gmail.com</span>
                </div>
              </div>
            </div>

            <div>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Updated with your info */}
      <footer className="bg-gray-800 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} Farhan. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            {/* Add your social media links */}
            <a href="#" className="hover:text-white transition-colors">
              GitHub
            </a>
            <a href="#" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
