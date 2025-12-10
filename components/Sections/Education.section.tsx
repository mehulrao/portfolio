import { Card } from "../ui/Card";
import { Section } from "../ui/Section";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <Section id="education" title="Education">
      <Card className="flex flex-col md:flex-row gap-6 items-start">
        <div className="bg-zinc-800 p-4 rounded-full">
          <GraduationCap size={32} className="text-white" />
        </div>
        <div className="flex-1">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
            <h3 className="text-2xl font-bold text-white">Georgia Institute of Technology</h3>
            <span className="text-gray-500 bg-zinc-800/50 px-3 py-1 rounded-full text-sm mt-2 md:mt-0">
              College of Computing
            </span>
          </div>
          <p className="text-lg text-blue-400 font-medium mb-4">
            Bachelor of Science in Computer Science
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-gray-400">
            <div>
              <p className="font-semibold text-white mb-1">Concentration</p>
              <p>Intelligence and Systems Architecture</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-1">Minor</p>
              <p>FinTech</p>
            </div>
            <div className="md:col-span-2 mt-2 pt-4 border-t border-zinc-800">
              <p className="text-sm">
                <span className="text-white font-medium">Award:</span> Zell Miller Scholarship
              </p>
            </div>
          </div>
        </div>
      </Card>
    </Section>
  );
};

export default Education;

