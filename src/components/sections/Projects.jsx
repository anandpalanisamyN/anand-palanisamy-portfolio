import { motion } from "framer-motion";
import { useState } from "react";
import { FaAws, FaFilter, FaGithub, FaNodeJs } from "react-icons/fa";
import { SiDotnet, SiMongodb, SiPostgresql, SiRedis } from "react-icons/si";
import { CardContent } from "../ui/card";

const projects = [
  {
    title: "Healthcare Application",
    category: ".NET",
    location: "US",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop",
    description: [
      "Developed healthcare application for managing patient test requests",
      "Built backend with .NET 8 + AWS (Lambda, S3, SNS, SQS)",
      "Integrated Redis caching & Zepto email provider",
      "Focused on scalability, security, and clean design patterns",
    ],
    tags: [
      { name: ".NET 8", icon: SiDotnet, color: "bg-purple-600" },
      { name: "AWS", icon: FaAws, color: "bg-orange-500" },
      { name: "Redis", icon: SiRedis, color: "bg-red-500" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "bg-blue-700" },
    ],
  },
  {
    title: "E-commerce Platform",
    category: "Node.js",
    location: "Canada",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop",
    description: [
      "Enhanced features for e-commerce platform with NodeJS + AWS",
      "Integrated systems with REST APIs for smooth data exchange",
      "Automated workflows using Azure timer functions",
      "Improved email workflows with Zepto email provider",
    ],
    tags: [
      { name: "Node.js", icon: FaNodeJs, color: "bg-green-600" },
      { name: "AWS", icon: FaAws, color: "bg-orange-500" },
      { name: "MongoDB", icon: SiMongodb, color: "bg-green-500" },
    ],
  },
  {
    title: "Logistics Platform",
    category: ".NET",
    location: "US",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop",
    description: [
      "Built role-based logistics platform with carrier/shipper modules",
      "Implemented load bidding and shipment lifecycle automation",
      "Added onboarding workflows for carriers & vehicle management",
    ],
    tags: [
      { name: ".NET 8", icon: SiDotnet, color: "bg-purple-600" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "bg-blue-700" },
      { name: "AWS", icon: FaAws, color: "bg-orange-500" },
    ],
  },
  {
    title: "Organic Store System",
    category: "Node.js",
    location: "Local",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop",
    description: [
      "Developed system to manage inventory, orders, and customers",
      "Digitized workflows for organic store operations",
      "Improved customer engagement and digital record keeping",
    ],
    tags: [
      { name: "Node.js", icon: FaNodeJs, color: "bg-green-600" },
      { name: "MongoDB", icon: SiMongodb, color: "bg-green-500" },
    ],
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ".NET", "Node.js"];

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gradient">Projects</h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8">
            Real-world applications and solutions I've built
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === cat
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/50"
                    : "glass-effect hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <span className="flex items-center gap-2">
                  {cat === "All" && <FaFilter className="w-4 h-4" />}
                  {cat}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              layout
              className="group card-gradient rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 rounded-full text-xs font-bold text-gray-800 dark:text-gray-200">
                    {project.location}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`${tag.color} text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5`}
                    >
                      {tag.icon && <tag.icon className="w-3 h-3" />}
                      {tag.name}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <ul className="space-y-2 mb-4">
                  {project.description.map((line, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></span>
                      {line}
                    </li>
                  ))}
                </ul>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <FaGithub /> View Details
                  </motion.button>
                </div>
              </CardContent>
            </motion.div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-xl text-gray-600 dark:text-gray-400">
              No projects found for this filter.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
