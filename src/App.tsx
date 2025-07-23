import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import CodingProfiles from './components/CodingProfiles';
import TechStack from './components/TechStack';
import Achievements from './components/Achievements';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useEffect(() => {
    // Add smooth scroll behavior to the document
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Update page title
    document.title = 'Mudadla Yogitha - Full Stack Developer';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about">
          <AboutMe />
        </section>
        
        <section id="education">
          <Education />
        </section>
        
        <section id="experience">
          <Experience />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="coding">
          <CodingProfiles />
        </section>
        
        <section id="techstack">
          <TechStack />
        </section>
        
        <section id="achievements">
          <Achievements />
        </section>
        
        <section id="leadership">
          <Leadership />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-purple-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="font-poppins text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Mudadla Yogitha
          </div>
          <p className="text-gray-400 mb-4">
            Full Stack Developer • AI Enthusiast • Open Source Contributor
          </p>
          <p className="text-gray-500 text-sm">
            © 2025 Mudadla Yogitha. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
}

export default App;