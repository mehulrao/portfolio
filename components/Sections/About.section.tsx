import type { NextComponentType } from "next";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const About: NextComponentType = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center px-4 md:px-0 pt-20">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-2">
              Mehul Rao
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-400 font-medium">
              AI/ML Engineer & Founding Engineer
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-400 max-w-xl leading-relaxed"
          >
            Building AI infrastructure at scale and healthcare AI platforms. 
            Previously optimized inference fleets at <span className="text-white font-medium">AWS Bedrock</span> and 
            currently engineering the future of therapy at <span className="text-white font-medium">Emory Healthcare</span> and <span className="text-white font-medium">Innovar Health</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-4 pt-4"
          >
            <a 
              href="#contact"
              className="group flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
            >
              Get in touch
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white border border-zinc-800 hover:bg-zinc-900 transition-colors"
            >
              View Projects
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-64 h-64 md:w-80 md:h-80"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse" />
          <Image
            src="/assests/avatar.svg"
            width="320"
            height="320"
            className="rounded-full relative z-10"
            alt="Mehul Rao"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
