import React from 'react'
import Pf from '../small/Pf'
import Navbar from '../Nav/Navbar'
import '../../css/Home.css'

function Home() {
  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}//nys.png)`
  };
  return (
    <div className="background-container-start" style={backgroundStyle}>
      <Pf />
      <Navbar />
    </div>
  )
}

export default Home