import React from 'react';
import './portfolio.css'; 
import prof from "../../Assests/img/hero.png";
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa';

const ImageSection = () => {
    return ( 
        <React.Fragment>
            <div>


<header>
  <div className="container header-container pt-0 p-5  m-2 mt-0 ms-5">

    <div className="header-right ">
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

        </React.Fragment>
     );
}
 
export default ImageSection;