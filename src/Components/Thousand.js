import React from "react"
import "./Thousand.css"
import guy from './images/guy.png'
import cap from './images/cap.png'

export default function Th() {
  return (
    <div className="th">

      <div className="imgg1">

        <img class="imgg" src={guy} alt="Guy" />
      </div>

      <div>
        <h1>1000+</h1>
      </div>

      <div className="space"></div>


      <div className="imgc2">

        <img class="imgc" src={cap} alt="Cap" />
      </div>

      <div>
        <h1>1000+</h1>
      </div>

    </div>


  )
}