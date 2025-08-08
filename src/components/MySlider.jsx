import React from "react"
import banner from '../assets/images/banner-03.png'
import banner1 from '../assets/images/banner-06.png'
import banner2 from '../assets/images/projeimg.png'
import { Swiper, SwiperSlide } from "swiper/react"
import {  Pagination, Autoplay } from "swiper/modules"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function MySlider() {
    return (
        <div>
            <Swiper modules={[ Pagination, Autoplay]}
                spaceBetween={20}
                slidesPreView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                loop={true}>
                <SwiperSlide>
                    <img src={banner} alt="" className="h-80 w-full rounded-3xl "/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner1} alt="" className="h-80 w-full rounded-3xl"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner2} alt="" className="h-80 w-full rounded-3xl"/>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}