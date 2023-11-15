import React from 'react'
import "../../css/Navbar.css"

function Navbar() {
  return (
    <div>
      <header id="header">
        <div class="container">
          <h2 className="hej">Hejsan och Välkommen</h2>
          <h2 className="passion">I'm a passionate: <span className='passionSpan'>graphic designer</span>
          </h2>

          <h2 className="fransthlm">From Stockholm, Sweden</h2>


          <nav id="navbar" class="navbar">
            <ul>
              <li><a class="nav-link" href="#">Home</a></li>
              <li><a class="nav-link" href="#about">About</a></li>
              <li><a class="nav-link" href="#resume">Resume</a></li>
              <li><a class="nav-link" href="#services">Services</a></li>
              <li><a class="nav-link" href="#portfolio">Portfolio</a></li>
              <li><a class="nav-link" href="#contact">Contact</a></li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>


        </div>
      </header >
      <div class="social-links">
        <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
        <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
        <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
      </div>
      <h1 className="namnet"><a className="namnetfor" href="#">Name: Olle </a><a className="namnetefter" href="#"> Tengnér</a></h1>

    </div >
  )
}

export default Navbar