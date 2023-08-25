import React from 'react';
import NavBar from '../Components/navBar';
import {auth,provider} from '../firebase-config';
import {signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import './landingpage.css'
import Timeline from '../Components/timeline';
import Testimonial from '../Components/testamonial';
import Type from '../Components/type';


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
                <div className='mainbox p-1 m-3' >
                <NavBar/>

                <div className='blanksection p-5'>

                </div>

                <div className='mainsection d-flex w-100 m-3 flex-column '>
                    <div className='textsection w-50 m-3 p-3'>
                        <h1>Navigate Your Future with AI-Driven Career Recommendations</h1>
                        <p>Assess your skills and interests, receive personalized career recommendations, and prepare for interviews with our comprehensive resources.</p>
                        

                    </div>
                    <div className='ms-1'>
                        <button className='btn btn-themedark ms-3' onClick={signInWithGoogle}>Sign in with Google</button>
                        <button className='btn btn-themelight ms-3' onClick={recomend}>Get Career Recomendations</button>
                    </div>
                    <div className='imgsection w-50 m-3'>

                    </div>

                </div>

                
                    
                </div>

                <div className='m-3 mt-4 mb-4 '>
                    <div className='encouraging text-center'>
                    <Type/>
                        <h5>If you are looking for a solution, we are here to help you! </h5>
                       
                    </div>

    
                    

                </div>

                <div className="img12 bg-dark m-3 mb-0">
            <div class="img-overlay">
              <h1>
              Experience personalized guidance like never before.
              </h1>
              <p className='imagetexter mt-3 p-2'>
               FUTUREPRO isn't just about today; it's about your future. We envision a world where your career aspirations meet achievements seamlessly. Join us, and together, let's redefine the way you navigate the job market. Your success story begins here, with FUTUREPRO – your AI mentor, your career ally, and your passport to excellence.
              </p>
              <button type="button" class="btn btn-outline-light mb-3 mt-3">
                Start Your Journey
              </button>
            </div>
          </div>
                <div className='timeline m-3 mb-0 mt-0'>
                <Timeline/>

                </div>

                <div className='testamonials'>

                    <Testimonial/>
                </div>

                <div className="img12 bg-dark m-3 mb-0">
            <div class="img-overlay">
              <h1>
              Experience personalized guidance like never before.
              </h1>
              <p className='imagetexter mt-3 p-2'>
               FUTUREPRO isn't just about today; it's about your future. We envision a world where your career aspirations meet achievements seamlessly. Join us, and together, let's redefine the way you navigate the job market. Your success story begins here, with FUTUREPRO – your AI mentor, your career ally, and your passport to excellence.
              </p>
              <button type="button" class="btn btn-outline-light mb-3 mt-3">
                Start Your Journey
              </button>
            </div>
          </div>

                <section className='m-3  d-flex justify-content-center flex-column align-items-center '>
                    <div className='w-75 '>
                    <h2 className="text-center text-dark fw-bold mb-3">Some Frequently Asked Questions</h2>
        <div className="d-flex justify-content-center">
          <div class="accordion  mb-3 " id="accordionPanelsStayOpenExample">
            <div class="accordion-item mb-1 ">
              <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button
                  class="accordion-button bg-success text-white icon-white "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  What is Food Bank?
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div class="accordion-body">
                  The food bank is a wonderful charitable app that serves as a
                  lifeline to countless individuals and families who struggle
                  with food insecurity. It is a donation app that allows people
                  to donate money and food items to those in need. The mission
                  of a food bank is to collect and distribute food to those who
                  are hungry and in need of assistance. By doing so, they
                  provide support to families and individuals who may be facing
                  difficult circumstances.
                </div>
              </div>
            </div>
            <div class="accordion-item mb-1">
              <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                <button
                  class="accordion-button collapsed bg-success text-white"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  How can we contribute?
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo"
              >
                <div class="accordion-body">
                  There are two ways you can contribute to our cause of helping
                  those in need: donating food or donating money. If you choose
                  to donate food, you can bring it directly to our warehouse, or
                  our representatives can arrange to collect it from you.
                  Additionally, if you know of any individuals or families who
                  could benefit from our assistance, you can propose them as
                  potential recipients of our aid. We appreciate any and all
                  support towards our mission to make a positive impact on the
                  lives of those facing hardship.
                </div>
              </div>
            </div>
            <div class="accordion-item mb-1">
              <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                <button
                  class="accordion-button collapsed bg-success text-white"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  How can we propose victims?
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div class="accordion-body">
                  You can enter information on those who need help (victims of
                  the food crisis). You need to have a user account to enter the
                  victims' information.Once the data is submitted, the system
                  checks whether entered details are existing information or
                  not. If not, those details save to the system as the new
                  victim who needs a donation.
                </div>
              </div>
            </div>
            <div class="accordion-item mb-1">
              <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                <button
                  class="accordion-button collapsed bg-success text-white"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  How the Food Donations are happenning?
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div class="accordion-body">
                  You can donate food whether you are registered users or
                  not. you have the option of donating food in your name by
                  including your information or anonymously. Once a you are
                  granted access to give, you can browse the food products that
                  can be donated as well as the locations of the warehouses. The
                  donor must next input the donation dates and choose a specific
                  warehouse. Additionally, a donor has the choice of donating on
                  their own or having an organization pick it up. 
                </div>
              </div>
            </div>
          </div>
        </div>
                    </div>
        
      </section>

               

            </div>
            
        </React.Fragment>
     );
}
 
export default LandingPage;