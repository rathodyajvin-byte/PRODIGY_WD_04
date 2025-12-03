import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-50 selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <footer className="bg-slate-950 border-t border-slate-900 py-8 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Alex Dev. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
};

export default App;