import React from "react";
import styles from "./Card.module.css";
import { Chip, Tooltip } from "@mui/material";

function Card({ data, type }) {
    return (
        <Tooltip title={data.songs && `${data?.songs?.length} songs`} placement="top">
            <div className={styles.MainContainer}>
                <div className={styles.Card}>
                    <div className={styles.Image}>
                        <img src={data?.image} alt="Album Image" />
                    </div>
                    <div className={styles.Follow}>
                        <Chip
                            label={
                                type == "album"
                                    ? `${data?.follows} Follows`
                                    : `${data?.likes} Likes`
                            }
                            sx={{ backgroundColor: "#000", color: "#fff" }}
                        />
                    </div>
                </div>
                <div>{data?.title}</div>
            </div>
        </Tooltip>
    );
}

export default Card;
