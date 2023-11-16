import React from 'react'
import me2 from "../images/me2.png"
import "../../css/Pf.css"
import { Link } from 'react-router-dom'

function Pf() {
  return (
    <div>Pf
      <img
        className='profilepic'
        src={me2} alt="bild" />

      <h1 className="namnet"><Link to='#' className="namnetfor" >Name: Olle </Link><Link to="#" className="namnetefter"> Tengnér</Link></h1>
    </div>
  )
}

export default Pf