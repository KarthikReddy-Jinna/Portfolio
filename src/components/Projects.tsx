import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  // demoUrl: string;
  // codeUrl: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Age, Gender and Emotion Recognition Model",
      description: " Built a facial recognition system that detects age, gender and emotional states from facial images using machine learning models.",
      image: "https://assets-global.website-files.com/63f902d79a33f7ff016cde0b/63f902d89a33f71c826ce746_6390a10c3644738a41e9b528_Face-Recognition.jpeg",
      tags: ["Python", "OpenCV", "TensorFlow"],
      // demoUrl: "#",
      // codeUrl: "#"
    },
    {
      id: 2,
      title: "Ewaste Facility Locater",
      description: "Built a react app that uses the users location to fetch the nearest ewaste recycling centers.",
      image: "https://static.propertylogic.net/blog/1454924560/location_feature.jpeg",
      tags: ["React", "Express.js", "CSS", "Node.js"],
      // demoUrl: "#",
      // codeUrl: "#"
    },
    {
      id: 3,
      title: " Rotating Cube using Pygame library",
      description: "Created a 3D rotating cube simulation using the Pygame library, providing real-time graphical rotation and variable rotation speed.",
      image: "https://www.jonathan-petitcolas.com/img/posts/threejs/cube.png",
      tags: ["Python", "PyGame"],
      // demoUrl: "#",
      // codeUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">My Projects</h2>
          <div className="w-20 h-1 bg-blue-300 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project has helped me develop different skills and tackle unique challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:transform hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 text-xs rounded-full bg-pink-100 text-pink-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* <div className="flex space-x-3">
                  <a 
                    href={project.demoUrl} 
                    className="flex items-center text-sm text-blue-500 hover:text-blue-700 transition-colors duration-300"
                  >
                    <ExternalLink size={16} className="mr-1" /> Live Demo
                  </a>
                  <a 
                    href={project.codeUrl} 
                    className="flex items-center text-sm text-gray-500 hover:text-gray-700 transition-colors duration-300"
                  >
                    <Github size={16} className="mr-1" /> Code
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>
        
        {/* <div className="text-center mt-12">
          <button className="bg-transparent border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white py-2 px-6 rounded-full transition-colors duration-300">
            View All Projects
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;