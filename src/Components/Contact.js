import React from "react"
import ContactCard from "./ContactCard"
import img1 from "./images/card4.png"
import "./Contact.css" 
export default function Contact(){
    return(
        <div className="contact">
        <h1 className="contact-heading">Contact Us</h1>
        <div className="contactcards">
        <div className="contact-one">
        <ContactCard
            image={img1}
            name="Anirudh"
            title="Quark Public Relations Head"
            number="+91 7206811204"
         />
         <ContactCard
            image={img1}
            name="Anirudh"
            title="Quark Public Relations Head"
            number="+91 7206811204"
         />
         </div>
         <div className="contact-two">
         <ContactCard
            image={img1}
            name="Anirudh"
            title="Quark Public Relations Head"
            number="+91 7206811204"
         />
         <ContactCard
            image={img1}
            name="Anirudh"
            title="Quark Public Relations Head"
            number="+91 7206811204"
         />
         </div>
         </div>
         </div>
    )
}