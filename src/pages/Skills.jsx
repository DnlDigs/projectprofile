import React from "react";
import profilpic from '../assets/digs.jpg'
import './pg.css'

const skills = [
  {
    title: "HTML & CSS",
    description: "Semantic markup and responsive design.",
    image: "https://cdn.simpleicons.org/html5/f06529", // HTML icon
  },
  {
    title: "JavaScript",
    description: "Dynamic behavior and modern ES6+ syntax.",
    image: "https://cdn.simpleicons.org/javascript/f7df1e", // JS icon
  },
  {
    title: "React.js",
    description: "Reusable components and state management.",
    image: "https://cdn.simpleicons.org/react/61DAFB", // React icon
  },
  {
    title: "PHP & MySQL",
    description: "Back-end logic and database integration.",
    image: "https://cdn.simpleicons.org/php/777BB4", // PHP icon
  },
]


function Skills() {
  return (
    <section className="bg-gray-900 text-white py-16 px-6">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-10">My Skills</h2>
  
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105 flex flex-col items-center text-center"
          >
            <img
              src={skill.image}
              alt={skill.title}
              className="w-16 h-16 mb-4 rounded-full object-cover border-2 border-gray-400"
            />
            <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
            <p className="text-sm text-gray-300">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  
  );
}

export default Skills;