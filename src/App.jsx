import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
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
      
      <Cursor />
      <div className={`relative z-0 bg-primary min-h-screen edge-glow transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <div>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Skills />
        <Projects />
        <Play />
        <div className="relative z-0">
          <Contact />
        </div>
        {/* Footer */}
        <footer className="text-center py-8 text-secondary text-sm font-mono tracking-widest uppercase">
          built with <span className="text-accent hover:text-white transition-colors cursor-pointer">antigravity ai</span>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
