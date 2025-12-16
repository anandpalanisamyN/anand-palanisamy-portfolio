import { motion } from "framer-motion";
import { FaAws, FaBuilding, FaCalendar, FaNodeJs } from "react-icons/fa";
import { SiDotnet, SiExpress, SiMongodb, SiRedis } from "react-icons/si";

export default function Experience() {
  const experiences = [
    {
      company: "iResponsive Solutions",
      role: "Software Developer",
      period: "Nov 2022 – Present",
      duration: "3+ years",
      color: "blue",
      achievements: [
        { icon: SiDotnet, text: "Developed backend services with .NET 8 + AWS", color: "text-blue-600" },
        { icon: SiRedis, text: "Implemented Redis caching & email workflows", color: "text-red-500" },
        { icon: FaAws, text: "Optimized performance and scalability", color: "text-orange-500" },
      ],
    },
    {
      company: "Pheonix Solutions",
      role: "Software Developer",
      period: "Jun 2022 – Nov 2022",
      duration: "6 months",
      color: "purple",
      achievements: [
        { icon: FaNodeJs, text: "Implemented REST APIs for e-commerce", color: "text-green-600" },
        { icon: SiExpress, text: "Contributed to bug fixing & troubleshooting", color: "text-gray-700 dark:text-gray-400" },
        { icon: SiMongodb, text: "Worked with NodeJS, Express, MongoDB", color: "text-green-500" },
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gradient">Experience</h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
            My professional journey and achievements
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600"></div>

          <div className="space-y-12 md:space-y-24">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-6 h-6 bg-gradient-to-br ${
                      exp.color === "blue"
                        ? "from-blue-500 to-blue-600"
                        : "from-purple-500 to-purple-600"
                    } rounded-full border-4 border-white dark:border-gray-900 shadow-lg`}
                  ></motion.div>
                </div>

                {/* Content Card */}
                <div className={index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:col-start-2"}>
                  <motion.div
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="card-gradient rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all"
                  >
                    {/* Header */}
                    <div className={`mb-6 ${index % 2 === 0 ? "md:items-end" : "md:items-start"} flex flex-col`}>
                      <div className="flex items-center gap-2 mb-2">
                        <FaBuilding className={`${exp.color === "blue" ? "text-blue-600" : "text-purple-600"} dark:${exp.color === "blue" ? "text-blue-400" : "text-purple-400"}`} />
                        <h3 className={`text-2xl font-bold ${exp.color === "blue" ? "text-blue-600 dark:text-blue-400" : "text-purple-600 dark:text-purple-400"}`}>
                          {exp.role}
                        </h3>
                      </div>
                      <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">{exp.company}</p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-600 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <FaCalendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full font-medium">
                          {exp.duration}
                        </span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className={`flex items-start gap-3 ${index % 2 === 0 ? "md:flex-row-reverse md:text-right" : ""}`}>
                          <achievement.icon className={`w-5 h-5 ${achievement.color} mt-1 flex-shrink-0`} />
                          <span className="text-gray-700 dark:text-gray-300">{achievement.text}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                {index % 2 === 0 ? <div className="hidden md:block"></div> : <div className="hidden md:block md:col-start-1"></div>}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
