import React from "react";
import party from "../assets/party.png";
import sad from "../assets/sad.png";

export default function Result(props) {

    let finish = props.status.length === props.questions;
    let happyMessage = true;

    for(let i=0; i<props.status.length; i++){
        if(props.status[i] === "red"){
            happyMessage = false;
        }
    }

    return (
        <div className="footer-result">

            {finish && happyMessage &&  <p><img className='emoji' src={party} alt="party"/>Parabéns!<br/><br/>Você não esqueceu de <br/> nenhum flashcard!<br/><br/></p>}
            {finish && !happyMessage && <p><img className='emoji' src={sad} alt="sad"/>Putz...<br/><br/>Ainda faltam alguns... <br/>Mas não desanime!<br/><br/></p>}

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
        </div>    
    );
}