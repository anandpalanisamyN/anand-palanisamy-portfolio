import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent animate-gradient">
            About Me
          </h3>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I’m <span className="font-semibold">Anand Palanisamy</span>, a{" "}
            <span className="text-blue-600 font-medium">Backend Developer</span>{" "}
            with <span className="font-semibold">3.4 years of experience</span>{" "}
            building scalable, secure, and efficient applications. I love
            creating impactful solutions with{" "}
            <span className="font-medium">.NET, NodeJS, AWS, and Postgres</span>.
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-blue-500 hover:shadow-2xl transition"
            >
              <h4 className="text-xl font-semibold mb-4 text-blue-600">💡 Strengths</h4>
              <ul className="space-y-2 text-gray-700">
                <li>Problem-solving</li>
                <li>Clean coding</li>
                <li>Collaboration</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-blue-500 hover:shadow-2xl transition"
            >
              <h4 className="text-xl font-semibold mb-4 text-blue-600">⚡ Expertise</h4>
              <ul className="space-y-2 text-gray-700">
                <li>REST APIs & Microservices</li>
                <li>Cloud-native apps</li>
                <li>Database optimization</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Right - Decorative Image with Floating Effect */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="flex justify-center"
        >
          <div className="relative w-72 h-72">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400 to-purple-400 blur-2xl opacity-30 animate-pulse"></div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
              alt="Developer Illustration"
              className="relative w-72 h-72 object-contain drop-shadow-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
