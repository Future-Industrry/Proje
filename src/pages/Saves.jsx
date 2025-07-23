import React, { useState, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import { BsBookmarkFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Saves() {
  let [isOpen, setIsOpen] = useState(0);
  let [savedItems, setSavedItems] = useState([
    { id: 1, name: "001", discripthion: "text", image: "/images/proje1.png" },
  ]);
  let navigate = useNavigate();

  return (
    <>
      {savedItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-[100px] min-h-[70vh] text-center p-[40px_20px]">
          <div className="flex flex-col items-center gap-[20px]">
            <FiPlus className="mb-13 text-[80px] text-[#bfbfbf] transition duration-300 ease-in-out" />
            <p>شما هنوز هیچ پروژه ای ذخیره نکرده‌اید !</p>
          </div>
        </div>
      ) : (
        <div>
          <div className="justify-start mb-4 mt-[10px]">
            <button className="flex items-right gap-2 bg-orange-300 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-orange-700 transition duration-300 mr-[calc(38px-0.8rem)]">
              <BsBookmarkFill className="text-lg" />
              ذخیره‌شده‌ها
            </button>
          </div>

          <hr className="mb-2 pt-2 pb-6" />
          <ul className="grid px-[20px] gap-[50px] text-right list-none grid-cols-3 max-[768px]:grid-cols-2 max-[768px]:gap-[10px] dark:[&>li]:bg-[#1a1a1a] dark:[&>li]:text-white">
            {savedItems.map((item, index) => (
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
                  <button
                    className="absolute top-[10px] left-[10px]
                          bg-[#9f9f9f] text-white border-none rounded-full
                          px-[10px] py-[6px] text-[18px] z-[10] cursor-pointer
                          transition duration-300 ease-in-out hover:bg-black/80"
                  >
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
      )}
    </>
  );
}
