
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, MessageSquare, Terminal, Shield, Lock } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-gray-900/30 relative">
      {/* Hacker-themed background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-0 left-0 w-full h-full select-none pointer-events-none">
          <div className="matrix-code absolute inset-0 text-red-500/20 text-xs overflow-hidden">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="whitespace-nowrap animate-marquee" style={{ animationDuration: `${20 + i * 5}s` }}>
                {'10010110101001010101010101010010101010111001010'.repeat(20)}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent">
            <Terminal className="inline-block mr-2 mb-1" size={32} />
            Let's Connect
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to contribute to cybersecurity teams and eager to learn from experienced professionals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gray-900/70 border-gray-800 p-8 backdrop-blur-sm hover:border-red-500/30 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Shield className="mr-2 text-red-400" />
              Get In Touch
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-red-500/20">
                  <Mail className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white font-semibold">heartlingardon07@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-red-500/20">
                  <Phone className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white font-semibold">+91 9791623351</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-red-500/20">
                  <MapPin className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white font-semibold">Kumaran Nagar, Shollinganallur, Chennai-600119</p>
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="bg-gray-900/70 border-gray-800 p-8 backdrop-blur-sm hover:border-red-500/30 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Lock className="mr-2 text-red-400" />
              Quick Message
            </h3>
            
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors"
              />
              <textarea 
                placeholder="Your Message" 
                rows={4}
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors resize-none"
              />
              <Button className="w-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white py-3 rounded-lg transition-all duration-300 group">
                <MessageSquare className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Send Message
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
