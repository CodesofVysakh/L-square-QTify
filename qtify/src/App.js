import "./App.css";
import logo from "./components/assets/images/qtify-logo.svg";
import HeadPhone from "./components/assets/images/vibrating-headphone.svg";
import SearchImage from './components/assets/images/Search-icon.svg'
import Section from "./components/Sections/Section";

// import SearchBar from "./components/SearchBar/SearchBar";

function App() {
    return (
        <div className="App">
            <header className="navbarContainer App-header">
				<div>
                	<img src={logo} alt="Logo" />
				</div>
                {/* <SearchBar /> */}
				<div className={"searchbar"}>
					<input 
						type="text" 
						placeholder='Search an album of your choice'
					/>
					<div>
						<img src={SearchImage} alt="Search Icon" />
					</div>
				</div>
                <button className={"button"}>Give Feedback</button>
            </header>
			<div className="Hero-container">
				<div className="Hero-content">
					<h3 className="Hero-title">100 Thousand Songs, ad-free</h3>
					<h3 className="Hero-title">Over thousands podcast episodes</h3>
				</div>
				<div>
	                <img src={HeadPhone} alt="Hero Image" />
				</div>
			</div>
			<Section title={"Top"} slug="top"/>
			<Section title={"New"} slug="new"/>
        </div>
    );
}

export default App;
