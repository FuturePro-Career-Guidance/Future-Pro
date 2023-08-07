import React from 'react';
import Header from '../InterviewComponents/Header/Header'
import HeroSection from '../InterviewComponents/Hero-Section/HeroSection'
import CompanySection from '../InterviewComponents/Company-section/Company'
import AboutUs from '../InterviewComponents/About-us/AboutUs'
import Courses from '../InterviewComponents/Courses-section/Courses'
import ChooseUs from '../InterviewComponents/Choose-us/ChooseUs'
import Features from '../InterviewComponents/Feature-section/Features'
import FreeCourse from '../InterviewComponents/Free-course-section/FreeCourse'
import Newsletter from '../InterviewComponents/Newsletter/Newsletter'
import Footer from '../InterviewComponents/Footer/Footer'


const InterviewPrep = () => {
    return ( 
        <React.Fragment>
            <Header/>
            <HeroSection/>
            <AboutUs />
            <Courses />
            <ChooseUs />
            <Features />
            <FreeCourse />
            <Newsletter />
            <Footer />
            
        </React.Fragment>
     );
}
 
export default InterviewPrep;