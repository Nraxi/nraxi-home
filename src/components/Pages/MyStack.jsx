import React from 'react'
// import NavbarThird from '../Nav/NavbarThird';
import "../../css/MyStack.css"
import NavbarSecond from '../Nav/NavbarSecond';
import SocialLinks1 from '../SocialLinks/SocialLinks1'
import nys from '../images/nys.png';

function MyStack() {
  const backgroundStyle = {
    backgroundImage: `url(${nys})`
  };
  return (
    <div className="background-container-MyStack" style={backgroundStyle}>
      <NavbarSecond />
      <div className='divMyStacks'>
        <h1>My Stack</h1>
        <div className='MyStacksOffers'>
          <h3>and Experiences</h3>
        </div>


        <div className='MyStackGrid'>


          <div className='MyStacksGraph'>
            <h4>Front End Development</h4>
            <ul>
              <li>HTML</li>
              <li>Javascript</li>
              <li>React</li>
              <li>React Router DOM</li>
              <li>NextJS - understanding</li>
            </ul>
          </div>

          <div className='MyStacksAi'>
            <h4>Backend Development / DB</h4>
            <ul>
              <li>Golang</li>
              <li>Node</li>
              <li>Express</li>
              <li>C# / .Net Core (Ongoing progress)</li>
              <li>Express</li>
              <li>DB - Sql</li>
              <li>DB - Postgress</li>
              <li>DB - MongoDb</li>
              <li>DB - Sqllite</li>
              <li>API CALLS - POSTman / bash / Swagger</li>
              <li>Docker</li>
              <li>Kubernetes</li>
            </ul>
          </div>

          <div className='MyStacksWebDesign'>
            <h4>UX/UI Development</h4>
            <ul>
              <li>Bootstrap</li>
              <li>Tailwind</li>
              <li>Flexbox</li>
              <li>Grid</li>
              <li>Media-queries</li>
              <li>Plain css</li>
              <li>Photoshop</li>
              <li>AI promt Gen</li>
              <li>MIRO</li>
              <li>FIGMA</li>
              <li>JIRA</li>
            </ul>
          </div>
          <div className='MyStacksNew'>
            <h4>Understanding</h4>
            <ul>
              <li>Python</li>
              <li>c# .Net7 core </li>
              <li>Next.js </li>
              <li>Typescript </li>
            </ul>
            <li>Education: <a href='https://www.jensenyh.se/vara-utbildningar/frontendutvecklare-webbsakerhet'>Jensen Yrkes Högskola - Frontend med inriktning webbsäkerhet</a> </li>
            <br />
            <li>Onging learning/project on spare time: a backend in c# / dotnet </li>
          </div>
        </div>
      </div>
      <SocialLinks1 className="Social-link1" />
    </div>
  )
}

export default MyStack