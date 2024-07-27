import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Carousel = ({ data, renderComponent }) => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={7}
      modules={[Navigation]}
      navigation
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data?.map((ele, idx) => (
        <SwiperSlide key={idx}>{renderComponent(ele)}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
