import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Slider({children}) {
    return (
        <>
            <Swiper
                slidesPerView={12}
                spaceBetween={5}
                scrollbar={{ draggable: true }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {children}
            </Swiper>
        </>
    );
}
