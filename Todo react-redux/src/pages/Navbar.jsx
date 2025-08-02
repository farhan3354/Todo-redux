import React, { useState, useEffect } from "react";
import { navItems } from "./data";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrollY > 50
            ? "bg-white/90 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-900">Farhan</div>

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
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
