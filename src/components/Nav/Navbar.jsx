import React from 'react'
import { Link } from 'react-router-dom'
import "../../css/Navbar.css"

function Navbar() {
  return (
    <div>
      <header id="header">
        <div className="container">
          <h2 className="hej">Hejsan och Välkommen</h2>
          <h2 className="passion">I'm a passionate: <span className='passionSpan'>graphic designer</span>
          </h2>

          <h2 className="fransthlm">From Stockholm, Sweden</h2>


          <nav id="navbar" className="navbar">
            <ul>
              <li><Link to="/" className="nav-link" >Home</Link></li>
              <li><Link to="/About" className="nav-link" >About</Link></li>
              <li><Link to="/Resume" className="nav-link" >Resume</Link></li>
              <li><Link to="/Services" className="nav-link" >Services</Link></li>
              <li><Link to="/Portfolio" className="nav-link" >Portfolio</Link></li>
              <li><Link to="/Contact" className="nav-link" >Contact</Link></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>


        </div>
      </header>
      <div className="social-links">
        <a href="https://www.facebook.com/YourPageOrProfile" className="facebook"><i className="bi bi-facebook"></i></a>
        <a href="https://www.instagram.com/3k9swe/" className="instagram"><i className="bi bi-instagram"></i></a>
        <a href="https://linkedin.com/" className="linkedin"><i className="bi bi-linkedin"></i></a>
        <a href="https://github.com/nraxi" className="Github"><i className="bi bi-github"></i></a>
      </div>
      <h1 className="namnet"><Link to='#' className="namnetfor" >Name: Olle </Link><Link to="#" className="namnetefter"> Tengnér</Link></h1>
    </div >
  )
}

export default Navbar