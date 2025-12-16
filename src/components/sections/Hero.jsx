import { motion } from "framer-motion";
import { FaArrowDown, FaGithub, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-400/30 dark:bg-blue-600/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-40 -right-20 w-96 h-96 bg-purple-400/30 dark:bg-purple-600/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-80 h-80 bg-pink-400/30 dark:bg-pink-600/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Hi, I'm{" "}
              <span className="text-gradient">
                <Typewriter
                  speed="fast"
                  variance={1}
                  backspace="word"
                  cursorBlinkSpeed={2}
                  words={[
                    "Anand Palanisamy",
                    "a Backend Developer",
                    "a Problem Solver",
                  ]}
                  loop={0}
                />
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-4">
              <span className="font-bold text-blue-600 dark:text-blue-400">
                Backend Developer
              </span>{" "}
              with <span className="font-semibold">3.4 years</span> of
              experience in building{" "}
              <span className="font-semibold">
                scalable, secure, and modern applications
              </span>
              .
            </p>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8">
              Specialized in .NET, Node.js, AWS, and cloud-native solutions.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button>
                <a href="#projects" className="flex items-center gap-2">
                  🚀 View My Work
                </a>
              </Button>
              <Button variant="outline">
                <a href="#contact" className="flex items-center gap-2">
                  📩 Contact Me
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://github.com/anandpalanisamyN"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-effect rounded-full hover:glow-effect transition-all"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://www.linkedin.com/in/anand-palanisamy-580b2b1b8/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-effect rounded-full hover:glow-effect transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5 text-blue-600" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center relative"
          >
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition duration-1000 animate-pulse"></div>

              {/* Image Container */}
              <div className="relative">
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <img
                    src="https://avatars.githubusercontent.com/u/122594645?v=4"
                    alt="Anand Palanisamy"
                    className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-3xl border-4 border-white dark:border-gray-700 shadow-2xl object-cover"
                  />
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-60 animate-pulse"></div>
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-pink-500 to-orange-500 rounded-2xl blur-xl opacity-60 animate-pulse animation-delay-2000"></div>
              </div>

              {/* Stats Badges */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -left-2 sm:-left-6 top-1/4 glass-effect rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl"
              >
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">
                  3.4+
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  Years Exp
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -right-2 sm:-right-6 bottom-1/4 glass-effect rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl"
              >
                <div className="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400">
                  10+
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  Projects
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <FaArrowDown className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
