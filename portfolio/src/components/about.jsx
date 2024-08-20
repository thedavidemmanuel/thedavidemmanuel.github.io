import React from 'react';
import Programmer from '../images/programmer.gif';
import '../styles/about.css';

const About = () => {
    return (
        <div className="about-container">
            <div className="programmer-gif">
                <img src={Programmer} alt="programmer-gif" />
            </div>
            <div className="about-content">
                <h2>About Me</h2>
                <p>Hello! I'm David Emmanuel, a passionate Software Engineer with a keen interest in Machine Learning and Full Stack Development. With a strong foundation in computer science and a drive for continuous learning, I strive to create efficient, scalable, and user-friendly solutions to complex problems.</p>
                <p>My journey in tech has equipped me with a diverse skill set, allowing me to work on various projects from web applications to machine learning models. I'm always excited about new technologies and enjoy the challenge of mastering them.</p>
                <p>When I'm not coding, you can find me exploring the latest tech trends, contributing to open-source projects, or sharing my knowledge through tech blogs and community events.</p>
            </div>
        </div>
    );
};

export default About;