import React, { useState, useEffect } from 'react'
import SideBar from '../../components/SideBar';
import TopBar from '../../components/TopBar';
import { BsSun, BsMoon } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
import { BsBookmarkFill } from "react-icons/bs";

import projeimg from "../../assets/images/projeimg.png"
 import { AiOutlinePlus } from "react-icons/ai";
 import { SiCodecrafters } from "react-icons/si";
 import { CiCirclePlus } from "react-icons/ci";
 import { FaGithub } from "react-icons/fa";
 import { BiEditAlt } from "react-icons/bi";
 import { IoIosCloseCircleOutline } from "react-icons/io";


export default function Projects() {
  const [isOpen, setIsOpen] = useState(0);
  const navigate = useNavigate();

  return (
    <>
      <div className="flex *:h-[100vh] ">
       <SideBar isOpen={isOpen} setIsOpen={setIsOpen}/>
        <div className="w-[100%]">
          <div className={`bg-dark/50 w-full absolute ${isOpen ? 'h-full' : "h-[0]"} `} onClick={() => setIsOpen(!isOpen)}></div>
          <TopBar isOpen={isOpen} setIsOpen={setIsOpen}/>
          <div className="p-5">
          
          <div className="p-4 space-y-6 bg-white dark:bg-[#02142C] w-auto">
      {/* پروژه های متن باز */}
      <div className="border-2 border-[#EEEBEB] dark:border-[#1B202C] dark:bg-[#1B202C] border-solid">
          <div className="bg-[#EEEBEB] dark:bg-[#211E1E] p-4 flex justify-between items-center  border-solid">
            <div className="flex gap-2 items-center"> <FaGithub className="text-[14px] md:text-[25px] dark:text-[#ffff]" /><span className="font-bold dark:text-[#ffff]  text-[12px] md:text-xl text-black">پروژه های متن باز </span></div>
       
        <button className="flex items-center gap-2 bg-[#0AADE9] text-white text-[10px] md:text-[16px] leading-7 font-bold py-1 px-3 rounded-[8px]">
        <CiCirclePlus  className="text-[20px] md:text-[30px]" />
          افزودن  
        </button>
      </div>
      <div className="flex justify-center items-center flex-col rounded-xl my-10">
      <AiOutlinePlus className="text-[90px] text-[#999999]" />
        <span className="text-[#999999] leading-7 font-[700] text-[16px] md:text-2xl">موردی وجود ندارد</span>

      </div>
      </div>
    

      {/* پروژه های دیگر */}
      <div className="border-2 border-[#EEEBEB]  dark:border-[#1B202C] dark:bg-[#1B202C] border-solid  mt-6">
      <div className="bg-[#EEEBEB]  dark:bg-[#211E1E] p-4 flex justify-between items-center ">
        <div className="flex gap-2 items-center">   <SiCodecrafters className="text-[14px] md:text-[25px] dark:text-[#ffff]"/><span className="font-bold text-[12px] md:text-xl dark:text-[#ffff] text-black">پروژه های دیگر</span>
        </div>
        
        <button className="flex items-center gap-2 bg-[#0AADE9] text-white text-[10px] md:text-[16px] leading-7 font-bold py-1 px-3 rounded-[8px]">
        <CiCirclePlus  className="text-[20px] md:text-[30px]" />
          افزودن  
        </button>
      </div>
      <div className="flex items-center gap-4 p-4">
        <img
          src={projeimg}
          alt="طراحی وبسایت رستوران"
          className="h-[63px] w-[63px] md:w-[165px] md:h-[165px] rounded-xl object-cover"
        />
        <div className="space-y-2 md:space-y-8">
          <h2 className="font-bold text-[12px] md:text-2xl dark:text-[#FFFFFF]  text-black">طراحی وبسایت رستوران</h2>
          <p className="text-[#999999] font-medium text-[10px] md:text-lg">تاریخ انتشار : 1404/01</p>
          <div className="flex gap-4">
            <span className="bg-[#DADADA] dark:bg-[#323232] text-black dark:text-[#FFFFFF] font-medium  text-[9px] md:text-sm px-3 py-1 rounded-[8px]">Wordpress</span>
            <span className="bg-[#DADADA] dark:bg-[#323232] text-black dark:text-[#FFFFFF] font-medium  text-[9px] md:text-sm  px-3 py-1 rounded-[8px]">UI/UX</span>
            <span className="bg-[#DADADA] dark:bg-[#323232] text-black dark:text-[#FFFFFF]  font-medium text-[9px] md:text-sm px-3 py-1 rounded-[8px]">Figma</span>
          </div>
        </div>
        <div className="mr-auto mb-auto flex gap-2">
          <button className="text-gray-500 hover:text-black"><BiEditAlt  className="text-[12px] md:text-[30px] text-[#8E8E8E]" /></button>
          <button className="text-red-500 hover:text-red-700"><IoIosCloseCircleOutline  className="text-[12px] md:text-[30px] text"/></button>
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
