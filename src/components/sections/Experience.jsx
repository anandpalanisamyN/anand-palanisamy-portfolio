import { motion } from "framer-motion";
import { FaAws, FaDotCircle, FaNodeJs } from "react-icons/fa";
import { SiDotnet, SiExpress, SiMongodb, SiRedis } from "react-icons/si";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient"
        >
          Experience
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-8">
          {/* iResponsive Solutions */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-blue-500 hover:shadow-2xl transition"
          >
            <h4 className="text-xl font-semibold text-blue-600 mb-1 flex items-center gap-2">
              <FaDotCircle className="text-blue-500" /> Software Developer
            </h4>
            <p className="text-gray-500 mb-4">iResponsive Solutions • Nov 2022 – Present</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2"><SiDotnet className="text-blue-600" /> Developed backend services with .NET 8 + AWS</li>
              <li className="flex items-center gap-2"><SiRedis className="text-red-500" /> Implemented Redis caching & email workflows</li>
              <li className="flex items-center gap-2"><FaAws className="text-yellow-500" /> Optimized performance and scalability</li>
            </ul>
          </motion.div>

          {/* Pheonix Solutions */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-purple-500 hover:shadow-2xl transition"
          >
            <h4 className="text-xl font-semibold text-purple-600 mb-1 flex items-center gap-2">
              <FaDotCircle className="text-purple-500" /> Software Developer
            </h4>
            <p className="text-gray-500 mb-4">Pheonix Solutions • Jun 2022 – Nov 2022</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2"><FaNodeJs className="text-green-600" /> Implemented REST APIs for e-commerce</li>
              <li className="flex items-center gap-2"><SiExpress className="text-gray-800" /> Contributed to bug fixing & troubleshooting</li>
              <li className="flex items-center gap-2"><SiMongodb className="text-green-500" /> Worked with NodeJS, Express, MongoDB</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
