import React from "react"
import "./ContactForm.css"

function ContactForm(){
    return (
        <>
            <h6>Send a Message</h6>
            <p className="divider"/>
            <p>Leave a message and i'll be replaying to you as soon as i can</p>
            <form className="form">
                <div className="userDetails">
                    <input type={"text"} placeholder="Your Name" id="contactName" />
                    <input type={"text"} placeholder="Your Email" id="contactEmail" />
                </div>
                <div className="textArea">
                    <input type={"text"} placeholder="Subject" id="contactSubject" />
                    <textarea placeholder="Your Message" id="contactMessage"></textarea>
                </div>
                <div className="contactSubmit">
                    <p>CAPTCHA</p>
                    <input type={"button"} value="Submit" className="button" id="contactSubmitButton" />
                 </div>
            </form>
        </>
    )
}

export { ContactForm }
