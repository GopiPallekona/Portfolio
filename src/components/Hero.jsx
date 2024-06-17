import React from 'react';
import './Hero.css';
 // Make sure you have an image in your project directory

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="hero-title">Welcome to My Portfolio</h1>
                <p className="hero-text">
                    Hi, I'm Gopi Pallekona, a passionate frontend developer who loves building amazing web applications.
                    Explore my work and get to know me better.
                </p>
            </div>
            <div className="hero-image">
              <img src="https://th.bing.com/th?id=OIP.Gn67FLVSiYsnUaU1g1TgFwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.9&pid=3.1&rm=2" alt="" />
            </div>
        </section>
    );
};

export default Hero;
