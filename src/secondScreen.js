import React from 'react';

const questions = [
    { number: "1", question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript" },
    { number: "2", question: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces" },
    { number: "3", question: " Componentes devem iniciar com __ ", answer: "letra maiúscula" },
    { number: "4", question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    { number: "5", question: " O ReactDOM nos ajuda __ ", answer: " interagindo com a DOM para colocar componentes React na mesma" },
    { number: "6", question: " Usamos o npm para __", answer: "gerenciar os pacotes necessários e suas dependências" },
    { number: "7", question: "Usamos props para __", answer: "passar diferentes informações para componentes" },
    { number: "8", question: "Usamos estado (state) para __", answer: " dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
];

export default function SecondScreen() {
    const [counterQuestion, setQuestionCounter] = React.useState(0);
    const [statusResultado, setStatusResultado] = React.useState([]);

    const increment = () => { setQuestionCounter(counterQuestion + 1) };
    const addResult = (result) => { setStatusResultado([...statusResultado, result]) };

    return (
        <div className="secondScreen">
            <header>
                <img src="images/logo-pequeno.png" alt="logo-pequeno"></img>
                <h1>ZapRecall</h1>
            </header>
            <main className="questions">
                {questions.map(element => <Question info={element} increment={increment} addResult={addResult} />)}
            </main>
            <footer>
                <Resultado counter={counterQuestion} status={statusResultado} />
            </footer>
        </div>
    );
}

function Question(props) {

    const [questionScreen, setQuestionScreen] = React.useState("questionScreen1");
    const [questionColor, setQuestionColor] = React.useState("");

    if (questionScreen === "questionScreen1") {
        return (
            <div className={`question ${questionColor}`}>
                <p>Pergunta {props.info.number}</p>
                {questionColor === "" && <ion-icon name="play-outline" onClick={() => setQuestionScreen("questionScreen2")}></ion-icon>}
                {questionColor === "green" && <ion-icon name="checkmark-circle"></ion-icon>}
                {questionColor === "red" && <ion-icon name="close-circle"></ion-icon>}
                {questionColor === "orange" && <ion-icon name="help-circle"></ion-icon>}
            </div>
        );

    } else if (questionScreen === "questionScreen2") {
        return (
            <div className="questionText">
                <p>Pergunta {props.info.question}</p>
                <img className="arrow" src="images/setinha.png" alt="setinha" onClick={() => setQuestionScreen("questionScreen3")}></img>
            </div>
        );

    } else if (questionScreen === "questionScreen3") {
        return (
            <div className="questionAnswer">
                <p>{props.info.answer}</p>
                <div className="btns">
                    <button className="red" onClick={() => {
                        setQuestionScreen("questionScreen1");
                        setQuestionColor("red");
                        props.increment();
                        props.addResult("red");
                    }
                    }>Não lembrei</button>

                    <button className="orange" onClick={() => {
                        setQuestionScreen("questionScreen1");
                        setQuestionColor("orange");
                        props.increment();
                        props.addResult("orange");
                    }
                    }>Quase não lembrei</button>

                    <button className="green" onClick={() => {
                        setQuestionScreen("questionScreen1");
                        setQuestionColor("green");
                        props.increment();
                        props.addResult("green");
                    }
                    }>Zap!</button>
                    
                </div>
            </div>
        );
    }
}

function Resultado(props) {

    let finish = props.status.length === questions.length;
    let happyMessage = true;

    for(let i=0; i<props.status.length; i++){
        if(props.status[i] === "red"){
            happyMessage = false;
        }
    }

    return (
        <div className="footer-resultado">
            <p>
            {props.counter}/8 CONCLUÍDOS <br/>
            {props.status.map(element => {
                if (element === "green"){
                    return <ion-icon name="checkmark-circle" style={{color:"#2FBE34"}}></ion-icon>
                } else if (element === "red"){
                    return <ion-icon name="close-circle" style={{color:"#FF3030"}}></ion-icon>
                } else if (element === "orange"){
                    return <ion-icon name="help-circle" style={{color:"#FF922E"}}></ion-icon>
                }
            })}
            </p>
            {finish && happyMessage && <p>Você não esqueceu de nenhum flashcard!</p>}
            {finish && !happyMessage && <p>Ainda faltam alguns...Mas não desanime!</p>}
        </div>    
    );
}