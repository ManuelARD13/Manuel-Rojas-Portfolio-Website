import React from "react";
import "./BackToTopButton.css"
import { BsArrowUpSquare } from "react-icons/bs"

function BackToTopButton() {
    return(
        <div className="buttonContainer">
                <a href="#pageTop"><BsArrowUpSquare className="iconButton" /></a>
        </div>
    )
}

export { BackToTopButton }