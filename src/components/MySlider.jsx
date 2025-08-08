import React from "react"
import banner from '../assets/images/banner-03.png'
import banner1 from '../assets/images/banner-06.png'
import banner2 from '../assets/images/projeimg.png'
import { Swiper, SwiperSlide } from "swiper/vue"
import { Navigation, Pagination, Autoplay } from "swiper/modules"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function MySlider() {
    return (
        <div className="w-full max-w-md mx-auto my-10">
            <Swiper modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPreView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}>
                <SwiperSlide>
                    <img src={banner} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner2} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}