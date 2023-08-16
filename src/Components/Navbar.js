import React from "react"
import "./Navbar.css"


export default function Navbar(){
    const [hamMenu, toggleHamMenu]=React.useState(false)
    function handleHamClick(){
        toggleHamMenu(old=>!old)
    }
    return(
        <nav className="NavbarComponents">
            <div className="menu-icon"
            onClick={handleHamClick}>
                 <i className={hamMenu? "fas fa-times": "fas fa-bars"}></i>
            </div>
            <ul className={hamMenu?'ham-menu-active':'ham-menu-inactive'}>
                            <div className={hamMenu?"hamCont":""}>
                            <li>
                                <a className="navbar-links" href="/#">Home</a>
                            </li>
                            </div>
                            <div className={hamMenu?"hamCont":""}>
                            <li>
                                <a className="navbar-links" href="/#">About</a>
                            </li>
                            </div>
                            <div className={hamMenu?"hamCont":""}>
                            <li>
                                <a className="navbar-links" href="/#">Benefits</a>
                            </li>
                            </div>
                            <div className={hamMenu?"hamCont":""}>
                            <li>
                                <a className="navbar-links" href="/#">Responsibilities</a>
                            </li>
                            </div>
                            <div className={hamMenu?"hamCont":""}>
                            <li>
                                <a className="navbar-links" href="/#">Contact Us</a>
                            </li>
                            </div>
                            <div className={hamMenu?"hamCont":""}>
                            <li>
                                <a className="apply-button" href="/#">Apply Now</a>
                            </li>
                            </div>
            </ul>
        </nav>
    )
}