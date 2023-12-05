import React from 'react'
import "../../css/Portfolio.css"
import NavbarSecond from '../Nav/NavbarSecond';
import Karusell from '../carousel/Karusell';
import SocialLinks1 from '../SocialLinks/SocialLinks1';

function Portfolio() {
  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/nys.png)`
  };
  return (
    <div className="background-container-Portfolio" style={backgroundStyle}>
      <NavbarSecond />
      <div className='divPortfolio'>
        <h1 className='headPort'>Web Portfolio </h1>
        <Karusell />
      </div>
      <SocialLinks1 />
    </div>
  )
}

export default Portfolio