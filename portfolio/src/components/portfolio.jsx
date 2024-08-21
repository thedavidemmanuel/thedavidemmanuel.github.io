import React from 'react';
import '../styles/portfolio.css';
import project1 from '../images/project-1.png';
import project2 from '../images/project-2.png';
import project3 from '../images/project-3.png';
import project4 from '../images/project-4.png';
import project5 from '../images/project-5.png';
import project6 from '../images/project-6.png';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Habit Tracker',
      description: 'A simple React habit tracker that uses Firebase database to keep track of your daily habits.',
      image: project1,
      link: '/habit-tracker',
      techStack: ['React', 'Firebase', 'CSS']
    },
    {
      id: 2,
      title: 'Burkett Chartered Accountants',
      description: 'A website design for a chartered accountants firm, Burkett & Co.',
      image: project2,
      link: '/burkett',
      techStack: ['HTML', 'CSS', 'JavaScript']
    },
    {
      id: 3,
      title: 'Chronicled',
      description: 'A web application for chronicling personal stories and experiences.',
      image: project3,
      link: '/chronicled',
      techStack: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 4,
      title: 'Renovators for Fraser Valley',
      description: 'A high-end, custom residential renovators serving Fraser Valley homeowners.',
      image: project4,
      link: '/renovators',
      techStack: ['WordPress', 'PHP', 'MySQL']
    },
    {
      id: 5,
      title: 'E-commerce Platform',
      description: 'A robust e-commerce platform built with cutting-edge technologies.',
      image: project5,
      link: '/ecommerce',
      techStack: ['React', 'Redux', 'Node.js', 'MongoDB']
    },
    {
      id: 6,
      title: 'AI-powered Chatbot',
      description: 'An intelligent chatbot with natural language processing capabilities.',
      image: project6,
      link: '/chatbot',
      techStack: ['Python', 'TensorFlow', 'Flask']
    }
  ];

  return (
    <div className="portfolio">
      <h2>My Recent Work</h2>
      <p>Here are a few cool projects I've worked on. Hover over any project to learn more!</p>
      <div className="project-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}>
              <div className="project-description">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.techStack.map((tech, index) => (
                    <button key={index} className="tech-button" disabled>
                      {tech}
                    </button>
                  ))}
                </div>
                <a href={project.link} className="view-project-button">
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;