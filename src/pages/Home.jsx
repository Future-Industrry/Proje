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
            <Link className="z-30 flex items-center gap-2 bg-gradient-to-r hover:scale-95 duration-300 opacity-0 fadeInAnimation2 from-[#ffd700] to-[#ff8c00] text-white px-[3rem] py-2 rounded-full mt-3 cursor-pointer ">
              پروجه رو بشناس
              <BsStars />
            </Link>
            <IoArrowDownCircle className="absolute bottom-5 text-[2.5rem] cursor-pointer hover:translate-y-[.5rem] duration-300 opacity-0 fadeInAnimation" />
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

        {/* <BsCashCoin /> */}

        {/* <BsDiagram3 /> */}

        {/* <BsFileEarmarkCode /> */}

        {/* section 1 */}
        {/* section 2 */}
        {/* section 3 */}
        {/* section 4 */}
        {/* section 5 */}
      </div>
    </>
  );
}
