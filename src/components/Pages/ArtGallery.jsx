import React from 'react'
import NavbarSecond from '../Nav/NavbarSecond';
import "../../css/ArtGallery.css"
import ArtKarusell from '../carousel/ArtKarusell';
import SocialLinks1 from '../SocialLinks/SocialLinks1';
import nys from '../images/nys.png';

function ArtGallery() {
  const backgroundStyle = {
    backgroundImage: `url(${nys})`
  };
  return (
    <div className="background-container-ArtGallery" style={backgroundStyle}>
      <NavbarSecond />
      <div className='divArtGallery'>
        <h1 className='ArtHead'>Art Gallery </h1>
        <ArtKarusell />
      </div>
      <SocialLinks1 />
    </div>
  )
}

export default ArtGallery