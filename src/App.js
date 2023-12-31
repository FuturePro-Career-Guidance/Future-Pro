import './App.css';
import React,{useState} from 'react';

import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'


import NetPage from './Pages/futureproNet';
import LandingPage from './Pages/landingPage';
import CVPrep from './Pages/cvPrep';
import InterviewPrep from './Pages/Interviewprep';
import GeneralCareer from './Pages/generalCareer';
import QuizPage from './Pages/QuizPage';
import  MyProfile from './Pages/profile';
import Footer from './InterviewComponents/Footer/Footer';

function App() {
  const [auth,setAuth]=useState(false);
  return (
    <div className="App">
     
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage setAuth={setAuth} />}/>
          <Route path='/futurePronet' element={<NetPage setAuth={setAuth}/>}/>
         
          <Route path='/cvpreparation' element={<CVPrep/>}/>
          <Route path='/interviewpreparation' element={<InterviewPrep/>}/>
          <Route path='/genralRecomendation' element={<GeneralCareer/>}/>
          <Route path='/skilltest' element={<QuizPage/>}/>
          <Route path='/myProfile' element={<MyProfile  setAuth={setAuth}/>}/>
          
        </Routes>
      </Router>

      <Footer/>


    </div>
  );
}

export default App;
