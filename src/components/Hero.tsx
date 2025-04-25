import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="flex flex-col items-start">
              <p className="text-pink-400 mb-2 tracking-wider">Hello, I'm</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
                J Karthik Reddy
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
                Computer Science Undergraduate
              </h2>
              <p className="text-gray-600 mb-8 max-w-md">
                I create beautiful digital experiences and user-friendly softwares that solve real-world problems. 
              </p>
              <div className="flex space-x-4">
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-6 rounded-full transition-colors duration-300"
                >
                  Contact Me
                </button>
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-transparent border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white py-2 px-6 rounded-full transition-colors duration-300"
                >
                  View Work
                </button>
              </div>
              <div className="flex mt-8 space-x-4">
                <a href="https://github.com/KarthikReddy-Jinna" className="text-gray-500 hover:text-blue-400 transition-colors duration-300">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/karthik-reddy-760573259" className="text-gray-500 hover:text-blue-400 transition-colors duration-300">
                  <Linkedin size={20} />
                </a>
                <a href="jkarthikreddy2005@gmail.com" className="text-gray-500 hover:text-blue-400 transition-colors duration-300">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-200 shadow-lg">
              <img 
                src="../img/22.jpg" 
                alt="Karthik Reddy" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;