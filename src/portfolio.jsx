import { useState } from "react";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Experience from "./components/sections/Experience";
import Hero from "./components/sections/Hero";

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  const navItems = ["about", "experience"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 text-gray-800 scroll-smooth">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/30 shadow-lg border-b border-gray-200">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-6">
          {/* Logo */}
          <h1
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-2xl font-bold text-blue-600 cursor-pointer hover:scale-105 transform transition duration-300"
          >
            Anand Palanisamy
          </h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 font-medium">
            {navItems.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="relative group text-gray-800 hover:text-blue-600 transition-colors duration-300"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <span className="absolute left-0 -bottom-1 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Hamburger */}
          <div className="md:hidden">
            <button
              className="text-gray-800 hover:text-blue-600 focus:outline-none"
              onClick={toggleMenu}
            >
              {menuOpen ? (
                // Close Icon
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger Icon
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-lg shadow-lg">
            <ul className="flex flex-col items-center py-4 space-y-4 font-medium">
              {navItems.map((section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
                    onClick={closeMenu}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* Sections */}
      <Hero />
      <About />
      <Experience />

      {/* Footer */}
      <footer className="bg-white py-6 mt-12 shadow-inner">
        <div className="max-w-6xl mx-auto text-center text-gray-600">
          © {new Date().getFullYear()} Anand Palanisamy. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
