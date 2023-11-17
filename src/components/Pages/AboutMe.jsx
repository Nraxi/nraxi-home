import React from 'react'
import NavbarSecond from '../Nav/NavbarSecond';
import "../../css/Aboutme.css"

function AboutMe() {
  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/gamingbg.png)`
  };
  return (
    <div className="background-container" style={backgroundStyle}>
      <NavbarSecond />
      <div className='divAbout'>
        <h1>ABOUT MEs HEY</h1>
        <h1>ABOUT ME HEY</h1>
        <h1>ABOUT ME HEY</h1>
        <h1>ABOUT ME HEY</h1>
        <h1>ABOUT ME HEY</h1>
        <h1>ABOUT ME HEY</h1>
      </div>

    </div>
  )
}

export default AboutMe