import React from 'react';
import './Skills.css';

const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node.js',
    'Express',
    'MongoDB',
    'Git',
    'Bootstrap5',
    'Material-UI',
    'Tailwind.css'
];

const Skills = () => {
    return (
        <section className="skills-section">
            <h1 className="section-title">My Skills</h1>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
