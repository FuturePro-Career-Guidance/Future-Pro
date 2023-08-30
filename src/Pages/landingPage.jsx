import React from 'react';
import NavBar from '../Components/navBar';
import {auth,provider} from '../firebase-config';
import {signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import './landingpage.css'
import Timeline from '../Components/timeline';
import Testimonial from '../Components/testamonial';
import Type from '../Components/type';
import ImageSection from '../Components/Portfolio/imagesection';



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

    const cvprep=()=>{
      navigate('/cvpreparation');
    }
    const interviewprep=()=>{
      navigate('/interviewpreparation');
    }
    return ( 
        <React.Fragment>
            <div className='outlinebox'> 
                <div className='mainbox p-1 m-3' >
                <NavBar/>

                <div className='blanksection p-5'>

                </div>
                {/* <div classname='mainsection d-flex w-100 '>
                <div className='textsection d-flex w-50 m-3 flex-column '>
                   
                        <h1>Navigate Your Future with AI-Driven Career Recommendations</h1>
                        <p>Assess your skills and interests, receive personalized career recommendations, and prepare for interviews with our comprehensive resources.</p>
                        

                   
                    <div className=''>
                        <button className='btn btn-themedark ms-3' onClick={signInWithGoogle}>Sign in with Google</button>
                        <button className='btn btn-themelight ms-3' onClick={recomend}>Get Career Recomendations</button>
                    </div>
                  

                </div>
                
                <div className='imgsection w-50 m-3'>
                  <h1>aadad</h1>

                </div>

                </div> */}
                <div className='mainsection d-flex w-100 justify-content-between'>
                  <div className='textsection w-50 m-3 p-5'>
                  <h1>Navigate Your Future with AI-Driven Career Recommendations</h1>
                  <p>Assess your skills and interests, receive personalized career recommendations, and prepare for interviews with our comprehensive resources.</p>
                  <button className='btn btn-themedark' onClick={signInWithGoogle}>Sign in with Google</button>
                  <button className='btn btn-themelight ms-3' onClick={recomend}>Get Career Recomendations</button>
                  </div>

                  <div className='imagesection w-50 d-flex p-1 '>
                  
                    <ImageSection/>
                     

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
             
            </div>
          </div>
                <div className='timeline m-3 mb-0 mt-0'>
                <Timeline/>

                </div>

                <div className='testamonials'>

                    <Testimonial/>
                </div>

                <div className="img11 bg-dark m-3 mb-0">
            <div class="img-overlay">
              <h1>
              Empower Yourself with Expert CV Review and Mock Interviews
              </h1>
              <p className='imagetexter mt-3 p-2'>
              Let our experts fine-tune your CV to perfection, showcasing your skills like never before.
              Turn interview jitters into a confident performance with our mock interview service
              </p>
              <div>
              <button type="button" class="btn btn-outline-light mb-3 mt-3 me-2" onClick={cvprep}>
                CV reviews
              </button>
              <button type="button" class="btn btn-outline-light mb-3 mt-3 ms-2" onClick={interviewprep}>
               Mock interviews
              </button>
              </div>
              
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
                  How does FUTUREPRO work?
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div class="accordion-body">
                FUTUREPRO utilizes advanced AI algorithms to analyze your skills, interests, and aspirations. Based on this information, it offers tailored career recommendations, interview tips, and connects you with a vibrant community of professionals.
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
                 How can FUTUREPRO help me in my career?
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo"
              >
                <div class="accordion-body">
                FUTUREPRO empowers you with personalized career recommendations, helping you discover the best-fit job roles and industries. It offers resources for interview preparation, enabling you to shine in job interviews. Additionally, the networking platform allows you to connect with experienced professionals for mentorship and advice.
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
                 Is my data safe with FUTUREPRO?
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div class="accordion-body">
                Yes, absolutely. We take data privacy and security seriously. Your data is encrypted and stored securely. We only use your information to enhance your user experience and provide personalized recommendations
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
                 Are there any charges to use FUTUREPRO?
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div class="accordion-body">
                FUTUREPRO offers a free tier with access to essential features. We also offer premium plans with advanced functionalities for those looking for an enhanced career mentorship experience.
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