import React from "react";

// import{ useRef, useState } from "react";
// Import Swiper React components
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
          <div className="">
            <div className="flex items-center flex-col-reverse lg:flex-row gap-5 border-b-2 border-zinc-300 pb-3 mb-3 ">
              <div className="flex-1/3">
                <div className="flex items-center gap-3">
                  <p className="bg-primary text-white px-2.5 py-1.5 text-[.6rem] rounded-md ">
                    توسعه دهنده
                  </p>
                  <p className="text-zinc-500 text-[.8rem] ">8 اردیبهشت 1404</p>
                </div>
                <Link className="text-[18px] mt-2 inline-block ">
                  یادگیری ماشین چیست؟ همه آن چه باید درباره آن بدانید{" "}
                </Link>
                <p className="text-[16px] text-zinc-500 mt-2 line-clamp-2">
                  تا به حال به این فکر کرده‌اید که اینستاگرام چطور همیشه افرادی
                  را که در دنیای واقعی می‌شناسید، برای دنبال
                </p>
                <div className="flex items-center gap-3 text-[.9rem] text-zinc-500 mt-10">
                  <div className="flex items-center gap-1.5 ">
                    <IoTimeOutline />
                    <p>زمان مطالعه: 21 دقیقه</p>
                  </div>
                  <span> | </span>
                  <div className="flex items-center gap-1.5 ">
                    <FiEye />
                    <p>666</p>
                  </div>
                </div>
              </div>
              <div className="flex-1/12">
                <img src="/images/article6.png" alt="" className="rounded-xl" />
              </div>
            </div>
            <div className="flex items-center flex-col-reverse lg:flex-row gap-5 border-b-2 border-zinc-300 pb-3 mb-3 ">
              <div className="flex-1/3">
                <div className="flex items-center gap-3">
                  <p className="bg-primary text-white px-2.5 py-1.5 text-[.6rem] rounded-md ">
                    توسعه دهنده
                  </p>
                  <p className="text-zinc-500 text-[.8rem] ">8 اردیبهشت 1404</p>
                </div>
                <Link className="text-[18px] mt-2 inline-block ">
                  یادگیری ماشین چیست؟ همه آن چه باید درباره آن بدانید{" "}
                </Link>
                <p className="text-[16px] text-zinc-500 mt-2 line-clamp-2">
                  تا به حال به این فکر کرده‌اید که اینستاگرام چطور همیشه افرادی
                  را که در دنیای واقعی می‌شناسید، برای دنبال
                </p>
                <div className="flex items-center gap-3 text-[.9rem] text-zinc-500 mt-10">
                  <div className="flex items-center gap-1.5 ">
                    <IoTimeOutline />
                    <p>زمان مطالعه: 21 دقیقه</p>
                  </div>
                  <span> | </span>
                  <div className="flex items-center gap-1.5 ">
                    <FiEye />
                    <p>666</p>
                  </div>
                </div>
              </div>
              <div className="flex-1/12">
                <img src="/images/article4.png" alt="" className="rounded-xl" />
              </div>
            </div>
            <div className="flex items-center flex-col-reverse lg:flex-row gap-5 border-b-2 border-zinc-300 pb-3 mb-3 ">
              <div className="flex-1/3">
                <div className="flex items-center gap-3">
                  <p className="bg-primary text-white px-2.5 py-1.5 text-[.6rem] rounded-md ">
                    توسعه دهنده
                  </p>
                  <p className="text-zinc-500 text-[.8rem] ">8 اردیبهشت 1404</p>
                </div>
                <Link className="text-[18px] mt-2 inline-block ">
                  یادگیری ماشین چیست؟ همه آن چه باید درباره آن بدانید{" "}
                </Link>
                <p className="text-[16px] text-zinc-500 mt-2 line-clamp-2">
                  تا به حال به این فکر کرده‌اید که اینستاگرام چطور همیشه افرادی
                  را که در دنیای واقعی می‌شناسید، برای دنبال
                </p>
                <div className="flex items-center gap-3 text-[.9rem] text-zinc-500 mt-10">
                  <div className="flex items-center gap-1.5 ">
                    <IoTimeOutline />
                    <p>زمان مطالعه: 21 دقیقه</p>
                  </div>
                  <span> | </span>
                  <div className="flex items-center gap-1.5 ">
                    <FiEye />
                    <p>666</p>
                  </div>
                </div>
              </div>
              <div className="flex-1/12">
                <img src="/images/article5.png" alt="" className="rounded-xl" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between my-7 ">
          <p className="text-[1.3rem] mb-3 ">هوش مصنوعی</p>
          <Link className="flex items-center gap-1">
            <p className="text-[.8rem]"> مشاهده بیشتر</p> <GoArrowLeft />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-7 ">
          <div className="flex items-center flex-col-reverse gap-5 shadow-md rounded-2xl pb-3 mb-3 ">
            <div className="flex-1/3 p-2">
              <div className="flex items-center gap-3">
                <p className="bg-primary text-white px-2.5 py-1.5 text-[.6rem] rounded-md ">
                  توسعه دهنده
                </p>
                <p className="text-zinc-500 text-[.8rem] ">8 اردیبهشت 1404</p>
              </div>
              <Link className="text-[18px] mt-2 inline-block ">
                یادگیری ماشین چیست؟ همه آن چه باید درباره آن بدانید{" "}
              </Link>
              <p className="text-[16px] text-zinc-500 mt-2 line-clamp-2">
                تا به حال به این فکر کرده‌اید که اینستاگرام چطور همیشه افرادی را
                که در دنیای واقعی می‌شناسید، برای دنبال
              </p>
              <div className="flex items-center gap-3 text-[.9rem] text-zinc-500 mt-10">
                <div className="flex items-center gap-1.5 ">
                  <IoTimeOutline />
                  <p>زمان مطالعه: 21 دقیقه</p>
                </div>
                <span> | </span>
                <div className="flex items-center gap-1.5 ">
                  <FiEye />
                  <p>666</p>
                </div>
              </div>
            </div>
            <div className="flex-1/12">
              <img src="/images/article6.png" alt="" className="rounded-xl" />
            </div>
          </div>
          <div className="flex items-center flex-col-reverse gap-5 shadow-md rounded-2xl pb-3 mb-3 ">
            <div className="flex-1/3 p-2">
              <div className="flex items-center gap-3">
                <p className="bg-primary text-white px-2.5 py-1.5 text-[.6rem] rounded-md ">
                  توسعه دهنده
                </p>
                <p className="text-zinc-500 text-[.8rem] ">8 اردیبهشت 1404</p>
              </div>
              <Link className="text-[18px] mt-2 inline-block ">
                یادگیری ماشین چیست؟ همه آن چه باید درباره آن بدانید{" "}
              </Link>
              <p className="text-[16px] text-zinc-500 mt-2 line-clamp-2">
                تا به حال به این فکر کرده‌اید که اینستاگرام چطور همیشه افرادی را
                که در دنیای واقعی می‌شناسید، برای دنبال
              </p>
              <div className="flex items-center gap-3 text-[.9rem] text-zinc-500 mt-10">
                <div className="flex items-center gap-1.5 ">
                  <IoTimeOutline />
                  <p>زمان مطالعه: 21 دقیقه</p>
                </div>
                <span> | </span>
                <div className="flex items-center gap-1.5 ">
                  <FiEye />
                  <p>666</p>
                </div>
              </div>
            </div>
            <div className="flex-1/12">
              <img src="/images/article6.png" alt="" className="rounded-xl" />
            </div>
          </div>
        </div>
      </div>
      {/* finish */}
    </div>
  );
}
