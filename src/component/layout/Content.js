// src/components/Content.js
import React from 'react';
import About from './content/About';
import Skill from './content/Skill';
import Experience  from './content/Experience';
import ContactMe from './content/ContactMe';

const Content = () => {
  return (
    <div class="untree_co-section pb-0" id="home-section">
        <div class="container">
        <div class="row justify-content-center text-center">
            <div class="col-md-7">
            <h1 class="heading gsap-reveal-hero mb-3"><strong>My Portfolio</strong></h1>
            <h2 class="subheading gsap-reveal-hero mb-4">
            Welcome to my portfolio website. This site is designed to provide a thorough insight into my skills, experiences, and work, showcasing my dedication to delivering exceptional results. Thank you for visiting, and feel free to reach out if you have any questions or opportunities for collaboration.
            </h2>
            {/* <p class="gsap-reveal-hero"><a href="https://untree.co/" target="_blank" class="btn btn-outline-black">More free templates here</a></p>     */}
            </div>
        </div>

        <About />

        <Experience />

        <ContactMe />
        
        </div>
    </div>
  );
};

export default Content;
