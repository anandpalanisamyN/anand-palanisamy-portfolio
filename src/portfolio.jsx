import { motion } from "framer-motion";
import { Button } from "./components/ui/button";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 text-gray-800">
      {/* Header */}
      <header className="p-6 shadow-md bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Anand Palanisamy</h1>
          <nav className="space-x-6 font-medium">
            <a href="#about" className="hover:text-blue-600">About</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-4"
        >
          Hi, I'm <span className="text-blue-600">Anand Palanisamy</span>
        </motion.h2>
        <p className="text-xl text-gray-700 mb-6">
          Backend Developer | 3.4 years of experience building scalable applications
        </p>
        <Button>
          <a href="#projects">View My Work</a>
        </Button>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold mb-10 text-center">About Me</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Innovative Software Developer with experience designing efficient solutions 
          and delivering high-quality software. Passionate about creating impactful 
          systems and exploring new technologies.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-white py-6 mt-12 shadow-inner">
        <div className="max-w-6xl mx-auto text-center text-gray-600">
          © {new Date().getFullYear()} Anand Palanisamy. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
