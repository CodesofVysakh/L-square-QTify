import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Cards/Card";
import styles from "./Section.module.css";
import Carousel from "../Carousel/Carousel";

function Section({ title, slug }) {
    const [data, setData] = useState();
    const [isShow, setIsShow] = useState(false);
    const getAlbums = () => {
        axios
            .get(`https://qtify-backend-labs.crio.do/albums/${slug}`)
            .then((response) => {
                console.log(response, "response");
                setData(response.data);
            })
            .catch((err) => {
                console.log(err, "error");
            });
    };
    useEffect(() => {
        getAlbums();
    }, []);

    return (
        <div className={styles.Container}>
            <div className={styles.HeadContainer}>
                <h3>{title} Albums</h3>
                <span onClick={() => setIsShow(!isShow)}>
                    {isShow ? "Collapse" : "Show All"}
                </span>
            </div>
            {isShow ? (
                <div className={styles.ContentContainer}>
                    {data?.map((item) => (
                        <Card data={item} />
                    ))}
                </div>
            ) : (
                <Carousel
                    data={data}
                    renderComponent={(data) => <Card data={data} />}
                />
            )}
        </div>
    );
}

export default Section;
