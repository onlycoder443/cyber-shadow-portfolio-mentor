
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Tools from "@/components/Tools";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import { useEffect } from "react";

const Index = () => {
  // Terminal typing effect in console on load (hacker touch)
  useEffect(() => {
    const messages = [
      "%c> System breach in progress...",
      "%c> Bypassing security protocols...",
      "%c> Accessing restricted files...",
      "%c> Access granted. Welcome to Heartlin Gardon's domain!"
    ];
    
    const style = "color: #DC2626; font-family: monospace; font-size: 14px; font-weight: bold;";
    
    messages.forEach((msg, i) => {
      setTimeout(() => {
        console.log(msg, style);
      }, i * 800);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative">
      {/* Matrix-inspired background effect with red theme */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <div 
            key={i}
            className="absolute text-red-500 text-opacity-30 whitespace-nowrap"
            style={{
              left: `${i * 10}%`,
              top: 0,
              fontSize: '12px',
              fontFamily: 'monospace',
              animation: `matrix-fall ${5 + i * 2}s linear infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          >
            {Array.from({ length: 50 }).map((_, j) => (
              <div 
                key={j}
                style={{ 
                  animationDelay: `${j * 0.1}s`,
                  opacity: Math.random() * 0.8 + 0.2
                }}
              >
                {String.fromCharCode(33 + Math.floor(Math.random() * 94))}
              </div>
            ))}
          </div>
        ))}
      </div>

      <Hero />
      <Skills />
      <Tools />
      <Experience />
      <div id="projects">
        <Projects />
      </div>
      <Contact />
    </div>
  );
};

export default Index;
