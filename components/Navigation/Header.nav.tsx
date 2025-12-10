import type { NextComponentType } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

const NavLink = ({ text, url }: { text: string; url: string }) => {
  return (
    <Link 
      href={url} 
      scroll={true}
      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium"
    >
      {text}
    </Link>
  );
};

const Header: NextComponentType = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-black/50 border-b border-zinc-900"
    >
      <Link 
        href="/" 
        className="text-xl font-bold font-jost text-white tracking-tight"
      >
        MR
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        <NavLink text="About" url="#" />
        <NavLink text="Experience" url="#experience" />
        <NavLink text="Education" url="#education" />
        <NavLink text="Skills" url="#skills" />
        <NavLink text="Projects" url="#projects" />
        <NavLink text="Contact" url="#contact" />
      </nav>

      <Link 
        href="https://github.com/mehulrao" 
        className="text-gray-400 hover:text-white transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="github-repo"
      >
        <Github size={24} />
      </Link>
    </motion.header>
  );
};

export default Header;
