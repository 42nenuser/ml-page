import React, { useState } from 'react';
import { Sun, Moon, Github, Mail, Linkedin, Terminal, FolderOpen, User, Code2, BookOpen } from 'lucide-react';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Dock from './components/Dock';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      darkMode ? 'bg-gradient-to-br from-[#1c1c1c] to-[#2c2c2c] text-white' : 'bg-gradient-to-br from-[#f0f0f0] to-[#ffffff] text-gray-900'
    }`}>
      {/* Theme Toggle */}
      <button
        onClick={toggleDarkMode}
        className={`fixed top-6 right-6 p-3 rounded-full ${
          darkMode ? 'bg-gray-800/90 text-gray-200' : 'bg-white/90 text-gray-800'
        } shadow-lg backdrop-blur-xl hover:scale-110 transition-all duration-300 ease-in-out`}
        aria-label="Toggle theme"
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-16">
          <h1 className={`text-5xl font-bold mb-3 tracking-tight ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            42nenuser
          </h1>
          <p className={`text-xl font-light ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Machine Learning Engineer
          </p>
        </header>

        {/* Content Section */}
        <main className={`backdrop-blur-xl rounded-3xl p-8 mb-24 transition-all duration-500 ${
          darkMode 
            ? 'bg-gray-900/40 shadow-2xl border border-gray-800/50' 
            : 'bg-white/60 shadow-xl border border-gray-200/50'
        }`}>
          {activeSection === 'about' && <AboutMe darkMode={darkMode} />}
          {activeSection === 'projects' && <Projects darkMode={darkMode} />}
          {activeSection === 'skills' && <Skills darkMode={darkMode} />}
          {activeSection === 'contact' && <Contact darkMode={darkMode} />}
        </main>

        {/* Dock */}
        <Dock
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          darkMode={darkMode}
          items={[
            { id: 'about', icon: User, label: 'About' },
            { id: 'projects', icon: FolderOpen, label: 'Projects' },
            { id: 'skills', icon: Code2, label: 'Skills' },
            { id: 'contact', icon: Mail, label: 'Contact' }
          ]}
        />
      </div>
    </div>
  );
}

export default App;