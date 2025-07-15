import React from "react";

// import{ useRef, useState } from "react";
// import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { IoTimeOutline } from "react-icons/io5";
import { FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import ArticleItem from "../components/ArticleItem";

export default function Weblog() {
  return (
    <div>
      {/* header */}
      <div className="container mx-auto">
        <div className="flex items-center justify-between mx-3">
          <p className="text-[1.3rem] mb-3 ">تکنولوژی</p>
          <Link className="flex items-center gap-1">
            <p className="text-[.8rem]"> مشاهده بیشتر</p> <GoArrowLeft />
          </Link>
        </div>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-7 w-full p-3 ">
          <div className="grid grid-cols-1 w-full gap-3 h-[31rem] md:h-[51rem] lg:h-[41rem]">
            <Swiper
              slidesPerView={1}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper w-full overflow-hidden h-[15rem] lg:h-[20rem] md:h-[25rem] rounded-2xl **:rounded-2xl"
            >
              <SwiperSlide className="h-full w-full *:h-full ">
                <img src="/images/article8.png" alt="" className="w-full" />
              </SwiperSlide>
              <SwiperSlide className="h-full w-full *:h-full ">
                <img src="/images/article8.png" alt="" className="w-full" />
              </SwiperSlide>
              <SwiperSlide className="h-full w-full *:h-full ">
                <img src="/images/article8.png" alt="" className="w-full" />
              </SwiperSlide>
              <SwiperSlide className="h-full w-full *:h-full ">
                <img src="/images/article8.png" alt="" className="w-full" />
              </SwiperSlide>
              <SwiperSlide className="h-full w-full *:h-full ">
                <img src="/images/article8.png" alt="" className="w-full" />
              </SwiperSlide>
            </Swiper>
            <Swiper
              slidesPerView={1}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper w-full overflow-hidden h-[15rem] lg:h-[20rem] md:h-[25rem] rounded-2xl **:rounded-2xl"
            >
              <SwiperSlide className="h-full w-full *:h-full ">
                <img src="/images/article7.png" alt="" className="w-full" />
              </SwiperSlide>
              <SwiperSlide className="h-full w-full *:h-full ">
                <img src="/images/article7.png" alt="" className="w-full" />
              </SwiperSlide>
              <SwiperSlide className="h-full w-full *:h-full ">
                <img src="/images/article7.png" alt="" className="w-full" />
              </SwiperSlide>
              <SwiperSlide className="h-full w-full *:h-full ">
                <img src="/images/article7.png" alt="" className="w-full" />
              </SwiperSlide>
              <SwiperSlide className="h-full w-full *:h-full ">
                <img src="/images/article7.png" alt="" className="w-full" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="*:flex-col-reverse *:lg:flex-row *:px-2 ">
           <ArticleItem/>
           <ArticleItem/>
           <ArticleItem/>
          </div>
        </div>

        <div className="flex items-center justify-between mt-7 mb-2 px-3">
          <p className="text-[1.3rem] mb-3 ">هوش مصنوعی</p>
          <Link className="flex items-center gap-1">
            <p className="text-[.8rem]"> مشاهده بیشتر</p> <GoArrowLeft />
          </Link>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-7 *:px-2">
          <ArticleItem/>
          <ArticleItem/>
        </div>
      </div>
      {/* finish */}
    </div>
  );
}
