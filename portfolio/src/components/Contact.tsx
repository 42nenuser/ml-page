import React from 'react';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-semibold mb-8">Get in Touch</h2>
      
      <div className={`rounded-2xl p-8 transition-all duration-300 ${
        darkMode 
          ? 'bg-gray-800/30 border border-gray-700/50' 
          : 'bg-white/50 border border-gray-200/50'
      } backdrop-blur-md`}>
        <p className="text-lg mb-8">
  I'm always interested in collaborating on innovative projects and discussing new opportunities
  in machine learning and software development. Feel free to reach out to me on Discord: 
  <span className="font-semibold text-blue-500"> jackni_</span> or :
</p>

        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Mail,
              label: "Email",
              //link: "mailto:contact@example.com",
              text: "simply_livem8@proton.me"
            },
            {
              icon: Github,
              label: "GitHub",
              link: "https://github.com/42nenuser",
              text: "42nenuser"
            },
            {
              icon: Linkedin,
              label: "LinkedIn",
              link: "#",
              text: "Connect on LinkedIn"
            }
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 p-4 rounded-xl transition-all duration-300 ${
                darkMode
                  ? 'bg-gray-700/50 hover:bg-gray-700 border border-gray-600/50'
                  : 'bg-gray-100/50 hover:bg-gray-100 border border-gray-200/50'
              } hover:scale-105 hover:shadow-lg`}
            >
              <div className={`p-2 rounded-lg ${
                darkMode ? 'bg-blue-500/20' : 'bg-blue-500/10'
              }`}>
                <item.icon className={`w-5 h-5 ${
                  darkMode ? 'text-blue-400' : 'text-blue-600'
                }`} />
              </div>
              <span>{item.text}</span>
              <ExternalLink className="w-4 h-4 ml-auto opacity-50" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;