import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Shield } from "lucide-react";
const Hero = () => {
  return <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Matrix-like background effect with red theme */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] bg-[#0e0202]" />
      
      {/* Terminal-like glowing effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      {/* Animated scanlines overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(128,0,0,0.05)_50%)] bg-[length:100%_4px] animate-[scan_5s_linear_infinite] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="flex justify-center mb-8">
          <div className="p-4 rounded-full bg-gradient-to-r from-red-500/20 to-rose-500/20 backdrop-blur-sm border border-red-500/30">
            <Shield className="w-16 h-16 text-red-400" />
          </div>
        </div>
        
        <h1 className="text-5xl mb-6 bg-gradient-to-r from-red-400 via-rose-400 to-red-400 bg-clip-text animate-fade-in text-gray-50 md:text-7xl font-bold">HI, I'M 
HEARTLIN GARDON</h1>
        
        <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed text-red-600 font-extrabold md:text-4xl">Cybersecurity Researcher &
  Python Developer</p>
        
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto font-normal">
          I'm focused on learning and building in the field of cybersecurity. I enjoy working on projects related to network security, ethical hacking, and secure coding. Explore my portfolio to see what I've been working on and where I'm headed next.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105" onClick={() => {
          const projectsSection = document.getElementById('projects');
          projectsSection?.scrollIntoView({
            behavior: 'smooth'
          });
        }}>
            View My Work
          </Button>
        </div>
        
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/onlycoder443" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-800/50 hover:bg-red-500/20 border border-gray-700 hover:border-red-500 transition-all duration-300 group">
            <Github className="w-6 h-6 text-gray-400 group-hover:text-red-400" />
          </a>
          <a href="https://linkedin.com/in/heartlingardon" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-800/50 hover:bg-red-500/20 border border-gray-700 hover:border-red-500 transition-all duration-300 group">
            <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-red-400" />
          </a>
          <a href="mailto:heartlingardon07@gmail.com" className="p-3 rounded-full bg-gray-800/50 hover:bg-red-500/20 border border-gray-700 hover:border-red-500 transition-all duration-300 group">
            <Mail className="w-6 h-6 text-gray-400 group-hover:text-red-400" />
          </a>
        </div>
      </div>
    </section>;
};
export default Hero;