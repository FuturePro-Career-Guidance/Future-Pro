import React, {useContext} from "react";
import {QuizContext} from "../Helpers/context";
import './skilltest.css';

export default function MainMenu(){
    const {gameState, setGameState} = useContext(QuizContext)
    return(
        <div className="Menu">

        <button onClick={() =>{
        setGameState("quiz");
        }}
                >
            Start Quiz
            </button>
    </div>
    );
}

