import React from 'react'
import { Link } from 'react-router-dom'
import "../../css/NavbarSecond.css"

function NavbarSecond() {
  return (
    <div>
      <header id="header">
        <div className="container">
          <nav id="navbar" className="navbar">
            <ul>
              <li><Link to="/" className="nav-link" >Home</Link></li>
              <li><Link to="/about" className="nav-link" >About</Link></li>
              <li><Link to="/Resume" className="nav-link" >Resume</Link></li>
              <li><Link to="/Services" className="nav-link" >Services</Link></li>
              <li><Link to="/Portfolio" className="nav-link" >Portfolio</Link></li>
              <li><Link to="/Contact" className="nav-link" >Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="social-links">
        <a href="https://www.facebook.com/YourPageOrProfile" className="facebook"><i className="bi bi-facebook"></i></a>
        <a href="https://www.instagram.com/3k9swe/" className="instagram"><i className="bi bi-instagram"></i></a>
        <a href="https://linkedin.com/" className="linkedin"><i className="bi bi-linkedin"></i></a>
        <a href="https://github.com/nraxi" className="Github"><i className="bi bi-github"></i></a>
        <a href="https://twitch.com/nraxi" className="Twitch"><i className="bi bi-twitch"></i></a>
      </div>

    </div >
  )
}

export default NavbarSecond