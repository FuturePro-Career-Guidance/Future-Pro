import React from 'react';
import NavBar from '../Components/navBar';
import {auth,provider} from '../firebase-config';
import {signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import './landingpage.css'
import Timeline from '../Components/timeline';
import Testimonial from '../Components/testamonial';


const LandingPage = ({setAuth}) => {
    let navigate=useNavigate();

    const signInWithGoogle=()=>{
        signInWithPopup(auth,provider).then((result)=>{
            localStorage.setItem("Auth",true);
            setAuth(true);
            navigate('/');
        });
    };

    const recomend=()=>{
            navigate('/genralRecomendation');
        
    };
    return ( 
        <React.Fragment>
            <div className='outlinebox'> 
                <div className='mainbox m-3 p-1' >
                <NavBar/>

                <div className='blanksection p-5'>

                </div>

                <div className='mainsection d-flex w-100 m-3 flex-column '>
                    <div className='textsection w-75 m-3'>
                        <h1>Are You ready to start Your career</h1>

                    </div>
                    <div>
                        <button className='btn btn-success ms-3' onClick={signInWithGoogle}>Sign in with Google</button>
                        <button className='btn btn-warning ms-3' onClick={recomend}>General Career Recomendation</button>
                    </div>
                    <div className='imgsection w-25 m-3'>

                    </div>

                </div>

                
                    
                </div>
                <div className='timeline'>
                <Timeline/>

                </div>

                <div className='experts'>
            <div className='d-flex p-3 m-1 text-center'>
                <h3>Meet our Industry experts, They guide you to get the job at first instance</h3>
            </div>
            <div className='d-flex justify-content-between ms-5 me-5'>
                <div className='expert p-1'>
                    <img src={require('../Assests/expert2.jpg').default} alt='expert2' />
                    <p>Amal Expert</p>
                    <p>IT Specialist</p>
                </div>
                <div className='expert p-1'>
                    <img src={require('../Assests/expert1.jpg').default} alt='expert1' />
                    <p>Dasith Expert</p>
                    <p>HR Consultant</p>
                </div>
                <div className='expert p-1'>
                    <img src={require('../Assests/expert3.jpg').default} alt='expert3' />
                    <p>Ashen Expert</p>
                    <p>Finance Advisor</p>
                </div>
            </div>
        </div>

                <div className='testamonials'>

                    <Testimonial/>
                </div>

               

            </div>
            
        </React.Fragment>
     );
}
 
export default LandingPage;