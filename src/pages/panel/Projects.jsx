import React, { useState, useEffect } from 'react'
import SideBar from '../../components/SideBar';
import TopBar from '../../components/TopBar';
import { BsSun, BsMoon } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
import { BsBookmarkFill } from "react-icons/bs";


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
            {/*کداتو اینجا بزن*/}
      <div className="justify-start mb-4 mt-[10px]">
        <button className="flex items-right gap-2 bg-orange-300 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-orange-700 transition duration-300 mr-[calc(38px-0.8rem)]">
          <BsBookmarkFill className="text-lg" />
          ذخیره‌شده‌ها
        </button>
      </div>

      <hr className="mb-2 pt-2 pb-6" />

      <ul className="grid px-[20px] gap-[50px] text-right list-none grid-cols-3 max-[768px]:grid-cols-2 max-[768px]:gap-[10px] dark:[&>li]:bg-[#1a1a1a] dark:[&>li]:text-white">
        {Data.map((item, index) => (
          <li
            className="bg-white rounded-[16px] transition-all duration-300 ease-in-out hover:-translate-y-[5px]
                       max-[768px]:aspect-square p-0 max-[768px]:mx-2"
            key={index}
          >
            <div className="p-[10px] relative rounded-[18px] bg-gray-300">
              <img
                src={item.image}
                alt="product"
                className="w-full h-[200px] rounded-[20px] object-cover max-[768px]:h-[140px]"
              />
              <button className="absolute top-[10px] left-[10px]
                bg-[#9f9f9f] text-white border-none rounded-full
                px-[10px] py-[6px] text-[18px] z-[10] cursor-pointer
                transition duration-300 ease-in-out hover:bg-black/80">
                ...
              </button>
            </div>
            <h3 className="pr-10 font-[900px] text-[30px] max-[768px]:text-[16px]">
              {item.name} و {item.discripthion}
            </h3>
            <h4 className="pr-10 max-[768px]:text-[13px]">{item.type}</h4>
          </li>
        ))}
      </ul>
          </div>
        </div>
      </div>
    </>
  );
}
