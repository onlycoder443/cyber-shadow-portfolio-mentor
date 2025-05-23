
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="flex justify-center mb-8">
          <div className="p-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30">
            <Shield className="w-16 h-16 text-cyan-400" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in">
          Cybersecurity
          <br />
          <span className="text-white">Professional</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Passionate cybersecurity fresher with hands-on experience in penetration testing, 
          network analysis, and security tools. Ready to defend digital frontiers.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
            View My Work
          </Button>
          <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-full transition-all duration-300">
            Download CV
          </Button>
        </div>
        
        <div className="flex justify-center space-x-6">
          <a href="#" className="p-3 rounded-full bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700 hover:border-cyan-500 transition-all duration-300 group">
            <Github className="w-6 h-6 text-gray-400 group-hover:text-cyan-400" />
          </a>
          <a href="#" className="p-3 rounded-full bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700 hover:border-cyan-500 transition-all duration-300 group">
            <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-cyan-400" />
          </a>
          <a href="#" className="p-3 rounded-full bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700 hover:border-cyan-500 transition-all duration-300 group">
            <Mail className="w-6 h-6 text-gray-400 group-hover:text-cyan-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
