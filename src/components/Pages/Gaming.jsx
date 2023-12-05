import React from 'react'
import NavbarSecond from '../Nav/NavbarSecond';
import "../../css/Gaming.css"
import ReactTwitchEmbedVideo from "react-twitch-embed-video"
import SocialLinks1 from '../SocialLinks/SocialLinks1';

function Gaming() {
  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/gamingbg.png)`
  };

  let width = '100%';
  let height = '600px';


  return (
    <div className="background-container-GamingRoom" style={backgroundStyle}>
      <NavbarSecond />
      <div className='divGamings'>
        <h4>Live stream:</h4>
        <div className='GamingVid' >
          <ReactTwitchEmbedVideo channel="Nraxi" width={width} height={height} />
        </div>
      </div>
      <SocialLinks1 />
    </div>

  )
}

export default Gaming