import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Cards/Card";
import styles from "./Section.module.css";

function Section() {
	const [ data, setData ] = useState();
	const handleTopAlbums = () => {
		axios
			.get('https://qtify-backend-labs.crio.do/albums/top')
			.then((response) => {
				console.log(response,"response")
				setData(response.data)
			})
			.catch((err) => {
				console.log(err,"error")
			})
	}
	useEffect(() => {
		handleTopAlbums();
	}, [])
	
    return (
		<div className={styles.Container}>
			<div className={styles.HeadContainer}>
				<h3>Top Albums</h3>
				<span>Collapse</span>
			</div>
			<div className={styles.ContentContainer}>
				{
					data?.map((item) => (
						<Card data={item}/>
					))
				}
			</div>
		</div>
		);
}

export default Section;
