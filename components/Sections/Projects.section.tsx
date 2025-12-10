import Link from "next/link";
import { Card } from "../ui/Card";
import { Section } from "../ui/Section";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Racecar ML",
    description: "Self Driving MIT RACECAR",
    tech: "C#, Unity",
    link: "https://github.com/mehulrao/Racecar-ML",
    gradient: "from-blue-600 to-indigo-600"
  },
  {
    title: "LavÜ",
    description: "Back Mounted Stress Management Device built at TreeHacks",
    tech: "C++, React Native",
    link: "https://github.com/mehulrao/Lav-U",
    gradient: "from-indigo-600 to-purple-600"
  },
  {
    title: "Chess AI",
    description: "Competitive Chess AI with advanced heuristics",
    tech: "Java",
    link: "https://github.com/mehulrao/Chess-AI",
    gradient: "from-purple-600 to-pink-600"
  }
];

const Projects = () => {
  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Link 
            href={project.link} 
            key={index} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block h-full group"
          >
            <Card 
              delay={index * 0.1}
              className="h-full hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient}`} />
              
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <Github size={20} className="text-gray-500 group-hover:text-white transition-colors" />
              </div>
              
              <p className="text-gray-400 mb-6 min-h-[3rem]">
                {project.description}
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-800">
                <span className="text-sm font-medium text-gray-500">
                  {project.tech}
                </span>
                <ExternalLink size={16} className="text-gray-500 group-hover:text-white transition-colors" />
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
