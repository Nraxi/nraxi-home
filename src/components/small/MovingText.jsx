import React, { useState, useEffect } from 'react';
import "../../css/Movingtext.css";

function MovingText() {
  const [text, setText] = useState("Developer");

  const textLoad = () => {
    setTimeout(() => {
      setText("Firefly");
    }, 0);
    setTimeout(() => {
      setText("Developer");
    }, 4000);
    setTimeout(() => {
      setText("Prodancer");
    }, 8000);
  }

  useEffect(() => {
    textLoad();
    const intervalId = setInterval(textLoad, 12000);

    return () => {
      clearInterval(intervalId);
    };
  }, []); // Run effect only once when component mounts

  return (
    <div className='testar'>
      <div className="container">
        <span className="text first-text">I'm a </span>
        <span className="text sec-text">{text}</span>
      </div>
    </div>
  );
}

export default MovingText;