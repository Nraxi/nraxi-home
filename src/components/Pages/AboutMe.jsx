import React from 'react'
import NavbarSecond from '../Nav/NavbarSecond';
import "../../css/Aboutme.css"
import SocialLinks from '../SocialLinks/SocialLinks1'

function AboutMe() {
  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/nys.png)`
  };

  return (
    <div className="background-container-General" style={backgroundStyle}>
      <NavbarSecond />
      <div className='divAbouts'>
        <h1>About me</h1>
        <div className='AboutsOffers'>
          <h3>more info about me</h3>
        </div>


        <div className='AboutGrid'>


          <div className='AboutsGraph'>
            <h4>Social info</h4>
            <ul>
              <li>Name: Olle</li>
              <li>LastName: Tengnér</li>
              <li>Age:33</li>
              <li>From: Stockholm, Sweden</li>
              <li>Education: <a href='https://www.jensenyh.se/vara-utbildningar/frontendutvecklare-webbsakerhet'>Jensen Yrkes Högskola - Frontend med inriktning webbsäkerhet</a> </li>
              <li>Social media: Well look down below :)</li>
            </ul>
          </div>

          <div className='AboutsAi'>
            <h4>Who am i?</h4>
            <ul>
              <li>As an individual who discovered my passion for coding later in life, I had always been aware of its existence, yet, for reasons unknown, I chose not to acknowledge it during my formative teenage years. It took some years, but I have since identified and embraced coding as one of my true passions and thats something that i live for now.
                On my sparetime how ever i love gaming and hanging out with freinds, or just make some new cool pictures with photoshop or why not a overlay.
              </li>
            </ul>
          </div>

          <div className='AboutsWebDesign'>
            <h4>Background</h4>
            <ul>
              <li>I come from a background in marine engineering, but when I entered the professional world, I found it challenging to secure a job in that field. Subsequently, I began exploring various career paths. I have always had a fervent interest in IT and a commitment to continuous advancement, which has led me to where I am today. As an individual, I am highly motivated, yet I also possess a compassionate nature, caring for everyone in my surroundings.</li>
            </ul>
          </div>

          <div className='AboutsWebDev'>
            <h4>Hobbys</h4>
            <ul>
              <li>Programing</li>
              <li>Gaming</li>
              <li>Streaming</li>
              <li>Snowboard</li>
              <li>Freinds & Family</li>
              <li>And much more</li>
            </ul>
          </div>
        </div>
      </div>
      <SocialLinks />
    </div>
  )
}

export default AboutMe