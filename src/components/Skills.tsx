import React from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'design' | 'other';
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'HTML & CSS', level: 90, category: 'frontend' },
    { name: 'JavaScript', level: 85, category: 'frontend' },
    { name: 'React', level: 80, category: 'frontend' },
    // { name: 'TypeScript', level: 75, category: 'frontend' },
    {name: 'SQL', level: 75, category: 'backend' },
    { name: 'Node.js', level: 60, category: 'backend' },
    { name: 'Express', level: 55, category: 'backend' },
    // { name: 'MongoDB', level: 60, category: 'backend' },
    { name: 'Python', level: 80, category: 'programming' },
    { name: 'Java', level: 70, category: 'programming' },
    { name: 'C++', level: 65, category: 'programming' },
    { name: 'Github', level: 75, category: 'tools' },
    { name: 'Git', level: 60, category: 'tools' },
  ];

  const categories = [
    { name: 'frontend', label: 'Frontend Development' },
    { name: 'backend', label: 'Backend Development' },
    { name: 'programming', label: 'Programming Languages' },
    { name: 'tools', label: 'Tools' },
  ];

  return (
    <section id="skills" className="py-20 bg-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">My Skills</h2>
          <div className="w-20 h-1 bg-yellow-300 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I've worked with a variety of technologies and tools. Here's an overview of my technical skills and proficiency levels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {categories.map((category) => (
            <div key={category.name}>
              <h3 className="text-xl font-semibold text-gray-800 mb-6">{category.label}</h3>
              <div className="space-y-6">
                {skills
                  .filter((skill) => skill.category === category.name)
                  .map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700">{skill.name}</span>
                        <span className="text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className={`h-2.5 rounded-full ${
                            category.name === 'frontend' ? 'bg-blue-400' :
                            category.name === 'backend' ? 'bg-green-400' :
                            category.name === 'programming' ? 'bg-red-400' : 'bg-yellow-400'
                          }`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;