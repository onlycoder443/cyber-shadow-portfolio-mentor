
import { Card } from "@/components/ui/card";
import { Search, Activity, Bug, Shield } from "lucide-react";

const tools = [
  {
    name: "Nmap",
    icon: Search,
    description: "Network discovery and security auditing",
    category: "Network Scanning",
    color: "from-red-500 to-rose-500"
  },
  {
    name: "Wireshark",
    icon: Activity,
    description: "Network protocol analyzer and packet capture",
    category: "Network Analysis",
    color: "from-red-500 to-rose-500"
  },
  {
    name: "Burp Suite",
    icon: Bug,
    description: "Web application security testing platform",
    category: "Web Security",
    color: "from-red-500 to-rose-500"
  },
  {
    name: "Security Toolkit",
    icon: Shield,
    description: "Various penetration testing and security tools",
    category: "General Security",
    color: "from-red-500 to-rose-500"
  }
];

const Tools = () => {
  return (
    <section className="py-20 px-4 bg-gray-900/30 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent">
            Security Tools
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Proficient in industry-standard cybersecurity tools for testing and analysis
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tools.map((tool, index) => (
            <Card key={tool.name} className="bg-gray-900/70 border-gray-800 hover:border-red-500/50 transition-all duration-300 p-8 group hover:transform hover:scale-105 backdrop-blur-sm">
              <div className="flex items-start space-x-6">
                <div className={`p-4 rounded-xl bg-gradient-to-r ${tool.color} bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300`}>
                  <tool.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-white">{tool.name}</h3>
                    <span className="text-xs px-3 py-1 rounded-full bg-red-500/20 text-red-400 font-semibold">
                      {tool.category}
                    </span>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{tool.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
