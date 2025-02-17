import React from 'react';
import { Brain, Database, Bot, Terminal, Github, Linkedin, Mail, ExternalLink, ChevronRight, ArrowRight, Code, Network, Server, GitMerge } from 'lucide-react';

function App() {
  const projects = [
    {
      title: "Breast-Cancer-Diagnosis-Predictor",
      description: "A Streamlit machine learning application using logistic regression to classify tumors as benign or malignant based on cell nuclei measurements.",
      icon: <Database className="w-8 h-8 text-purple-400" />,
      tags: ["Machine Learning", "Streamlit", "Healthcare", "Classification"],
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Vegetable-Disease-Classifier",
      description: "Deep learning model utilizing CNNs to detect plant diseases, specifically Early Blight Fungus, Late Blight Fungus, and Healthy Leaves in vegetables.",
      icon: <Brain className="w-8 h-8 text-green-400" />,
      tags: ["Deep Learning", "CNN", "Computer Vision", "Agriculture"],
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "NLP-manga-recommander",
      description: "A terminal-based recommendation engine leveraging LangChain, Hugging Face embeddings, and ChromaDB for semantic manga search and suggestions.",
      icon: <Bot className="w-8 h-8 text-blue-400" />,
      tags: ["NLP", "LangChain", "Semantic Search", "Recommendations"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "miniRT-Ray-Tracer",
      description: "An advanced ray tracing engine implemented in C, simulating realistic light behavior for computer-generated imagery using miniLibX. Features include reflection, refraction, and shadow calculations.",
      icon: <Code className="w-8 h-8 text-yellow-400" />,
      tags: ["C", "Graphics", "Ray Tracing", "3D Rendering"],
      image: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "IRC-Server-Implementation",
      description: "A robust IRC server built in C++98, enabling real-time text communication with support for multiple channels, private messaging, and user authentication.",
      icon: <Network className="w-8 h-8 text-pink-400" />,
      tags: ["C++", "Networking", "Sockets", "Multi-threading"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Inception-Docker-Infrastructure",
      description: "A containerized infrastructure setup using Docker, implementing secure microservices architecture with NGINX, WordPress, MariaDB, and other essential services.",
      icon: <Server className="w-8 h-8 text-cyan-400" />,
      tags: ["Docker", "DevOps", "System Admin", "Microservices"],
      image: "https://images.unsplash.com/photo-1585079542156-2755d9c8a094?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Ford-Johnson_algorithm",
      description: "Implementation of the merge-insertion sort algorithm, optimizing comparison operations through sophisticated pair matching and binary insertion techniques.",
      icon: <GitMerge className="w-8 h-8 text-orange-400" />,
      tags: ["Algorithms", "Sorting", "Optimization", "Data Structures"],
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-teal-500/10 animate-gradient"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block mb-4 px-6 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-white/10 animate-float">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              AI & Machine Learning Engineer
            </span>
          </div>
          <h1 className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300">
            Crafting Intelligent Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
           into Deep Learning, Machine Learning, Data Analysis, and Natural Language Processing, building innovative AI solutions that drive real-world impact.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/42nenuser" className="group flex items-center gap-2 px-6 py-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-white/20">
              <Github className="w-5 h-5" />
              <span>GitHub</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#" className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full hover:from-purple-500/30 hover:to-blue-500/30 transition-all duration-300 border border-white/10 hover:border-white/20">
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#" className="group flex items-center gap-2 px-6 py-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-white/20">
              <Mail className="w-5 h-5" />
              <span>simply_livem8@proton.me</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 via-gray-900 to-gray-900/0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-20"></div>
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">About Me</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-20"></div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <p className="text-gray-300 text-xl leading-relaxed mb-8">
              <p>
  I am a motivated AI enthusiast with hands-on experience in <mark>deep learning</mark>, <mark>machine learning</mark>, and <mark>natural language processing</mark>. Additionally, I have worked on <mark>algorithmic</mark> and <mark>software engineering</mark> projects in <mark>C++</mark> and <mark>C</mark>. I am actively seeking an <mark>internship</mark> where I can leverage my skills, learn from industry professionals, and contribute to impactful projects. I'm eager to grow as an engineer and bring value to a dynamic team.
</p>

              </p>
              <p className="text-gray-300 text-xl leading-relaxed">
                I love tackling complex problems and creating intelligent systems that make a real-world impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {/* Projects Section */}
<section className="py-32">
  <div className="container mx-auto px-4">
    <div className="flex items-center gap-4 mb-16">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-20"></div>
      <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
        Featured Projects
      </h2>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-20"></div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {projects.map((project, index) => (
        <a
          key={index}
          href={`https://github.com/42nenuser/${project.title.toLowerCase().replace(/ /g, '-')}`} // Replace with your GitHub repo URL
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer" // Security best practice for target="_blank"
          className="group relative animate-glow no-underline" // Remove underline from link
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 z-10 rounded-xl"></div>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover absolute inset-0 rounded-xl"
          />
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 relative z-20 h-full transform group-hover:-translate-y-2 transition-all duration-300 border border-white/10">
            <div className="mb-6">{project.icon}</div>
            <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
            <p className="text-gray-300 mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="bg-white/10 backdrop-blur-sm text-sm px-4 py-1.5 rounded-full border border-white/10">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="inline-flex items-center text-sm text-gray-300 group-hover:text-white transition-colors">
                View Project Details
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  </div>
</section>

      {/* Skills Section */}
      {/* Skills Section */}
<section className="py-32 relative">
  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 via-gray-900 to-gray-900/0"></div>
  <div className="container mx-auto px-4 relative z-10">
    <div className="flex items-center gap-4 mb-16">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-20"></div>
      <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
        Technical Skills
      </h2>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-20"></div>
    </div>
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Deep Learning */}
      <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
          <Brain className="w-6 h-6 text-purple-400" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Deep Learning
          </span>
        </h3>
        <ul className="text-gray-300 space-y-3">
          <li className="flex items-center gap-2 group">
            <ChevronRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" /> TensorFlow
          </li>
          <li className="flex items-center gap-2 group">
            <ChevronRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" /> PyTorch
          </li>
          <li className="flex items-center gap-2 group">
            <ChevronRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" /> Neural Networks
          </li>
          <li className="flex items-center gap-2 group">
            <ChevronRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" /> Computer Vision
          </li>
        </ul>
      </div>

      {/* Machine Learning */}
      <div className="bg-gradient-to-br from-blue-500/10 to-teal-500/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
          <Database className="w-6 h-6 text-blue-400" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
            Machine Learning
          </span>
        </h3>
        <ul className="text-gray-300 space-y-3">
          <li className="flex items-center gap-2 group">
            <ChevronRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" /> Scikit-learn
          </li>
          <li className="flex items-center gap-2 group">
            <ChevronRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" /> Statistical Analysis
          </li>
          <li className="flex items-center gap-2 group">
            <ChevronRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" /> Feature Engineering
          </li>
          <li className="flex items-center gap-2 group">
            <ChevronRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" /> Model Optimization
          </li>
        </ul>
      </div>

      {/* NLP */}
      <div className="bg-gradient-to-br from-teal-500/10 to-green-500/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
          <Bot className="w-6 h-6 text-teal-400" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-green-400">
            NLP
          </span>
        </h3>
        <ul className="text-gray-300 space-y-3">
          <li className="flex items-center gap-2 group">
            <ChevronRight className="w-4 h-4 text-teal-400 group-hover:translate-x-1 transition-transform" /> NLTK
          </li>
          <li className="flex items-center gap-2 group">
            <ChevronRight className="w-4 h-4 text-teal-400 group-hover:translate-x-1 transition-transform" /> Transformers
          </li>
          <li className="flex items-center gap-2 group">
            <ChevronRight className="w-4 h-4 text-teal-400 group-hover:translate-x-1 transition-transform" /> LangChain
          </li>
          <li className="flex items-center gap-2 group">
            <ChevronRight className="w-4 h-4 text-teal-400 group-hover:translate-x-1 transition-transform" /> Semantic Search
          </li>
        </ul>
      </div>

      {/* Programming & Systems */}
      <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
          <Code className="w-6 h-6 text-purple-400" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Software Eng & Algo
          </span>
        </h3>
        <ul className="text-gray-300 space-y-3">
          <li className="flex items-center gap-2 group">
            <ChevronRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" /> C/C++
          </li>
          <li className="flex items-center gap-2 group">
            <ChevronRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" /> Data Structures
          </li>
          <li className="flex items-center gap-2 group">
            <ChevronRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" /> Sorting algorithms
          </li>
          <li className="flex items-center gap-2 group">
            <ChevronRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" /> Docker
          </li>
        </ul>
      </div>



    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-400 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-6 mb-6">
            <a href="#" className="hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm">© 2024 AI Engineer Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
