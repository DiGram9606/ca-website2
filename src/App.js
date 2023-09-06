
import './App.css';
import React from "react"
import Navbar from "./Components/Navbar.js"
import Hero from "./Components/Hero.js"
import About from "./Components/About.js"
import WhyApply from './Components/WhyApply';
import Roles from './Components/Roles.js'
import Contact from './Components/Contact.js'
import Registration from './Components/Registration.js';
import Thousand from './Components/Thousand.js'
import WhoApply from './Components/WhoApply.js';
import WithLove from './Components/WithLove.js';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
     {/* <About /> 
      <Thousand />*/}
      <WhyApply />
      <Roles />
      <Contact />
      {/*<WhoApply />*/}
      <Registration/>
      <WithLove />
    </div>
  );
}

export default App;
