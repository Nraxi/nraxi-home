import React from 'react'
import "../../css/Navbar.css"

function Navbar() {
  return (
    <div>
      <header id="header">
        <div class="container">
          <h1><a className="namnet" href="#">Olle Tengnér</a></h1>
          <h2>I'm a passionate <span>graphic designer</span> from Stockholm, Sweden</h2>
          <div class="social-links">
            <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
            <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
            <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
            <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
          </div>

          <nav id="navbar" class="navbar">
            <ul>
              <li><a class="nav-link active" href="#header">Home</a></li>
              <li><a class="nav-link" href="#about">About</a></li>
              <li><a class="nav-link" href="#resume">Resume</a></li>
              <li><a class="nav-link" href="#services">Services</a></li>
              <li><a class="nav-link" href="#portfolio">Portfolio</a></li>
              <li><a class="nav-link" href="#contact">Contact</a></li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>


        </div>
      </header>
    </div>
  )
}

export default Navbar