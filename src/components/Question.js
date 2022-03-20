import React from "react";
import setinha from "../assets/setinha.png";

export default function Question(props) {

    const {info, increment, addResult, index} = props;

    const [questionScreen, setQuestionScreen] = React.useState("questionScreen1");
    const [questionColor, setQuestionColor] = React.useState("");

    if (questionScreen === "questionScreen1") {
        return (
            <div className={`question ${questionColor}`}>
                <p>Pergunta {index}</p>
                {questionColor === "" && <ion-icon name="play-outline" onClick={() => setQuestionScreen("questionScreen2")}></ion-icon>}
                {questionColor === "green" && <ion-icon name="checkmark-circle"></ion-icon>}
                {questionColor === "red" && <ion-icon name="close-circle"></ion-icon>}
                {questionColor === "orange" && <ion-icon name="help-circle"></ion-icon>}
            </div>
        );

    } else if (questionScreen === "questionScreen2") {
        return (
            <div className="questionText">
                <p>Pergunta {info.question}</p>
                <img className="arrow" src={setinha} alt="setinha" onClick={() => setQuestionScreen("questionScreen3")}></img>
            </div>
        );

    } else if (questionScreen === "questionScreen3") {
        return (
            <div className="questionAnswer">
                <p>{info.answer}</p>
                <div className="btns">
                    <button className="red" onClick={() => {
                        setQuestionScreen("questionScreen1");
                        setQuestionColor("red");
                        increment();
                        addResult("red");
                    }
                    }>Não lembrei</button>

                    <button className="orange" onClick={() => {
                        setQuestionScreen("questionScreen1");
                        setQuestionColor("orange");
                        increment();
                        addResult("orange");
                    }
                    }>Quase não lembrei</button>

                    <button className="green" onClick={() => {
                        setQuestionScreen("questionScreen1");
                        setQuestionColor("green");
                        increment();
                        addResult("green");
                    }
                    }>Zap!</button>
                    
                </div>
            </div>
        );
    }
}