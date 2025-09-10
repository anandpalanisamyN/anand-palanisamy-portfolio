import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { Button } from "../ui/button";

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-16 text-center">
      <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
      <p className="text-gray-700 mb-6">
        I’m always open to discussing new opportunities, collaborations, or just a friendly chat. Let’s connect!
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button variant="outline">
          <a href="mailto:anandpalanisamy98422@gmail.com" className="flex items-center gap-2">
            <FaEnvelope /> Email
          </a>
        </Button>
        <Button variant="outline">
          <a href="tel:+919842291682" className="flex items-center gap-2">
            <FaPhone /> +91 98422 91682
          </a>
        </Button>
        <Button variant="outline">
          <a href="https://github.com/anandpalanisamyN" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <FaGithub /> GitHub
          </a>
        </Button>
        <Button variant="outline">
          <a href="https://www.linkedin.com/in/anand-palanisamy-580b2b1b8/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <FaLinkedin /> LinkedIn
          </a>
        </Button>
      </div>
    </section>
  );
}
