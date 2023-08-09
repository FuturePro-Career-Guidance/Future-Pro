import React, {useState, useContext} from "react";
import MainMenu from "./MainMenu";
import Quiz from "./Quiz";
import EndScreen from "./EndScreen";
import {QuizContext} from "../Helpers/Contexts";



function QuizPage(){
    const [gameState, setGameState] = useState("menu");

    return(
        <div className="App">
            <h1>Quiz App</h1>
            <QuizContext.Provider value={{gameState, setGameState }}>

            {gameState === "menu" && <MainMenu/>}
            {gameState === "quiz" && <Quiz/>}
            {gameState === "endScreen" && <EndScreen/>}

            </QuizContext.Provider>
        </div>
    );
}

export default QuizPage;