import React from 'react'
import NavbarSecond from '../Nav/NavbarSecond';
import "../../css/ArtGallery.css"
import ArtKarusell from '../carousel/ArtKarusell';


function ArtGallery() {
  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/nys.png)`
  };
  return (
    <div className="background-container" style={backgroundStyle}>
      <NavbarSecond />
      <div className='divArtGallery'>
        <h1 className='ArtHead'>Art Gallery </h1>
        <ArtKarusell />
      </div>

    </div>
  )
}

export default ArtGallery