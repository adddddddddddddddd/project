import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import { useRef } from "react";

function App() {
  // const [activeSection, setActiveSection] = useState(null);
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const AboutRef = useRef(null);
  const ContactRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToHome = () => scrollToSection(homeRef);
  const scrollToProjects = () => scrollToSection(projectsRef);
  const scrollToAbout = () => scrollToSection(AboutRef);
  const scrollToContact = () => scrollToSection(ContactRef);
  return (
    <div className="min-h-screen bg-background2 text-text">
      <Navbar
        scrollToHome={scrollToHome}
        scrollToProjects={scrollToProjects}
        scrollToAbout={scrollToAbout}
        scrollToContact={scrollToContact}
        // activeSection={activeSection}
        // setActiveSection={setActiveSection}
      />

      <main className="container mx-auto px-4 py-20">
        <div ref={homeRef}>
          <Hero
            scrollToProjects={scrollToProjects}
            // activeSection={activeSection}
            // setActiveSection={setActiveSection}
          />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={AboutRef}>
          <About />
        </div>
        <div ref={ContactRef}>
          <Contact />
        </div>
      </main>

      <footer className="bg-background2 py-8">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            <a
              href="https://github.com/adddddddddddddddd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-secondary transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="www.linkedin.com/in/adrien-leveuf-673305298"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-secondary transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:adrien.leveuf@gmail.com"
              className="text-gray-400 hover:text-secondary transition-colors"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
          <p className="text-gray-400">
            © 2024 Adrien Leveuf. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
