import { motion } from "framer-motion";
import { CardContent } from "../ui/card";

const projects = [
  {
    title: "Healthcare, US",
    description: [
      "Developed healthcare application for managing patient test requests.",
      "Built backend with .NET 8 + AWS (Lambda, S3, SNS, SQS).",
      "Integrated Redis caching & Zepto email provider.",
      "Focused on scalability, security, and clean design patterns."
    ]
  },
  {
    title: "E-commerce, Canada",
    description: [
      "Enhanced features for e-commerce platform with NodeJS + AWS.",
      "Integrated systems with REST APIs for smooth data exchange.",
      "Automated workflows using Azure timer functions.",
      "Improved email workflows with Zepto email provider."
    ]
  },
  {
    title: "Logistics, US",
    description: [
      "Built role-based logistics platform with carrier/shipper modules.",
      "Implemented load bidding and shipment lifecycle automation.",
      "Added onboarding workflows for carriers & vehicle management."
    ]
  },
  {
    title: "Online Organic Store",
    description: [
      "Developed system to manage inventory, orders, and customers.",
      "Digitized workflows for organic store operations.",
      "Improved customer engagement and digital record keeping."
    ]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gradient-to-b from-gray-50 to-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient"
        >
          Projects
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <motion.div
              key={proj.title}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-blue-500 hover:shadow-2xl transition"
            >
              <CardContent className="p-8">
                <h4 className="text-2xl font-semibold mb-3 text-blue-600">{proj.title}</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  {proj.description.map((line, idx) => <li key={idx}>{line}</li>)}
                </ul>
              </CardContent>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
