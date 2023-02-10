import React from "react";
import { ContactForm } from "../ContactForm/ContactForm";
import "./Contact.css"
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { GrMapLocation } from "react-icons/gr";

function Contact() {
    return (
        <section className="contactSection" id="contactSection">
                <div className="contactColumns">
                    <ContactForm />
                </div>
                <div className="contactColumns">
                    <h6>Contact Me</h6>
                    <p className="divider"/>
                    <p>Feel free to use the most comfortable contact plataform you like.</p>
                    <div className="contactDetails">
                        <SiGmail className="contactIcon" />
                        <a href="mailto:duranalejandro661@gmail.com">Duranalejandro661@gmail.com</a>
                    </div>
                    <div className="contactDetails">
                        <BsLinkedin className="contactIcon" />
                        <a href="https://www.linkedin.com/in/manuel-alejandro-rojas-duran-464a12192/">linkedin.com/ManuelRojas</a>
                    </div>
                    <div className="contactDetails">
                        <GoMarkGithub className="contactIcon" />
                        <a href="https://github.com/ManuelARD13/">github.com/ManuelARD13</a>
                    </div>
                    <div className="contactDetails">
                        <BsWhatsapp className="contactIcon" />
                        <a href="https://wa.me/5491154881218">+54 9 11 5488 1218</a>
                    </div>
                    <div className="contactDetails">
                        <GrMapLocation className="contactIcon" />
                        <p>Recoleta, Ciudad Autonoma de Buenos Aires. Argentina</p>
                    </div>
                </div>
        </section>
    )
}

export { Contact }