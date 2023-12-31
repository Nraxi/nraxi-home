import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../../css/NavbarThird.css"


function NavbarThird() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <header id="header3">
        <div className="menu-toggle" onClick={toggleMenu}>
          <p>Meny 3</p> {isMenuOpen ? <i className="bi bi-arrow-bar-up"></i> : <i className="bi bi-list"></i>}
        </div>
        <div className="naven3">
          <nav id="navbar3" className={`navbar3 ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><Link to="/nraxi-home" className="nav-link2" >Home</Link></li>
              <li><Link to="/nraxi-home/about" className="nav-link2" >About</Link></li>
              <li><Link to="/nraxi-home/mystack" className="nav-link2" >My Coding Stack</Link></li>
              <li><Link to="/nraxi-home/Portfolio" className="nav-link2" >Web Portfolio</Link></li>
              <li><Link to="/nraxi-home/ArtGallery" className="nav-link" >Art Gallery</Link></li>
              <li><Link to="/nraxi-home/Services" className="nav-link2" >Services</Link></li>
              <li><Link to="/nraxi-home/Gaming" className="nav-link" >Live Stream</Link></li>
              <li><Link to="/nraxi-home/Contact" className="nav-link2" >Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="social-links3">
        {/* <a href="https://www.facebook.com/YourPageOrProfile" className="facebook2"><i className="bi bi-facebook"></i></a> */}
        <a href="https://www.instagram.com/3k9swe/" className="instagram2"><i className="bi bi-instagram"></i></a>
        <a href="https://linkedin.com/in/olle-tengnér-331835175/" className="linkedin2"><i className="bi bi-linkedin"></i></a>
        <a href="https://github.com/nraxi" className="Github2"><i className="bi bi-github"></i></a>
        <a href="https://twitch.com/nraxi" className="Twitch2"><i className="bi bi-twitch"></i></a>
      </div>

    </div >
  )
}

export default NavbarThird