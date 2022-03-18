import React from 'react';
import SecondScreen from './secondScreen';

export default function HomeScreen() {

const [visible, setVisible] = React.useState(true)

    return (
        visible === true ?
            <div className="home">
                <img src="images/logo.png" alt="logo"></img>
                <h1>ZapRecall</h1>
                <button onClick={() => setVisible(false)}>Iniciar Recall!</button>
            </div>
        :
        <SecondScreen />
    );
}