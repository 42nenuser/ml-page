import React from 'react';
import { Brain, Code, Database } from 'lucide-react';

interface AboutMeProps {
  darkMode: boolean;
}

const AboutMe: React.FC<AboutMeProps> = ({ darkMode }) => {
  return (
    <div className="space-y-8">
      <div className={`rounded-2xl p-8 transition-all duration-300 ${
        darkMode 
          ? 'bg-gray-800/30 border border-gray-700/50' 
          : 'bg-white/50 border border-gray-200/50'
      } backdrop-blur-md`}>
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed">
          I'm a passionate Machine Learning Engineer with an interest in algorithmic problem-solving,
          deep learning, and data science. with a strong foundation in both theoretical concepts
          and practical applications.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            icon: Brain,
            title: 'Machine Learning',
            description: 'Learning to build and deploy ML models, exploring real-world applications.'
          },
          {
            icon: Code,
            title: 'Algorithm Design',
            description: 'experience in problem-solving and implementing efficient algorithms'
          },
          {
            icon: Database,
            title: 'Data Science',
            description: 'Gaining experience in data analysis, visualization, and statistical modeling.'
          }
        ].map((item, index) => (
          <div
            key={index}
            className={`rounded-2xl p-6 transition-all duration-300 ${
              darkMode 
                ? 'bg-gray-800/30 hover:bg-gray-800/50 border border-gray-700/50' 
                : 'bg-white/50 hover:bg-white/70 border border-gray-200/50'
            } backdrop-blur-md hover:scale-[1.02] hover:shadow-xl`}
          >
            <div className={`p-3 rounded-xl mb-4 inline-block ${
              darkMode ? 'bg-blue-500/20' : 'bg-blue-500/10'
            }`}>
              <item.icon className={`w-6 h-6 ${
                darkMode ? 'text-blue-400' : 'text-blue-600'
              }`} />
            </div>
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;