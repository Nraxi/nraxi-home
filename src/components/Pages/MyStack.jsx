import React from 'react'
// import NavbarThird from '../Nav/NavbarThird';
import "../../css/MyStack.css"
import NavbarSecond from '../Nav/NavbarSecond';
import SocialLinks1 from '../SocialLinks/SocialLinks1'
import '../../css/NewBackgrounds.css'
// import nys from '../images/nys.png';

function MyStack() {
  // const backgroundStyle = {
  //   backgroundImage: `url(${nys})`
  // };
  return (
    // <div className="background-container-MyStack" style={backgroundStyle}>
    <div className="gradient-background2">
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
              <li>Next.js </li>
              <li>Typescript </li>
              <li>Razor </li>
              <li>Blazor </li>

            </ul>
          </div>

          <div className='MyStacksAi'>
            <h4>Backend Development / DB / Cloud</h4>
            <ul>
              <li>Golang</li>
              <li>Node</li>
              <li>Express</li>
              <li>C# / .Net7 Core </li>
              <li>Express</li>
              <li>DB - Sql</li>
              <li>DB - Postgress</li>
              <li>DB - MongoDb</li>
              <li>DB - Sqllite</li>
              <li>DB - AzureDB</li>
              <li>API CALLS - POSTman / bash / Swagger</li>
              <li>Docker</li>
              <li>Kubernetes</li>

              <li>
                Entity Framework Core, Code-First, LINQ.
              </li>
              <br />
              <li>Azure:</li>
              <li>Microsoft Azure</li>
              <li>Azure Web Apps</li>
              <li> CI/CD with Azure DevOps</li>
              <li> Azure Functions</li>
              <li>Azure Storage</li>
              <li>Azure SQL Database</li>

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

            <h4>Educations </h4>


            <br />JENSEN Vocational College (Aug. 2021 – June 2023)
            <br />Frontend Developer with focus on Web Security, IT


            <li>Link to: <a href='https://www.jensenyh.se/vara-utbildningar/frontendutvecklare-webbsakerhet'>Education plan etc</a> </li>
            Grades: Provided upon request
            <br />Activities and Societies: Class Representative, Fall 2021
            <br />
            <br />About:
            <br />- In-depth frontend development
            <br />- Web Security
            <br />-  Backend development
            <br />- Requirements and threat analysis from a web security perspective, legislation.
            <br />- Agile/Scrum, entrepreneurship, customer communication, requirements specification
            <br />- Documentation, delivery & presentation to the customer"


            <br />
            <br />
            <br />
            <li>
              <br />Lexicon IT-Proffs - Continuing Education in IT
              <br />Fullstack .NET Developer, IT
              <br />Feb. 2024–Oct. 2024

              <br />Certification:
              <a href='https://verify.trueoriginal.com/4759E151-F557-4A31-15C5-8109778FF46F/?ref=direct-copy'> Link Cert</a>
              <br /><br /> Course included:
              <br />- C# .Net basics
              <br /> - Frontend (HTML, CSS, JavaScript, Bootstrap 5)
              <br /> - Databases(SQL, database modeling, Entity framework core, NoSQL)
              <br /> - Test(TDD, XUNIT, Moq)
              <br /> - ASP .NET Core
              <br /> - Fullstack project work(Blazor WASM, ASP .NET Core web API, SCRUM project methodology
              etc.)
              <br /> - Microsoft Azure (web App, CI/CD med Azure DevOps, CosmosDB, Azure SQL Database)
            </li>
            <br /><br />
            <h4>Understanding </h4>
            <li>Python & more</li>
            <br />
          </div>
        </div>
      </div>
      <SocialLinks1 className="Social-link1" />
    </div >
  )
}

export default MyStack