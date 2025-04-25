import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-6">J Karthik Reddy</h2>
          
          <div className="flex space-x-6 mb-8">
            <a href="https://github.com/KarthikReddy-Jinna" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/karthik-reddy-760573259" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href="mailto:email@jkarthikreddy2005@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
              <Mail size={24} />
            </a>
          </div>
          
          <div className="w-full max-w-md mb-8">
            <div className="h-px bg-gray-700"></div>
          </div>
          
          <p className="flex items-center text-gray-400 text-center">
            J Karthik Reddy © {year}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;