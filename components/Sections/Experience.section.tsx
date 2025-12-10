import { Card } from "../ui/Card";
import { Section } from "../ui/Section";

const experiences = [
  {
    company: "MealPlanR",
    role: "Founding Engineer",
    period: "Current",
    description: [
      "Building an end-to-end therapist platform with Emory & Children's Healthcare of Atlanta.",
      "Fine-tuned GPT-OSS 21B with QLoRA/PEFT on therapist materials.",
      "Designed an agentic RAG stack using Qdrant with hybrid retrieval (Patent Pending)."
    ]
  },
  {
    company: "AWS Bedrock AI",
    role: "AI/ML Engineer",
    period: "May 2024 - Aug 2025",
    description: [
      "Operated large-scale EKS inference fleets (~50k+ nodes) serving Anthropic models.",
      "Designed safe rollouts and PDBs to maintain low-latency, high-throughput SLOs.",
      "Optimized runtime across AWS Trainium2 and NVIDIA H100 instances."
    ]
  },
  {
    company: "Hulu / Disney Streaming",
    role: "Software Engineer Intern",
    period: "May 2024 - Aug 2024",
    description: [
      "Developed ML models to group Ad Assets, enhancing operational efficiency.",
      "Fine-tuned VideoMAE models on 60M parameters, achieving 94% accuracy.",
      "Collaborated with cross-functional teams to integrate models into production."
    ]
  },
  {
    company: "Buckeye Innovation",
    role: "Software Engineer Intern",
    period: "Apr 2021 - May 2024",
    description: [
      "Implemented a proactive Slack AI chatbot leveraging NLP.",
      "Managed AWS cloud infrastructure using Docker, Terraform, and Ansible."
    ]
  }
];

const Experience = () => {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index} delay={index * 0.1}>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <p className="text-blue-400 font-medium">{exp.company}</p>
              </div>
              <span className="text-gray-500 text-sm mt-2 md:mt-0 bg-zinc-800/50 px-3 py-1 rounded-full w-fit">
                {exp.period}
              </span>
            </div>
            <ul className="space-y-2">
              {exp.description.map((item, i) => (
                <li key={i} className="text-gray-400 text-sm md:text-base flex items-start gap-2">
                  <span className="text-blue-500 mt-1.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
