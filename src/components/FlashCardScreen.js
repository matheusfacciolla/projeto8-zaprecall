import React from "react";
import logo_pequeno from "../assets/logo-pequeno.png";
import Result from "./Result";
import Question from "./Question";

export default function FlashCardScreen(props) {

    const {counterQuestion, setQuestionCounter, statusResult, setStatusResult, restartGame} = props;

    const questions = [
        { question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript" },
        { question: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces" },
        { question: "Componentes devem iniciar com __ ", answer: "letra maiúscula" },
        { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
        { question: "O ReactDOM nos ajuda __ ", answer: " interagindo com a DOM para colocar componentes React na mesma" },
        { question: "Usamos o npm para __", answer: "gerenciar os pacotes necessários e suas dependências" },
        { question: "Usamos props para __", answer: "passar diferentes informações para componentes" },
        { question: "Usamos estado (state) para __", answer: " dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
    ];

    const increment = () => { setQuestionCounter(counterQuestion + 1) };
    const addResult = (result) => { setStatusResult([...statusResult, result]) };

    return (
        <div className="flashCardScreen">
            <header>
                <img src={logo_pequeno} alt="logo-pequeno"></img>
                <h1>ZapRecall</h1>
            </header>
            <main className="questions">
                {questions.sort(comparador).map((element, idx) => <Question info={element} increment={increment} addResult={addResult} index={idx+1} />)}
            </main>
            <footer>
                <Result counter={counterQuestion} status={statusResult} questions={questions.length} restartGame={restartGame} />
            </footer>
        </div>
    );
}

function comparador() { 
    return Math.random() - 0.5; 
}