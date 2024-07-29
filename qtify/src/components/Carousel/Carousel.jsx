import { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Carousel.module.css";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";

const Carousel = ({ data, renderComponent }) => {
    const Controls = ({ data }) => {
        const swiper = useSwiper();
        useEffect(() => {
            swiper.slideTo(0);
        }, [data]);
        return <></>;
    };
    return (
        <div className={styles.wrapper}>
            <Swiper
                style={{ padding: "0px 20px" }}
                initialState={0}
                modules={[Navigation]}
                spaceBetween={40}
                slidesPerView={7}
                allowTouchMove
            >
                <Controls data={data} />
                <CarouselLeftNavigation />
                <CarouselRightNavigation />
                {data?.map((ele, idx) => (
                    <SwiperSlide key={idx}>{renderComponent(ele)}</SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;
