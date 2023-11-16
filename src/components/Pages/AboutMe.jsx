import React from 'react'
import NavbarSecond from '../Nav/NavbarSecond';

function AboutMe() {
  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/gamingbg.png)`
  };
  return (
    <div className="background-container" style={backgroundStyle}>
      <NavbarSecond />
      <h1>ABOUT ME HEY</h1>
      <h1>ABOUT ME HEY</h1>
      <h1>ABOUT ME HEY</h1>
      <h1>ABOUT ME HEY</h1>
      <h1>ABOUT ME HEY</h1>
      <h1>ABOUT ME HEY</h1>
    </div>
  )
}

export default AboutMe