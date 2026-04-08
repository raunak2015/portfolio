import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Play from "./components/Play";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import LoadingScreen from "./components/LoadingScreen";
import { useState } from "react";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <BrowserRouter>
      {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
      
      <div className="relative z-0 bg-[#0d1224] min-h-screen overflow-hidden">
        {/* Floating Glows */}
        <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-[#7c3aed]/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>
        <div className="absolute top-[40%] left-[10%] w-[300px] h-[300px] bg-[#ec4899]/10 blur-[100px] rounded-full -z-10 animate-pulse delay-700"></div>
        <div className="absolute bottom-[20%] right-[20%] w-[500px] h-[500px] bg-[#16f2b3]/10 blur-[150px] rounded-full -z-10 animate-pulse delay-1000"></div>

        <Navbar />
        
        <main className="flex flex-col gap-0">
          <Hero />
          <About />
          <Experience />
          <Skills />
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
