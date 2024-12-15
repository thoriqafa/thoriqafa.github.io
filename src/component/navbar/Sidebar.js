// src/navbar/Sidebar.js
import React from 'react';

const Sidebar = () => {
    return (
        <nav>
            <ul className="js-clone-nav d-none d-lg-inline-none site-menu float-right site-nav-wrap">
                <li><a href="#home-section" className="nav-link active">Home</a></li>
                <li><a href="#portfolio-section" className="nav-link">Portfolio</a></li>
                <li><a href="#about-section" className="nav-link">About</a></li>
                <li><a href="#services-section" className="nav-link">Services</a></li>
                <li><a href="#contact-section" className="nav-link">Contact us</a></li>
            </ul>
        </nav>
    );
};

export default Sidebar;
