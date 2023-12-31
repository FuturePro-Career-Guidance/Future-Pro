import React, {useContext, useState} from "react";
import {QuizContext} from "../Helpers/context";
import './skilltest.css';
import {Questions} from "../Helpers/QuestionBank";

function EndScreen() {
    const {score, setScore, setGameState} = useContext(QuizContext);
    const [currQuestion, setCurrQuestiion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("")
    const restartQuiz = () =>{
        setGameState("menu");
    };
    return (
        <div className="EndScreen">
            {""}
            <h1>Most Suitable Job for you is QA</h1>
            {/*<h3>*/}
            {/*    {""}*/}
            {/*    <h5>{Questions[currQuestion].prompt} = {setOptionChosen()}</h5>;*/}

            {/*</h3>*/}
            <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
    );

}
export default EndScreen;