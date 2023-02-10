import React from "react";
import "./Projects.css"

function Projects(props) {
    return (
    <section className="projectsSection" id="projectsSection">
        <h5>Projects in Development</h5>
        <p className="divider" />
        <p>Watch a couple of the most recent projects i've been working on. Here you'll find a good representation of my skills and how i've used them in different ways and circunstances, along side with links to their corresponding <strong>Github Repositories</strong> to find more detailed information about each of them.</p>
        <div className="projectsContainer">
           <div className="imgContainer">
                <img src={require("../../img/websiteScreenshot.jpg")} alt="Project 1" />
                <p>Portfolio website builted using <strong>React.js</strong>, applying web design knowledge and HTML5, CSS3 and Javascript as well.</p>
                <input type={"button"} value="See more on Github" className="button"></input>
            </div>
            <div className="imgContainer">
                <img src={require("../../img/pathfindersAdventuresScreenshot.jpg")} alt="Project 2" />
                <p>
                    Videogame intro interface on <strong>React.js</strong>. React States, JS Objects and Arrays Manipulation are the main tools used to built this app.  
                </p>
                <input type={"button"} value="See more on Github" className="button"></input>
            </div> 
        </div>
    </section>
    )
}

export { Projects }