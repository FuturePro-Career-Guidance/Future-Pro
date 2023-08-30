import React from 'react';
import './portfolio.css'; // Make sure to import your CSS file
import prof from "../../Assests/img/hero.png";
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa';

function App() {
  return (
    <div>
      <nav>
        <div className="container nav-container">
          <a href="" className="logo" style={{textDecoration:"none"}}>
            Candy<span>Code</span>
          </a>
          <ul className="nav-links">
            <li>
              <a href="#" className="active" style={{textDecoration:"none"}}>
                Home
              </a>
            </li>
            <li>
              <a href="# " style={{textDecoration:"none"}}>About</a>
            </li>
            <li>
              <a href="#" style={{textDecoration:"none"}}>Skills</a>
            </li>
            <li>
              <a href="#" style={{textDecoration:"none"}}>Portfolio</a>
            </li>
            <li>
              <a href="#" style={{textDecoration:"none"}}>Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <header>
        <div className="container header-container">
          <div className="header-left">
            <h1>
              Web <br /> & App Development
            </h1>
            <h3>Hi, I'm The Jay Sean </h3>
            <p>
              I am a seasoned web and app developer with a strong foundation in both front-end and back-end technologies.
              With a proven ability to create dynamic and user-centric digital solutions, I excel in transforming concepts
              into functional and aesthetically pleasing web applications and mobile apps. My passion lies in crafting
              efficient and scalable code, always focused on delivering exceptional user experiences. With a keen eye for
              detail and a commitment to staying updated with the latest industry trends, I consistently produce results
              that meet and exceed client expectations
            </p>
            <a href="" className="btn" download="./img/CV.pdf">
              Download CV
            </a>
          </div>
          <div className="header-right">
            <div className="circle">
              <a href="#">
                <i className="fab fa-facebook"><FaFacebook/></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"><FaInstagram/></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"> <FaTwitter/></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin"><FaLinkedin/></i>
              </a>
            </div>
            <div className="hero-image">
              <img src={prof} alt="" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
