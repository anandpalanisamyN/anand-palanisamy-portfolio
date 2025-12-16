import { motion } from "framer-motion";
import { FaCode, FaLightbulb, FaRocket, FaUsers } from "react-icons/fa";

export default function About() {
  const stats = [
    { icon: FaCode, value: "3.4+", label: "Years Experience", color: "text-blue-600 dark:text-blue-400" },
    { icon: FaRocket, value: "10+", label: "Projects Delivered", color: "text-purple-600 dark:text-purple-400" },
    { icon: FaUsers, value: "5+", label: "Client Collaborations", color: "text-pink-600 dark:text-pink-400" },
    { icon: FaLightbulb, value: "50+", label: "Problem Solved", color: "text-orange-600 dark:text-orange-400" },
  ];

  const highlights = [
    { title: "💡 Strengths", items: ["Problem-solving", "Clean coding", "Collaboration", "Innovation"] },
    { title: "⚡ Expertise", items: ["REST APIs & Microservices", "Cloud-native apps", "Database optimization", "Performance tuning"] },
  ];

  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-40 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gradient">About Me</h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate about building scalable solutions and solving complex problems
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="glass-effect rounded-2xl p-6 text-center hover:glow-effect transition-all"
            >
              <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
              <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Description */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I'm <span className="font-bold text-blue-600 dark:text-blue-400">Anand Palanisamy</span>, a{" "}
              <span className="font-semibold">Backend Developer</span> with{" "}
              <span className="font-bold">3.4 years of experience</span>{" "}
              building scalable, secure, and efficient applications.
            </p>

            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I specialize in creating high-performance backend systems using{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">.NET</span>,{" "}
              <span className="font-semibold text-green-600 dark:text-green-400">Node.js</span>,{" "}
              <span className="font-semibold text-orange-600 dark:text-orange-400">AWS</span>, and{" "}
              <span className="font-semibold text-blue-700 dark:text-blue-500">PostgreSQL</span>.
            </p>

            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My focus is on delivering <span className="font-semibold">clean, maintainable code</span>{" "}
              and creating solutions that drive business value.
            </p>
          </motion.div>

          {/* Right - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="card-gradient rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all"
              >
                <h4 className="text-xl font-bold mb-4 text-gradient">{highlight.title}</h4>
                <ul className="grid grid-cols-2 gap-3">
                  {highlight.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating Decorative Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mt-16 flex justify-center"
        >
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400 to-purple-400 blur-2xl opacity-20 animate-pulse"></div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
              alt="Developer Illustration"
              className="relative w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
