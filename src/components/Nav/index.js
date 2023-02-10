import React from "react"
import "./Nav.css"
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

function Nav() {
    return (
        <nav>
            <div className="logo">
                <p className="logo-provitional">MR</p>
                <p className="logo-sub-tittle">Front-end<br />Developer</p>
            </div>
            <div className="menu">
                <p><a href="#pageTop">HOME</a></p>
                <p><a href="#projectsSection">PORTFOLIO</a></p>
                <p><a href="#contactSection">CONTACT</a></p>
                <p><a href="#personalInfo">ABOUT ME</a></p>
            </div>
            <div className="social-media">
                <a href="https://github.com/ManuelARD13" target="_blank" rel="noopener noreferrer">
                    <GoMarkGithub className="social-media-icons" />
                </a>
                <a href="https://www.linkedin.com/in/manuel-alejandro-rojas-duran-464a12192/" target="_blank" rel="noopener noreferrer">
                    <BsLinkedin className="social-media-icons" />
                </a>
                <a href="mailto:duranalejandro661@gmail.com" target="_blank" rel="noopener noreferrer">
                    <SiGmail className="social-media-icons" />
                </a>
                <a href="https://wa.me/5491154881218" target="_blank" rel="noopener noreferrer">
                    <BsWhatsapp className="social-media-icons" />
                </a>
            </div>
        </nav>
    )
}

export { Nav }