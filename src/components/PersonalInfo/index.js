import React from "react"
import "./PersonalInfo.css"
import { ProfileDetails } from "../ProfileDetails"
import personalImg from "../../img/RojasManuel.jpeg"

function PersonalInfo({ profileData }) {
    

    return (<>
        <section className="personalInfoSection" id="personalInfo">
            <div className="personalImgContainer">
                <img src={personalImg} alt="Manuel Rojas, Profile photograph."></img>
            </div>
            <div className="personalInfoDescription">
                <p className="subTitlePointer">About Me</p>
                <p className="divider"></p>
                <h6>I'm Manuel Rojas</h6>
                <p className="professionalTitle">Front-end Developer</p>
                <p className="descriptionContentDesktop">
                    <span>"Latest technology enthusiast and a self-taught forever-apprentice, I'm a man motivated for the meaningful challenges of the digital industry".</span> Native from Merida Venezuela, today, living in Buenos Aires Argentina. Currently specialized on Front-end development, i'm ready to built amazing projects and create true value along side you and your team. Humility, responsibility, honesty and teamwork are the main pillars of my work philosophy.
                </p>
                <p className="descriptionContentMobile">
                    Currently specialized on Front-end development, i'm ready to built amazing projects and create true value along side you and your team. Humility, responsibility, honesty and teamwork are the main pillars of my work philosophy.
                </p>
                <ProfileDetails profileData={profileData} />
                <a href = "#projectsSection">
                    <input type={"button"} value="See my work!" className="button"/>
                </a>
            </div>
        </section>   
    </>
    )
}

export { PersonalInfo }