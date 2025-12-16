import { motion } from "framer-motion";
import { useState } from "react";
import { FaCheckCircle, FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane, FaPhone } from "react-icons/fa";
import { Button } from "../ui/button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactMethods = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "anandpalanisamy98422@gmail.com",
      href: "mailto:anandpalanisamy98422@gmail.com",
      color: "text-red-600 dark:text-red-400",
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "+91 98422 91682",
      href: "tel:+919842291682",
      color: "text-green-600 dark:text-green-400",
    },
    {
      icon: FaGithub,
      title: "GitHub",
      value: "anandpalanisamyN",
      href: "https://github.com/anandpalanisamyN",
      color: "text-gray-800 dark:text-gray-300",
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      value: "Anand Palanisamy",
      href: "https://www.linkedin.com/in/anand-palanisamy-580b2b1b8/",
      color: "text-blue-600 dark:text-blue-400",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gradient">Get in Touch</h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just a friendly chat. Let's connect!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Contact Information</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Feel free to reach out through any of these channels. I typically respond within 24 hours.
            </p>

            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 glass-effect rounded-xl hover:shadow-lg transition-all group"
                >
                  <div className={`p-3 rounded-full ${method.color} bg-opacity-10 dark:bg-opacity-20`}>
                    <method.icon className={`w-6 h-6 ${method.color}`} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{method.title}</p>
                    <p className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {method.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Quick Links */}
            <div className="mt-8 p-6 card-gradient rounded-2xl border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold mb-4 text-gray-800 dark:text-gray-100">Quick Actions</h4>
              <div className="flex flex-wrap gap-3">
                <Button>
                  <a href="mailto:anandpalanisamy98422@gmail.com" className="flex items-center gap-2">
                    <FaEnvelope /> Email Me
                  </a>
                </Button>
                <Button variant="outline">
                  <a href="https://www.linkedin.com/in/anand-palanisamy-580b2b1b8/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <FaLinkedin /> LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="card-gradient rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Send a Message</h3>

              {/* Success Message */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-500 rounded-lg flex items-center gap-3"
                >
                  <FaCheckCircle className="text-green-600 dark:text-green-400 w-5 h-5" />
                  <p className="text-green-800 dark:text-green-200 font-medium">Message sent successfully!</p>
                </motion.div>
              )}

              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg glass-effect border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg glass-effect border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg glass-effect border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Tell me about your project or idea..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane /> Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
