import { motion } from "framer-motion";
import { FaAws, FaCode, FaDatabase, FaDocker, FaGitAlt, FaHandshake, FaServer, FaTools } from "react-icons/fa";
import { SiDotnet, SiExpress, SiJavascript, SiMongodb, SiNestjs, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPostman, SiTypescript } from "react-icons/si";

export default function Skills() {
  const skillCategories = [
    {
      icon: FaCode,
      title: "Programming",
      color: "blue",
      skills: [
        { name: "JavaScript", icon: SiJavascript, level: 90, color: "bg-yellow-500" },
        { name: "TypeScript", icon: SiTypescript, level: 85, color: "bg-blue-500" },
        { name: ".NET 8", icon: SiDotnet, level: 90, color: "bg-purple-600" },
        { name: "Node.js", icon: SiNodedotjs, level: 88, color: "bg-green-600" },
      ],
    },
    {
      icon: FaServer,
      title: "Frameworks",
      color: "green",
      skills: [
        { name: "Express", icon: SiExpress, level: 90, color: "bg-gray-700" },
        { name: "NestJS", icon: SiNestjs, level: 85, color: "bg-red-600" },
        { name: "Next.js", icon: SiNextdotjs, level: 80, color: "bg-black" },
        { name: "ASP.NET Core", icon: SiDotnet, level: 88, color: "bg-blue-600" },
      ],
    },
    {
      icon: FaDatabase,
      title: "Databases",
      color: "purple",
      skills: [
        { name: "PostgreSQL", icon: SiPostgresql, level: 90, color: "bg-blue-700" },
        { name: "MSSQL", icon: FaDatabase, level: 85, color: "bg-red-600" },
        { name: "MongoDB", icon: SiMongodb, level: 82, color: "bg-green-500" },
      ],
    },
    {
      icon: FaAws,
      title: "Cloud & DevOps",
      color: "orange",
      skills: [
        { name: "AWS", icon: FaAws, level: 85, color: "bg-orange-500" },
        { name: "Docker", icon: FaDocker, level: 80, color: "bg-blue-500" },
        { name: "Azure Functions", icon: null, level: 75, color: "bg-blue-600" },
      ],
    },
    {
      icon: FaTools,
      title: "Tools",
      color: "red",
      skills: [
        { name: "Git & GitHub", icon: FaGitAlt, level: 90, color: "bg-orange-600" },
        { name: "Postman", icon: SiPostman, level: 88, color: "bg-orange-500" },
        { name: "VS Code", icon: null, level: 95, color: "bg-blue-600" },
      ],
    },
    {
      icon: FaHandshake,
      title: "Soft Skills",
      color: "indigo",
      skills: [
        { name: "Problem-solving", icon: null, level: 92, color: "bg-indigo-600" },
        { name: "Debugging", icon: null, level: 90, color: "bg-purple-600" },
        { name: "Time Management", icon: null, level: 88, color: "bg-blue-600" },
        { name: "Collaboration", icon: null, level: 90, color: "bg-green-600" },
      ],
    },
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: "text-blue-600 dark:text-blue-400 border-blue-500",
      green: "text-green-600 dark:text-green-400 border-green-500",
      purple: "text-purple-600 dark:text-purple-400 border-purple-500",
      orange: "text-orange-600 dark:text-orange-400 border-orange-500",
      red: "text-red-600 dark:text-red-400 border-red-500",
      indigo: "text-indigo-600 dark:text-indigo-400 border-indigo-500",
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gradient">Skills & Technologies</h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
            My technical expertise and proficiency levels
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`card-gradient rounded-2xl shadow-lg p-6 border-t-4 ${getColorClasses(category.color)} hover:shadow-2xl transition-all`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <category.icon className={`w-6 h-6 ${getColorClasses(category.color).split(' ')[0]}`} />
                <h3 className={`text-xl font-bold ${getColorClasses(category.color).split(' ')[0]}`}>
                  {category.title}
                </h3>
              </div>

              {/* Skills List with Progress Bars */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {skill.icon && <skill.icon className="w-4 h-4" />}
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-full ${skill.color} rounded-full`}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center glass-effect rounded-2xl p-8"
        >
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-4">
            <span className="font-bold text-blue-600 dark:text-blue-400">Continuous Learner</span> — Always exploring new technologies and best practices
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Currently focusing on advanced cloud architectures, microservices patterns, and AI integration
          </p>
        </motion.div>
      </div>
    </section>
  );
}
