export default function SecondScreen() {
    return (
        <div className="secondScreen">
            <header>
                <img src="images/logo-pequeno.png" alt="logo-pequeno"></img>
                <h1>ZapRecall</h1>
            </header>
            <main className="questions">
                <div className="question">
                    <p>Pergunta 1</p>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
                <div className="question">
                    <p>Pergunta 2</p>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
                <div className="question">
                    <p>Pergunta 3</p>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
                <div className="question">
                    <p>Pergunta 4</p>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
            </main>
            <footer>
                <p>0/4 CONCLUÍDOS</p>
            </footer>
        </div>
    );
}