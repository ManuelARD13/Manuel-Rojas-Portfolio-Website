import React from "react"
import "./Header.css"
import { RiArrowDownCircleLine } from "react-icons/ri"

function Header() {
    return (
        <header id="home">
            <div className="titleContainer">
                <h4>Manuel</h4>
                <h1>ROJAS</h1>
                <p>Freelancer Front-end Developer</p>
                <a href = "#projectsSection">
                <input type={"button"} value="Watch Projects!" className="button"/>
                </a>
                
            </div>
            <a href="#personalInfo"><RiArrowDownCircleLine className="scrollDownButton"/></a>
                
        </header>
    )
}

export {Header}

