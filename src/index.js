import ReactDOM from 'react-dom';
import HomeScreen from './components/HomeScreen';
import "./css/reset.css";
import "./css/style.css";

function App() {
    return (
        <>
            <HomeScreen />
        </>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));