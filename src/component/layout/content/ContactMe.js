import React from "react";

const About = () => {
    return(
        <div className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="widget">
                            <h3>Contact</h3>
                            <address>Trenggalek, East Java, Indonesia</address>
                            <ul className="list-unstyled links mb-4">
                                <li><a href="tel://11234567890">(+62) 882-1180-6575</a></li>
                                <li><a href="mailto:thoriqafa5@gmail.com">thoriqafa5@gmail.com</a></li>
                            </ul>

                            <h3>Connect</h3>
                            <ul className="list-unstyled social">
                                <li><a href="#"><span className="icon-instagram"></span></a></li>
                                <li><a href="#"><span className="icon-twitter"></span></a></li>
                                <li><a href="#"><span className="icon-facebook"></span></a></li>
                                <li><a href="https://www.linkedin.com/in/thoriq-afa"><span className="icon-linkedin"></span></a></li>
                                <li><a href="#"><span className="icon-pinterest"></span></a></li>
                                <li><a href="#"><span className="icon-dribbble"></span></a></li>
                            </ul>
                        </div> 
                    </div> 
                </div> 

                <div className="row mt-5">
                    <div className="col-12 text-center">
                        {/* 
                            **==========
                            NOTE: 
                            Please don't remove this copyright link unless you buy the license here https://untree.co/license/  
                            **==========
                        */}
                        {/* <p className="mb-0">Copyright &copy;<script>document.write(new Date().getFullYear());</script>. All Rights Reserved. &mdash; Designed with love by <a href="https://untree.co">Untree.co</a> Distributed By <a href="https://themewagon.com">ThemeWagon</a> <!-- License information: https://untree.co/license/ -->
                        </p> */}
                    </div>
                </div>
            </div> 
        </div> 
    );
};

export default About;
