import React from "react"
import "./Educationals.css"

import { IoIosArrowBack } from "react-icons/io"
import { IoIosArrowForward } from "react-icons/io"

function Educationals( { techArray, displayedSlidesStart, displayedSlidesEnd, setDisplayStart, setDisplayEnd}) {
    let newDisplayedSlidesStart = displayedSlidesStart
    let newDisplayedSlidesEnd = displayedSlidesEnd

    const slideMoveForward = () => {
        if(displayedSlidesEnd < techArray.length) {
            setDisplayEnd(newDisplayedSlidesEnd + 1)
            setDisplayStart(newDisplayedSlidesStart + 1)
        }  else {
            newDisplayedSlidesEnd = 3
            newDisplayedSlidesStart = 0
            setDisplayEnd(newDisplayedSlidesEnd)
            setDisplayStart(newDisplayedSlidesStart)
        }
    }
    const slideMoveBackwards = () => {
        if(displayedSlidesStart > 0){
            setDisplayEnd(newDisplayedSlidesEnd - 1)
            setDisplayStart(newDisplayedSlidesStart - 1)
        }   else {
            newDisplayedSlidesEnd = techArray.length
            newDisplayedSlidesStart = techArray.length - 3
            setDisplayEnd(newDisplayedSlidesEnd)
            setDisplayStart(newDisplayedSlidesStart)
        }
    }

    return (
        <section className="techBlurbsSection">
            <h6>Known Languages and technologies</h6>
            <p className="divider"></p>
            <p className="subText">
                Here you can see the list of technologies i'm ready to put hands-to-work on. All of them self-taught programing lenguages and development tools oriented to web development and remote co-work. Links to a more detailed summary of my skills with each of them below.
            </p>
            <div className="sliderContainer">
                <IoIosArrowBack className="sliderArrows" onClick={slideMoveBackwards}/>
                {
                    techArray.map((tech) => 
                    
                        <div 
                            key={tech.name} 
                            className={techArray.indexOf(tech) >= displayedSlidesStart && techArray.indexOf(tech) < displayedSlidesEnd ? "activeBlurb" : "blurb"}
                        >
                            <img src={tech.img} alt={tech.altText} className={tech.id + "Logo"}></img>
                            <h6>{tech.name}</h6>
                            <p>{tech.description}</p>
                            <input type={"button"} value="Details" className="button" />
                        </div>
                    )
                }
                <IoIosArrowForward className="sliderArrows" onClick={slideMoveForward}/>
            </div>
        </section>
        )
}

export { Educationals }