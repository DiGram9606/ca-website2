import React from "react"
import './Hero.css';
import groupofpeople from "./images/group.png"
export default function Hero(){
    return(
        <section className="hero-section">
            <div className="section-one">
                <div className="hero-heading"><h1 className="hero-h1">Quark’24</h1><h1 className="hero-h1">Campus</h1></div><div className="hero-heading"><h1 className="hero-h1">Ambassador</h1><h1 className="hero-h1">Program</h1></div>
                <button className="hero-button">Apply Now</button>
            </div>
            <div className="sec-two">
                <img src={groupofpeople} alt="group of people"/>
            </div>
        </section>
    )
}