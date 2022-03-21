import ReactDOM from 'react-dom';
import HomeScreen from './components/HomeScreen';
import "./css/reset.css";
import "./css/style.css";
import React from "react";

function App() {

    const [visible, setVisible] = React.useState(true);
    const [counterQuestion, setQuestionCounter] = React.useState(0);
    const [statusResult, setStatusResult] = React.useState([]);

    function restartGame() {
        setVisible(true);
        setQuestionCounter(0);
        setStatusResult([]);
    }

    return (
        <>
            <HomeScreen visible={visible} setVisible={setVisible} counterQuestion={counterQuestion} setQuestionCounter={setQuestionCounter} statusResult={statusResult} setStatusResult={setStatusResult} restartGame={restartGame} />
        </>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));