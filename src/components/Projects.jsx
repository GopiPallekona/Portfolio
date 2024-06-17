import React from 'react';
import './Projects.css';
import ImageSlider from './ImageSlider';
import { FaDeleteLeft } from "react-icons/fa6";
import { FaGithub } from 'react-icons/fa';

const projects = [
    {
        title: 'Facebook-clone-Fullstack Website',
        description: 'In this website user have to Register with theire email and password then login ,onece user loggedin user can see posts of others ,can post own posts,and search for users and follow a user can see a another users profile, user can delete their own posts and can logout also ',
        images:[
            'images/screenshot_1718595887214.png',
            'images/screenshot_1718596341257.png',
            'images/screenshot_1718596483507.png'
        ],
    },
    {
        title: 'React-Ecommerce-Website',
        description: 'This is a React-ecommerce website that allows usres to see the the products ,select their sizes and colors and add to the cart and delete from cart and proceed to payment',
        images: [
            'images/screenshot_1718595211894.png',
            'images/screenshot_1718595251481.png',
            'images/screenshot_1718595273612.png'
            
        ],
    },
    {
        title: 'Todo-App',
        description: 'This is a simple Todo-app where uses can add,delete their tasks and they can see completed tasks list also',
        images: [
            'images/screenshot_1718596887523.png',
            'images/screenshot_1718596924851.png',
            'images/screenshot_1718596960936.png'
        ],
    },
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = React.useState(null);

    return (
        <section className="projects-section">
            <h1 className="section-title">My Projects</h1>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="project-card"
                        onClick={() => setSelectedProject(index)}
                    >
                        <h2 className="project-title">{project.title}</h2>
                        <p className="project-description">{project.description}</p>
                        <button>View Project</button>
                    </div>
                ))}
            </div>
            {selectedProject !== null && (
                <div className="slider-modal">
                    <div className="slider-content">
                        <button className="close-button" onClick={() => setSelectedProject(null)}>
                            &times;
                        </button>
                        {console.log('Rendering close button')}
                        <ImageSlider images={projects[selectedProject].images} />
                    </div>
                </div>
            )}
            <div className="footer">
                <h3>For more projects you can check my Github</h3>
                <a href="https://github.com/GopiPallekona" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
            </div>
        </section>
    );
};

export default Projects;
