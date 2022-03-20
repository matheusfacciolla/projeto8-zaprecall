import React from "react";
import FlashCardScreen from "./FlashCardScreen";
import logo from "../assets/logo.png";

export default function HomeScreen(props) {

    const {visible, setVisible, counterQuestion, setQuestionCounter, statusResult, setStatusResult, restartGame} = props;

    return (
        visible === true ?
            <div className="home">
                <img src={logo} alt="logo"></img>
                <h1>ZapRecall</h1>
                <button onClick={() => setVisible(false)}>Iniciar Recall!</button>
            </div>
        :
        <FlashCardScreen counterQuestion={counterQuestion} setQuestionCounter={setQuestionCounter} statusResult={statusResult} setStatusResult={setStatusResult} restartGame={restartGame}/>
    );
}