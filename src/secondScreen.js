import React from 'react';

const questions = [
    { number: "Pergunta 1", question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript" },
    { number: "Pergunta 2", question: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces" },
    { number: "Pergunta 3", question: " Componentes devem iniciar com __ ", answer: "letra maiúscula" },
    { number: "Pergunta 4", question: "Podemos colocar __ dentro do JSX", answer: "expressões" }
];

export default function SecondScreen() {

    return (

        <div className="secondScreen">
            <header>
                <img src="images/logo-pequeno.png" alt="logo-pequeno"></img>
                <h1>ZapRecall</h1>
            </header>
            <main className="questions">
                {questions.map(element => <Question info={element} />)}
            </main>
            <footer>
                <p>0/4 CONCLUÍDOS</p>
            </footer>
        </div>
    );

    function Question(props) {

        const [questionScreen, setQuestionScreen] = React.useState("questionScreen1");
        

        if (questionScreen === "questionScreen1") {
            return (
                <div className="question">
                    <p>{props.info.number}</p>
                    <ion-icon name="play-outline" onClick={() => setQuestionScreen("questionScreen2")}></ion-icon>
                </div>
            );
        } else if (questionScreen === "questionScreen2"){
            return (
                <div className="questionText">
                    <p>{props.info.question}</p>
                    <img className="arrow" src="images/setinha.png" alt="setinha" onClick={() => setQuestionScreen("questionScreen3")}></img>
                </div>
            );
        } else if (questionScreen === "questionScreen3"){
            return (
                <div className="questionAnswer">
                    <p>{props.info.answer}</p>
                    <div className="btns">
                        <button className="red">Não lembrei</button>
                        <button className="orange">Quase não lembrei</button>
                        <button className="green">Zap!</button>
                    </div>
                </div>
            );
        }
    }
}

