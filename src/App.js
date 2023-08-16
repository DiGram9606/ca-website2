
import './App.css';
import React from "react"
import Navbar from "./Components/Navbar.js"
import Hero from "./Components/Hero.js"
import About from "./Components/About.js"
import WhyApply from './Components/WhyApply';
import Roles from './Components/Roles.js'
import Contact from './Components/Contact.js'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <WhyApply />
      <Roles />
      <Contact />
    </div>
  );
}

export default App;
