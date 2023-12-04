import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../../css/Navbartva.css"


function NavbarSecond() {


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <header id="header2">
        <div className="navens">
          <div className="menu-toggle" onClick={toggleMenu}>
            Meny {isMenuOpen ? <i className="bi bi-arrow-bar-up"></i> : <i className="bi bi-list"></i>}
          </div>
          <nav id="navbar2" className={`navbar2 ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><Link to="/nraxi-home" className="nav-link2" >Home</Link></li>
              <li><Link to="/about" className="nav-link2" >About</Link></li>
              <li><Link to="/mystack" className="nav-link2" >My Coding Stack</Link></li>
              <li><Link to="/Portfolio" className="nav-link2" >Web Portfolio</Link></li>
              <li><Link to="/ArtGallery" className="nav-link" >Art Gallery</Link></li>
              <li><Link to="/Services" className="nav-link2" >Services</Link></li>
              <li><Link to="/Gaming" className="nav-link" >Live Stream</Link></li>
              <li><Link to="/Contact" className="nav-link2" >Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    </div >
  )
}

export default NavbarSecond