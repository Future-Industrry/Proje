import React, { useState, useEffect } from "react";
import SideBar from "../../components/SideBar";
import TopBar from "../../components/TopBar";
import { BsSun, BsMoon } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { BsBookmarkFill } from "react-icons/bs";

import projeimg from "/images/projeimg.png";
import { AiOutlinePlus } from "react-icons/ai";
import { SiCodecrafters } from "react-icons/si";
import { CiCirclePlus } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { BiEditAlt } from "react-icons/bi";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function Projects() {
  const [isOpen, setIsOpen] = useState(1);
  const navigate = useNavigate();

  return (
    <>
      <div className="flex *:h-[100vh] dark:text-white text-black bg-white dark:bg-dark">
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className={`${isOpen?"w-[100%] lg:w-[80%] xl:w-[83%] ":"w-[100%]"} `}>
          <TopBar isOpen={isOpen} setIsOpen={setIsOpen} />
          <div className="">
            <div className="p-4 space-y-6 rounded-xl w-auto">
              {/* پروژه های متن باز */}
              <div className="border-2 border-[#EEEBEB] dark:border-[#1B202C] dark:bg-[#1B202C] shadow-xl shadow-zinc-200/50 rounded-xl dark:shadow-none border-solid">
                <div className="bg-[#EEEBEB] dark:bg-[#333a4b] p-4 flex justify-between items-center  border-solid">
                  <div className="flex gap-2 items-center">
                    {" "}
                    <FaGithub className="sm:text-[14px] lg:text-[30px] md:text-[25px] dark:text-[#ffff]" />
                    <span className="font-bold dark:text-[#ffff] sm:text-[.9rem]  lg:text-[1.3rem] md:text-[1rem] text-black">
                      پروژه های متن باز{" "}
                    </span>
                  </div>

                  <button className="flex items-center gap-1 md:gap-2 hover:duration-300  hover:bg-[#08a5de] bg-[#0AADE9] cursor-pointer text-white text-[10px] lg:text-[1rem] md:text-[14px] leading-7 font-bold py-1 px-3 rounded-[8px]">
                    <CiCirclePlus className="text-[18px] lg:text-[30px] md:text-[25px]" />
                    افزودن
                  </button>
                </div>
                <div className="flex justify-center items-center flex-col rounded-xl my-10">
                  <AiOutlinePlus className="md:text-[70px] lg:text-[50px] text-[40px] text-[#999999]" />
                  <span className="text-[#999999] leading-7 font-[700] sm:text-[.9rem] lg:text-[1.2rem] md:text-xl">
                    موردی وجود ندارد
                  </span>
                </div>
              </div>

              {/* پروژه های دیگر */}
              <div className="border-2 border-[#EEEBEB]  dark:border-[#1B202C] dark:bg-[#1B202C] border-solid shadow-xl shadow-zinc-200/50 rounded-xl dark:shadow-none mt-6">
                <div className="bg-[#EEEBEB] dark:bg-[#333a4b] p-4 flex justify-between items-center ">
                  <div className="flex gap-2 items-center">
                    {" "}
                    <SiCodecrafters className="sm:text-[14px] lg:text-[30px] md:text-[25px] dark:text-[#ffff]" />
                    <span className="font-bold sm:text-[.9rem]  lg:text-[1.3rem] md:text-[1rem] dark:text-[#ffff] text-black">
                      پروژه های دیگر
                    </span>
                  </div>

                  <button className="flex items-center gap-1 md:gap-2 hover:duration-300 hover:bg-[#08a5de] bg-[#0AADE9] text-white cursor-pointer text-[10px] lg:text-[1rem] md:text-[14px] leading-7 font-bold py-1 px-3 rounded-[8px]">
                    <CiCirclePlus className="text-[18px] lg:text-[30px] md:text-[25px]" />
                    افزودن
                  </button>
                </div>
                <div className="flex items-center gap-4 p-4">
                  <img
                    src={projeimg}
                    alt="طراحی وبسایت رستوران"
                    className="h-[83px] w-[83px] md:w-[165px] md:h-[165px] rounded-xl object-cover"
                  />
                  <div className="space-y-2 md:space-y-8">
                    <h2 className="font-bold sm:text-[.8rem] lg:text-[1.5rem] md:text-xl dark:text-[#FFFFFF]  text-black">
                      طراحی وبسایت رستوران
                    </h2>
                    <p className="text-[#999999] font-medium sm:text-[.7rem] lg:text-[1.3rem] md:text-[1rem]">
                      تاریخ انتشار : 1404/01
                    </p>
                    <div className="flex gap-1 md:gap-4">
                      <span className="bg-[#DADADA] dark:bg-[#323232] text-black dark:text-[#FFFFFF] font-medium  text-[9px] md:text-sm px-3 py-1 rounded-[8px]">
                        Wordpress
                      </span>
                      <span className="bg-[#DADADA] dark:bg-[#323232] text-black dark:text-[#FFFFFF] font-medium  text-[9px] md:text-sm  px-3 py-1 rounded-[8px]">
                        UI/UX
                      </span>
                      <span className="bg-[#DADADA] dark:bg-[#323232] text-black dark:text-[#FFFFFF]  font-medium text-[9px] md:text-sm px-3 py-1 rounded-[8px]">
                        Figma
                      </span>
                    </div>
                  </div>
                  <div className="mr-auto mb-auto flex gap-2">
                    <button className=" text-[#8E8E8E] hover:text-gray-700 cursor-pointer ">
                      <BiEditAlt className="sm:text-[18px] lg:text-[32px] md:text-[30px]" />
                    </button>
                    <button className="text-red-500 cursor-pointer hover:text-red-700">
                      <IoIosCloseCircleOutline className="sm:text-[18px] lg:text-[32px] md:text-[30px] text" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
