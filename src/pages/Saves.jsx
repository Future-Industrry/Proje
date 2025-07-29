import React, { useState, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import { BsBookmarkFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { FaRegBookmark } from "react-icons/fa";

export default function Saves() {
  let [isOpen, setIsOpen] = useState(0);
  let [savedItems, setSavedItems] = useState([
    { id: 1, name: "001", discripthion: "text", image: "/images/proje1.png" },
  ]);
  let navigate = useNavigate();

  return (
    <div className="bg-white dark:bg-dark ">
    <div className="h-screen container mx-auto">
      {savedItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-screen text-center ">
          <div className="flex flex-col items-center gap-[20px] *:text-white">
            <FiPlus className="text-[80px]" />
            <p>شما هنوز هیچ پروژه ای ذخیره نکرده‌اید !</p>
          </div>
        </div>
      ) : (
        <div>
          <div className="justify-start py-3 mb-1">
            <button className="flex items-right gap-2 dark:text-white text-black px-4 py-2">
              <FaRegBookmark className="text-lg" />
              ذخیره‌شده‌ها
            </button>
          </div>

          <hr className="dark:text-white/50 text-black p-3" />
          <ul className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-2 p-3">
            {savedItems.map((item, index) => (
              <li className="space-y-3 shadow-xl shadow-zinc-200/50 dark:shadow-none dark:bg-white/3 p-3 rounded-lg">
                <img src="/images/article1.png" alt="" className="w-full h-50 object-cover  rounded-md" />
                <h1 className="font-IranYekanBold dark:text-white text-black">عنوان پروژه</h1>
                <p className="text-sm text-second-light line-clamp-3">
                  توضیحات کامل تر درباره پروژه توضیحات کامل تر درباره پروژه
                  توضیحات کامل تر{" "}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </div>
  );
}
