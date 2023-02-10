import React from "react";
import "./Footer.css"
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { GrMapLocation } from "react-icons/gr";

function Footer(){
    return (
        <footer>
            <div className="footerColumns column1">
                <h6>Projects</h6>
                <p className="divider" />
                <ul>
                    <li><a href="https://manuelrojas13.github.io/react-deploy/">Manuel Rojas Portafolio Website</a></li>
                    <li>PathFinder's Adventure: Cosmo's Quest DEMO</li>
                    <li>E-Commerce Landing Page</li>
                    <li>To-Do App</li>
                </ul>
            </div>
            <div className="footerColumns column2">
                <h6>Sections</h6>
                <p className="divider" />
                <ul>
                    <li><a href="#topPage">Home</a></li>
                    <li><a href="#projectsSection">Portfolio</a></li>
                    <li><a href="#contactSection">Contact</a></li>
                    <li><a href="#personalInfo">About Me</a></li>
                </ul>
            </div>
            <div className="footerColumns column3">
                <h6>Contact</h6>
                <p className="divider" />
                <ul>
                    <li className="contactDetails">
                        <SiGmail className="contactIcon" />
                        <a href="mailto:duranalejandro661@gmail.com">Duranalejandro661@gmail.com</a>
                    </li>
                    <li className="contactDetails">
                        <BsLinkedin className="contactIcon" />
                        <a href="https://www.linkedin.com/in/manuel-alejandro-rojas-duran-464a12192/">linkedin.com/ManuelRojas</a>
                    </li>
                    <li className="contactDetails"> 
                        <GoMarkGithub className="contactIcon" />
                        <a href="https://github.com/ManuelARD13/">github.com/ManuelARD13</a>
                    </li>
                    <li className="contactDetails">
                        <BsWhatsapp className="contactIcon" />
                        <a href="https://wa.me/5491154881218">+54 9 11 5488 1218</a>
                    </li>
                    <li className="contactDetails googleMap">
                        <GrMapLocation className="contactIcon googleMapIcon" />
                        <p className="googleMapText">Sarandi, Provincia de Buenos Aires. Argentina</p>
                        <iframe title="GoogleMaps" className="googleMapDetail" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26247.35037650323!2d-58.36393601843193!3d-34.68199885750706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a3330c4228289f%3A0xb698f582838b673d!2sSarand%C3%AD%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1671836511318!5m2!1ses!2sar" width="275" height="200" style={{border: "0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </li>
                </ul>
            </div>
        <div className="copyright">
            <p>This website was built for educational purposes only. All images, media resources and trademarks rights are property of their owners. <span>Powered By React.js</span></p>
        </div>
        </footer>
    )
}

export { Footer }