import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 via-white to-purple-50 py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              <Typewriter
                speed="fast"
                variance={1}
                backspace="word"
                cursorBlinkSpeed={2}
                words={["Anand Palanisamy"]}
                loop={1}
              />
            </span>
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            <span className="font-semibold text-blue-600">Backend Developer</span> with 3.4 years of experience in building scalable, secure, and modern applications.
          </p>
          <div className="flex gap-4">
            <Button>
              <a href="#projects">🚀 View My Work</a>
            </Button>
            <Button variant="outline">
              <a href="#contact">📩 Contact Me</a>
            </Button>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <img
              src="https://avatars.githubusercontent.com/u/122594645?v=4"
              alt="Anand Palanisamy"
              className="w-64 h-64 rounded-full border-8 border-white shadow-xl object-cover"
            />
            <div className="absolute inset-0 rounded-full border-4 border-blue-200 animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
