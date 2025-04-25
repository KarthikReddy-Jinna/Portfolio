import React from 'react';
import { GraduationCap, Award, Book } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">About Me</h2>
          <div className="w-20 h-1 bg-green-300 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get to know more about me, my background, and what drives my passion for technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:transform hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 mr-4">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Education</h3>
            </div>
            <ul className="space-y-4">
              <li>
                <p className="font-medium text-gray-700">B.Tech Computer Science AIML</p>
                <p className="text-sm text-gray-500">BV Raju Institute of Technology (2022 - Present)</p>
              </li>
              <li>
                <p className="font-medium text-gray-700">High School CBSE</p>
                <p className="text-sm text-gray-500">Prachin Global School (2020 - 2022)</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:transform hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 mr-4">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Achievements</h3>
            </div>
            <ul className="space-y-4">
              <li>
                <p className="font-medium text-gray-700">Participated in ML Contest</p>
                <p className="text-sm text-gray-500">2024 Academic Year</p>
              </li>
              <li>
                <p className="font-medium text-gray-700">Hackathon Runner</p>
                <p className="text-sm text-gray-500">TechFest 2023</p>
              </li>
              <li>
                <p className="font-medium text-gray-700">Coding Competition Finalist</p>
                <p className="text-sm text-gray-500">CodeLife 2023</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:transform hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-500 mr-4">
                <Book size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Interests</h3>
            </div>
            <ul className="space-y-4">
              <li>
                <p className="font-medium text-gray-700">Machine Learning</p>
                <p className="text-sm text-gray-500">Exploring AI applications</p>
              </li>
              <li>
                <p className="font-medium text-gray-700">Web Development</p>
                <p className="text-sm text-gray-500">Frontend and backend technologies</p>
              </li>
              <li>
                <p className="font-medium text-gray-700">Software debugging</p>
                <p className="text-sm text-gray-500">Finding bugs and resolving them</p>
              </li>
              
              <li>
                <p className="font-medium text-gray-700">Open Source</p>
                <p className="text-sm text-gray-500">Contributing to community projects</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;