import React from 'react';
import './Contact.css';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

const Contact = () => {
    const handleClick = () => {
        window.location.href = "mailto:pandugopi00@gmail.com";
    };

    return (
        <section className="contact-section">
            <div className="contact-left">
                <img src="https://wallpaperaccess.com/full/1338380.jpg" alt="Contact" className="contact-image" />
                <div className="social-links">
                    <a href="https://www.facebook.com/panduchinni257" target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                    </a>
                    <a href="https://www.instagram.com/pandu9520/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://github.com/GopiPallekona" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                </div>
            </div>
            <div className="contact-right">
                <h2>Contact Me</h2>
                <form className="contact-form">
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <button type="button" onClick={handleClick}>Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
