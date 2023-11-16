import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "../../css/Navbar.css"
import "../../css/Movingtext.css";

function Navbar() {

  const [text, setText] = useState("Developer");

  const textLoad = () => {
    setTimeout(() => {
      setText("Firefly");
    }, 0);
    setTimeout(() => {
      setText("Developer");
    }, 4000);
    setTimeout(() => {
      setText("Prodancer");
    }, 8000);
  }

  useEffect(() => {
    textLoad();
    const intervalId = setInterval(textLoad, 12000);

    return () => {
      clearInterval(intervalId);
    };
  }, []); // Run effect only once when component mounts



  return (
    <div>
      <header id="header">
        <div className="container">
          <h2 className="hej">Hejsan och Välkommen</h2>
          <div className="container2">
            <span className="text first-text">I'm a passionate: </span>
            <span className='text sec-text'>{text}</span>
          </div>
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

export default Navbar