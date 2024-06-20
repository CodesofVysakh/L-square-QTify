import logo from "./components/assets/images/qtify-logo.svg";
import "./App.css";
import Button from "./components/Button/Button";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} alt="Logo" />
                <SearchBar />
                <Button>Give Feedback</Button>
            </header>
        </div>
    );
}

export default App;
