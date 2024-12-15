import React from "react";
import Person from '../../image/person_1.jpg';

const About = () => {
    return(
        <div class="untree_co-section pb-0" id="about-section">
            <div class="container">
                <div class="row justify-content-center mb-3">
                <div class="col-lg-7 mx-auto text-center author-wrap">
                    <img src={Person} alt={Person} class="img-fluid rounded-circle mb-3" />
                    <h3 class="text-black h5 font-weight-bold mb-2 gsap-reveal-hero txt-about">Thoriq Afa</h3>
                    <p class="gsap-reveal-hero txt-about">Application Developer/Software Engineer</p>
                </div>
                </div>

                <div class="row justify-content-center">
                <div class="col-lg-7">


                    <p class="gsap-reveal-hero txt-about">I am an IT developer with 2 years of experience handling various web and mobile development projects. My expertise includes using both native programming tools and low-code platforms to create efficient and innovative technology solutions.</p>

                    <p class="gsap-reveal-hero txt-about">With a deep understanding of multiple programming languages and development tools, I have successfully completed projects that support business needs and enhance digital presence. I am committed to continuous learning and staying abreast of the latest technological trends to ensure the highest quality in every project I undertake.</p>  
                </div>
                </div>
            </div>
        </div>
    );
};

export default About;