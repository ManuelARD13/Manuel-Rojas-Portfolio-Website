import React from "react"
import "./MobileNav.css"
import { HiMenu } from "react-icons/hi";
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

function MobileNav() {
    
    const showHideSideBar = () => {

        const sideBar = document.getElementById("sideBar")

        if(sideBar.className === "sideBar sideBarHidden"){
            sideBar.className = "sideBar"
        } else if(sideBar.className === "sideBar"){
            sideBar.className = "sideBar sideBarHidden"
    }}

    return (
        <div className="mobileNavContainer">
        <nav className="mobileNav">
            <div className="menuIconContainer menu" id="sideBarButton" onClick={showHideSideBar}>
                <HiMenu className="menuIcon"/>
            </div>
            <div className="mobileLogo">
                <a href="#pageTop" className="mobile-logo-provitional">MR</a>
            </div>
        </nav>
        { window.visualViewport.width <= 420 ?
         <div className="sideBar sideBarHidden" id="sideBar">
            <div className="menuContainer">
                <p><a href="#pageTop" onClick={showHideSideBar}>HOME</a></p>
                <p><a href="#projectsSection" onClick={showHideSideBar}>PORTFOLIO</a></p>
                <p><a href="#contactSection" onClick={showHideSideBar}>CONTACT</a></p>
                <p><a href="#personalInfo" onClick={showHideSideBar}>ABOUT ME</a></p>
            </div>
            <div className="socialMedia">
                <p>Networks</p>
                <a href="https://github.com/ManuelARD13" target="_blank" rel="noopener noreferrer">
                    <GoMarkGithub className="mobileSocialMediaIcons" />
                </a>
                <a href="https://www.linkedin.com/in/manuel-alejandro-rojas-duran-464a12192/" target="_blank" rel="noopener noreferrer">
                    <BsLinkedin className="mobileSocialMediaIcons" />
                </a>
                <a href="mailto:duranalejandro661@gmail.com" target="_blank" rel="noopener noreferrer">
                    <SiGmail className="mobileSocialMediaIcons" />
                </a>
                <a href="https://wa.me/5491154881218" target="_blank" rel="noopener noreferrer" >
                    <BsWhatsapp className="mobileSocialMediaIcons" />
                </a>
            </div> 
        </div> : <></>}
    </div>)   
}

export { MobileNav }