import React from 'react'
import NavbarSecond from '../Nav/NavbarSecond';
import "../../css/Portfolio.css"
import Karusell from '../carousel/Karusell';


function Portfolio() {
  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/gamingbg.png)`
  };
  return (
    <div className="background-container" style={backgroundStyle}>
      <NavbarSecond />
      <div className='divPortfolio'>
        <h1 className='headPort'>Web Portfolio </h1>
        <Karusell />
      </div>

    </div>
  )
}

export default Portfolio