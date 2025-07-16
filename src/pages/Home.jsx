import {
  BsBackpack2,
  BsBank,
  BsCashCoin,
  BsClipboardData,
  BsDiagram3,
  BsFileEarmarkCode,
  BsHeartPulse,
  BsRocketTakeoff,
  BsShieldCheck,
  BsStars,
} from "react-icons/bs";
import { IoArrowDownCircle, IoCodeSlashOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

import "aos/dist/aos.css";
import Aos from "aos";
import { LiaUserSolid } from "react-icons/lia";

export default function Home() {
  Aos.init();

  return (
    <>
      <div className="">
        {/* hiro */}
        <div className="relative h-[100vh]">
          <div className="absolute top-0 right-0 h-full w-full flex items-center justify-center overflow-hidden  ">
            <span className="bg-[#ff9900]/40 size-[20rem] rounded-full absolute right-[-2rem] bottom-[-5rem]  "></span>
            <span className="bg-[#ff6347]/40 size-[30rem] rounded-full absolute left-[15rem]  bottom-[-10rem] "></span>
            <span className="bg-[#ffd700]/40 size-[11rem] rounded-full absolute right-[1rem]  top-[-5rem] "></span>
            <span className="bg-[#32cd32]/40 size-[11rem] rounded-full absolute left-[-1rem]  top-[5rem] "></span>
          </div>
          <div className="backdrop-blur-3xl h-full flex items-center justify-center flex-col  ">
            <div className="flex items-center justify-between h-[5rem] z-50 w-full fixed top-0 py-3 px-10 ">
              <img
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="1700"
                src="/images/logo.png"
                className="size-[4rem] mix-blend-multiply "
                alt=""
              />
              <ul className="flex items-center justify-center gap-1 ">
                <li
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="2000"
                >
                  <NavLink className="px-5" to="/">
                    خانه
                  </NavLink>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="2100"
                >
                  <NavLink className="px-5" to="/projects">
                    پروژه ها
                  </NavLink>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="2200"
                >
                  <NavLink className="px-5" to="/teams">
                    تیم ها
                  </NavLink>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="2300"
                >
                  <NavLink className="px-5" to="/support">
                    پشتیبانی
                  </NavLink>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="2400"
                >
                  <NavLink className="px-5" to="/weblog">
                    مقالات
                  </NavLink>
                </li>
              </ul>
              <Link
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="2500"
                className="flex items-center gap-1 bg-primary hover:bg-primaryLight hover:text-primary duration-300 px-4 py-1 text-[.9rem] rounded-lg text-white"
              >
                <LiaUserSolid className="size-[1.2rem]" />
                عضویت
              </Link>
            </div>

            <div className="absolute h-full w-full *:text[3rem]  ">
              <BsBackpack2
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1600"
                className="bg-white shadow-xl p-3 size-[5rem] rounded-2xl shadow-zinc-400/40 text-[3rem] absolute top-[10rem] right-[15rem] rotate-12  "
              />
              <BsClipboardData
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1800"
                className=" bg-white shadow-xl p-3 size-[4rem] rounded-2xl shadow-zinc-400/40 text-[3rem] absolute top-[30rem] right-[5rem] rotate-12"
              />
              <BsHeartPulse
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="2000"
                className=" bg-white shadow-xl p-3 size-[4rem] rounded-2xl shadow-zinc-400/40 text-[3rem] absolute top-[35rem] right-[25rem] rotate-12"
              />

              <BsRocketTakeoff
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1000"
                className=" bg-white shadow-xl p-3 size-[4rem] rounded-2xl shadow-zinc-400/40 text-[3rem] absolute top-[10rem] left-[15rem] rotate-12"
              />
              <BsShieldCheck
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1200"
                className=" bg-white shadow-xl p-3 size-[4.5rem] rounded-2xl shadow-zinc-400/40 text-[3rem] absolute top-[30rem] left-[5rem] rotate-12"
              />
              <IoCodeSlashOutline
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1400"
                className=" bg-white shadow-xl p-3 size-[3.5rem] rounded-2xl shadow-zinc-400/40 text-[3rem] absolute top-[35rem] left-[25rem] rotate-12"
              />
            </div>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="Morabba bg-linear-to-r from-[#ffa500] to-[#ff6347] outline-[.1rem] text-white px-[1.5rem] py-[.2rem] text-[.9rem] rounded-full "
            >
              پروجه
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              className="Morabba mt-4 text-[1.5rem] text-zinc-600  "
            >
              {" "}
              با پروجه، پروژن تو جیبته !
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
              className="text-[3rem] Morabba w-[45rem] text-center "
            >
              پروجه، منبع بزرگی از انواع پروژه های مختلف دانشجو های خبره دانشگاه
              سجاد{" "}
            </p>
            <a
              href="#intro"
              className="z-30 flex items-center gap-2 bg-gradient-to-r hover:scale-95 duration-300 opacity-0 fadeInAnimation2 from-[#ffd700] to-[#ff8c00] text-white px-[3rem] py-2 rounded-full mt-3 cursor-pointer "
            >
              پروجه رو بشناس
              <BsStars />
            </a>
            <a
              href="#intro"
              className="absolute bottom-5 text-[2.5rem] cursor-pointer hover:translate-y-[.5rem] duration-300 opacity-0 fadeInAnimation"
            >
              <IoArrowDownCircle />
            </a>
          </div>
        </div>

        {/* section 1 */}
        <div
          className="flex items-center justify-between h-screen mt-10 w-[90%] m-auto "
          id="intro"
        >
          <div className="h-[100%] flex items-start justify-center gap-3 flex-col w-[50%] ">
            <p className="text-[3rem]">
              <span className="text-primary">پ</span>روجه
            </p>
            <p className="text-zinc-500 w-[35rem] text-[1.1rem] ">
              پروژه هامون تایید شده توسط اساتید و متخصصین شناخته شده ان، ما
              اینجا پروژه بدون تاییدیه رسمی و پشتیبانی نداریم !
            </p>
            <Link className="flex items-center gap-2 bg-gradient-to-r hover:scale-95 duration-300 from-[#ffd700] to-[#ff8c00] text-white px-[3rem] py-2 rounded-full mt-3 cursor-pointer ">
              صفحه پروژه ها
            </Link>
          </div>
          <div className="h-[100%] flex items-center w-[50%] ">
            <img
              src="/images/team checklist-rafiki.svg"
              alt=""
              className="siza-[100%]"
            />
          </div>
        </div>

        {/* section 2 */}
        <div className="flex items-center justify-between h-screen mt-10 w-[90%] m-auto ">
          <div className="h-[100%] flex items-start justify-center gap-3 flex-col w-[50%] ">
            <p className="text-[3rem]">
              پ<span className="text-primary">ر</span>وجه
            </p>
            <p className="text-zinc-500 w-[35rem] text-[1.1rem] ">
              راحت ترین راه پیدا کردن تیم های حرفه ای، فقط موضوع پروژه تو بگو تا
              ما بهت یه تیم حرفه ای معرفی کنیم !
            </p>
            <Link className="flex items-center gap-2 bg-gradient-to-r hover:scale-95 duration-300 from-[#ffd700] to-[#ff8c00] text-white px-[3rem] py-2 rounded-full mt-3 cursor-pointer ">
              ارتباط با ما
            </Link>
          </div>
          <div className="h-[100%] flex items-center w-[50%] ">
            <img
              src="/images/New team members-rafiki.svg"
              alt=""
              className="siza-[100%]"
            />
          </div>
        </div>

        {/* section 3 */}
        <div className="flex items-center justify-between h-screen mt-10 w-[90%] m-auto ">
          <div className="h-[100%] flex items-start justify-center gap-3 flex-col w-[50%] ">
            <p className="text-[3rem]">
              پر<span className="text-primary">و</span>جه
            </p>
            <p className="text-zinc-500 w-[35rem] text-[1.1rem] ">
              واو به واو رزومه ها واقعین، اینجا تنها جاییه که رزومه تمام توسعه
              دهنده هاش توسط اساتید و متخصصین شناخته شده، صحت سنجی میشه. پس با
              خیال راحت پروژه هاتو بهشون بسپار{" "}!
            </p>
            <Link className="flex items-center gap-2 bg-gradient-to-r hover:scale-95 duration-300 from-[#ffd700] to-[#ff8c00] text-white px-[3rem] py-2 rounded-full mt-3 cursor-pointer ">
              درباره ما
            </Link>
          </div>
          <div className="h-[100%] flex items-center w-[50%] ">
            <img
              src="/images/Profile data-cuate.svg"
              alt=""
              className="siza-[100%]"
            />
          </div>
        </div>

        {/* section 4 */}
        <div className="flex items-center justify-between h-screen mt-10 w-[90%] m-auto ">
          <div className="h-[100%] flex items-start justify-center gap-3 flex-col w-[50%] ">
            <p className="text-[3rem]">
              پرو<span className="text-primary">ج</span>ه
            </p>
            <p className="text-zinc-500 w-[35rem] text-[1.1rem] ">
              جایی که همه چی شفافه، حتی جزئیات پیاده سازی پروژه ها !{" "}
            </p>
            <Link className="flex items-center gap-2 bg-gradient-to-r hover:scale-95 duration-300 from-[#ffd700] to-[#ff8c00] text-white px-[3rem] py-2 rounded-full mt-3 cursor-pointer ">
              محصولات ما
            </Link>
          </div>
          <div className="h-[100%] flex items-center w-[50%] ">
            <img
              src="/images/Projections-rafiki.svg"
              alt=""
              className="siza-[100%]"
            />
          </div>
        </div>

        {/* section 5 */}
        <div className="flex items-center justify-between h-screen mt-10 w-[90%] m-auto ">
          <div className="h-[100%] flex items-start justify-center gap-3 flex-col w-[50%] ">
            <p className="text-[3rem]">
              پروج<span className="text-primary">ه</span>
            </p>
            <p className="text-zinc-500 w-[35rem] text-[1.1rem] ">
              همه چی اینجا محیاست تا ایده‌ت رو به واقعیت برسونی با پروجه پروژت
              تو جیبته !
            </p>
            <Link className="flex items-center gap-2 bg-gradient-to-r hover:scale-95 duration-300 from-[#ffd700] to-[#ff8c00] text-white px-[3rem] py-2 rounded-full mt-3 cursor-pointer ">
              معرفی تیم
            </Link>
          </div>
          <div className="h-[100%] flex items-center w-[50%] ">
            <img
              src="/images/Social ideas-pana.svg"
              alt=""
              className="siza-[100%]"
            />
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}
