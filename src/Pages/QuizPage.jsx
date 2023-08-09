import React, {useState} from "react";

import {QuizContext} from "../Helpers/context";
import MainMenu from "./mainMenu";
import Quiz from './quiz';
import EndScreen from './endScreen';
import './skilltest.css';



function QuizPage(){
    const [gameState, setGameState] = useState("menu");

    return(
        <div className="App1">
            <h1>Quiz App</h1>
            <QuizContext.Provider value={{gameState, setGameState }}>

            {gameState === "menu" && <MainMenu/> }
            {gameState === "quiz" && <Quiz/>}
            {gameState === "endScreen" && <EndScreen/>}

            </QuizContext.Provider>
        </div>
    );
}

export default QuizPage;