import { Section } from "../ui/Section";
import { Mail, Github, Linkedin, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <Section id="contact" className="py-24 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
      <p className="text-gray-400 text-lg mb-12 max-w-lg mx-auto">
        I'm currently building the future of therapy at MealPlanR. 
        Feel free to reach out if you want to chat about AI, systems, or just say hi!
      </p>

      <div className="flex flex-col items-center gap-8">
        <div className="flex justify-center gap-8">
          <a
            href="https://github.com/mehulrao"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
            aria-label="GitHub"
          >
            <Github size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/mehulprao"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#0077b5] hover:scale-110 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={32} />
          </a>
          <a
            href="mailto:mehulrao@gmail.com"
            className="text-gray-400 hover:text-red-500 hover:scale-110 transition-all duration-200"
            aria-label="Email"
          >
            <Mail size={32} />
          </a>
        </div>

        <a
          href="https://mehul.ink/chat"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-blue-600/10 text-blue-400 px-6 py-3 rounded-full font-medium hover:bg-blue-600 hover:text-white transition-all duration-200 border border-blue-600/20 hover:border-blue-600"
        >
          <Calendar size={20} />
          Schedule a Meeting
        </a>
      </div>
      
      <footer className="mt-24 text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} Mehul Rao. Built with Next.js & Tailwind.</p>
      </footer>
    </Section>
  );
};

export default Contact;
