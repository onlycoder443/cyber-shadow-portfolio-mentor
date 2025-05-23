
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="flex justify-center mb-8">
          <div className="p-4 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30">
            <Shield className="w-16 h-16 text-green-400" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-green-400 bg-clip-text text-transparent animate-fade-in">
          Heartlin Gardon B.F
          <br />
          <span className="text-white">Cybersecurity Fresher</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Enthusiastic Computer Science graduate specializing in Cybersecurity. 
          Skilled in networking, Linux, Python and dedicated to continuous learning.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
            View My Work
          </Button>
          <Button variant="outline" className="border-green-500 text-green-400 hover:bg-green-500/10 px-8 py-3 rounded-full transition-all duration-300">
            Download CV
          </Button>
        </div>
        
        <div className="flex flex-col items-center space-y-3 mb-8">
          <p className="text-gray-400">
            <span className="font-semibold text-green-400">Email:</span> heartlingardon07@gmail.com
          </p>
          <p className="text-gray-400">
            <span className="font-semibold text-green-400">Phone:</span> +91 9791623351
          </p>
          <p className="text-gray-400">
            <span className="font-semibold text-green-400">Location:</span> Alagu Nagar, Mengles Road, Dindigul - 624003
          </p>
        </div>
        
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/onlycoder443" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-800/50 hover:bg-green-500/20 border border-gray-700 hover:border-green-500 transition-all duration-300 group">
            <Github className="w-6 h-6 text-gray-400 group-hover:text-green-400" />
          </a>
          <a href="https://linkedin.com/in/heartlingardon" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-800/50 hover:bg-green-500/20 border border-gray-700 hover:border-green-500 transition-all duration-300 group">
            <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-green-400" />
          </a>
          <a href="mailto:heartlingardon07@gmail.com" className="p-3 rounded-full bg-gray-800/50 hover:bg-green-500/20 border border-gray-700 hover:border-green-500 transition-all duration-300 group">
            <Mail className="w-6 h-6 text-gray-400 group-hover:text-green-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
