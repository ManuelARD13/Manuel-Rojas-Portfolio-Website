import React from "react"
import "./Educationals.css"

import Slider from "react-slick"

function Educationals( { techArray }) {
    
    const sliderSettings = {
        infinite: true,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        centerMode: true
    }

    return (
        <section className="techBlurbsSection">
            <h6>Known Languages and technologies</h6>
            <p className="divider"></p>
            <p className="subText">
                Here you can see the list of technologies i'm ready to put hands-to-work on. All of them self-taught programing lenguages and development tools oriented to web development and remote co-work. Links to a more detailed summary of my skills with each of them below.
            </p>
            <div>
                <Slider {...sliderSettings}>
                    {techArray.map((tech) =>
                        <div key={tech.name}>
                            <div  className={"blurb"}>
                                <img src={tech.img} alt={tech.altText} className={`${tech.id}Logo`}></img>
                                <h6>{tech.name}</h6>
                                <p>{tech.description}</p>
                                <input type={"button"} value="Details" className="button" />
                            </div>
                        </div>
                    )}
                </Slider>
            </div>
        </section>
        )
}

export { Educationals }