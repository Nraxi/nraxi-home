import React from 'react'
import { Link } from 'react-router-dom'
import "../../css/Navbartva.css"


function NavbarSecond() {
  return (
    <div>
      <header id="header2">
        <div className="naven">
          <nav id="navbar2" className="navbar2">
            <ul>
              <li><Link to="/nraxi-home" className="nav-link2" >Home</Link></li>
              <li><Link to="/about" className="nav-link2" >About</Link></li>
              <li><Link to="/mystack" className="nav-link2" >My Coding Stack</Link></li>
              <li><Link to="/Portfolio" className="nav-link2" >Web Portfolio</Link></li>
              <li><Link to="/ArtGallery" className="nav-link" >Art Gallery</Link></li>
              <li><Link to="/Services" className="nav-link2" >Services</Link></li>
              <li><Link to="/Contact" className="nav-link2" >Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="social-links2">
        <a href="https://www.facebook.com/YourPageOrProfile" className="facebook2"><i className="bi bi-facebook"></i></a>
        <a href="https://www.instagram.com/3k9swe/" className="instagram2"><i className="bi bi-instagram"></i></a>
        <a href="https://linkedin.com/" className="linkedin2"><i className="bi bi-linkedin"></i></a>
        <a href="https://github.com/nraxi" className="Github2"><i className="bi bi-github"></i></a>
        <a href="https://twitch.com/nraxi" className="Twitch2"><i className="bi bi-twitch"></i></a>
      </div>

    </div >
  )
}

export default NavbarSecond