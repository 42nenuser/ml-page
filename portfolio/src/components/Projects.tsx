import React from 'react';
import { ExternalLink, Folder } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const projects = [
  {
    title: "Breast Cancer Diagnosis Web App",
    description: "ML-powered web application for breast cancer diagnosis using cell nuclei measurements.",
    tech: ["Python", "Streamlit", "Scikit-Learn", "Docker"],
    category: "Machine Learning"
  },
  {
    title: "Leaffliction",
    description: "Deep learning system for plant disease detection from leaf images.",
    tech: ["Python", "OpenCV", "TensorFlow", "PlantCV"],
    category: "Computer Vision"
  },
  {
    title: "House Prices Regression Analysis",
    description: "Advanced regression techniques for house price prediction.",
    tech: ["Python", "Pandas", "Scikit-Learn", "XGBoost"],
    category: "Data Science"
  },
  {
    title: "Inception",
    description: "Containerized infrastructure setup using Docker.",
    tech: ["Docker", "NGINX", "WordPress", "MariaDB"],
    category: "DevOps"
  },
  // New Projects
  {
    title: "C++ Module 09 - PmergeMe",
    description: "Implementation of the Ford-Johnson sorting algorithm using STL containers for performance optimization.",
    tech: ["C++ 98", "STL Containers", "Algorithm Design", "Makefile"],
    category: "Algorithms & Data Structures"
  },
  {
    title: "ft_irc: A Lightweight IRC Server",
    description: "An IRC server built in C++ 98, supporting real-time text communication and channel management.",
    tech: ["C++ 98", "Sockets", "TCP/IP", "Polling Mechanisms", "Makefile"],
    category: "Network Programming"
  },
  {
    title: "miniRT: A Basic Ray Tracer",
    description: "A lightweight ray tracer written in C, rendering basic 3D scenes using ray tracing techniques.",
    tech: ["C", "miniLibX", "Math Library (-lm)", "Makefile"],
    category: "Computer Graphics"
  },
  {
    title: "Minishell: A Lightweight Command-Line Shell",
    description: "A simplified Bash-like shell supporting built-in commands, redirection, pipes, and signal handling.",
    tech: ["C", "POSIX system calls", "Process Management", "Makefile"],
    category: "System Programming"
  },
  {
    title: "Fract'ol: Interactive Fractal Visualization",
    description: "A computer graphics project that renders fractal sets with real-time zooming and Mandelbrot/Julia exploration.",
    tech: ["C", "MiniLibX", "Mathematical Computation"],
    category: "Computer Graphics"
  }
];


const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-semibold mb-8">Projects</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`rounded-2xl p-6 transition-all duration-300 ${
              darkMode 
                ? 'bg-gray-800/30 hover:bg-gray-800/50 border border-gray-700/50' 
                : 'bg-white/50 hover:bg-white/70 border border-gray-200/50'
            } backdrop-blur-md group cursor-pointer hover:scale-[1.02] hover:shadow-xl`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl ${
                darkMode ? 'bg-blue-500/20' : 'bg-blue-500/10'
              }`}>
                <Folder className={`w-6 h-6 ${
                  darkMode ? 'text-blue-400' : 'text-blue-600'
                }`} />
              </div>
              <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
            <p className={`mb-4 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className={`text-sm px-3 py-1 rounded-full transition-all duration-300 ${
                    darkMode
                      ? 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
                      : 'bg-gray-200/50 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;