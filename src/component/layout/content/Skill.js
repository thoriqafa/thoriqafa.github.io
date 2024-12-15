import React from "react";

const Skill = () => {
    return (
        <div class="untree_co-section pb-0" id="skill-section">
            <div class="container">
                <div class="row mb-4">
                <div class="col-lg-7 text-center mx-auto">
                    <h2 class="section-heading gsap-reveal-hero mb-4"><strong>My Skillset</strong></h2>
                    <div class="wave gsap-reveal-hero" >
                    <svg>
                        <path d="M10,10 L50,100 L90,50" stroke="#0389ff"></path>
                    </svg>
                    </div>
                </div>
                </div>
                <div class="row">
                <div class="col-6 col-sm-6 col-md-6 col-lg-4 text-center" data-aos="fade-up" data-aos-delay="0">
                    <div class="progressbar" data-animate="false">
                    <div class="circle" data-percent="94">
                        <div class="number">94%</div>
                        <p class="caption">WordPress</p>
                    </div>
                    </div>
                </div>
                <div class="col-6 col-sm-6 col-md-6 col-lg-4 text-center" data-aos="fade-up" data-aos-delay="100">
                    <div class="progressbar" data-animate="false">
                    <div class="circle" data-percent="89">
                        <div class="number">89%</div>
                        <p class="caption">Web App</p>
                    </div>
                    </div>
                </div>
                <div class="col-6 col-sm-6 col-md-6 col-lg-4 text-center" data-aos="fade-up" data-aos-delay="200">
                    <div class="progressbar" data-animate="false">
                    <div class="circle" data-percent="60">
                        <div class="number">60%</div>
                        <p class="caption">Mobile App</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;