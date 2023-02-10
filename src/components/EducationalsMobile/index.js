import React from "react"
import "./EducationalsMobile.css"

import { IoIosArrowDown } from "react-icons/io"


function EducationalsMobile( { techArray }) {

    return (
        <section className="techBlurbsMobileSection">
            <h6>Known Languages and technologies</h6>
            <p className="divider"></p>
            <p className="subText">Today, front-end frameworks and libraries are becoming an essential part of the modern web.
            Today, front-end frameworks and libraries are becoming an essential part of the modern web.
            </p>
            <div className="sliderMobileContainer">
                {
                    techArray.map((tech) => 
                        <div 
                            key={"mobile" + tech.name} 
                            className="mobileBlurb"
                        >
                            <img src={tech.img} alt={tech.altText} className={tech.id + "Logo"}></img>
                            <h6>{tech.name}</h6>
                            <p>{tech.description}</p>
                            <input type={"button"} value="Details" className="button" />
                        </div>
                    )
                }
            </div>
            <IoIosArrowDown className="scrollArrowDown" />
        </section>
        )
}

export { EducationalsMobile }