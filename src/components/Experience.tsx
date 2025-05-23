
import { Card } from "@/components/ui/card";
import { GraduationCap, Users, BookOpen, Award } from "lucide-react";

const experiences = [
  {
    title: "Cybersecurity Learning Journey",
    icon: GraduationCap,
    period: "2023 - Present",
    description: "Intensive self-study and practical application of cybersecurity concepts, tools, and methodologies",
    highlights: ["Hands-on labs and simulations", "Security tool mastery", "Network security fundamentals"]
  },
  {
    title: "Mentoring & Knowledge Sharing",
    icon: Users,
    period: "Ongoing",
    description: "Passionate about sharing knowledge and helping others start their cybersecurity journey",
    highlights: ["Peer mentoring", "Study group leadership", "Technical documentation"]
  },
  {
    title: "Continuous Learning",
    icon: BookOpen,
    period: "2022 - Present",
    description: "Committed to staying updated with the latest security trends, vulnerabilities, and defense strategies",
    highlights: ["Security blogs and research", "Online courses", "Cybersecurity communities"]
  }
];

const Experience = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Experience & Growth
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My journey in cybersecurity and commitment to continuous learning
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={exp.title} className="bg-gray-900/50 border-gray-800 hover:border-cyan-500/50 transition-all duration-300 p-8 group">
              <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="flex-shrink-0">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                    <exp.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2 md:mb-0">{exp.title}</h3>
                    <span className="text-cyan-400 font-semibold bg-cyan-500/10 px-4 py-1 rounded-full text-sm">
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight, idx) => (
                      <span key={idx} className="text-sm px-3 py-1 rounded-full bg-gray-800 text-gray-300 border border-gray-700">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
