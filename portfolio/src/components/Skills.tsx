import React from 'react';
import { Brain, Code, Database, Terminal } from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

const skillCategories = [
  {
    icon: Brain,
    title: "Machine Learning",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Deep Learning", "Neural Networks"]
  },
  {
    icon: Code,
    title: "Programming",
    skills: ["Python", "C++", "C", "Data Structures","OOP concepts", "Docker", "Git"]
  },
  {
    icon: Database,
    title: "Data Science",
    skills: ["Pandas", "NumPy", "SQL", "Data Visualization", "Statistical Analysis"]
  },
  {
    icon: Terminal,
    title: "System & Network Programming",
    skills: ["Sockets", "TCP/IP", "POSIX APIs", "Multithreading", "Process Management"]
  },
  {
    icon: Code,
    title: "Computer Graphics & Mathematical Visualization",
    skills: ["Ray Tracing", "miniLibX", "OpenGL Basics", "Fractal Visualization", "Mathematical Computation"]
  },
  {
    icon: Terminal,
    title: "Tools & DevOps",
    skills: ["Linux", "Docker", "CI/CD", "Version Control", "Shell Scripting"]
  }
];



const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-semibold mb-8">Skills & Expertise</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className={`rounded-2xl p-6 transition-all duration-300 ${
              darkMode 
                ? 'bg-gray-800/30 hover:bg-gray-800/50 border border-gray-700/50' 
                : 'bg-white/50 hover:bg-white/70 border border-gray-200/50'
            } backdrop-blur-md hover:scale-[1.02] hover:shadow-xl`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className={`p-3 rounded-xl ${
                darkMode ? 'bg-blue-500/20' : 'bg-blue-500/10'
              }`}>
                <category.icon className={`w-6 h-6 ${
                  darkMode ? 'text-blue-400' : 'text-blue-600'
                }`} />
              </div>
              <h3 className="text-xl font-semibold">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className={`text-sm px-3 py-1 rounded-full transition-all duration-300 ${
                    darkMode
                      ? 'bg-gray-700/50 text-gray-300 hover:bg-gray-700 hover:scale-105'
                      : 'bg-gray-200/50 text-gray-700 hover:bg-gray-200 hover:scale-105'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;