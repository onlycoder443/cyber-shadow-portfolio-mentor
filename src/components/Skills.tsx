
import { Card } from "@/components/ui/card";
import { Code, Database, Network, Terminal, FileCode } from "lucide-react";

const skills = [
  {
    name: "Python",
    icon: Code,
    description: "Programming, scripting, and automation with Python",
    level: 85
  },
  {
    name: "SQL",
    icon: Database,
    description: "Database security, injection testing, and data analysis",
    level: 80
  },
  {
    name: "Networking",
    icon: Network,
    description: "TCP/IP, routing, switching, and network security protocols",
    level: 90
  },
  {
    name: "Linux",
    icon: Terminal,
    description: "System administration, command line, and security hardening",
    level: 85
  },
  {
    name: "C",
    icon: FileCode,
    description: "Systems programming and low-level development",
    level: 75
  }
];

const Skills = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent">
            Core Skills
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technical expertise built through dedicated learning and hands-on practice
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <Card key={skill.name} className="bg-gray-900/50 border-gray-800 hover:border-red-500/50 transition-all duration-300 p-6 group hover:transform hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-gradient-to-r from-red-500/20 to-rose-500/20 mb-4 group-hover:from-red-500/30 group-hover:to-rose-500/30 transition-all duration-300">
                  <skill.icon className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{skill.description}</p>
                
                {/* Progress bar */}
                <div className="w-full bg-gray-800 rounded-full h-2 mb-2">
                  <div 
                    className="bg-gradient-to-r from-red-500 to-rose-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <span className="text-red-400 text-sm font-semibold">{skill.level}%</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
