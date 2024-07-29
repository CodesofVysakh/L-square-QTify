import React from 'react';
import styles from './Card.module.css'
import { Chip } from '@mui/material';

function Card({ data, type }) {
  return (
    <div className={styles.MainContainer}>
        <div className={styles.Card}>
            <div className={styles.Image}>
                <img src={data?.image} alt="Album Image" />
            </div>
            <div className={styles.Follow}>
                <Chip label={type == "album" ? `${data?.follows} Follows` : `${data?.likes} Likes`} sx={{ backgroundColor: "#000", color: "#fff"}}/>
            </div>
        </div>
        <div>
            {data?.title}
        </div>
    </div>
  )
}

export default Card