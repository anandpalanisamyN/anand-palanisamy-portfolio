import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-16">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient"
      >
        Skills
      </motion.h3>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: "💻 Programming", color: "text-blue-600", skills: ["JavaScript", "TypeScript", ".NET 8", "NodeJS"] },
          { title: "📚 Frameworks & Libraries", color: "text-green-600", skills: ["Express", "NestJS", "NextJS", "ASP.NET Core"] },
          { title: "🗄️ Databases", color: "text-purple-600", skills: ["Postgres", "MSSQL", "MongoDB"] },
          { title: "☁️ Cloud & DevOps", color: "text-yellow-600", skills: ["AWS", "Docker", "Azure Functions"] },
          { title: "🛠️ Tools", color: "text-red-600", skills: ["Git & GitHub", "Postman", "VS Code"] },
          { title: "🤝 Soft Skills", color: "text-indigo-600", skills: ["Problem-solving", "Debugging", "Time Management", "Collaboration"] }
        ].map((cat, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-blue-500 hover:shadow-2xl transition"
          >
            <h4 className={`text-xl font-semibold mb-4 ${cat.color}`}>{cat.title}</h4>
            <ul className="space-y-2 text-gray-700">
              {cat.skills.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
