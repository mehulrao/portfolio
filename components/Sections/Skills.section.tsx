import { Section } from "../ui/Section";
import { motion } from "framer-motion";

const skillCategories = [
  {
    name: "Languages",
    skills: ["Python", "Rust", "TypeScript", "Java", "C++", "C"]
  },
  {
    name: "Cloud & DevOps",
    skills: ["AWS", "GCP", "Docker", "Terraform", "Ansible", "Kubernetes"]
  },
  {
    name: "AI / ML",
    skills: ["LLM Fine-tuning", "RAG", "EKS Inference", "PyTorch", "HuggingFace"]
  },
  {
    name: "Web & Databases",
    skills: ["Next.js", "React", "PostgreSQL", "MongoDB", "Redis"]
  }
];

const Skills = () => {
  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors"
          >
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-zinc-800 text-gray-300 px-3 py-1.5 rounded-lg text-sm font-medium border border-transparent hover:border-zinc-600 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
