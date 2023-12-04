import React from 'react'
import NavbarSecond from '../Nav/NavbarSecond';
import "../../css/Services.css"
import SocialLinks1 from '../SocialLinks/SocialLinks1';

function Services() {
  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/nys.png)`
  };
  return (
    <div className="background-container-General" style={backgroundStyle}>
      <NavbarSecond />
      <div className='divServices'>
        <h1>Services</h1>
        <div className='ServicesOffers'>
          <h3>What I Can Offer</h3>
        </div>


        <div className='ServiceGrid'>


          <div className='ServicesGraph'>
            <h4>Graphic Design and Photoshop Services</h4>
            <ul>
              <li>Wallpapers</li>
              <li>Twitch overlays</li>
              <li>Photoshop adapting</li>
              <li>Ai Portrait/Designing</li>
              <li>Design your website</li>
            </ul>
          </div>

          <div className='ServicesAi'>
            <h4>Ai</h4>
            <ul>
              <li>Ai generation of pictures</li>
              <li>Ai Wallpaper</li>
              <li>Ai Portrait</li>
            </ul>
          </div>

          <div className='ServicesWebDesign'>
            <h4>Web Design / Planing</h4>
            <ul>
              <li>Mockups/Designing your website (Figma)</li>
              <li>SCRUM/PLANING: Miro / Jira / Trello / BITBUCKET</li>
              <li>GIT / GITHUB</li>
              <li>CI / CD pipelines</li>
            </ul>
          </div>

          <div className='ServicesWebDev'>
            <h4>Web Development / Web services</h4>
            <ul>
              <li>Fullstack Development</li>
              <li>Frontend Development</li>
              <li>CI/CD pipelines</li>
              <li>Build your website</li>
              <li>Backend Development</li>
              <li>Dockerize/Build API</li>
            </ul>
          </div>
        </div>
      </div>
      <SocialLinks1 />
    </div>
  )
}

export default Services