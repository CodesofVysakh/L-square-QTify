import logo from "./components/assets/images/qtify-logo.svg";
import HeadPhone from "./components/assets/images/vibrating-headphone.svg";
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
				<div className={"searchbar"}>
					<input 
						type="text" 
						placeholder='Search an album of your choice'
					/>
					<img src={SearchImage} alt="Search Icon" />
				</div>
                <button className={"button"}>Give Feedback</button>
            </header>
			<div className="Hero-container">
				<div className="Hero-content">
					<h3 className="Hero-title">100 Thousand Songs, ad-free</h3>
					<h3 className="Hero-title">Over thousands podcast episodes</h3>
				</div>
                <img src={HeadPhone} alt="Hero Image" />
			</div>
        </div>
    );
}

export default App;
