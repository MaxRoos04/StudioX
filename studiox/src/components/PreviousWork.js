import React from 'react';
import project1Image from '../assets/images/PW1.png';
import project2Image from '../assets/images/PW2.png';
import project3Image from '../assets/images/PW3.png';

const PreviousWork = () => {
  const projects = [
    {
      title: 'Personal Portfolio Site',
      image: project1Image,
    },
    {
      title: 'Professional Website',
      image: project2Image,
    },
    {
      title: 'Movie Webiste',
      image: project3Image,
    },
  ];

  return (
    <section id="previous-work" className="bg-white py-16 mt-40">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Previous Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreviousWork;
