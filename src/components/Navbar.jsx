import React from 'react';
import "./Navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                GOPI
            </div>
            <ul className="nav-links">
                <li><Link to={"/"}><a className='anc' href="#">Home</a></Link></li>
                <li><Link to={"/projects"}><a className='anc' href="#">Projects</a></Link></li>
                <li><Link to={"/skills"}><a className='anc' href="#">Skills</a></Link></li>
                <li><Link to={"/contact"}><a className='anc' href="#">Contact</a></Link></li>
                
            </ul>
        </nav>
    );
};

export default Navbar;
