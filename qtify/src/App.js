import logo from "./components/assets/images/qtify-logo.svg";
import "./App.css";
import Button from "./components/Button/Button";
import styles from './components/SearchBar/Search.module.css';
import SearchImage from './components/assets/images/Search-icon.svg'
import buttonstyle from './components/Button/Button.module.css'

// import SearchBar from "./components/SearchBar/SearchBar";

function App() {
    return (
        <div className="App">
            <header className="navbarContainer App-header">
                <img src={logo} alt="Logo" />
                {/* <SearchBar /> */}
				<div className={styles.searchbar}>
					<input 
						type="text" 
						placeholder='Search an album of your choice'
					/>
					<img src={SearchImage} alt="Search Icon" />
				</div>
                <button className={buttonstyle.button}>Give Feedback</button>
            </header>
        </div>
    );
}

export default App;
