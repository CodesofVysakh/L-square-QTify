import React, { useEffect, useState } from "react";
import { ReactComponent as RightArrow } from "../../../assets/right.svg";
import styles from "./CarouselRightNavigation.module.css";
import { useSwiper } from "swiper/react";

function CarouselRightNavigation() {
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(swiper.isEnd);
    useEffect(() => {
        swiper.on("slideChange", function () {
			console.log(swiper,"swiper from right")
            setIsEnd(swiper.isEnd);
        });
    }, [swiper]);
    return (
        <div className={styles.rightNavigation}>
            {!isEnd && <RightArrow onClick={() => {
				swiper.slideNext();
				// setIsEnd(swiper.isEnd);
			}} />}
        </div>
    );
}

export default CarouselRightNavigation;
