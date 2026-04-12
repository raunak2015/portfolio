import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Hackathons from "./components/Hackathons";
import Education from "./components/Education";
import Play from "./components/Play";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import LoadingScreen from "./components/LoadingScreen";
import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Mouse tracking for parallax glows
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smoothen the movement
  const springX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const springY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      // Calculate normalized value (-0.5 to 0.5)
      mouseX.set(clientX / innerWidth - 0.5);
      mouseY.set(clientY / innerHeight - 0.5);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <BrowserRouter>
      {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
      
      <div className="relative z-0 bg-[#0d1224] min-h-screen overflow-hidden">
        {/* Floating Interactive Glows */}
        <motion.div 
          style={{ x: springX.get() * 100, y: springY.get() * 100 }}
          className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-[#7c3aed]/15 blur-[120px] rounded-full -z-10 animate-pulse"
        ></motion.div>
        <motion.div 
          style={{ x: springX.get() * -80, y: springY.get() * -80 }}
          className="absolute top-[40%] left-[10%] w-[300px] h-[300px] bg-[#ec4899]/15 blur-[100px] rounded-full -z-10 animate-pulse delay-700"
        ></motion.div>
        <motion.div 
          style={{ x: springX.get() * 120, y: springY.get() * 120 }}
          className="absolute bottom-[20%] right-[20%] w-[500px] h-[500px] bg-[#16f2b3]/15 blur-[150px] rounded-full -z-10 animate-pulse delay-1000"
        ></motion.div>

        <Navbar />
        
        <main className="flex flex-col gap-0">
          <Hero />
          <About />
          <Hackathons />
          <Skills />
          <Certifications />
          <Projects />
          <Education />
          <Play />
          <div className="relative z-0">
            <Contact />
          </div>
        </main>
        
        <div className="fixed bottom-10 right-10 z-[100]">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
            className="w-12 h-12 rounded-full glass-container flex items-center justify-center text-white hover:bg-[#ec4899] hover:border-[#ec4899] transition-all duration-300 shadow-xl"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
          </button>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

// app core wrapper

// patch9
