import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../../css/Navbar.css";
import "../../css/Movingtext.css";

function Navbar() {
  const [text, setText] = useState("Developer");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const textLoad = () => {
    setTimeout(() => {
      setText("Streamer");
    }, 0);
    setTimeout(() => {
      setText("Developer");
    }, 4000);
    setTimeout(() => {
      setText("Designer");
    }, 8000);
  };

  useEffect(() => {
    textLoad();
    const intervalId = setInterval(textLoad, 12000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header id="header">
        <div className="container">
          <h2 className="hej">Hello and Welcome to my Website</h2>
          <div className="container2">
            <span className="text first-text">I'm a passionate: </span>
            <br />
            <span className='text sec-text'>{text}</span>
          </div>
          <h2 className="fransthlm">From Stockholm, Sweden</h2>

          <div className="menu-toggle" onClick={toggleMenu}>
            Meny {isMenuOpen ? <i className="bi bi-arrow-bar-up"></i> : <i className="bi bi-list"></i>}
          </div>

          <nav id="navbar" className={`navbar ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><Link to="/nraxi-home" className="nav-link">Home</Link></li>
              <li><Link to="/nraxi-home/about" className="nav-link">About</Link></li>
              <li><Link to="/nraxi-home/mystack" className="nav-link">My Coding Stack</Link></li>
              <li><Link to="/nraxi-home/Portfolio" className="nav-link">Portfolio</Link></li>
              <li><Link to="/nraxi-home/ArtGallery" className="nav-link">Art Gallery</Link></li>
              <li><Link to="/nraxi-home/Services" className="nav-link">Services</Link></li>
              <li><Link to="/nraxi-home/Gaming" className="nav-link">Live Stream</Link></li>
              <li><Link to="/nraxi-home/Contact" className="nav-link">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="social-links">
        <a href="https://www.instagram.com/3k9swe/" className="instagram"><i className="bi bi-instagram"></i></a>
        <a href="https://linkedin.com/in/olle-tengnér-331835175/" className="linkedin"><i className="bi bi-linkedin"></i></a>
        <a href="https://github.com/nraxi" className="Github"><i className="bi bi-github"></i></a>
        <a href="https://twitch.com/nraxi" className="Twitch"><i className="bi bi-twitch"></i></a>
      </div>
    </div>
  );
}

export default Navbar;
