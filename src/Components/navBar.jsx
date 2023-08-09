import React from 'react';
import logo from "../Assests/logo.png"
import './navbar.css';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  let navigate=useNavigate();

  const SkillTesting=()=>{
    navigate('/skilltest');

};
    return ( 
        <React.Fragment>
            <nav class="navbar navbar-expand-lg navbar-light mb-5 ">
  <div class="container-fluid m-1 p-1 ">
    <img src={logo} alt='logo' className='logo'/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item me-2">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item me-2">
          <a class="nav-link active" aria-current="page" href="/aboutus">About Us</a>
        </li>

        <li class="nav-item dropdown ms-2 me-2">
          <a class="nav-link active dropdown-toggle" aria-current="page" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/cvpreparation">CV Preparation</a></li>
            <li><a class="dropdown-item" href="/interviewpreparation">Interview Preparation</a></li>
          </ul>
        </li>
        <li class="nav-item me-2">
          <a class="nav-link active" aria-current="page" href="futurePronet">FuturePro Net</a>
        </li>

        <li class="nav-item me-2">
      <button className='btn btn-primary' onClick={SkillTesting}>Skill test</button>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>
        </React.Fragment>
     );
}
 
export default NavBar;