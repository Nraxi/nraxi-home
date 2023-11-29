import React from 'react'
import NavbarThird from '../Nav/NavbarThird';
import "../../css/Gaming.css"
import ReactTwitchEmbedVideo from "react-twitch-embed-video"

function Gaming() {
  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/gamingbg.png)`
  };
  return (
    <div className="background-container3" style={backgroundStyle}>
      <NavbarThird />
      <div className='divGamings'>
        <h1>Game Area</h1>
        <div className='GamingsOffers'>

        </div>




        <div className='GamingGrid'>
          <div className='GamingsNew'>
            <h4>Live stream:</h4>
            <div className='GamingVid'>
              <ReactTwitchEmbedVideo channel="Nraxi" width="1200px" height="490px" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Gaming