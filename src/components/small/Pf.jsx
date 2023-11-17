import React from 'react'
import me2 from "../images/ArtGallery/me2.png"
import "../../css/Pf.css"
import { Link } from 'react-router-dom'

function Pf() {
  return (
    <div>
      <img
        className='profilepic'
        src={me2} alt="bild" />
      <h1 className="namnet"><Link to='/about' className="namnetfor" >Name: Olle </Link><Link to="/about" className="namnetefter"> Tengnér</Link></h1>
    </div>
  )
}

export default Pf