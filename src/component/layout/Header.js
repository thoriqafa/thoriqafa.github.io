import React from "react";
import Sidebar from "../navbar/Sidebar";

const Header = () => {
    return (
        <header>
            <div class="site-mobile-menu site-navbar-target">
                <div class="site-mobile-menu-header">
                <div class="site-mobile-menu-close">
                    <span class="icofont-close js-menu-toggle"></span>
                </div>
                </div>
                <div class="site-mobile-menu-body"></div>
            </div>
            
            <nav class="site-nav dark mb-5 site-navbar-target">
                <div class="container">
                <div class="site-navigation">
                    <a href="" class="logo m-0">Port<span class="text-primary">.</span></a>
                        <Sidebar />
                    <a href="#" class="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-inline-block" data-toggle="collapse" data-target="#main-navbar">
                    <span></span>
                    </a>

                </div>
                </div>
            </nav> 
        </header>           
    )
}

export default Header;