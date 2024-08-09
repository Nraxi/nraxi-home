import React from 'react'
import NavbarSecond from '../Nav/NavbarSecond';
import "../../css/ContactMe.css"
import ContactForm from '../small/ContactForm';
import SocialLinks1 from '../SocialLinks/SocialLinks1';
// import nys from '../images/nys.png';


function Contact() {
  // const backgroundStyle = {
  //   backgroundImage: `url(${nys})`
  // };
  return (
    // <div className="background-container-ContactMe" style={backgroundStyle}>
    <div className="gradient-background2">
      <NavbarSecond />
      <div className='divContact'>
        <h1 className='contactHead'>Contact</h1>
        <div className='Contact-Form'>
          <ContactForm />
        </div>
        <div className='Contact-information'>
          <h3 className='Contact-information-head'>Contact information:</h3>
          <div className='Social-media-item2'>
            <p>
              <i className="bi bi-person"></i>
            </p>
            <p>Name:</p>
            <p>Olle</p>
            <p>Tengnér</p>
          </div>
          <div className='Social-media-item2'>
            <p>
              <i className="bi bi-house"></i>
            </p>
            <p>From:</p>
            <p>Stockholm,</p>
            <p>Sweden</p>
          </div>
          <div className='Social-media-item2'>
            <p>
              <i className="bi bi-phone"></i>
            </p>
            <p>Phone:</p>
            <p>+46760169497</p>
          </div>
        </div>
        <div>
          <div className='Social-media'>
            <h2 className='socialmediaheaderh2'>Find me on:</h2>

            <div className='Social-media-links'>
              <div className='Social-media-box'>

                <div className='Social-media-item'>
                  <p>
                    <a href="https://instagram.com/olle_sthlm">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </p>
                  <a href="https://instagram.com/olle_sthlm">
                    <p>Instagram
                    </p>
                  </a>
                </div>

                <div className='Social-media-item'>
                  <p>
                    <a href="https://linkedin.com/in/olle-tengnér-331835175/">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </p>
                  <a href="https://linkedin.com/in/olle-tengnér-331835175/">
                    <p>Linkedin
                    </p>
                  </a>
                </div>

                <div className='Social-media-item'>
                  <p>
                    <a href="https://github.com/nraxi">
                      <i className="bi bi-github"></i>
                    </a>
                  </p>
                  <a href="https://github.com/nraxi">
                    <p>Github
                    </p>
                  </a>
                </div>

                <div className='Social-media-item'>
                  <p>
                    <a href="https://twitch.com/nraxi">
                      <i className="bi bi-twitch"></i>
                    </a>
                  </p>
                  <a href="https://twitch.com/nraxi">
                    <p>Twitch
                    </p>
                  </a>
                </div>
                <div className='h4follow'>
                  <h4>Start Following me on my social platforms</h4>
                  <h4> or send me a pm there</h4>
                </div>
              </div>
            </div>


          </div>


        </div>
      </div>
      <SocialLinks1 />
    </div >
  )
}

export default Contact