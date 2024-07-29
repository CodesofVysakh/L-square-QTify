import React, { useEffect, useState } from "react";
import { fetchFilters, fetchNewAlbums, fetchSongs, fetchTopAlbums } from "./api/api";

import "./App.css";
import logo from "./components/assets/images/qtify-logo.svg";
import HeadPhone from "./components/assets/images/vibrating-headphone.svg";
import SearchImage from './components/assets/images/Search-icon.svg'
import Section from "./components/Sections/Section";

function App() {
	const [data, setData] = useState({});
	const generateData = (key, source) => {
		source().then((data) => {
		setData((preData) => {
			return { ...preData, [key]: data };
		});
		});
	};
	useEffect(() => {
		generateData("topAlbums", fetchTopAlbums);
		generateData("newAlbums", fetchNewAlbums);
		generateData("songs", fetchSongs);
	}, []);

	const { topAlbums = [], newAlbums = [], songs = [] } = data;

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
			<Section title="Top Albums" data={topAlbums} type="album" />
			<Section title="New Albums" data={newAlbums} type="album" />
			<Section
				title="Songs"
				data={songs}
				type="song"
				filterSource={fetchFilters}
			/>
        </div>
    );
}

export default App;
