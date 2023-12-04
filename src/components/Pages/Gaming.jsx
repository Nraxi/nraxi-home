import React from 'react'
import NavbarSecond from '../Nav/NavbarSecond';
import "../../css/Gaming.css"
import ReactTwitchEmbedVideo from "react-twitch-embed-video"
import SocialLinks2 from '../SocialLinks/SocialLinks2';

function Gaming() {
  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/gamingbg.png)`
  };

  let width = '1450px';
  let height = '600px';

  // Check if the screen width is less than 992px
  if (window.innerWidth <= 992) {
    // Adjust width and height for smaller screens
    width = '480px'; // or any other value suitable for smaller screens
    height = '800px'; // or any other value suitable for smaller screens
  }

  return (
    <div className="background-container-Gaming" style={backgroundStyle}>
      <NavbarSecond />
      <div className='divGamings'>
        <h4>Live stream:</h4>
        <div className='GamingVid' >
          <ReactTwitchEmbedVideo channel="Nraxi" width={width} height={height} />
        </div>
      </div>
      <SocialLinks2 />
    </div>

  )
}

export default Gaming