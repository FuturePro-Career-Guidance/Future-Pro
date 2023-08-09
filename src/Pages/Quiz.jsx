import { Questions} from "../Helpers/QuestionBank";
import {QuizContext} from "../Helpers/Contexts";
import {useContext, useState} from "react";
import React, {useState, useContext} from "react";
import {type} from "@testing-library/user-event/dist/type";


function Quiz(){
    const {score, setScore, setGameState} = useContext(QuizContext);
    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");
    const nextQuestion = () =>{
        setCurrQuestion(currQuestion + 1);
    };

    const finishQuiz = () =>{
        setGameState("endScreen");
    };

    return(
        <div className="Quiz">
            <h3>{Questions[currQuestion].prompt}</h3>
            <div className="options">
                {/*<button onClick={() => setOptionChosen("A")}> {Questions[currQuestion].optionA}</button>*/}
                {/*<button onClick={() => setOptionChosen("B")}> {Questions[currQuestion].optionB}</button>*/}
                {/*<button onClick={() => setOptionChosen("C")}> {Questions[currQuestion].optionC}</button>*/}
                {/*<button onClick={() => setOptionChosen("D")}> {Questions[currQuestion].optionD}</button>*/}
                {/*<button onClick={() => setOptionChosen("E")}> {Questions[currQuestion].optionE}</button>*/}
                {/*<button onClick={() => setOptionChosen("F")}> {Questions[currQuestion].optionF}</button>*/}
                {/*<button onClick={() => setOptionChosen("G")}> {Questions[currQuestion].optionG}</button>*/}


                {/*<button onClick={() => setOptionChosen("G")}> {Questions[currQuestion].optionG}</button>*/}
                {Questions[currQuestion].options.map((ans, index) => (
                    <button onClick={() => setOptionChosen(index)}>{ans},</button>
                ))}



            </div>
            {(currQuestion === Questions.length - 1) ? (
                <button onClick={finishQuiz}> Finish Quiz </button>
            ):(
                <button onClick={nextQuestion}> Next Question</button>)}

        </div>
    );
}
export default Quiz;
