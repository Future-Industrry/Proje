import React from "react";
import { FiEye } from "react-icons/fi";
import { IoTimeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function ArticleItem() {
  return (
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
        <p className="text-[14px] text-zinc-500 mt-2 line-clamp-2">
          تا به حال به این فکر کرده‌اید که اینستاگرام چطور همیشه افرادی را که در
          دنیای واقعی می‌شناسید، برای دنبال
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
  );
}
