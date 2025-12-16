import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Experience from "./components/sections/Experience";
import Hero from "./components/sections/Hero";
import LearningPlan from "./components/sections/LearningPlan";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import ThemeToggle from "./components/ui/ThemeToggle";

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  const navItems = ["about", "experience", "skills", "projects", "learning", "contact"];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 scroll-smooth transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full glass-effect shadow-lg border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <motion.h1
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-bold text-gradient cursor-pointer"
          >
            Anand Palanisamy
          </motion.h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6 font-medium">
            {navItems.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="relative group text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all group-hover:w-full"></span>
              </a>
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden glass-effect border-t border-gray-200 dark:border-gray-700"
            >
              <ul className="flex flex-col items-center py-4 space-y-3 font-medium">
                {navItems.map((section) => (
                  <li key={section}>
                    <a
                      href={`#${section}`}
                      className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                      onClick={closeMenu}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Sections */}
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <LearningPlan />
      <Contact />

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800 py-8 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              © {new Date().getFullYear()} <span className="font-bold text-gradient">Anand Palanisamy</span>. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Built with React, Tailwind CSS, and Framer Motion ✨
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
