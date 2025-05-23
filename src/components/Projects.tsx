
import { Card } from "@/components/ui/card";
import { Github, ExternalLink, Search, Server } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Lin.NetScan",
    description: "A powerful network scanning tool built for Linux environments that provides comprehensive network discovery and security assessment capabilities.",
    technologies: ["Python", "Networking", "Linux"],
    github: "https://github.com/onlycoder443/lin_netscan",
    icon: Search,
    features: [
      "Network discovery and device enumeration",
      "Port scanning and service identification",
      "Security vulnerability assessment",
      "Detailed reporting and visualization"
    ]
  },
  {
    title: "Cybersecurity Pentesting Simulator",
    description: "A Docker-isolated platform for practicing penetration testing with configurable security challenges.",
    technologies: ["AWS EC2", "Docker", "CI/CD", "RBAC"],
    icon: Server,
    features: [
      "AWS EC2 CTFd simulator with Docker-isolated challenges",
      "Secure RBAC and real-time monitoring",
      "Automated certificate management with HTTPS support",
      "Performance tracking and leaderboard for participants"
    ]
  }
];

const Projects = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing practical applications of cybersecurity skills and technical expertise
          </p>
        </div>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card key={project.title} className="bg-gray-900/70 border-gray-800 hover:border-red-500/50 transition-all duration-300 p-8 group">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 flex justify-center items-start">
                  <div className="p-6 rounded-xl bg-gradient-to-r from-red-500/20 to-rose-500/20 group-hover:from-red-500/30 group-hover:to-rose-500/30 transition-all duration-300">
                    <project.icon className="w-20 h-20 text-red-400" />
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="text-sm px-3 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="h-6 w-6 rounded-full bg-red-500/20 flex items-center justify-center mr-3 mt-0.5">
                            <div className="h-2 w-2 rounded-full bg-red-400"></div>
                          </div>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    {project.github && (
                      <Button 
                        variant="outline" 
                        className="border-red-500/50 text-red-400 hover:bg-red-500/10"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="mr-2 h-4 w-4" /> View on GitHub
                      </Button>
                    )}
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

export default Projects;
