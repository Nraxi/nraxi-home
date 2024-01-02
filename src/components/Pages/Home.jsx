import React from 'react';
import Pf from '../small/Pf';
import Navbar from '../Nav/Navbar';
import '../../css/Home.css';
import nys from '../images/nys.png';

function Home() {
  const backgroundStyle = { backgroundImage: `url(${nys})` };

  return (
    <div className="background-container-start" style={backgroundStyle}>
      <Pf />
      <Navbar />
    </div>
  );
}

export default Home;
