import './App.css';
import React,{useState} from 'react';

import {BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'


import Post from './Components/post';
import PostingPage from './Components/postingC';
import NetPage from './Pages/futureproNet';
import LandingPage from './Pages/landingPage';
import AboutUs from './Pages/aboutUs';
import CVPrep from './Pages/cvPrep';
import InterviewPrep from './Pages/Interviewprep';
import QuizPage from "./Pages/QuizPage";
import GeneralCareer from './Pages/generalCareer';
import MyProfile from './Pages/myProfile';


function App() {
  const [auth,setAuth]=useState(false);
  return (
    <div className="App">
     
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage setAuth={setAuth} />}/>
          <Route path='/futurePronet' element={<NetPage setAuth={setAuth}/>}/>
          <Route path='/profile' element={<MyProfile setAuth={setAuth}/>}/>
          <Route path='/cvpreparation' element={<CVPrep/>}/>
          <Route path='/interviewpreparation' element={<InterviewPrep/>}/>
          <Route path='/genralRecomendation' element={<GeneralCareer/>}/>
          <Route path='/skilltest' element={<QuizPage/>}/>
        </Routes>
      </Router>


    </div>
  );
}

export default App;
