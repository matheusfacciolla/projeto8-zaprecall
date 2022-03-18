import ReactDOM from 'react-dom';
import HomeScreen from './home';

function App() {
    return (
        <>
            <HomeScreen />
        </>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));